import { BadgeCheck, Banknote, Gauge, Lock, MessagesSquare, Wallet } from 'lucide-react';

export const features = [
  {
    icon: Lock,
    title: 'On-chain escrow for every trade',
    body: 'Each trade gets its own Stellar escrow account. Funds are visible on Stellar Expert and can only move to the buyer or back to the seller.',
  },
  {
    icon: Banknote,
    title: 'Naira-first payments',
    body: 'Built around how Nigerians actually pay: bank transfer, OPay, PalmPay, Kuda and Moniepoint. Nexlm never touches your Naira.',
  },
  {
    icon: Gauge,
    title: 'Settles in seconds',
    body: 'Stellar confirms transactions in 3–5 seconds for a network fee of 0.00001 XLM. No waiting hours for withdrawals.',
  },
  {
    icon: MessagesSquare,
    title: 'Trade chat with receipts',
    body: 'Talk to your counterparty in real time and attach payment proof. The full history is kept in case anything needs review.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified traders only',
    body: 'Everyone trading Naira passes a BVN or NIN check. See completed trades and completion rate before you trade.',
  },
  {
    icon: Wallet,
    title: 'A Stellar wallet built in',
    body: 'Sign up and get a Stellar wallet instantly. Deposit by QR code, withdraw to any Stellar address, and track every movement.',
  },
];
