
import React from 'react';
import { Bot, Brain, Users, Cpu, Network, Zap } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Mushbloom
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We're not just another marketing agency. We're architects of the autonomous business revolution, 
            building intelligent AI workforces that transform how companies operate, grow, and succeed.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-effect rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4 text-center font-['Space_Grotesk']">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            To empower businesses with AI agents that work 24/7, reduce operational costs by 37%, 
            and create autonomous systems that scale infinitely. We don't just implement AI—we architect 
            intelligent business ecosystems that evolve and improve continuously.
          </p>
        </div>

        {/* AI Agent Teams Section */}
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

        {/* Human Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Our Expert{' '}
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                Human Team
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Behind every AI agent is a team of experts who design, train, and optimize these intelligent systems. 
              Our human specialists work alongside AI to create the perfect autonomous business ecosystem.
            </p>
          </div>

          {/* Team Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/1df82638-2ca3-4834-8318-766128e9ad4b.png" 
                alt="AI Development Team" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">
                  AI Development Team
                </h4>
                <p className="text-gray-300 text-sm">
                  Specialists in machine learning, neural networks, and AI agent architecture.
                </p>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/c933c4ec-6ac2-46fc-a48b-832c5e48a72d.png" 
                alt="Strategy & Implementation Team" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">
                  Strategy & Implementation
                </h4>
                <p className="text-gray-300 text-sm">
                  Business analysts and strategists who design AI workflows for maximum impact.
                </p>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/cfd83a54-f25a-4889-a89d-18842ffc2092.png" 
                alt="Optimization & Training Team" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">
                  Optimization & Training
                </h4>
                <p className="text-gray-300 text-sm">
                  Continuous improvement specialists who train and optimize AI agent performance.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://mushbloom.uk/team/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              <Users className="h-5 w-5" />
              Meet Our Full Team
            </a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-effect rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Why Choose Mushbloom?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">37%</div>
              <div className="text-gray-300">Average cost reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Autonomous operations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300 mb-2">90</div>
              <div className="text-gray-300">Days to implementation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
