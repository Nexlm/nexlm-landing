export default {
  slug: 'withdrawing-xlm-safely',
  title: 'Withdrawing XLM safely',
  summary: 'Send XLM to another wallet or exchange without losing it to a wrong address or a missing memo.',
  category: 'Stellar',
  readMinutes: 3,
  updated: '2026-09-13',
  sections: [
    {
      heading: 'Check the destination',
      body: ['Stellar addresses start with “G”. Nexlm rejects anything that isn’t a valid Stellar public key, but it can’t tell whether a valid address belongs to you.'],
      list: ['Copy and paste — never retype addresses', 'Compare the first and last six characters after pasting', 'Send a small test amount first when using a new address'],
    },
    {
      heading: 'Memos for exchanges',
      body: [
        'Exchanges often use one shared Stellar address for all customers and tell deposits apart by memo. If the exchange shows a memo on its deposit page, you must include it or your XLM may not be credited.',
      ],
      callout: { tone: 'warning', text: 'Missing or wrong memos are the most common cause of “lost” XLM deposits on exchanges.' },
    },
    {
      heading: 'New accounts need at least 1 XLM',
      body: ['If the destination address has never been used, Stellar requires the first payment to be at least 1 XLM to create the account. Nexlm will warn you if that applies.'],
    },
    {
      heading: 'What you can withdraw',
      body: [
        'Your withdrawable balance excludes Stellar’s minimum reserve and XLM committed to your active sell orders. Cancel an order if you need those funds.',
      ],
    },
  ],
};
