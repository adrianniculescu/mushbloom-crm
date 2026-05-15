import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Search,
  ShieldCheck,
  BarChart3,
  FileBarChart,
  Presentation,
  Users2,
  FolderLock,
  LineChart,
  Scale,
  Sparkles,
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const PAGE_URL = 'https://mushbloom.uk/projects/nexus-tmrw-venture-network';
const META_TITLE = 'Nexus by TMRW Venture Network — AI Venture Platform';
const META_DESCRIPTION =
  'Nexus is an AI-powered venture platform by TMRW Venture Network, designed to support investors, founders, and venture professionals across sourcing, diligence, fundraising, and reporting workflows.';

const capabilities = [
  { icon: Search, label: 'AI-driven deal sourcing' },
  { icon: ShieldCheck, label: 'Due diligence support' },
  { icon: BarChart3, label: 'Real-time portfolio and risk analytics' },
  { icon: Scale, label: 'Compliance and ESG monitoring' },
  { icon: FileBarChart, label: 'Automated reporting and collaboration tools' },
  { icon: Presentation, label: 'AI-powered pitch deck builder' },
  { icon: Users2, label: 'Investor matchmaking' },
  { icon: FolderLock, label: 'Data room automation' },
  { icon: LineChart, label: 'Market and competitor analysis' },
  { icon: ShieldCheck, label: 'Compliance and cap table tools' },
];

const facts: [string, string][] = [
  ['Product type', 'AI Venture Platform'],
  ['Sector', 'Venture Capital / Startup Ecosystem'],
  ['Audience', 'Investors, founders, venture professionals'],
  ['Associated with', 'TMRW Venture Network'],
  ['Website', 'nexus.tmrw.ae'],
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Nexus by TMRW Venture Network',
  url: PAGE_URL,
  about: 'AI-powered venture platform for investors, founders, and venture professionals',
  creator: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' },
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Nexus',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://nexus.tmrw.ae',
    description: META_DESCRIPTION,
    publisher: { '@type': 'Organization', name: 'TMRW Venture Network' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Projects', item: 'https://mushbloom.uk/projects' },
    { '@type': 'ListItem', position: 2, name: 'Nexus by TMRW Venture Network', item: PAGE_URL },
  ],
};

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

const NexusTmrwPage: React.FC = () => {
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

      {/* Ambient background blobs (matches site) */}
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
            <span className="text-white">Nexus by TMRW Venture Network</span>
          </nav>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to projects
          </Link>

          {/* HERO */}
          <section className="pb-20 lg:pb-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Project — Venture Platform</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-['Space_Grotesk'] leading-[1.05]">
                  Nexus by{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
                    TMRW Venture Network
                  </span>
                </h1>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed max-w-xl">
                  An AI-powered venture platform designed to support investors, founders, and venture professionals across sourcing, diligence, fundraising, and reporting workflows.
                </p>
                <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
                  Nexus is positioned as a next-generation venture hub created to reduce the time, cost, and operational friction involved in startup and investment activity. Associated with TMRW Venture Network, the platform brings together practical tools for both sides of the venture ecosystem in a more connected digital environment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://nexus.tmrw.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    Visit platform
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <Link
                    to="/projects"
                    className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <ArrowLeft className="h-4 w-4" /> View more projects
                  </Link>
                </div>
              </Reveal>

              {/* Visual */}
              <Reveal>
                <div className="glass-effect rounded-2xl p-6 border border-white/10 relative">
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    PLATFORM SNAPSHOT
                  </div>
                  <div className="aspect-[4/5] rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden relative mt-3">
                    <NexusVisual />
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
                  A coherent venture workflow, brought into one AI-assisted environment.
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Nexus is designed around a broad but coherent venture workflow. Public launch messaging presents the platform as a solution for investors, founders, and emerging venture professionals who need better tools for evaluating opportunities, preparing investment materials, organizing data, and improving decision-making across the venture lifecycle.
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
                            <a
                              href="https://nexus.tmrw.ae"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300"
                            >
                              {v}
                            </a>
                          ) : (
                            v
                          )}
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
              <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-6 max-w-3xl">
                A multi-sided environment for capital allocators and startup builders.
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-3xl mb-12">
                The platform sits at the intersection of venture operations, founder readiness, and investment intelligence. Rather than serving one narrow user type, Nexus appears to be structured as a multi-sided environment that supports both capital allocators and startup builders through AI-assisted workflows.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: '01',
                  title: 'Smarter investor workflows',
                  text: 'For investors, public feature messaging highlights AI-driven deal sourcing, due diligence support, portfolio analytics, risk visibility, compliance monitoring, and automated reporting workflows.',
                },
                {
                  n: '02',
                  title: 'Founder support infrastructure',
                  text: 'For founders, Nexus is presented as a practical toolkit for building pitch materials, matching with investors, organizing data rooms, analyzing markets and competitors, and managing operational fundraising inputs.',
                },
                {
                  n: '03',
                  title: 'A shared venture workspace',
                  text: 'Taken together, these capabilities suggest a platform designed to make venture interactions more structured, more transparent, and more efficient across multiple stakeholders.',
                },
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

          {/* PLATFORM CAPABILITIES */}
          <section className="py-20 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">03 — Platform capabilities</p>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight mb-6">
                Tooling for both investment analysis and startup preparation.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Public launch information describes Nexus as an AI-assisted platform with features tailored to both investment analysis and startup preparation.
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {capabilities.map(({ icon: Icon, label }, i) => (
                  <Reveal key={`${label}-${i}`}>
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

          {/* STRATEGIC CONTEXT */}
          <section className="py-20 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">04 — Strategic context</p>
            </Reveal>
            <Reveal className="lg:col-span-9 max-w-3xl">
              <p className="text-2xl lg:text-3xl font-semibold font-['Space_Grotesk'] leading-snug mb-6">
                A product layer that extends a relationship-driven network into a structured operating system for modern venture workflows.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Nexus should be framed within the broader positioning of TMRW Venture Network, which presents itself as a premium ecosystem for investors, advisory access, curated events, and cross-border opportunity building from the UAE outward. In that context, Nexus can be understood as a product layer that extends this network into software, translating relationship-driven venture activity into a more structured operating system for modern capital and startup workflows.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As a portfolio case study, the value of Nexus lies in its category clarity and ecosystem relevance. It addresses real operational pain points shared by investors and founders, while aligning with a larger platform vision around venture access, intelligence, and network effects.
              </p>
            </Reveal>
          </section>

          {/* CTA */}
          <section className="py-24 border-t border-white/10 text-center">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight max-w-3xl mx-auto mb-6">
                Software for a more{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  connected venture ecosystem.
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-10">
                Nexus reflects a product direction focused on practical AI, venture workflow design, and ecosystem-level utility.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://nexus.tmrw.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  Visit Nexus <ArrowUpRight className="h-5 w-5" />
                </a>
                <Link
                  to="/projects"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Explore more projects
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

// Abstract venture-network / deal-flow visual
const NexusVisual: React.FC = () => {
  const stroke = 'rgba(255,255,255,0.18)';
  const faint = 'rgba(255,255,255,0.08)';
  const accent = '#4d94ff';
  const accent2 = '#4dff99';

  // Network nodes
  const nodes = [
    { x: 200, y: 90, r: 10, hub: true },
    { x: 80, y: 160, r: 6 },
    { x: 320, y: 160, r: 6 },
    { x: 60, y: 260, r: 5 },
    { x: 140, y: 230, r: 7 },
    { x: 260, y: 230, r: 7 },
    { x: 340, y: 260, r: 5 },
    { x: 110, y: 330, r: 5 },
    { x: 200, y: 310, r: 6 },
    { x: 290, y: 330, r: 5 },
  ];

  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
      {/* Grid */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="20" y1={50 + i * 50} x2="380" y2={50 + i * 50} stroke={faint} strokeWidth="1" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`v${i}`} x1={40 + i * 55} y1="40" x2={40 + i * 55} y2="450" stroke={faint} strokeWidth="1" />
      ))}

      {/* Network edges */}
      {nodes.slice(1).map((n, i) => (
        <line key={`e${i}`} x1={nodes[0].x} y1={nodes[0].y} x2={n.x} y2={n.y} stroke={stroke} strokeWidth="1" />
      ))}
      <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[4].x} y2={nodes[4].y} stroke={stroke} strokeWidth="1" />
      <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[5].x} y2={nodes[5].y} stroke={stroke} strokeWidth="1" />
      <line x1={nodes[4].x} y1={nodes[4].y} x2={nodes[8].x} y2={nodes[8].y} stroke={accent} strokeWidth="1" />
      <line x1={nodes[5].x} y1={nodes[5].y} x2={nodes[8].x} y2={nodes[8].y} stroke={accent2} strokeWidth="1" />

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.hub ? 'rgba(77,148,255,0.15)' : 'rgba(255,255,255,0.04)'}
            stroke={n.hub ? accent : stroke}
            strokeWidth="1"
          />
          {n.hub && <circle cx={n.x} cy={n.y} r={n.r + 6} fill="none" stroke={accent} strokeOpacity="0.35" strokeWidth="1" />}
        </g>
      ))}

      {/* Hub label */}
      <text x="200" y="65" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" letterSpacing="3" fontFamily="Inter, sans-serif">
        NEXUS
      </text>

      {/* Diligence layers */}
      <text x="20" y="395" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="2" fontFamily="Inter, sans-serif">
        DILIGENCE LAYERS
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={`d${i}`}
          x={20 + i * 92}
          y={410}
          width="82"
          height="28"
          fill="none"
          stroke={i === 1 ? accent : i === 2 ? accent2 : stroke}
          strokeWidth="1"
        />
      ))}
      {['SOURCE', 'REVIEW', 'SCORE', 'REPORT'].map((t, i) => (
        <text
          key={`dt${i}`}
          x={61 + i * 92}
          y={428}
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize="8"
          letterSpacing="2"
          fontFamily="Inter, sans-serif"
        >
          {t}
        </text>
      ))}
    </svg>
  );
};

export default NexusTmrwPage;
