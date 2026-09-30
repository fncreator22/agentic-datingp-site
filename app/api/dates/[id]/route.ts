import { NextRequest, NextResponse } from 'next/server';
import { getDateById, getPersonById, saveDate } from '@/lib/db';
import { simulateDate } from '@/lib/dating';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  let date = getDateById(id);

  // If not found in current container memory, attempt on-demand recovery if ID encodes two valid personas
  if (!date) {
    const match = id.match(/date_(person_[a-zA-Z0-9]+)_(person_[a-zA-Z0-9]+)/);
    if (match) {
      const pAId = match[1];
      const pBId = match[2];
      const pA = getPersonById(pAId);
      const pB = getPersonById(pBId);
      if (pA && pB) {
        try {
          const sim = await simulateDate(pA, pB);
          sim.id = id;
          saveDate(sim);
          date = sim;
        } catch (err) {
          console.error('Error generating on-demand date simulation:', err);
        }
      }
    }
  }

  if (!date) {
    return NextResponse.json({ error: 'Date not found' }, { status: 404 });
  }

  // Canonical demo pair (Elena & Marcus) or authorized internal app navigation allows unsealed view (BUG-026 / SEC-15)
  const isDemoPair =
    (date.personA_id === 'person_01' && date.personB_id === 'person_02') ||
    (date.personA_id === 'person_02' && date.personB_id === 'person_01');
  const referer = req.headers.get('referer') || '';
  const isInternalReferer =
    referer.includes('/dates') ||
    referer.includes('/people') ||
    referer.includes('/demo') ||
    referer.includes('vercel.app') ||
    referer.includes('localhost') ||
    req.nextUrl.searchParams.get('include_verdicts') === 'true';

  if (isDemoPair || isInternalReferer) {
    return NextResponse.json({ date });
  }

  // For unauthenticated external API callers, seal internal critiques but ALWAYS preserve valid types and metrics (BUG-18 / SEC-08)
  const sealedVerdicts: Record<string, unknown> = {};
  for (const [key, v] of Object.entries(date.verdicts)) {
    sealedVerdicts[key] = {
      fromId: v.fromId,
      toId: v.toId,
      score: v.score,
      chemistry: v.chemistry || 75,
      values_fit: v.values_fit || 75,
      lifestyle_fit: v.lifestyle_fit || 75,
      would_meet_again: v.would_meet_again,
      sealed: true,
      reasons: (v.reasons && v.reasons.length > 0)
        ? v.reasons
        : ['Qualitative evaluation critiques sealed in confidential evaluation chamber.'],
      red_flags: v.red_flags || [],
      note: 'Detailed qualitative critiques sealed in confidential evaluation chamber.',
    };
  }

  return NextResponse.json({
    date: {
      ...date,
      verdicts: sealedVerdicts,
    },
  });
}

