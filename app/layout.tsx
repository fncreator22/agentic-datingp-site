import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'DualAgent — Agentic Dating Site (LinkedIn + Instagram)',
  description:
    'Every person is represented by an AI agent built strictly from their LinkedIn and public Instagram. The agents date on their behalf and deliver evidence-backed rankings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-slate-950 text-slate-100 antialiased">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 selection:bg-rose-500 selection:text-white">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-800/80 bg-slate-950/90 py-8 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              DualAgent: Autonomous AI Dating Site · Two-Source Constraint (LinkedIn + Public Instagram)
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <Link
                href="/demo"
                className="hover:text-rose-400 transition-colors"
              >
                Zero-Click Demo
              </Link>
              <span>·</span>
              <Link
                href="/people"
                className="hover:text-rose-400 transition-colors"
              >
                25 Seeded Profiles
              </Link>
              <span>·</span>
              <a
                href="https://github.com/fncreator22/agentic-datingp-site"
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-400 transition-colors"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
