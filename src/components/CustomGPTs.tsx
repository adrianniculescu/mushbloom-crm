
import React from 'react';
import { ExternalLink, Bot, Sparkles, Users } from 'lucide-react';

interface GPTProfile {
  name: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  image: string;
}

const gptTeam: GPTProfile[] = [
  {
    name: 'Andrada',
    role: 'CMO – Chief Marketing Officer',
    tagline: 'Your AI-driven strategic vision and marketing powerhouse',
    description: 'Andrada leads the AI marketing team with data-backed strategy, campaign planning, brand positioning, and executive-level marketing decisions. She orchestrates the full marketing funnel from awareness to conversion.',
    url: 'https://chat.openai.com/g/g-jnCN7Vw79-andrada-the-cmo-chief-marketing-officer',
    image: '/lovable-uploads/andrada-cmo.png',
  },
  {
    name: 'Roger',
    role: 'Viral Social Visionary',
    tagline: 'An AI expert in social media trends and viral content',
    description: 'Roger specializes in crafting scroll-stopping social media strategies, identifying trending formats, and engineering viral content campaigns across Instagram, TikTok, LinkedIn, and X.',
    url: 'https://chat.openai.com/g/g-fNTddBbsi-roger-the-viral-social-visionary',
    image: '/lovable-uploads/roger-viral-social-visionary.jpg',
  },
  {
    name: 'Ethan',
    role: 'Marketing Data Analyst',
    tagline: 'AI intelligence transforming data into unbeatable strategies',
    description: 'Ethan crunches campaign metrics, audience insights, and market data to surface actionable recommendations. He turns raw numbers into clear growth roadmaps.',
    url: 'https://chat.openai.com/g/g-qKalrC38A-ethan-the-marketing-data-analyst',
    image: '/lovable-uploads/ethan-data-analyst.jpg',
  },
  {
    name: 'Vincent',
    role: 'Marketing Designer',
    tagline: 'AI creativity crafting visuals that capture hearts and minds',
    description: 'Vincent designs on-brand graphics, social media creatives, ad visuals, and presentation decks. He brings marketing concepts to life with striking visual execution.',
    url: 'https://chat.openai.com/g/g-iZ0JYCSty-vincent-the-marketing-designer',
    image: '/lovable-uploads/vincent-marketing-designer.jpg',
  },
  {
    name: 'Tanya',
    role: 'Marketing Copywriter',
    tagline: 'AI wordsmith weaving compelling narratives for your brand',
    description: 'Tanya writes persuasive ad copy, blog posts, email sequences, landing pages, and brand messaging. She adapts tone and voice to match any brand identity.',
    url: 'https://chat.openai.com/g/g-Xmi2Hsdvm-tanya-the-marketing-copywriter',
    image: '/lovable-uploads/tanya-marketing-copywriter.jpg',
  },
];

const CustomGPTs = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero / Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[hsl(211,100%,40%)] to-[hsl(150,100%,40%)] text-white mb-4 opacity-90">
            <Bot className="w-4 h-4 inline mr-1.5 -mt-0.5" />
            Custom GPTs by Mushbloom
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 font-['Space_Grotesk']">
            The AI-Powered{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Digital Marketing Team
            </span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A complete marketing department built on ChatGPT — strategist, social media expert, data analyst, designer, and copywriter — created by Mushbloom to give every business access to an AI-powered growth engine.
          </p>
        </div>

        {/* Team Group Photo */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/[0.08] max-w-4xl mx-auto">
          <img
            src="/lovable-uploads/marketing-team-group.jpg"
            alt="Mushbloom AI Marketing Team – Andrada, Roger, Ethan, Vincent, and Tanya – Custom GPTs for digital marketing"
            className="w-full h-auto object-cover"
            loading="eager"
          />
          <div className="bg-white/[0.03] px-6 py-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="font-semibold font-['Space_Grotesk']">The Dream Team</span>
              <span className="text-gray-500 ml-2 text-sm">— 5 Custom GPTs working together as your AI marketing department</span>
            </div>
          </div>
        </div>

        {/* Individual Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {gptTeam.map((gpt) => (
            <a
              key={gpt.name}
              href={gpt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={gpt.image}
                  alt={`${gpt.name} – ${gpt.role} – Custom GPT by Mushbloom`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/50 text-gray-300 backdrop-blur-sm border border-white/10 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Custom GPT
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </div>

                <div className="absolute bottom-4 left-5 right-5">
                  <h2 className="text-white font-bold text-xl font-['Space_Grotesk'] group-hover:text-blue-300 transition-colors">
                    {gpt.name}
                  </h2>
                  <p className="text-blue-300/80 text-sm font-medium">{gpt.role}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-300 text-sm font-medium mb-2 italic">"{gpt.tagline}"</p>
                <p className="text-gray-500 text-sm leading-relaxed">{gpt.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* How to use section */}
        <div className="max-w-3xl mx-auto rounded-xl border border-white/[0.08] bg-white/[0.02] p-8">
          <h2 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">How to Use the Team</h2>
          <ol className="space-y-3 text-gray-400 text-sm leading-relaxed list-decimal list-inside">
            <li>Open your <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ChatGPT account</a> (free or paid).</li>
            <li>Click the profile link for the team member you need.</li>
            <li>Start chatting — each GPT is pre-configured with their marketing specialty.</li>
          </ol>
          <div className="mt-6 p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="text-gray-400 text-sm">
              <strong className="text-gray-300">Free plan:</strong> Works with limitations on the number of interactions and cannot generate images.
              <br />
              <strong className="text-gray-300">ChatGPT Plus ($20/mo):</strong> Full access including image generation, faster responses, and unlimited interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomGPTs;
