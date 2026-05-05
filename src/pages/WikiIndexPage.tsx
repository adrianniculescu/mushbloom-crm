import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Wiki from '@/components/Wiki';

const WikiIndexPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>AI Knowledge Hub & Wiki | Mushbloom</title>
        <meta
          name="description"
          content="Browse Mushbloom's AI knowledge hub: guides on LLM visibility, AI agents, automated due diligence, fintech, healthcare AI, and more."
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
      <div className="pt-20">
        <Wiki />
      </div>
    </div>
  );
};

export default WikiIndexPage;
