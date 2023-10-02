import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import { requireSession, getPairsDays, arrShuffle, generateSubgroups } from '../../../../utils';

export async function GET(
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

  // const pairDates = getPairsDays('2023-09-30', daysShedule).map((date) => ({ day: date }));

  // await prisma.days.createMany({
  //   data: pairDates,
  //   skipDuplicates: true,
  // });

  // const currentDates = await prisma.days.findMany({
  //   where: {
  //     day: {
  //       in: pairDates.map((date) => date.day),
  //     },
  //   },
  // });

  // const dayTypes = schedule.reduce<{ [key: number]: string }>((acc, day) => {
  //   acc[day.dayNumber] = day.dayType;
  //   return acc;
  // }, {});

  // const groupActtivityDaysRaw = currentDates.map((date) => ({
  //   groupId: Number(params.groupid),
  //   dayId: date.id,
  //   type: dayTypes[date.day.getDay()],
  // }));

  // await prisma.groupActivityDays.deleteMany({
  //   where: {
  //     groupId: Number(params.groupid),
  //     dayId: {
  //       in: currentDates.map((date) => date.id),
  //     },
  //   },
  // });

  // await prisma.groupActivityDays.createMany({
  //   data: groupActtivityDaysRaw,
  //   skipDuplicates: true,
  // });

  // const groupActivityDays = await prisma.groupActivityDays.findMany({
  //   where: {
  //     groupId: Number(params.groupid),
  //     dayId: {
  //       in: currentDates.map((date) => date.id),
  //     },
  //   },
  // });

  // await prisma.subgroup.create({
  //   data: {
  //     gadId: groupActivityDays[0].id,
  //     subgrups: [
  //       {
  //         id: 1212121,
  //         pair: [
  //           { id: 1, name: 'Alex' },
  //           { id: 2, name: 'Julia' },
  //         ],
  //       },
  //     ],
  //   },
  // });

  const test = await prisma.subgroup.findFirst();
  return NextResponse.json(test, { status: 200 });
}
