
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
      icon: Target,
      title: "Smart Funnels",
      description: "AI-powered conversion funnels that adapt and optimize in real-time based on user behavior and market conditions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Edit,
      title: "Neural Copywriting",
      description: "Advanced AI copywriting that understands psychology, persuasion, and your brand voice at a molecular level.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Bot,
      title: "AI Agent Deployment",
      description: "Custom AI agents that handle customer service, lead qualification, and sales processes 24/7 with human-like intelligence.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "AI Teams",
      description: "Complete AI workforces with specialized roles: analysts, creatives, strategists, and executors working in perfect harmony.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Network,
      title: "AI Infrastructure",
      description: "End-to-end AI marketing ecosystems with predictive analytics, automated A/B testing, and self-improving algorithms.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "Cognitive Automation",
      description: "Machine learning systems that continuously learn from your data to make smarter marketing decisions autonomously.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">AI Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond traditional marketing. We're building the intelligent infrastructure that will power the next generation of business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
