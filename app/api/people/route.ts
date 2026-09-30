import { NextRequest, NextResponse } from 'next/server';
import { getAllPeople, addPerson, runDatesForPerson } from '@/lib/db';
import { scrapeLinkedIn } from '@/lib/scrapers/linkedin';
import { scrapeInstagram } from '@/lib/scrapers/instagram';
import { analyzeProfile } from '@/lib/analyst';
import { Person, SourceBundle } from '@/lib/types';

export async function GET() {
  const people = getAllPeople();
  return NextResponse.json({ people, count: people.length });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      age,
      city,
      gender,
      seeking,
      relationship_goal,
      linkedin_url,
      instagram_url,
      consent,
    } = body;

    if (!name || !linkedin_url || !instagram_url || !consent) {
      return NextResponse.json(
        { error: 'Name, LinkedIn URL, Instagram URL, and explicit Consent are required.' },
        { status: 400 }
      );
    }

    // Run dual ingestion
    const [linkedinData, instagramData] = await Promise.all([
      scrapeLinkedIn(linkedin_url),
      scrapeInstagram(instagram_url),
    ]);

    const source_bundle: SourceBundle = {
      linkedin: linkedinData,
      instagram: instagramData,
      self_declared: {
        gender: gender || 'non-binary',
        seeking: seeking || 'everyone',
        city: city || 'San Francisco, CA',
        relationship_goal: relationship_goal || 'Meaningful connection',
      },
    };

    // Run analyst agent
    const analysis = await analyzeProfile(name, source_bundle);

    const personId = `person_${Date.now()}`;
    const newPerson: Person = {
      id: personId,
      name,
      age: Number(age) || 28,
      city: city || 'San Francisco, CA',
      avatar: gender === 'man'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
      gender: gender || 'non-binary',
      seeking: seeking || 'everyone',
      relationship_goal: relationship_goal || 'Meaningful connection',
      linkedin_url,
      instagram_url,
      is_synthetic: false,
      consent_at: new Date().toISOString(),
      source_bundle,
      analysis,
      created_at: new Date().toISOString(),
    };

    addPerson(newPerson);

    // Simulate dates against compatible existing candidates
    const createdDates = await runDatesForPerson(newPerson.id);

    return NextResponse.json({
      person: newPerson,
      simulatedDatesCount: createdDates.length,
    });
  } catch (err: any) {
    console.error('Error creating person:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
