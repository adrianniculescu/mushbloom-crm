
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import CustomGPTs from '@/components/CustomGPTs';

const PortfolioCustomGPTs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>Custom GPTs – AI Marketing Team Built on ChatGPT | Mushbloom</title>
        <meta name="description" content="Meet Mushbloom's AI-powered digital marketing team: 5 Custom GPTs for strategy, social media, data analysis, design, and copywriting. Free to use on ChatGPT." />
        <link rel="canonical" href="https://mushbloom.co.uk/portfolio/custom-gpts" />
        <meta property="og:title" content="Custom GPTs – AI Marketing Team by Mushbloom" />
        <meta property="og:description" content="5 Custom GPTs forming a complete AI digital marketing department — CMO, social media, data analyst, designer, and copywriter." />
        <meta property="og:url" content="https://mushbloom.co.uk/portfolio/custom-gpts" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Custom GPTs, AI marketing team, ChatGPT marketing, AI CMO, AI copywriter, AI designer, AI data analyst, AI social media, Mushbloom" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Custom GPTs – AI Digital Marketing Team by Mushbloom",
            "description": "A complete AI-powered digital marketing team built as Custom GPTs on ChatGPT by Mushbloom. Includes a CMO, social media strategist, data analyst, designer, and copywriter.",
            "url": "https://mushbloom.co.uk/portfolio/custom-gpts",
            "creator": {
              "@type": "Organization",
              "name": "Mushbloom",
              "url": "https://mushbloom.co.uk"
            },
            "hasPart": [
              {
                "@type": "SoftwareApplication",
                "name": "Andrada The CMO – Chief Marketing Officer",
                "description": "AI-driven strategic vision and marketing powerhouse. Custom GPT for marketing strategy, campaign planning, and brand positioning.",
                "url": "https://chat.openai.com/g/g-jnCN7Vw79-andrada-the-cmo-chief-marketing-officer",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Roger The Viral Social Visionary",
                "description": "AI expert in social media trends and viral content creation across Instagram, TikTok, LinkedIn, and X.",
                "url": "https://chat.openai.com/g/g-fNTddBbsi-roger-the-viral-social-visionary",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Ethan The Marketing Data Analyst",
                "description": "AI intelligence transforming marketing data into actionable growth strategies and campaign optimization.",
                "url": "https://chat.openai.com/g/g-qKalrC38A-ethan-the-marketing-data-analyst",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Vincent The Marketing Designer",
                "description": "AI creativity crafting on-brand visuals, social media graphics, and marketing design assets.",
                "url": "https://chat.openai.com/g/g-iZ0JYCSty-vincent-the-marketing-designer",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Tanya The Marketing Copywriter",
                "description": "AI wordsmith creating persuasive ad copy, blog posts, email sequences, and brand messaging.",
                "url": "https://chat.openai.com/g/g-Xmi2Hsdvm-tanya-the-marketing-copywriter",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
              }
            ],
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mushbloom.co.uk" },
                { "@type": "ListItem", "position": 2, "name": "Portfolio" },
                { "@type": "ListItem", "position": 3, "name": "Custom GPTs", "item": "https://mushbloom.co.uk/portfolio/custom-gpts" }
              ]
            }
          })}
        </script>
      </Helmet>
      <Navigation />
      <div className="pt-16">
        <nav className="pt-4 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/portfolio/websites" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li>/</li>
            <li className="text-gray-300">Custom GPTs</li>
          </ol>
        </nav>
        <CustomGPTs />
      </div>
    </div>
  );
};

export default PortfolioCustomGPTs;
