import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import type { Prisma } from '@prisma/client';
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

  if (!students.length) {
    return NextResponse.json({}, { status: 404 });
  }

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

  if (schedule.some((day) => day.groupActivityDays.length === 0)) {
    return NextResponse.json({}, { status: 404 });
  }

  const result = schedule.map((day) => ({
    ...day,
    groupActivityDays: {
      ...day.groupActivityDays[0],
      subgroup: day.groupActivityDays[0].subgroup[0],
    },
    day: new Date(day.day).toLocaleDateString('ru-Ru', { weekday: 'long' }),
  }));

  const weeksAndDays: {
    week: string;
    days: {
      groupActivityDays: {
        subgroup: {
          id: number;
          gadId: number;
          subgrups: Prisma.JsonValue;
        };
        id: number;
        groupId: number;
        dayId: number;
        type: string;
      };
      day: string;
      id: number;
    }[];
  }[] = [];

  for (let i = 0; i < pairDays.length; i += 1) {
    weeksAndDays.push({
      week: `Неделя ${i + 1}`,
      days: result.splice(0, pairDays.length),
    });
  }

  return NextResponse.json(weeksAndDays, { status: 200 });
}
