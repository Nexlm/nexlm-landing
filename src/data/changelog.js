export const changelog = [
  {
    date: '2026-09-13',
    title: 'Trade reconciliation',
    tag: 'Reliability',
    items: [
      'Trades whose release or refund outcome was unknown are now settled automatically by reading the escrow’s Stellar history.',
      'Escrow addresses are saved before funds move, so every lock is traceable.',
    ],
  },
  {
    date: '2026-09-13',
    title: 'Admin tools',
    tag: 'Platform',
    items: ['Overview dashboard with 30-day volume and completion rate', 'User search, suspension and manual KYC review', 'Trade monitoring with read-only chat'],
  },
  {
    date: '2026-09-13',
    title: 'Trade rooms and escrow',
    tag: 'Trading',
    items: [
      'Per-trade Stellar escrow with lock, release and refund',
      '15-minute payment window with automatic refunds',
      'Realtime trade chat with payment proof uploads',
    ],
  },
  {
    date: '2026-09-13',
    title: 'Wallets, orders and verification',
    tag: 'Accounts',
    items: [
      'Built-in Stellar wallet with QR deposits and withdrawals',
      'Buy and sell order board sorted by best price',
      'BVN / NIN verification and payout accounts',
    ],
  },
];
