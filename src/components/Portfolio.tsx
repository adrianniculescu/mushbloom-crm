
import React, { useState } from 'react';
import { ExternalLink, Globe, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  name: string;
  url: string;
  description: string;
  category: string;
}

const websites: PortfolioItem[] = [
  { name: 'Realto.ro', url: 'https://realto.ro', description: 'Premium Romanian real estate marketplace with advanced property search and listing management.', category: 'Real Estate' },
  { name: 'Realto.org', url: 'https://realto.org', description: 'International real estate platform connecting global investors with opportunities.', category: 'Real Estate' },
  { name: 'Realtoos.com', url: 'https://realtoos.com', description: 'Modern property solutions hub with smart filtering and agent connectivity.', category: 'Real Estate' },
  { name: 'SignatureProperty.group', url: 'https://signatureproperty.group', description: 'Luxury property group showcasing high-end developments and exclusive listings.', category: 'Real Estate' },
  { name: 'KBC Real Estate', url: 'https://kbcrealestate.ro', description: 'Boutique real estate agency with curated property portfolios in Romania.', category: 'Real Estate' },
  { name: 'Uniplus Radio', url: 'https://uniplusradio.com', description: 'Live radio streaming platform with on-demand content and show scheduling.', category: 'Media' },
  { name: 'Uniplus TV', url: 'https://uniplustv.com', description: 'Digital television network with live broadcasting and video-on-demand.', category: 'Media' },
  { name: 'Adrian Taylor', url: 'https://adriantaylor.org', description: 'Personal brand and thought leadership platform for a prominent industry figure.', category: 'Personal Brand' },
  { name: 'The Globtrotters', url: 'https://theglobtrotters.com', description: 'Travel and lifestyle platform featuring curated global adventures and experiences.', category: 'Travel' },
  { name: 'Codul Copiilor de Succes', url: 'https://codulcopiilordesucces.ro', description: 'Educational platform empowering children through coding and digital literacy.', category: 'Education' },
  { name: 'TMRW.ae', url: 'https://tmrw.ae', description: 'Dubai-based innovation hub building tomorrow\'s digital solutions today.', category: 'Tech' },
  { name: 'Nexus by TMRW', url: 'https://nexus.tmrw.ae', description: 'Enterprise networking platform connecting forward-thinking businesses in the UAE.', category: 'Tech' },
  { name: 'CoinCruncher', url: 'https://coincruncher.com', description: 'Crypto analytics and data intelligence platform for informed trading decisions.', category: 'Blockchain' },
  { name: 'Date with Blockchain', url: 'https://datewithblockchain.com', description: 'Blockchain education and community events bringing Web3 to the mainstream.', category: 'Blockchain' },
  { name: 'Blockchain Week RO', url: 'https://blockchainweek.ro', description: 'Romania\'s premier blockchain conference and networking event.', category: 'Events' },
  { name: 'Fintech Week RO', url: 'https://fintechweek.ro', description: 'Annual fintech summit showcasing innovation in financial technology.', category: 'Events' },
  { name: 'Bitcoin Bucharest', url: 'https://bitcoinbucharest.ro', description: 'Leading Bitcoin and crypto community hub in Romania\'s capital.', category: 'Blockchain' },
  { name: 'WebX Summit', url: 'https://webxsummit.com', description: 'Global web technology summit bringing together developers and innovators.', category: 'Events' },
  { name: 'BlastyBoi', url: 'https://blastyboi.com', description: 'Gaming brand and entertainment platform with an energetic digital presence.', category: 'Gaming' },
  { name: 'Tezaoro', url: 'https://tezaoro.ro', description: 'Premium Romanian brand with elegant design and commerce functionality.', category: 'E-Commerce' },
  { name: 'RaidaPay', url: 'https://raidapay.com', description: 'Next-generation payment processing solution for modern businesses.', category: 'Fintech' },
  { name: 'CCFI Token', url: 'https://ccfitoken.com', description: 'Tokenized financial instrument platform with DeFi integration.', category: 'Blockchain' },
  { name: 'Roksolana AI', url: 'https://roksolana.ai', description: 'AI-powered creative platform leveraging cutting-edge machine learning.', category: 'AI' },
  { name: 'Business Hackers', url: 'https://businesshackers.ro', description: 'Growth hacking and business strategy community for ambitious founders.', category: 'Business' },
  { name: 'Aylin the Gamer', url: 'https://aylinthegamer.com', description: 'Gaming content creator brand with streaming integration and community features.', category: 'Gaming' },
  { name: 'Ekek World', url: 'https://ekek.world', description: 'Immersive digital world experience with creative and interactive elements.', category: 'Creative' },
  { name: 'Sarax.ae', url: 'https://sarax.ae', description: 'UAE-based premium services platform with sleek, modern branding.', category: 'Business' },
];

const categories = ['All', ...Array.from(new Set(websites.map(w => w.category)))];

// Sites where thum.io fails — use Google's cache instead
const fallbackScreenshotUrl = (url: string) => 
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=640&h=400`;

const primaryScreenshotUrl = (url: string) =>
  `https://image.thum.io/get/width/640/crop/400/noanimate/${url}`;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? websites : websites.filter(w => w.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[hsl(var(--ai-blue,211,100%,40%))] to-[hsl(var(--ai-green,150,100%,40%))] text-white mb-4 opacity-90">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Built With <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Precision</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Websites and platforms we've designed, developed, and launched across industries worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-white/10 border-white/30 text-white'
                  : 'border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((site, i) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/5"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Screenshot Preview */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={primaryScreenshotUrl(site.url)}
                  alt={`${site.name} website preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    // Try WordPress mshots fallback first
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = '1';
                      target.src = fallbackScreenshotUrl(site.url);
                      return;
                    }
                    // Final fallback: show icon
                    target.style.display = 'none';
                    target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    const fb = document.createElement('div');
                    fb.className = 'flex flex-col items-center gap-2 text-gray-600';
                    fb.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span class="text-xs">${site.name}</span>`;
                    target.parentElement!.appendChild(fb);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/50 text-gray-300 backdrop-blur-sm border border-white/10">
                  {site.category}
                </span>

                {/* External link icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-base group-hover:text-blue-300 transition-colors">
                    {site.name}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {site.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
