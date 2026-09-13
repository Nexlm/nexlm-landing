export const mainNav = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/security', label: 'Security' },
  { to: '/fees', label: 'Fees' },
  { to: '/guides', label: 'Guides' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
];

export const footerNav = [
  {
    title: 'Product',
    links: [
      { to: '/how-it-works', label: 'How it works' },
      { to: '/security', label: 'Escrow & security' },
      { to: '/fees', label: 'Fees' },
      { to: '/payment-methods', label: 'Payment methods' },
      { to: '/#calculator', label: 'Rate calculator' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { to: '/guides', label: 'Guides' },
      { to: '/glossary', label: 'Glossary' },
      { to: '/faq', label: 'FAQ' },
      { to: '/changelog', label: "What's new" },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About Nexlm' },
      { to: '/contact', label: 'Contact' },
      { to: '/legal/terms', label: 'Terms of use' },
      { to: '/legal/privacy', label: 'Privacy policy' },
      { to: '/legal/risk', label: 'Risk disclosure' },
    ],
  },
];

/** Every static route, used to generate the sitemap. */
export const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/how-it-works', priority: 0.9, changefreq: 'monthly' },
  { path: '/security', priority: 0.8, changefreq: 'monthly' },
  { path: '/fees', priority: 0.8, changefreq: 'monthly' },
  { path: '/payment-methods', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides', priority: 0.8, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary', priority: 0.5, changefreq: 'monthly' },
  { path: '/changelog', priority: 0.5, changefreq: 'weekly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.5, changefreq: 'yearly' },
  { path: '/legal/terms', priority: 0.3, changefreq: 'yearly' },
  { path: '/legal/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/legal/risk', priority: 0.3, changefreq: 'yearly' },
];
