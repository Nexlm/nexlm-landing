import { describe, expect, it } from 'vitest';
import { getGuide, guideCategories, guides, relatedGuides } from './index.js';

describe('guides', () => {
  it('have unique URL-safe slugs', () => {
    const slugs = guides.map((g) => g.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it('are complete', () => {
    for (const guide of guides) {
      expect(guide.title.length).toBeGreaterThan(10);
      expect(guide.summary.length).toBeGreaterThan(40);
      expect(guide.readMinutes).toBeGreaterThan(0);
      expect(guide.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(guide.sections.length).toBeGreaterThan(1);
      for (const section of guide.sections) {
        expect(section.heading).toBeTruthy();
        expect(section.body?.length || section.list?.length).toBeTruthy();
      }
    }
  });

  it('look up by slug', () => {
    expect(getGuide('what-is-stellar')?.category).toBe('Stellar');
    expect(getGuide('nope')).toBeNull();
  });

  it('suggest related guides from the same category first', () => {
    const guide = getGuide('spot-fake-payment-alerts');
    const related = relatedGuides(guide, 2);
    expect(related).toHaveLength(2);
    expect(related[0].category).toBe('Safety');
    expect(related.some((g) => g.slug === guide.slug)).toBe(false);
  });

  it('list categories with All first', () => {
    expect(guideCategories[0]).toBe('All');
    expect(new Set(guideCategories).size).toBe(guideCategories.length);
  });
});
