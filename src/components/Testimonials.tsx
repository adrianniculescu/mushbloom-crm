
import React from 'react';
import { Quote, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Managing Partner",
      company: "Vertex Capital Partners",
      image: "/lovable-uploads/df1ead2e-8468-4c3e-8d5e-565e07b0655d.png",
      content: "Mushbloom's AI agents transformed our deal sourcing process. We now identify high-potential startups 3 months before our competitors, leading to a 40% increase in successful investments.",
      metrics: {
        improvement: "40% more deals",
        timeframe: "6 months",
        satisfaction: 5
      },
      keywords: "AI deal sourcing, investment automation, venture capital"
    },
    {
      name: "Marcus Thompson",
      role: "CEO",
      company: "TechScale Solutions",
      image: "/lovable-uploads/c933c4ec-6ac2-46fc-a48b-832c5e48a72d.png",
      content: "The 37% cost reduction guarantee seemed too good to be true, but Mushbloom delivered 42% savings in just 60 days. Our AI workforce handles customer support, lead qualification, and data analysis 24/7.",
      metrics: {
        improvement: "42% cost reduction",
        timeframe: "2 months",
        satisfaction: 5
      },
      keywords: "cost reduction guarantee, AI customer support, business automation"
    },
    {
      name: "Elena Rodriguez",
      role: "Operations Director",
      company: "Global Property Group",
      image: "/lovable-uploads/f13888dd-576b-4864-a689-767c62a85153.png",
      content: "From 3-day implementation to full autonomous operations in 30 days. Mushbloom's AI agents process property valuations, tenant communications, and maintenance requests without human intervention.",
      metrics: {
        improvement: "90% task automation",
        timeframe: "1 month",
        satisfaction: 5
      },
      keywords: "real estate automation, AI property management, autonomous operations"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Client{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from businesses that transformed their operations with Mushbloom's AI agent teams.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              itemScope 
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <div className="flex ml-auto">
                  {[...Array(testimonial.metrics.satisfaction)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-300 leading-relaxed mb-6" itemProp="reviewBody">
                "{testimonial.content}"
              </blockquote>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold" itemProp="author">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-blue-300 text-sm font-medium" itemProp="publisher">{testimonial.company}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-500/10 rounded-lg p-3">
                    <TrendingUp className="h-4 w-4 text-green-400 mx-auto mb-1" />
                    <div className="text-green-300 text-sm font-medium">{testimonial.metrics.improvement}</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3">
                    <Clock className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                    <div className="text-blue-300 text-sm font-medium">{testimonial.metrics.timeframe}</div>
                  </div>
                </div>
              </div>

              {/* Structured data for search engines */}
              <div className="sr-only">
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonial.metrics.satisfaction.toString()} />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <meta itemProp="keywords" content={testimonial.keywords} />
                <meta itemProp="datePublished" content="2025-06-01" />
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating for SEO */}
        <div className="sr-only" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="reviewCount" content="47" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Join 47+ Successful Businesses
            </h3>
            <p className="text-gray-300 mb-6">
              Average client achieves 37% cost reduction and 3x operational efficiency within 90 days.
            </p>
            <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 inline-block">
              Get Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
