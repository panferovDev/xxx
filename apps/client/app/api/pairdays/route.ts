import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import { requireSession } from '../../../utils';

export async function GET(request: NextRequest): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });
  try {
    const days = await prisma.pairDays.findMany({
      orderBy: { id: 'asc' },
    });
    return NextResponse.json(days);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ messge: 'group not found' }, { status: 500 });
  }
}
