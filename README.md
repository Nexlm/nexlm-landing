# Nexlm Landing

Marketing website for **Nexlm**, the peer-to-peer XLM ↔ Naira exchange built on Stellar.

It explains how trading works, the on-chain escrow model, fees, security and the roadmap, and collects early-access sign-ups.

> The trading app lives in [Nexlm/nexlm](https://github.com/Nexlm/nexlm) and the documentation in [Nexlm/nexlm-docs](https://github.com/Nexlm/nexlm-docs).

## Stack

- React 18 + Vite 6
- Tailwind CSS 3
- React Router (lazy-loaded pages)
- lucide-react icons
- Vitest for unit tests

## Getting started

```bash
npm install
cp .env.example .env   # optional
npm run dev            # http://localhost:5174
```

| Script            | What it does                   |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start the dev server           |
| `npm run build`   | Production build into `dist/`  |
| `npm run preview` | Serve the production build     |
| `npm test`        | Run unit tests                 |

## Environment variables

| Variable                 | Default                   | Purpose                                                     |
| ------------------------ | ------------------------- | ----------------------------------------------------------- |
| `VITE_SITE_URL`          | `https://nexlm.app`       | Canonical site URL                                          |
| `VITE_APP_URL`           | `https://app.nexlm.app`   | Where “Start trading” and “Log in” buttons go               |
| `VITE_DOCS_URL`          | `https://docs.nexlm.app`  | Documentation link                                          |
| `VITE_WAITLIST_ENDPOINT` | _(empty)_                 | POST endpoint for the waitlist; falls back to a mailto link |

## Project structure

```
src/
  components/
    layout/     Header, Footer, Layout, PageHero
    sections/   Home page sections (Hero, HowItWorks, Escrow, Features, …)
    ui/         Buttons, Container, Accordion, Reveal, SectionHeading, Logo
    widgets/    LiveRate, RateCalculator, TradePreview, EscrowDiagram, WaitlistForm
  config/       Site URLs and links
  data/         Copy for features, steps, FAQs, fees, roadmap, comparison
  hooks/        useXlmRate, useInView, useDocumentTitle
  lib/          Formatting, rate fetching, waitlist helpers (+ tests)
  pages/        Route pages, including legal drafts
```

Content lives in `src/data/` so copy changes don't require touching components.

## Live rate

The hero ticker and calculator use CoinGecko's public simple-price API for an **indicative** XLM/NGN rate, cached for five minutes in `sessionStorage`. Actual Nexlm prices are set by traders.

## Deployment

The site is a static SPA. `vercel.json` adds SPA rewrites, long-lived caching for hashed assets and basic security headers.

```bash
npm run build
# deploy dist/
```
