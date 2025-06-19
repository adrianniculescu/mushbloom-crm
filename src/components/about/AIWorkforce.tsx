
import React from 'react';
import { Bot, Activity } from 'lucide-react';

const AIWorkforce = () => {
  const aiAgentWorkforce = [
    { name: "ARIA-7", role: "Lead Deal Sourcing Agent", specialty: "Pattern Recognition", active: true },
    { name: "NEXUS-12", role: "Due Diligence Specialist", specialty: "Document Analysis", active: true },
    { name: "QUANTUM-3", role: "Market Research Agent", specialty: "Trend Analysis", active: true },
    { name: "CIPHER-9", role: "Risk Assessment Bot", specialty: "Compliance Monitoring", active: true },
    { name: "APOLLO-15", role: "Pitch Optimization Agent", specialty: "Narrative Enhancement", active: true },
    { name: "VECTOR-21", role: "Portfolio Analytics Bot", specialty: "Performance Tracking", active: true },
    { name: "ATLAS-6", role: "ESG Monitoring Agent", specialty: "Sustainability Metrics", active: true },
    { name: "PHOENIX-18", role: "Automated Reporting Bot", specialty: "Data Visualization", active: true },
    { name: "TITAN-4", role: "Blockchain Analysis Agent", specialty: "On-chain Intelligence", active: true },
    { name: "NOVA-11", role: "Sentiment Analysis Bot", specialty: "Market Psychology", active: true },
    { name: "ECHO-25", role: "Communication Agent", specialty: "Stakeholder Updates", active: true },
    { name: "PRISM-8", role: "Competitive Intelligence Bot", specialty: "Market Positioning", active: true },
    { name: "FORGE-14", role: "Process Automation Agent", specialty: "Workflow Optimization", active: true },
    { name: "PULSE-19", role: "Real-time Monitoring Bot", specialty: "Alert Systems", active: true },
    { name: "SAGE-23", role: "Strategic Planning Agent", specialty: "Scenario Modeling", active: true },
    { name: "FLUX-16", role: "Data Integration Bot", specialty: "System Connectivity", active: true },
    { name: "GUARDIAN-5", role: "Security Monitoring Agent", specialty: "Threat Detection", active: true },
    { name: "CATALYST-20", role: "Innovation Tracking Bot", specialty: "Technology Scouting", active: true },
    { name: "MATRIX-13", role: "Performance Optimization Agent", specialty: "Efficiency Analysis", active: true },
    { name: "ZENITH-22", role: "Strategic Advisory Bot", specialty: "Decision Support", active: true }
  ];

  return (
    <div className="glass-effect rounded-2xl p-8 mb-8">
      <h4 className="text-2xl font-bold text-white mb-6 text-center font-['Space_Grotesk']">
        Our AI Agent Workforce
        <span className="text-green-400 ml-2">[20 Active Agents]</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {aiAgentWorkforce.map((agent, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-400 font-semibold text-sm">{agent.name}</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <Activity className="h-3 w-3 text-green-400" />
              </div>
            </div>
            <p className="text-white text-xs mb-1">{agent.role}</p>
            <p className="text-gray-400 text-xs">{agent.specialty}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold">
          <Bot className="h-5 w-5" />
          20 AI Agents Working 24/7
        </div>
      </div>
    </div>
  );
};

export default AIWorkforce;
