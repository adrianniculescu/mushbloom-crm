
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Zap, 
  Target, 
  Shield, 
  TrendingUp,
  Gamepad2,
  Coins,
  Building2,
  Dice5,
  FileText,
  BarChart3,
  Clock,
  Globe
} from 'lucide-react';

const NewswirePage = () => {
  const tracks = [
    {
      name: "Mushbloom CryptoWire",
      focus: "Blockchain, DeFi, exchanges, Web3 launches & listings",
      slug: "crypto-blockchain",
      icon: Coins,
      gradient: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "Mushbloom CyberWire",
      focus: "Cybersecurity tools, breaches, compliance, vendor news",
      slug: "cybersecurity",
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10"
    },
    {
      name: "Mushbloom FinanceWire",
      focus: "Fintech, investing, banking, funding rounds",
      slug: "finance-fintech",
      icon: Building2,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      name: "Mushbloom GamingWire",
      focus: "PC/console/mobile games, esports, studio announcements",
      slug: "gaming",
      icon: Gamepad2,
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10"
    },
    {
      name: "Mushbloom PlayWire",
      focus: "iGaming, betting, casinos, affiliate partnerships",
      slug: "igaming",
      icon: Dice5,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Pick Your Track & Story",
      description: "Email office@mushbloom.co.uk or book a call—we refine the angle for maximum impact.",
      icon: Target
    },
    {
      number: "02",
      title: "Draft & Approve",
      description: "Provide your release or let us craft it; quick revisions included.",
      icon: FileText
    },
    {
      number: "03",
      title: "Distribute Instantly",
      description: "Goes live on partner homepages (same-day during business hours).",
      icon: Zap
    },
    {
      number: "04",
      title: "Track Results",
      description: "Get a dashboard report with links, views, and coverage metrics.",
      icon: BarChart3
    }
  ];

  const faqs = [
    {
      question: "What niches do you cover?",
      answer: "Crypto-blockchain, cybersecurity, finance-fintech, gaming, and iGaming—each with specialized outlets and direct API integrations to industry-leading publications."
    },
    {
      question: "How fast is distribution?",
      answer: "Same-day during GMT business hours (07:30–19:00); next business day otherwise, post-approval. No delays, no queues."
    },
    {
      question: "Do you guarantee coverage?",
      answer: "Yes—homepage placements on partner sites are guaranteed, unlike generic newswire services that blast to irrelevant outlets."
    },
    {
      question: "What goes in the report?",
      answer: "Live links to all placements, submission status, estimated views via trackers, and engagement metrics where available."
    },
    {
      question: "Can you write the release?",
      answer: "Absolutely—we offer full press release writing services. Start with a strategy call to nail the angle and messaging."
    }
  ];

  const useCases = [
    "Product launches",
    "Funding announcements",
    "Partnership news",
    "Security updates",
    "Exchange listings",
    "Tournament announcements",
    "Regulatory wins",
    "Company milestones"
  ];

  return (
    <>
      <Helmet>
        <title>Mushbloom Newswire – Niche Press Release Distribution | Targeted PR</title>
        <meta name="description" content="Broadcast your news to hyper-targeted industry media outlets with guaranteed homepage exposure. Crypto, cybersecurity, fintech, gaming & iGaming PR distribution." />
        <meta name="keywords" content="press release distribution, niche PR, crypto press release, cybersecurity PR, fintech news distribution, gaming press release, iGaming PR, newswire service, targeted media distribution" />
        <link rel="canonical" href="https://mushbloom.co.uk/newswire" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mushbloom Newswire – Niche Press Release Distribution" />
        <meta property="og:description" content="Targeted PR distribution for crypto, cybersecurity, fintech, gaming & iGaming. Guaranteed homepage exposure on industry-leading outlets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushbloom.co.uk/newswire" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mushbloom Newswire – Niche Press Release Distribution" />
        <meta name="twitter:description" content="Targeted PR distribution with guaranteed homepage exposure on industry-leading outlets." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mushbloom Newswire",
            "description": "Niche press release distribution service for crypto, cybersecurity, fintech, gaming and iGaming industries",
            "provider": {
              "@type": "Organization",
              "name": "Mushbloom",
              "url": "https://mushbloom.co.uk"
            },
            "serviceType": "Press Release Distribution",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Newswire Tracks",
              "itemListElement": tracks.map((track, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": track.name,
                  "description": track.focus
                },
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 px-4 py-2 rounded-full text-sm text-blue-300 mb-6">
                <Globe className="h-4 w-4" />
                <span>Powered by Mushbloom</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Mushbloom Newswire –{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Niche Press Release Distribution
                </span>
                {' '}for Modern PR
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Broadcast your news to hyper-targeted industry media outlets with{' '}
                <strong className="text-white">guaranteed homepage exposure</strong> and measurable results. 
                Same-day distribution available.
              </p>
              
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                The #1 choice for vertical newswire services. Reach CISOs, VCs, gamers, traders, and decision-makers 
                directly through specialized channels—no vanity metrics, just relevant visibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="mailto:office@mushbloom.co.uk"
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  Email office@mushbloom.co.uk
                </a>
                
                <a 
                  href="https://tidycal.com/adrianniculescu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Book a Strategy Call
                </a>
              </div>

              {/* Trust badges placeholder */}
              <div className="flex flex-wrap justify-center gap-6 items-center opacity-60">
                <div className="text-sm text-gray-400">Trusted by founders & CMOs worldwide</div>
                <div className="flex gap-4">
                  <div className="w-20 h-8 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">Partner</div>
                  <div className="w-20 h-8 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">Partner</div>
                  <div className="w-20 h-8 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">Partner</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mushbloom Newswire */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Why{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Mushbloom Newswire
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlike traditional newswires, Mushbloom focuses on five verticals with direct API integrations 
                to top outlets, ensuring homepage placements and audience relevance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-xl p-6 text-center">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">
                  Hyper-Targeted Exposure
                </h3>
                <p className="text-gray-300">
                  News lands on sites your buyers already read—crypto traders on blockchain hubs, 
                  CISOs on security portals, gamers on gaming news sites.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-6 text-center">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">
                  Zero-Risk Guarantees
                </h3>
                <p className="text-gray-300">
                  Every release gets homepage coverage on partner sites, with full tracking reports. 
                  No vanity metrics—just real placements.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-6 text-center">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-400 to-green-400 mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">
                  Simple Workflow
                </h3>
                <p className="text-gray-300">
                  Submit, approve, distribute—built by marketing pros for speed and results. 
                  Same-day distribution during business hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Five Niche Tracks */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Our Five{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Niche Tracks
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your vertical for tailored distribution. Each track plugs into a dedicated newswire network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <Link
                  key={index}
                  to={`/newswire/${track.slug}`}
                  className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${track.gradient} mb-4`}>
                    <track.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-['Space_Grotesk'] group-hover:text-blue-400 transition-colors">
                    {track.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{track.focus}</p>
                  <div className="flex items-center text-blue-400 text-sm font-medium">
                    Learn more <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                How It{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Four-step process for all tracks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="glass-effect rounded-xl p-6 h-full">
                    <div className="text-4xl font-bold text-blue-500/30 mb-4 font-['Space_Grotesk']">
                      {step.number}
                    </div>
                    <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-green-500/20 mb-4">
                      <step.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                  Perfect For
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                  >
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Get Started{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Today
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to amplify your news? We'll align on your track, timeline, and goals—no commitment required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:office@mushbloom.co.uk"
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  Email for Fastest Quotes
                </a>
                
                <a 
                  href="https://tidycal.com/adrianniculescu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="glass-effect rounded-xl p-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-300" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 Mushbloom Newswire. Part of the Mushbloom ecosystem.
          </p>
        </footer>
      </div>
    </>
  );
};

export default NewswirePage;
