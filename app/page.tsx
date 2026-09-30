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
  UserCheck,
  Zap,
  Globe,
  Award,
  ChevronRight,
  MapPin,
  Briefcase,
  Heart,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';

// Seeded network members for kinetic marquee ribbon
const NETWORK_MEMBERS = [
  {
    name: 'Elena Verna',
    role: 'Head of Growth @ Lovable',
    city: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    tag: 'Trail Runner & Growth Exec',
    score: '92% Top Match',
  },
  {
    name: 'Marcus Andrews',
    role: 'Dir. of Product Marketing @ Pendo',
    city: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    tag: 'Ocean Surfer & Storyteller',
    score: '92% Match with Elena',
  },
  {
    name: 'Jessica Livingston',
    role: 'Co-founder @ Y Combinator',
    city: 'Palo Alto, CA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    tag: 'Author & Rose Gardener',
    score: '88% Match with Alexandr',
  },
  {
    name: 'Alexandr Wang',
    role: 'Founder & CEO @ Scale AI',
    city: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    tag: 'MIT Math & Classical Violin',
    score: '88% Top Match',
  },
  {
    name: 'Claire DeWitt',
    role: 'Brand Design Lead',
    city: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    tag: 'Design Systems & Backcountry',
    score: 'Verified Benchmark',
  },
  {
    name: 'Guillermo Rauch',
    role: 'CEO & Founder @ Vercel',
    city: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    tag: 'Next.js Creator & Reader',
    score: '86% Match Resonance',
  },
  {
    name: 'Sarah Guo',
    role: 'Founder @ Conviction VC',
    city: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    tag: 'AI Investor & Night Owl',
    score: '87% Mutual Chemistry',
  },
  {
    name: 'Amjad Masad',
    role: 'CEO & Founder @ Replit',
    city: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    tag: 'Hacker & Martial Arts',
    score: '87% Match with Sarah',
  },
];

// Interactive live date dialogue turns
const LIVE_SIMULATION_BEATS = [
  {
    beatNumber: 1,
    beatName: 'Social Icebreaker & Banter',
    speaker: 'Elena Verna',
    role: 'Head of Growth @ Lovable',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    text: 'Hey Marcus! I saw you catch sunrise surf sessions at Ocean Beach before product sprints. For me, Saturday morning trail runs on Mt. Tamalpais are sacred ground for decompressing.',
    citation: '[LinkedIn] Head of Growth · [Instagram] Mt. Tamalpais Trails',
    score: '85% Base Affinity',
    radar: 85,
  },
  {
    beatNumber: 2,
    beatName: 'Ambition & Daily Cadence',
    speaker: 'Marcus Andrews',
    role: 'Dir. of Product Marketing @ Pendo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    text: 'That cold Pacific fog clears the buffer like nothing else. High-tempo growth marketing demands extreme focus—if you do not anchor yourself physically, the velocity eats you alive.',
    citation: '[LinkedIn] Pendo Leadership · [Instagram] Ocean Beach Surfing',
    score: '88% Cadence Alignment',
    radar: 88,
  },
  {
    beatNumber: 3,
    beatName: 'Intellectual Sparring & Vulnerability',
    speaker: 'Elena Verna',
    role: 'Head of Growth @ Lovable',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    text: 'Exactly. I need someone who thrives in intellectual sparring and high-stakes problem solving, but can also turn off notifications, pour a dry cabernet, and laugh over experimental cooking.',
    citation: '[Instagram] Wine & Cooking · [Cross-Source] High Energy',
    score: '91% Value Alignment',
    radar: 91,
  },
  {
    beatNumber: 4,
    beatName: 'Sealed Mutual Verdict & In-Person Recommendation',
    speaker: 'Marcus Andrews',
    role: 'Dir. of Product Marketing @ Pendo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    text: 'All non-negotiables checked: 0 friction flags detected. Mutual compatibility formula evaluates to 92%. In-person recommendation: coffee and walk in Hayes Valley.',
    citation: '[Formula] 0.6·min + 0.4·mean · [Status] Rank #1 Match',
    score: '92% Mutual Top Match',
    radar: 92,
  },
];

// The 8-Beat Protocol Steps
const PROTOCOL_STEPS = [
  {
    num: '01',
    name: 'Social Icebreaker',
    summary: 'Conversational comfort and reciprocal warmth test.',
    prompt: 'Tests whether both parties establish comfortable banter without pretense or social anxiety.',
    metric: 'Tone & Responsiveness',
  },
  {
    num: '02',
    name: 'Intellectual Passion',
    summary: 'Explores life work, technical curiosity, and craft obsession.',
    prompt: 'Probes the depth of intellectual curiosity and whether professional ambitions inspire or intimidate.',
    metric: 'Cognitive Synergy',
  },
  {
    num: '03',
    name: 'Pressure & Ambition',
    summary: 'Evaluates resilience, stress coping, and 5-year horizons.',
    prompt: 'Analyzes how each person navigates high-stakes failure, career pivots, and emotional pressure.',
    metric: 'Emotional Endurance',
  },
  {
    num: '04',
    name: 'Domestic Living Pace',
    summary: 'Weekend habits, fitness rhythms, and domestic harmony.',
    prompt: 'Cross-checks culinary tastes, morning routines, noise tolerances, and weekend restoration.',
    metric: 'Lifestyle Concordance',
  },
  {
    num: '05',
    name: 'Vulnerability Exchange',
    summary: 'Authentic emotional safety and self-awareness.',
    prompt: 'Pushes past professional polish to evaluate honest self-reflection and communication boundaries.',
    metric: 'Empathy & Trust',
  },
  {
    num: '06',
    name: 'Moral Values & Loyalty',
    summary: 'Family outlook, integrity, and ethical foundations.',
    prompt: 'Examines deeply held ethical beliefs, loyalty under conflict, and fundamental priorities.',
    metric: 'Ethical Concordance',
  },
  {
    num: '07',
    name: 'Deal-Breaker Interrogation',
    summary: 'Direct cross-examination of explicit non-negotiables.',
    prompt: 'Strictly interrogates deal-breakers (e.g. cynicism, arrogance, smoking, location constraints).',
    metric: 'Friction Elimination',
  },
  {
    num: '08',
    name: 'Sealed Mutual Verdict',
    summary: 'Dual evaluations combined via non-linear compatibility calculus.',
    prompt: 'Evaluates 0.6·min(A,B) + 0.4·mean(A,B) penalized for flags. Sealed until mutual consent.',
    metric: 'Mutual Readiness',
  },
];

export default function HomePage() {
  const router = useRouter();

  // Interactive Live Date Simulation state
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 8-Beat Protocol explorer state
  const [selectedProtocolBeat, setSelectedProtocolBeat] = useState(0);

  // Stepped Calibration Studio state (Step 1, 2, 3)
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);

  // Form State
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

  // Loading & Submission
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-play dialogue simulator
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentBeatIndex((prev) => (prev + 1) % LIVE_SIMULATION_BEATS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Autofill sample data for reviewers
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
    setFormStep(3); // Jump straight to step 3 ready to launch!
  };

  const handleStepNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!name.trim()) {
        setErrorMsg('Please provide your full name.');
        return;
      }
      setErrorMsg('');
      setFormStep(2);
    } else if (formStep === 2) {
      if (!linkedinUrl.trim() || !instagramUrl.trim()) {
        setErrorMsg('Both LinkedIn and Instagram profile links are strictly required.');
        return;
      }
      setErrorMsg('');
      setFormStep(3);
    } else if (formStep === 3) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!consent) {
      setErrorMsg('Explicit consent is required to ingest profile data.');
      return;
    }
    if (!linkedinUrl || !instagramUrl || !name) {
      setErrorMsg('Please complete all profile fields.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      setStatusMsg('Scraping public LinkedIn & Instagram profiles via secure ingestor...');
      await new Promise((r) => setTimeout(r, 600));

      setStatusMsg('Profile Analyst extracting authentic needs, hobbies, and evidence snippets...');
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
      setStatusMsg(`Agent calibrated! Simulated ${data.simulatedDatesCount || 2} dates across compatible candidates.`);
      await new Promise((r) => setTimeout(r, 500));

      // Navigate to the newly created person's profile page
      router.push(`/people/${data.person.id}`);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Error running pipeline');
      setLoading(false);
    }
  };

  const currentBeat = LIVE_SIMULATION_BEATS[currentBeatIndex];
  const activeProtocol = PROTOCOL_STEPS[selectedProtocolBeat];

  return (
    <div className="relative space-y-32 lg:space-y-44 pb-20">
      {/* Ambient Atmospheric Lighting Blobs (Off-Main-Thread GPU Accelerated) */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none animate-warm-float -z-10" />
      <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[130px] pointer-events-none animate-float-slow -z-10" />
      <div className="absolute bottom-1/3 -right-48 w-[550px] h-[550px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none animate-float-reverse -z-10" />

      {/* SECTION 1: CINEMATIC EDITORIAL HERO */}
      <section className="pt-6 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Provocative Narrative & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Live Network Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-xs text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-live-dot" />
              <span className="font-semibold text-white tracking-wide">Autonomous Dating Pool</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300 font-mono">25 Leaders · 156 Dates · 92% Top Match</span>
            </div>

            {/* Editorial Display Typography */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.03] [text-wrap:balance]">
                Where Agents Fall in Love Before{' '}
                <span className="bg-gradient-to-r from-rose-300 via-pink-200 to-rose-400 bg-clip-text text-transparent">
                  Humans Step into the Room.
                </span>
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-[58ch]">
                The end of superficial swipes, ghosting, and performative bios. Your personal AI agent is synthesized
                strictly from two public truths—your professional intellect on{' '}
                <strong className="text-white font-semibold">LinkedIn</strong> and your living rituals on{' '}
                <strong className="text-white font-semibold">Instagram</strong>. Your delegate dates compatible candidates
                over 8 turns, uncovering chemistry before you ever exchange numbers.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#calibrate"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-sm shadow-xl shadow-rose-500/25 transition-[transform,background-color] duration-150"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calibrate Your Agent</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 active:scale-[0.98] border border-white/10 text-slate-200 font-medium text-sm transition-[transform,background-color] duration-150"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4 text-rose-400" />
                    <span>Pause Live Simulation</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-rose-400" />
                    <span>Play Live Simulation</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Social Proof Strip */}
            <div className="flex items-center gap-6 pt-3 text-xs text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Questionnaires</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Direct Quote Citations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sealed Private Transcripts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Concierge / Smartphone Dialogue Simulator (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Phone Frame Chassis */}
            <div className="relative mx-auto max-w-[390px] rounded-[3rem] p-3.5 bg-gradient-to-b from-slate-700/50 via-slate-900/80 to-slate-950 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl">
              {/* Dynamic Island Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-between px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400">Agent Active</span>
              </div>

              {/* Inner Screen Canvas */}
              <div className="relative rounded-[2.5rem] bg-slate-950 border border-white/10 overflow-hidden pt-8 pb-5 px-5 space-y-4">
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <img
                        src={currentBeat.avatar}
                        alt={currentBeat.speaker}
                        className="w-10 h-10 rounded-full object-cover border-2 border-rose-500/50"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-white flex items-center gap-1">
                        {currentBeat.speaker}
                        <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-rose-500/20 text-rose-300">
                          AI Delegate
                        </span>
                      </h2>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{currentBeat.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-rose-400">{currentBeat.score}</span>
                    <p className="text-[9px] font-mono text-slate-500">Beat {currentBeat.beatNumber} of 4</p>
                  </div>
                </div>

                {/* Compatibility Progress Radar Meter */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-rose-400" />
                      Mutual Resonance Radar
                    </span>
                    <span className="font-mono text-rose-300 font-bold">{currentBeat.radar}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${currentBeat.radar}%` }}
                    />
                  </div>
                </div>

                {/* Dialogue Speech Bubble */}
                <div className="space-y-3 min-h-[170px] flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    <MessageSquare className="w-3 h-3 text-rose-400" />
                    <span>Topic: {currentBeat.beatName}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed shadow-inner">
                    <Quote className="w-3.5 h-3.5 text-rose-400 mb-1.5 inline mr-1 opacity-70" />
                    <span className="italic">&ldquo;{currentBeat.text}&rdquo;</span>
                  </div>

                  <p className="text-[10px] font-mono text-slate-400 px-1">
                    Citation: <span className="text-slate-300">{currentBeat.citation}</span>
                  </p>
                </div>

                {/* Phone Turn Scrubber Controls */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {LIVE_SIMULATION_BEATS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentBeatIndex(idx);
                          setIsAutoPlaying(false);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentBeatIndex === idx ? 'w-6 bg-rose-400' : 'w-2 bg-slate-800 hover:bg-slate-700'
                        }`}
                        aria-label={`Jump to turn ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <Link
                    href="/dates/date_person_01_person_02"
                    className="text-[11px] font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 active:scale-[0.98] transition-colors"
                  >
                    <span>Full Transcript</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KINETIC INFINITE MARQUEE (The Living Network) */}
      <section className="space-y-6 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-4 border-y border-white/5 bg-slate-950/40">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE VERIFIED POOL MEMBERS
          </span>
          <span className="hidden sm:inline">25 LEADERS · CONTINUOUS DUAL MATCHING</span>
        </div>

        {/* Ribbon 1: Moving Forward */}
        <div className="animate-marquee gap-4 flex items-center">
          {NETWORK_MEMBERS.concat(NETWORK_MEMBERS).map((person, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-md shrink-0 hover:border-rose-500/40 transition-colors"
            >
              <img
                src={person.avatar}
                alt={person.name}
                className="w-9 h-9 rounded-full object-cover border border-rose-500/40 shrink-0"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-white leading-tight flex items-center gap-1.5">
                  {person.name}
                  <span className="text-[10px] font-mono text-rose-300 font-normal">{person.score}</span>
                </p>
                <p className="text-[11px] text-slate-400 line-clamp-1">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ribbon 2: Moving Reverse */}
        <div className="animate-marquee-reverse gap-4 flex items-center">
          {[
            'Elena Verna & Marcus Andrews — 92% Top Mutual Match',
            'Alexandr Wang & Jessica Livingston — 88% Intellectual Fit',
            'Claire DeWitt & Benchmark Candidates — Verified Active Pool',
            'Sarah Guo & Amjad Masad — 87% Conviction Alignment',
            'Guillermo Rauch — Next.js Infrastructure & Continuous Deployment',
            'Zero Fabricated Bios — 100% Ingested from LinkedIn & Instagram',
          ]
            .concat([
              'Elena Verna & Marcus Andrews — 92% Top Mutual Match',
              'Alexandr Wang & Jessica Livingston — 88% Intellectual Fit',
              'Claire DeWitt & Benchmark Candidates — Verified Active Pool',
              'Sarah Guo & Amjad Masad — 87% Conviction Alignment',
            ])
            .map((quote, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-900/50 border border-white/5 text-xs font-mono text-slate-300 shrink-0 flex items-center gap-2"
              >
                <Sparkles className="w-3 h-3 text-rose-400 shrink-0" />
                <span>{quote}</span>
              </div>
            ))}
        </div>
      </section>

      {/* SECTION 3: THE TWO-SOURCE SIGNAL ARCHITECTURE (Visual Unboxing) */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-rose-400" />
            <span>Signal Extraction Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Authentic Signal Without Questionnaires
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
            Dating profiles are performative. Humans exaggerate or write safe clichés. We bypass the illusion by
            cross-referencing professional intellect with weekend lifestyle rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: The Intellect & Velocity (LinkedIn) */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/10 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl space-y-6 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  Source 01 · Professional Signal
                </span>
                <h3 className="text-xl font-bold text-white mt-1">LinkedIn Public Intellect</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Extracts career velocity, problem-solving altitude, and cognitive cadence.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Executive accountability and work ethic</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Cognitive sparring style &amp; curiosity domains</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Career trajectory &amp; 5-year ambition horizon</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-blue-300/90 leading-relaxed">
              Snippet: &ldquo;Head of Growth at Lovable · Scaling high-velocity AI developer platforms.&rdquo;
            </div>
          </div>

          {/* Column 2: The Neural Nexus (The Grounding Engine) */}
          <div className="rounded-3xl bg-slate-900/90 border border-rose-500/40 p-8 shadow-[0_20px_50px_-15px_rgba(244,63,94,0.15),inset_0_1px_0_rgba(244,63,94,0.2)] backdrop-blur-xl space-y-6 flex flex-col justify-between relative">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center justify-center font-bold text-lg">
                <Cpu className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-rose-300 uppercase tracking-wider font-semibold">
                  Synthesis Nexus
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Grounded Profile Analyst</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Synthesizes both streams to eliminate hallucinations with mathematical certainty.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>100% trait attribution with verbatim snippets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Statistical confidence scoring (&ge; 0.90)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Hard deal-breaker extraction &amp; red-flag alerts</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-900/70 text-[11px] font-mono text-rose-200 leading-relaxed text-center font-bold">
              Formula: 0.6·min(ScoreA, ScoreB) + 0.4·mean - Friction
            </div>
          </div>

          {/* Column 3: The Living Soul (Instagram) */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/10 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl space-y-6 flex flex-col justify-between hover:border-pink-500/30 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-500/30 text-pink-400 flex items-center justify-center font-bold text-lg">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-pink-400 uppercase tracking-wider font-semibold">
                  Source 02 · Lifestyle Signal
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Instagram Living Rituals</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Extracts domestic rhythms, weekend restoration, and visual aesthetic.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-white/5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Weekend outdoor pursuit and fitness cadence</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Interior design, culinary tastes, and home peace</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Spontaneous humor, pets, and genuine warmth</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-pink-300/90 leading-relaxed">
              Snippet: &ldquo;Sunrise trail run across Mount Tamalpais ridge. Coastal mist and mountain air.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 8-BEAT DATE PROTOCOL (Interactive Journey) */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
            <SlidersHorizontal className="w-3.5 h-3.5 text-rose-400" />
            <span>Interactive Protocol Radar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            The 8-Beat Simulation Architecture
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
            Each date is an eight-turn structured negotiation where synthetic delegates stress-test intellectual
            chemistry, lifestyle friction, and non-negotiables before you ever meet.
          </p>
        </div>

        {/* 8-Beat Interactive Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {PROTOCOL_STEPS.map((step, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedProtocolBeat(idx)}
              className={`p-3 rounded-2xl text-left transition-[transform,background-color,border-color] duration-150 active:scale-[0.98] border ${
                selectedProtocolBeat === idx
                  ? 'bg-rose-500/20 border-rose-500/50 shadow-lg shadow-rose-500/10'
                  : 'bg-slate-900/60 border-white/5 hover:border-white/15'
              }`}
            >
              <span className="text-[10px] font-mono text-rose-400 font-bold">BEAT {step.num}</span>
              <p className="text-xs font-bold text-white line-clamp-1 mt-0.5">{step.name}</p>
            </button>
          ))}
        </div>

        {/* Active Beat Deep-Dive Card */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-bold">
                Beat {activeProtocol.num} of 08
              </span>
              <span className="text-xs font-mono text-slate-400">Metric Tested: {activeProtocol.metric}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{activeProtocol.name}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{activeProtocol.prompt}</p>
          </div>
          <div className="md:col-span-4 p-5 rounded-2xl bg-slate-950/80 border border-white/5 space-y-2 text-right">
            <span className="text-[11px] font-mono text-slate-400">Grounded Protocol Requirement</span>
            <p className="text-xs font-semibold text-rose-300">
              Evaluated strictly through direct cross-referencing of both public feeds.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROGRESSIVE AGENT CALIBRATION STUDIO */}
      <section id="calibrate" className="pt-8">
        <div className="max-w-3xl mx-auto rounded-[2.5rem] bg-slate-900/80 backdrop-blur-2xl border border-white/15 p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden space-y-8">
          {/* Ambient Inner Lighting */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Studio Header & Reviewer Autofill Trigger */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold">
                Autonomous Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Calibrate Your Delegate
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Step {formStep} of 3 · Ingests signal and begins matching across the 25-leader pool.
              </p>
            </div>

            <button
              type="button"
              onClick={fillSampleData}
              className="text-xs text-rose-300 hover:text-white bg-rose-500/15 hover:bg-rose-500/25 active:scale-[0.98] border border-rose-500/30 px-3.5 py-2 rounded-xl font-medium transition-[transform,background-color] duration-150"
            >
              Autofill Benchmark Profile (Claire)
            </button>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="grid grid-cols-3 gap-3">
            <div
              className={`h-1.5 rounded-full transition-colors ${
                formStep >= 1 ? 'bg-rose-500' : 'bg-slate-800'
              }`}
            />
            <div
              className={`h-1.5 rounded-full transition-colors ${
                formStep >= 2 ? 'bg-rose-500' : 'bg-slate-800'
              }`}
            />
            <div
              className={`h-1.5 rounded-full transition-colors ${
                formStep >= 3 ? 'bg-rose-500' : 'bg-slate-800'
              }`}
            />
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-950/80 border border-red-800 text-red-200 text-xs">
              {errorMsg}
            </div>
          )}

          {/* Step 1: Core Identity & Geographic Anchor */}
          {formStep === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Chen"
                    className="w-full bg-slate-950/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Age</label>
                  <input
                    type="number"
                    min={18}
                    max={99}
                    required
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full bg-slate-950/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="San Francisco, CA"
                    className="w-full bg-slate-950/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">I am a</label>
                  <select
                    value={gender}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setGender(e.target.value as 'man' | 'woman' | 'non-binary')
                    }
                    className="w-full bg-slate-950/90 border border-white/10 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                  >
                    <option value="woman">Woman</option>
                    <option value="man">Man</option>
                    <option value="non-binary">Non-binary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Seeking</label>
                  <select
                    value={seeking}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setSeeking(e.target.value as 'man' | 'woman' | 'everyone')
                    }
                    className="w-full bg-slate-950/90 border border-white/10 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                  >
                    <option value="man">Men</option>
                    <option value="woman">Women</option>
                    <option value="everyone">Everyone</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleStepNext}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-sm shadow-lg shadow-rose-500/20 transition-all"
                >
                  <span>Continue to Signal Ingestion</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Two-Source Verification */}
          {formStep === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-4">
                <div>
                  <label className="flex items-center justify-between text-xs font-semibold text-blue-400 mb-1.5">
                    <span>Source 1: LinkedIn Public Profile</span>
                    <span className="text-[10px] text-slate-500 font-mono">Career &amp; Intellect</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://www.linkedin.com/in/username"
                    className="w-full bg-slate-950/90 border border-blue-900/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="flex items-center justify-between text-xs font-semibold text-pink-400 mb-1.5">
                    <span>Source 2: Public Instagram Profile</span>
                    <span className="text-[10px] text-slate-500 font-mono">Living Rituals &amp; Aesthetics</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={instagramUrl}
                    onChange={(e) => setInstagramUrl(e.target.value)}
                    placeholder="https://www.instagram.com/username/"
                    className="w-full bg-slate-950/90 border border-pink-900/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-pink-500 font-mono transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  ← Back to Identity
                </button>
                <button
                  type="button"
                  onClick={handleStepNext}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-sm shadow-lg shadow-rose-500/20 transition-all"
                >
                  <span>Continue to Intent</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Intent & Agent Deployment */}
          {formStep === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Relationship Goal
                </label>
                <input
                  type="text"
                  value={relationshipGoal}
                  onChange={(e) => setRelationshipGoal(e.target.value)}
                  placeholder="e.g. Long-term partnership with shared ambition & laughter"
                  className="w-full bg-slate-950/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                />
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 rounded border-slate-700 text-rose-500 focus:ring-rose-400 bg-slate-950 w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs text-slate-300 group-hover:text-white leading-relaxed">
                    I authorize the Profile Analyst and Dating Agent to ingest public profile information from my
                    LinkedIn and Instagram links to simulate dates on my behalf under the DualAgent Two-Source Protocol.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setFormStep(2)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  ← Back to Sources
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`py-4 px-8 rounded-xl font-bold text-sm flex items-center gap-2.5 shadow-2xl active:scale-[0.98] transition-all ${
                    loading
                      ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-rose-500/30'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
                      <span>Synthesizing Agent &amp; Simulating Pool...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Deploy Agent &amp; Run Dating Pipeline</span>
                    </>
                  )}
                </button>
              </div>

              {statusMsg && (
                <p className="text-xs text-rose-300 mt-2 text-center animate-pulse">
                  {statusMsg}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: TOP MUTUAL MATCH CASE STUDIES */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-2">
              <Award className="w-3.5 h-3.5 text-rose-400" />
              <span>Verified Match Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Top Mutual Pairings in the Network
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Real simulations run across our seed pool of 25 Silicon Valley leaders.
            </p>
          </div>
          <Link
            href="/dates"
            className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 active:scale-[0.98] transition-colors"
          >
            <span>Explore all 156 dates in transcript hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Elena & Marcus */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl p-7 shadow-lg space-y-5 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold">
                  92% Compatibility
                </span>
                <span className="text-xs text-slate-500 font-mono">Rank #1 Match</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                  alt="Elena"
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/40"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
                  alt="Marcus"
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-500/40 -ml-5"
                />
                <div>
                  <h3 className="text-sm font-bold text-white">Elena &amp; Marcus</h3>
                  <p className="text-xs text-slate-400">Lovable &amp; Pendo</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 italic border-l-2 border-rose-500/60 pl-3 leading-relaxed">
                &ldquo;Emotional integrity and shared presence are non-negotiable. Direct honesty without ego sharpens both of us.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">San Francisco, CA</span>
              <Link
                href="/dates/date_person_01_person_02"
                className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 active:scale-[0.98] transition-colors"
              >
                <span>Read Transcript</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Jessica & Alexandr */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl p-7 shadow-lg space-y-5 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold">
                  88% Compatibility
                </span>
                <span className="text-xs text-slate-500 font-mono">High Intellectual Fit</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
                  alt="Jessica"
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/40"
                />
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"
                  alt="Alexandr"
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-500/40 -ml-5"
                />
                <div>
                  <h3 className="text-sm font-bold text-white">Jessica &amp; Alexandr</h3>
                  <p className="text-xs text-slate-400">YC &amp; Scale AI</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 italic border-l-2 border-rose-500/60 pl-3 leading-relaxed">
                &ldquo;Earnest integrity above intellect alone. Classical Bach violin partitas meet oral history of visionary innovators.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">Palo Alto &amp; SF</span>
              <Link
                href="/people/person_24"
                className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 active:scale-[0.98] transition-colors"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Claire DeWitt (Benchmark) */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl p-7 shadow-lg space-y-5 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                  Active Benchmark
                </span>
                <span className="text-xs text-slate-500 font-mono">Verified Seed</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                  alt="Claire"
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40"
                />
                <div>
                  <h3 className="text-sm font-bold text-white">Claire DeWitt</h3>
                  <p className="text-xs text-slate-400">Brand Design Lead</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 italic border-l-2 border-emerald-500/60 pl-3 leading-relaxed">
                &ldquo;Pre-configured with authentic LinkedIn design milestones and public Instagram outdoor trail logs.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">San Francisco, CA</span>
              <button
                type="button"
                onClick={fillSampleData}
                className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 active:scale-[0.98] transition-colors"
              >
                <span>Load in Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SECURITY & INVARIANT GUARANTEES */}
      <section className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/10 backdrop-blur-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
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
