const env = import.meta.env ?? {};

// "https://x.app/" and "https://x.app" should both produce "https://x.app/login".
const stripSlash = (url) => url.replace(/\/+$/, '');

export const site = {
  name: 'Nexlm',
  tagline: 'Buy and sell XLM for Naira, peer to peer.',
  description:
    'Nexlm is a peer-to-peer Stellar exchange for Nigeria. Trade XLM for Naira via bank transfer, OPay, PalmPay, Kuda and Moniepoint — every trade protected by on-chain escrow.',
  url: stripSlash(env.VITE_SITE_URL || 'https://nexlm-landing.vercel.app'),
  appUrl: stripSlash(env.VITE_APP_URL || 'https://nexlm-client.vercel.app'),
  docsUrl: stripSlash(env.VITE_DOCS_URL || 'https://nexlm-docs.vercel.app'),
  githubUrl: 'https://github.com/Nexlm',
  supportEmail: 'support@nexlm.app',
  waitlistEndpoint: env.VITE_WAITLIST_ENDPOINT || '',
};

export const appLinks = {
  register: `${site.appUrl}/register`,
  login: `${site.appUrl}/login`,
  market: `${site.appUrl}/`,
};
