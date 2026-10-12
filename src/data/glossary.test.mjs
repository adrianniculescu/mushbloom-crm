import { test, expect } from 'bun:test';
import { glossaryTerms } from './searchGlossary';
import { getGuide } from './glossaryGuides';

test('Adrian’s glossary has at least 50 terms', () => {
  expect(glossaryTerms.length).toBeGreaterThanOrEqual(50);
});
test('The chosen complete glossary contains 60 distinct terms', () => {
  expect(glossaryTerms.length).toBe(60);
  expect(new Set(glossaryTerms.map(t => t.id)).size).toBe(60);
});
test('Every term has substantive topic-specific guide data', () => {
  for (const term of glossaryTerms) {
    const guide = getGuide(term.id);
    expect(guide).toBeDefined();
    if (!guide) throw new Error(term.id);
    expect(guide.detail.why.length).toBeGreaterThan(150);
    expect(guide.detail.steps.length).toBe(3);
    expect(guide.detail.comparison.distinction.length).toBeGreaterThan(80);
    expect(guide.faqs.length).toBe(4);
    for (const related of term.related) expect(getGuide(related)).toBeDefined();
  }
});