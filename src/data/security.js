import { Eye, FileLock2, KeyRound, ShieldCheck, Timer, UserCheck } from 'lucide-react';

export const securityPillars = [
  {
    icon: FileLock2,
    title: 'One escrow account per trade',
    body: 'A fresh Stellar account is created for every trade and funded by the seller. Its own signing key is disabled immediately, so only the platform co-signer can move the funds — and only to the buyer or back to the seller.',
  },
  {
    icon: Eye,
    title: 'Verifiable on Stellar',
    body: 'Every lock, release and refund is a public Stellar transaction. Each trade room links straight to Stellar Expert so you can confirm it yourself.',
  },
  {
    icon: Timer,
    title: 'Automatic refunds',
    body: 'If a buyer does not pay within the 15-minute window, escrow is refunded to the seller automatically — no support ticket needed.',
  },
  {
    icon: KeyRound,
    title: 'Encrypted wallet keys',
    body: 'Wallet secret keys are encrypted with AES-256-GCM at rest and only decrypted for the instant a transaction is signed.',
  },
  {
    icon: UserCheck,
    title: 'Identity-verified traders',
    body: 'BVN/NIN verification before trading, one ID per account, and reputation scores so you can choose who you trade with.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for the unhappy path',
    body: 'Transitions are claimed atomically so a trade can never be released twice, and trades with uncertain network outcomes are reconciled against the ledger.',
  },
];

export const safetyTips = [
  'Release XLM only after the Naira shows in your bank or wallet app — screenshots can be faked.',
  'Pay from an account in your own name. Third-party payments are the most common source of disputes.',
  'Keep every conversation inside the Nexlm trade chat so it can be reviewed.',
  'Do not write “crypto”, “XLM” or “Nexlm” in your transfer narration.',
  'Nexlm staff will never ask for your password, OTP or to trade outside the platform.',
];
