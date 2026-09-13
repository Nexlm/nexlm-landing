export const faqCategories = [
  {
    id: 'basics',
    title: 'Getting started',
    items: [
      {
        question: 'What is Nexlm?',
        answer:
          'Nexlm is a peer-to-peer exchange where Nigerians buy and sell XLM (Stellar Lumens) directly with each other for Naira. Nexlm matches traders and holds the XLM in on-chain escrow; the Naira goes straight from buyer to seller.',
      },
      {
        question: 'Who can use Nexlm?',
        answer:
          'Anyone 18 or older with a Nigerian bank or mobile money account. To trade you need a verified email address and a successful BVN or NIN check.',
      },
      {
        question: 'Do I need my own Stellar wallet?',
        answer:
          'No. A Stellar wallet is created for you when you sign up. You can deposit XLM from any exchange or wallet and withdraw to any Stellar address.',
      },
      {
        question: 'Is Nexlm available on mobile?',
        answer:
          'The web app works on any phone browser. A native mobile app is on the roadmap once the core platform is stable.',
      },
    ],
  },
  {
    id: 'trading',
    title: 'Trading',
    items: [
      {
        question: 'How long do I have to pay?',
        answer:
          'Buyers have 15 minutes from the moment escrow is locked to send Naira and tap “I have paid”. If the window closes without payment, the XLM is returned to the seller automatically.',
      },
      {
        question: 'Who sets the price?',
        answer:
          'Traders do. Sellers and buyers post offers at their own Naira-per-XLM rate, and the board shows the best prices first. The market rate on our site is only a guide.',
      },
      {
        question: 'What if the seller doesn’t release my XLM?',
        answer:
          'The XLM stays locked in escrow — the seller cannot take it back once you have marked the trade as paid. Share your receipt in the chat; our dispute process lets an admin review the evidence and release the XLM to you.',
      },
      {
        question: 'Can I cancel a trade?',
        answer:
          'A buyer can cancel before marking the trade as paid, and the XLM returns to the seller. Never cancel after you have already sent money.',
      },
      {
        question: 'What is the minimum trade size?',
        answer: 'Orders start at 10 XLM. Traders can post orders of up to 100,000 XLM, subject to their balance.',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety & fees',
    items: [
      {
        question: 'Does Nexlm hold my Naira?',
        answer:
          'Never. Naira moves directly from the buyer’s account to the seller’s. Nexlm only coordinates the trade and controls the XLM escrow.',
      },
      {
        question: 'How much does it cost?',
        answer:
          'There are no trading fees. You only pay the Stellar network fee (0.00001 XLM per transaction). Sellers temporarily set aside 2 XLM per trade to open the escrow account — the unused part comes back when the trade closes.',
      },
      {
        question: 'Why do you need my BVN or NIN?',
        answer:
          'Verified identities keep scammers off the platform and are required for Naira trading. We store only a fingerprint and the last four digits of your ID number — never the full number.',
      },
      {
        question: 'How do I avoid scams?',
        answer:
          'Only release XLM after the money is in your account (not on a screenshot), keep all communication inside the trade chat, pay from an account in your own name, and never share passwords or OTPs.',
      },
    ],
  },
];

export const topFaqs = [faqCategories[0].items[0], faqCategories[1].items[0], faqCategories[1].items[2], faqCategories[2].items[1]];
