
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Gamepad2,
  Monitor,
  Smartphone,
  Trophy,
  Users,
  Tv,
  Zap
} from 'lucide-react';

const GamingPage = () => {
  const features = [
    {
      icon: Monitor,
      title: "PC & Console Coverage",
      description: "Reach core gamers and enthusiasts through leading PC and console gaming publications."
    },
    {
      icon: Smartphone,
      title: "Mobile Gaming Networks",
      description: "Connect with mobile gamers and casual audiences through specialized mobile gaming outlets."
    },
    {
      icon: Trophy,
      title: "Esports Channels",
      description: "Access competitive gaming communities, teams, and tournament organizers through esports media."
    },
    {
      icon: Users,
      title: "Indie & Studio News",
      description: "Reach game developers, publishers, and industry insiders through B2B gaming channels."
    }
  ];

  const outlets = [
    "Gaming news sites",
    "PC gaming publications",
    "Console gaming media",
    "Mobile gaming platforms",
    "Esports news outlets",
    "Game developer blogs"
  ];

  const useCases = [
    "Game launches",
    "DLC announcements",
    "Esports tournaments",
    "Studio partnerships",
    "Platform releases",
    "Beta announcements",
    "Funding news",
    "Award nominations"
  ];

  return (
    <>
      <Helmet>
        <title>GamingWire – Gaming Press Release Distribution | Mushbloom Newswire</title>
        <meta name="description" content="Distribute your gaming press releases to PC, console, mobile gamers and esports audiences. Guaranteed homepage placements on leading gaming publications." />
        <meta name="keywords" content="gaming press release, video game PR distribution, esports news, game launch PR, indie game announcement, mobile gaming media, gaming industry news" />
        <link rel="canonical" href="https://mushbloom.co.uk/newswire/gaming" />
        
        <meta property="og:title" content="GamingWire – Gaming Press Release Distribution" />
        <meta property="og:description" content="Targeted PR distribution for game studios, esports organizations, and gaming platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushbloom.co.uk/newswire/gaming" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mushbloom GamingWire",
            "description": "Gaming press release distribution service targeting PC, console, mobile gamers and esports audiences",
            "provider": {
              "@type": "Organization",
              "name": "Mushbloom"
            },
            "serviceType": "Gaming Press Release Distribution",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        
        {/* Hero */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 px-4 py-2 rounded-full text-sm text-purple-300 mb-6">
                <Gamepad2 className="h-4 w-4" />
                <span>Mushbloom GamingWire</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Gaming{' '}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  Press Release Distribution
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reach PC gamers, console players, mobile audiences, and esports enthusiasts directly. 
                Your gaming news lands on the homepages of leading gaming publications—guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=GamingWire%20Inquiry"
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  Get Started with GamingWire
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
                  <div className="text-3xl font-bold text-purple-400 mb-1">60+</div>
                  <div className="text-sm text-gray-400">Gaming outlets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">Esports</div>
                  <div className="text-sm text-gray-400">Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-1">100%</div>
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
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                GamingWire
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">
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
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
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
                      className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full text-purple-300 text-sm"
                    >
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-effect rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Ready to Launch Your{' '}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  Gaming News
                </span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your announcement in front of gamers, esports fans, and gaming industry insiders today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=GamingWire%20Inquiry"
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
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
            © 2025 Mushbloom GamingWire. Part of the Mushbloom Newswire network.
          </p>
        </footer>
      </div>
    </>
  );
};

export default GamingPage;
