import type { SeatType } from '@xxx/types/seatsTypes';
import { prisma } from '@xxx/prism';
import { arrShuffle, seatPeople } from '../../utils';

export async function GET(request: Request): Promise<Response> {
  const groups = await prisma.group.findMany();
  return new Response(JSON.stringify(groups));
}

export async function POST(request: Request): Promise<Response> {
  const { students, num } = (await request.json()) as SeatType;
  const shuffled = arrShuffle(students.split('\n'));
  const res = seatPeople(shuffled, +num);
  return new Response(JSON.stringify(res));
}
