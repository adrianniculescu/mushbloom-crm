import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight, Film, Captions, Palette, LayoutTemplate, Music2, Wand2, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';

const PAGE_URL = 'https://mushbloom.uk/projects/reel-factory';
const META_TITLE = 'Reel Factory — AI Reels Platform Built by Mushbloom';
const META_DESCRIPTION = 'Reel Factory is an AI-powered SaaS product built by the Mushbloom team to help music artists turn long-form performances into high-quality short-form social reels.';

const capabilities = [
  { icon: Wand2, label: 'AI reel generation from long-form performance footage' },
  { icon: Music2, label: 'Music-synced vertical clips' },
  { icon: Captions, label: 'Automatic captions' },
  { icon: Palette, label: 'Branding controls' },
  { icon: LayoutTemplate, label: 'Templates for faster asset creation' },
  { icon: Film, label: 'Artist-focused clip workflows' },
];

const facts: [string, string][] = [
  ['Product type', 'AI SaaS'],
  ['Industry', 'Music / Creator Tools'],
  ['Use case', 'Long-form to short-form video'],
  ['Built by', 'Mushbloom'],
  ['Website', 'reelfactoryhq.com'],
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Reel Factory',
  url: PAGE_URL,
  about: 'AI-powered short-form video creation for music artists',
  creator: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' },
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Reel Factory',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    url: 'https://reelfactoryhq.com',
    description: META_DESCRIPTION,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Projects', item: 'https://mushbloom.uk/projects' },
    { '@type': 'ListItem', position: 2, name: 'Reel Factory', item: PAGE_URL },
  ],
};

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
};

const ReelFactoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-['Inter']">
      <Helmet>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Ambient background blobs (matches Hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs tracking-wide text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Mushbloom</Link>
            <span className="mx-2 opacity-50">/</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Reel Factory</span>
          </nav>

          {/* HERO */}
          <section className="pb-20 lg:pb-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Project — SaaS Product by Mushbloom</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-['Space_Grotesk'] leading-[1.05]">
                  Reel{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
                    Factory
                  </span>
                </h1>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  AI-powered short-form video creation for music artists.
                </p>
                <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
                  A SaaS product built by the Mushbloom team to help artists turn long-form performances into publish-ready vertical reels — faster, on-brand, and at scale.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://reelfactoryhq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    Visit product
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <Link
                    to="/projects"
                    className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <ArrowLeft className="h-4 w-4" /> More projects
                  </Link>
                </div>
              </Reveal>

              {/* Visual card */}
              <Reveal>
                <div className="glass-effect rounded-2xl p-6 border border-white/10 relative">
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    PRODUCT SNAPSHOT
                  </div>
                  <div className="aspect-[4/5] rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden relative mt-3">
                    <ReelVisual />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* OVERVIEW */}
          <section className="py-20 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <Reveal className="lg:col-span-3">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">01 — Overview</p>
              </Reveal>
              <Reveal className="lg:col-span-6">
                <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight mb-6">
                  A focused product for one of the most time-intensive parts of artist marketing.
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Reel Factory simplifies turning long-form video into short-form content that's ready to publish. Artists and teams generate multiple vertical clips from a single performance — reducing production friction while improving content velocity across channels.
                </p>
              </Reveal>
              <Reveal className="lg:col-span-3">
                <div className="glass-effect rounded-xl p-6 border border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-4">Project facts</p>
                  <dl className="space-y-4">
                    {facts.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[11px] uppercase tracking-wider text-gray-500">{k}</dt>
                        <dd className="text-sm text-gray-200 mt-1">
                          {k === 'Website' ? (
                            <a href="https://reelfactoryhq.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                              {v}
                            </a>
                          ) : v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </section>

          {/* WHAT IT ENABLES */}
          <section className="py-20 border-t border-white/10">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">02 — What it enables</p>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-12 max-w-3xl">
                Built for the cadence of modern social platforms.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: '01', title: 'From performance to multiple assets', text: 'Upload longer footage and generate a batch of short-form clips designed for social distribution.' },
                { n: '02', title: 'Built for music-first content', text: 'A workflow centered on live performances, artist visuals, and platform-ready reels.' },
                { n: '03', title: 'Faster publishing workflow', text: 'Captions, formatting, and repeatable output reduce the operational effort of consistent content.' },
              ].map((b) => (
                <Reveal key={b.n}>
                  <div className="glass-effect rounded-xl p-6 border border-white/10 h-full hover:border-blue-500/40 transition-colors">
                    <p className="text-xs tracking-[0.2em] text-green-400 mb-4">/{b.n}</p>
                    <h3 className="text-xl font-semibold font-['Space_Grotesk'] mb-3">{b.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CORE CAPABILITIES */}
          <section className="py-20 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">03 — Core capabilities</p>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight mb-6">
                Speed, usability, and social-ready output.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                A focused capability set that makes Reel Factory practical for working artists and content teams.
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {capabilities.map(({ icon: Icon, label }, i) => (
                  <Reveal key={label}>
                    <li className="group flex items-center justify-between gap-6 py-5 hover:bg-white/[0.02] px-2 transition-colors">
                      <div className="flex items-center gap-5">
                        <span className="text-xs tabular-nums text-gray-500">{String(i + 1).padStart(2, '0')}</span>
                        <span className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                          <Icon className="w-4 h-4 text-blue-400" strokeWidth={1.75} />
                        </span>
                        <span className="text-base lg:text-lg text-gray-100">{label}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>

          {/* MUSHBLOOM ROLE */}
          <section className="py-20 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">04 — Mushbloom's role</p>
            </Reveal>
            <Reveal className="lg:col-span-9 max-w-3xl">
              <p className="text-2xl lg:text-3xl font-semibold font-['Space_Grotesk'] leading-snug mb-6">
                Reel Factory reflects how Mushbloom builds applied AI products: identify a narrow, commercially relevant workflow and design software around speed, automation, and usability.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                As a product built by the Mushbloom team, it sits at the intersection of AI systems thinking, creator-economy insight, and execution-focused SaaS design.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Within the Mushbloom portfolio, Reel Factory stands out as a specialist product with clear audience alignment and a sharp operational value proposition.
              </p>
            </Reveal>
          </section>

          {/* CTA */}
          <section className="py-24 border-t border-white/10 text-center">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight max-w-3xl mx-auto mb-6">
                Built for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  modern content velocity.
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-10">
                One example of how Mushbloom turns focused operational problems into productized AI solutions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://reelfactoryhq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  Visit Reel Factory <ArrowUpRight className="h-5 w-5" />
                </a>
                <Link
                  to="/projects"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Explore Mushbloom projects
                </Link>
              </div>
            </Reveal>
          </section>
        </div>

        <footer className="border-t border-white/10 mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
            <span>© {new Date().getFullYear()} Mushbloom — Projects</span>
            <Link to="/" className="hover:text-white transition-colors">mushbloom.uk</Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

const ReelVisual: React.FC = () => {
  const stroke = 'rgba(255,255,255,0.18)';
  const fill = 'rgba(255,255,255,0.04)';
  const accent = '#4d94ff';
  const accent2 = '#4dff99';
  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
      <line x1="40" y1="60" x2="360" y2="60" stroke={stroke} strokeWidth="1" />
      {Array.from({ length: 17 }).map((_, i) => (
        <line key={i} x1={40 + i * 20} y1="55" x2={40 + i * 20} y2={i % 4 === 0 ? 70 : 65} stroke={stroke} strokeWidth="1" />
      ))}
      <rect x="120" y="50" width="60" height="20" fill="none" stroke={accent} strokeWidth="1" />
      <rect x="220" y="50" width="40" height="20" fill="none" stroke={accent2} strokeWidth="1" />

      {[
        { x: 60, y: 110, r: -6 },
        { x: 150, y: 100, r: 0 },
        { x: 240, y: 110, r: 6 },
      ].map((f, i) => (
        <g key={i} transform={`rotate(${f.r} ${f.x + 50} ${f.y + 175})`}>
          <rect x={f.x} y={f.y} width="100" height="170" rx="6" fill={fill} stroke={i === 1 ? accent : stroke} strokeWidth="1" />
          <polygon
            points={`${f.x + 42},${f.y + 78} ${f.x + 62},${f.y + 90} ${f.x + 42},${f.y + 102}`}
            fill="none"
            stroke={i === 1 ? accent : stroke}
            strokeWidth="1"
          />
          <rect x={f.x + 15} y={f.y + 130} width="70" height="3" fill={stroke} />
          <rect x={f.x + 15} y={f.y + 140} width="50" height="3" fill={stroke} />
        </g>
      ))}

      <text x="40" y="340" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="2" fontFamily="Inter, sans-serif">
        BATCH OUTPUT — 12 ASSETS
      </text>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x={40 + (i % 6) * 56}
          y={355 + Math.floor(i / 6) * 60}
          width="48"
          height="50"
          rx="3"
          fill={fill}
          stroke={i === 4 ? accent2 : stroke}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
};

export default ReelFactoryPage;
