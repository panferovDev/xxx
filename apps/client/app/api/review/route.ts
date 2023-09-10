import { prisma } from '@xxx/prism';
import type { ReviewSubmitType } from '@xxx/types/studentsGroup';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { requireSession, tableDistribution } from '../../../utils';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });

  const { teachers, days, group } = (await request.json()) as ReviewSubmitType;
  const students = await prisma.student.findMany({
    where: { groupId: group! },
  });

  if (!students) return NextResponse.json({ messge: 'group not found' }, { status: 500 });
  const result = [];
  const studentsPerDay = Math.ceil(students.length / days.length);
  let num = 0;
  while (students.length > 0) {
    const studentsPart = students.splice(0, studentsPerDay);
    result.push(tableDistribution(studentsPart, teachers, days[num]));
    num += 1;
  }

  return NextResponse.json(result, { status: 200 });
}
