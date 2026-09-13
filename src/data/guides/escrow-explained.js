export default {
  slug: 'escrow-explained',
  title: 'How Nexlm escrow works on Stellar (technical)',
  summary: 'The exact Stellar operations behind locking, releasing and refunding a trade, for readers who want to verify the design.',
  category: 'Stellar',
  readMinutes: 6,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'Lock',
      body: ['When a trade opens, Nexlm builds one transaction with two operations and submits it on the seller’s behalf:'],
      list: [
        'createAccount — the seller funds a newly generated escrow account with the trade amount + 2 XLM',
        'setOptions (source: escrow) — adds the platform key as a signer with weight 1 and sets the escrow’s own master key weight to 0',
      ],
      ordered: true,
    },
    {
      heading: 'Why the escrow key is disabled',
      body: [
        'Both operations succeed or fail together. After the transaction lands, the escrow’s original secret key has no signing power, so nobody holding it can move the funds. The escrow address is recorded on the trade before submission so the funds are always traceable.',
      ],
    },
    {
      heading: 'Release',
      list: [
        'payment — trade amount from escrow to the buyer (or createAccount if the buyer’s account is new)',
        'setOptions — removes the platform signer',
        'accountMerge — sends the remaining balance back to the seller and deletes the escrow account',
      ],
      ordered: true,
    },
    {
      heading: 'Refund',
      list: ['setOptions — removes the platform signer', 'accountMerge — returns everything to the seller'],
      ordered: true,
    },
    {
      heading: 'Safety properties',
      list: [
        'Funds can only reach the buyer or the seller — there is no operation paying anyone else',
        'State changes are claimed atomically in the database, so a trade cannot be released and refunded concurrently',
        'If Horizon times out, the trade is reconciled later by reading the escrow account’s on-chain history',
        'Each operation carries a memo (“nexlm escrow lock/release/refund”) so transactions are easy to identify',
      ],
    },
  ],
};
