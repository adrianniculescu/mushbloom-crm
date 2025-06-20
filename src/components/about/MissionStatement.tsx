
import React from 'react';

const MissionStatement = () => {
  return (
    <div className="text-center mb-20" itemScope itemType="https://schema.org/Mission">
      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto" itemProp="description">
        We create custom AI agent teams that automate growth, service, and operations—scaling your business while you sleep. 
        We don't just implement AI—we architect autonomous business systems enhanced, and automated with AI infrastructure.
      </p>
      
      {/* Structured data for mission statement */}
      <div className="sr-only" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="mission" content="Creating custom AI agent teams for business automation and autonomous operations" />
        <meta itemProp="specialty" content="AI workforce deployment, business process automation, autonomous systems" />
      </div>
    </div>
  );
};

export default MissionStatement;
