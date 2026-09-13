export default {
  slug: 'how-to-buy-xlm-with-naira',
  title: 'How to buy XLM with Naira on Nexlm',
  summary: 'A step-by-step walkthrough of your first purchase, from choosing an offer to seeing XLM land in your wallet.',
  category: 'Buying',
  readMinutes: 5,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'Before you start',
      body: ['You need a Nexlm account with a verified email address and a completed BVN or NIN check. Verification usually takes a few minutes.'],
      list: ['Your Naira should be in an account in your own name', 'Keep your banking app open so you can pay quickly', 'Decide how much XLM you want and the most you will pay per XLM'],
    },
    {
      heading: '1. Choose an offer',
      body: [
        'Open the P2P Market and stay on the “Buy XLM” tab. Offers are sorted with the cheapest price first.',
        'Filter by the payment method you will use and a minimum amount. Before picking an offer, look at the seller’s completed trades, completion rate and verified badge, and read their terms.',
      ],
    },
    {
      heading: '2. Open the trade',
      body: [
        'Tap “Buy XLM”, pick your payment method and confirm. Nexlm immediately moves the seller’s XLM into a brand-new Stellar escrow account.',
        'The trade room opens with the seller’s payout details and a 15-minute countdown. The countdown only starts once escrow is locked.',
      ],
      callout: { tone: 'info', text: 'You can check the escrow yourself: the trade room links to the lock transaction on Stellar Expert.' },
    },
    {
      heading: '3. Pay the seller',
      body: ['Send the exact Naira amount shown to the account in the trade room. Copy the account number with the copy button to avoid typos.'],
      list: [
        'Pay from an account whose name matches your Nexlm identity',
        'Do not mention crypto, XLM or Nexlm in the narration',
        'Do not split the payment unless the seller agrees in chat',
      ],
    },
    {
      heading: '4. Mark as paid and share proof',
      body: [
        'Tap “I have paid”. This stops the countdown and tells the seller to check their account. Upload your transfer receipt in the chat — it speeds things up and protects you if anything goes wrong.',
      ],
      callout: { tone: 'warning', text: 'Never tap “I have paid” before the money has actually left your account. False payment claims get accounts suspended.' },
    },
    {
      heading: '5. Receive your XLM',
      body: [
        'Once the seller confirms the Naira has arrived, they release escrow. The XLM reaches your Nexlm wallet in about five seconds, and both parties see the release transaction.',
        'If the seller goes quiet after you paid, stay in the chat and keep your receipt. The XLM stays locked — the seller cannot take it back.',
      ],
    },
  ],
};
