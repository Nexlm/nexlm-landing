import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { changelog } from '../data/changelog.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function ChangelogPage() {
  useDocumentTitle("What's new", 'Product updates and release notes from the Nexlm team.');

  return (
    <>
      <PageHero eyebrow="Changelog" title="What's new in Nexlm." description="Everything we've shipped, newest first." />
      <section className="py-16">
        <Container className="max-w-4xl">
          <ol className="border-t border-line">
            {changelog.map((entry) => (
              <li key={`${entry.date}-${entry.title}`} className="grid gap-4 border-b border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <div>
                  <time dateTime={entry.date} className="num text-sm text-moss">
                    {entry.date}
                  </time>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mint">{entry.tag}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">{entry.title}</h2>
                  <ul className="mt-4 space-y-2 text-soft">
                    {entry.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-3 shrink-0 bg-gold" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
