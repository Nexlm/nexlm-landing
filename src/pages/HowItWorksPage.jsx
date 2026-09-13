import { AlertTriangle } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero.jsx';
import { CtaSection } from '../components/sections/CtaSection.jsx';
import { StepList } from '../components/sections/HowItWorks.jsx';
import { Container } from '../components/ui/Container.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { EscrowDiagram } from '../components/widgets/EscrowDiagram.jsx';
import { buySteps, sellSteps } from '../data/steps.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

const TRADE_STATES = [
  { name: 'Awaiting payment', body: 'Escrow is funded. The buyer has 15 minutes to pay and tap “I have paid”.' },
  { name: 'Paid', body: 'The buyer says the Naira is sent. The timer stops — the seller checks their account.' },
  { name: 'Completed', body: 'The seller released escrow and the XLM is in the buyer’s wallet.' },
  { name: 'Cancelled', body: 'The buyer cancelled or the window expired. XLM returned to the seller automatically.' },
];

export default function HowItWorksPage() {
  useDocumentTitle('How it works', 'Step-by-step: how buying and selling XLM for Naira works on Nexlm, from escrow lock to release.');

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From offer to XLM in your wallet"
        description="Nexlm connects buyers and sellers directly. We lock the XLM, you move the Naira, and the escrow does the rest."
      />

      <section className="bg-white py-20">
        <Container>
          <SectionHeading align="left" eyebrow="Buying" title="Buy XLM with Naira" />
          <div className="mt-10">
            <StepList steps={buySteps} />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading align="left" eyebrow="Selling" title="Sell XLM for Naira" />
          <div className="mt-10">
            <StepList steps={sellSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" dark eyebrow="Under the hood" title="What happens to the money" />
            <dl className="mt-10 space-y-6">
              {TRADE_STATES.map((s) => (
                <div key={s.name} className="border-l-2 border-brand-500 pl-5">
                  <dt className="font-semibold text-white">{s.name}</dt>
                  <dd className="mt-1 text-sm text-slate-400">{s.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <EscrowDiagram />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="flex gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
            <AlertTriangle className="h-6 w-6 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">The golden rule for sellers</p>
              <p className="mt-1 text-sm">
                Only release XLM after the Naira has arrived in your account. Stellar transactions are final and cannot be reversed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
