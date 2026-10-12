import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { glossaryTerms, glossarySources, termPath, glossaryPath } from '../src/data/searchGlossary';
import { getGuide, guideSections } from '../src/data/glossaryGuides';

const escape = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] ?? c));
const link = (url: string, text: string) => `<a href="${escape(url)}">${escape(text)}</a>`;
const heading = (id: string, title: string, body: string) => `<section id="${id}"><h2>${escape(title)}</h2>${body}</section>`;
const paragraph = (s: string) => `<p>${escape(s)}</p>`;
const list = (items: string[], ordered = false) => `<${ordered ? 'ol' : 'ul'}>${items.map(s => `<li>${escape(s)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
function document(title: string, description: string, url: string, body: string, schema: object) {
  return `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} | Mushbloom</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${escape(url)}"><meta property="og:title" content="${escape(title)} | Mushbloom"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${escape(url)}"><meta property="og:type" content="article"><meta name="twitter:card" content="summary_large_image"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"><link rel="stylesheet" href="/resources/glossary/reference.css"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script></head><body><nav class="top" aria-label="Main navigation">${link('/', 'Mushbloom')}${link('/resources', 'Resources')}${link(glossaryPath, 'Glossary')}${link('/#contact', 'Contact')}</nav><main>${body}</main><footer>${link('/resources', 'Mushbloom Resources')} · ${link('mailto:office@mushbloom.co.uk', 'office@mushbloom.co.uk')}</footer></body></html>`;
}
await mkdir('public/resources/glossary', { recursive: true });
const fullText: string[] = ['# AEO, GEO & SEO Glossary | Mushbloom', '60 original guides. Published and updated 2026-10-12. Examples are illustrative, not client results. No rankings, citations or outcomes are guaranteed.'];
for (const term of glossaryTerms) {
  const g = getGuide(term.id);
  if (!g) throw new Error(`Missing guide: ${term.id}`);
  const { detail: d } = g;
  const source = glossarySources[term.source];
  const sections = [
    heading('definition', 'Definition & overview', paragraph(term.definition)),
    heading('analogy', 'Analogy & mental model', paragraph(term.analogy) + paragraph(term.practical)),
    heading('why-it-matters', `Why ${term.name.split(' — ')[0]} matters`, paragraph(d.why)),
    heading('example', 'Practical business example', paragraph(d.example) + '<p class="muted">Illustrative scenario, not a client case study or promised result.</p>'),
    heading('how-it-works', `How ${term.name.split(' — ')[0]} works`, list(d.steps, true)),
    heading('components', 'Core components & mechanisms', list(d.components) + paragraph(d.caveat)),
    heading('comparison', `${term.name.split(' — ')[0]} vs ${d.comparison.name}`, paragraph(d.comparison.distinction)),
    heading('faq', 'Frequently asked questions', g.faqs.map(f => `<h3>${escape(f.question)}</h3>${paragraph(f.answer)}`).join('')),
    heading('sources', 'Sources & further reading', link(source.url, source.name) + paragraph('Original Mushbloom explanation and illustrative examples. References support the underlying topic, not every business recommendation. Check current documentation before implementation.') + '<div class="related">' + term.related.map(r => link(termPath(r), glossaryTerms.find(t => t.id === r)?.name ?? r)).join('') + '</div>'),
  ].join('');
  const text = [`# ${g.title}`, `Source: ${g.url}`, 'By Mushbloom. Published and updated: 2026-10-12.', '## Definition & overview', term.definition, '## Analogy & mental model', term.analogy, term.practical, '## Why it matters', d.why, '## Practical business example', d.example, 'Illustrative scenario, not a client case study or promised result.', '## How it works', ...d.steps.map((s, i) => `${i + 1}. ${s}`), '## Core components', ...d.components.map(s => `- ${s}`), d.caveat, `## ${term.name} vs ${d.comparison.name}`, d.comparison.distinction, '## Frequently asked questions', ...g.faqs.map(f => `${f.question}\n${f.answer}`), '## Sources', `${source.name}: ${source.url}`, 'No rankings, AI citations or commercial outcomes are guaranteed.'].join('\n\n');
  const article = `<a href="${glossaryPath}">← AEO, GEO & SEO glossary</a><header><p class="category">${escape(term.category)}</p><h1>${escape(g.title)}</h1><p class="muted">By Mushbloom · Published and updated <time datetime="2026-10-12">12 October 2026</time></p></header><div class="layout"><aside><h2>In this guide</h2><nav aria-label="In this guide">${guideSections.map(s => link(`#${s.id}`, s.name)).join('')}</nav>${link(`/resources/glossary/what-is-${term.id}.txt`, 'Plain-text edition')}</aside><article>${sections}<section><h2>Turn the concept into a practical decision</h2>${paragraph('Discuss your website or business workflow before choosing tools or implementation. Start with the problem, approved information and appropriate human oversight.')}<a class="cta" href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer">Book a free 20-minute audit →</a>${link(term.category === 'AI agents' || term.category === 'LLMs & knowledge' ? '/ai-workforce' : '/llmboost', 'Explore the relevant service')}<p class="muted">No rankings, AI citations or commercial outcomes are guaranteed.</p></section></article></div>`;
  await writeFile(`public${g.path}`, document(g.title, term.definition.slice(0, 160), g.url, article, g.schema));
  await writeFile(`public/resources/glossary/what-is-${term.id}.txt`, text);
  fullText.push(text);
}
await writeFile('public/resources/aeo-geo-seo-glossary.txt', fullText.join('\n\n---\n\n'));
const indexUrl = 'https://mushbloom.uk/resources/glossary/index.html';
await writeFile('public/resources/glossary/index.html', document('60 AI Search & Automation Glossary Guides', 'Original definitions and detailed guides for SEO, AEO, GEO, AI agents and knowledge systems.', indexUrl, `<header><h1>60 AI search & automation glossary guides</h1><p>Original Mushbloom reference guides: definitions, examples, importance, mechanisms, comparisons and FAQs.</p>${link(glossaryPath, 'Search and filter the glossary →')}</header><ul class="index">${glossaryTerms.map(t => `<li>${link(termPath(t.id), t.name)}${paragraph(t.definition)}</li>`).join('')}</ul>`, { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Mushbloom glossary guides', url: indexUrl }));
const sitemap = await readFile('public/sitemap.xml', 'utf8');
const clean = sitemap.replace(/\s*<!-- glossary-guides:start -->[\s\S]*?<!-- glossary-guides:end -->\s*/g, '\n');
const urls = [indexUrl, ...glossaryTerms.map(t => `https://mushbloom.uk${termPath(t.id)}`)];
await writeFile('public/sitemap.xml', clean.replace('</urlset>', `  <!-- glossary-guides:start -->\n${urls.map(url => `  <url><loc>${url}</loc><lastmod>2026-10-12</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join('\n')}\n  <!-- glossary-guides:end -->\n</urlset>`));
console.log(`Generated ${glossaryTerms.length} complete HTML guides, text editions, index and sitemap entries.`);