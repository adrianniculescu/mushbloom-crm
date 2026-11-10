
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
        <title>AI Automation Agency UK | Custom AI Workforces & Systems | Mushbloom</title>
        <meta name="description" content="Leading UK AI automation agency deploying custom multi-agent workforces. Automate operations, sales and CRM workflows, and cut repetitive admin in days." />
        <meta property="og:title" content="AI Automation Agency UK | Custom AI Workforces & Systems | Mushbloom" />
        <meta property="og:description" content="Leading UK AI automation agency deploying custom multi-agent workforces. Automate operations, sales and CRM workflows, and cut repetitive admin in days." />
        <meta property="og:url" content="https://mushbloom.uk/" />
        <link rel="canonical" href="https://mushbloom.uk/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Mushbloom', url: 'https://mushbloom.uk',
          logo: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png',
          description: 'UK-based AI automation agency designing custom AI workforces, LLM SEO and workflow engineering.',
          address: { '@type': 'PostalAddress', addressCountry: 'GB' }, priceRange: '££££', areaServed: ['United Kingdom', 'Worldwide'],
          serviceType: ['AI Automation', 'LLM SEO', 'Custom AI Agents', 'Workflow Engineering'],
        })}</script>
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
