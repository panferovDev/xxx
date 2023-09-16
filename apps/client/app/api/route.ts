import type { SeatType } from '@xxx/types/seatsTypes';
import { prisma } from '@xxx/prism';
import { NextResponse } from 'next/server';
import { arrShuffle, requireSession, seatPeople } from '../../utils';

export async function GET(request: Request): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });

  const groups = await prisma.group.findMany();
  return NextResponse.json(groups, { status: 200 });
}

export async function POST(request: Request): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });
  const { students, num } = (await request.json()) as SeatType;
  const shuffled = arrShuffle(students.split('\n'));
  const res = seatPeople(shuffled, +num);
  return NextResponse.json(res, { status: 200 });
}
