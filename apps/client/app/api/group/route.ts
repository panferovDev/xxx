import { prisma } from '@xxx/prism';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  const groups = await prisma.group.findMany();
  return new Response(JSON.stringify(groups));
}

export async function POST(request: Request): Promise<Response> {
  const data = (await request.json()) as { group: string };
  try {
    const group = await prisma.group.upsert({
      where: { name: data.group },
      update: {},
      create: { name: data.group },
      include: { students: true },
    });
    return new Response(JSON.stringify(group));
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'group add error' }, { status: 500 });
  }
}
