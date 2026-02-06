
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Dice5,
  Trophy,
  Globe,
  Users,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const iGamingPage = () => {
  const features = [
    {
      icon: Trophy,
      title: "Sportsbook Coverage",
      description: "Reach sports bettors, oddsmakers, and betting platform operators through specialized sportsbook media."
    },
    {
      icon: Dice5,
      title: "Casino Networks",
      description: "Connect with casino players, operators, and affiliate marketers through iGaming publications."
    },
    {
      icon: Globe,
      title: "Regulatory Channels",
      description: "Distribute licensing news, compliance updates, and market entry announcements to industry regulators."
    },
    {
      icon: Users,
      title: "Affiliate & B2B",
      description: "Access affiliate partners, platform providers, and iGaming service companies through B2B channels."
    }
  ];

  const outlets = [
    "iGaming news platforms",
    "Sports betting media",
    "Casino industry publications",
    "Affiliate marketing sites",
    "Regulatory news channels",
    "B2B gaming media"
  ];

  const useCases = [
    "Platform launches",
    "License acquisitions",
    "Affiliate partnerships",
    "Market expansions",
    "Sports sponsorships",
    "Jackpot wins",
    "Regulatory approvals",
    "Technology integrations"
  ];

  return (
    <>
      <Helmet>
        <title>PlayWire – iGaming & Betting Press Release Distribution | Mushbloom Newswire</title>
        <meta name="description" content="Distribute your iGaming and betting press releases to sportsbook operators, casino platforms, and affiliate partners. Guaranteed homepage coverage on leading iGaming publications." />
        <meta name="keywords" content="iGaming press release, betting PR distribution, casino news, sportsbook announcement, gambling industry media, online casino PR, sports betting news" />
        <link rel="canonical" href="https://mushbloom.co.uk/newswire/igaming" />
        
        <meta property="og:title" content="PlayWire – iGaming & Betting Press Release Distribution" />
        <meta property="og:description" content="Targeted PR distribution for iGaming operators, sportsbooks, and casino platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushbloom.co.uk/newswire/igaming" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mushbloom PlayWire",
            "description": "iGaming and betting press release distribution service targeting sportsbook operators, casino platforms, and affiliate partners",
            "provider": {
              "@type": "Organization",
              "name": "Mushbloom"
            },
            "serviceType": "iGaming Press Release Distribution",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        
        {/* Hero */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link 
              to="/newswire" 
              className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Newswire Hub
            </Link>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 px-4 py-2 rounded-full text-sm text-blue-300 mb-6">
                <Dice5 className="h-4 w-4" />
                <span>Mushbloom PlayWire</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
                iGaming & Betting{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Press Release Distribution
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reach sportsbook operators, casino platforms, affiliate partners, and iGaming professionals directly. 
                Your betting news lands on the homepages of leading iGaming publications—guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=PlayWire%20Inquiry"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  Get Started with PlayWire
                </a>
                
                <a 
                  href="https://tidycal.com/adrianniculescu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Book Strategy Call
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">55+</div>
                  <div className="text-sm text-gray-400">iGaming outlets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">B2B</div>
                  <div className="text-sm text-gray-400">& Affiliate reach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Homepage guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-['Space_Grotesk']">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                PlayWire
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-['Space_Grotesk']">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outlets & Use Cases */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
                  Distribution Network
                </h3>
                <div className="space-y-3">
                  {outlets.map((outlet, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{outlet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-3">
                  {useCases.map((useCase, index) => (
                    <div 
                      key={index}
                      className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Gaming Note */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-xl p-6 border border-blue-500/20 flex items-start gap-4">
              <Shield className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">
                  Responsible Gaming & Compliance
                </h4>
                <p className="text-gray-300 text-sm">
                  We work exclusively with licensed operators and ensure all press releases comply with advertising 
                  standards and responsible gaming guidelines across target jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Ready to Launch Your{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  iGaming News
                </span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your announcement in front of operators, affiliates, and iGaming professionals today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=PlayWire%20Inquiry"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Zap className="h-5 w-5" />
                  Start Distribution
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 Mushbloom PlayWire. Part of the Mushbloom Newswire network.
          </p>
        </footer>
      </div>
    </>
  );
};

export default iGamingPage;
