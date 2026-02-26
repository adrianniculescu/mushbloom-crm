
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, Users, Briefcase, Award, Zap, Globe } from 'lucide-react';

const SiteMap = () => {
  const siteStructure = [
    {
      section: "Main Pages",
      icon: Globe,
      links: [
        { name: "Home", url: "#home", type: "anchor", description: "AI workforce automation solutions" },
        { name: "Services", url: "#services", type: "anchor", description: "Custom AI agent deployment & LLMboost" },
        { name: "Portfolio", url: "#portfolio", type: "anchor", description: "27+ websites and platforms we've built" },
        { name: "About", url: "#about", type: "anchor", description: "Mushbloom team and mission" },
        { name: "Contact", url: "#contact", type: "anchor", description: "Get in touch for consultation" }
      ]
    },
    {
      section: "Services",
      icon: Zap,
      links: [
        { name: "LLMboost", url: "/llmboost", type: "link", description: "AI search visibility accelerator for ChatGPT, Gemini, Claude" },
        { name: "Newswire Hub", url: "/newswire", type: "link", description: "Niche press release distribution across 5 verticals" },
        { name: "Crypto & Blockchain PR", url: "/newswire/crypto-blockchain", type: "link", description: "Press releases for DeFi, Web3, and exchanges" },
        { name: "Cybersecurity PR", url: "/newswire/cybersecurity", type: "link", description: "Security tools, breaches, and compliance news" },
        { name: "Finance & Fintech PR", url: "/newswire/finance-fintech", type: "link", description: "Fintech, banking, and funding round announcements" },
        { name: "Gaming PR", url: "/newswire/gaming", type: "link", description: "PC, console, mobile games and esports news" },
        { name: "iGaming PR", url: "/newswire/igaming", type: "link", description: "Betting, casinos, and affiliate partnerships" }
      ]
    },
    {
      section: "Knowledge Hub",
      icon: BookOpen,
      links: [
        { name: "AI Investment Wiki", url: "#wiki", type: "anchor", description: "30 expert articles on AI automation" },
        { name: "FAQ", url: "#faq", type: "anchor", description: "Common questions about AI deployment & LLMboost" },
        { name: "Client Success Stories", url: "#testimonials", type: "anchor", description: "Case studies and measurable results" }
      ]
    },
    {
      section: "Industry Solutions",
      icon: Briefcase,
      links: [
        { name: "Investment Firms", url: "#services", type: "anchor", description: "VC and PE deal sourcing & due diligence automation" },
        { name: "SaaS Companies", url: "#services", type: "anchor", description: "Customer success and sales automation" },
        { name: "Real Estate", url: "#services", type: "anchor", description: "Property management AI systems" },
        { name: "Professional Services", url: "#services", type: "anchor", description: "Client workflow optimization" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900" itemScope itemType="https://schema.org/SiteNavigationElement" aria-label="Site navigation map">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Site{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Navigation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guide to Mushbloom's AI automation resources, services, and implementation guides.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="glass-effect rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  {section.section}
                </h3>
              </div>

              <nav className="space-y-3" aria-label={section.section}>
                {section.links.map((link, linkIndex) => {
                  const content = (
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">
                          {link.description}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    </div>
                  );

                  return link.type === 'link' ? (
                    <Link
                      key={linkIndex}
                      to={link.url}
                      className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    >
                      {content}
                    </a>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <Award className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
              Performance Guarantee
            </h3>
            <p className="text-gray-300 text-sm">
              37% operational cost reduction within 90 days, or we work for free until you get results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteMap;
