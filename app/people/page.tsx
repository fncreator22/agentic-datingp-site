'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Search, ChevronRight, ExternalLink } from 'lucide-react';
import { Person } from '@/lib/types';

export default function PeopleDirectoryPage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('all');

  useEffect(() => {
    fetch('/api/people')
      .then((res) => res.json())
      .then((data) => {
        if (data.people) setPeople(data.people);
      })
      .catch((err) => console.error(err));
  }, []);

  const cities = Array.from(new Set(people.map((p) => p.city)));

  const filteredPeople = people.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.source_bundle.linkedin.headline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter === 'all' || p.city === cityFilter;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Users className="w-8 h-8 text-rose-400" />
            25 Sourced People Directory
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Every person has official LinkedIn and public Instagram links, full analysis, and mutual date rankings.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="text-xs px-3.5 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
          >
            Zero-Click Showcase →
          </Link>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search by name, city, or professional role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="w-full sm:w-auto bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-rose-500"
        >
          <option value="all">All Cities ({people.length})</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* People Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPeople.map((person) => {
          const topNeed = person.analysis?.needs[0]?.value || 'Emotional reciprocity';
          const topHobby = person.analysis?.hobbies[0]?.value || 'Outdoor exploration';

          return (
            <div
              key={person.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-4"
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
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-white truncate">
                      {person.name}, {person.age}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 truncate">{person.city}</p>
                  <p className="text-xs text-rose-300 line-clamp-1 mt-0.5">
                    {person.source_bundle.linkedin.headline}
                  </p>
                </div>
              </div>

              {/* Source badges */}
              <div className="flex items-center gap-2 text-[11px]">
                <a
                  href={person.linkedin_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={person.instagram_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:bg-pink-500/20"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified
                </span>
              </div>

              {/* Inferred attributes */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5 text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Core Need: </span>
                  <span className="text-slate-200">{topNeed}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Hobby: </span>
                  <span className="text-slate-200">{topHobby}</span>
                </div>
              </div>

              {/* Actions */}
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
    </div>
  );
}
