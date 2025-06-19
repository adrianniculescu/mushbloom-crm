
import React from 'react';
import { Mail, MessageSquare, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
          Ready to{' '}
          <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Automate Everything
          </span>
          ?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's architect your AI workforce and launch your business into the autonomous future. 
          Pay for performance: 37% operational cost reduction guaranteed.
        </p>

        <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Direct Contact</h3>
              <p className="text-gray-300">info@mushbloom.co.uk</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">AI Consultation</h3>
              <p className="text-gray-300">Free automation assessment</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-400 to-green-400 mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Rapid Deploy</h3>
              <p className="text-gray-300">3-90 day AI implementation</p>
            </div>
          </div>
        </div>

        {/* Performance guarantee CTA */}
        <div className="glass-effect rounded-xl p-6 mb-8 max-w-2xl mx-auto">
          <div className="text-sm text-gray-400 mb-2">PERFORMANCE GUARANTEE</div>
          <div className="text-lg text-white">
            37% operational cost reduction in first 90 days, or we work for free until you get results.
          </div>
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 inline-flex items-center gap-2 shadow-lg">
          <Zap className="h-5 w-5" />
          Deploy Your AI Workforce
        </button>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-400">
          © 2025 Mushbloom. Architecting the autonomous business revolution.
        </p>
      </div>
    </section>
  );
};

export default Contact;
