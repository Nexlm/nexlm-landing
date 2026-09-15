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
      <PageHero eyebrow="Glossary" title="Stellar and P2P terms, explained." />
      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-moss" aria-hidden />
            <input
              id="glossary-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms"
              aria-label="Search glossary"
              className="field h-12 pl-12"
            />
          </div>
          <dl className="mt-10 border-t border-line">
            {results.map((entry) => (
              <div key={entry.term} id={entry.term.toLowerCase().replace(/\s+/g, '-')} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <dt className="font-mono text-sm font-semibold text-gold">{entry.term}</dt>
                <dd className="leading-relaxed text-soft">{entry.definition}</dd>
              </div>
            ))}
          </dl>
          {results.length === 0 && <p className="mt-10 text-soft">No terms match “{query}”.</p>}
        </Container>
      </section>
    </>
  );
}
