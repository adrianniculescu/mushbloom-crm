
import React from 'react';
import { ExternalLink, BookOpen, Users, Briefcase, MessageSquare, HelpCircle, Award } from 'lucide-react';

const SiteMap = () => {
  const siteStructure = [
    {
      section: "Main Pages",
      icon: ExternalLink,
      links: [
        { name: "Home", url: "#hero", description: "AI workforce automation solutions" },
        { name: "Services", url: "#services", description: "Custom AI agent deployment" },
        { name: "About", url: "#about", description: "Mushbloom team and mission" },
        { name: "Contact", url: "#contact", description: "Get in touch for consultation" }
      ]
    },
    {
      section: "Knowledge Hub",
      icon: BookOpen,
      links: [
        { name: "AI Investment Wiki", url: "#wiki", description: "30 expert articles on AI automation" },
        { name: "Deal Sourcing AI", url: "#wiki", description: "Automated investment discovery" },
        { name: "Due Diligence Tools", url: "#wiki", description: "AI-powered analysis systems" },
        { name: "Business Automation", url: "#wiki", description: "Workflow optimization guides" }
      ]
    },
    {
      section: "Client Resources",
      icon: Users,
      links: [
        { name: "Success Stories", url: "#testimonials", description: "Client case studies and results" },
        { name: "FAQ", url: "#faq", description: "Common questions about AI deployment" },
        { name: "Implementation Guide", url: "#about", description: "3-90 day deployment process" },
        { name: "Cost Calculator", url: "#contact", description: "37% savings guarantee" }
      ]
    },
    {
      section: "Industry Solutions",
      icon: Briefcase,
      links: [
        { name: "Investment Firms", url: "#services", description: "VC and PE automation tools" },
        { name: "Real Estate", url: "#services", description: "Property management AI" },
        { name: "SaaS Companies", url: "#services", description: "Customer success automation" },
        { name: "Professional Services", url: "#services", description: "Client workflow optimization" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900" itemScope itemType="https://schema.org/SiteNavigationElement">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Site{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Navigation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guide to Mushbloom's AI automation resources, client success stories, and implementation guides.
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

              <nav className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    itemProp="url"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">
                          {link.description}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Structured data for navigation */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/WebSite">
            <meta itemProp="name" content="Mushbloom AI Automation" />
            <meta itemProp="url" content="https://mushbloom.co.uk" />
            <div itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
              <meta itemProp="target" content="https://mushbloom.co.uk/search?q={search_term_string}" />
              <meta itemProp="query-input" content="required name=search_term_string" />
            </div>
          </div>
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
