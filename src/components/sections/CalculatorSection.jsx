import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { RateCalculator } from '../widgets/RateCalculator.jsx';

const POINTS = [
  ['Traders set prices', 'Not Nexlm. The board shows the best offers first.'],
  ['No trading fees', 'What you see is what you pay, with nothing added on top.'],
  ['Indicative reference', 'The market rate comes from CoinGecko and refreshes every 5 minutes.'],
];

export function CalculatorSection() {
  return (
    <section id="calculator" className="border-b border-line py-24 sm:py-32">
      <Container className="grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Rate calculator"
            title="See what your XLM is worth in Naira."
            description="Start from today's market reference, then plug in the rate you'd accept."
          />
          <dl className="mt-10 border-t border-line">
            {POINTS.map(([title, body]) => (
              <div key={title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-semibold text-paper">{title}</dt>
                <dd className="text-soft">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <RateCalculator />
      </Container>
    </section>
  );
}
