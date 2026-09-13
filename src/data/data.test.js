import { describe, expect, it } from 'vitest';
import { comparisonColumns, comparisonRows } from './comparison.js';
import { faqCategories, topFaqs } from './faqs.js';
import { footerNav, mainNav } from './navigation.js';
import { roadmap } from './roadmap.js';

describe('site content', () => {
  it('has unique FAQ questions with answers', () => {
    const questions = faqCategories.flatMap((c) => c.items.map((i) => i.question));
    expect(new Set(questions).size).toBe(questions.length);
    for (const category of faqCategories) {
      for (const item of category.items) expect(item.answer.length).toBeGreaterThan(40);
    }
    expect(topFaqs.every(Boolean)).toBe(true);
  });

  it('keeps comparison rows aligned with columns', () => {
    for (const row of comparisonRows) expect(row.values).toHaveLength(comparisonColumns.length);
  });

  it('uses internal paths for navigation', () => {
    const links = [...mainNav, ...footerNav.flatMap((g) => g.links)];
    for (const link of links) expect(link.to.startsWith('/')).toBe(true);
  });

  it('lists every roadmap phase in order', () => {
    expect(roadmap.map((p) => p.phase)).toEqual(['Phase 1', 'Phase 2', 'Phase 3']);
  });
});
