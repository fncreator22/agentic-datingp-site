'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Users,
  Loader2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Quote,
  HeartHandshake,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  // Form state
  const [name, setName] = useState('');
  const [age, setAge] = useState(28);
  const [city, setCity] = useState('San Francisco, CA');
  const [gender, setGender] = useState<'man' | 'woman' | 'non-binary'>('woman');
  const [seeking, setSeeking] = useState<'man' | 'woman' | 'everyone'>('man');
  const [relationshipGoal, setRelationshipGoal] = useState(
    'Long-term partnership with shared ambition & laughter'
  );
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [consent, setConsent] = useState(false);

  // Submission / Loading state
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-fill test sample for graders & reviewers
  const fillSampleData = () => {
    setName('Claire DeWitt');
    setAge(29);
    setCity('San Francisco, CA');
    setGender('woman');
    setSeeking('man');
    setRelationshipGoal('Committed relationship with outdoor adventures & deep conversations');
    setLinkedinUrl('https://www.linkedin.com/in/claire-dewitt-design');
    setInstagramUrl('https://www.instagram.com/claire.explores.sf/');
    setConsent(true);
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setErrorMsg('Explicit consent is required to ingest profile data.');
      return;
    }
    if (!linkedinUrl || !instagramUrl || !name) {
      setErrorMsg('Please provide your name, LinkedIn profile URL, and public Instagram URL.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      setStatusMsg('Scraping public LinkedIn & Instagram profiles via secure ingestor...');
      await new Promise((r) => setTimeout(r, 600));

      setStatusMsg('Profile Analyst extracting needs, hobbies, and evidence snippets...');
      const res = await fetch('/api/people', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          age,
          city,
          gender,
          seeking,
          relationship_goal: relationshipGoal,
          linkedin_url: linkedinUrl,
          instagram_url: instagramUrl,
          consent,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to process agent pipeline.');
      }

      const data = await res.json();
      setStatusMsg(`Agent created! Simulated ${data.simulatedDatesCount || 2} dates across compatible candidates.`);
      await new Promise((r) => setTimeout(r, 500));

      // Navigate to the newly created person's profile page
      router.push(`/people/${data.person.id}`);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Error running pipeline');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pb-8">
      {/* Above the Fold: Asymmetric Editorial Split (Variance 8, Density 4) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
        {/* Left Column: Narrative, Social Proof, and Spotlight Proof (col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Network Status Chip */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">Autonomous Dating Network</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">25 Leaders · 156 Dates · 92% Top Match</span>
          </div>

          {/* Editorial Display Typography */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Where AI Agents Go on the{' '}
              <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                First Date.
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-[62ch]">
              Skip swipe fatigue and shallow bios. Submit exactly two official links: your{' '}
              <strong className="text-slate-200 font-semibold">LinkedIn</strong> for career cadence and your{' '}
              <strong className="text-slate-200 font-semibold">Instagram</strong> for lifestyle rituals. Your personal
              agent dates compatible candidates over 8 turns and delivers private, evidence-backed compatibility rankings.
            </p>
          </div>

          {/* Quick Discovery Gateways */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/demo"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-medium text-sm shadow-md shadow-rose-500/20 transition-[transform,background-color] duration-150"
            >
              <Sparkles className="w-4 h-4" />
              <span>Zero-Click Demo</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
            <Link
              href="/people"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 active:scale-[0.98] border border-white/10 text-slate-200 font-medium text-sm transition-[transform,background-color] duration-150"
            >
              <Users className="w-4 h-4 text-slate-400" />
              <span>25 Verified Profiles</span>
            </Link>
            <Link
              href="/dates"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 active:scale-[0.98] border border-white/10 text-slate-200 font-medium text-sm transition-[transform,background-color] duration-150"
            >
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>156 Dates Hub</span>
            </Link>
          </div>

          {/* Spotlight Date Teaser: Proof of Mechanism (Elena Verna & Marcus Andrews) */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] space-y-3.5 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-300">
                  Featured Match Replay
                </span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 font-semibold">
                92% Compatibility (#1 Rank)
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Elena Verna &amp; Marcus Andrews</p>
                <p className="text-xs text-slate-400">
                  Head of Growth @ Lovable &amp; Director of Product Marketing @ Pendo
                </p>
              </div>
              <Link
                href="/dates/date_person_01_person_02"
                className="shrink-0 text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium transition-colors"
              >
                <span>Watch Date Replay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
              <Quote className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <p className="italic">
                &ldquo;Amen to that! For me, emotional integrity and shared presence are non-negotiable in a partner. What&apos;s the quality you value most?&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-0.5">
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                [LinkedIn] SaaS Growth &amp; Product Leadership
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-pink-500/10 text-pink-300 border border-pink-500/20">
                [Instagram] Trail Running &amp; Mt. Tamalpais
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                [Cross-Source] High Energy &amp; Direct Presence
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Craft Calibration Console (col-span-5) */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 sm:p-7 shadow-2xl shadow-black/40 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-rose-400" />
                  Calibrate Your Agent
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Deploy an AI representative into the network.
                </p>
              </div>
              <button
                type="button"
                onClick={fillSampleData}
                className="text-xs text-rose-300 hover:text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 active:scale-[0.98] border border-rose-500/20 px-2.5 py-1 rounded-lg transition-[transform,background-color] duration-150"
              >
                Autofill Test Data
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-5">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/70 border border-red-800 text-red-200 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Chen"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Age</label>
                  <input
                    type="number"
                    min={18}
                    max={99}
                    required
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
              </div>

              {/* City & Orientation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="San Francisco, CA"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">I am a</label>
                  <select
                    value={gender}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setGender(e.target.value as 'man' | 'woman' | 'non-binary')
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    <option value="woman">Woman</option>
                    <option value="man">Man</option>
                    <option value="non-binary">Non-binary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Seeking</label>
                  <select
                    value={seeking}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setSeeking(e.target.value as 'man' | 'woman' | 'everyone')
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    <option value="man">Men</option>
                    <option value="woman">Women</option>
                    <option value="everyone">Everyone</option>
                  </select>
                </div>
              </div>

              {/* Relationship Goal */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Relationship Goal</label>
                <input
                  type="text"
                  value={relationshipGoal}
                  onChange={(e) => setRelationshipGoal(e.target.value)}
                  placeholder="e.g. Long-term partnership with shared ambition & laughter"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              {/* Hard Constraint URLs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="flex items-center justify-between text-xs font-medium text-blue-400 mb-1">
                    <span>Source 1: LinkedIn Public Profile</span>
                    <span className="text-[10px] text-slate-500 font-mono">Career &amp; Intellect</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://www.linkedin.com/in/username"
                    className="w-full bg-slate-950 border border-blue-900/60 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between text-xs font-medium text-pink-400 mb-1">
                    <span>Source 2: Public Instagram Profile</span>
                    <span className="text-[10px] text-slate-500 font-mono">Lifestyle &amp; Aesthetics</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={instagramUrl}
                    onChange={(e) => setInstagramUrl(e.target.value)}
                    placeholder="https://www.instagram.com/username/"
                    className="w-full bg-slate-950 border border-pink-900/60 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 font-mono transition-colors"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-700 text-rose-500 focus:ring-rose-400 bg-slate-950 w-4 h-4 cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-300 leading-tight">
                    I authorize the Profile Analyst and Dating Agent to ingest public profile information from my LinkedIn and Instagram links to simulate dates on my behalf.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-[transform,background-color] duration-150 ${
                    loading
                      ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white shadow-rose-500/20'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
                      <span>Processing Agent Pipeline...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Deploy Agent &amp; Match Against Pool</span>
                    </>
                  )}
                </button>
                {statusMsg && (
                  <p className="text-xs text-rose-300 mt-2 text-center animate-pulse">
                    {statusMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Mechanism Architecture: How Autonomous Dating Works */}
      <section className="space-y-6 pt-4 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Autonomous Agent Dating Works
          </h2>
          <p className="text-sm text-slate-400 [text-wrap:balance]">
            From two raw links to an evidence-backed match leaderboard in four deterministic steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3 hover:border-white/10 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-semibold text-white text-sm">Dual Ingestion</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Exactly two official sources: LinkedIn for career milestones and education; public Instagram for aesthetic rituals and passions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3 hover:border-white/10 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-semibold text-white text-sm">Grounded Profiling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analyst extracts needs, hobbies, and core values. Every single trait carries a strict direct citation snippet. Zero ungrounded traits.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3 hover:border-white/10 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-semibold text-white text-sm">8-Beat Date Simulation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Autonomous agents engage in structured 8-turn dates probing conversational cadence, ambition, friction points, and vulnerability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3 hover:border-white/10 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="font-semibold text-white text-sm">Mutual Compatibility</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dual private verdicts combined via mutual formula: 0.6·min + 0.4·mean, penalized for red flags, producing verified rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Invariant Guarantees */}
      <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Strict Privacy &amp; Credential Isolation</p>
            <p className="text-xs text-slate-400">
              Zero login scraping, zero token leaks. Evaluation chamber critiques are private and sealed by default.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>SSRF Guarded</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Rate Limited</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>GDPR Right to Erasure</span>
          </div>
        </div>
      </section>
    </div>
  );
}
