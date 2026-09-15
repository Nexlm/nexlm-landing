import { ArrowRight } from 'lucide-react';
import { guides } from '../../data/guides/index.js';
import { GuideCard } from '../guides/GuideCard.jsx';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

const FEATURED = ['how-to-buy-xlm-with-naira', 'how-to-sell-xlm-for-naira', 'spot-fake-payment-alerts'];

export function GuidesPreview() {
  const featured = FEATURED.map((slug) => guides.find((g) => g.slug === slug)).filter(Boolean);

  return (
    <section id="guides" className="border-b border-line py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Guides" title="New to P2P? Start here." />
          <Button to="/guides" variant="outline" className="shrink-0">
            All guides <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-14 grid border-t border-line md:grid-cols-3">
          {featured.map((guide, i) => (
            <GuideCard key={guide.slug} guide={guide} divided={i > 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
