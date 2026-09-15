import { useCases } from '../../data/useCases.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function UseCases() {
  return (
    <section id="use-cases" className="border-b border-line bg-ground py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Built for" title="However you use XLM, Nexlm fits." />
        <div className="mt-14 grid border-t border-line lg:grid-cols-3">
          {useCases.map(({ icon: Icon, who, title, body, points }, i) => (
            <Reveal key={who} delay={i * 80} className={cn('flex flex-col border-b border-line py-10 lg:pr-8', i > 0 && 'lg:border-l lg:border-line lg:pl-8')}>
              <p className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-mint">
                <Icon className="h-4 w-4" aria-hidden /> {who}
              </p>
              <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight">{title}</h3>
              <p className="mt-4 text-soft">{body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm text-paper">
                {points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {p}
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
