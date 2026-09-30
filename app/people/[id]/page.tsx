'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Heart,
  Briefcase,
  Compass,
  Smile,
  AlertTriangle,
  Info,
  Trash2,
  ArrowLeft,
} from 'lucide-react';
import { Person, TraitWithEvidence } from '@/lib/types';

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const personId = params.id as string;

  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'analysis' | 'sources'>('analysis');
  const [activeEvidence, setActiveEvidence] = useState<TraitWithEvidence | null>(null);

  useEffect(() => {
    fetch(`/api/people/${personId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.person) setPerson(data.person);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [personId]);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this profile? (Consent revocation / GDPR)')) {
      const res = await fetch(`/api/people/${personId}`, { method: 'DELETE' });
      if (res.ok) {
        router.push('/people');
      }
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-slate-400">
        <Sparkles className="w-8 h-8 animate-spin mx-auto text-rose-500 mb-2" />
        <p>Loading agent analysis &amp; profile page...</p>
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

  const analysis = person.analysis;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Breadcrumb & CTAs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/people"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to 25 People</span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 bg-red-950/40 border border-red-900/60 px-3 py-1.5 rounded-xl transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Revoke / Delete</span>
          </button>
          <Link
            href={`/people/${person.id}/matches`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold text-xs shadow-lg shadow-rose-500/20 transition-all"
          >
            <span>View Rankings &amp; Matches</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Header Profile Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Image
            src={person.avatar}
            alt={person.name}
            width={112}
            height={112}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-rose-500/30 shadow-lg shrink-0"
          />
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {person.name}, {person.age}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                Agent Active
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              {person.city} · Seeking {person.seeking} · {person.gender}
            </p>
            <p className="text-xs text-rose-300">
              Goal: {person.relationship_goal}
            </p>

            {/* Sourced Links Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-500 font-medium">Official Sources:</span>
              <a
                href={person.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={person.instagram_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:bg-pink-500/20 transition-colors"
              >
                <span>Public Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Agent Analysis vs. Ingested Source Bundle */}
      <div className="flex border-b border-slate-800">
        <button
          onClick={() => setActiveTab('analysis')}
          className={`px-5 py-2.5 text-sm font-semibold border-b-2 transition-all ${
            activeTab === 'analysis'
              ? 'border-rose-500 text-rose-400 bg-rose-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Profile Page Analysis (Needs, Hobbies, Evidence)
        </button>
        <button
          onClick={() => setActiveTab('sources')}
          className={`px-5 py-2.5 text-sm font-semibold border-b-2 transition-all ${
            activeTab === 'sources'
              ? 'border-rose-500 text-rose-400 bg-rose-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Raw Ingested Bundle (LinkedIn + Instagram)
        </button>
      </div>

      {/* TAB 1: Analysis & Evidence */}
      {activeTab === 'analysis' && analysis && (
        <div className="space-y-6">
          {/* Summary Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/30 via-slate-900 to-purple-950/20 border border-rose-900/30">
            <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Analyst Agent Profile Summary
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              {analysis.summary}
            </p>
          </div>

          {/* Interactive Evidence Hover Helper Banner */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <Info className="w-4 h-4 text-rose-400 shrink-0" />
            <span>
              Hover over or click any trait chip below to inspect its exact evidence snippet and source tag ([LinkedIn] or [Instagram]).
            </span>
          </div>

          {/* Section 1: Needs */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              Core Emotional &amp; Partner Needs
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {analysis.needs.map((trait, idx) => (
                <TraitChip
                  key={idx}
                  trait={trait}
                  onSelect={() => setActiveEvidence(trait)}
                />
              ))}
            </div>
          </section>

          {/* Section 2: Hobbies */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Smile className="w-4 h-4 text-amber-400" />
              Hobbies &amp; Weekend Rituals
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {analysis.hobbies.map((trait, idx) => (
                <TraitChip
                  key={idx}
                  trait={trait}
                  onSelect={() => setActiveEvidence(trait)}
                />
              ))}
            </div>
          </section>

          {/* Section 3: Interests */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              Intellectual &amp; Creative Interests
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {analysis.interests.map((trait, idx) => (
                <TraitChip
                  key={idx}
                  trait={trait}
                  onSelect={() => setActiveEvidence(trait)}
                />
              ))}
            </div>
          </section>

          {/* Section 4: Values */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Core Values &amp; Character Guiding Principles
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {analysis.values.map((trait, idx) => (
                <TraitChip
                  key={idx}
                  trait={trait}
                  onSelect={() => setActiveEvidence(trait)}
                />
              ))}
            </div>
          </section>

          {/* Section 5: Other Qualities Found */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Communication Style</h4>
              <p className="text-sm font-semibold text-white">{analysis.communication_style.value}</p>
              <p className="text-xs text-slate-400 italic">Evidence: {analysis.communication_style.snippet}</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lifestyle Rhythm</h4>
              <p className="text-sm font-semibold text-white">{analysis.lifestyle.value}</p>
              <p className="text-xs text-slate-400 italic">Evidence: {analysis.lifestyle.snippet}</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ambitions &amp; Future</h4>
              <p className="text-sm font-semibold text-white">{analysis.ambitions.value}</p>
              <p className="text-xs text-slate-400 italic">Evidence: {analysis.ambitions.snippet}</p>
            </div>
          </div>

          {/* Section 6: Deal Breakers & Conversation Hooks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Deal Breakers
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {analysis.deal_breakers.map((db, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <span>{db}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Dating Agent Conversation Hooks
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {analysis.conversation_hooks.map((hook, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{hook}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Evidence Inspector Modal / Drawer if a chip is clicked */}
          {activeEvidence && (
            <div className="p-5 rounded-2xl bg-slate-950 border border-rose-500/40 shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Inspecting Evidence Citation
                </span>
                <button
                  onClick={() => setActiveEvidence(null)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Close ✕
                </button>
              </div>
              <h4 className="text-base font-bold text-white">{activeEvidence.value}</h4>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-slate-500">Source:</span>
                  <SourceTag source={activeEvidence.source} />
                  <span className="text-slate-500 ml-3">Confidence:</span>
                  <span className="text-emerald-400">{Math.round(activeEvidence.confidence * 100)}%</span>
                </div>
                <div className="pt-1 text-slate-400">
                  <strong className="text-slate-300">Exact Extracted Snippet: </strong>
                  &ldquo;{activeEvidence.snippet}&rdquo;
                </div>
              </div>
            </div>
          )}

          {/* Bottom Big CTA to Rankings */}
          <div className="pt-6 text-center">
            <Link
              href={`/people/${person.id}/matches`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-base shadow-xl shadow-rose-500/25 transition-all hover:scale-102"
            >
              <span>See Who Fits {person.name} Best (Rankings)</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}

      {/* TAB 2: Raw Ingested Source Bundle */}
      {activeTab === 'sources' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LinkedIn Details */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-blue-900/40 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-base">
              <Briefcase className="w-5 h-5" />
              <span>LinkedIn Ingestion Details</span>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block">Headline</span>
                <p className="text-slate-200 font-medium">{person.source_bundle.linkedin.headline}</p>
              </div>
              <div>
                <span className="text-slate-500 block">About</span>
                <p className="text-slate-300 leading-relaxed">{person.source_bundle.linkedin.about}</p>
              </div>
              <div>
                <span className="text-slate-500 block">Experience / Positions</span>
                <div className="space-y-2 mt-1">
                  {person.source_bundle.linkedin.positions.map((pos, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                      <p className="font-semibold text-white">{pos.role} at {pos.company}</p>
                      {pos.duration && <p className="text-slate-500">{pos.duration}</p>}
                      {pos.description && <p className="text-slate-400 mt-1">{pos.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">Skills</span>
                <div className="flex flex-wrap gap-1.5">
                  {person.source_bundle.linkedin.skills.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-blue-950/50 text-blue-300 border border-blue-800/40 text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Details */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-pink-900/40 space-y-4">
            <div className="flex items-center gap-2 text-pink-400 font-bold text-base">
              <Smile className="w-5 h-5" />
              <span>Instagram Ingestion Details</span>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block">Bio</span>
                <p className="text-slate-200 font-medium">{person.source_bundle.instagram.bio}</p>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">Recent Post Captions</span>
                <div className="space-y-2">
                  {person.source_bundle.instagram.captions.map((c, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-300 italic">
                      &ldquo;{c}&rdquo;
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">Hashtags</span>
                <div className="flex flex-wrap gap-1.5">
                  {person.source_bundle.instagram.hashtags.map((h, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-pink-950/50 text-pink-300 border border-pink-800/40 text-[11px]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">Location Tags</span>
                <div className="flex flex-wrap gap-1.5">
                  {person.source_bundle.instagram.locations.map((loc, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SourceTag({ source }: { source: string }) {
  if (source === 'linkedin') {
    return (
      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-semibold">
        [LinkedIn]
      </span>
    );
  }
  if (source === 'instagram') {
    return (
      <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 text-[10px] font-semibold">
        [Instagram]
      </span>
    );
  }
  return (
    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-semibold">
      [Cross-Source]
    </span>
  );
}

function TraitChip({
  trait,
  onSelect,
}: {
  trait: TraitWithEvidence;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        onClick={onSelect}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-medium transition-all group"
      >
        <span>{trait.value}</span>
        <SourceTag source={trait.source} />
        <span className="text-[10px] text-emerald-400 font-mono">
          {Math.round(trait.confidence * 100)}%
        </span>
      </button>

      {/* Hover Tooltip showing exact snippet and confidence bar */}
      {hovered && (
        <div className="absolute z-30 bottom-full left-0 mb-2 w-72 p-3 rounded-xl bg-slate-950 border border-slate-700 shadow-2xl text-xs space-y-1.5 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <SourceTag source={trait.source} />
            <span className="text-[10px] text-slate-400">
              Confidence: {Math.round(trait.confidence * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div
              className="bg-emerald-400 h-full rounded-full"
              style={{ width: `${Math.round(trait.confidence * 100)}%` }}
            />
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed italic">
            &ldquo;{trait.snippet}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
