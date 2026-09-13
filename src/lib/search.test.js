import { describe, expect, it } from 'vitest';
import { guides } from '../data/guides/index.js';
import { filterGlossary, matchesQuery, normalise, searchGuides } from './search.js';

describe('matchesQuery', () => {
  it('matches all words in any order, ignoring case and accents', () => {
    expect(matchesQuery(['Account merge', 'Closes escrow accounts'], 'ESCROW merge')).toBe(true);
    expect(matchesQuery(['Café'], 'cafe')).toBe(true);
    expect(matchesQuery(['Stellar'], 'stellar bitcoin')).toBe(false);
  });

  it('treats an empty query as a match', () => {
    expect(matchesQuery(['anything'], '   ')).toBe(true);
    expect(normalise(undefined)).toBe('');
  });
});

describe('filterGlossary', () => {
  it('searches terms and definitions', () => {
    const entries = [
      { term: 'Memo', definition: 'Note used by exchanges' },
      { term: 'Stroop', definition: 'Smallest unit of XLM' },
    ];
    expect(filterGlossary(entries, 'exchanges').map((e) => e.term)).toEqual(['Memo']);
  });
});

describe('searchGuides', () => {
  it('finds guides by body content', () => {
    const results = searchGuides(guides, 'narration');
    expect(results.length).toBeGreaterThan(0);
    expect(results.map((g) => g.slug)).toContain('how-to-buy-xlm-with-naira');
  });
});
