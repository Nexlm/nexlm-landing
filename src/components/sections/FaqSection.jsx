import { ArrowRight } from 'lucide-react';
import { topFaqs } from '../../data/faqs.js';
import { Accordion } from '../ui/Accordion.jsx';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-3">
        <div>
          <SectionHeading align="left" eyebrow="FAQ" title="Questions, answered" />
          <Button to="/faq" variant="outlineDark" className="mt-8">
            All questions <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="lg:col-span-2">
          <Accordion items={topFaqs} />
        </div>
      </Container>
    </section>
  );
}
