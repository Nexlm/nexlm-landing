import { useState } from 'react';
import { GuideCard } from '../components/guides/GuideCard.jsx';
import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { guideCategories, guides } from '../data/guides/index.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { cn } from '../lib/cn.js';

export default function GuidesPage() {
  useDocumentTitle('Guides', 'Practical guides for buying and selling XLM for Naira safely on Nexlm.');
  const [category, setCategory] = useState('All');
  const visible = category === 'All' ? guides : guides.filter((g) => g.category === category);

  return (
    <>
      <PageHero eyebrow="Guides" title="Learn to trade XLM safely" description="Short, practical guides for your first trade and beyond." />
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Guide categories">
            {guideCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  category === c ? 'bg-ink-900 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900',
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
