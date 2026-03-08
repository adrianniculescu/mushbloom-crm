
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';

const PortfolioWebsites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>Portfolio – 27+ Websites We've Built | Mushbloom</title>
        <meta name="description" content="Explore 27+ websites designed and developed by Mushbloom across real estate, blockchain, fintech, media, gaming, AI, and more." />
        <link rel="canonical" href="https://mushbloom.co.uk/portfolio/websites" />
        <meta property="og:title" content="Portfolio – Websites Built by Mushbloom" />
        <meta property="og:description" content="27+ websites across real estate, blockchain, fintech, media, gaming and more." />
        <meta property="og:url" content="https://mushbloom.co.uk/portfolio/websites" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mushbloom.co.uk" },
              { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://mushbloom.co.uk/portfolio/websites" }
            ]
          })}
        </script>
      </Helmet>
      <Navigation />
      <div className="pt-16">
        <nav className="pt-4 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-gray-300">Portfolio</li>
          </ol>
        </nav>
        <Portfolio />
      </div>
    </div>
  );
};

export default PortfolioWebsites;
