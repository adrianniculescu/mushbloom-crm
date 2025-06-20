
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { 
  ArrowLeft, 
  TrendingUp, 
  Target, 
  Calendar, 
  Clock,
  CheckCircle,
  BarChart,
  Users,
  Search,
  Brain,
  Zap
} from 'lucide-react';

const LLMboostCaseStudy = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  
  // Case study data - in a real app, this would come from an API
  const caseStudies = {
    'techcorp-300-percent-increase': {
      title: "TechCorp: 300% AI Visibility Increase",
      subtitle: "How a B2B SaaS company dominated ChatGPT and Gemini results in their industry",
      client: "TechCorp Solutions",
      industry: "B2B SaaS",
      duration: "3 months",
      date: "Q4 2024",
      image: "/lovable-uploads/c933c4ec-6ac2-46fc-a48b-832c5e48a72d.png",
      challenge: "TechCorp was invisible in AI-powered search results. When potential customers asked ChatGPT or Gemini about project management solutions, competitors were consistently mentioned while TechCorp remained absent from AI recommendations.",
      solution: "We implemented our comprehensive LLMboost strategy, focusing on entity optimization, authoritative content creation, and strategic knowledge graph enhancement to establish TechCorp as the definitive authority in their niche.",
      results: [
        { metric: "AI Visibility", before: "2%", after: "62%", improvement: "300%" },
        { metric: "Share of Model", before: "0.5%", after: "15.2%", improvement: "2940%" },
        { metric: "AI-Generated Leads", before: "0/month", after: "47/month", improvement: "∞" },
        { metric: "Brand Mentions in AI", before: "3/month", after: "89/month", improvement: "2867%" }
      ],
      strategies: [
        "Entity-rich content optimization for 50+ industry keywords",
        "Strategic knowledge base restructuring for AI comprehension",
        "Authority signal amplification across multiple platforms",
        "Continuous monitoring and optimization of LLM responses"
      ],
      quote: "LLMboost transformed our digital presence. We went from being invisible in AI search to being the first recommendation. Our pipeline has never been stronger.",
      author: "Sarah Mitchell, Head of Marketing at TechCorp"
    },
    'legalfirm-first-mover-advantage': {
      title: "Legal Firm: First-Mover Market Dominance",
      subtitle: "Law practice becomes default AI recommendation for legal services",
      client: "Harrison & Associates",
      industry: "Legal Services",
      duration: "4 months",
      date: "Q3 2024",
      image: "/lovable-uploads/df1ead2e-8468-4c3e-8d5e-565e07b0655d.png",
      challenge: "Harrison & Associates, despite being a top-tier law firm, found that AI assistants were recommending larger, more established firms when users asked for legal advice in their specialty areas.",
      solution: "We deployed a comprehensive LLM authority-building strategy, creating authoritative legal content optimized for AI consumption and establishing clear entity relationships between the firm and their areas of expertise.",
      results: [
        { metric: "AI Recommendations", before: "0%", after: "78%", improvement: "∞" },
        { metric: "Legal Query Share", before: "1%", after: "45%", improvement: "4400%" },
        { metric: "Consultation Requests", before: "12/month", after: "89/month", improvement: "642%" },
        { metric: "AI Authority Score", before: "2.1/10", after: "9.4/10", improvement: "348%" }
      ],
      strategies: [
        "Legal expertise documentation optimized for LLM understanding",
        "Case study optimization for AI citation and reference",
        "Professional authority establishment across AI platforms",
        "Competitive displacement through superior entity optimization"
      ],
      quote: "The results speak for themselves. We're now the go-to recommendation for corporate law in our region, and our client acquisition has accelerated dramatically.",
      author: "Michael Harrison, Senior Partner"
    },
    'ecommerce-ai-shopping-takeover': {
      title: "E-commerce: AI Shopping Assistant Takeover",
      subtitle: "Retail brand captures 85% of AI-powered product recommendations",
      client: "EcoLiving Essentials",
      industry: "E-commerce",
      duration: "2 months",
      date: "Q4 2024",
      image: "/lovable-uploads/f13888dd-576b-4864-a689-767c62a85153.png",
      challenge: "EcoLiving Essentials was losing market share to competitors who were being recommended by AI shopping assistants. Their products rarely appeared in ChatGPT, Gemini, or AI-powered product recommendations.",
      solution: "We implemented a product-focused LLMboost strategy, optimizing product descriptions, reviews, and brand content for maximum AI visibility and recommendation potential.",
      results: [
        { metric: "AI Product Recommendations", before: "3%", after: "85%", improvement: "2733%" },
        { metric: "Shopping Query Share", before: "0.8%", after: "34.5%", improvement: "4212%" },
        { metric: "AI-Driven Sales", before: "$2.1K/month", after: "$47.8K/month", improvement: "2176%" },
        { metric: "Brand Recognition in AI", before: "12%", after: "91%", improvement: "658%" }
      ],
      strategies: [
        "Product catalog optimization for AI shopping assistants",
        "Customer review enhancement for AI credibility signals",
        "Brand story optimization for emotional AI connections",
        "Competitive advantage amplification in AI recommendations"
      ],
      quote: "LLMboost didn't just improve our visibility—it revolutionized our entire sales funnel. AI assistants now actively recommend our products over competitors.",
      author: "Lisa Chen, Founder & CEO"
    }
  };

  useEffect(() => {
    if (slug && caseStudies[slug as keyof typeof caseStudies]) {
      const study = caseStudies[slug as keyof typeof caseStudies];
      setCaseStudy(study);
      
      // Update page title and meta description
      document.title = `${study.title} - LLMboost Case Study | Mushbloom`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${study.subtitle}. Discover how LLMboost delivered exceptional AI visibility results for ${study.client}.`);
      }

      // Add canonical URL
      const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', `https://mushbloom.co.uk/llmboost/${slug}`);
      document.head.appendChild(canonical);
    }
  }, [slug]);

  // If case study doesn't exist, redirect to LLMboost page
  if (slug && !caseStudies[slug as keyof typeof caseStudies]) {
    return <Navigate to="/llmboost" replace />;
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      <main className="pt-32">
        {/* Header */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/llmboost"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to LLMboost
            </Link>
            
            <div className="glass-effect rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    {caseStudy.title}
                  </h1>
                  <p className="text-xl text-gray-300 mb-6">
                    {caseStudy.subtitle}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{caseStudy.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Target className="h-4 w-4" />
                      <span>{caseStudy.industry}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{caseStudy.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 font-['Space_Grotesk']">
              Key <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Results</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {caseStudy.results.map((result: any, index: number) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{result.metric}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Before</span>
                    <span className="text-red-400 font-mono">{result.before}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">After</span>
                    <span className="text-green-400 font-mono">{result.after}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Improvement</span>
                    <span className="text-purple-400 font-bold">{result.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                  The Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              
              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                  Our Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-8 font-['Space_Grotesk']">
              Implementation <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Strategies</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.strategies.map((strategy: string, index: number) => (
                <div key={index} className="flex items-start gap-3 p-4 glass-effect rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{strategy}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-2xl p-8 border border-purple-400/30">
              <blockquote className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                "{caseStudy.quote}"
              </blockquote>
              <cite className="text-purple-400 font-semibold">
                — {caseStudy.author}
              </cite>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-2xl p-8 text-center border border-purple-400/30">
              <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Ready for Similar Results?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Book your free LLM SEO audit and discover how LLMboost can transform your AI visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200">
                  Get Your Free LLM SEO Audit
                </button>
                <Link 
                  to="/llmboost"
                  className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
                >
                  Back to LLMboost
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default LLMboostCaseStudy;
