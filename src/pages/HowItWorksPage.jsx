import { TriangleAlert } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero.jsx';
import { CtaSection } from '../components/sections/CtaSection.jsx';
import { StepList } from '../components/sections/HowItWorks.jsx';
import { Container } from '../components/ui/Container.jsx';
import { ScreenFrame } from '../components/ui/ScreenFrame.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { EscrowDiagram } from '../components/widgets/EscrowDiagram.jsx';
import { buySteps, sellSteps } from '../data/steps.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

const TRADE_STATES = [
  { name: 'Awaiting payment', body: 'Escrow is funded. The buyer has 15 minutes to pay and tap “I have paid”.', tone: 'text-gold' },
  { name: 'Paid', body: 'The buyer says the Naira is sent. The timer stops — the seller checks their account.', tone: 'text-frost' },
  { name: 'Completed', body: 'The seller released escrow and the XLM is in the buyer’s wallet.', tone: 'text-mint' },
  { name: 'Cancelled', body: 'The buyer cancelled or the window expired. XLM returned to the seller automatically.', tone: 'text-moss' },
];

export default function HowItWorksPage() {
  useDocumentTitle('How it works', 'Step-by-step: how buying and selling XLM for Naira works on Nexlm, from escrow lock to release.');

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From offer to XLM in your wallet."
        description="Nexlm connects buyers and sellers directly. We lock the XLM, you move the Naira, and the escrow does the rest."
      />

      <section className="border-b border-line py-20">
        <Container>
          <SectionHeading eyebrow="Buying" title="Buy XLM with Naira" />
          <div className="mt-12">
            <StepList steps={buySteps} />
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-ground py-20">
        <Container>
          <SectionHeading eyebrow="Selling" title="Sell XLM for Naira" />
          <div className="mt-12">
            <StepList steps={sellSteps} />
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="Trade statuses" title="What happens to the money" />
            <dl className="mt-10 border-t border-line">
              {TRADE_STATES.map((s) => (
                <div key={s.name} className="border-b border-line py-5">
                  <dt className={`font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${s.tone}`}>{s.name}</dt>
                  <dd className="mt-2 text-soft">{s.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ScreenFrame
            src="/screens/trade.png"
            alt="A live Nexlm trade room awaiting payment, with the seller's payout details and chat"
            url="app.nexlm · Trade room"
            crop="1440 / 900"
            height={900}
          />
        </Container>
      </section>

      <section className="border-b border-line bg-ground py-20">
        <Container>
          <EscrowDiagram />
          <div className="mt-12 flex gap-4 border-l-2 border-gold bg-gold/[0.06] p-5">
            <TriangleAlert className="h-6 w-6 shrink-0 text-gold" aria-hidden />
            <div>
              <p className="font-semibold text-paper">The golden rule for sellers</p>
              <p className="mt-1 text-sm text-soft">Only release XLM after the Naira has arrived in your account. Stellar transactions are final.</p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
