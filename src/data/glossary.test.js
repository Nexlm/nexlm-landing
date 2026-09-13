import { describe, expect, it } from 'vitest';
import { glossary } from './glossary.js';

describe('glossary', () => {
  it('is alphabetical with unique terms', () => {
    const terms = glossary.map((g) => g.term);
    expect(new Set(terms).size).toBe(terms.length);
    expect([...terms].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))).toEqual(terms);
  });

  it('defines every term', () => {
    for (const entry of glossary) expect(entry.definition.length).toBeGreaterThan(15);
  });
});
