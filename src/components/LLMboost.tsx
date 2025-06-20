
import React from 'react';
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
  Cpu
} from 'lucide-react';

const LLMboost = () => {
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

  const idealFor = [
    { icon: Bot, title: "SaaS & Tech Companies", description: "Establish thought leadership in AI-powered search results" },
    { icon: Users, title: "Professional Services", description: "Legal, finance, healthcare professionals seeking authority" },
    { icon: TrendingUp, title: "eCommerce Brands", description: "Product recommendations in AI shopping assistants" },
    { icon: Brain, title: "Agencies & Consultancies", description: "Position as the go-to expert in your field" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black" itemScope itemType="https://schema.org/Service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Revolutionary AI Visibility Service
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']" itemProp="name">
            LLM<span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">boost</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
            AI-Driven LLM & Search Visibility Accelerator
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed" itemProp="description">
            Unlock the next era of brand visibility with LLMboost—Mushbloom's proprietary service designed to propel your business to the top of AI-powered search, conversational agents, and large language model results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 group">
              Get Free LLM SEO Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400/10 transition-colors duration-200">
              View Case Studies
            </button>
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

        {/* What's Included */}
        <div className="mb-16">
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

        {/* Why LLMboost */}
        <div className="mb-16">
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8 font-['Space_Grotesk']">
              Why <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">LLMboost</span>?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Bot className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">LLMs Are the New Search Engines</h4>
                <p className="text-gray-300">Up to 10% of online queries now happen inside AI chatbots and assistants, and this percentage is growing rapidly.</p>
              </div>
              <div className="text-center">
                <Search className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">Traditional SEO Isn't Enough</h4>
                <p className="text-gray-300">LLMs use different signals—entity relationships, authority, and context, not just keywords.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">First-Mover Advantage</h4>
                <p className="text-gray-300">Early LLM optimization means you become the "default answer" for your niche before competitors catch up.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
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

        {/* Ideal For */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-['Space_Grotesk']">
            Who Needs <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">LLMboost</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealFor.map((item, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 font-['Space_Grotesk']">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto border border-purple-400/30">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Ready to be the Answer in AI-Powered Search?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Try LLMboost and see how visible your brand really is in ChatGPT, Gemini, Claude, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200">
                Book Your Free LLM SEO Audit Now
              </button>
              <button className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Structured Data */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/Service">
            <meta itemProp="name" content="LLMboost - AI-Driven LLM & Search Visibility Accelerator" />
            <meta itemProp="description" content="Optimize your brand for ChatGPT, Gemini, Claude, and AI-powered search results. Professional LLM SEO and AI visibility optimization service." />
            <meta itemProp="provider" content="Mushbloom" />
            <meta itemProp="areaServed" content="Global" />
            <div itemProp="category">LLM SEO</div>
            <div itemProp="category">AI Search Optimization</div>
            <div itemProp="category">AI Visibility</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLMboost;
