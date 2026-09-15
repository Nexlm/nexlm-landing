import { ArrowRight } from 'lucide-react';
import { topFaqs } from '../../data/faqs.js';
import { Accordion } from '../ui/Accordion.jsx';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-line bg-ground py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading eyebrow="FAQ" title="Questions, answered." />
          <Button to="/faq" variant="outline" className="mt-8">
            All questions <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <Accordion items={topFaqs} />
      </Container>
    </section>
  );
}
