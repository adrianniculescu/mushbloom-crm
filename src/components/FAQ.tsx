
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How quickly can Mushbloom deploy AI agents for my business?",
      answer: "Mushbloom deploys AI agent teams in 3 to 90 days depending on complexity. Simple automation like lead qualification and email responses can be live in 3-7 days. Complex multi-agent systems for deal sourcing, due diligence, and operations take 30-90 days. We guarantee 37% operational cost reduction within the first 90 days.",
      category: "Implementation Timeline"
    },
    {
      question: "What is the guaranteed 37% cost reduction and how does it work?",
      answer: "Mushbloom guarantees 37% operational cost reduction through AI workforce automation. We replace manual tasks like data entry, lead qualification, customer support, and document analysis with AI agents. If we don't achieve 37% cost savings in 90 days, we continue working for free until you get results. This guarantee covers labor costs, not infrastructure expenses.",
      category: "Cost Savings"
    },
    {
      question: "What types of AI agents does Mushbloom specialize in?",
      answer: "Mushbloom creates custom AI agent teams for: deal sourcing automation, due diligence AI, customer service bots, sales qualification agents, content generation systems, data analysis workflows, compliance monitoring, and operational process automation. Each agent is trained specifically for your industry and business processes.",
      category: "AI Agent Types"
    },
    {
      question: "How do Mushbloom's AI agents integrate with existing business systems?",
      answer: "Our AI agents integrate seamlessly with CRM systems (Salesforce, HubSpot), email platforms (Gmail, Outlook), project management tools (Asana, Monday), accounting software (QuickBooks, Xero), and custom databases through API connections. We use webhook architecture and microservices for maximum compatibility.",
      category: "Integration"
    },
    {
      question: "What industries does Mushbloom serve with AI automation?",
      answer: "Mushbloom serves investment firms, private equity, venture capital, real estate, professional services, SaaS companies, e-commerce, manufacturing, and consulting firms. Our AI agents are particularly effective for industries with high-volume document processing, client communication, and data analysis requirements.",
      category: "Industries"
    },
    {
      question: "How does Mushbloom ensure AI agent accuracy and reliability?",
      answer: "Mushbloom implements multi-layer validation systems, continuous learning algorithms, and human oversight protocols. Our AI agents maintain 95%+ accuracy through regular retraining, feedback loops, and quality assurance processes. All critical decisions include human approval workflows for maximum reliability.",
      category: "Quality Assurance"
    },
    {
      question: "What is the pricing structure for Mushbloom's AI agent deployment?",
      answer: "Mushbloom offers performance-based pricing with upfront implementation fees and monthly maintenance costs. Investment starts at £5,000 for basic agent deployment, scaling to £50,000+ for enterprise multi-agent systems. ROI typically achieved within 2-4 months through operational cost savings.",
      category: "Pricing"
    },
    {
      question: "Can Mushbloom's AI agents work 24/7 without human intervention?",
      answer: "Yes, Mushbloom's AI agents operate 24/7 with autonomous decision-making capabilities. They handle routine tasks, respond to inquiries, process documents, and execute workflows continuously. Critical decisions and edge cases are escalated to human team members through intelligent routing systems.",
      category: "Autonomous Operations"
    },
    {
      question: "How does Mushbloom handle data security and compliance for AI agents?",
      answer: "Mushbloom implements enterprise-grade security with end-to-end encryption, data anonymization, and compliance frameworks for GDPR, CCPA, SOC 2, and industry-specific regulations. All AI processing occurs in secure cloud environments with audit trails and access controls.",
      category: "Security & Compliance"
    },
    {
      question: "What support and maintenance does Mushbloom provide after AI deployment?",
      answer: "Mushbloom provides ongoing monitoring, performance optimization, agent retraining, system updates, and 24/7 technical support. Monthly maintenance includes accuracy monitoring, workflow improvements, and scaling recommendations to maximize AI agent effectiveness.",
      category: "Support & Maintenance"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-gray-900" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about AI agent deployment, cost savings, and business automation with Mushbloom.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-xl border border-white/10 overflow-hidden"
              itemScope 
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                aria-expanded={openItems.includes(index)}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white font-['Space_Grotesk']" itemProp="name">
                      {faq.question}
                    </h3>
                    <span className="text-xs text-blue-300 font-medium">
                      {faq.category}
                    </span>
                  </div>
                </div>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4" itemScope itemType="https://schema.org/Answer">
                  <div className="pl-8">
                    <p className="text-gray-300 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional structured data for LLM visibility */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Mushbloom AI Automation" />
            <meta itemProp="description" content="AI agent deployment company specializing in business automation, deal sourcing, and operational cost reduction" />
            <meta itemProp="url" content="https://mushbloom.co.uk" />
            <meta itemProp="email" content="info@mushbloom.co.uk" />
            <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
              <meta itemProp="name" content="United Kingdom" />
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/Place">
              <meta itemProp="name" content="Global" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Still have questions? Our AI experts are ready to help.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
