
import React from 'react';
import { 
  Bot, 
  Brain, 
  Zap, 
  Network, 
  Target, 
  Edit,
  Users,
  Cpu,
  Database,
  Search,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "LLMboost",
      description: "AI-driven LLM & search visibility accelerator. Optimize your brand for ChatGPT, Gemini, Claude, and AI-powered search results. Be the default answer in your industry.",
      gradient: "from-purple-500 to-blue-600",
      category: "LLM SEO & AI Visibility",
      isNew: true
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "24/7 AI agents for CRM, support, and sales processes. From lead qualification to customer service, our agents handle it all with human-like intelligence.",
      gradient: "from-blue-500 to-blue-600",
      category: "AI Agent Development"
    },
    {
      icon: Network,
      title: "Automation Ecosystems", 
      description: "End-to-end business process automation that reduces operational costs by 37% on average. Self-improving systems that evolve with your business.",
      gradient: "from-green-500 to-green-600",
      category: "Process Automation"
    },
    {
      icon: Target,
      title: "AI-Powered Funnels",
      description: "Legacy sales funnel optimization enhanced with AI. Real-time adaptation based on user behavior and market conditions for maximum conversion.",
      gradient: "from-blue-400 to-green-400",
      category: "AI-Optimized Funnels"
    },
    {
      icon: Users,
      title: "AI Agent Teams",
      description: "Complete AI workforces with specialized departmental roles: analysts, creatives, strategists, and executors working in perfect harmony.",
      gradient: "from-green-400 to-blue-400",
      category: "Departmental AI Teams"
    },
    {
      icon: Edit,
      title: "Neural Copywriting",
      description: "AI content generation ecosystems that understand psychology, persuasion, and your brand voice at a molecular level for superior conversion rates.",
      gradient: "from-blue-600 to-green-500",
      category: "AI Content Systems"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Our <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">AI Service Pillars</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond traditional marketing. We're building the intelligent infrastructure that powers the next generation of autonomous business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                service.isNew ? 'ring-2 ring-purple-400 ring-opacity-50' : ''
              }`}
            >
              {/* New service badge */}
              {service.isNew && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW
                </div>
              )}
              
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
                  {service.category}
                </div>
                
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                
                {service.isNew && (
                  <div className="mt-4">
                    <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
                      Learn About LLMboost →
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* LLMboost spotlight section */}
        <div className="mt-16">
          <div className="glass-effect rounded-2xl p-8 border border-purple-400/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                  <TrendingUp className="h-4 w-4" />
                  Featured Service
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                  Be the Answer in AI Search
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  LLMboost optimizes your brand for ChatGPT, Gemini, Claude, and other AI models. Get cited and recommended by AI assistants, not just ranked by Google.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Cpu className="h-4 w-4" />
                    <span className="text-sm">Share of Model Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-300">
                    <Database className="h-4 w-4" />
                    <span className="text-sm">Entity-Rich Content</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-300">
                    <Brain className="h-4 w-4" />
                    <span className="text-sm">AI Authority Building</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                  Get Free LLM SEO Audit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">10%</div>
                  <div className="text-sm text-gray-400">Queries in AI chatbots</div>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">300%</div>
                  <div className="text-sm text-gray-400">AI visibility increase</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">First</div>
                  <div className="text-sm text-gray-400">Mover advantage</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">AI monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance guarantee */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Performance-Based Pricing
            </h3>
            <p className="text-gray-300 text-lg">
              Pay for results: 37% average operational cost reduction in first 90 days, or we don't succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
