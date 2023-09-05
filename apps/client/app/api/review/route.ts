import { prisma } from '@xxx/prism';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(request:NextResponse): Promise<NextResponse> {
  const data = await NextResponse.json();
  console.log('-------->>', data);

  return NextResponse.json({}, { status: 2000 });
}
