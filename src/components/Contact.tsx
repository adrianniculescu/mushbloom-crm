
import React from 'react';
import { Mail, MessageSquare, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative" itemScope itemType="https://schema.org/ContactPage">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Automate Everything
            </span>
            ?
          </h2>
        </header>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's architect your AI workforce and launch your business into the autonomous future. 
          Pay for performance: <strong>37% operational cost reduction guaranteed</strong>.
        </p>

        <div className="glass-effect rounded-2xl p-8 border border-white/10 mb-8" itemScope itemType="https://schema.org/Organization">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center" itemScope itemType="https://schema.org/ContactPoint">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">Direct Contact</h3>
              <a href="mailto:office@mushbloom.co.uk" className="text-gray-300 hover:text-blue-400 transition-colors" itemProp="email">office@mushbloom.co.uk</a>
              <meta itemProp="contactType" content="customer service" />
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
              <p className="text-gray-300"><strong>3 to 90 days</strong> AI implementation</p>
            </div>
          </div>
        </div>

        {/* Performance guarantee CTA with structured data */}
        <div className="glass-effect rounded-xl p-6 mb-8 max-w-2xl mx-auto" itemScope itemType="https://schema.org/Offer">
          <div className="text-sm text-gray-400 mb-2">PERFORMANCE GUARANTEE</div>
          <div className="text-lg text-white" itemProp="description">
            <strong>37% operational cost reduction</strong> in first 90 days, or we work for free until you get results.
          </div>
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="priceValidUntil" content="2026-12-31" />
        </div>

        <a 
          href="https://tidycal.com/adrianniculescu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 inline-flex items-center gap-2 shadow-lg"
          itemScope 
          itemType="https://schema.org/Action"
        >
          <Zap className="h-5 w-5" />
          <span itemProp="name">Deploy Your AI Workforce</span>
        </a>
      </div>
      
      {/* Footer with structured data */}
      <footer className="mt-20 pt-8 border-t border-white/10 text-center" itemScope itemType="https://schema.org/Organization">
        <p className="text-gray-400" itemProp="copyrightYear">
          © 2025 <span itemProp="name">Mushbloom</span>. Architecting the autonomous business revolution.
        </p>
        <meta itemProp="description" content="AI-powered business automation and workforce solutions" />
        <meta itemProp="foundingDate" content="2024" />
        <meta itemProp="industry" content="Artificial Intelligence" />
      </footer>
    </section>
  );
};

export default Contact;
