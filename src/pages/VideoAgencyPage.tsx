
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { 
  Video, 
  Play, 
  Tv, 
  Megaphone, 
  Mic, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Wand2, 
  Scissors, 
  Send,
  Monitor,
  ShoppingCart,
  GraduationCap,
  Building2,
  FileText,
  Music,
  RotateCcw,
  Smartphone,
  MonitorPlay,
  Square,
  Camera,
  Search,
  Mail,
  Linkedin,
  PenTool,
  DollarSign,
  Target,
  Package,
  Crown,
  Star,
  CreditCard,
  FolderOpen,
  Plus,
  Users,
  TrendingUp,
  Settings,
  Wrench,
  Repeat,
  BarChart3
} from 'lucide-react';

const VideoAgencyPage = () => {
  const services = [
    {
      icon: Video,
      title: "Explainer Videos",
      priceRange: "$1,500 - $3,000",
      duration: "60-90 seconds",
      description: "Crystal-clear product demos that showcase your software or physical product in action. We transform complex features into easy-to-understand benefits, driving user comprehension and adoption.",
      deliverables: ["Collaborative scriptwriting", "AI-generated cinematic visuals", "Professional AI voiceover", "Licensed background music", "Custom branding (logo and colors)", "Final video in 16:9 and 9:16 formats"],
      timeline: "2-3 Weeks",
      bestFor: "SaaS companies, e-commerce brands, and tech startups needing to clarify their value proposition.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Play,
      title: "Social Media Content Packs",
      priceRange: "$2,000/month",
      duration: "< 60 seconds",
      description: "Dominate short-form video platforms with a consistent stream of engaging content. Our monthly packs ensure your brand stays top-of-mind and captures attention in a crowded feed.",
      deliverables: ["12 short-form videos per month (Reels/TikTok/Shorts)", "Monthly content strategy call", "Trending audio recommendations", "Caption prompts for each video", "Delivery of 3 videos per week"],
      timeline: "Monthly Retainer",
      bestFor: "Brands seeking to build an active and engaged audience on social media.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Megaphone,
      title: "Video Ads",
      priceRange: "$1,000 - $2,500",
      duration: "15-30 seconds",
      description: "High-impact, direct-response ads engineered for one purpose: conversion. We leverage proven advertising frameworks and rapid AI production to create multiple variations for A/B testing.",
      deliverables: ["Scriptwriting based on AIDA/PAS frameworks", "Up to 3 unique video variations", "Strong call-to-action (CTA) elements", "Optimized for mobile viewing", "Fast turnaround for campaign launches"],
      timeline: "1-2 Weeks",
      bestFor: "E-commerce and SaaS brands running paid campaigns on Meta, TikTok, or YouTube.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Tv,
      title: "Video Sales Letters (VSLs)",
      priceRange: "$3,000 - $7,000",
      duration: "5-15 minutes",
      description: "Compelling, long-form sales assets designed to sell high-ticket products or services. We guide viewers through a persuasive narrative that builds trust and drives high-intent action.",
      deliverables: ["In-depth persuasion-focused scriptwriting", "Dynamic pacing with AI visuals and kinetic typography", "High-quality AI voiceover", "Strategic use of on-screen graphics and CTAs", "Full-length video for sales pages or webinar funnels"],
      timeline: "3-4 Weeks",
      bestFor: "Coaches, consultants, and high-ticket service providers automating their sales process.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Mic,
      title: "Talking Head Videos",
      priceRange: "$800 - $1,500",
      duration: "1-3 minutes",
      description: "Build authority and social proof with polished interview or testimonial-style videos. We can create hyper-realistic AI avatars or enhance your existing footage for a professional, trustworthy presence.",
      deliverables: ["AI avatar creation or footage enhancement", "Script refinement and editing", "AI voice cloning for consistent narration (optional)", "Editing with b-roll, titles, and brand elements", "Final video for websites, social media, or email"],
      timeline: "1 Week",
      bestFor: "Building social proof with client testimonials, introducing founders, or sharing expert insights.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Establish a foundational video presence and build momentum on social media.",
      includes: ["1x Social Media Content Pack (12 videos)", "Monthly Strategy Call"],
      bestFor: "Brands focused on organic growth and community building.",
      popular: false
    },
    {
      name: "Growth",
      price: "$5,000",
      period: "/month",
      description: "Accelerate lead generation and sales by combining organic content with targeted, high-converting video ads.",
      includes: ["1x Social Media Content Pack (12 videos)", "2x Video Ads (with 2 variations each)", "Bi-weekly performance review"],
      bestFor: "Businesses ready to scale paid acquisition while maintaining a strong social presence.",
      popular: true
    },
    {
      name: "Scale",
      price: "$10,000+",
      period: "/month",
      description: "A comprehensive, fully-managed video solution to dominate your market.",
      includes: ["Choice of 1x Explainer Video or VSL per month", "Full suite of Video Ads for A/B testing", "1x Social Media Content Pack (12 videos)", "Dedicated Account Manager & Weekly Reporting"],
      bestFor: "Market leaders and funded startups aiming for rapid, aggressive expansion.",
      popular: false
    }
  ];

  const process = [
    { 
      step: 1, title: "Script Writing", icon: FileText,
      description: "We generate a conversion-focused script from your client brief using AI, then refine it with you. Every word is engineered for your video's specific goal — whether that's sales, engagement, or education.",
      tools: ["Claude AI", "Google Docs"],
      details: ["Client brief intake form", "AI-generated first draft in 24h", "Collaborative revision via shared doc", "Approval before production begins"]
    },
    { 
      step: 2, title: "Voiceover Production", icon: Mic,
      description: "Choose from premium AI voices via ElevenLabs for instant, studio-quality narration — or we source professional human talent from our vetted network for $20-50 per project.",
      tools: ["ElevenLabs", "Fiverr Pro Talent"],
      details: ["50+ AI voice styles & languages", "Voice cloning for brand consistency", "Human talent option at budget-friendly rates", "Multiple takes included"]
    },
    { 
      step: 3, title: "Visual Creation", icon: Camera,
      description: "We build your visual story using a blend of AI-generated b-roll from Runway, curated stock footage, and screen recordings captured via Loom — no expensive shoots required.",
      tools: ["Runway Gen-2", "Loom", "Stock Libraries"],
      details: ["AI-generated cinematic b-roll", "Licensed stock footage & imagery", "Screen recordings for SaaS demos", "Custom graphics & brand overlays"]
    },
    { 
      step: 4, title: "Editing & Polish", icon: Scissors,
      description: "Our editors assemble everything in Descript — precision cuts, auto-captions, noise removal with Studio Sound, color grading, and kinetic typography for a broadcast-quality finish.",
      tools: ["Descript", "After Effects"],
      details: ["Script-based precision editing", "Auto-generated captions & subtitles", "Studio Sound noise removal", "Motion graphics & transitions"]
    },
    { 
      step: 5, title: "Music & Sound Design", icon: Music,
      description: "We layer in royalty-free background music and custom sound effects that match your brand tone, ensuring every video feels professional and emotionally engaging.",
      tools: ["Epidemic Sound", "Artlist"],
      details: ["Royalty-free licensed music", "Custom sound effects", "Audio mixing & mastering", "Brand-consistent sonic identity"]
    },
    { 
      step: 6, title: "Review & Delivery", icon: Send,
      description: "We deliver a first draft for feedback. Two rounds of revisions are included in every project. Final files rendered in 1080p MP4, optimized for every platform you need.",
      tools: ["Frame.io", "Google Drive"],
      details: ["2 revision rounds included", "Additional revisions available", "1080p MP4 final delivery", "Platform-optimized exports"]
    }
  ];

  const deliverySpecs = [
    { platform: "YouTube / Website", ratio: "16:9", resolution: "1920×1080", icon: MonitorPlay },
    { platform: "Instagram Reels / TikTok / Shorts", ratio: "9:16", resolution: "1080×1920", icon: Smartphone },
    { platform: "Instagram Feed / LinkedIn", ratio: "1:1", resolution: "1080×1080", icon: Square },
  ];

  const niches = [
    { name: "SaaS", icon: Monitor, description: "Rapidly create product explainer videos, feature announcements, and scalable video onboarding sequences that reduce churn and support load." },
    { name: "E-commerce", icon: ShoppingCart, description: "Cost-effective production of hundreds of product video ads for testing, UGC-style ads, and engaging social media content to drive sales." },
    { name: "Coaches & Consultants", icon: GraduationCap, description: "Create persuasive VSLs for high-ticket programs, professional client testimonials, and consistent short-form content to establish expertise." },
    { name: "Digital Agencies", icon: Building2, description: "White-label AI video services to expand your offerings without the overhead of an in-house video team, increasing client retention and contract value." }
  ];

  const aiTools = [
    { name: "Runway", description: "Gen-2 model for generating original, cinematic video clips from text prompts. Forms the primary b-roll and visual foundation for our videos.", color: "text-orange-400" },
    { name: "Descript", description: "Central hub for video editing. Script-based editor allows editing video as text, with 'Overdub' for realistic voice clones and 'Studio Sound' for crystal-clear audio.", color: "text-cyan-400" },
    { name: "ElevenLabs", description: "Premium, human-like AI voiceovers. Generate narration in various styles and languages, or clone a founder's voice for personalized video messages.", color: "text-pink-400" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mushbloom Premium AI Video Agency",
    "description": "AI-powered video production agency creating explainer videos, social media content, video ads, VSLs, and talking head videos using Runway, Descript, and ElevenLabs.",
    "provider": {
      "@type": "Organization",
      "name": "Mushbloom",
      "url": "https://mushbloom.co.uk"
    },
    "serviceType": "AI Video Production",
    "areaServed": "Worldwide",
    "url": "https://mushbloom.co.uk/video-agency",
    "offers": [
      { "@type": "Offer", "name": "Starter", "price": "2500", "priceCurrency": "USD", "description": "Monthly social media content pack with strategy call" },
      { "@type": "Offer", "name": "Growth", "price": "5000", "priceCurrency": "USD", "description": "Social content + video ads with performance reviews" },
      { "@type": "Offer", "name": "Scale", "price": "10000", "priceCurrency": "USD", "description": "Full-service video production with dedicated account manager" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>AI Video Agency – Premium Video Production | Mushbloom</title>
        <meta name="description" content="AI-powered video agency creating explainer videos, social media content, video ads, VSLs & talking head videos. Powered by Runway, Descript & ElevenLabs. From $800." />
        <link rel="canonical" href="https://mushbloom.co.uk/video-agency" />
        <meta property="og:title" content="AI Video Agency – Premium Video Production | Mushbloom" />
        <meta property="og:description" content="AI-powered video production from $800. Explainer videos, social content packs, video ads, VSLs & more." />
        <meta property="og:url" content="https://mushbloom.co.uk/video-agency" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 px-4 py-2 rounded-full text-orange-300 text-sm font-medium mb-6">
                <Video className="h-4 w-4" />
                Premium AI Video Agency
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-tight">
                Video That <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Sells</span>, Powered by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From explainer videos to VSLs, we produce cinema-quality video content at a fraction of the traditional cost using cutting-edge AI tools like Runway, Descript, and ElevenLabs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tidycal.com/adrianniculescu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 inline-flex items-center gap-2"
                >
                  Get a Free Video Strategy Call <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Service Menu</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Five core video types, each engineered for a specific business outcome.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 hover:border-white/20 transition-all duration-300 border border-white/5">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} shrink-0`}>
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">{service.title}</h3>
                          <div className="flex flex-wrap gap-3 mt-2">
                            <span className="text-orange-400 font-semibold">{service.priceRange}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{service.duration}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-cyan-400">{service.timeline}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <p className="text-sm text-gray-500"><strong className="text-gray-400">Best for:</strong> {service.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Monthly <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Retainer Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Predictable pricing. Consistent output. No surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`glass-effect rounded-2xl p-8 relative ${
                    tier.popular ? 'ring-2 ring-orange-400 border-orange-400/30' : 'border border-white/5'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-orange-400">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mb-6"><strong>Best for:</strong> {tier.bestFor}</p>
                  <a
                    href="https://tidycal.com/adrianniculescu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Workflow */}
        <section className="py-20" id="workflow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Production Workflow</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cinema-quality videos without expensive equipment. Six streamlined steps from brief to final delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <div key={step.step} className="glass-effect rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm shrink-0">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {step.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-white/5 text-cyan-400 px-2 py-1 rounded-full border border-cyan-500/20">{tool}</span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                        <CheckCircle className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Specs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-2xl p-8 border border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Delivery <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Specifications</span>
                  </h2>
                  <p className="text-gray-400 mb-4">Every video is rendered in 1080p MP4 and exported in all aspect ratios you need. No extra charge for multiple formats.</p>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <RotateCcw className="h-5 w-5 text-orange-400 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">2 Revision Rounds Included</p>
                      <p className="text-gray-500 text-xs">Additional revisions available at $150/round</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {deliverySpecs.map((spec, i) => (
                    <div key={i} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <spec.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-white text-sm font-semibold">{spec.ratio}</p>
                      <p className="text-gray-500 text-xs">{spec.resolution}</p>
                      <p className="text-gray-400 text-xs mt-1">{spec.platform}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Powered by <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Cutting-Edge AI</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiTools.map((tool, index) => (
                <div key={index} className="glass-effect rounded-xl p-8 border border-white/5">
                  <h3 className={`text-2xl font-bold ${tool.color} mb-4 font-['Space_Grotesk']`}>{tool.name}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Niche Focus */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Built for <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Your Industry</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {niches.map((niche, index) => (
                <div key={index} className="glass-effect rounded-xl p-8 border border-white/5 flex gap-4">
                  <div className="inline-flex p-3 rounded-lg bg-orange-500/10 shrink-0 h-fit">
                    <niche.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk']">{niche.name}</h3>
                    <p className="text-gray-400">{niche.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Acquisition System */}
        <section className="py-20" id="acquisition">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 px-4 py-2 rounded-full text-orange-300 text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                Client Acquisition Playbook
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Land <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">5 Clients</span> in 30 Days
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven system for filling your pipeline with high-value video production clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Outbound Prospecting */}
              <div className="glass-effect rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Strategic Outbound Prospecting</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">We don't wait for clients to find us; we actively seek out businesses that can benefit most from our video services. This involves identifying companies with underperforming video content or those missing out on video entirely.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Identify companies in high-growth industries using Apollo.io or Crunchbase</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Scan YouTube, Reels, and TikTok for brands with low engagement or poor video quality</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Qualification checklist: &lt;10k followers, inconsistent branding, no clear CTA</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Create a "Dream 100" list of ideal clients to focus outreach</li>
                </ul>
              </div>

              {/* Cold Email */}
              <div className="glass-effect rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">High-Impact Cold Email Outreach</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">Hyper-personalized, value-driven email campaigns. Lead with a tangible "before and after" transformation to immediately capture interest and prove expertise.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Subject line: "Video content for [Company]" — high open rates</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Include before/after GIF showing video transformation</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Offer a free sample edit of their existing footage — no strings attached</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Follow up 3 times over 10 days with additional value</li>
                </ul>
              </div>

              {/* LinkedIn */}
              <div className="glass-effect rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">LinkedIn Social Selling</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">Build genuine relationships with marketing directors and founders. Provide value and engage with their content before making any pitch, establishing trust from the first interaction.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Personalized connection requests mentioning their specific content</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Engage with posts for a week before sending a direct message</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Share case studies to establish authority in video marketing</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Use Sales Navigator for targeted lead lists by industry and job title</li>
                </ul>
              </div>

              {/* Content Marketing */}
              <div className="glass-effect rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500">
                    <PenTool className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Inbound Content Marketing</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">Attract qualified leads by establishing thought leadership. Free tutorials, templates, and behind-the-scenes content draw in clients already looking for a professional video solution.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Weekly short-form "how-to" video tips for businesses</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Behind-the-scenes content showcasing your process</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Downloadable resources: Video Shoot Checklist, Reel Idea Template</li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Blog posts repurposed into video scripts for multi-channel reach</li>
                </ul>
              </div>
            </div>

            {/* Cold Email Template */}
            <div className="glass-effect rounded-2xl p-8 border border-white/5 mb-12">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk'] flex items-center gap-3">
                <Mail className="h-6 w-6 text-orange-400" />
                Cold Email Template
              </h3>
              <div className="bg-black/40 rounded-xl p-6 border border-white/10 font-mono text-sm">
                <p className="text-orange-400 mb-3"><strong>Subject:</strong> Video content for [Company]</p>
                <div className="text-gray-300 space-y-3 leading-relaxed">
                  <p>Hi [First Name],</p>
                  <p>I was just looking at [Company]'s website, and I'm really impressed with [specific compliment, e.g., the community you've built].</p>
                  <p>My name is [Your Name], and I run [Your Agency], a video agency that helps brands like yours create high-converting video content. I noticed an opportunity to significantly increase engagement on your social channels.</p>
                  <p>For example, we helped a similar brand achieve a <span className="text-green-400 font-semibold">30% increase in leads</span> by transforming their raw footage into story-driven ads. Here's a quick before-and-after example: <span className="text-cyan-400">[Link to GIF/Short Video]</span></p>
                  <p>To show you what's possible, we'd be happy to take a piece of your existing footage and provide a <span className="text-orange-400 font-semibold">free sample edit</span>, no strings attached.</p>
                  <p>Would you be open to a quick 15-minute chat next week to discuss this?</p>
                  <p className="text-gray-500">Best,<br/>[Your Name]<br/>[Your Title]<br/>[Link to your portfolio/website]</p>
                </div>
              </div>
            </div>

            {/* Pricing Strategy Callout */}
            <div className="glass-effect rounded-2xl p-8 border border-orange-400/30 bg-gradient-to-r from-orange-500/5 to-red-500/5">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shrink-0">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">Premium Service Starts at $1,000</h3>
                  <p className="text-gray-300">We have a project minimum of $1,000. This ensures we can dedicate the proper resources to deliver exceptional quality and results. It also serves as a filter for tire-kickers, allowing us to focus our full creative energy on serious clients who value professional video production and are committed to seeing a significant return on their investment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Builder */}
        <section className="py-20" id="portfolio-builder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Portfolio Strategy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Build a <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">Killer Portfolio</span> Fast
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                5 portfolio pieces, a 90-second demo reel, and a testimonial strategy — everything you need to land premium clients.
              </p>
            </div>

            {/* Spec Work Strategy */}
            <div className="glass-effect rounded-2xl p-8 border border-purple-400/20 mb-12">
              <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk'] flex items-center gap-3">
                <Wand2 className="h-6 w-6 text-purple-400" />
                Spec Work Strategy
              </h3>
              <p className="text-gray-300 mb-6">Speculative work is crucial for new agencies to demonstrate capabilities and build a compelling portfolio without prior client history. It allows you to showcase your unique AI video expertise and creative vision, attracting ideal clients by proving your value upfront.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  "Identify 3-5 target industries aligned with your services",
                  "Research common pain points and marketing challenges",
                  "Develop impactful video concepts tailored to those pain points",
                  "Use AI tools for rapid script, voiceover, and animation",
                  "Produce polished spec videos in a streamlined workflow"
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-purple-400 font-bold text-sm shrink-0">{i + 1}.</span>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5 Portfolio Pieces */}
            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">5 Essential Portfolio Pieces</h3>
              {[
                { title: "QuantumFlow AI - Explainer Video", type: "Explainer", icon: Video, gradient: "from-purple-500 to-indigo-500", client: "QuantumFlow AI Solutions", industry: "Enterprise Software", goal: "Simplify complex AI integration benefits for B2B clients.", solution: "Animated explainer using data visualization and clear narration, breaking down advanced algorithms into digestible benefits for enterprise adoption.", results: ["+30% demo request rate", "-15% bounce rate on product page", "+25% lead qualification improvement"] },
                { title: "EcoBloom Organics - Social Media Ad", type: "Ad", icon: Megaphone, gradient: "from-green-400 to-teal-500", client: "EcoBloom Organics", industry: "Sustainable Consumer Goods", goal: "Increase brand awareness and DTC sales for organic skincare.", solution: "Short, engaging social ads optimized for Instagram and TikTok with natural aesthetics, product benefits, and strong CTAs.", results: ["500K+ organic impressions in month 1", "+18% click-through rate", "2,500 new website visitors from social"] },
                { title: "FitFusion Fitness - Testimonial Series", type: "Testimonial", icon: Mic, gradient: "from-red-500 to-pink-500", client: "FitFusion Fitness", industry: "Health & Wellness", goal: "Build trust with real client success stories.", solution: "High-quality video testimonials featuring real members — personal journeys, struggles, and triumphs emphasizing the program's transformative impact.", results: ["+22% conversion on subscription page", "-10% customer acquisition cost", "4-star average on Google My Business"] },
                { title: "PixelPulse Studio - Brand Story", type: "Social Content", icon: Play, gradient: "from-blue-500 to-cyan-500", client: "PixelPulse Studio", industry: "Creative Agency", goal: "Communicate creative process and culture to attract talent and clients.", solution: "Captivating brand story combining cinematic visuals with behind-the-scenes glimpses, highlighting passion for innovation and collaboration.", results: ["3x more qualified job applications", "+40% website engagement duration", "Featured on industry creative blogs"] },
                { title: "SwiftShip Logistics - VSL", type: "VSL", icon: Tv, gradient: "from-yellow-400 to-orange-500", client: "SwiftShip Logistics", industry: "Supply Chain & Logistics", goal: "Convert cold leads into warm prospects with AI shipping solutions.", solution: "Data-driven Video Sales Letter using animated infographics and professional voiceover to illustrate speed, reliability, and cost-saving benefits.", results: ["+15% qualified sales appointments", "-7 days average sales cycle", "+12% conversion from VSL to proposals"] }
              ].map((piece, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-r ${piece.gradient}`}>
                          <piece.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">{piece.title}</h4>
                          <span className="text-xs text-gray-500">{piece.client} • {piece.industry}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-gray-300">Goal:</strong> {piece.goal}</p>
                      <p className="text-sm text-gray-400"><strong className="text-gray-300">Solution:</strong> {piece.solution}</p>
                    </div>
                    <div>
                      <h5 className="text-xs text-gray-500 uppercase tracking-wide mb-3">Results</h5>
                      <ul className="space-y-2">
                        {piece.results.map((r, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                            <span className="text-green-300 font-semibold">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Reel + Hosting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Demo Reel */}
              <div className="glass-effect rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk'] flex items-center gap-3">
                  <Play className="h-6 w-6 text-orange-400" />
                  90-Second Demo Reel
                </h3>
                <p className="text-gray-400 text-sm mb-6">A dynamic showcase of your best AI-powered video productions, highlighting creative range and technical proficiency across industries.</p>
                <div className="space-y-3">
                  {[
                    { name: "Agency Intro & Branding", duration: "10s" },
                    { name: "Explainer & Product Demos", duration: "25s" },
                    { name: "Social Ads & Short-Form Content", duration: "20s" },
                    { name: "Brand Story & Testimonial Highlights", duration: "25s" },
                    { name: "Call to Action / Contact Info", duration: "10s" }
                  ].map((seg, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-orange-400 font-bold text-sm w-6">{i + 1}.</span>
                        <span className="text-gray-300 text-sm">{seg.name}</span>
                      </div>
                      <span className="text-cyan-400 text-xs font-mono">{seg.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hosting */}
              <div className="space-y-6">
                <div className="glass-effect rounded-2xl p-8 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Vimeo Pro</h3>
                  <p className="text-gray-400 text-sm mb-4">Premium video hosting with advanced analytics, privacy controls, and ad-free playback.</p>
                  <ul className="space-y-2">
                    {["Ad-free playback & customizable player", "Robust viewer engagement analytics", "Advanced privacy settings & domain restrictions", "High-quality streaming & download options"].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass-effect rounded-2xl p-8 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Webflow / Framer</h3>
                  <p className="text-gray-400 text-sm mb-4">Custom portfolio websites with seamless video integration and brand-aligned design.</p>
                  <ul className="space-y-2">
                    {["Full control over design and branding", "Optimized for SEO and fast loading", "Integrated CMS for easy portfolio updates", "Responsive design across all devices"].map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial Strategy */}
            <div className="glass-effect rounded-2xl p-8 border border-orange-400/30 bg-gradient-to-r from-orange-500/5 to-red-500/5">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shrink-0">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">Get Testimonials Fast</h3>
                  <p className="text-gray-300 mb-4">Securing early testimonials is vital for building trust and social proof. Offer attractive incentives for initial clients to provide authentic video feedback.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Offer 20-30% discount on 2-3 initial projects in exchange for a video testimonial</li>
                    <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Provide structured interview guide to help clients articulate their experience</li>
                    <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Handle all post-production of their raw testimonial footage at no extra cost</li>
                    <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Feature their business on your premium platforms for increased mutual exposure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Productized Video Packages */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Stop Custom Quoting</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 font-['Space_Grotesk']">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Productized Video Packages</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Clear pricing. Clear deliverables. No back-and-forth proposals. Pick a package, pay 50% upfront, and we get to work.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Bronze */}
              <div className="glass-effect rounded-2xl p-8 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Bronze</h3>
                    <p className="text-amber-400 text-sm font-semibold">Starter</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white font-['Space_Grotesk']">$1,200</span>
                  <span className="text-gray-400 text-sm ml-1">/ project</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />One 60-second explainer video</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Professional AI voiceover</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Licensed background music</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />3 revision rounds included</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />1080p MP4 delivery</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />16:9 + 9:16 formats</li>
                </ul>
                <p className="text-gray-500 text-xs mb-4">Delivery: 2-3 weeks • Via Google Drive</p>
                <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold transition-colors duration-200 block">Get Started</a>
              </div>

              {/* Silver — Popular */}
              <div className="glass-effect rounded-2xl p-8 border-2 border-orange-400/60 hover:border-orange-400/80 transition-all duration-300 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Silver</h3>
                    <p className="text-gray-300 text-sm font-semibold">Growth</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white font-['Space_Grotesk']">$2,500</span>
                  <span className="text-gray-400 text-sm ml-1">/ project</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Three 30-second social videos</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />One 90-second hero video</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />AI voiceover + licensed music</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />2 revision rounds per video</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Platform-optimized formats</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Thumbnail designs included</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Delivery via Frame.io</li>
                </ul>
                <p className="text-gray-500 text-xs mb-4">Delivery: 3-4 weeks • Via Frame.io</p>
                <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 block">Get Started</a>
              </div>

              {/* Gold — Premium */}
              <div className="glass-effect rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Gold</h3>
                    <p className="text-yellow-400 text-sm font-semibold">Complete Suite</p>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white font-['Space_Grotesk']">$5,000</span>
                  <span className="text-gray-400 text-sm ml-1">/ project</span>
                </div>
                <p className="text-yellow-400/80 text-xs mb-6">or <span className="font-bold">$4,000/mo</span> ongoing subscription</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Full VSL (Video Sales Letter)</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />3 high-converting ad creatives</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />8 social media clips</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />2 revision rounds per asset</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />All platform formats included</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Thumbnail designs + captions</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Priority delivery via Frame.io</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />Dedicated project manager</li>
                </ul>
                <p className="text-gray-500 text-xs mb-4">Delivery: 4-5 weeks • Via Frame.io</p>
                <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-200 block">Get Started</a>
              </div>
            </div>

            {/* Terms & Upsells */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Payment & Delivery Terms</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" /><strong className="text-white">50% upfront</strong> to begin production, 50% on final delivery</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><FolderOpen className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />Delivery via <strong className="text-white">Frame.io</strong> (Silver/Gold) or <strong className="text-white">Google Drive</strong> (Bronze)</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><FileText className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />All final files: <strong className="text-white">1080p MP4</strong>, optimized per platform aspect ratio</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><RotateCcw className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />Revision rounds clearly defined per package — no scope creep</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Plus className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Add-Ons & Upsells</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><DollarSign className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">Additional revision round:</strong> $200 per round</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><DollarSign className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">Rush delivery (48h):</strong> +30% surcharge</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><DollarSign className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">Premium voiceover talent:</strong> $150-$400 (Fiverr Pro)</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><DollarSign className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">Monthly retainer (Gold):</strong> $4,000/mo for ongoing content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Scaling Blueprint */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">From Solo to Agency</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 font-['Space_Grotesk']">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">The Scaling Blueprint</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Go from $5K solo freelancer to $25K/month agency with a proven hiring roadmap, margin math, and operational systems.</p>
            </div>

            {/* Revenue Trajectory */}
            <div className="glass-effect rounded-2xl p-8 border border-orange-400/20 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-orange-400" />
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Revenue Growth Trajectory</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Solo Phase</p>
                  <p className="text-3xl font-bold text-white font-['Space_Grotesk']">$5K–$8K</p>
                  <p className="text-gray-400 text-sm mt-1">3-4 projects/month max</p>
                  <p className="text-orange-400 text-xs mt-2">You do everything</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-orange-400/20 text-center">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">With Editor</p>
                  <p className="text-3xl font-bold text-white font-['Space_Grotesk']">$12K–$18K</p>
                  <p className="text-gray-400 text-sm mt-1">8-10 projects/month</p>
                  <p className="text-orange-400 text-xs mt-2">First hire unlocks capacity</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-yellow-400/20 text-center">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Full Team</p>
                  <p className="text-3xl font-bold text-white font-['Space_Grotesk']">$20K–$25K</p>
                  <p className="text-gray-400 text-sm mt-1">15+ projects/month</p>
                  <p className="text-yellow-400 text-xs mt-2">You manage, not produce</p>
                </div>
              </div>
            </div>

            {/* Hiring Roadmap & Profit Margins */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Hiring Roadmap</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm font-bold shrink-0">1</div>
                    <div>
                      <p className="text-white font-semibold">Video Editor (Upwork)</p>
                      <p className="text-gray-400 text-sm">$15–25/hr • Handles cuts, transitions, captions. Frees you for sales and client work. Hire when consistently at 3+ projects/month.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm font-bold shrink-0">2</div>
                    <div>
                      <p className="text-white font-semibold">Scriptwriter</p>
                      <p className="text-gray-400 text-sm">$20–40/hr or per script • Turns client briefs into compelling narratives. Hire when you're spending 5+ hours/week on scripts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-sm font-bold shrink-0">3</div>
                    <div>
                      <p className="text-white font-semibold">Project Manager</p>
                      <p className="text-gray-400 text-sm">$18–30/hr • Client communication, timelines, revisions tracking. Hire when managing 8+ concurrent projects.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Profit Margins</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">Target <strong className="text-white">40–50% net margins</strong> after all labor costs. Here's the math on a typical $2,500 project:</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-gray-400">Client pays</span><span className="text-white font-semibold">$2,500</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400">Editor cost (~8 hrs × $20)</span><span className="text-red-400">-$160</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400">Scriptwriter (per script)</span><span className="text-red-400">-$150</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400">AI voiceover + music licenses</span><span className="text-red-400">-$50</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400">Tools & software (prorated)</span><span className="text-red-400">-$40</span></div>
                  <div className="border-t border-white/10 pt-3 flex justify-between text-sm"><span className="text-white font-semibold">Your profit</span><span className="text-green-400 font-bold text-lg">$2,100 (84%)</span></div>
                </div>
                <p className="text-gray-500 text-xs mt-4">Margins decrease to 40-50% as you add full-time team members, but volume compensates.</p>
              </div>
            </div>

            {/* Systems & Tools */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Operational Systems</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">Video templates</strong> — Pre-built timelines for every video type (explainer, ad, VSL)</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">SOPs documented</strong> — Step-by-step process for editing, review, and delivery</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">Automated onboarding</strong> — Client intake form → project board → kickoff email sequence</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /><strong className="text-white">QA checklist</strong> — Brand consistency, audio levels, captions, format specs verified</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Tools Stack (~$200/mo)</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" /><strong className="text-white">Descript</strong> — $24/mo • AI editing, transcription, captions</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" /><strong className="text-white">ElevenLabs</strong> — $22/mo • AI voiceover generation</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" /><strong className="text-white">Frame.io</strong> — $15/mo • Client review & delivery</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" /><strong className="text-white">Artlist/Epidemic</strong> — $17/mo • Licensed music & SFX</li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm"><CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" /><strong className="text-white">Notion + Loom</strong> — $20/mo • SOPs, project management, async comms</li>
                </ul>
              </div>
            </div>

            {/* Client Retention */}
            <div className="mt-12 glass-effect rounded-2xl p-8 border border-green-400/20 bg-green-400/5">
              <div className="flex items-center gap-3 mb-4">
                <Repeat className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Client Retention: One-Offs → Monthly Retainers</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">The fastest path to $25K/month is converting project clients into monthly retainers. After delivering their first video, pitch ongoing content:</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                  <p className="text-green-400 font-bold text-lg">4 videos/mo</p>
                  <p className="text-gray-400 text-sm">$2,000 retainer</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                  <p className="text-green-400 font-bold text-lg">8 videos/mo</p>
                  <p className="text-gray-400 text-sm">$3,500 retainer</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                  <p className="text-green-400 font-bold text-lg">12+ videos/mo</p>
                  <p className="text-gray-400 text-sm">$5,000 retainer</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">5 retainer clients at $4K avg = $20K predictable monthly revenue. That's the goal.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-effect rounded-2xl p-12 border border-orange-400/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Ready to Transform Your Video Marketing?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Book a free strategy call and discover how AI-powered video can 10x your content output while cutting production costs by 60%.
              </p>
              <a
                href="https://tidycal.com/adrianniculescu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 inline-flex items-center gap-2"
              >
                Book Your Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
};

export default VideoAgencyPage;
