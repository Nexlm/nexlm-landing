import { Check } from 'lucide-react';
import { useCases } from '../../data/useCases.js';
import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Built for" title="However you use XLM, Nexlm fits" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {useCases.map(({ icon: Icon, who, title, body, points }, i) => (
            <Reveal key={who} delay={i * 80} className="flex flex-col rounded-3xl bg-ink-900 p-8 text-white">
              <div className="flex items-center gap-2 text-sm font-medium text-brand-300">
                <Icon className="h-4 w-4" aria-hidden /> {who}
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-naira-400" aria-hidden /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
