import type { SeatType } from '@xxx/types/seatsTypes';
import { arrShuffle, seatPeople } from '../../utils';

export async function GET(request: Request): Promise<Response> {
  return new Response('Hello, from API!');
}

export async function POST(request: Request): Promise<Response> {
  const { students, num } = (await request.json()) as SeatType;
  const shuffled = arrShuffle(students.split('\n'));
  const res = seatPeople(shuffled, +num);
  return new Response(JSON.stringify(res));
}
