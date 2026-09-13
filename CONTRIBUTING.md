# Contributing to the Nexlm website

## Editing content

Most copy lives in `src/data/`:

| File                  | Controls                                  |
| --------------------- | ----------------------------------------- |
| `features.js`         | Home page feature grid                    |
| `steps.js`            | Buy / sell steps                          |
| `faqs.js`             | FAQ page and home FAQ preview             |
| `fees.js`             | Fees table                                |
| `paymentMethods.js`   | Payment strip and payment methods page    |
| `guides/*.js`         | One file per guide                        |
| `glossary.js`         | Glossary (keep alphabetical)              |
| `changelog.js`        | What's new page (newest first)            |
| `roadmap.js`          | Roadmap section                           |

Tests in `src/data/*.test.js` catch duplicate slugs, empty answers and unsorted glossary terms.

### Adding a guide

1. Create `src/data/guides/your-slug.js` exporting `{ slug, title, summary, category, readMinutes, updated, sections }`.
2. Import it in `src/data/guides/index.js`.
3. Run `npm test` and `npm run build` — the sitemap is regenerated automatically.

## Accuracy rules

- Fees, limits and timings must match the product (15-minute payment window, 30-minute order expiry, 10 XLM minimum, 2 XLM escrow reserve, 0.00001 XLM network fee).
- No invented user counts, volumes, testimonials or partner logos.
- The live rate is indicative only — never present it as a Nexlm price.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/): `feat(guides): …`, `fix(style): …`, `docs: …`.
