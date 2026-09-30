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
        const baseChem = 75 + Math.floor(((i * 7 + j * 13) % 20));
        const valFit = 76 + Math.floor(((i * 11 + j * 5) % 19));
        const lifeFit = sharedCity ? 85 + (i % 10) : 74 + (j % 12);

        const scoreA = Math.min(98, Math.round(baseChem * 0.4 + valFit * 0.35 + lifeFit * 0.25));
        const scoreB = Math.min(97, Math.round(baseChem * 0.38 + valFit * 0.37 + lifeFit * 0.25));

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

export function getAllPeople(): Person[] {
  return global.__datingDbPeople || [];
}

export function getPersonById(id: string): Person | undefined {
  return (global.__datingDbPeople || []).find((p) => p.id === id);
}

export function addPerson(person: Person): Person {
  if (!global.__datingDbPeople) global.__datingDbPeople = [];
  // Put new person at front
  global.__datingDbPeople.unshift(person);
  return person;
}

export function deletePerson(id: string): boolean {
  if (!global.__datingDbPeople) return false;
  const initialLen = global.__datingDbPeople.length;
  global.__datingDbPeople = global.__datingDbPeople.filter((p) => p.id !== id);
  if (global.__datingDbDates) {
    global.__datingDbDates = global.__datingDbDates.filter(
      (d) => d.personA_id !== id && d.personB_id !== id
    );
  }
  return global.__datingDbPeople.length < initialLen;
}

export function getAllDates(): DateSimulation[] {
  return global.__datingDbDates || [];
}

export function getDateById(id: string): DateSimulation | undefined {
  return (global.__datingDbDates || []).find((d) => d.id === id);
}

export function saveDate(date: DateSimulation): void {
  if (!global.__datingDbDates) global.__datingDbDates = [];
  const idx = global.__datingDbDates.findIndex((d) => d.id === date.id);
  if (idx >= 0) {
    global.__datingDbDates[idx] = date;
  } else {
    global.__datingDbDates.push(date);
  }
}

/**
 * Runs dates for a newly added person against all compatible existing profiles
 */
export async function runDatesForPerson(personId: string): Promise<DateSimulation[]> {
  const person = getPersonById(personId);
  if (!person) return [];

  const allPeople = getAllPeople();
  const createdDates: DateSimulation[] = [];

  for (const candidate of allPeople) {
    if (candidate.id === personId) continue;
    if (!areCompatible(person, candidate)) continue;

    // Check if date already exists
    const existing = (global.__datingDbDates || []).find(
      (d) =>
        (d.personA_id === personId && d.personB_id === candidate.id) ||
        (d.personA_id === candidate.id && d.personB_id === personId)
    );

    if (!existing) {
      const newDate = await simulateDate(person, candidate);
      saveDate(newDate);
      createdDates.push(newDate);
    }
  }

  return createdDates;
}

export function getRankingsForPerson(personId: string): MatchRanking[] {
  const people = getAllPeople();
  const dates = getAllDates();
  return calculateRankings(personId, people, dates);
}
