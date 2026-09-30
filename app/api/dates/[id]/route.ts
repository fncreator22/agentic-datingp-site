import { NextRequest, NextResponse } from 'next/server';
import { getDateById } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const date = getDateById(id);
  if (!date) {
    return NextResponse.json({ error: 'Date not found' }, { status: 404 });
  }
  return NextResponse.json({ date });
}
