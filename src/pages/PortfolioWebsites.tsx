
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';

const PortfolioWebsites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>Portfolio – Websites We've Built | Mushbloom</title>
        <meta name="description" content="Explore 27+ websites designed and developed by Mushbloom across real estate, blockchain, fintech, media, gaming and more." />
        <link rel="canonical" href="https://mushbloom.lovable.app/portfolio/websites" />
      </Helmet>
      <Navigation />
      <div className="pt-16">
        <Portfolio />
      </div>
    </div>
  );
};

export default PortfolioWebsites;
