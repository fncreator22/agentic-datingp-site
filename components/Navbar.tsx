'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Play, PlusCircle, HeartHandshake, Sparkles } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/demo', label: 'Demo', fullLabel: 'Demo', icon: Play },
    { href: '/dates', label: 'Dates', fullLabel: '156 Dates', icon: Sparkles, badge: '156' },
    { href: '/people', label: 'People', fullLabel: '25 People', icon: Users },
    { href: '/', label: 'Try', fullLabel: 'Try Links', icon: PlusCircle },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-1">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
            <HeartHandshake className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-base sm:text-xl font-bold tracking-tight bg-gradient-to-r from-white via-rose-200 to-pink-400 bg-clip-text text-transparent">
              DualAgent
            </span>
            <span className="hidden md:inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
              Agentic Dating
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                title={link.fullLabel}
                className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
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
