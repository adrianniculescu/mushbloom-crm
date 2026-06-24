import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';

interface Props {
  title: string;
  description: string;
  canonical: string;
  updated: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<Props> = ({ title, description, canonical, updated, children }) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200">
    <Helmet>
      <title>{title} · Mushbloom</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <Navigation />
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">Legal &amp; compliance</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk']">{title}</h1>
          <p className="text-sm text-gray-500 mt-3">Last updated: {updated}</p>
        </header>
        <article className="legal-prose space-y-6 text-gray-300 leading-relaxed">
          {children}
        </article>
      </div>
    </main>
  </div>
);

export default LegalLayout;
