
import React from 'react';
import { Bot, Brain, Users, Cpu, Network } from 'lucide-react';

const AIAgentTeams = () => {
  const aiAgentTeams = [
    {
      icon: Brain,
      title: "Analytics Team",
      description: "AI agents that analyze data patterns, customer behavior, and market trends to provide strategic insights.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Bot,
      title: "Customer Service Team",
      description: "24/7 AI agents handling customer inquiries, support tickets, and providing personalized assistance.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Cpu,
      title: "Operations Team",
      description: "AI agents automating workflows, managing processes, and optimizing operational efficiency.",
      gradient: "from-blue-400 to-green-400"
    },
    {
      icon: Network,
      title: "Marketing Team",
      description: "AI agents creating content, managing campaigns, and optimizing conversion funnels autonomously.",
      gradient: "from-green-400 to-blue-400"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
          Meet Our{' '}
          <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            AI Agent Teams
          </span>
        </h3>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Specialized AI workforces designed to handle every aspect of your business operations with precision and intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aiAgentTeams.map((team, index) => (
          <div
            key={index}
            className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${team.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${team.gradient} mb-4`}>
                <team.icon className="h-8 w-8 text-white" />
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">
                {team.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIAgentTeams;
