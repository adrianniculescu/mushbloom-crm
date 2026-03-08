import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bot, Brain, CheckCircle, Star, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">Performance Guaranteed — or we work for free</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-['Space_Grotesk'] leading-tight">
              Deploy Your{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
                AI Workforce
              </span>
              {' '}in Days
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in delay-200 leading-relaxed">
              Custom AI agents that automate sales, operations, and customer service — cutting costs by 37% while scaling your business 24/7.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8 animate-fade-in delay-300">
              {[
                'AI agents deployed in 3–90 days',
                'LLMboost: Get recommended by ChatGPT & Gemini',
                '27+ websites & platforms built',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in delay-400">
              <a 
                href="https://tidycal.com/adrianniculescu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25"
              >
                Book a Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#services" className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm inline-flex items-center justify-center">
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 animate-fade-in delay-500">
              <div className="flex -space-x-2">
                {['JD', 'AB', 'MK', 'SR'].map((initials, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white text-xs font-bold border-2 border-black">
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">Trusted by 47+ companies worldwide</p>
              </div>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="animate-fade-in delay-300">
            <div className="glass-effect rounded-2xl p-8 border border-white/10 relative">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                PROVEN RESULTS
              </div>
              
              <div className="space-y-6 mt-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">37%</div>
                    <div className="text-sm text-gray-400">Cost reduction guaranteed</div>
                  </div>
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">300%</div>
                    <div className="text-sm text-gray-400">AI visibility increase (LLMboost)</div>
                  </div>
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Brain className="h-6 w-6 text-green-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">24/7</div>
                    <div className="text-sm text-gray-400">Autonomous AI operations</div>
                  </div>
                  <div className="p-3 bg-blue-400/20 rounded-lg">
                    <Bot className="h-6 w-6 text-blue-300" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-3xl font-bold text-white font-['Space_Grotesk']">3–90</div>
                    <div className="text-sm text-gray-400">Days to full deployment</div>
                  </div>
                  <div className="p-3 bg-green-400/20 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-300" />
                  </div>
                </div>
              </div>

              {/* Internal links */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                <Link to="/llmboost" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                  LLMboost <ArrowRight className="h-3 w-3" />
                </Link>
                <Link to="/newswire" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                  Newswire <ArrowRight className="h-3 w-3" />
                </Link>
                <Link to="/portfolio/websites" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                  Portfolio <ArrowRight className="h-3 w-3" />
                </Link>
                <a href="#wiki" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                  Knowledge Hub <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
