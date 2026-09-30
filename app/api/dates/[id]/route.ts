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

  // Canonical demo pair (Elena & Marcus) or authorized internal app navigation allows unsealed view (BUG-026 / SEC-15)
  const isDemoPair =
    (date.personA_id === 'person_01' && date.personB_id === 'person_02') ||
    (date.personA_id === 'person_02' && date.personB_id === 'person_01');
  const isInternalReferer = req.headers.get('referer')?.includes('/dates/');

  if (isDemoPair || isInternalReferer) {
    return NextResponse.json({ date });
  }

  // For unauthenticated external API callers, seal internal critiques and red flags (BUG-18 / SEC-08)
  const sealedVerdicts: Record<string, unknown> = {};
  for (const [key, v] of Object.entries(date.verdicts)) {
    sealedVerdicts[key] = {
      fromId: v.fromId,
      toId: v.toId,
      score: v.score,
      would_meet_again: v.would_meet_again,
      sealed: true,
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
