import { prisma } from '@xxx/prism';
import { requireSession } from 'apps/client/utils';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });
  const groups = await prisma.group.findMany();
  return NextResponse.json(groups, { status: 200 });
}

export async function POST(request: Request): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });
  const data = (await request.json()) as { group: string };
  try {
    const group = await prisma.group.upsert({
      where: { name: data.group },
      update: {},
      create: { name: data.group },
      include: { students: true },
    });
    return NextResponse.json(group, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'group add error' }, { status: 500 });
  }
}
