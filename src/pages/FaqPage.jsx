import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero.jsx';
import { Accordion } from '../components/ui/Accordion.jsx';
import { Container } from '../components/ui/Container.jsx';
import { faqCategories } from '../data/faqs.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function FaqPage() {
  useDocumentTitle('FAQ', 'Answers to common questions about trading XLM for Naira on Nexlm: escrow, payment windows, KYC, fees and safety.');

  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" description="Can't find what you need? Email us and a human will reply." />
      <section className="bg-slate-50 py-20">
        <Container className="grid gap-12 lg:grid-cols-4">
          <nav className="lg:sticky lg:top-24 lg:self-start" aria-label="FAQ categories">
            <ul className="flex gap-2 overflow-x-auto lg:flex-col">
              {faqCategories.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-14 lg:col-span-3">
            {faqCategories.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`}>
                <h2 id={`${c.id}-title`} className="mb-5 text-2xl font-semibold text-slate-900">
                  {c.title}
                </h2>
                <Accordion items={c.items} defaultOpen={-1} />
              </section>
            ))}
            <p className="text-sm text-slate-600">
              Still stuck? <Link to="/contact" className="font-medium text-brand-700 underline">Contact support</Link>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
