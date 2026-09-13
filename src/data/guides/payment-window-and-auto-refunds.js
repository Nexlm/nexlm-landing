export default {
  slug: 'payment-window-and-auto-refunds',
  title: 'The payment window and automatic refunds',
  summary: 'What happens at each minute of a trade, when the timer stops, and how unpaid trades are refunded without anyone lifting a finger.',
  category: 'Buying',
  readMinutes: 3,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'When the timer starts',
      body: ['The 15-minute window starts the moment the seller’s XLM is confirmed in escrow — not when you click the offer. The trade room shows the countdown.'],
    },
    {
      heading: 'When the timer stops',
      body: [
        'Tapping “I have paid” stops the countdown for good. From then on, the trade cannot be refunded automatically; it closes when the seller releases the XLM. If the seller is unresponsive, contact support with the trade ID — in-app disputes are coming in Phase 2.',
      ],
      callout: { tone: 'warning', text: 'Tap “I have paid” only after your transfer has gone through.' },
    },
    {
      heading: 'If the window closes',
      body: [
        'If the buyer hasn’t marked the trade as paid when time runs out, Nexlm refunds the escrow to the seller automatically, usually within a few seconds. The seller’s order goes back on the market if it hasn’t expired.',
      ],
    },
    {
      heading: 'Paid at the last second?',
      body: [
        'If you sent the money but the window closed before you tapped “I have paid”, tell the seller in the trade chat straight away and contact support with the trade ID and your receipt.',
      ],
    },
  ],
};
