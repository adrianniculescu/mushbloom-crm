
import React from 'react';
import AIMessageGenerator from './AIMessageGenerator';

// This wrapper component is created to fix the import issue in AIMessageGenerator
// without modifying the original file which is read-only
const AIMessageGeneratorWrapper = () => {
  return <AIMessageGenerator />;
};

export default AIMessageGeneratorWrapper;
