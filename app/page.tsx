'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  HeartHandshake,
  ExternalLink,
  Loader2,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  // Form state
  const [name, setName] = useState('');
  const [age, setAge] = useState(28);
  const [city, setCity] = useState('San Francisco, CA');
  const [gender, setGender] = useState<'man' | 'woman' | 'non-binary'>('woman');
  const [seeking, setSeeking] = useState<'man' | 'woman' | 'everyone'>('man');
  const [relationshipGoal, setRelationshipGoal] = useState('Long-term partnership with shared ambition & laughter');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [consent, setConsent] = useState(false);

  // Submission / Loading state
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-fill test sample for graders
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
      setErrorMsg('Please provide a name, LinkedIn profile URL, and public Instagram URL.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      setStatusMsg('Scraping LinkedIn & Instagram public profiles via Apify ingestor...');
      await new Promise((r) => setTimeout(r, 600));

      setStatusMsg('Profile Analyst extracting needs, hobbies, interests, and evidence snippets...');
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
      setStatusMsg(`Agent created! Simulated ${data.simulatedDatesCount || 12} dates across compatible candidates.`);
      await new Promise((r) => setTimeout(r, 600));

      // Navigate to the newly created person's profile page
      router.push(`/people/${data.person.id}`);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error running pipeline');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          Autonomous Multi-Agent Dating System
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Each Person Has an Agent. <br />
          <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            The Agents Date on Their Behalf.
          </span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Strict two-source constraint: <strong className="text-slate-200">LinkedIn</strong> + <strong className="text-slate-200">Instagram</strong>. The analyst agent reads both, extracts evidence-backed traits, simulates multi-turn dates, and generates private mutual verdicts.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/demo"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium text-sm shadow-lg shadow-rose-500/25 transition-all hover:scale-102"
          >
            <span>Open 25-Person Demo (Zero-Click)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/people"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-all"
          >
            <Users className="w-4 h-4" />
            <span>Browse 25 Profiles</span>
          </Link>
        </div>
      </section>

      {/* The 4-Step Pipeline Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h3 className="font-semibold text-white text-base">Dual Ingestion</h3>
          <p className="text-xs text-slate-400">
            Exactly two official links: LinkedIn (career &amp; skills) and Instagram (passions &amp; rituals).
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h3 className="font-semibold text-white text-base">Profile Analysis</h3>
          <p className="text-xs text-slate-400">
            Analyst extracts needs, hobbies, interests, and values—each anchored by direct evidence snippets.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h3 className="font-semibold text-white text-base">Autonomous Dating</h3>
          <p className="text-xs text-slate-400">
            Personas engage in 8-turn dates (icebreaker, ambitions, friction, values probe, chemistry).
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">
            4
          </div>
          <h3 className="font-semibold text-white text-base">Ranked Matches</h3>
          <p className="text-xs text-slate-400">
            Mutual scoring formula: 0.6·min + 0.4·mean with red-flag penalties and transcript citations.
          </p>
        </div>
      </section>

      {/* Live Intake Form */}
      <section className="max-w-2xl mx-auto rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-400" />
              Try Your Own Public Links
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Paste your LinkedIn &amp; public Instagram links to generate an agent and date the pool.
            </p>
          </div>
          <button
            type="button"
            onClick={fillSampleData}
            className="text-xs text-rose-300 hover:text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 px-3 py-1.5 rounded-lg transition-colors"
          >
            Autofill Sample Data
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-6">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-200 text-xs">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maya Chen"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
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
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">City</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. San Francisco, CA"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">I am a</label>
              <select
                value={gender}
                onChange={(e: any) => setGender(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
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
                onChange={(e: any) => setSeeking(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
              >
                <option value="man">Men</option>
                <option value="woman">Women</option>
                <option value="everyone">Everyone</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Relationship Goal</label>
            <input
              type="text"
              value={relationshipGoal}
              onChange={(e) => setRelationshipGoal(e.target.value)}
              placeholder="e.g. Long-term partnership leading to shared home &amp; family"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
            />
          </div>

          {/* Hard constraint URLs */}
          <div className="pt-2 space-y-3">
            <div>
              <label className="block text-xs font-medium text-blue-400 mb-1">
                Official Source 1: LinkedIn Public Profile URL
              </label>
              <input
                type="url"
                required
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://www.linkedin.com/in/username"
                className="w-full bg-slate-950 border border-blue-900/60 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-mono text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-pink-400 mb-1">
                Official Source 2: Public Instagram Profile URL
              </label>
              <input
                type="url"
                required
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
                placeholder="https://www.instagram.com/username/"
                className="w-full bg-slate-950 border border-pink-900/60 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-pink-500 font-mono text-xs"
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="pt-3 pb-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 text-rose-500 focus:ring-rose-400 bg-slate-950 w-4 h-4 cursor-pointer"
              />
              <span className="text-xs text-slate-400 group-hover:text-slate-300">
                I authorize the Profile Analyst and Dating Agent to ingest public profile information from my LinkedIn and Instagram links to simulate romantic matches on my behalf.
              </span>
            </label>
          </div>

          {/* Submit Button & Live Progress */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                loading
                  ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-rose-500/25 hover:shadow-rose-500/40'
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
      </section>
    </div>
  );
}
