'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageCircle,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  Award,
} from 'lucide-react';
import { DateSimulation } from '@/lib/types';

export default function DateSimulationPage() {
  const params = useParams();
  const dateId = params.id as string;

  const [date, setDate] = useState<DateSimulation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/dates/${dateId}?include_verdicts=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data.date) setDate(data.date);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [dateId]);

  if (loading) {
    return (
      <div className="py-20 text-center text-slate-400">
        <Sparkles className="w-8 h-8 animate-spin mx-auto text-rose-500 mb-2" />
        <p>Replaying simulated agent date...</p>
      </div>
    );
  }

  if (!date) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-slate-300">Date simulation not found.</p>
        <Link href="/demo" className="text-rose-400 hover:underline">
          Return to Demo
        </Link>
      </div>
    );
  }

  const verdictA = date.verdicts[date.personA_id];
  const verdictB = date.verdicts[date.personB_id];

  const minScore = Math.min(verdictA?.score || 0, verdictB?.score || 0);
  const meanScore = ((verdictA?.score || 0) + (verdictB?.score || 0)) / 2;
  const bothWouldMeet = verdictA?.would_meet_again && verdictB?.would_meet_again;
  const mutualScore = Math.round(0.6 * minScore + 0.4 * meanScore + (bothWouldMeet ? 5 : 0));

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/demo"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Demo Overview</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={`/people/${date.personA_id}`}
            className="text-xs text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
          >
            {date.personA_name}&apos;s Profile
          </Link>
          <Link
            href={`/people/${date.personB_id}`}
            className="text-xs text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
          >
            {date.personB_name}&apos;s Profile
          </Link>
        </div>
      </div>

      {/* Date Header & Scenario */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-purple-950/30 border border-rose-900/40 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold">
          <MessageCircle className="w-3.5 h-3.5" />
          Autonomous 8-Turn Agent Date Replay
        </div>

        <div className="flex items-center justify-center gap-6 py-2">
          <div className="flex flex-col items-center gap-2 text-center">
            <Image
              src={date.personA_avatar}
              alt={date.personA_name}
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-rose-500/40 shadow-lg"
            />
            <span className="font-bold text-white text-sm">{date.personA_name}</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl font-black text-rose-400">vs</span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
              Agents Dating
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <Image
              src={date.personB_avatar}
              alt={date.personB_name}
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-purple-500/40 shadow-lg"
            />
            <span className="font-bold text-white text-sm">{date.personB_name}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 text-center italic max-w-xl mx-auto">
          &ldquo;{date.scenario}&rdquo;
        </p>
      </section>

      {/* Turn-by-Turn Chat Replay */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-400" />
          The Live Date Transcript
        </h2>

        <div className="space-y-4 p-4 sm:p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
          {date.turns.map((turn, idx) => {
            const isA = turn.speakerId === date.personA_id;

            return (
              <div
                key={idx}
                className={`flex gap-3 sm:gap-4 ${isA ? 'justify-start' : 'justify-end'}`}
              >
                {isA && (
                  <Image
                    src={date.personA_avatar}
                    alt={date.personA_name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover border border-rose-500/40 shrink-0 mt-1"
                  />
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl space-y-1 ${
                    isA
                      ? 'bg-slate-950 border border-slate-800 text-slate-200'
                      : 'bg-gradient-to-r from-rose-950/50 to-purple-950/50 border border-rose-900/40 text-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 text-[11px]">
                    <span className="font-bold text-rose-300">{turn.speakerName}</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px]">
                      {turn.topic}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed pt-1">
                    {turn.text}
                  </p>
                </div>

                {!isA && (
                  <Image
                    src={date.personB_avatar}
                    alt={date.personB_name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover border border-purple-500/40 shrink-0 mt-1"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Side-by-Side Dual Verdict Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-400" />
          Private Post-Date Verdicts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Verdict A */}
          {verdictA && (
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-rose-900/40 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {date.personA_name}&apos;s Verdict
                  </h3>
                  <p className="text-xs text-slate-400">Rating {date.personB_name}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-rose-400">{verdictA.score}</span>
                  <span className="text-xs text-slate-500"> / 100</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Chemistry</span>
                  <span className="font-bold text-rose-300">{verdictA.chemistry}%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Values</span>
                  <span className="font-bold text-blue-300">{verdictA.values_fit}%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Lifestyle</span>
                  <span className="font-bold text-emerald-300">{verdictA.lifestyle_fit}%</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                  Would Meet In Person?
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    verdictA.would_meet_again
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {verdictA.would_meet_again ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Yes, wants a second date</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Politely passes</span>
                    </>
                  )}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                  Private Reasons:
                </span>
                <ul className="space-y-1">
                  {verdictA.reasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Verdict B */}
          {verdictB && (
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-purple-900/40 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {date.personB_name}&apos;s Verdict
                  </h3>
                  <p className="text-xs text-slate-400">Rating {date.personA_name}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-purple-400">{verdictB.score}</span>
                  <span className="text-xs text-slate-500"> / 100</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Chemistry</span>
                  <span className="font-bold text-rose-300">{verdictB.chemistry}%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Values</span>
                  <span className="font-bold text-blue-300">{verdictB.values_fit}%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Lifestyle</span>
                  <span className="font-bold text-emerald-300">{verdictB.lifestyle_fit}%</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                  Would Meet In Person?
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    verdictB.would_meet_again
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {verdictB.would_meet_again ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Yes, wants a second date</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Politely passes</span>
                    </>
                  )}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                  Private Reasons:
                </span>
                <ul className="space-y-1">
                  {verdictB.reasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mutual Match Derivation Card */}
      <section className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
        <h4 className="font-bold text-white text-sm">
          Mutual Fit Formula Derivation:
        </h4>
        <p className="text-slate-400 leading-relaxed">
          Mutual compatibility formula: <code className="text-rose-300">0.6 · min({verdictA?.score}, {verdictB?.score}) + 0.4 · mean({verdictA?.score}, {verdictB?.score}) {bothWouldMeet ? '+ 5 (mutual green flag bonus)' : ''}</code> = <strong className="text-white font-bold">{mutualScore}%</strong>. A match requires both sides to agree, so weighting is anchored on the lower verdict score.
        </p>
      </section>
    </div>
  );
}
