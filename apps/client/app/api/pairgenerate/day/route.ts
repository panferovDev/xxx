import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import { requireSession, generateSubgroups } from '../../../../utils';

export async function PATCH(request: NextRequest): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });

  const { id, type, groupId } = (await request.json()) as {
    id: string;
    type: string;
    groupId: string;
  };
  const students = await prisma.student.findMany({
    where: {
      groupId: Number(groupId),
    },
  });

  const groupActivityDays = await prisma.groupActivityDays.findFirst({
    where: {
      type,
    },
  });

  if (!groupActivityDays) return NextResponse.json({}, { status: 404 });
  const subgroups = generateSubgroups(groupActivityDays, students);

  await prisma.subgroup.update({
    where: { id: Number(id) },
    data: {
      subgrups: subgroups.subgrups,
    },
  });

  return NextResponse.json(subgroups, { status: 200 });
}
