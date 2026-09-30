import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAllPeople, addPerson, runDatesForPerson } from '@/lib/db';
import { scrapeLinkedIn } from '@/lib/scrapers/linkedin';
import { scrapeInstagram } from '@/lib/scrapers/instagram';
import { analyzeProfile } from '@/lib/analyst';
import { Person, SourceBundle } from '@/lib/types';

// Rate Limiter: In-memory tracker (BUG-19 / SEC-09)
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { allowed: true };
}

// URL Whitelists and SSRF Defense (BUG-15 / SEC-05)
const LINKEDIN_REGEX = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_\-\.]+\/?$/i;
const INSTAGRAM_REGEX = /^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_\-\.]+\/?$/i;

function isValidSafeUrl(rawUrl: string, regex: RegExp): boolean {
  if (!rawUrl || typeof rawUrl !== 'string') return false;
  try {
    const url = new URL(rawUrl);
    const hostname = url.hostname.toLowerCase();

    // Reject SSRF and private IP ranges
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '169.254.169.254' ||
      hostname === '::1' ||
      hostname.startsWith('10.') ||
      hostname.startsWith('192.168.') ||
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname)
    ) {
      return false;
    }
    return regex.test(rawUrl);
  } catch {
    return false;
  }
}

function sanitizeString(input: unknown, maxLength: number): string {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '').trim().slice(0, maxLength);
}

export async function GET() {
  const people = getAllPeople();
  // Omit sensitive consent_ip_hash from public serialized response (BUG-029 / SEC-18)
  const safePeople = people.map((p) => {
    const copy = { ...p };
    delete (copy as Partial<typeof p>).consent_ip_hash;
    return copy;
  });
  return NextResponse.json({ people: safePeople, count: safePeople.length });
}

export async function POST(req: NextRequest) {
  try {
    // Body size limit defense (BUG-027 / SEC-16)
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 10240) {
      return NextResponse.json(
        { error: 'Payload too large. Maximum request body size is 10 KB.' },
        { status: 413 }
      );
    }

    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';

    // Rate limit check (BUG-19 / SEC-09)
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Maximum 5 profile ingestions per hour.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfter || 3600),
          },
        }
      );
    }

    const body = await req.json();
    const {
      name: rawName,
      age: rawAge,
      city: rawCity,
      gender: rawGender,
      seeking: rawSeeking,
      relationship_goal: rawGoal,
      linkedin_url: rawLinkedinUrl,
      instagram_url: rawInstagramUrl,
      consent,
    } = body;

    if (!consent) {
      return NextResponse.json(
        { error: 'Explicit consent is mandatory for profile ingestion.' },
        { status: 400 }
      );
    }

    // Input sanitization and bounds checking (BUG-20 / SEC-10)
    const name = sanitizeString(rawName, 60);
    const city = sanitizeString(rawCity || 'San Francisco, CA', 80);
    const relationship_goal = sanitizeString(rawGoal || 'Meaningful connection', 150);

    if (!name) {
      return NextResponse.json(
        { error: 'Valid name (up to 60 characters) is required.' },
        { status: 400 }
      );
    }

    const age = Number(rawAge);
    if (isNaN(age) || age < 18 || age > 100) {
      return NextResponse.json(
        { error: 'Age must be a valid number between 18 and 100.' },
        { status: 400 }
      );
    }

    const gender = ['man', 'woman', 'non-binary'].includes(rawGender) ? rawGender : 'non-binary';
    const seeking = ['man', 'woman', 'everyone'].includes(rawSeeking) ? rawSeeking : 'everyone';

    // URL Whitelisting & SSRF validation (BUG-15 / SEC-05)
    if (!isValidSafeUrl(rawLinkedinUrl, LINKEDIN_REGEX)) {
      return NextResponse.json(
        { error: 'Invalid LinkedIn URL. Must match https://linkedin.com/in/... and cannot point to internal network.' },
        { status: 400 }
      );
    }

    if (!isValidSafeUrl(rawInstagramUrl, INSTAGRAM_REGEX)) {
      return NextResponse.json(
        { error: 'Invalid Instagram URL. Must match https://instagram.com/... and cannot point to internal network.' },
        { status: 400 }
      );
    }

    // Run dual ingestion
    let linkedinData;
    let instagramData;

    try {
      [linkedinData, instagramData] = await Promise.all([
        scrapeLinkedIn(rawLinkedinUrl),
        scrapeInstagram(rawInstagramUrl),
      ]);
    } catch (scrapeErr: unknown) {
      if (scrapeErr instanceof Error && scrapeErr.message.includes('PRIVATE_INSTAGRAM_PROFILE')) {
        return NextResponse.json(
          { error: 'Private Instagram accounts cannot be ingested. Profile must be public.' },
          { status: 422 }
        );
      }
      throw scrapeErr;
    }

    const source_bundle: SourceBundle = {
      linkedin: linkedinData,
      instagram: instagramData,
      self_declared: {
        gender,
        seeking,
        city,
        relationship_goal,
      },
    };

    // Run analyst agent
    const analysis = await analyzeProfile(name, source_bundle);

    const personId = `person_${Date.now()}`;
    const ipHash = crypto.createHash('sha256').update(clientIp).digest('hex');

    const newPerson: Person = {
      id: personId,
      name,
      age,
      city,
      avatar: gender === 'man'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
      gender,
      seeking,
      relationship_goal,
      linkedin_url: rawLinkedinUrl,
      instagram_url: rawInstagramUrl,
      is_synthetic: false,
      consent_at: new Date().toISOString(),
      consent_ip_hash: ipHash,
      source_bundle,
      analysis,
      created_at: new Date().toISOString(),
    };

    addPerson(newPerson);

    // Simulate dates against compatible existing candidates
    const createdDates = await runDatesForPerson(newPerson.id);

    const safeNewPerson = { ...newPerson };
    delete (safeNewPerson as Partial<typeof newPerson>).consent_ip_hash;
    return NextResponse.json({
      person: safeNewPerson,
      simulatedDatesCount: createdDates.length,
    });
  } catch (err: unknown) {
    console.error('Error creating person:', err);
    const message = err instanceof Error ? err.message : 'Server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
