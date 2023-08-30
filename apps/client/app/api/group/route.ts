import { prisma } from '@xxx/prism';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  const groups = await prisma.group.findMany();
  return new Response(JSON.stringify(groups));
}

export async function POST(request: Request): Promise<Response> {
  const data = await request.json();
  console.log('data---', data);
  return NextResponse.json({ messge: JSON.stringify(data) }, { status: 200 });
}
