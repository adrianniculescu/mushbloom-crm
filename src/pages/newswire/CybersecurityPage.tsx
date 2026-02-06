
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Shield,
  Lock,
  AlertTriangle,
  FileCheck,
  Server,
  Eye,
  Zap
} from 'lucide-react';

const CybersecurityPage = () => {
  const features = [
    {
      icon: Lock,
      title: "Security Vendor Coverage",
      description: "Reach CISOs, security analysts, and IT decision-makers through specialized security publications."
    },
    {
      icon: AlertTriangle,
      title: "Breach & Threat Intel",
      description: "Distribute threat advisories, vulnerability disclosures, and incident reports to security professionals."
    },
    {
      icon: FileCheck,
      title: "Compliance & GRC",
      description: "Reach compliance officers and risk managers with regulatory updates and certification news."
    },
    {
      icon: Server,
      title: "Enterprise Security",
      description: "Access enterprise security buyers and IT leaders through B2B technology channels."
    }
  ];

  const outlets = [
    "Cybersecurity news platforms",
    "CISO-focused publications",
    "Threat intelligence blogs",
    "Compliance & GRC media",
    "Enterprise IT security sites",
    "Vendor comparison platforms"
  ];

  const useCases = [
    "Product launches",
    "Vulnerability disclosures",
    "Threat research reports",
    "Compliance certifications",
    "Partnership announcements",
    "Funding rounds",
    "Executive appointments",
    "Industry awards"
  ];

  return (
    <>
      <Helmet>
        <title>CyberWire – Cybersecurity Press Release Distribution | Mushbloom Newswire</title>
        <meta name="description" content="Distribute your cybersecurity press releases to CISOs, security analysts, and IT decision-makers. Guaranteed coverage on leading security publications." />
        <meta name="keywords" content="cybersecurity press release, security PR distribution, CISO outreach, infosec news, security vendor PR, threat intelligence PR, compliance news distribution" />
        <link rel="canonical" href="https://mushbloom.co.uk/newswire/cybersecurity" />
        
        <meta property="og:title" content="CyberWire – Cybersecurity Press Release Distribution" />
        <meta property="og:description" content="Targeted PR distribution for security vendors, threat researchers, and compliance professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushbloom.co.uk/newswire/cybersecurity" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mushbloom CyberWire",
            "description": "Cybersecurity press release distribution service targeting CISOs, security analysts, and IT decision-makers",
            "provider": {
              "@type": "Organization",
              "name": "Mushbloom"
            },
            "serviceType": "Cybersecurity Press Release Distribution",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        
        {/* Hero */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 px-4 py-2 rounded-full text-sm text-red-300 mb-6">
                <Shield className="h-4 w-4" />
                <span>Mushbloom CyberWire</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Cybersecurity{' '}
                <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                  Press Release Distribution
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reach CISOs, security analysts, compliance officers, and IT decision-makers directly. 
                Your security news lands on the homepages of leading cybersecurity publications—guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=CyberWire%20Inquiry"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  Get Started with CyberWire
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
                  <div className="text-3xl font-bold text-red-400 mb-1">40+</div>
                  <div className="text-sm text-gray-400">Security outlets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-1">CISO</div>
                  <div className="text-sm text-gray-400">Direct reach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-300 mb-1">100%</div>
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
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                CyberWire
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 mb-4">
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
                      <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
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
                      className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-300 text-sm"
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
            <div className="glass-effect rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Ready to Launch Your{' '}
                <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                  Security News
                </span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your announcement in front of CISOs, security analysts, and IT decision-makers today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:office@mushbloom.co.uk?subject=CyberWire%20Inquiry"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg"
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
            © 2025 Mushbloom CyberWire. Part of the Mushbloom Newswire network.
          </p>
        </footer>
      </div>
    </>
  );
};

export default CybersecurityPage;
