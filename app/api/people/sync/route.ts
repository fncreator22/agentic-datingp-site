import { NextRequest, NextResponse } from 'next/server';
import { addPerson, getPersonById, saveDate } from '@/lib/db';
import { Person, DateSimulation } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { person, dates } = body as { person?: Person; dates?: DateSimulation[] };

    if (person && person.id) {
      const existing = getPersonById(person.id);
      if (!existing) {
        addPerson(person);
      }
    }

    if (dates && Array.isArray(dates)) {
      for (const d of dates) {
        if (d && d.id) {
          saveDate(d);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error syncing';
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
