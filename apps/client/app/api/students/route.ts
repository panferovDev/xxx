import { prisma } from '@xxx/prism';
import type { groupAndStydentsFormType } from '@xxx/types/studentsGroup';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<Response> {
  const data = (await request.json()) as groupAndStydentsFormType;
  const { gId, students } = data;

  const prepStudent = students
    .trim()
    .split('\n')
    .map((student) => ({ name: student, groupId: Number(gId) }));
  try {
    await prisma.student.createMany({
      data: prepStudent,
      skipDuplicates: true,
    });
    const group = await prisma.student.findMany({
      where: {
        groupId: Number(gId),
      },
    });
    return NextResponse.json(group, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messge: 'group add error' }, { status: 500 });
  }
}
