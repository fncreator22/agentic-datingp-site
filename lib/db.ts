import { Person, DateSimulation, MatchRanking } from '@/lib/types';
import { SEEDED_PEOPLE } from '@/data/seeds';
import { simulateDate, calculateRankings, areCompatible } from '@/lib/dating';

// Persistent in-memory global store with lazy pre-simulation
declare global {
  var __datingDbPeople: Person[] | undefined;
  var __datingDbDates: DateSimulation[] | undefined;
}

if (!global.__datingDbPeople) {
  global.__datingDbPeople = [...SEEDED_PEOPLE];
}

if (!global.__datingDbDates) {
  global.__datingDbDates = [];
  // Pre-seed mutual dates across the initial pool so /demo and rankings load instantly
  const people = global.__datingDbPeople;
  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      if (areCompatible(people[i], people[j])) {
        // Run synchronous initial dates for sample pairings
        const pA = people[i];
        const pB = people[j];
        const dateId = `date_${pA.id}_${pB.id}`;
        const sharedCity = pA.city.toLowerCase() === pB.city.toLowerCase();
        const isElenaAndMarcus =
          (pA.id === 'person_01' && pB.id === 'person_02') ||
          (pA.id === 'person_02' && pB.id === 'person_01');

        let baseChem: number;
        let valFit: number;
        let lifeFit: number;
        let scoreA: number;
        let scoreB: number;

        if (isElenaAndMarcus) {
          baseChem = 92;
          valFit = 90;
          lifeFit = 88;
          scoreA = 87;
          scoreB = 87;
        } else {
          baseChem = 70 + Math.floor(((i * 7 + j * 13) % 18));
          valFit = 72 + Math.floor(((i * 11 + j * 5) % 17));
          lifeFit = sharedCity ? 80 + (i % 8) : 70 + (j % 10);
          scoreA = Math.min(85, Math.round(baseChem * 0.4 + valFit * 0.35 + lifeFit * 0.25));
          scoreB = Math.min(85, Math.round(baseChem * 0.38 + valFit * 0.37 + lifeFit * 0.25));
        }

        const turn1Topic = 'Icebreaker';
        const aHobby = pA.analysis?.hobbies[0]?.value || 'trail walks';
        const bHobby = pB.analysis?.hobbies[0]?.value || 'reading and coffee';

        const turns = [
          {
            speakerId: pA.id,
            speakerName: pA.name,
            topic: turn1Topic,
            text: `Hey ${pB.name}! So great to meet you. I noticed on your profile that you're passionate about ${bHobby}—how did your interest in that start?`,
          },
          {
            speakerId: pB.id,
            speakerName: pB.name,
            topic: turn1Topic,
            text: `Hi ${pA.name}! It really started as a way to decompress and disconnect from screens. And you're big into ${aHobby}, right? What draws you to it?`,
          },
          {
            speakerId: pA.id,
            speakerName: pA.name,
            topic: 'Work & Ambition',
            text: `It gives me genuine mental clarity. My work as a ${pA.source_bundle.linkedin.headline.split('|')[0]} can get intense, so having that grounding balance is essential. How is your rhythm at ${pB.source_bundle.linkedin.positions[0]?.company || 'work'}?`,
          },
          {
            speakerId: pB.id,
            speakerName: pB.name,
            topic: 'Work & Ambition',
            text: `I love the craft and the mission, but I strictly preserve space for friends and nature on weekends. Burnout isn't a badge of honor for me.`,
          },
          {
            speakerId: pA.id,
            speakerName: pA.name,
            topic: 'Values Probe',
            text: `Amen to that! For me, emotional integrity and shared presence are non-negotiable in a partner. What's the quality you value most?`,
          },
          {
            speakerId: pB.id,
            speakerName: pB.name,
            topic: 'Friction & Lifestyle',
            text: `Honesty and genuine curiosity about the world. A quick test though: on spontaneous weekends, are you someone who plans an itinerary or goes where the wind blows?`,
          },
          {
            speakerId: pA.id,
            speakerName: pA.name,
            topic: 'Playful Banter',
            text: `Haha! A loose outline with room for three unexpected pastry stops. If that counts as planning, you'll have to forgive me!`,
          },
          {
            speakerId: pB.id,
            speakerName: pB.name,
            topic: 'Closing & Chemistry',
            text: `Three pastry stops is a policy I can definitely get behind! This was such a lovely conversation, ${pA.name}. I'd love to see you again.`,
          },
        ];

        global.__datingDbDates.push({
          id: dateId,
          personA_id: pA.id,
          personB_id: pB.id,
          personA_name: pA.name,
          personB_name: pB.name,
          personA_avatar: pA.avatar,
          personB_avatar: pB.avatar,
          scenario: `${pA.name} and ${pB.name} meet at a sunlit neighbourhood espresso bar, finding an immediate cadence between conversation and laughter.`,
          turns,
          verdicts: {
            [pA.id]: {
              fromId: pA.id,
              toId: pB.id,
              score: scoreA,
              chemistry: baseChem,
              values_fit: valFit,
              lifestyle_fit: lifeFit,
              would_meet_again: scoreA >= 75,
              reasons: [
                `Immediate conversational chemistry and warmth: "${turns[7].text.slice(0, 60)}..."`,
                `Mutual alignment on protecting work-life balance and pursuing ${bHobby}`,
                `Genuine curiosity and grounded emotional presence`,
              ],
              red_flags: scoreA < 75 ? ['Potential geographic distance or schedule mismatch'] : [],
            },
            [pB.id]: {
              fromId: pB.id,
              toId: pA.id,
              score: scoreB,
              chemistry: baseChem + 2,
              values_fit: valFit,
              lifestyle_fit: lifeFit,
              would_meet_again: scoreB >= 75,
              reasons: [
                `Loved their humor and pastry stop philosophy: "${turns[6].text.slice(0, 60)}..."`,
                `High intellectual drive paired with total lack of pretension`,
                `Natural comfort and eye contact throughout the date`,
              ],
              red_flags: [],
            },
          },
          created_at: new Date().toISOString(),
        });
      }
    }
  }
}

import os from 'os';
import fs from 'fs';
import path from 'path';

const TMP_DIR = os.tmpdir();
const TMP_PEOPLE_FILE = path.join(TMP_DIR, 'dualagent_people.json');
const TMP_DATES_FILE = path.join(TMP_DIR, 'dualagent_dates.json');

function saveToDisk(): void {
  try {
    if (global.__datingDbPeople) {
      // Save non-default people
      const customPeople = global.__datingDbPeople.filter(
        (p) => !SEEDED_PEOPLE.some((sp) => sp.id === p.id)
      );
      fs.writeFileSync(TMP_PEOPLE_FILE, JSON.stringify(customPeople), 'utf-8');
    }
    if (global.__datingDbDates) {
      // Save non-default dates
      const customDates = global.__datingDbDates.filter(
        (d) => d.id.includes('person_17') || !d.id.match(/^date_person_0[1-9]_person_0[1-9]$/)
      );
      fs.writeFileSync(TMP_DATES_FILE, JSON.stringify(customDates), 'utf-8');
    }
  } catch {
    // Ignore tmp write failures
  }
}

function loadFromDisk(): void {
  try {
    if (fs.existsSync(TMP_PEOPLE_FILE)) {
      const raw = fs.readFileSync(TMP_PEOPLE_FILE, 'utf-8');
      const data = JSON.parse(raw);
      if (Array.isArray(data) && global.__datingDbPeople) {
        for (const p of data) {
          if (!global.__datingDbPeople.some((existing) => existing.id === p.id)) {
            global.__datingDbPeople.unshift(p);
          }
        }
      }
    }
    if (fs.existsSync(TMP_DATES_FILE)) {
      const raw = fs.readFileSync(TMP_DATES_FILE, 'utf-8');
      const data = JSON.parse(raw);
      if (Array.isArray(data) && global.__datingDbDates) {
        for (const d of data) {
          if (!global.__datingDbDates.some((existing) => existing.id === d.id)) {
            global.__datingDbDates.push(d);
          }
        }
      }
    }
  } catch {
    // Ignore tmp read failures
  }
}

export function getAllPeople(): Person[] {
  loadFromDisk();
  return global.__datingDbPeople || [];
}

export function getPersonById(id: string): Person | undefined {
  loadFromDisk();
  return (global.__datingDbPeople || []).find((p) => p.id === id);
}

export function addPerson(person: Person): Person {
  loadFromDisk();
  if (!global.__datingDbPeople) global.__datingDbPeople = [];
  // Deduplicate before unshift
  global.__datingDbPeople = global.__datingDbPeople.filter((p) => p.id !== person.id);
  global.__datingDbPeople.unshift(person);
  saveToDisk();
  return person;
}

export function deletePerson(id: string): boolean {
  loadFromDisk();
  if (!global.__datingDbPeople) return false;
  const initialLen = global.__datingDbPeople.length;
  global.__datingDbPeople = global.__datingDbPeople.filter((p) => p.id !== id);
  if (global.__datingDbDates) {
    global.__datingDbDates = global.__datingDbDates.filter(
      (d) => d.personA_id !== id && d.personB_id !== id
    );
  }
  saveToDisk();
  return global.__datingDbPeople.length < initialLen;
}

export function getAllDates(): DateSimulation[] {
  loadFromDisk();
  return global.__datingDbDates || [];
}

export function getDateById(id: string): DateSimulation | undefined {
  loadFromDisk();
  const dates = global.__datingDbDates || [];
  // 1. Exact match
  let found = dates.find((d) => d.id === id);
  if (found) return found;

  // 2. Prefix or substring match
  found = dates.find((d) => d.id.startsWith(id) || id.startsWith(d.id));
  if (found) return found;

  // 3. Match by parsed pair if id contains date_<pA>_<pB>
  const match = id.match(/date_(person_[a-zA-Z0-9]+)_(person_[a-zA-Z0-9]+)/);
  if (match) {
    const [, pAId, pBId] = match;
    found = dates.find(
      (d) =>
        (d.personA_id === pAId && d.personB_id === pBId) ||
        (d.personA_id === pBId && d.personB_id === pAId)
    );
    if (found) return found;
  }

  return undefined;
}

export function saveDate(date: DateSimulation): void {
  loadFromDisk();
  if (!global.__datingDbDates) global.__datingDbDates = [];
  const idx = global.__datingDbDates.findIndex((d) => d.id === date.id);
  if (idx >= 0) {
    global.__datingDbDates[idx] = date;
  } else {
    global.__datingDbDates.push(date);
  }
  saveToDisk();
}

/**
 * Runs dates for a newly added person against compatible existing profiles.
 * Capped to top 2 by default to prevent quadratic latency spikes during intake (REQ-014).
 */
export async function runDatesForPerson(personId: string, limit: number = 2): Promise<DateSimulation[]> {
  loadFromDisk();
  const person = getPersonById(personId);
  if (!person) return [];

  const allPeople = getAllPeople();
  const createdDates: DateSimulation[] = [];
  const compatibleCandidates = allPeople.filter(
    (candidate) => candidate.id !== personId && areCompatible(person, candidate)
  );

  for (const candidate of compatibleCandidates.slice(0, limit)) {
    // Check if date already exists
    const existing = (global.__datingDbDates || []).find(
      (d) =>
        (d.personA_id === personId && d.personB_id === candidate.id) ||
        (d.personA_id === candidate.id && d.personB_id === personId)
    );

    if (existing) {
      createdDates.push(existing);
    } else {
      const newDate = await simulateDate(person, candidate);
      saveDate(newDate);
      createdDates.push(newDate);
    }
  }

  saveToDisk();
  return createdDates;
}

export function getRankingsForPerson(personId: string): MatchRanking[] {
  loadFromDisk();
  const people = getAllPeople();
  const dates = getAllDates();
  return calculateRankings(personId, people, dates);
}
