import { useState } from 'react';
import { buySteps, sellSteps } from '../../data/steps.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function StepList({ steps }) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 80} className="relative rounded-3xl border border-slate-200 bg-white p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-display text-lg font-semibold text-brand-600">
            {i + 1}
          </span>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function HowItWorks() {
  const [side, setSide] = useState('buy');

  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, fully protected"
          description="Whether you're buying or selling, the XLM is in escrow before any Naira moves."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200" role="tablist">
            {[
              { id: 'buy', label: 'Buying XLM' },
              { id: 'sell', label: 'Selling XLM' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={side === tab.id}
                onClick={() => setSide(tab.id)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                  side === tab.id ? 'bg-ink-900 text-white' : 'text-slate-500 hover:text-slate-900',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <StepList steps={side === 'buy' ? buySteps : sellSteps} />
        </div>
      </Container>
    </section>
  );
}
