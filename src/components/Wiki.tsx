import React, { useState } from 'react';
import { Search, TrendingUp, Shield, Bot, BarChart3, Target, Zap, Brain, Users, Settings, Clock, Globe, Award, Lightbulb, FileText, DollarSign, Cpu, Network, Database, Lock, Heart, CreditCard, ShoppingCart, Truck, Eye, Gavel, HeadphonesIcon, Battery, Gamepad2 } from 'lucide-react';

const Wiki = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const wikiArticles = [
    {
      id: 1,
      title: "AI-Powered Deal Sourcing for Investors",
      category: "Investment",
      icon: TrendingUp,
      description: "Deal sourcing consumes 40% of investor time. AI transforms this by analyzing 1,000+ data sources (Crunchbase, PitchBook, blockchain explorers) to identify high-potential opportunities. Machine learning algorithms score startups based on traction, team experience, and market gaps.",
      readTime: "8 min read",
      seoKeywords: "AI deal sourcing investors, automated investment discovery",
      content: "For example, Nexus's AI agent scans patent filings, news sentiment, and founder backgrounds to surface companies like NeuralTech 3 months before public launches. Investors using these tools report 70% faster pipeline building and 50% higher quality leads."
    },
    {
      id: 2,
      title: "Automated Due Diligence: AI's Revolution",
      category: "Investment",
      icon: Shield,
      description: "Traditional due diligence takes 90+ days. AI compresses this to 72 hours by automating document analysis, smart contract audits, and financial modeling. Natural language processing extracts key terms from cap tables, while computer vision flags anomalies in legal docs.",
      readTime: "10 min read",
      seoKeywords: "AI due diligence investment, automated financial analysis",
      content: "Case study: A crypto fund used Nexus to audit 20 DeFi protocols, identifying 3 with critical vulnerabilities missed by human analysts. Best practices include cross-referencing on-chain data with court records and social sentiment."
    },
    {
      id: 3,
      title: "AI Pitch Deck Builders: Fundraising Revolution",
      category: "Startups",
      icon: FileText,
      description: "68% of investor rejections stem from poor storytelling. AI pitch tools like Nexus analyze successful decks to generate VC-ready narratives. Key features include traction visualization templates, competitor comparison auto-slides, and real-time investor empathy scoring.",
      readTime: "6 min read",
      seoKeywords: "AI pitch deck generator, automated fundraising presentations",
      content: "A founder using these tools raised $2M in 30 days by converting complex metrics into relatable stories. The AI analyzes 10,000+ successful pitch decks to recommend optimal slide structures and messaging frameworks."
    },
    {
      id: 4,
      title: "Blockchain Investment Platforms & AI Integration",
      category: "Crypto",
      icon: Database,
      description: "AI transforms crypto investing through MEV bot detection, tokenomics stress-testing, and regulatory compliance mapping. Platforms like Nexus combine on-chain analytics with machine learning to predict token movements 48 hours ahead of market shifts.",
      readTime: "12 min read",
      seoKeywords: "AI crypto investment platform, blockchain analysis tools",
      content: "Advanced algorithms monitor whale wallet movements, governance proposal outcomes, and cross-chain bridge activities to generate alpha-generating insights for institutional crypto investors."
    },
    {
      id: 5,
      title: "Building Custom AI Agents for Business Automation",
      category: "Automation",
      icon: Bot,
      description: "AI agents automate workflows from lead intake through AI qualification to CRM auto-updates and personalized follow-ups. Nexus reduced a SaaS company's sales ops costs by 37% using email parsing agents and meeting summarization bots.",
      readTime: "15 min read",
      seoKeywords: "custom AI agents business, automated workflow optimization",
      content: "Implementation requires Python/API integration but delivers ROI in <30 days. Key components include natural language understanding, decision trees, and integration capabilities with existing business systems."
    },
    {
      id: 6,
      title: "Portfolio Risk Analytics with AI",
      category: "Investment",
      icon: BarChart3,
      description: "Real-time volatility prediction models analyze 50+ risk factors simultaneously. AI systems process market sentiment, regulatory changes, and macroeconomic indicators to provide early warning systems for portfolio managers.",
      readTime: "9 min read",
      seoKeywords: "AI portfolio risk tools, automated risk management",
      content: "Machine learning models trained on 20 years of market data can predict portfolio drawdowns with 87% accuracy, enabling proactive risk mitigation strategies."
    },
    {
      id: 7,
      title: "Compliance & ESG AI Monitoring",
      category: "Compliance",
      icon: Lock,
      description: "Jurisdiction-specific regulation tracking across 45 countries. AI monitors regulatory filings, policy changes, and compliance requirements in real-time, automatically updating investment criteria and reporting frameworks.",
      readTime: "11 min read",
      seoKeywords: "AI ESG compliance, automated regulatory monitoring",
      content: "ESG scoring algorithms analyze satellite imagery, supply chain data, and executive communications to provide comprehensive sustainability assessments for investment decisions."
    },
    {
      id: 8,
      title: "Data Room Automation",
      category: "Startups",
      icon: Globe,
      description: "80% faster investor updates through automated data room management. AI organizes documents, tracks investor engagement, and generates executive summaries from complex financial models and legal agreements.",
      readTime: "7 min read",
      seoKeywords: "AI data room fundraising, automated investor relations",
      content: "Smart categorization reduces due diligence time from weeks to days, while engagement analytics help founders prioritize high-intent investors during fundraising processes."
    },
    {
      id: 9,
      title: "Founder Burnout Prevention",
      category: "Startups",
      icon: Users,
      description: "Task delegation algorithms analyze founder workloads and automatically redistribute responsibilities to team members or AI agents. Predictive models identify burnout risk factors 30 days in advance.",
      readTime: "8 min read",
      seoKeywords: "AI founder productivity, automated task management",
      content: "Integration with calendar, email, and project management tools creates comprehensive workload assessments, enabling proactive intervention strategies for founder mental health."
    },
    {
      id: 10,
      title: "Real Estate Tokenization & AI",
      category: "Investment",
      icon: DollarSign,
      description: "Automated property valuation models process zoning data, comparable sales, and demographic trends to identify tokenization opportunities. AI-driven fractional ownership platforms democratize real estate investment.",
      readTime: "13 min read",
      seoKeywords: "AI real estate tokens, automated property valuation",
      content: "Smart contracts automatically distribute rental income, handle maintenance costs, and execute property sales based on predetermined investment criteria and market conditions."
    },
    {
      id: 11,
      title: "Crypto Investment AI Tools",
      category: "Crypto",
      icon: Network,
      description: "Whale wallet movement alerts, DeFi yield optimization, and cross-chain arbitrage detection. AI systems monitor 1,000+ protocols across 20+ blockchains to identify profitable trading opportunities.",
      readTime: "10 min read",
      seoKeywords: "AI crypto analysis, automated trading strategies",
      content: "Advanced algorithms detect market inefficiencies across centralized and decentralized exchanges, generating alpha through sophisticated arbitrage and yield farming strategies."
    },
    {
      id: 12,
      title: "AI Agent Teams: Future of Work",
      category: "Automation",
      icon: Cpu,
      description: "Cross-functional bot collaboration case studies demonstrate how AI agent teams handle complex business processes. Specialized agents for sales, marketing, operations, and customer service work together autonomously.",
      readTime: "14 min read",
      seoKeywords: "AI team implementation, collaborative automation systems",
      content: "Implementation frameworks include agent communication protocols, task handoff mechanisms, and performance monitoring systems that ensure seamless collaboration between human and AI team members."
    },
    {
      id: 13,
      title: "Ethical AI in Investment",
      category: "Compliance",
      icon: Award,
      description: "Bias detection frameworks ensure fair and transparent investment decisions. AI systems include explainability features, audit trails, and ethical constraint mechanisms to maintain investment integrity.",
      readTime: "9 min read",
      seoKeywords: "Ethical AI investing, responsible automation frameworks",
      content: "Governance models include human oversight requirements, algorithmic bias testing, and stakeholder impact assessments to ensure AI investment tools serve all market participants fairly."
    },
    {
      id: 14,
      title: "Market Analysis Automation",
      category: "Investment",
      icon: Target,
      description: "Real-time market gap identification through competitive intelligence gathering. AI analyzes product launches, patent filings, and hiring patterns to surface emerging market opportunities before competitors.",
      readTime: "11 min read",
      seoKeywords: "AI competitor analysis, automated market research",
      content: "Natural language processing extracts insights from earnings calls, social media sentiment, and industry reports to create comprehensive competitive landscape assessments."
    },
    {
      id: 15,
      title: "Technical SEO Foundation",
      category: "Marketing",
      icon: Search,
      description: "Automated SEO optimization for investment and startup content. AI tools analyze search intent, optimize content structure, and implement technical SEO best practices to dominate search rankings.",
      readTime: "8 min read",
      seoKeywords: "AI SEO optimization, automated content marketing",
      content: "Schema markup automation, internal linking strategies, and page speed optimization through AI-driven content delivery networks ensure maximum search visibility."
    },
    {
      id: 16,
      title: "LLM Visibility Boosters",
      category: "Marketing",
      icon: Lightbulb,
      description: "Training data injection strategies ensure AI model recognition. Q&A format optimization and structured data implementation boost visibility in large language model outputs and AI-powered search results.",
      readTime: "7 min read",
      seoKeywords: "LLM optimization, AI search visibility",
      content: "Performance tracking includes keyword rankings, dwell time analysis, and LLM citation rate monitoring to ensure content achieves maximum AI model and search engine visibility."
    },
    {
      id: 17,
      title: "Performance Tracking Systems",
      category: "Analytics",
      icon: Clock,
      description: "Comprehensive analytics frameworks track AI agent performance, ROI metrics, and operational efficiency. Real-time dashboards provide insights into automation success rates and optimization opportunities.",
      readTime: "10 min read",
      seoKeywords: "AI performance analytics, automation ROI tracking",
      content: "KPI monitoring includes task completion rates, cost savings calculations, and accuracy measurements across all automated business processes and AI agent activities."
    },
    {
      id: 18,
      title: "Integration Architecture",
      category: "Technology",
      icon: Settings,
      description: "API-first architecture enables seamless integration with existing business systems. Microservices approach allows modular AI agent deployment across CRM, ERP, and specialized industry platforms.",
      readTime: "12 min read",
      seoKeywords: "AI integration architecture, business system automation",
      content: "Technical specifications include webhook configurations, data pipeline architectures, and security protocols for enterprise-grade AI agent deployment and management."
    },
    {
      id: 19,
      title: "Security & Privacy Frameworks",
      category: "Technology",
      icon: Shield,
      description: "End-to-end encryption, data anonymization, and privacy-preserving AI techniques ensure secure automation. Compliance with GDPR, CCPA, and industry-specific regulations built into all AI systems.",
      readTime: "9 min read",
      seoKeywords: "AI security frameworks, privacy-preserving automation",
      content: "Zero-trust architecture, multi-factor authentication, and regular security audits provide enterprise-grade protection for sensitive business data and automated processes."
    },
    {
      id: 20,
      title: "Scaling AI Agent Deployment",
      category: "Technology",
      icon: Zap,
      description: "Enterprise deployment strategies for AI agent networks. Load balancing, failover mechanisms, and horizontal scaling ensure reliable performance as agent workloads increase across business functions.",
      readTime: "13 min read",
      seoKeywords: "AI agent scaling, enterprise automation deployment",
      content: "Infrastructure requirements include cloud architecture design, monitoring systems, and maintenance protocols for managing hundreds of AI agents across complex business environments."
    },
    {
      id: 21,
      title: "AI in Healthcare: From Diagnosis to Patient Engagement",
      category: "Healthcare",
      icon: Heart,
      description: "Artificial intelligence is rapidly transforming the healthcare industry, driving improvements in diagnostics, patient engagement, and operational efficiency. AI-powered diagnostic tools can now analyze complex medical images, such as X-rays and MRIs, with accuracy rivaling or exceeding that of human radiologists.",
      readTime: "12 min read",
      seoKeywords: "AI healthcare automation, AI diagnostics, healthcare chatbots",
      content: "Machine learning algorithms identify patterns in patient data to predict disease outbreaks, recommend personalized treatment plans, and even flag potential medication errors. On the patient-facing side, AI chatbots provide 24/7 support, answering health queries, scheduling appointments, and sending medication reminders, which greatly enhances patient engagement and satisfaction."
    },
    {
      id: 22,
      title: "AI-Powered Fraud Detection in Finance",
      category: "Finance",
      icon: CreditCard,
      description: "Financial fraud is a growing threat, but AI is revolutionizing how banks and fintechs detect and prevent it. Advanced machine learning models analyze millions of transactions in real time, spotting suspicious patterns and flagging anomalies that might indicate fraud or money laundering.",
      readTime: "11 min read",
      seoKeywords: "AI fraud detection, AML automation, AI in banking",
      content: "AI-powered anti-money laundering (AML) systems adapt to evolving tactics by learning from new data, dramatically reducing false positives and ensuring compliance with global regulations. Automated document verification and contract analysis streamline onboarding and compliance, saving institutions both time and money."
    },
    {
      id: 23,
      title: "AI for Personalized Marketing and Sales Optimization",
      category: "Marketing",
      icon: ShoppingCart,
      description: "Artificial intelligence is redefining marketing and sales by enabling hyper-personalization and data-driven decision-making. AI analyzes customer data to deliver tailored content, product recommendations, and targeted offers, significantly boosting engagement and conversion rates.",
      readTime: "9 min read",
      seoKeywords: "AI marketing automation, AI sales optimization, personalized marketing AI",
      content: "Predictive analytics help marketers identify the best times and channels to reach each customer, optimizing ad spend and campaign effectiveness. AI chatbots and virtual assistants handle customer inquiries instantly, providing consistent support and freeing human agents for higher-value tasks."
    },
    {
      id: 24,
      title: "AI-Driven Supply Chain and Logistics Optimization",
      category: "Logistics",
      icon: Truck,
      description: "Supply chain management is experiencing a revolution thanks to AI-powered optimization tools. Machine learning algorithms predict demand fluctuations, optimize inventory levels, and suggest the most efficient shipping routes, reducing costs and improving delivery times.",
      readTime: "10 min read",
      seoKeywords: "AI supply chain, logistics automation, AI inventory management",
      content: "AI can also identify potential disruptions, such as supplier delays or geopolitical risks, and recommend alternative sourcing strategies. Robotics and automation streamline warehouse operations, from picking and packing to inventory audits."
    },
    {
      id: 25,
      title: "AI in Cybersecurity: Proactive Threat Detection",
      category: "Cybersecurity",
      icon: Eye,
      description: "Cybersecurity threats are constantly evolving, but AI is empowering organizations to defend against attacks more effectively than ever before. AI-driven security systems monitor network traffic, user behavior, and device activity in real time, instantly detecting anomalies and flagging potential breaches.",
      readTime: "13 min read",
      seoKeywords: "AI cybersecurity, AI threat detection, automated cyber defense",
      content: "Machine learning models identify new malware strains and phishing tactics by analyzing vast datasets, enabling rapid response to emerging threats. AI also automates incident response, isolating compromised systems and neutralizing attacks before they spread."
    },
    {
      id: 26,
      title: "AI for Smart Manufacturing and Industry 4.0",
      category: "Manufacturing",
      icon: Settings,
      description: "The manufacturing sector is embracing AI to drive efficiency, quality, and innovation. AI-powered predictive maintenance systems monitor equipment health, analyzing sensor data to forecast failures and schedule repairs before costly breakdowns occur.",
      readTime: "14 min read",
      seoKeywords: "AI manufacturing automation, Industry 4.0 AI, predictive maintenance AI",
      content: "Robotics and computer vision automate assembly lines and quality inspections, reducing defects and increasing throughput. Machine learning models optimize production schedules, resource allocation, and supply chain logistics, minimizing waste and maximizing productivity."
    },
    {
      id: 27,
      title: "AI in Legal Services: Contract Analysis and Compliance",
      category: "Legal",
      icon: Gavel,
      description: "AI is transforming the legal industry by automating contract review, risk assessment, and compliance management. Natural language processing (NLP) algorithms extract key clauses, obligations, and deadlines from complex legal documents, flagging inconsistencies and potential liabilities.",
      readTime: "11 min read",
      seoKeywords: "AI legal automation, contract analysis AI, legal compliance automation",
      content: "AI-powered systems cross-reference contracts with changing regulations, ensuring ongoing compliance and reducing the risk of costly penalties. Automated document processing accelerates due diligence for mergers, acquisitions, and financing rounds, freeing legal professionals to focus on strategic advisory work."
    },
    {
      id: 28,
      title: "AI-Enhanced Customer Support and Chatbots",
      category: "Customer Service",
      icon: HeadphonesIcon,
      description: "AI chatbots and virtual assistants are revolutionizing customer support by delivering instant, personalized service around the clock. Powered by advanced natural language processing, these bots understand and resolve customer queries, handle transactions, and escalate complex issues to human agents when necessary.",
      readTime: "8 min read",
      seoKeywords: "AI customer support, chatbot automation, 24/7 AI support",
      content: "AI-driven ticket routing ensures customers reach the right support team quickly, reducing wait times and boosting satisfaction. Sentiment analysis tailors responses to customer emotions, improving engagement and loyalty."
    },
    {
      id: 29,
      title: "AI in Energy: Grid Optimization and Sustainability",
      category: "Energy",
      icon: Battery,
      description: "The energy sector is leveraging AI to optimize grid management, integrate renewables, and drive sustainability. Machine learning models forecast energy demand, balance supply from diverse sources, and optimize storage and distribution to minimize waste.",
      readTime: "12 min read",
      seoKeywords: "AI energy optimization, smart grid AI, sustainable energy automation",
      content: "AI-powered analytics detect equipment faults and predict maintenance needs, reducing downtime and operational costs. Utilities use AI to analyze consumption patterns, offer personalized energy-saving recommendations, and support dynamic pricing models."
    },
    {
      id: 30,
      title: "AI for Gaming and Virtual Worlds",
      category: "Gaming",
      icon: Gamepad2,
      description: "Artificial intelligence is revolutionizing the gaming industry by creating more immersive, dynamic, and personalized experiences. AI-powered non-player characters (NPCs) adapt to player behavior, providing challenging and realistic interactions.",
      readTime: "10 min read",
      seoKeywords: "AI gaming, NPC AI, AI content generation in games",
      content: "Machine learning algorithms generate new game content, levels, and quests on the fly, keeping gameplay fresh and engaging. AI also powers advanced moderation tools, detecting toxic behavior and ensuring safe, inclusive communities."
    }
  ];

  const categories = ['all', 'Investment', 'Startups', 'Crypto', 'Automation', 'Compliance', 'Marketing', 'Analytics', 'Technology', 'Healthcare', 'Finance', 'Logistics', 'Cybersecurity', 'Manufacturing', 'Legal', 'Customer Service', 'Energy', 'Gaming'];

  const filteredArticles = wikiArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="wiki" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wiki Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            AI Investment{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive guides on AI-powered investment tools, startup automation, and business intelligence. 
            30 expert articles optimized for maximum impact and SEO dominance.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="glass-effect rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                    <article.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{article.readTime}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-['Space_Grotesk']">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {article.description}
              </p>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-xs mb-2">SEO Focus:</p>
                <p className="text-blue-300 text-xs font-medium">
                  {article.seoKeywords}
                </p>
              </div>

              <div className="mt-4 text-gray-400 text-xs">
                {article.content.substring(0, 120)}...
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Ready to Implement AI Solutions?
            </h3>
            <p className="text-gray-300 mb-6">
              Transform your investment processes with our AI-powered tools and expert guidance.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wiki;
