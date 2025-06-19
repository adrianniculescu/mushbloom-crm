
import React from 'react';

const HumanTeam = () => {
  return (
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
          <img 
            src="/lovable-uploads/df1ead2e-8468-4c3e-8d5e-565e07b0655d.png" 
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
            src="/lovable-uploads/f13888dd-576b-4864-a689-767c62a85153.png" 
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
    </div>
  );
};

export default HumanTeam;
