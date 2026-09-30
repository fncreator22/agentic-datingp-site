import { getAllPeople, getAllDates, getRankingsForPerson } from '../lib/db';
import { areCompatible } from '../lib/dating';

interface VerificationResult {
  passed: boolean;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  errors: string[];
  metrics: Record<string, number | string>;
}

export function runSystemVerification(): VerificationResult {
  const errors: string[] = [];
  let checks = 0;
  let passed = 0;

  function assert(condition: boolean, msg: string) {
    checks++;
    if (condition) {
      passed++;
    } else {
      errors.push(msg);
    }
  }

  const people = getAllPeople();
  const dates = getAllDates();

  // Test 1: Sourced cohort size
  assert(people.length === 25, `Expected 25 profiles, got ${people.length}`);

  // Test 2: Source bundle integrity & evidence tags
  people.forEach((p) => {
    assert(p.linkedin_url.startsWith('https://www.linkedin.com/in/'), `Person ${p.id} (${p.name}) invalid LinkedIn URL`);
    assert(p.instagram_url.startsWith('https://www.instagram.com/'), `Person ${p.id} (${p.name}) invalid Instagram URL`);
    assert(!!p.source_bundle.linkedin.headline, `Person ${p.id} missing LinkedIn headline`);
    assert(!!p.source_bundle.instagram.bio, `Person ${p.id} missing Instagram bio`);

    if (p.analysis) {
      assert(p.analysis.needs.length > 0, `Person ${p.id} missing needs`);
      assert(p.analysis.hobbies.length > 0, `Person ${p.id} missing hobbies`);
      assert(p.analysis.values.length > 0, `Person ${p.id} missing values`);

      // Verify every trait has citation and provenance
      p.analysis.needs.forEach((t, i) => {
        assert(t.snippet.length > 0, `Person ${p.id} need[${i}] missing snippet`);
        assert(['linkedin', 'instagram', 'cross-source'].includes(t.source), `Person ${p.id} need[${i}] invalid source`);
        assert(t.confidence >= 0 && t.confidence <= 1, `Person ${p.id} need[${i}] invalid confidence`);
      });
    } else {
      errors.push(`Person ${p.id} has no analysis object`);
    }
  });

  // Test 3: Compatible date simulation counts
  let expectedPairs = 0;
  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      if (areCompatible(people[i], people[j])) {
        expectedPairs++;
      }
    }
  }
  assert(dates.length === expectedPairs, `Expected ${expectedPairs} compatible dates, got ${dates.length}`);

  // Test 4: Dialogue turns and dual verdicts
  dates.forEach((d) => {
    assert(d.turns.length === 8, `Date ${d.id} expected 8 turns, got ${d.turns.length}`);
    const vA = d.verdicts[d.personA_id];
    const vB = d.verdicts[d.personB_id];
    assert(!!vA, `Date ${d.id} missing verdict for personA ${d.personA_id}`);
    assert(!!vB, `Date ${d.id} missing verdict for personB ${d.personB_id}`);
    if (vA) {
      assert(vA.score >= 0 && vA.score <= 100, `Date ${d.id} verdictA score out of range: ${vA.score}`);
    }
    if (vB) {
      assert(vB.score >= 0 && vB.score <= 100, `Date ${d.id} verdictB score out of range: ${vB.score}`);
    }
  });

  // Test 5: Mutual ranking formula verification for all people
  people.forEach((p) => {
    const rankings = getRankingsForPerson(p.id);
    for (let i = 0; i < rankings.length; i++) {
      assert(rankings[i].rank === i + 1, `Person ${p.id} ranking[${i}] has invalid rank ${rankings[i].rank}`);
      if (i > 0) {
        assert(rankings[i - 1].final_score >= rankings[i].final_score, `Person ${p.id} rankings not sorted descending`);
      }
    }
  });

  // Test 6: Video Demo sync - Marcus Vance must rank #1 for Elena Rostova with 92%
  const elenaRankings = getRankingsForPerson('person_01');
  assert(
    elenaRankings[0]?.candidateId === 'person_02',
    `Expected Marcus (person_02) to be #1 for Elena, got ${elenaRankings[0]?.candidateId} (${elenaRankings[0]?.candidateName})`
  );
  assert(
    elenaRankings[0]?.final_score === 92,
    `Expected Marcus match score with Elena to be exactly 92%, got ${elenaRankings[0]?.final_score}%`
  );

  return {
    passed: errors.length === 0,
    totalChecks: checks,
    passedChecks: passed,
    failedChecks: errors.length,
    errors,
    metrics: {
      totalPeople: people.length,
      totalDates: dates.length,
      compatiblePairsCalculated: expectedPairs,
      elenaRankingsCount: getRankingsForPerson('person_01').length,
    },
  };
}

const result = runSystemVerification();
console.log(JSON.stringify(result, null, 2));
process.exit(result.passed ? 0 : 1);
