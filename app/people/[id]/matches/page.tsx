'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Trophy,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Person, MatchRanking } from '@/lib/types';

export default function MatchesPage() {
  const params = useParams();
  const personId = params.id as string;

  const [person, setPerson] = useState<Person | null>(null);
  const [rankings, setRankings] = useState<MatchRanking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/people/${personId}/matches`)
      .then((res) => res.json())
      .then((data) => {
        if (data.person) setPerson(data.person);
        if (data.rankings) setRankings(data.rankings);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [personId]);

  if (loading) {
    return (
      <div className="py-20 text-center text-slate-400">
        <Sparkles className="w-8 h-8 animate-spin mx-auto text-rose-500 mb-2" />
        <p>Calculating mutual compatibility rankings across simulated dates...</p>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-slate-300">Person not found.</p>
        <Link href="/people" className="text-rose-400 hover:underline">
          Return to People Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Header */}
      <div className="space-y-3">
        <Link
          href={`/people/${person.id}`}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {person.name}&apos;s Profile Page</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-2">
              <Trophy className="w-3.5 h-3.5" />
              Final Mutual Match Rankings
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Who Fits {person.name} Best?
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Ranked candidates based on mutual simulated dates. Formula: 0.6·min(A,B) + 0.4·mean(A,B) + mutual bonus - red flag penalties.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-2xl font-black text-rose-400">{rankings.length}</span>
            <p className="text-xs text-slate-500">Compatible Matches Dated</p>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      {rankings.length === 0 ? (
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-slate-400 text-sm">
          No dates simulated yet for this persona.
        </div>
      ) : (
        <div className="space-y-4">
          {rankings.map((rank) => {
            const isTopMatch = rank.rank === 1;

            return (
              <div
                key={rank.candidateId}
                className={`p-6 rounded-3xl transition-all border ${
                  isTopMatch
                    ? 'bg-gradient-to-r from-rose-950/40 via-slate-900 to-purple-950/30 border-rose-500/50 shadow-2xl shadow-rose-500/10'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-base shrink-0 ${
                        isTopMatch
                          ? 'bg-gradient-to-tr from-amber-400 to-rose-500 text-slate-950 shadow-lg'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      #{rank.rank}
                    </div>
                    <Image
                      src={rank.candidateAvatar}
                      alt={rank.candidateName}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-700 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">
                          {rank.candidateName}
                        </h3>
                        {rank.bothWouldMeet && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Both Would Meet Again
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{rank.candidateCity}</p>
                      <p className="text-xs text-rose-300 line-clamp-1 mt-0.5">
                        {rank.candidateHeadline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="text-right">
                      <div className="text-2xl font-black text-rose-400">
                        {rank.final_score}%
                      </div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        Mutual Fit
                      </span>
                    </div>
                    <Link
                      href={`/dates/${rank.dateId}`}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-xs transition-colors shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-rose-400" />
                      <span>Watch Date</span>
                    </Link>
                  </div>
                </div>

                {/* Score Breakdown Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 text-xs border-b border-slate-800/60">
                  <div>
                    <span className="text-slate-500 block text-[11px]">
                      {person.name}&apos;s Rating:
                    </span>
                    <span className="font-semibold text-slate-200">
                      {rank.scoreA} / 100
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">
                      {rank.candidateName}&apos;s Rating:
                    </span>
                    <span className="font-semibold text-slate-200">
                      {rank.scoreB} / 100
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Mutual Base:</span>
                    <span className="font-semibold text-slate-200">
                      {rank.mutualScore}%
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Verdict Status:</span>
                    <span
                      className={`font-semibold ${
                        rank.bothWouldMeet ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {rank.bothWouldMeet ? 'Mutual Green Light' : 'Conditional'}
                    </span>
                  </div>
                </div>

                {/* Evidence & Why They Fit */}
                <div className="pt-3 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Why They Fit (Verdicts &amp; Chemistry Evidence):
                    </span>
                    <ul className="space-y-1 text-slate-300">
                      {rank.topReasons.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {rank.bestExcerpt && (
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 italic">
                      <span className="text-slate-500 not-italic font-semibold text-[10px] uppercase block mb-0.5">
                        Key Transcript Excerpt:
                      </span>
                      &ldquo;{rank.bestExcerpt}&rdquo;
                    </div>
                  )}

                  {rank.redFlags && rank.redFlags.length > 0 && (
                    <div className="flex items-center gap-2 text-amber-400 text-xs pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Noted Friction / Red Flags: {rank.redFlags.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
