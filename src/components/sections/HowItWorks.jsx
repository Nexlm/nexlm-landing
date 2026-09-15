import { useState } from 'react';
import { buySteps, sellSteps } from '../../data/steps.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function StepList({ steps }) {
  return (
    <ol className="grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal
          as="li"
          key={step.title}
          delay={i * 80}
          className={cn('border-b border-line py-8 pr-6', i > 0 && 'lg:border-l lg:border-line lg:pl-6', i % 2 === 1 && 'md:border-l md:pl-6 lg:pl-6')}
        >
          <span className="num text-sm font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-paper">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-soft">{step.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function HowItWorks() {
  const [side, setSide] = useState('buy');

  return (
    <section id="how-it-works" className="border-b border-line py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps. The XLM is locked before any Naira moves."
          />
          <div
            className="inline-flex shrink-0 rounded border border-line p-1"
            role="tablist"
            aria-label="Choose buying or selling steps"
            onKeyDown={(e) => {
              if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
              e.preventDefault();
              const next = side === 'buy' ? 'sell' : 'buy';
              setSide(next);
              e.currentTarget.querySelector(`[data-tab="${next}"]`)?.focus();
            }}
          >
            {[
              { id: 'buy', label: 'Buying XLM' },
              { id: 'sell', label: 'Selling XLM' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                data-tab={tab.id}
                tabIndex={side === tab.id ? 0 : -1}
                aria-selected={side === tab.id}
                onClick={() => setSide(tab.id)}
                className={cn(
                  'rounded-[4px] px-5 py-2 text-sm font-semibold transition-colors',
                  side === tab.id ? (tab.id === 'buy' ? 'bg-leaf text-ink' : 'bg-ember text-ink') : 'text-moss hover:text-paper',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <StepList steps={side === 'buy' ? buySteps : sellSteps} />
        </div>
      </Container>
    </section>
  );
}
