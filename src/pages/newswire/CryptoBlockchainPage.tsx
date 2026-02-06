
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Coins,
  TrendingUp,
  Globe,
  Wallet,
  LineChart,
  Shield,
  Zap
} from 'lucide-react';

const CryptoBlockchainPage = () => {
  const features = [
    {
      icon: Wallet,
      title: "DeFi & Exchange Coverage",
      description: "Reach DeFi enthusiasts, traders, and exchange users on leading crypto news platforms."
    },
    {
      icon: LineChart,
      title: "Token Launch Visibility",
      description: "Maximize exposure for ICOs, IDOs, and token listings across crypto-native audiences."
    },
    {
      icon: Globe,
      title: "Web3 & NFT Networks",
      description: "Connect with the Web3 community through specialized blockchain and NFT publications."
    },
    {
      icon: Shield,
      title: "Institutional Reach",
      description: "Access institutional investors and VCs through premium crypto finance outlets."
    }
  ];

  const outlets = [
    "Crypto news aggregators",
    "DeFi-focused platforms",
    "NFT & Web3 publications",
    "Blockchain technology sites",
    "Trading & analysis platforms",
    "Institutional crypto media"
  ];

  const useCases = [
    "Token launches & listings",
    "DEX integrations",
    "DeFi protocol updates",
    "NFT collection drops",
    "Blockchain partnerships",
    "Exchange announcements",
    "Funding rounds",
    "Technical milestones"
  ];

  return (
    <>
      <Helmet>
        <title>CryptoWire – Crypto & Blockchain Press Release Distribution | Mushbloom Newswire</title>
        <meta name="description" content="Distribute your crypto and blockchain press releases to DeFi, Web3, NFT, and exchange audiences. Guaranteed homepage placements on leading crypto publications." />
        <meta name="keywords" content="crypto press release, blockchain PR distribution, DeFi news, Web3 press release, NFT announcement, token launch PR, cryptocurrency media, blockchain newswire" />
        <link rel="canonical" href="https://mushbloom.co.uk/newswire/crypto-blockchain" />
        
        <meta property="og:title" content="CryptoWire – Crypto & Blockchain Press Release Distribution" />
        <meta property="og:description" content="Targeted PR distribution for DeFi, Web3, NFT, and exchange announcements. Reach crypto traders and investors directly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushbloom.co.uk/newswire/crypto-blockchain" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mushbloom CryptoWire",
            "description": "Crypto and blockchain press release distribution service targeting DeFi, Web3, NFT, and exchange audiences",
            "provider": {
              "@type": "Organization",
              "name": "Mushbloom"
            },
            "serviceType": "Crypto Press Release Distribution",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        
        {/* Hero */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
                <Coins className="h-4 w-4" />
                <span>Mushbloom CryptoWire</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Crypto & Blockchain{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Press Release Distribution
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reach crypto traders, DeFi enthusiasts, NFT collectors, and blockchain investors directly. 
                Your news lands on the homepages of leading crypto publications—guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=CryptoWire%20Inquiry"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  Get Started with CryptoWire
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Crypto outlets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">Same-Day</div>
                  <div className="text-sm text-gray-400">Distribution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-1">100%</div>
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
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                CryptoWire
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 mb-4">
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
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
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
                      className="bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-orange-300 text-sm"
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
            <div className="glass-effect rounded-2xl p-8 border border-orange-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Ready to Launch Your{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Crypto News
                </span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your announcement in front of crypto traders, investors, and enthusiasts today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=CryptoWire%20Inquiry"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
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
            © 2025 Mushbloom CryptoWire. Part of the Mushbloom Newswire network.
          </p>
        </footer>
      </div>
    </>
  );
};

export default CryptoBlockchainPage;
