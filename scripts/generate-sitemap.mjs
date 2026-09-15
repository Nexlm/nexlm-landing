/**
 * Generates public/sitemap.xml from the static routes and guide data.
 * Runs automatically before `npm run build`.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { guides } from '../src/data/guides/index.js';
import { staticRoutes } from '../src/data/navigation.js';

const SITE_URL = (process.env.VITE_SITE_URL || 'https://nexlm-landing.vercel.app').replace(/\/$/, '');

const escape = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function buildSitemap(siteUrl = SITE_URL) {
  const entries = [
    ...staticRoutes.map((r) => ({ loc: `${siteUrl}${r.path}`, changefreq: r.changefreq, priority: r.priority })),
    ...guides.map((g) => ({ loc: `${siteUrl}/guides/${g.slug}`, lastmod: g.updated, changefreq: 'monthly', priority: 0.7 })),
  ];

  const urls = entries
    .map(
      (e) =>
        `  <url><loc>${escape(e.loc)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}<changefreq>${e.changefreq}</changefreq><priority>${e.priority.toFixed(1)}</priority></url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const target = new URL('../public/sitemap.xml', import.meta.url);
  await writeFile(target, buildSitemap());
  console.log(`Sitemap written with ${staticRoutes.length + guides.length} URLs`);
}
