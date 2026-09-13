import bvnVsNin from './bvn-vs-nin-verification.js';
import depositing from './depositing-xlm-from-an-exchange.js';
import escrowExplained from './escrow-explained.js';
import howToBuy from './how-to-buy-xlm-with-naira.js';
import howToSell from './how-to-sell-xlm-for-naira.js';
import paymentWindow from './payment-window-and-auto-refunds.js';
import fakeAlerts from './spot-fake-payment-alerts.js';
import chatSafety from './staying-safe-in-trade-chat.js';
import reserves from './understanding-stellar-reserves.js';
import whatIsStellar from './what-is-stellar.js';
import withdrawing from './withdrawing-xlm-safely.js';
import offerTerms from './writing-good-offer-terms.js';

export const guides = [
  howToBuy,
  howToSell,
  fakeAlerts,
  paymentWindow,
  bvnVsNin,
  depositing,
  withdrawing,
  reserves,
  offerTerms,
  chatSafety,
  whatIsStellar,
  escrowExplained,
];

export const guideCategories = ['All', ...new Set(guides.map((g) => g.category))];

export const getGuide = (slug) => guides.find((g) => g.slug === slug) ?? null;

/** Guides in the same category first, then others, excluding the current one. */
export function relatedGuides(guide, count = 3) {
  const others = guides.filter((g) => g.slug !== guide.slug);
  return [...others.filter((g) => g.category === guide.category), ...others.filter((g) => g.category !== guide.category)].slice(0, count);
}
