import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import { requireSession, generateSubgroups } from '../../../../utils';

export async function PATCH(request: NextRequest): Promise<Response> {
  const { id, type, groupId } = (await request.json()) as {
    id: string;
    type: string;
    groupId: string;
  };
  console.log('----->>>', id, type, groupId);
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
