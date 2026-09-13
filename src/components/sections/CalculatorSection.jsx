import { Check } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { RateCalculator } from '../widgets/RateCalculator.jsx';

const POINTS = [
  'Prices are set by traders, not by Nexlm',
  'The board always shows the best offers first',
  'What you see is what you pay — no trading fees on top',
];

export function CalculatorSection() {
  return (
    <section id="calculator" className="bg-slate-50 py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Rate calculator"
            title="See what your XLM is worth in Naira"
            description="Start from today's market reference, then plug in the rate you'd accept. Real offers on Nexlm can be above or below it."
          />
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-naira-500" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <RateCalculator />
      </Container>
    </section>
  );
}
