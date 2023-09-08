import { prisma } from '@xxx/prism';
import type { PreloadedType } from '@xxx/types/preloadedType';
import { getServerSession } from 'next-auth/next';

export async function preloadState(): Promise<PreloadedType> {
  console.log('preloadState');

  const session = await getServerSession();
  if (!session) return { groups: [] };
  const groups = await prisma.group.findMany({
    include: {
      students: true,
    },
  });
  await prisma.$disconnect();

  return {
    groups,
  };
}
