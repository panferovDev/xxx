import { prisma } from '@xxx/prism';
import { requireSession } from 'apps/client/utils';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function PATCH(
  response: NextResponse,
  { params }: { params: { id: string } },
): Promise<Response> {
  const session = await requireSession();
  if (!session) return NextResponse.json({ messge: 'not authorized' }, { status: 401 });

  try {
    await prisma.$executeRaw`UPDATE "Student" SET repeat = NOT repeat WHERE id = ${Number(
      params.id,
    )}`;
    return NextResponse.json({ message: `updated` }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ messge: 'student delete error' }, { status: 500 });
  }
}
