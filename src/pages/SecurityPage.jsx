import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero.jsx';
import { ProofSection } from '../components/sections/ProofSection.jsx';
import { Container } from '../components/ui/Container.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { EscrowDiagram } from '../components/widgets/EscrowDiagram.jsx';
import { safetyTips, securityPillars } from '../data/security.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function SecurityPage() {
  useDocumentTitle('Escrow & security', 'How Nexlm protects every XLM trade with per-trade Stellar escrow, automatic refunds and verified traders.');

  return (
    <>
      <PageHero
        eyebrow="Security"
        title={
          <>
            Escrow you can <span className="text-gold">verify</span> yourself.
          </>
        }
        description="Designed so neither trader has to trust the other — and you don't have to take our word for it either."
      />

      <section className="border-b border-line py-20">
        <Container>
          <div className="hairline-3">
            {securityPillars.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <Icon className="h-6 w-6 text-mint" aria-hidden />
                <h2 className="mt-5 text-2xl font-bold tracking-tight">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-soft">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-ground py-20">
        <Container>
          <SectionHeading
            eyebrow="The escrow lifecycle"
            title="Lock, release, or refund — nothing else."
            description="On release, the buyer is paid and the remaining reserve merges back to the seller. On refund, everything merges back. There is no third destination."
          />
          <div className="mt-12">
            <EscrowDiagram />
          </div>
        </Container>
      </section>

      <ProofSection />

      <section className="border-b border-line py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Stay safe" title="Five habits that stop P2P scams." />
          <ol className="border-t border-line">
            {safetyTips.map((tip, i) => (
              <li key={tip} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-5">
                <span className="num text-lg font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-paper">{tip}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="border-l-2 border-ember bg-ember/[0.06] p-6">
            <h2 className="text-2xl font-bold">Think you&apos;re being scammed?</h2>
            <p className="mt-2 text-sm text-soft">
              Don&apos;t release, don&apos;t cancel on instruction, and keep chatting in the trade room. Then{' '}
              <Link to="/contact" className="link">
                contact support
              </Link>{' '}
              with your trade ID.
            </p>
          </div>
          <div className="flex gap-4 border-l-2 border-frost bg-frost/[0.06] p-6">
            <ShieldAlert className="h-6 w-6 shrink-0 text-frost" aria-hidden />
            <p className="text-sm text-soft">
              Found a vulnerability? Report it privately to{' '}
              <a className="link" href="mailto:security@nexlm.app">
                security@nexlm.app
              </a>
              . We acknowledge reports within two business days.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
