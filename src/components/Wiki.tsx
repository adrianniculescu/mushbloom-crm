import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { wikiArticles } from '@/data/wikiArticles';

const Wiki = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(wikiArticles.map(a => a.category)))];

  const filteredArticles = wikiArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="wiki" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            AI Investment{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive guides on AI-powered investment tools, startup automation, and business intelligence. 
            30 expert articles optimized for maximum impact.
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

        {/* Articles Grid — now links to individual pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/wiki/${article.slug}`}
              className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 block"
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

              <div className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read full article →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Ready to Implement AI Solutions?
            </h3>
            <p className="text-gray-300 mb-6">
              Transform your business with our AI-powered tools and expert guidance.
            </p>
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 inline-block"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wiki;
