export default {
  slug: 'depositing-xlm-from-an-exchange',
  title: 'Depositing XLM from an exchange or wallet',
  summary: 'Move XLM into your Nexlm wallet from Binance, Bybit, Lobstr or any Stellar wallet — and avoid the common mistakes.',
  category: 'Stellar',
  readMinutes: 3,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'Find your address',
      body: ['Open Wallet → Deposit on Nexlm. Your address starts with “G” and is 56 characters long. Copy it with the copy button or scan the QR code.'],
    },
    {
      heading: 'Withdraw from the other platform',
      list: [
        'Choose XLM as the coin',
        'Choose the Stellar network (sometimes labelled XLM or Stellar Lumens)',
        'Paste your Nexlm address and double-check the first and last four characters',
        'Leave the memo empty — your Nexlm wallet is a personal address and doesn’t need one',
      ],
      callout: { tone: 'warning', text: 'Only send XLM on the Stellar network. Tokens sent on other networks cannot be recovered.' },
    },
    {
      heading: 'How long it takes',
      body: [
        'Stellar confirms in about five seconds once the other platform broadcasts the withdrawal. Exchanges sometimes hold withdrawals for their own checks, which can add minutes.',
        'Your first deposit must be at least 1 XLM if your wallet has not been activated yet — Stellar accounts need that minimum to exist.',
      ],
    },
    {
      heading: 'Deposit not showing?',
      list: [
        'Confirm the exchange marked the withdrawal as completed and copy the transaction hash',
        'Search the hash on Stellar Expert to see which address received it',
        'Refresh your Nexlm wallet page',
      ],
    },
  ],
};
