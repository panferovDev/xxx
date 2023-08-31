import { prisma } from '@xxx/prism';
import type { PreloadedType } from '@xxx/types/preloadedType';

export async function preloadState(): Promise<PreloadedType> {
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
