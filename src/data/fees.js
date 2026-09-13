export const feeTable = [
  { item: 'Opening an account', cost: 'Free', note: 'Includes your Stellar wallet' },
  { item: 'Buying XLM', cost: 'Free', note: 'You pay the seller’s price, nothing on top' },
  { item: 'Selling XLM', cost: 'Free', note: 'No commission on the Naira you receive' },
  { item: 'Stellar network fee', cost: '0.00001 XLM', note: 'Per transaction, paid to the Stellar network' },
  { item: 'Escrow account reserve', cost: '2 XLM (refundable)', note: 'Set aside by the seller while a trade is open; leftovers return on close' },
  { item: 'Depositing XLM', cost: 'Free', note: 'Your sending wallet may charge its own fee' },
  { item: 'Withdrawing XLM', cost: '0.00001 XLM', note: 'Network fee only' },
];
