
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { 
  Search, 
  TrendingUp, 
  Brain, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Bot,
  Zap,
  Star,
  Users,
  BarChart,
  Cpu,
  ExternalLink
} from 'lucide-react';

const LLMboostPage = () => {
  const features = [
    {
      icon: Search,
      title: "LLM SEO Audit",
      description: "Comprehensive analysis of your brand's presence in ChatGPT, Gemini, Claude, and AI-powered search results."
    },
    {
      icon: BarChart,
      title: "Quiz-Based Visibility Scoring",
      description: "Measure how often and how well your business appears in AI-generated answers with our proprietary scoring system."
    },
    {
      icon: Brain,
      title: "Content & Entity Optimization",
      description: "Craft and structure your content so LLMs cite you as a trusted source across all AI platforms."
    },
    {
      icon: TrendingUp,
      title: "Industry Benchmarking",
      description: "See how you stack up against competitors in both traditional and AI-driven search results."
    },
    {
      icon: Target,
      title: "Share of Model Strategy",
      description: "Step-by-step roadmap to boost your 'Share of Model' (SOM) and dominate LLM-powered results."
    },
    {
      icon: Cpu,
      title: "Implementation & Monitoring",
      description: "Ongoing updates and optimizations to keep you ahead as LLMs evolve and improve."
    }
  ];

  const benefits = [
    "Be the answer: Get cited by AI assistants, not just ranked by Google",
    "Drive qualified leads from both search engines and AI chatbots",
    "Future-proof your brand for LLM-driven search dominance",
    "First-mover advantage in the new AI search landscape",
    "Increased brand authority across all AI platforms",
    "Measurable ROI with our Share of Model metrics"
  ];

  const caseStudies = [
    {
      slug: "techcorp-300-percent-increase",
      title: "TechCorp: 300% AI Visibility Increase",
      description: "How a B2B SaaS company dominated ChatGPT and Gemini results in their industry",
      image: "/lovable-uploads/c933c4ec-6ac2-46fc-a48b-832c5e48a72d.png",
      tags: ["B2B SaaS", "300% Growth", "ChatGPT Optimization"]
    },
    {
      slug: "legalfirm-first-mover-advantage",
      title: "Legal Firm: First-Mover Market Dominance",
      description: "Law practice becomes default AI recommendation for legal services",
      image: "/lovable-uploads/df1ead2e-8468-4c3e-8d5e-565e07b0655d.png",
      tags: ["Legal Services", "Market Dominance", "AI Authority"]
    },
    {
      slug: "ecommerce-ai-shopping-takeover",
      title: "E-commerce: AI Shopping Assistant Takeover",
      description: "Retail brand captures 85% of AI-powered product recommendations",
      image: "/lovable-uploads/f13888dd-576b-4864-a689-767c62a85153.png",
      tags: ["E-commerce", "Product Recommendations", "85% Share"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>LLMboost – AI Search Visibility Accelerator | ChatGPT, Gemini, Claude SEO | Mushbloom</title>
        <meta name="description" content="LLMboost: Revolutionary LLM SEO optimization for ChatGPT, Gemini, Claude. Boost your Share of Model, dominate AI search results. Free LLM SEO audit available from Mushbloom." />
        <meta name="keywords" content="LLMboost, LLM SEO, ChatGPT SEO, Gemini optimization, Claude visibility, AI search optimization, Share of Model, AI visibility, Mushbloom" />
        <link rel="canonical" href="https://mushbloom.co.uk/llmboost" />
        
        <meta property="og:title" content="LLMboost – AI Search Visibility Accelerator | Mushbloom" />
        <meta property="og:description" content="Be the default answer in ChatGPT, Gemini, Claude. LLMboost optimizes your brand for AI-powered search with measurable Share of Model results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushbloom.co.uk/llmboost" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LLMboost – AI Search Visibility Accelerator" />
        <meta name="twitter:description" content="Boost your brand visibility in ChatGPT, Gemini, Claude with LLMboost by Mushbloom." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LLMboost – AI-Driven LLM & Search Visibility Accelerator",
            "description": "LLM SEO optimization service for ChatGPT, Gemini, Claude, and AI-powered search results. Boost Share of Model and dominate AI visibility.",
            "provider": {
              "@type": "Organization",
              "name": "Mushbloom",
              "url": "https://mushbloom.co.uk"
            },
            "areaServed": "Global",
            "serviceType": "LLM SEO Optimization",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "LLMboost Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLM SEO Audit" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Share of Model Optimization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content & Entity Optimization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industry Benchmarking" } }
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mushbloom.co.uk" },
              { "@type": "ListItem", "position": 2, "name": "LLMboost", "item": "https://mushbloom.co.uk/llmboost" }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        
        <main>
          {/* Breadcrumb */}
          <nav className="pt-20 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-gray-300">LLMboost</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="pt-8 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  Revolutionary AI Visibility Service
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
                  LLM<span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">boost</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
                  AI-Driven LLM & Search Visibility Accelerator
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                  Be the default answer in ChatGPT, Gemini, Claude, and AI-powered search. LLMboost optimizes your brand for LLM visibility, driving qualified leads from the next generation of search behavior.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 group">
                    Get Free LLM SEO Audit
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#case-studies" className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400/10 transition-colors duration-200 inline-flex items-center justify-center">
                    View Case Studies
                  </a>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10%</div>
                  <div className="text-gray-300 text-sm">Of queries now happen in AI chatbots</div>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Average AI visibility increase</div>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                  <div className="text-gray-300 text-sm">Of brands are not LLM-optimized</div>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">First</div>
                  <div className="text-gray-300 text-sm">Mover advantage available</div>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-white text-center mb-12 font-['Space_Grotesk']">
                What's Included in <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">LLMboost</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-3 rounded-lg w-fit mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-white text-center mb-12 font-['Space_Grotesk']">
                Key <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Benefits</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 glass-effect rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-white text-center mb-12 font-['Space_Grotesk']">
                Success <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <Link 
                    key={index} 
                    to={`/llmboost/${study.slug}`}
                    className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 relative overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk'] group-hover:text-purple-300 transition-colors">
                        {study.title}
                      </h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="text-sm font-medium">Read Case Study</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto border border-purple-400/30">
                  <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Ready to Dominate AI Search?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Book your free LLM SEO audit and discover how visible your brand really is in ChatGPT, Gemini, Claude, and beyond.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 inline-block">
                      Book Your Free LLM SEO Audit Now
                    </a>
                    <Link 
                      to="/"
                      className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Contact />
      </div>
    </>
  );
};

export default LLMboostPage;
