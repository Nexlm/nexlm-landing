import { site } from '../../config/site.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

const STATS = [
  { value: '500+', label: 'commits across 3 open repositories' },
  { value: '65/65', label: 'end-to-end checks on Stellar testnet', tone: 'text-mint' },
  { value: '~5s', label: "from release to XLM in the buyer's wallet", tone: 'text-gold' },
  { value: '₦0', label: 'trading fees for buyers and sellers' },
  { value: '90+', label: 'unit tests across the app and this site' },
  { value: '0.00001', label: 'XLM Stellar network fee per operation' },
];

export function StatsSection() {
  return (
    <section id="built" className="glow-leaf border-b border-line py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Already built · Phase 1" title="Not a deck. Shipping code." />
          <a href={site.githubUrl} target="_blank" rel="noreferrer" className="link shrink-0 font-mono text-sm">
            github.com/Nexlm →
          </a>
        </div>
        <dl className="hairline-3 mt-14">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className={cn('font-display text-6xl font-extrabold tracking-tight tabular-nums', s.tone ?? 'text-paper')}>{s.value}</dt>
              <dd className="mt-3 text-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
