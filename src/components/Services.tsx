
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
  Database
} from 'lucide-react';

const Services = () => {
  const services = [
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
    },
    {
      icon: Brain,
      title: "Cognitive Automation",
      description: "Machine learning systems with predictive analytics that continuously learn from your data to make autonomous marketing decisions.",
      gradient: "from-green-600 to-blue-500",
      category: "Predictive Intelligence"
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
              className="group relative glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300"
            >
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
              </div>
            </div>
          ))}
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
