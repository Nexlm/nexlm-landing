const env = import.meta.env ?? {};

export const site = {
  name: 'Nexlm',
  tagline: 'Buy and sell XLM for Naira, peer to peer.',
  description:
    'Nexlm is a peer-to-peer Stellar exchange for Nigeria. Trade XLM for Naira via bank transfer, OPay, PalmPay, Kuda and Moniepoint — every trade protected by on-chain escrow.',
  url: env.VITE_SITE_URL || 'https://nexlm.app',
  appUrl: env.VITE_APP_URL || 'https://app.nexlm.app',
  docsUrl: env.VITE_DOCS_URL || 'https://docs.nexlm.app',
  githubUrl: 'https://github.com/Nexlm',
  supportEmail: 'support@nexlm.app',
  waitlistEndpoint: env.VITE_WAITLIST_ENDPOINT || '',
};

export const appLinks = {
  register: `${site.appUrl}/register`,
  login: `${site.appUrl}/login`,
  market: `${site.appUrl}/`,
};
