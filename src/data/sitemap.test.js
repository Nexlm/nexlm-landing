import { describe, expect, it } from 'vitest';
import { buildSitemap } from '../../scripts/generate-sitemap.mjs';
import { guides } from './guides/index.js';

describe('sitemap', () => {
  const xml = buildSitemap('https://example.ng');

  it('includes static pages and every guide', () => {
    expect(xml).toContain('<loc>https://example.ng/</loc>');
    expect(xml).toContain('<loc>https://example.ng/payment-methods</loc>');
    for (const guide of guides) expect(xml).toContain(`<loc>https://example.ng/guides/${guide.slug}</loc>`);
  });

  it('is well-formed XML with lastmod for guides', () => {
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(xml.match(/<url>/g)).toHaveLength(xml.match(/<\/url>/g).length);
    expect(xml).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
  });
});
