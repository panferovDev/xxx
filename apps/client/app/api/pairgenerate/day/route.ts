import { prisma } from '@xxx/prism';
import { NextResponse, type NextRequest } from 'next/server';
import type { Prisma } from '@prisma/client';
import { requireSession, generateSubgroups } from '../../../../utils';

export async function PATCH(request: NextRequest): Promise<Response> {
  const { subgroupId, type, groupId } = (await request.json()) as {
    dayId: string;
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
    where: { id: Number(subgroupId) },
    data: {
      subgrups: subgroups.subgrups,
    },
  });

  return NextResponse.json(subgroups, { status: 200 });
}
