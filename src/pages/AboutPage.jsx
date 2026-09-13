import { PageHero } from '../components/layout/PageHero.jsx';
import { RoadmapSection } from '../components/sections/RoadmapSection.jsx';
import { Container } from '../components/ui/Container.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

const PRINCIPLES = [
  { title: 'Trustless by default', body: 'If a design needs you to trust a stranger — or us — with your coins, we redesign it. Escrow lives on-chain where anyone can check it.' },
  { title: 'Naira-first', body: 'We start from how people in Nigeria actually move money: transfers, OPay, PalmPay, Kuda and Moniepoint.' },
  { title: 'Stellar-native', body: 'XLM is not a side market for us. Every feature is built around Stellar’s speed, low fees and account model.' },
  { title: 'Honest pricing', body: 'No hidden spreads. Traders set rates, and the board shows the best ones first.' },
];

export default function AboutPage() {
  useDocumentTitle('About', 'Nexlm is building the Stellar-native peer-to-peer market for Nigerians to trade XLM for Naira.');

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Making XLM accessible to every Nigerian"
        description="Buy and sell in seconds, get paid in Naira, no middleman."
      />

      <section className="bg-white py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Nigeria is one of the most active crypto markets in the world, yet trading XLM for Naira still means slow exchange withdrawals, thin
              P2P liquidity where XLM is an afterthought, or risky deals in Telegram and WhatsApp groups with no protection at all.
            </p>
            <p>
              Nexlm exists to fix that. We&apos;re building a peer-to-peer market dedicated to Stellar, where every trade is backed by on-chain escrow
              and payments happen through the Naira rails people already use.
            </p>
            <p>We operate as a peer-to-peer facilitator: we never hold customer Naira, and the XLM in escrow can only ever go to the buyer or back to the seller.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-3xl bg-slate-50 p-6">
                <h2 className="font-sans text-base font-semibold text-slate-900">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <RoadmapSection />
    </>
  );
}
