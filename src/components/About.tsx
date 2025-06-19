
import React from 'react';
import { Cpu, Database, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to the{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At Mushbloom, we're not just another marketing agency. We're architects of the future, 
              building AI-first solutions that don't just automate—they innovate, strategize, and evolve.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our AI agents don't just follow scripts; they understand context, emotion, and intent. 
              Our systems don't just collect data; they predict trends, identify opportunities, and 
              automatically optimize for outcomes you haven't even thought of yet.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Cpu className="h-6 w-6 text-purple-400" />
                <span className="text-white font-medium">Neural Network Marketing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="h-6 w-6 text-pink-400" />
                <span className="text-white font-medium">Predictive Intelligence</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-blue-400" />
                <span className="text-white font-medium">Autonomous Optimization</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Futuristic visualization */}
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse"></div>
              
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">2025+</div>
                  <div className="text-gray-300">Years Ahead</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
                    <div className="text-sm text-gray-300">AI Agents Deployed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-400 mb-1">247%</div>
                    <div className="text-sm text-gray-300">Avg. ROI Increase</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Processing Power</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full animate-pulse"></div>
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
