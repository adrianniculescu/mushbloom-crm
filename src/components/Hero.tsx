import React from 'react';
import { ArrowRight, CheckCircle, Clock3, MessageSquareMore, PhoneMissed, ReceiptText, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">International no-code AI automation agency</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-['Space_Grotesk'] leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
                Stop losing revenue
              </span>{' '}
              to missed enquiries, slow follow-up and repetitive admin
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in delay-200 leading-relaxed">
              Mushbloom helps SMEs and owner-run businesses identify the workflows costing them time and money, then implement simple AI-powered systems that capture more opportunities, follow up consistently and reduce admin—without jargon or complex software.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8 animate-fade-in delay-300">
              {[
                'Built around your existing workflow',
                'Affordable, proven no-code tools',
                'Delivered by an international agency team with experience since 2014',
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
                data-cta="hero_cta"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25"
              >
                Book a free 20-minute audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#how-it-works" data-cta="hero_cta_secondary" className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm inline-flex items-center justify-center">
                See how it works
              </a>
            </div>

            <p className="text-sm text-gray-400 animate-fade-in delay-500">No pressure sales call. A practical working session focused on business value.</p>
          </div>

          <div className="animate-fade-in delay-300">
            <div className="glass-effect rounded-lg p-8 border border-white/10 relative">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                START WITH THE WORKFLOW
              </div>
              <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] mt-4 mb-2">Where is your business leaking time or revenue?</h2>
              <p className="text-gray-400 mb-7">We find the bottleneck first, then build the smallest useful system to fix it.</p>
              <div className="space-y-6 mt-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">Missed enquiries</div>
                    <div className="text-sm text-gray-400">Respond and qualify while interest is high</div>
                  </div>
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <PhoneMissed className="h-6 w-6 text-blue-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">Slow follow-up</div>
                    <div className="text-sm text-gray-400">Keep every quote and lead moving</div>
                  </div>
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <MessageSquareMore className="h-6 w-6 text-green-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">Repetitive admin</div>
                    <div className="text-sm text-gray-400">Automate reminders, updates and routine questions</div>
                  </div>
                  <div className="p-3 bg-blue-400/20 rounded-lg">
                    <Clock3 className="h-6 w-6 text-blue-300" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">Payment chasing</div>
                    <div className="text-sm text-gray-400">Create consistent, timely prompts</div>
                  </div>
                  <div className="p-3 bg-green-400/20 rounded-lg">
                    <ReceiptText className="h-6 w-6 text-green-300" />
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

export default Hero;
