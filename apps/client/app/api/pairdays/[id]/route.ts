import { prisma } from '@xxx/prism';
import { requireSession } from 'apps/client/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });

  try {
    const { dayType } = await request.json();
    await prisma.pairDays.update({
      where: { id: Number(params.id) },
      data: { dayType },
    });
    return NextResponse.json({ dayType, id: params.id }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'day update error' }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
): Promise<Response> {
  if (!params.id || isNaN(Number(params.id))) {
    return NextResponse.json({ messge: 'invalid id' }, { status: 400 });
  }

  const group = await prisma.group.findUnique({
    where: { id: Number(params.id) },
  });

  if (!group) {
    return NextResponse.json({ messge: 'group not found' }, { status: 404 });
  }

  return NextResponse.json(group, { status: 200 });
}
