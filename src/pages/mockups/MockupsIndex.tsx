import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';

const mockups = [
  {
    slug: 'ats',
    client: 'ATLASense Biomed',
    project: 'REPHAEL — Predictive Wearable',
    description: 'A clinical, professional concept redesign for the world\'s first predictive wearable for hospital-at-home care.',
    tags: ['Medical Devices', 'Healthcare', 'Concept'],
  },
];

const MockupsIndex = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <Helmet>
        <title>Client Mockups | Mushbloom</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="GPTBot" content="noindex, nofollow" />
        <meta name="ChatGPT-User" content="noindex, nofollow" />
        <meta name="ClaudeBot" content="noindex, nofollow" />
        <meta name="anthropic-ai" content="noindex, nofollow" />
        <meta name="PerplexityBot" content="noindex, nofollow" />
        <meta name="Google-Extended" content="noindex, nofollow" />
        <meta name="referrer" content="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <Link to="/" className="text-sm font-extrabold tracking-tight">MUSHBLOOM</Link>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-light">Client Mockups</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-light mb-6">Private gallery</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            Concepts in progress.
          </h1>
          <p className="text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
            Live design previews for our clients. Each link below opens a working concept built around the brief and references provided.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
          {mockups.map((m) => (
            <Link
              key={m.slug}
              to={`/mockups/${m.slug}`}
              className="group relative bg-white p-10 lg:p-14 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-light mb-3">{m.client}</p>
                  <h2 className="text-3xl font-extrabold tracking-tight">{m.project}</h2>
                </div>
                <ArrowUpRight className="h-6 w-6 text-neutral-400 group-hover:text-neutral-900 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-neutral-600 font-light leading-relaxed mb-8 max-w-md">{m.description}</p>
              <div className="flex gap-2 flex-wrap">
                {m.tags.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-widest text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full font-light">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-neutral-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 text-xs text-neutral-500 font-light flex justify-between">
          <span>© Mushbloom — Concept previews</span>
          <span>office@mushbloom.co.uk</span>
        </div>
      </footer>
    </div>
  );
};

export default MockupsIndex;
