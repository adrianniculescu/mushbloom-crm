
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LLMboost from '@/components/LLMboost';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Wiki from '@/components/Wiki';
import SiteMap from '@/components/SiteMap';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>Mushbloom – AI Automation Agency & LLM SEO</title>
        <meta name="description" content="Deploy AI agents in 3-90 days. LLMboost optimizes your brand for ChatGPT, Gemini & Claude. 37% cost reduction guaranteed." />
        <link rel="canonical" href="https://mushbloom.co.uk/" />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <LLMboost />
        <About />
        <Testimonials />
        <FAQ />
        <Wiki />
        <SiteMap />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
