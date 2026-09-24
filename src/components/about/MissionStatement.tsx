
import React from 'react';

const MissionStatement = () => {
  return (
    <div className="text-center mb-20" itemScope itemType="https://schema.org/Mission">
      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto" itemProp="description">
        We start with the workflow, not the technology. That means fixing specific business problems such as missed enquiries,
        slow follow-up and repetitive admin with affordable, proven tools and a clear handover.
      </p>
      
      {/* Structured data for mission statement */}
      <div className="sr-only" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="mission" content="Helping SMEs make or save money with simple no-code AI automation" />
        <meta itemProp="specialty" content="Lead handling, follow-up, booking and workflow automation for small businesses" />
      </div>
    </div>
  );
};

export default MissionStatement;
