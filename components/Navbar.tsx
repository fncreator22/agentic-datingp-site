'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Play, PlusCircle, HeartHandshake, Sparkles } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/demo', label: 'Demo', fullLabel: 'Interactive Demo', icon: Play },
    { href: '/dates', label: 'Dates', fullLabel: '156 Date Transcripts', icon: Sparkles, badge: '156' },
    { href: '/people', label: 'People', fullLabel: '25 Verified Profiles', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/75 border-b border-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 active:scale-[0.98] transition-transform">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-200">
            <HeartHandshake className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-base sm:text-xl font-bold tracking-tight bg-gradient-to-r from-white via-rose-100 to-pink-300 bg-clip-text text-transparent">
              DualAgent
            </span>
            <span className="hidden md:inline-block ml-2 text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
              Autonomous Dating
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                title={link.fullLabel}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium active:scale-[0.98] transition-[transform,background-color,border-color,color] duration-150 ${
                  isActive
                    ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <Icon className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="hidden sm:inline">{link.fullLabel}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
