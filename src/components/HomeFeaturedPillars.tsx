import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Newspaper, Video, BookOpen } from 'lucide-react';

// Hand-picked pillar articles (commercial + LLM intent) and main service pages.
// Strengthens internal linking from the homepage hub.
const PILLARS = [
  {
    slug: 'llm-visibility-optimization',
    title: 'LLM Visibility Optimization',
    summary: 'How to get cited by ChatGPT, Gemini, and Claude.',
  },
  {
    slug: 'custom-ai-agents-business',
    title: 'Custom AI Agents for Business',
    summary: 'Build AI agents that cut sales ops cost by 37%.',
  },
  {
    slug: 'ai-deal-sourcing-investors',
    title: 'AI Deal Sourcing for Investors',
    summary: 'Find high-potential deals 70% faster with AI.',
  },
  {
    slug: 'automated-due-diligence-ai',
    title: 'Automated Due Diligence',
    summary: 'Compress 90-day DD into 72 hours.',
  },
  {
    slug: 'ai-agent-teams-future-of-work',
    title: 'AI Agent Teams: Future of Work',
    summary: 'Cross-functional AI bots that collaborate.',
  },
  {
    slug: 'technical-seo-ai',
    title: 'Technical SEO for AI Search',
    summary: 'Structured data + entity strategy for LLM SERPs.',
  },
];

const SERVICES = [
  { to: '/llmboost', icon: Zap, label: 'LLMboost', desc: 'AI search visibility (Share of Model)' },
  { to: '/newswire', icon: Newspaper, label: 'Newswire', desc: 'Niche PR distribution across 5 verticals' },
  { to: '/video-agency', icon: Video, label: 'Video Agency', desc: 'AI-powered video production' },
];

const HomeFeaturedPillars: React.FC = () => {
  return (
    <section
      id="featured-pillars"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
      aria-label="Featured guides and services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-5">
            <BookOpen className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-300">Start here</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Featured guides &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              services
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The fastest path to understand what we do — and what AI can do for your business.
          </p>
        </header>

        {/* Services row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.to}
                to={s.to}
                className="glass-effect rounded-xl p-6 border border-white/10 hover:border-blue-400/40 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">{s.label}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">{s.desc}</p>
                <span className="text-sm text-blue-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore {s.label} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Pillar articles */}
        <h3 className="text-xl font-bold text-white mb-5 font-['Space_Grotesk']">
          Six pillar guides every operator should read
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <Link
              key={p.slug}
              to={`/wiki/${p.slug}`}
              className="glass-effect rounded-xl p-5 border border-white/10 hover:border-green-400/40 transition-colors group"
            >
              <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h4>
              <p className="text-sm text-gray-400 mb-3">{p.summary}</p>
              <span className="text-xs text-blue-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read guide <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/wiki"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
          >
            See all 30 articles in the Knowledge Hub <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedPillars;
