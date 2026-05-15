import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Sun, Moon, Film, Captions, Palette, LayoutTemplate, Music2, Wand2 } from 'lucide-react';

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
  ['Use case', 'Long-form to short-form video transformation'],
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
    <div ref={ref} className={`${className} transition-all duration-[900ms] ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
};

const ReelFactoryPage: React.FC = () => {
  const [dark, setDark] = useState(true);

  const t = dark
    ? {
        bg: 'bg-[#0b0b0c]', text: 'text-neutral-100', sub: 'text-neutral-400', muted: 'text-neutral-500',
        border: 'border-white/10', soft: 'bg-white/[0.03]', hover: 'hover:bg-white/[0.06]',
        accent: 'text-[#d4a574]', accentBg: 'bg-[#d4a574]', accentBorder: 'border-[#d4a574]/40',
        rule: 'border-white/10',
      }
    : {
        bg: 'bg-[#f5f3ee]', text: 'text-neutral-900', sub: 'text-neutral-600', muted: 'text-neutral-500',
        border: 'border-black/10', soft: 'bg-black/[0.02]', hover: 'hover:bg-black/[0.04]',
        accent: 'text-[#8b5a2b]', accentBg: 'bg-[#8b5a2b]', accentBorder: 'border-[#8b5a2b]/40',
        rule: 'border-black/10',
      };

  return (
    <div className={`${t.bg} ${t.text} min-h-screen font-sans antialiased transition-colors duration-500`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
      <Helmet>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Sticky nav */}
      <header className={`sticky top-0 z-40 backdrop-blur-md ${dark ? 'bg-[#0b0b0c]/75' : 'bg-[#f5f3ee]/80'} border-b ${t.rule}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <nav aria-label="Breadcrumb" className={`text-xs tracking-wide ${t.sub}`}>
            <Link to="/" className="hover:underline">Mushbloom</Link>
            <span className="mx-2 opacity-50">/</span>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className={t.text}>Reel Factory</span>
          </nav>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border ${t.border} ${t.hover} transition-colors`}
          >
            {dark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <div className="pt-10">
          <Link to="/projects" className={`inline-flex items-center gap-2 text-xs ${t.sub} hover:${t.text} transition-colors`}>
            <ArrowLeft className="w-3.5 h-3.5" /> Back to projects
          </Link>
        </div>

        {/* HERO */}
        <section className="pt-12 pb-24 lg:pt-20 lg:pb-32">
          <Reveal>
            <p className={`text-[11px] uppercase tracking-[0.22em] ${t.accent} mb-8`}>Project — SaaS Product</p>
            <h1
              className="font-normal leading-[0.95] tracking-tight text-[18vw] sm:text-[14vw] lg:text-[10rem]"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Reel Factory
            </h1>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="text-xl lg:text-2xl leading-relaxed font-light" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                An AI-powered content platform designed to help music artists turn long-form performances into short-form social reels — with greater speed, consistency, and scale.
              </p>
              <p className={`mt-8 text-base leading-relaxed max-w-xl ${t.sub}`}>
                Created by the Mushbloom team, Reel Factory is a focused SaaS product built around a clear use case: transforming extended music footage into publish-ready vertical content for modern platforms. The product is positioned around faster output, artist-first workflows, and a more efficient path from performance to promotion.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://reelfactoryhq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 px-5 py-3 ${t.accentBg} ${dark ? 'text-neutral-900' : 'text-white'} text-sm font-medium rounded-full transition-transform hover:-translate-y-0.5`}
                >
                  Visit product
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  to="/projects"
                  className={`inline-flex items-center gap-2 px-5 py-3 border ${t.border} ${t.hover} text-sm rounded-full transition-colors`}
                >
                  View more projects
                </Link>
              </div>
            </Reveal>

            {/* Visual highlight panel */}
            <Reveal className="lg:col-span-5">
              <div className={`relative aspect-[4/5] rounded-sm border ${t.border} ${t.soft} overflow-hidden`}>
                <ReelVisual dark={dark} />
              </div>
            </Reveal>
          </div>
        </section>

        <hr className={t.rule} />

        {/* OVERVIEW */}
        <section className="py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className={`text-[11px] uppercase tracking-[0.22em] ${t.muted}`}>01 — Overview</p>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              A focused product for one of the most time-intensive parts of artist marketing.
            </h2>
            <p className={`mt-6 text-base leading-relaxed ${t.sub}`}>
              Reel Factory was created to simplify turning long-form video into short-form content that is ready to publish. The platform helps music artists and teams generate multiple vertical clips from longer performances, reducing production friction while improving content velocity across channels.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <div className={`border ${t.border} rounded-sm p-6`}>
              <p className={`text-[11px] uppercase tracking-[0.22em] ${t.muted} mb-5`}>Project facts</p>
              <dl className="space-y-4">
                {facts.map(([k, v]) => (
                  <div key={k} className="flex flex-col">
                    <dt className={`text-[11px] uppercase tracking-wider ${t.muted}`}>{k}</dt>
                    <dd className="text-sm mt-1">
                      {k === 'Website' ? (
                        <a href="https://reelfactoryhq.com" target="_blank" rel="noopener noreferrer" className={`${t.accent} hover:underline`}>
                          {v}
                        </a>
                      ) : v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </section>

        <hr className={t.rule} />

        {/* WHAT IT ENABLES */}
        <section className="py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <Reveal className="lg:col-span-3">
              <p className={`text-[11px] uppercase tracking-[0.22em] ${t.muted}`}>02 — What it enables</p>
            </Reveal>
            <Reveal className="lg:col-span-9">
              <p className={`text-lg leading-relaxed max-w-3xl ${t.sub}`}>
                The product is designed for artists and teams that need a faster way to repurpose performances into content that fits the cadence of today's social platforms. Rather than relying on fully manual editing workflows, Reel Factory introduces a more structured, scalable approach to content generation.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-transparent">
            {[
              { n: '/01', title: 'From performance to multiple assets', text: 'Upload longer video footage and generate a batch of short-form clips designed for social distribution.' },
              { n: '/02', title: 'Built for music-first content', text: 'The product positioning is tailored to music artists, with a workflow centered on live performances, artist visuals, and platform-ready reels.' },
              { n: '/03', title: 'Faster publishing workflow', text: 'Captions, formatting, and repeatable output help reduce the operational effort required to produce content consistently.' },
            ].map((b, i) => (
              <Reveal key={b.n} className={`p-8 border ${t.border} ${t.hover} transition-colors`}>
                <p className={`text-[11px] tracking-[0.2em] ${t.accent} mb-6`}>{b.n}</p>
                <h3 className="text-xl mb-3 font-normal" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>{b.title}</h3>
                <p className={`text-sm leading-relaxed ${t.sub}`}>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <hr className={t.rule} />

        {/* CORE CAPABILITIES */}
        <section className="py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className={`text-[11px] uppercase tracking-[0.22em] ${t.muted} mb-6`}>03 — Core capabilities</p>
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Built around speed, usability, and social-ready output.
            </h2>
            <p className={`mt-6 text-base leading-relaxed ${t.sub}`}>
              Public-facing feature messaging highlights a focused set of capabilities that make Reel Factory practical for working artists and content teams.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <ul>
              {capabilities.map(({ icon: Icon, label }, i) => (
                <Reveal key={label}>
                  <li className={`group flex items-center justify-between gap-6 py-6 border-t ${t.rule} ${i === capabilities.length - 1 ? 'border-b' : ''}`}>
                    <div className="flex items-center gap-5">
                      <span className={`text-[11px] tabular-nums ${t.muted}`}>{String(i + 1).padStart(2, '0')}</span>
                      <Icon className={`w-4 h-4 ${t.accent}`} strokeWidth={1.5} />
                      <span className="text-base lg:text-lg">{label}</span>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 ${t.muted} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all`} />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <hr className={t.rule} />

        {/* MUSHBLOOM'S ROLE */}
        <section className="py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className={`text-[11px] uppercase tracking-[0.22em] ${t.muted}`}>04 — Mushbloom's role</p>
          </Reveal>
          <Reveal className="lg:col-span-9 max-w-3xl">
            <p className="text-2xl lg:text-3xl font-normal leading-snug" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Reel Factory reflects Mushbloom's approach to applied AI product development: identifying a narrow, commercially relevant workflow and designing software around speed, automation, and usability.
            </p>
            <p className={`mt-8 text-base leading-relaxed ${t.sub}`}>
              As a product built by the Mushbloom team, it represents the intersection of AI systems thinking, creator-economy insight, and execution-focused SaaS design.
            </p>
            <p className={`mt-6 text-base leading-relaxed ${t.sub}`}>
              Within the Mushbloom portfolio, Reel Factory stands out as a specialist product with clear audience alignment and a sharp operational value proposition. It shows how targeted AI tooling can support content production in a way that feels practical, not abstract.
            </p>
          </Reveal>
        </section>

        <hr className={t.rule} />

        {/* CLOSING CTA */}
        <section className="py-28 lg:py-40 text-center">
          <Reveal>
            <h2 className="text-4xl lg:text-6xl font-normal leading-tight max-w-3xl mx-auto" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Built for modern content velocity.
            </h2>
            <p className={`mt-8 text-base lg:text-lg leading-relaxed max-w-xl mx-auto ${t.sub}`}>
              Reel Factory is one example of how Mushbloom turns focused operational problems into productized AI solutions.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://reelfactoryhq.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 px-6 py-3 ${t.accentBg} ${dark ? 'text-neutral-900' : 'text-white'} text-sm font-medium rounded-full transition-transform hover:-translate-y-0.5`}
              >
                Visit Reel Factory
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/projects"
                className={`inline-flex items-center gap-2 px-6 py-3 border ${t.border} ${t.hover} text-sm rounded-full transition-colors`}
              >
                Explore Mushbloom projects
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={`border-t ${t.rule} mt-10`}>
        <div className={`max-w-6xl mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs ${t.muted}`}>
          <span>© {new Date().getFullYear()} Mushbloom — Projects</span>
          <Link to="/" className="hover:underline">mushbloom.uk</Link>
        </div>
      </footer>
    </div>
  );
};

/** Abstract editorial visual — stacked vertical reel frames with timeline slicing. */
const ReelVisual: React.FC<{ dark: boolean }> = ({ dark }) => {
  const stroke = dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)';
  const fill = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)';
  const accent = dark ? '#d4a574' : '#8b5a2b';
  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
      {/* timeline */}
      <line x1="40" y1="60" x2="360" y2="60" stroke={stroke} strokeWidth="1" />
      {Array.from({ length: 17 }).map((_, i) => (
        <line key={i} x1={40 + i * 20} y1="55" x2={40 + i * 20} y2={i % 4 === 0 ? 70 : 65} stroke={stroke} strokeWidth="1" />
      ))}
      {/* slice marker */}
      <rect x="120" y="50" width="60" height="20" fill="none" stroke={accent} strokeWidth="1" />
      <rect x="220" y="50" width="40" height="20" fill="none" stroke={accent} strokeWidth="1" />

      {/* three vertical reel frames, fanned */}
      {[
        { x: 60, y: 110, r: -6 },
        { x: 150, y: 100, r: 0 },
        { x: 240, y: 110, r: 6 },
      ].map((f, i) => (
        <g key={i} transform={`rotate(${f.r} ${f.x + 50} ${f.y + 175})`}>
          <rect x={f.x} y={f.y} width="100" height="170" rx="6" fill={fill} stroke={stroke} strokeWidth="1" />
          {/* play triangle */}
          <polygon
            points={`${f.x + 42},${f.y + 78} ${f.x + 62},${f.y + 90} ${f.x + 42},${f.y + 102}`}
            fill="none"
            stroke={i === 1 ? accent : stroke}
            strokeWidth="1"
          />
          {/* caption bars */}
          <rect x={f.x + 15} y={f.y + 130} width="70" height="3" fill={stroke} />
          <rect x={f.x + 15} y={f.y + 140} width="50" height="3" fill={stroke} />
        </g>
      ))}

      {/* batch indicator */}
      <text x="40" y="340" fill={dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} fontSize="9" letterSpacing="2" fontFamily="Inter, sans-serif">
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
          stroke={i === 4 ? accent : stroke}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
};

export default ReelFactoryPage;
