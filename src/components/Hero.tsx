
import React from 'react';
import { ArrowRight, Zap, Bot, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Floating icons */}
          <div className="mb-8 flex justify-center space-x-8">
            <div className="animate-float">
              <Bot className="h-8 w-8 text-purple-400" />
            </div>
            <div className="animate-float delay-200">
              <Brain className="h-8 w-8 text-pink-400" />
            </div>
            <div className="animate-float delay-400">
              <Zap className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            The Future of{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              AI Marketing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            We don't just build funnels and write copy. We architect entire AI ecosystems, 
            deploy autonomous agent teams, and create marketing infrastructures that think, 
            learn, and scale beyond human limitations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 group">
              Start Your AI Evolution
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
              Explore Our Capabilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
