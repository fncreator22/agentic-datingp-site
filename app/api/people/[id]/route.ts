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

  // Omit sensitive consent_ip_hash from public serialized response (BUG-029 / SEC-18)
  const safePerson = { ...person };
  delete (safePerson as Partial<typeof person>).consent_ip_hash;
  return NextResponse.json({ person: safePerson });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Protect seed demonstration cohort from unauthenticated destructive deletion (BUG-025 / SEC-14)
  if (/^person_(0[1-9]|1[0-9]|2[0-5])$/.test(id)) {
    return NextResponse.json(
      { error: 'Seed demonstration profiles are permanent and cannot be deleted.' },
      { status: 403 }
    );
  }

  const deleted = deletePerson(id);
  if (!deleted) {
    return NextResponse.json({ error: 'Person not found' }, { status: 404 });
  }
  return NextResponse.json({
    success: true,
    message: 'Profile and all associated agent simulation records permanently erased.',
  });
}
