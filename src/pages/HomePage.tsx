
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import Wiki from '@/components/Wiki';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import HomeRepositioning from '@/components/HomeRepositioning';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>AI Automation for SMEs &amp; Owner-Run Businesses | Mushbloom</title>
        <meta name="description" content="Mushbloom designs and builds simple AI systems for small and mid-sized businesses. Capture more leads, follow up automatically and save hours—without jargon or complex software." />
        <meta property="og:title" content="AI Automation for SMEs &amp; Owner-Run Businesses | Mushbloom" />
        <meta property="og:description" content="Simple AI systems that help SMEs capture more leads, follow up automatically and save hours—without jargon or complex software." />
        <meta property="og:url" content="https://mushbloom.uk/" />
        <link rel="canonical" href="https://mushbloom.uk/" />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <HomeRepositioning />
        <Wiki />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
