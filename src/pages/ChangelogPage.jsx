import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { changelog } from '../data/changelog.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function ChangelogPage() {
  useDocumentTitle("What's new", 'Product updates and release notes from the Nexlm team.');

  return (
    <>
      <PageHero eyebrow="Changelog" title="What's new in Nexlm" description="Everything we've shipped, newest first." />
      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <ol className="relative border-l border-slate-200">
            {changelog.map((entry) => (
              <li key={`${entry.date}-${entry.title}`} className="mb-12 ml-8">
                <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-100" aria-hidden />
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <time dateTime={entry.date} className="text-slate-500">
                    {new Date(`${entry.date}T00:00:00Z`).toLocaleDateString('en-NG', { dateStyle: 'long' })}
                  </time>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">{entry.tag}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">{entry.title}</h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
