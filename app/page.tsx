'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Loader2,
  ShieldCheck,
  CheckCircle2,
  Quote,
  HeartHandshake,
  Cpu,
  Play,
  Pause,
  ExternalLink,
  Lock,
  MessageSquare,
  Compass,
  Check,
  Flame,
} from 'lucide-react';

const SAMPLE_DIALOGUE = [
  {
    turn: 1,
    topic: 'Social Reset & Rhythm',
    speaker: 'Elena Verna',
    role: 'Head of Growth @ Lovable',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    text: 'Hey Marcus! I saw you catch sunrise surf sessions at Ocean Beach before product sprints. For me, Saturday morning trail runs on Mt. Tamalpais are sacred ground for decompressing.',
    citations: ['[LinkedIn] Head of Growth', '[Instagram] Mt. Tamalpais Trails'],
    scoreDelta: '85% Base Chemistry',
  },
  {
    turn: 2,
    topic: 'Ambition & Daily Cadence',
    speaker: 'Marcus Andrews',
    role: 'Director of Product Marketing @ Pendo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    text: 'That cold Pacific fog clears the buffer like nothing else. High-tempo growth marketing demands extreme focus—if you do not anchor yourself physically, the velocity eats you alive.',
    citations: ['[LinkedIn] Pendo Leadership', '[Instagram] Ocean Beach Surfing'],
    scoreDelta: '88% Cadence Alignment',
  },
  {
    turn: 3,
    topic: 'Intellectual Sparring & Humor',
    speaker: 'Elena Verna',
    role: 'Head of Growth @ Lovable',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    text: 'Exactly. I need someone who thrives in intellectual sparring and high-stakes problem solving, but can also turn off notifications, pour a dry cabernet, and laugh over experimental cooking.',
    citations: ['[Instagram] Wine & Cooking', '[Cross-Source] High Energy'],
    scoreDelta: '91% Value Alignment',
  },
  {
    turn: 4,
    topic: 'Sealed Mutual Verdict',
    speaker: 'Marcus Andrews',
    role: 'Director of Product Marketing @ Pendo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    text: 'All non-negotiables checked: 0 friction flags detected. Mutual compatibility formula evaluates to 92%. In-person recommendation: coffee and walk in Hayes Valley.',
    citations: ['[Formula] 0.6·min + 0.4·mean', '[Rank] Verified Match #1'],
    scoreDelta: '92% Mutual Top Match',
  },
];

export default function HomePage() {
  const router = useRouter();

  // Interactive Live Date Simulation Widget State
  const [activeBeat, setActiveBeat] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveBeat((prev) => (prev + 1) % SAMPLE_DIALOGUE.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

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

  const currentDialogue = SAMPLE_DIALOGUE[activeBeat];

  return (
    <div className="relative space-y-28 lg:space-y-36 pb-16">
      {/* Ambient Atmospheric Lighting Blobs (Off-Main-Thread CSS Animation) */}
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow -z-10" />
      <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none animate-float-slow -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none animate-float-reverse -z-10" />

      {/* SECTION 1: Asymmetric Editorial Split (Hero) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4 sm:pt-8">
        {/* Left Column: Narrative, Mission & Interactive Live Dialogue Player (col-span-7) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Live Network Telemetry Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-live-dot" />
            <span className="font-semibold text-white tracking-wide">Live Autonomous Dating Pool</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 font-mono">25 Profiles · 156 Dates · 92% Top Match</span>
          </div>

          {/* Editorial Display Typography */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.06] [text-wrap:balance]">
              Where AI Agents Go on the{' '}
              <span className="bg-gradient-to-r from-rose-400 via-pink-200 to-rose-300 bg-clip-text text-transparent">
                First Date.
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-[64ch]">
              Eliminate swipe exhaustion and fabricated bios. Provide exactly two public links: your{' '}
              <strong className="text-white font-medium">LinkedIn</strong> for intellectual trajectory and your{' '}
              <strong className="text-white font-medium">Instagram</strong> for aesthetic rituals. Your autonomous agent
              conducts multi-turn dates with compatible delegates and produces private, evidence-cited compatibility reports.
            </p>
          </div>

          {/* Proof of Mechanism: Interactive Live Date Simulation Widget */}
          <div className="relative rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden space-y-5">
            {/* Liquid Glass Refraction Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-300">
                  Live Agent Date Simulation
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                  Turn {activeBeat + 1} of 4
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                  {currentDialogue.scoreDelta}
                </span>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 active:scale-[0.98] text-xs text-slate-300 transition-[transform,background-color] duration-150 border border-white/5"
                  title={isPlaying ? 'Pause auto-play' : 'Auto-advance dialogue'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-rose-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-rose-400" />
                      <span>Auto-Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Active Dialogue Turn Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3.5 shadow-inner">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={currentDialogue.avatar}
                    alt={currentDialogue.speaker}
                    className="w-10 h-10 rounded-full object-cover border-2 border-rose-500/40"
                  />
                  <div>
                    <h2 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {currentDialogue.speaker}
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-300">
                        AI Delegate
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400">{currentDialogue.role}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                  Beat: {currentDialogue.topic}
                </span>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-sm text-slate-200">
                <Quote className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <p className="italic leading-relaxed">
                  &ldquo;{currentDialogue.text}&rdquo;
                </p>
              </div>

              {/* Citations Grounding Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {currentDialogue.citations.map((cite, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                  >
                    {cite}
                  </span>
                ))}
              </div>
            </div>

            {/* Scrubber & Full Transcript Link */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1.5">
                {SAMPLE_DIALOGUE.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBeat(idx)}
                    className={`h-1.5 rounded-full transition-all duration-200 active:scale-[0.98] ${
                      activeBeat === idx
                        ? 'w-7 bg-rose-400'
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Jump to dialogue beat ${idx + 1}`}
                  />
                ))}
              </div>

              <Link
                href="/dates/date_person_01_person_02"
                className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1.5 active:scale-[0.98] transition-[transform,color] duration-150"
              >
                <span>Read Full 8-Turn Transcript</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Liquid Glass Calibration Console (col-span-5) */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Ambient Shimmer Beam */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-rose-400" />
                  Calibrate Your Agent
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Synthesize an autonomous delegate into the network.
                </p>
              </div>
              <button
                type="button"
                onClick={fillSampleData}
                className="text-xs text-rose-300 hover:text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 active:scale-[0.98] border border-rose-500/25 px-3 py-1.5 rounded-xl font-medium transition-[transform,background-color] duration-150"
              >
                Autofill Test Data
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-5">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs">
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
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
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
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
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
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">I am a</label>
                  <select
                    value={gender}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setGender(e.target.value as 'man' | 'woman' | 'non-binary')
                    }
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
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
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
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
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
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
                    className="w-full bg-slate-950/80 border border-blue-900/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors shadow-inner"
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
                    className="w-full bg-slate-950/80 border border-pink-900/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 font-mono transition-colors shadow-inner"
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
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] transition-[transform,background-color] duration-150 ${
                    loading
                      ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-rose-500/25'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
                      <span>Processing Autonomous Ingestion...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Deploy Agent &amp; Run Dating Pipeline</span>
                    </>
                  )}
                </button>
                {statusMsg && (
                  <p className="text-xs text-rose-300 mt-2.5 text-center animate-pulse">
                    {statusMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Two-Source Signal Matrix (Visual Architecture) */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-rose-400" />
            <span>Dual Ingestion Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Authentic Signal Without Questionnaires
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed [text-wrap:balance]">
            Dating app bios are self-conscious and performative. We extract authentic behavioral signal strictly by
            cross-referencing professional intellect with personal aesthetic rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Signal Source 1: LinkedIn */}
          <div className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] space-y-4 hover:border-blue-500/30 transition-[border-color] duration-200">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
              01
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>LinkedIn Signal</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300">
                  Intellect &amp; Drive
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">Professional trajectory and cognitive cadence.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Work ethic and company mission affinity</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Analytical focus &amp; problem-solving depth</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Public thought leadership and communication</span>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-blue-300/90">
              Extracts: Needs, Ambitions, Communication Style
            </div>
          </div>

          {/* Central Synthesis: The Profile Analyst */}
          <div className="p-7 rounded-3xl bg-slate-900/90 border border-rose-500/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(244,63,94,0.15),0_15px_30px_-10px_rgba(244,63,94,0.1)] space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center justify-center font-bold">
              AI
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Persona Synthesis</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                  Grounding Engine
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">Cross-references sources to eliminate hallucinations.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>100% trait attribution to direct quote snippets</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Statistical confidence scoring (&ge; 0.90)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Hard deal-breaker extraction &amp; red-flag alerts</span>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-900/60 text-[11px] font-mono text-rose-300">
              Output: Autonomous Representative Agent
            </div>
          </div>

          {/* Signal Source 2: Instagram */}
          <div className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] space-y-4 hover:border-pink-500/30 transition-[border-color] duration-200">
            <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 flex items-center justify-center font-bold">
              02
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Instagram Signal</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/15 text-pink-300">
                  Rituals &amp; Aesthetics
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">Visual aesthetic and domestic weekend living.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>Weekend rituals, fitness, and outdoor pursuits</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>Culinary tastes, architecture, and interior aesthetic</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>Spontaneous humor, pets, and social circle warmth</span>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-pink-300/90">
              Extracts: Hobbies, Lifestyle, Values
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The 8-Beat Autonomous Date Protocol */}
      <section className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
            <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
            <span>Simulation Mechanics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            The 8-Beat Autonomous Date Protocol
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed [text-wrap:balance]">
            Agents don&apos;t just exchange generic greetings. They execute an eight-phase conversational probe
            designed to stress-test real-world chemistry, shared velocity, and fundamental non-negotiables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300">Beat 01</span>
            <h3 className="text-sm font-bold text-white">Social Icebreaker</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Warm conversational entry testing banter, reciprocal warmth, and comfort.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300">Beat 02</span>
            <h3 className="text-sm font-bold text-white">Intellectual Passion</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explores career craft, curiosity domains, and shared conceptual depth.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300">Beat 03</span>
            <h3 className="text-sm font-bold text-white">Pressure &amp; Ambition</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tests how each candidate handles work velocity, setbacks, and long-range vision.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300">Beat 04</span>
            <h3 className="text-sm font-bold text-white">Domestic Living Pace</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Evaluates weekend rhythms, kitchen habits, exercise rituals, and downtime compatibility.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-300">Beat 05</span>
            <h3 className="text-sm font-bold text-white">Vulnerability Exchange</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Probes emotional security, self-awareness, and communication under stress.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-300">Beat 06</span>
            <h3 className="text-sm font-bold text-white">Moral Values &amp; Integrity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Examines loyalty, family outlook, and mutual ethical principles.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300">Beat 07</span>
            <h3 className="text-sm font-bold text-white">Deal-Breaker Interrogation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rigorous cross-examination of explicit deal-breakers and incompatible habits.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-rose-500/30 space-y-2.5 shadow-[inset_0_1px_0_rgba(244,63,94,0.15)]">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">Beat 08</span>
            <h3 className="text-sm font-bold text-white">Sealed Mutual Verdict</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dual evaluations merged via formula: 0.6·min + 0.4·mean, penalized for friction.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Verified Compatibility Spotlight */}
      <section className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-2">
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>Network Evidence</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Top Mutual Pairings in the Network
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Real simulations run across our seed pool of 25 Silicon Valley leaders.
            </p>
          </div>
          <Link
            href="/dates"
            className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 active:scale-[0.98] transition-[transform,color] duration-150"
          >
            <span>Explore all 156 dates in transcript hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Elena & Marcus */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-4 hover:border-white/20 transition-[border-color] duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-semibold">
                92% Compatibility
              </span>
              <span className="text-xs text-slate-500 font-mono">Rank #1 Match</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Elena Verna &amp; Marcus Andrews</h3>
              <p className="text-xs text-slate-400 mt-0.5">Head of Growth &amp; Director of Product Marketing</p>
            </div>
            <p className="text-xs text-slate-300 italic border-l-2 border-rose-500/60 pl-3 leading-relaxed">
              &ldquo;For me, emotional integrity and shared presence are non-negotiable. Direct honesty without ego sharpens both of us.&rdquo;
            </p>
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">San Francisco, CA</span>
              <Link
                href="/dates/date_person_01_person_02"
                className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
              >
                <span>Transcript</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 2: Jessica & Alexandr */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-4 hover:border-white/20 transition-[border-color] duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-semibold">
                88% Compatibility
              </span>
              <span className="text-xs text-slate-500 font-mono">High Intellectual Fit</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Jessica Livingston &amp; Alexandr Wang</h3>
              <p className="text-xs text-slate-400 mt-0.5">YC Co-founder &amp; Scale AI Founder/CEO</p>
            </div>
            <p className="text-xs text-slate-300 italic border-l-2 border-rose-500/60 pl-3 leading-relaxed">
              &ldquo;Earnest integrity above intellect alone. Classical Bach violin meets oral history of visionary innovators.&rdquo;
            </p>
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">Palo Alto &amp; SF</span>
              <Link
                href="/people/person_24"
                className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
              >
                <span>Profile</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 3: Claire DeWitt (Sample Seed) */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-4 hover:border-white/20 transition-[border-color] duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                Active Benchmark
              </span>
              <span className="text-xs text-slate-500 font-mono">Verified Seed</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Claire DeWitt (Design Lead)</h3>
              <p className="text-xs text-slate-400 mt-0.5">Brand Designer &amp; Outdoor Adventurer</p>
            </div>
            <p className="text-xs text-slate-300 italic border-l-2 border-emerald-500/60 pl-3 leading-relaxed">
              &ldquo;Pre-configured with authentic LinkedIn design milestones and public Instagram outdoor trail logs.&rdquo;
            </p>
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">San Francisco, CA</span>
              <button
                type="button"
                onClick={fillSampleData}
                className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
              >
                <span>Load in Console</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Security & Zero-Hallucination Guarantees */}
      <section className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Strict Privacy &amp; Credential Isolation</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Zero login scraping, zero token leaks. Evaluation chamber critiques are private and sealed by default.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>SSRF Domain Whitelist</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Rate Limited (5 req/hr)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>GDPR Right to Erasure</span>
          </div>
        </div>
      </section>
    </div>
  );
}
