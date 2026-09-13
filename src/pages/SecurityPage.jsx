import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero.jsx';
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
        title="Escrow you can verify yourself"
        description="Nexlm is designed so neither trader has to trust the other — and you don't have to take our word for it either."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityPillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl border border-slate-200 p-7">
                <Icon className="h-7 w-7 text-brand-600" aria-hidden />
                <h2 className="mt-5 font-sans text-lg font-semibold text-slate-900">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            dark
            eyebrow="The escrow lifecycle"
            title="Lock, release, or refund — nothing else"
            description="The escrow account is created and locked in one atomic Stellar transaction. On release, the buyer is paid and the remaining reserve merges back to the seller. On refund, everything merges back. There is no third destination."
          />
          <EscrowDiagram />
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <SectionHeading align="left" eyebrow="Stay safe" title="Five habits that stop P2P scams" />
          <ol className="space-y-4 lg:col-span-2">
            {safetyTips.map((tip, i) => (
              <li key={tip} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <span className="font-display text-2xl font-semibold text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-slate-700">{tip}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="space-y-4">
          <div className="flex flex-col gap-4 rounded-3xl bg-ink-900 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-sans text-lg font-semibold text-white">Think you&apos;re being scammed?</h2>
              <p className="mt-1 text-sm text-slate-400">
                Don&apos;t release, don&apos;t cancel on instruction, and keep chatting in the trade room. Then contact support with your trade ID.
              </p>
            </div>
            <Link to="/contact" className="shrink-0 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-ink-900 hover:bg-slate-100">
              Contact support
            </Link>
          </div>
          <div className="flex gap-4 rounded-3xl border border-slate-200 p-6">
            <ShieldAlert className="h-6 w-6 shrink-0 text-brand-600" aria-hidden />
            <p className="text-sm text-slate-600">
              Found a vulnerability? Please report it privately to <a className="font-medium text-brand-700 underline" href="mailto:security@nexlm.app">security@nexlm.app</a> before
              disclosing it publicly. We&apos;ll acknowledge reports within two business days.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
