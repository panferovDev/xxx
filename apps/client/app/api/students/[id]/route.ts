import { prisma } from '@xxx/prism';
import { NextResponse } from 'next/server';

export async function DELETE(
  response: NextResponse,
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
