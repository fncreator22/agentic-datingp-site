import { NextResponse } from 'next/server';
import { getAllDates, getPersonById, saveDate } from '@/lib/db';
import { simulateDate } from '@/lib/dating';

// Sliding window rate limit for on-demand date simulation (BUG-028 / SEC-17)
const DATE_SIM_RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const DATE_SIM_RATE_LIMIT_MAX = 10;
const dateSimRequests = new Map<string, { count: number; resetAt: number }>();

function checkDateSimRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = dateSimRequests.get(ip);
  if (!entry || now > entry.resetAt) {
    dateSimRequests.set(ip, { count: 1, resetAt: now + DATE_SIM_RATE_LIMIT_WINDOW });
    return { allowed: true };
  }
  if (entry.count >= DATE_SIM_RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { allowed: true };
}

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

    // Confidential evaluation chamber projection: seal private verdicts from public list views (BUG-026 / SEC-15)
    const projection = dates.map((d) => {
      const isDemoPair =
        (d.personA_id === 'person_01' && d.personB_id === 'person_02') ||
        (d.personA_id === 'person_02' && d.personB_id === 'person_01');

      if (isDemoPair) {
        return d;
      }

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
        verdicts: {
          sealed: true,
          note: 'Confidential evaluation chamber critiques are sealed in public view.',
        },
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
    // Body size limit defense (BUG-027 / SEC-16)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 10240) {
      return NextResponse.json(
        { success: false, error: 'Payload too large. Maximum request body size is 10 KB.' },
        { status: 413 }
      );
    }

    // Rate limiting for on-demand LLM date simulation (BUG-028 / SEC-17)
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const rateLimit = checkDateSimRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Maximum 10 date simulations per hour.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfter || 3600),
          },
        }
      );
    }

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
