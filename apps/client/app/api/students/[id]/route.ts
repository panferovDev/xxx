import { prisma } from '@xxx/prism';
import { ca } from 'date-fns/locale';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
): Promise<Response> {
  try {
    await prisma.student.delete({ where: { id: Number(params.id) } });
    await prisma.$disconnect();
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'student delete error' }, { status: 500 });
  }
}

export async function PATCH(
  response: NextResponse,
  { params }: { params: { id: string } },
): Promise<Response> {
  const body = (await response.json()) as { updName: string };

  try {
    await prisma.student.update({
      where: { id: Number(params.id) },
      data: { name: body.updName },
    });
    await prisma.$disconnect();
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'student update error' }, { status: 500 });
  }
}

export async function PUT(
  response: NextResponse,
  { params }: { params: { id: string } },
): Promise<Response> {
  const body = (await response.json()) as { to: number };
  try {
    const student = await prisma.student.update({
      where: { id: Number(params.id) },
      data: { groupId: body.to },
    });
    await prisma.$disconnect();
    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'student update error' }, { status: 500 });
  }
}
