import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import { requireSession, getCurrentWeekDates } from '../../../../../utils';

export async function GET(
  request: NextRequest,
  { params }: { params: { groupid: string; weekoffset: string } },
): Promise<Response> {
  const schedule = (
    await prisma.pairDays.findMany({
      where: {
        dayType: {
          not: 'соло',
        },
      },
    })
  ).reduce<{ [id: number]: string }>((acc, day) => {
    acc[day.id] = day.dayType;
    return acc;
  }, {});

  const dates = getCurrentWeekDates(Number(params.weekoffset), schedule, Number(params.groupid));
  // const chDates = await prisma.schedule.createMany({
  //   data: dates,
  //   skipDuplicates: true,
  // });
  return NextResponse.json(dates, { status: 200 });
}
