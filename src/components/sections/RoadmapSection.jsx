import { roadmap } from '../../data/roadmap.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

const STATUS_STYLES = {
  'In progress': 'bg-mint/[0.12] text-mint',
  Next: 'bg-gold/[0.12] text-gold',
  Planned: 'bg-moss/15 text-soft',
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="border-b border-line bg-ground py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Roadmap" title="Where Nexlm is headed." description="Shipping in public, one phase at a time." />
        <ol className="mt-14 border-t border-line">
          {roadmap.map((phase) => (
            <li key={phase.phase} className="grid gap-6 border-b border-line py-10 lg:grid-cols-[16rem_1fr]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-moss">{phase.phase}</p>
                <h3 className="mt-2 text-4xl font-extrabold tracking-tight">{phase.title}</h3>
                <span className={cn('mt-3 inline-block rounded-[3px] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em]', STATUS_STYLES[phase.status])}>
                  {phase.status}
                </span>
              </div>
              <ul className="grid content-start gap-x-8 gap-y-3 sm:grid-cols-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-3 text-soft">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-line" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
