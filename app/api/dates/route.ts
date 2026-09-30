import { NextResponse } from 'next/server';
import { getAllDates, getPersonById, saveDate } from '@/lib/db';
import { simulateDate } from '@/lib/dating';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const personA = searchParams.get('personA');
    const personB = searchParams.get('personB');

    let dates = getAllDates();

    if (personA && personB) {
      dates = dates.filter(
        (d) =>
          (d.personA_id === personA && d.personB_id === personB) ||
          (d.personA_id === personB && d.personB_id === personA)
      );
    } else if (personA) {
      dates = dates.filter((d) => d.personA_id === personA || d.personB_id === personA);
    }

    const includeVerdicts = searchParams.get('include_verdicts') === 'true';

    const projection = dates.map((d) => {
      if (includeVerdicts) return d;
      return {
        id: d.id,
        personA_id: d.personA_id,
        personB_id: d.personB_id,
        personA_name: d.personA_name,
        personB_name: d.personB_name,
        personA_avatar: d.personA_avatar,
        personB_avatar: d.personB_avatar,
        scenario: d.scenario,
        turns: d.turns,
        created_at: d.created_at,
      };
    });

    return NextResponse.json({ success: true, count: projection.length, data: projection });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { personA_id, personB_id } = body;

    if (!personA_id || !personB_id) {
      return NextResponse.json(
        { success: false, error: 'Both personA_id and personB_id are required' },
        { status: 400 }
      );
    }

    const personA = getPersonById(personA_id);
    const personB = getPersonById(personB_id);

    if (!personA || !personB) {
      return NextResponse.json(
        { success: false, error: 'One or both people not found' },
        { status: 404 }
      );
    }

    const simulation = await simulateDate(personA, personB);
    saveDate(simulation);

    return NextResponse.json({ success: true, data: simulation });
  } catch (error: unknown) {
    console.error('Error running date simulation:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
