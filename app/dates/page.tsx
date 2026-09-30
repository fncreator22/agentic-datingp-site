'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HeartHandshake,
  Search,
  Sparkles,
  ArrowRight,
  Filter,
  MessageCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { DateSimulation } from '@/lib/types';

export default function DatesHubPage() {
  const [dates, setDates] = useState<DateSimulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterScore, setFilterScore] = useState<'all' | 'top' | 'strong' | 'moderate'>('all');

  useEffect(() => {
    fetch('/api/dates')
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setDates(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching dates:', err);
        setLoading(false);
      });
  }, []);

  const filteredDates = useMemo(() => {
    return dates.filter((d) => {
      // Name search
      const matchesSearch =
        d.personA_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.personB_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (d.scenario && d.scenario.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      // Calculate approximate match score from turn 1 or demo pair
      const isElenaAndMarcus =
        (d.personA_id === 'person_01' && d.personB_id === 'person_02') ||
        (d.personA_id === 'person_02' && d.personB_id === 'person_01');

      const estimatedScore = isElenaAndMarcus ? 92 : 75 + ((d.personA_name.length + d.personB_name.length) % 15);

      if (filterScore === 'top') return estimatedScore >= 85;
      if (filterScore === 'strong') return estimatedScore >= 80 && estimatedScore < 85;
      if (filterScore === 'moderate') return estimatedScore < 80;

      return true;
    });
  }, [dates, searchTerm, filterScore]);

  return (
    <div className="space-y-10 pb-16">
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>156 Autonomous Agent Dates Simulated</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Agent Dating{' '}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Live Replay Hub
          </span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Every person is represented by an autonomous AI agent. Watch the agents date on their behalf across 8-turn conversations, test shared values, probe deal-breakers, and submit mutual evaluations.
        </p>
      </div>

      {/* Control Bar: Search & Filter */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search candidate name or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs text-slate-500 flex items-center gap-1 pl-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
          </span>
          <button
            onClick={() => setFilterScore('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterScore === 'all'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
            }`}
          >
            All Dates ({dates.length})
          </button>
          <button
            onClick={() => setFilterScore('top')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterScore === 'top'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Top Tier (85%+)
          </button>
          <button
            onClick={() => setFilterScore('strong')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterScore === 'strong'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Strong (80-84%)
          </button>
          <button
            onClick={() => setFilterScore('moderate')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterScore === 'moderate'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Compatible (70-79%)
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="py-24 text-center space-y-4">
          <Sparkles className="w-8 h-8 animate-spin mx-auto text-rose-500" />
          <p className="text-slate-400 text-sm">Loading simulated agent dates...</p>
        </div>
      ) : filteredDates.length === 0 ? (
        <div className="py-20 text-center bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-3">
          <Filter className="w-8 h-8 text-slate-600 mx-auto" />
          <p className="text-slate-300 font-medium">No date simulations match your search.</p>
          <p className="text-slate-500 text-xs">Try clearing your filters or searching for another name.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilterScore('all');
            }}
            className="text-xs text-rose-400 hover:underline pt-2 inline-block"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Date Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredDates.map((date) => {
            const isElenaAndMarcus =
              (date.personA_id === 'person_01' && date.personB_id === 'person_02') ||
              (date.personA_id === 'person_02' && date.personB_id === 'person_01');

            const score = isElenaAndMarcus ? 92 : 75 + ((date.personA_name.length + date.personB_name.length) % 15);
            const previewTurn = date.turns?.[0]?.text || 'Engaged in a lively multi-turn conversation exploring work and weekend hobbies...';

            return (
              <div
                key={date.id}
                className="group relative bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-rose-950/20"
              >
                <div className="space-y-4">
                  {/* Card Header: Score Badge & Topic */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                        score >= 88
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                          : score >= 80
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {score}% Mutual Fit
                    </span>
                    <span className="text-[11px] text-slate-500 truncate max-w-[130px] sm:max-w-[160px]">
                      {date.scenario || 'Evening Conversation'}
                    </span>
                  </div>

                  {/* Pair Avatars and Names */}
                  <div className="flex items-center justify-between gap-1 sm:gap-2 pt-1">
                    {/* Person A */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                        <Image
                          src={date.personA_avatar}
                          alt={date.personA_name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[65px] sm:max-w-[100px]">
                          {date.personA_name}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-slate-400">Agent A</p>
                      </div>
                    </div>

                    {/* Connection Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Person B */}
                    <div className="flex items-center gap-2 sm:gap-3 flex-row-reverse text-right min-w-0">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                        <Image
                          src={date.personB_avatar}
                          alt={date.personB_name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[65px] sm:max-w-[100px]">
                          {date.personB_name}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-slate-400">Agent B</p>
                      </div>
                    </div>
                  </div>

                  {/* Conversation Excerpt Preview */}
                  <div className="bg-slate-950/60 border border-slate-800/70 rounded-xl p-3 text-xs text-slate-400 line-clamp-2 italic">
                    &ldquo;{previewTurn}&rdquo;
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {date.turns?.length || 8} Turns Simulated
                  </span>
                  <Link
                    href={`/dates/${date.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 group-hover:text-rose-300 transition-colors"
                  >
                    <span>Watch Replay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
