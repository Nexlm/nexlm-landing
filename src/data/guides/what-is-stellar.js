export default {
  slug: 'what-is-stellar',
  title: 'What is Stellar, and why XLM?',
  summary: 'A plain-language introduction to the Stellar network and its native asset, and why Nexlm is built on it.',
  category: 'Stellar',
  readMinutes: 4,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'Stellar in one paragraph',
      body: [
        'Stellar is an open, public blockchain network designed for payments. Instead of mining, it reaches agreement through the Stellar Consensus Protocol, which lets transactions settle in about five seconds for a tiny fixed fee.',
      ],
    },
    {
      heading: 'What XLM is used for',
      list: [
        'Paying network fees (0.00001 XLM per operation)',
        'Meeting the minimum balance every Stellar account holds',
        'Moving value quickly between people, wallets and exchanges',
        'Bridging between other assets issued on Stellar, such as stablecoins',
      ],
    },
    {
      heading: 'Why Nexlm uses Stellar',
      body: [
        'P2P escrow needs to be fast, cheap and transparent. Stellar’s account model lets Nexlm create a dedicated escrow account per trade, disable its own key, and co-sign releases — all with native operations and no custom smart contract risk.',
        'Because every lock, release and refund is a normal Stellar transaction, anyone can verify them on a public explorer.',
      ],
    },
    {
      heading: 'Learn more',
      body: ['The Stellar Development Foundation publishes documentation at developers.stellar.org, and Stellar Expert lets you explore accounts and transactions.'],
    },
  ],
};
