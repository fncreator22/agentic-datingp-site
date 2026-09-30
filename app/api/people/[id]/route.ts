import { NextRequest, NextResponse } from 'next/server';
import { getPersonById, deletePerson } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const person = getPersonById(id);
  if (!person) {
    return NextResponse.json({ error: 'Person not found' }, { status: 404 });
  }
  return NextResponse.json({ person });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deleted = deletePerson(id);
  if (!deleted) {
    return NextResponse.json({ error: 'Person not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, message: `Person ${id} deleted.` });
}
