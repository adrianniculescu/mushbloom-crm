
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Main logo shape with AI-inspired design */}
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-green-400 animate-pulse-ai opacity-50"></div>
          
          {/* Modern AI symbol */}
          <div className="relative z-10">
            <div className="w-6 h-4 bg-white rounded-t-full relative">
              <div className="absolute top-1 left-1 w-1 h-1 bg-blue-300 rounded-full"></div>
              <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-green-300 rounded-full"></div>
            </div>
            <div className="w-2 h-3 bg-white mx-auto rounded-b-sm"></div>
          </div>
          
          {/* Professional glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-green-400 blur-md opacity-30 -z-10"></div>
        </div>
      </div>
      
      <div className="text-white font-bold text-xl tracking-tight">
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 bg-clip-text text-transparent font-['Space_Grotesk']">
          Mushbloom
        </span>
      </div>
    </div>
  );
};

export default Logo;
