
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
        <title>Mushbloom | Practical AI Automation for SMEs</title>
        <meta name="description" content="Mushbloom helps SMEs and owner-run businesses implement practical AI automation that captures more opportunities, saves time and reduces repetitive admin." />
        <meta property="og:title" content="Mushbloom | Practical AI Automation for SMEs" />
        <meta property="og:description" content="Mushbloom helps SMEs and owner-run businesses implement practical AI automation that captures more opportunities, saves time and reduces repetitive admin." />
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
