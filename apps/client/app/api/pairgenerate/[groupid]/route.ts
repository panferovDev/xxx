import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import type { Prisma } from '@prisma/client';
import type { StudentType } from '@xxx/types/studentsGroup';
import { requireSession, getPairsDays, generateSubgroups } from '../../../../utils';

export async function POST(
  request: NextRequest,
  { params }: { params: { groupid: string } },
): Promise<Response> {
  const schedule = await prisma.pairDays.findMany({
    where: {
      dayType: {
        not: 'соло',
      },
    },
  });

  const daysShedule = schedule.map((day) => day.dayNumber);

  const students = await prisma.student.findMany({
    where: {
      groupId: Number(params.groupid),
    },
  });

  const pairDates = getPairsDays('2023-09-30', daysShedule).map((date) => ({ day: date }));

  await prisma.days.createMany({
    data: pairDates,
    skipDuplicates: true,
  });

  const currentDates = await prisma.days.findMany({
    where: {
      day: {
        in: pairDates.map((date) => date.day),
      },
    },
  });

  const dayTypes = schedule.reduce<{ [key: number]: string }>((acc, day) => {
    acc[day.dayNumber] = day.dayType;
    return acc;
  }, {});

  const groupActtivityDaysRaw = currentDates.map((date) => ({
    groupId: Number(params.groupid),
    dayId: date.id,
    type: dayTypes[date.day.getDay()],
  }));

  await prisma.groupActivityDays.deleteMany({
    where: {
      groupId: Number(params.groupid),
      dayId: {
        in: currentDates.map((date) => date.id),
      },
    },
  });

  await prisma.groupActivityDays.createMany({
    data: groupActtivityDaysRaw,
    skipDuplicates: true,
  });

  const groupActivityDays = await prisma.groupActivityDays.findMany({
    where: {
      groupId: Number(params.groupid),
      dayId: {
        in: currentDates.map((date) => date.id),
      },
    },
  });

  for await (const day of groupActivityDays) {
    const result = generateSubgroups(day, students);
    await prisma.subgroup.create({
      data: {
        gadId: result.gadId,
        subgrups: result.subgrups,
      },
    });
  }

  return NextResponse.json({ status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { groupid: string } },
): Promise<Response> {
  const pairDays = await prisma.pairDays.findMany({
    where: {
      dayType: {
        not: 'соло',
      },
    },
  });

  const schedule = await prisma.days.findMany({
    include: {
      groupActivityDays: {
        where: {
          groupId: Number(params.groupid),
        },
        include: {
          subgroup: true,
        },
      },
    },
  });

  const weeksAndDays: {
    week: string;
    days: {
      day: string;
      groupActivityDays: ({
        subgroup: {
          id: number;
          gadId: number;
          subgrups: Prisma.JsonValue ;
        }[];
      } & {
        id: number;
        groupId: number;
        dayId: number;
        type: string;
      })[];
      id: number;
    }[];
  }[] = [];

  for (let i = 0; i < pairDays.length; i += 1) {
    weeksAndDays.push({
      week: `Неделя ${i + 1}`,
      days: schedule.splice(0, pairDays.length).map((day) => ({
        ...day,
        day: new Date(day.day).toLocaleDateString('ru-Ru', { weekday: 'long' }),
      })),
    });
  }

  return NextResponse.json({ weeksAndDays: weeksAndDays[2] }, { status: 200 });
}
