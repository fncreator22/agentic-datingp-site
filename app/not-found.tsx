import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Users, Sparkles, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-500/20 via-pink-500/10 to-purple-600/20 border border-rose-500/30 flex items-center justify-center shadow-2xl shadow-rose-950/40">
          <HeartHandshake className="w-10 h-10 text-rose-400" />
        </div>
        <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold">
          404
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
        Dating Route Not Found
      </h1>
      
      <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed mb-8">
        This link doesn&apos;t lead to an active date or profile. Our autonomous agents are actively exploring 156 other connections across the network.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-semibold hover:from-rose-600 hover:to-pink-700 shadow-lg shadow-rose-500/20 transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/dates"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-800 hover:text-white transition-all"
        >
          <Sparkles className="w-4 h-4 text-rose-400" />
          <span>Explore 156 Dates</span>
        </Link>
        <Link
          href="/people"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-800 hover:text-white transition-all"
        >
          <Users className="w-4 h-4 text-purple-400" />
          <span>25 People Directory</span>
        </Link>
      </div>
    </div>
  );
}
