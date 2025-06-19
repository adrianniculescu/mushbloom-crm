
import React from 'react';
import { Cpu, Database, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
              The{' '}
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                AI Workforce Revolution
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At Mushbloom, we're not just another marketing agency. We're architects of autonomous business systems, 
              transforming how companies operate with self-improving AI ecosystems that think, learn, and scale beyond human limitations.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our AI agents don't just follow scripts—they understand context, emotion, and intent. 
              Our systems don't just collect data—they predict trends, identify opportunities, and 
              automatically optimize for outcomes you haven't even considered yet.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Cpu className="h-6 w-6 text-blue-400" />
                <span className="text-white font-medium">Neural Network Marketing Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="h-6 w-6 text-green-400" />
                <span className="text-white font-medium">Predictive Intelligence & Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-blue-300" />
                <span className="text-white font-medium">Autonomous Optimization & Scaling</span>
              </div>
            </div>

            {/* Legacy service transformation */}
            <div className="mt-8 p-6 glass-effect rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 font-['Space_Grotesk']">
                AI-Enhanced Legacy Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="text-gray-300">
                  <span className="text-blue-400">•</span> Sales Funnels → AI Journey Orchestration
                </div>
                <div className="text-gray-300">
                  <span className="text-green-400">•</span> Copywriting → AI Content Ecosystems
                </div>
                <div className="text-gray-300">
                  <span className="text-blue-400">•</span> Design → Automated Brand Generation
                </div>
                <div className="text-gray-300">
                  <span className="text-green-400">•</span> Multi-Channel → Omnichannel AI Autopilot
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Futuristic AI visualization */}
            <div className="relative glass-effect-dark rounded-2xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl animate-pulse-ai"></div>
              
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2 font-['Space_Grotesk']">2025+</div>
                  <div className="text-gray-300">Years Ahead of Competition</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">∞</div>
                    <div className="text-sm text-gray-300">AI Agents Deployed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-1">37%</div>
                    <div className="text-sm text-gray-300">Avg. Cost Reduction</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">AI Processing Power</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-full animate-pulse"></div>
                  </div>
                </div>

                {/* Case study preview */}
                <div className="border-t border-white/10 pt-4">
                  <div className="text-xs text-gray-400 mb-2">LATEST CASE STUDY</div>
                  <div className="text-sm text-white">
                    <span className="text-blue-400">EcomBrandX:</span> 37% support cost reduction
                  </div>
                  <div className="text-sm text-white mt-1">
                    <span className="text-green-400">SaaSBrandY:</span> 24/7 AI lead qualification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
