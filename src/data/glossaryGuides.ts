import { glossaryTerms, glossarySources, termPath } from './searchGlossary';
import { guideDetails } from './glossaryGuideDetails';
import { additionalGuideDetails } from './additionalGuideDetails';

export const allGuideDetails = { ...guideDetails, ...additionalGuideDetails };
export const guideTitle = (name: string) => `What is ${name.replace(' — ', ' (')}${name.includes(' — ') ? ')' : ''}?`;
export const guideSections = [
  { id: 'definition', name: 'Definition & overview' },
  { id: 'analogy', name: 'Analogy & mental model' },
  { id: 'why-it-matters', name: 'Why it matters' },
  { id: 'example', name: 'Practical business example' },
  { id: 'how-it-works', name: 'How it works' },
  { id: 'components', name: 'Core components' },
  { id: 'comparison', name: 'Related concepts compared' },
  { id: 'faq', name: 'Frequently asked questions' },
  { id: 'sources', name: 'Sources & further reading' },
];
export function getGuide(id: string) {
  const term = glossaryTerms.find(t => t.id === id);
  const detail = allGuideDetails[id];
  if (!term || !detail) return undefined;
  const title = guideTitle(term.name);
  const faqs = [
    { question: `What does ${term.name.split(' — ')[0]} mean?`, answer: term.definition },
    { question: `How is it different from ${detail.comparison.name}?`, answer: detail.comparison.distinction },
    { question: 'What is a sensible first step for a small business?', answer: `${term.practical} ${detail.steps[0]}` },
    { question: 'What limitations should I keep in mind?', answer: detail.caveat },
  ];
  const path = termPath(id);
  const url = `https://mushbloom.uk${path}`;
  const text = [title, term.definition, term.analogy, detail.why, detail.example, ...detail.steps, ...detail.components, detail.comparison.distinction, ...faqs.map(f => `${f.question} ${f.answer}`)].join(' ');
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': `${url}#article`, headline: title, description: term.definition, url, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'Mushbloom', '@id': 'https://mushbloom.uk/#organization' }, publisher: { '@id': 'https://mushbloom.uk/#organization' }, datePublished: '2026-10-12', dateModified: '2026-10-12', inLanguage: 'en-GB', wordCount: text.split(/\s+/).length, about: { '@type': 'DefinedTerm', '@id': `${url}#term`, name: term.name, description: term.definition, inDefinedTermSet: 'https://mushbloom.uk/resources/aeo-geo-seo-glossary' }, citation: glossarySources[term.source].url },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://mushbloom.uk/resources' }, { '@type': 'ListItem', position: 3, name: 'Glossary', item: 'https://mushbloom.uk/resources/aeo-geo-seo-glossary' }, { '@type': 'ListItem', position: 4, name: term.name, item: url }] },
  ] };
  return { term, detail, title, faqs, path, url, schema };
}