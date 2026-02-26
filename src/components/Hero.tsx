
import React from 'react';
import { ArrowRight, Zap, Bot, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements with new color scheme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Floating icons with new colors */}
          <div className="mb-8 flex justify-center space-x-8">
            <div className="animate-float">
              <Bot className="h-8 w-8 text-blue-400" />
            </div>
            <div className="animate-float delay-200">
              <Brain className="h-8 w-8 text-green-400" />
            </div>
            <div className="animate-float delay-400">
              <Zap className="h-8 w-8 text-blue-300" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in font-['Space_Grotesk']">
            Build Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
              AI Workforce
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            We create custom AI agents that automate growth, service, and operations—scaling your business while you sleep. 
            We don't just implement AI—we architect autonomous business systems.
          </p>

          {/* Performance metrics */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 animate-fade-in delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">37%</div>
              <div className="text-sm text-gray-400">Average operational cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Autonomous AI operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-1">90</div>
              <div className="text-sm text-gray-400">Days to full implementation</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <a 
              href="https://tidycal.com/adrianniculescu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 group shadow-lg"
            >
              Start Your AI Evolution
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#services" className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm inline-flex items-center justify-center">
              Explore AI Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
