import { roadmap } from '../../data/roadmap.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

const STATUS_STYLES = {
  'In progress': 'bg-naira-500/15 text-naira-300',
  Next: 'bg-brand-500/15 text-brand-300',
  Planned: 'bg-white/10 text-slate-300',
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-ink-950 py-20 sm:py-28">
      <Container>
        <SectionHeading dark eyebrow="Roadmap" title="Where Nexlm is headed" description="We're shipping in public, one phase at a time." />
        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {roadmap.map((phase) => (
            <li key={phase.phase} className="rounded-3xl border border-white/10 bg-ink-900 p-7">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-400">{phase.phase}</p>
                <span className={cn('rounded-full px-2.5 py-1 text-xs font-medium', STATUS_STYLES[phase.status])}>{phase.status}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{phase.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden />
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
