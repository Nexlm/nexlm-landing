import { Search } from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { glossary } from '../data/glossary.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { filterGlossary } from '../lib/search.js';

export default function GlossaryPage() {
  useDocumentTitle('Glossary', 'Plain-language definitions of Stellar, P2P trading and Nexlm terms.');
  const [query, setQuery] = useState('');
  const results = filterGlossary(glossary, query);

  return (
    <>
      <PageHero eyebrow="Glossary" title="Stellar and P2P terms, explained" />
      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms"
              aria-label="Search glossary"
              className="h-12 w-full rounded-full border border-slate-300 pl-12 pr-5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
          </div>
          <dl className="mt-10 divide-y divide-slate-100">
            {results.map((entry) => (
              <div key={entry.term} id={entry.term.toLowerCase().replace(/\s+/g, '-')} className="py-5">
                <dt className="font-semibold text-slate-900">{entry.term}</dt>
                <dd className="mt-1 leading-relaxed text-slate-600">{entry.definition}</dd>
              </div>
            ))}
          </dl>
          {results.length === 0 && <p className="mt-10 text-center text-slate-500">No terms match “{query}”.</p>}
        </Container>
      </section>
    </>
  );
}
