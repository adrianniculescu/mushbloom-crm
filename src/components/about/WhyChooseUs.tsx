
import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="glass-effect rounded-2xl p-8 text-center" itemScope itemType="https://schema.org/Service">
      <header>
        <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']" itemProp="name">
          Why Choose Mushbloom AI Automation?
        </h3>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" itemProp="description">
        <div className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
          <div className="text-3xl font-bold text-blue-400 mb-2" itemProp="value">37%</div>
          <div className="text-gray-300" itemProp="unitText">Average operational cost reduction guaranteed</div>
          <meta itemProp="valueReference" content="operational costs" />
        </div>
        
        <div className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
          <div className="text-3xl font-bold text-green-400 mb-2" itemProp="value">24/7</div>
          <div className="text-gray-300" itemProp="unitText">Autonomous AI workforce operations</div>
          <meta itemProp="valueReference" content="operational hours" />
        </div>
        
        <div className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
          <div className="text-3xl font-bold text-blue-300 mb-2">3-90</div>
          <div className="text-gray-300">Days to full AI implementation</div>
          <meta itemProp="value" content="3-90" />
          <meta itemProp="unitText" content="days" />
          <meta itemProp="valueReference" content="implementation timeline" />
        </div>
      </div>

      {/* Additional SEO content for LLM understanding */}
      <div className="mt-8 text-sm text-gray-400 max-w-3xl mx-auto">
        <p>
          <strong>Mushbloom specializes in:</strong> AI agent deployment, business process automation, 
          autonomous workforce implementation, deal sourcing automation, due diligence AI, 
          operational cost optimization, and performance-guaranteed AI solutions.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
