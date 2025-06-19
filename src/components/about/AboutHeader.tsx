
import React from 'react';

const AboutHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
        About{' '}
        <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
          Mushbloom
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
        We're not just another marketing agency. We're architects of the autonomous business revolution, 
        building intelligent AI workforces that transform how companies operate, grow, and succeed.
      </p>
    </div>
  );
};

export default AboutHeader;
