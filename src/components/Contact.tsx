
import React from 'react';
import { Mail, MessageSquare, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Evolve
          </span>
          ?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's build your AI marketing infrastructure and launch you into the future of business growth.
        </p>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Contact</h3>
              <p className="text-gray-300">hello@mushbloom.uk</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Consultation</h3>
              <p className="text-gray-300">Book a strategy session</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rapid Deploy</h3>
              <p className="text-gray-300">48h AI implementation</p>
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 inline-flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Initialize Contact Protocol
        </button>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-400">
          © 2025 Mushbloom. Pioneering the AI marketing revolution.
        </p>
      </div>
    </section>
  );
};

export default Contact;
