import { NextRequest, NextResponse } from 'next/server';
import { getPersonById, getRankingsForPerson } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const person = getPersonById(id);
  if (!person) {
    return NextResponse.json({ error: 'Person not found' }, { status: 404 });
  }

  const rankings = getRankingsForPerson(id);
  const safePerson = { ...person };
  delete (safePerson as Partial<typeof person>).consent_ip_hash;
  return NextResponse.json({
    person: safePerson,
    rankings,
    totalMatches: rankings.length,
  });
}
