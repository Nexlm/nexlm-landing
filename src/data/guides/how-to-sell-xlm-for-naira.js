export default {
  slug: 'how-to-sell-xlm-for-naira',
  title: 'How to sell XLM for Naira',
  summary: 'Deposit XLM, add a payout account, and get paid in Naira — without ever releasing coins before the money lands.',
  category: 'Selling',
  readMinutes: 6,
  updated: '2026-09-13',
  sections: [
    {
      heading: '1. Deposit XLM',
      body: [
        'Go to Wallet → Deposit and send XLM to your personal Stellar address, or scan the QR code. No memo is required for your Nexlm wallet.',
        'Leave a little extra: every trade temporarily sets aside 2 XLM to open its escrow account, and your wallet keeps Stellar’s minimum reserve.',
      ],
    },
    {
      heading: '2. Add payout accounts',
      body: ['In Settings → Payout accounts, add the bank or mobile wallet accounts buyers should pay into. Use accounts in your own name.'],
      list: ['Bank transfer needs the bank name, account name and 10-digit account number', 'OPay, PalmPay, Kuda and Moniepoint need the account name and number'],
    },
    {
      heading: '3. Post an offer or take a buy order',
      body: [
        'To wait for buyers, post a sell order with your amount, price per XLM, accepted payment methods and any terms. Orders stay live for 30 minutes.',
        'To sell right away, switch the market to “Sell XLM” and pick a buyer’s order. Highest prices appear first.',
      ],
    },
    {
      heading: '4. While the buyer pays',
      body: [
        'When a trade opens, your XLM moves into escrow. The buyer has 15 minutes to pay. If they don’t, the escrow refunds you automatically and your order goes back on the board.',
      ],
    },
    {
      heading: '5. Confirm, then release',
      body: ['When the buyer marks the trade as paid, open your banking app and check the credit yourself.'],
      list: [
        'Confirm the amount matches exactly',
        'Confirm the sender name matches the buyer’s verified name',
        'Wait for the money to show in your balance, not just an SMS or screenshot',
      ],
      callout: {
        tone: 'warning',
        text: 'Releasing is final. If the payment hasn’t arrived, don’t release — tell the buyer in chat and wait.',
      },
    },
    {
      heading: 'Pricing tips',
      body: [
        'Check the market reference on the rate calculator and the best offers on the board. Slightly better prices fill faster; very high prices tend to expire unmatched.',
      ],
    },
  ],
};
