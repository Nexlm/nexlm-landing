import { Briefcase, LineChart, Send } from 'lucide-react';

export const useCases = [
  {
    icon: Send,
    who: 'Sending money abroad',
    title: 'Buy XLM with Naira in minutes',
    body: 'Top up with a bank transfer, receive XLM in seconds and send it anywhere Stellar reaches — without waiting on card limits or exchange deposit queues.',
    points: ['Pay with the account you already use', 'Seller’s XLM locked before you pay', 'Withdraw to any Stellar address'],
  },
  {
    icon: Briefcase,
    who: 'Earning in XLM',
    title: 'Turn Stellar earnings into spendable Naira',
    body: 'Freelancers and builders paid in XLM can cash out straight to OPay, PalmPay or their bank — no detours through foreign exchanges.',
    points: ['Set your own Naira price', 'Get paid into your saved accounts', 'Automatic refund if a buyer disappears'],
  },
  {
    icon: LineChart,
    who: 'Active traders',
    title: 'Run multiple offers with a reputation that shows',
    body: 'Post buy and sell orders side by side, track every trade and build a completion rate other traders can trust.',
    points: ['Up to 10 active orders', 'Live order and trade updates', 'Public trader profile'],
  },
];
