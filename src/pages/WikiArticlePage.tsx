import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { getArticleBySlug, getRelatedArticles, wikiArticles } from '@/data/wikiArticles';
import { ArrowLeft, Clock, Tag, ArrowRight, ChevronRight } from 'lucide-react';

const WikiArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <Link to="/#wiki" className="text-blue-400 hover:text-blue-300">← Back to Knowledge Hub</Link>
          </div>
        </div>
      </div>
    );
  }

  const related = getRelatedArticles(article);
  const Icon = article.icon;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": { "@type": "Organization", "name": "Mushbloom", "url": "https://mushbloom.co.uk" },
    "publisher": { "@type": "Organization", "name": "Mushbloom", "logo": { "@type": "ImageObject", "url": "https://mushbloom.co.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png" } },
    "datePublished": "2025-01-15",
    "dateModified": "2026-03-08",
    "mainEntityOfPage": `https://mushbloom.co.uk/wiki/${article.slug}`,
    "keywords": article.seoKeywords,
    "articleSection": article.category
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mushbloom.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Knowledge Hub", "item": "https://mushbloom.co.uk/#wiki" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://mushbloom.co.uk/wiki/${article.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{article.metaTitle} | Mushbloom</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.seoKeywords} />
        <link rel="canonical" href={`https://mushbloom.co.uk/wiki/${article.slug}`} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://mushbloom.co.uk/wiki/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <a href="/#wiki" className="hover:text-white transition-colors">Knowledge Hub</a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-blue-400">{article.category}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">{article.category}</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {article.description}
            </p>
          </header>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none mb-16">
            {article.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(l => l.startsWith('- '));
                return (
                  <ul key={i} className="space-y-2 my-6">
                    {items.map((item, j) => (
                      <li key={j} className="text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-gray-300 leading-relaxed mb-6">{paragraph}</p>;
            })}
          </article>

          {/* Keywords */}
          <div className="flex items-center gap-2 flex-wrap mb-12">
            <Tag className="h-4 w-4 text-gray-500" />
            {article.seoKeywords.split(', ').map((keyword, i) => (
              <span key={i} className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">{keyword}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-effect rounded-2xl p-8 text-center mb-16 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk']">
              Ready to implement {article.category.toLowerCase()} AI solutions?
            </h2>
            <p className="text-gray-300 mb-6">Get a free consultation on how AI can transform your {article.category.toLowerCase()} workflows.</p>
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Book a Free Consultation <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => {
                  const RelIcon = rel.icon;
                  return (
                    <Link
                      key={rel.id}
                      to={`/wiki/${rel.slug}`}
                      className="glass-effect rounded-xl p-5 hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                          <RelIcon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs text-blue-400 uppercase">{rel.category}</span>
                      </div>
                      <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors text-sm">
                        {rel.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-2 line-clamp-2">{rel.description}</p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>

      <Contact />
    </div>
  );
};

export default WikiArticlePage;
