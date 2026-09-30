import { NextResponse } from 'next/server';
import { getRankingsForPerson, getPersonById } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const person = getPersonById(id);

    if (!person) {
      return NextResponse.json({ success: false, error: 'Person not found' }, { status: 404 });
    }

    const rankings = getRankingsForPerson(id);

    return NextResponse.json({
      success: true,
      personId: id,
      personName: person.name,
      rankings,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
