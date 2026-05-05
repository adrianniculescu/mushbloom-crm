import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Wiki from '@/components/Wiki';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

const featuredGuides = [
  {
    slug: 'saas-ai-search-visibility',
    path: '/guides/saas-ai-search-visibility',
    title: 'How SaaS Companies Can Increase Traffic, Users, and Revenue with AI Search',
    description:
      'A practical guide to getting cited, recommended, and discovered by ChatGPT, Perplexity, Gemini, and other AI tools.',
    readTime: '14 min read',
    tag: 'AI Search & Visibility',
  },
];

const WikiIndexPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>AI Knowledge Hub & Wiki | Mushbloom</title>
        <meta
          name="description"
          content="Browse Mushbloom's AI knowledge hub: long-form guides and expert articles on AI search visibility, LLM optimisation, AI agents, fintech, healthcare AI, and more."
        />
        <link rel="canonical" href="https://mushbloom.uk/wiki" />
        <meta property="og:title" content="AI Knowledge Hub & Wiki | Mushbloom" />
        <meta
          property="og:description"
          content="Search and explore expert AI guides on automation, LLM visibility, investment intelligence and more."
        />
        <meta property="og:url" content="https://mushbloom.uk/wiki" />
      </Helmet>
      <Navigation />

      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <BookOpen className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Featured Long-form Guides</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk']">
              In-depth research from Mushbloom
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {featuredGuides.map((g) => (
              <Link
                key={g.slug}
                to={g.path}
                className="group rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-8 hover:border-blue-400/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">{g.tag}</span>
                  <span className="text-gray-600">•</span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />
                    {g.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-blue-400 transition-colors leading-tight">
                  {g.title}
                </h3>
                <p className="text-gray-300 mb-5 leading-relaxed">{g.description}</p>
                <div className="text-blue-400 text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read the guide <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Wiki />
    </div>
  );
};

export default WikiIndexPage;
