import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero.jsx';
import { StructuredData } from '../components/seo/StructuredData.jsx';
import { Accordion } from '../components/ui/Accordion.jsx';
import { Container } from '../components/ui/Container.jsx';
import { faqCategories } from '../data/faqs.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { faqSchema } from '../lib/structuredData.js';

export default function FaqPage() {
  useDocumentTitle('FAQ', 'Answers to common questions about trading XLM for Naira on Nexlm: escrow, payment windows, KYC, fees and safety.');

  return (
    <>
      <StructuredData data={faqSchema(faqCategories.flatMap((c) => c.items))} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions." description="Can't find what you need? Email us and a human will reply." />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[14rem_1fr]">
          <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="FAQ categories">
            <ul className="flex gap-4 overflow-x-auto border-b border-line pb-4 lg:flex-col lg:gap-0 lg:border-b-0 lg:border-l lg:pb-0">
              {faqCategories.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="block whitespace-nowrap py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-moss hover:text-paper lg:pl-4">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16">
            {faqCategories.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`}>
                <h2 id={`${c.id}-title`} className="mb-6 text-3xl font-extrabold tracking-tight">
                  {c.title}
                </h2>
                <Accordion items={c.items} defaultOpen={-1} />
              </section>
            ))}
            <p className="text-soft">
              Still stuck?{' '}
              <Link to="/contact" className="link">
                Contact support
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
