export const comparisonColumns = ['Nexlm', 'Telegram / WhatsApp OTC', 'Generic P2P platforms'];

export const comparisonRows = [
  { label: 'Escrow protection', values: ['On-chain, per trade', 'None — you trust a stranger', 'Custodial, off-chain'] },
  { label: 'Verify funds before paying', values: ['Yes, on Stellar Expert', 'No', 'No'] },
  { label: 'XLM liquidity focus', values: ['XLM is the only asset', 'Varies', 'XLM is a side market'] },
  { label: 'Nigerian payment methods', values: ['Bank, OPay, PalmPay, Kuda, Moniepoint', 'Whatever the seller asks', 'Varies by region'] },
  { label: 'Trading fee', values: ['None', 'Hidden in the rate', 'Often a maker/taker fee'] },
  { label: 'Settlement time', values: ['~5 seconds after release', 'Manual', 'Minutes to hours'] },
];
