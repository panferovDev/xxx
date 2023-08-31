import { prisma } from '@xxx/prism';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: NextResponse,
  { params }: { params: { id: string } },
): Promise<Response> {
  try {
    await prisma.group.delete({ where: { id: Number(params.id) } });
    await prisma.$disconnect();
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'group delete error' }, { status: 500 });
  }
}
