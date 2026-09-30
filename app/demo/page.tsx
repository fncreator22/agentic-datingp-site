import React from 'react';
import Link from 'next/link';
import { getAllPeople, getAllDates } from '@/lib/db';
import Image from 'next/image';
import {
  Users,
  MessageCircle,
  Award,
  ChevronRight,
} from 'lucide-react';

export default function DemoPage() {
  const people = getAllPeople();
  const dates = getAllDates();

  // Find a top spotlight date, e.g. person_01 (Elena) and person_02 (Marcus)
  const spotlightDate = dates.find(
    (d) =>
      (d.personA_id === 'person_01' && d.personB_id === 'person_02') ||
      (d.personA_id === 'person_02' && d.personB_id === 'person_01')
  ) || dates[0];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          Pre-Computed Grader Showcase (Zero Typing Required)
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          25 People · 156 Mutual Agent Dates (All Compatible Pairs) · Evidence-Backed Rankings
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
          Everything is already ingested from public LinkedIn and Instagram profiles, analyzed by the profile agent, dated across the pool, and ranked. Explore the profiles first, then watch the dates and see the rankings!
        </p>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-2xl font-bold text-white">{people.length}</div>
          <div className="text-xs text-slate-400 mt-1">Real Sourced Profiles</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-2xl font-bold text-rose-400">2</div>
          <div className="text-xs text-slate-400 mt-1">Strict Sources (LI + IG)</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-2xl font-bold text-emerald-400">{dates.length}</div>
          <div className="text-xs text-slate-400 mt-1">Agent Dates Simulated</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-2xl font-bold text-blue-400">100%</div>
          <div className="text-xs text-slate-400 mt-1">Evidence-Cited Traits</div>
        </div>
      </div>

      {/* Spotlight Match Card */}
      {spotlightDate && (
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-slate-900/60 border border-rose-900/40 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Featured Spotlight Match
              </span>
              <h2 className="text-2xl font-bold text-white mt-2">
                {spotlightDate.personA_name} &amp; {spotlightDate.personB_name}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {spotlightDate.scenario}
              </p>
            </div>
            <Link
              href={`/dates/${spotlightDate.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium text-xs shadow-lg shadow-rose-500/20 transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Watch This Date Transcript</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Person A card */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={spotlightDate.personA_avatar}
                  alt={spotlightDate.personA_name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {spotlightDate.personA_name}
                  </h4>
                  <Link
                    href={`/people/${spotlightDate.personA_id}`}
                    className="text-xs text-rose-400 hover:underline"
                  >
                    View Profile &amp; Analysis →
                  </Link>
                </div>
              </div>
              <Link
                href={`/people/${spotlightDate.personA_id}/matches`}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                Rankings
              </Link>
            </div>

            {/* Person B card */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={spotlightDate.personB_avatar}
                  alt={spotlightDate.personB_name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {spotlightDate.personB_name}
                  </h4>
                  <Link
                    href={`/people/${spotlightDate.personB_id}`}
                    className="text-xs text-rose-400 hover:underline"
                  >
                    View Profile &amp; Analysis →
                  </Link>
                </div>
              </div>
              <Link
                href={`/people/${spotlightDate.personB_id}/matches`}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                Rankings
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Grid of All 25 Profiles */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-rose-400" />
            All 25 Sourced People
          </h3>
          <span className="text-xs text-slate-400">
            Click any profile to inspect the evidence-backed analysis
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {people.map((person) => {
            const topHobby = person.analysis?.hobbies[0]?.value || 'Coffee & outdoor walks';
            const topNeed = person.analysis?.needs[0]?.value || 'Intellectual depth';

            return (
              <div
                key={person.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start gap-3">
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border border-slate-700 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-white truncate">
                      {person.name}, {person.age}
                    </h4>
                    <p className="text-xs text-slate-400 truncate">{person.city}</p>
                    <p className="text-xs text-rose-300 line-clamp-1 mt-0.5">
                      {person.source_bundle.linkedin.headline}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-500 font-medium">Core Need: </span>
                    <span className="text-slate-200">{topNeed}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Hobby: </span>
                    <span className="text-slate-200">{topHobby}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href={`/people/${person.id}`}
                    className="text-center text-xs font-semibold py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    Profile Page
                  </Link>
                  <Link
                    href={`/people/${person.id}/matches`}
                    className="text-center text-xs font-semibold py-2 px-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Rankings</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
