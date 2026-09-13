import { ArrowLeft, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { GuideCard } from '../components/guides/GuideCard.jsx';
import { GuideSection, sectionId } from '../components/guides/GuideSection.jsx';
import { StructuredData } from '../components/seo/StructuredData.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Container } from '../components/ui/Container.jsx';
import { appLinks } from '../config/site.js';
import { getGuide, relatedGuides } from '../data/guides/index.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { articleSchema, breadcrumbSchema } from '../lib/structuredData.js';
import NotFoundPage from './NotFoundPage.jsx';

export default function GuidePage() {
  const { slug } = useParams();
  const guide = getGuide(slug);
  useDocumentTitle(guide?.title ?? 'Guide not found', guide?.summary);

  if (!guide) return <NotFoundPage />;

  const updated = new Date(`${guide.updated}T00:00:00Z`).toLocaleDateString('en-NG', { dateStyle: 'long' });

  return (
    <>
      <StructuredData data={articleSchema(guide)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />

      <section className="bg-ink-950 pb-14 pt-32 sm:pt-40">
        <Container className="max-w-3xl">
          <Link to="/guides" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All guides
          </Link>
          <p className="eyebrow mt-6 text-brand-300">{guide.category}</p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 text-lg text-slate-400">{guide.summary}</p>
          <p className="mt-6 flex items-center gap-3 text-sm text-slate-500">
            <Clock className="h-4 w-4" aria-hidden /> {guide.readMinutes} min read · Updated {updated}
          </p>
        </Container>
      </section>

      <article className="bg-white py-12">
        <Container className="grid max-w-5xl gap-12 lg:grid-cols-[1fr_14rem]">
          <div className="min-w-0">
            {guide.sections.map((section) => (
              <GuideSection key={section.heading} section={section} />
            ))}
            <div className="mt-14 rounded-3xl bg-ink-900 p-8">
              <p className="text-xl font-semibold text-white">Ready to put this into practice?</p>
              <Button href={appLinks.register} variant="naira" className="mt-5">
                Create your Nexlm account
              </Button>
            </div>
          </div>
          <nav className="hidden lg:block" aria-label="On this page">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
              <ul className="mt-3 space-y-2 border-l border-slate-200 text-sm">
                {guide.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${sectionId(s.heading)}`} className="-ml-px block border-l border-transparent pl-4 text-slate-600 hover:border-brand-500 hover:text-slate-900">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </article>

      <section className="bg-slate-50 py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-slate-900">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedGuides(guide).map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
