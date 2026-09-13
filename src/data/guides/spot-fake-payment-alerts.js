export default {
  slug: 'spot-fake-payment-alerts',
  title: 'How to spot fake payment alerts',
  summary: 'Fake SMS alerts and edited receipts are the most common P2P scam in Nigeria. Here is how sellers protect themselves.',
  category: 'Safety',
  readMinutes: 4,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'Why this matters',
      body: [
        'On Nexlm the XLM is protected by escrow, but the Naira side happens in your bank. A scammer’s only move is to convince you money arrived when it didn’t, so you release escrow.',
      ],
    },
    {
      heading: 'Warning signs',
      list: [
        'An SMS alert arrives but your app balance hasn’t changed',
        'The alert comes from a normal phone number instead of your bank’s sender ID',
        'The buyer pushes you to release quickly or claims “network delay”',
        'The receipt shows a different sender name from the buyer’s verified name',
        'Fonts, spacing or amounts on a receipt look slightly off',
        'The buyer asks you to “refund the extra” after sending more than the trade amount',
      ],
    },
    {
      heading: 'The only reliable check',
      body: [
        'Log into your bank or wallet app and confirm the credit appears in your transaction history and balance. Screenshots, SMS alerts and emails can all be faked.',
      ],
      callout: { tone: 'warning', text: 'If you can’t confirm the money in your app, do not release. Escrow keeps your XLM safe while you check.' },
    },
    {
      heading: 'If you suspect fraud',
      list: [
        'Don’t release and don’t cancel on the buyer’s instruction',
        'Keep all communication in the Nexlm trade chat',
        'Contact support with the trade ID so the trade can be reviewed',
      ],
    },
  ],
};
