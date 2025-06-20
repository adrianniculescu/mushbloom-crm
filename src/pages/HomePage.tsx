
import React from 'react';
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
      <Navigation />
      <Hero />
      <Services />
      <LLMboost />
      <About />
      <Testimonials />
      <FAQ />
      <Wiki />
      <SiteMap />
      <Contact />
    </div>
  );
};

export default HomePage;
