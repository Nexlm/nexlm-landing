import { Search } from 'lucide-react';
import { useState } from 'react';
import { GuideCard } from '../components/guides/GuideCard.jsx';
import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { guideCategories, guides } from '../data/guides/index.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { cn } from '../lib/cn.js';
import { searchGuides } from '../lib/search.js';

export default function GuidesPage() {
  useDocumentTitle('Guides', 'Practical guides for buying and selling XLM for Naira safely on Nexlm.');
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const inCategory = category === 'All' ? guides : guides.filter((g) => g.category === category);
  const visible = searchGuides(inCategory, query);

  return (
    <>
      <PageHero eyebrow="Guides" title="Learn to trade XLM safely." description="Short, practical guides for your first trade and beyond." />
      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Guide categories">
              {guideCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={category === c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    'rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors',
                    category === c ? 'border-gold bg-gold/10 text-gold' : 'border-line text-moss hover:text-paper',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative lg:w-80">
              <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-moss" aria-hidden />
              <input
                id="guide-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides"
                aria-label="Search guides"
                className="field pl-10"
              />
            </div>
          </div>

          <div className="mt-10 grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {visible.map((guide, i) => (
              <GuideCard key={guide.slug} guide={guide} divided={i % 3 !== 0} />
            ))}
          </div>
          {visible.length === 0 && <p className="mt-10 text-soft">No guides match your search.</p>}
        </Container>
      </section>
    </>
  );
}
