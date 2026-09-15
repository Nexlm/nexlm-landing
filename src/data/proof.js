/**
 * Real Stellar testnet transactions produced by Nexlm's escrow during
 * end-to-end runs. Each links to Stellar Expert so anyone can verify it.
 */
export const proofTransactions = [
  {
    kind: 'Lock',
    tone: 'gold',
    hash: 'a6865b8a0bed20a297eed8754bbe73d90ccc98fde3e571c90244571a4dd1e462',
    detail: '250 XLM + 2 XLM reserve into a new escrow account',
  },
  {
    kind: 'Release',
    tone: 'mint',
    hash: '13521d4787f0f1ceae6406c522ecde70a898041ba7f3996bfa52d534d5fe7abc',
    detail: '100 XLM paid to the buyer, reserve merged back to the seller',
  },
  {
    kind: 'Refund',
    tone: 'frost',
    hash: '8acac8dd815f050e781e3f735e9ec9136d5674cdc54c738bf68a1d74ddd22a9a',
    detail: 'Unpaid trade — escrow merged back to the seller',
  },
  {
    kind: 'Withdraw',
    tone: 'soft',
    hash: '2639d27c46ca2dbfda2d8a1a80e2b03673c2cf7792b1a86b9ca88274d3bf0a7a',
    detail: '5 XLM to an external wallet for a 0.00001 XLM fee',
  },
];

export const explorerTx = (hash) => `https://stellar.expert/explorer/testnet/tx/${hash}`;
