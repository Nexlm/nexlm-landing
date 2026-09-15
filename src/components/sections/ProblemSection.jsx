import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

const OPTIONS = [
  { name: 'Big exchanges', body: 'Thin Naira on-ramps, withdrawal delays, and XLM treated as an afterthought.', verdict: 'slow' },
  { name: 'Generic P2P apps', body: 'XLM order books are shallow — Stellar is a side market.', verdict: 'illiquid' },
  { name: 'Telegram & WhatsApp', body: 'Fast and local, with no escrow when someone disappears with your ₦59,500.', verdict: 'unsafe' },
];

export function ProblemSection() {
  return (
    <section id="problem" className="border-b border-line py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              Too many trades still run on <span className="text-gold">trust</span>.
            </>
          }
          description="Send the Naira first, and the other side decides whether you ever see your XLM. Every existing way to swap XLM for Naira costs you something."
        />
        <div className="border-t border-line">
          {OPTIONS.map((o, i) => (
            <Reveal key={o.name} delay={i * 90} className="grid items-baseline gap-3 border-b border-line py-7 sm:grid-cols-[13rem_1fr_auto] sm:gap-6">
              <h3 className="text-2xl font-bold tracking-tight">{o.name}</h3>
              <p className="text-soft">{o.body}</p>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ember">{o.verdict}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
