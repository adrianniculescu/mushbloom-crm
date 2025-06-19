
import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="glass-effect rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
        Why Choose Mushbloom?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-3xl font-bold text-blue-400 mb-2">37%</div>
          <div className="text-gray-300">Average cost reduction</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
          <div className="text-gray-300">Autonomous operations</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-300 mb-2">90</div>
          <div className="text-gray-300">Days to implementation</div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
