import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { getArticleBySlug, getRelatedArticles, wikiArticles } from '@/data/wikiArticles';
import { ArrowLeft, Clock, Tag, ArrowRight, ChevronRight, FileText, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface DbPost {
  id: string; slug: string; title: string; category: string | null;
  excerpt: string | null; content: string; cover_image_url: string | null;
  read_time: string | null; seo_keywords: string | null;
  meta_title: string | null; meta_description: string | null;
  published_at: string | null; updated_at: string;
}

const WikiArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const staticArticle = slug ? getArticleBySlug(slug) : undefined;
  const [dbPost, setDbPost] = useState<DbPost | null>(null);
  const [loadingDb, setLoadingDb] = useState(!staticArticle);

  useEffect(() => {
    if (staticArticle || !slug) { setLoadingDb(false); return; }
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from('cms_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
      if (!cancelled) {
        setDbPost((data as DbPost) || null);
        setLoadingDb(false);
      }
    })();
    return () => { cancelled = true; };
  }, [slug, staticArticle]);

  if (loadingDb) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
        </div>
      </div>
    );
  }

  // DB post path (no static match)
  if (!staticArticle && dbPost) {
    const articleUrl = `https://mushbloom.uk/wiki/${dbPost.slug}`;
    const metaTitle = dbPost.meta_title || dbPost.title;
    const metaDescription = dbPost.meta_description || dbPost.excerpt || dbPost.title;
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": dbPost.title,
      "description": metaDescription,
      "image": dbPost.cover_image_url || "https://mushbloom.uk/og-image.jpg",
      "author": { "@type": "Organization", "name": "Mushbloom", "url": "https://mushbloom.uk" },
      "publisher": { "@type": "Organization", "name": "Mushbloom", "logo": { "@type": "ImageObject", "url": "https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png" } },
      "datePublished": dbPost.published_at || dbPost.updated_at,
      "dateModified": dbPost.updated_at,
      "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
      "url": articleUrl,
      "keywords": dbPost.seo_keywords || undefined,
      "articleSection": dbPost.category || undefined,
      "inLanguage": "en-GB",
      "isAccessibleForFree": true,
    };
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Helmet>
          <title>{metaTitle} | Mushbloom</title>
          <meta name="description" content={metaDescription} />
          {dbPost.seo_keywords && <meta name="keywords" content={dbPost.seo_keywords} />}
          <link rel="canonical" href={articleUrl} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={articleUrl} />
          <meta property="og:image" content={dbPost.cover_image_url || "https://mushbloom.uk/og-image.jpg"} />
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        </Helmet>
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/wiki" className="hover:text-white">Knowledge Hub</Link>
              {dbPost.category && (
                <>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-blue-400">{dbPost.category}</span>
                </>
              )}
            </nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  {dbPost.category && <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">{dbPost.category}</span>}
                  {dbPost.read_time && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Clock className="h-3 w-3" /><span>{dbPost.read_time}</span>
                    </div>
                  )}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-tight">{dbPost.title}</h1>
              {dbPost.excerpt && <p className="text-xl text-gray-300 leading-relaxed">{dbPost.excerpt}</p>}
              {dbPost.cover_image_url && (
                <img src={dbPost.cover_image_url} alt={dbPost.title} className="w-full rounded-2xl mt-8 border border-white/10" />
              )}
            </header>
            <article className="prose prose-invert prose-lg max-w-none mb-16">
              {dbPost.content.split('\n\n').map((paragraph, i) => {
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
                if (paragraph.startsWith('# ')) return <h2 key={i} className="text-3xl font-bold text-white mt-10 mb-4 font-['Space_Grotesk']">{paragraph.replace(/^#\s+/, '')}</h2>;
                if (paragraph.startsWith('## ')) return <h3 key={i} className="text-2xl font-bold text-white mt-8 mb-3 font-['Space_Grotesk']">{paragraph.replace(/^##\s+/, '')}</h3>;
                return <p key={i} className="text-gray-300 leading-relaxed mb-6 whitespace-pre-wrap">{paragraph}</p>;
              })}
            </article>
            {dbPost.seo_keywords && (
              <div className="flex items-center gap-2 flex-wrap mb-12">
                <Tag className="h-4 w-4 text-gray-500" />
                {dbPost.seo_keywords.split(',').map((k, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">{k.trim()}</span>
                ))}
              </div>
            )}
            <div className="glass-effect rounded-2xl p-8 text-center mb-16 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk']">Want to talk strategy?</h2>
              <p className="text-gray-300 mb-6">Get a free consultation on AI search visibility, automation and beyond.</p>
              <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2">
                Book a Free Consultation <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </main>
        <Contact />
      </div>
    );
  }

  const article = staticArticle;

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

  const wordCount = article.content.split(/\s+/).filter(Boolean).length;
  const articleUrl = `https://mushbloom.uk/wiki/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.metaDescription,
    "image": "https://mushbloom.uk/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "Mushbloom",
      "url": "https://mushbloom.uk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mushbloom",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png"
      }
    },
    "datePublished": "2025-01-15T09:00:00+00:00",
    "dateModified": "2026-04-21T09:00:00+00:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "url": articleUrl,
    "keywords": article.seoKeywords,
    "articleSection": article.category,
    "wordCount": wordCount,
    "inLanguage": "en-GB",
    "isAccessibleForFree": true
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mushbloom.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Knowledge Hub", "item": "https://mushbloom.uk/#wiki" },
      { "@type": "ListItem", "position": 3, "name": article.category, "item": `https://mushbloom.uk/#wiki` },
      { "@type": "ListItem", "position": 4, "name": article.title, "item": articleUrl }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{article.metaTitle} | Mushbloom</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.seoKeywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta property="og:site_name" content="Mushbloom" />
        <meta property="article:published_time" content="2025-01-15T09:00:00+00:00" />
        <meta property="article:modified_time" content="2026-04-21T09:00:00+00:00" />
        <meta property="article:author" content="Mushbloom" />
        <meta property="article:section" content={article.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content="https://mushbloom.uk/og-image.jpg" />
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
