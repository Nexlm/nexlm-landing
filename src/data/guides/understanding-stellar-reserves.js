export default {
  slug: 'understanding-stellar-reserves',
  title: 'Understanding Stellar reserves and the 2 XLM escrow buffer',
  summary: 'Why your wallet can’t spend every last XLM, and where the 2 XLM set aside for each trade goes.',
  category: 'Stellar',
  readMinutes: 4,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'The base reserve',
      body: [
        'Stellar requires every account to hold a minimum balance so the ledger isn’t filled with empty accounts. The base reserve is 0.5 XLM, and an account needs two base reserves (1 XLM) just to exist.',
        'Each extra entry an account owns — a trustline, an offer or an additional signer — adds another 0.5 XLM to its minimum balance.',
      ],
    },
    {
      heading: 'What “Available” means in your wallet',
      body: ['Your Nexlm wallet shows three numbers:'],
      list: [
        'Total balance — everything the account holds',
        'Available — total minus Stellar’s minimum balance and a tiny fee buffer',
        'Withdrawable — available minus XLM committed to your active sell orders',
      ],
    },
    {
      heading: 'Why each trade sets aside 2 XLM',
      body: [
        'Every trade opens a fresh escrow account. That account needs 1 XLM to exist and another 0.5 XLM for the platform co-signer entry, plus a little for transaction fees.',
        'So the seller funds the escrow with the trade amount plus 2 XLM. When the trade completes or is cancelled, the escrow account is merged back into the seller’s wallet, returning whatever wasn’t spent on fees — usually almost all of it.',
      ],
      callout: { tone: 'info', text: 'Network fees are 0.00001 XLM per operation, so a full trade typically costs the seller well under 0.001 XLM.' },
    },
  ],
};
