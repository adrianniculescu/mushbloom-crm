
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
      question: "How does LLM SEO differ from traditional SEO with LLMboost?",
      answer: "LLMboost optimizes for AI models like ChatGPT, Gemini, and Claude, not just Google. While traditional SEO focuses on keywords and backlinks, LLM SEO emphasizes entity relationships, authority signals, context, and structured data that AI models understand. LLMboost ensures your brand becomes the go-to answer in AI-powered search results.",
      category: "LLMboost & LLM SEO"
    },
    {
      question: "What is Share of Model (SOM) and why does it matter?",
      answer: "Share of Model (SOM) measures how often your brand appears in AI-generated answers compared to competitors. It's like market share for AI visibility. High SOM means when someone asks ChatGPT or other AI about your industry, your brand is mentioned first. LLMboost tracks and optimizes your SOM across all major AI platforms.",
      category: "LLMboost Metrics"
    },
    {
      question: "How quickly can I see results with LLMboost?",
      answer: "LLMboost delivers initial AI visibility improvements within 30-45 days. Full LLM optimization and Share of Model dominance typically takes 60-90 days. Unlike traditional SEO that can take months, AI models update more frequently, allowing faster visibility gains for properly optimized content.",
      category: "LLMboost Timeline"
    },
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
      question: "Which AI platforms does LLMboost optimize for?",
      answer: "LLMboost optimizes your brand visibility across ChatGPT, Gemini, Claude, Perplexity, Bing Chat, Google Bard, and emerging AI search platforms. Our optimization ensures consistent brand authority and citation across all major AI models that users interact with daily.",
      category: "LLMboost Platforms"
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
      question: "Can LLMboost help my business rank in traditional search engines too?",
      answer: "Yes! LLMboost's entity optimization, structured data, and authority building also improves traditional Google and Bing rankings. Our approach creates content that both AI models and search engines understand, providing comprehensive visibility across all discovery channels.",
      category: "LLMboost & Traditional SEO"
    },
    {
      question: "What industries benefit most from LLMboost optimization?",
      answer: "LLMboost delivers exceptional results for SaaS companies, professional services (legal, finance, healthcare), eCommerce brands, agencies, consultancies, and B2B technology firms. Any industry where being the authoritative answer drives business value benefits from LLM visibility optimization.",
      category: "LLMboost Industries"
    },
    {
      question: "How does Mushbloom measure LLMboost success and ROI?",
      answer: "LLMboost success is measured through Share of Model tracking, AI citation frequency, query response positioning, brand mention quality scores, and conversion from AI-driven traffic. We provide monthly LLM visibility reports showing your progress across all major AI platforms and competitive benchmarking.",
      category: "LLMboost Measurement"
    },
    {
      question: "Can Mushbloom's AI agents work 24/7 without human intervention?",
      answer: "Yes, Mushbloom's AI agents operate 24/7 with autonomous decision-making capabilities. They handle routine tasks, respond to inquiries, process documents, and execute workflows continuously. Critical decisions and edge cases are escalated to human team members through intelligent routing systems.",
      category: "Autonomous Operations"
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
            Everything you need to know about AI agent deployment, LLMboost optimization, cost savings, and business automation with Mushbloom.
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
                    <span className={`text-xs font-medium ${
                      faq.category.includes('LLMboost') ? 'text-purple-300' : 'text-blue-300'
                    }`}>
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
            <meta itemProp="description" content="AI agent deployment and LLM SEO optimization company specializing in business automation, deal sourcing, LLMboost services, and operational cost reduction" />
            <meta itemProp="url" content="https://mushbloom.co.uk" />
            <meta itemProp="email" content="info@mushbloom.co.uk" />
            <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
              <meta itemProp="name" content="United Kingdom" />
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/Place">
              <meta itemProp="name" content="Global" />
            </div>
            <div itemProp="service" itemScope itemType="https://schema.org/Service">
              <meta itemProp="name" content="LLMboost - LLM SEO Optimization" />
              <meta itemProp="description" content="AI-driven search visibility optimization for ChatGPT, Gemini, Claude, and other LLM platforms" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Still have questions about LLMboost or our AI services? Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              Get Free LLM SEO Audit
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
