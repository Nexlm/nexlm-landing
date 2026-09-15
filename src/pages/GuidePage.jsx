import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { GuideCard } from '../components/guides/GuideCard.jsx';
import { GuideSection, sectionId } from '../components/guides/GuideSection.jsx';
import { ReadingProgress } from '../components/guides/ReadingProgress.jsx';
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
      <ReadingProgress targetId="guide-body" />

      <section className="glow-leaf border-b border-line pb-14 pt-16 sm:pt-24">
        <Container className="max-w-4xl">
          <Link to="/guides" className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-moss hover:text-paper">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> All guides
          </Link>
          <p className="eyebrow mt-8">
            {guide.category} · {guide.readMinutes} min read · updated {updated}
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">{guide.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-soft">{guide.summary}</p>
        </Container>
      </section>

      <article id="guide-body" className="py-16">
        <Container className="grid max-w-6xl gap-14 lg:grid-cols-[1fr_15rem]">
          <div className="min-w-0 max-w-3xl">
            {guide.sections.map((section) => (
              <GuideSection key={section.heading} section={section} />
            ))}
            <div className="mt-16 border-t border-line pt-10">
              <p className="text-3xl font-extrabold tracking-tight">Ready to put this into practice?</p>
              <Button href={appLinks.register} className="mt-6" size="lg">
                Create your Nexlm account
              </Button>
            </div>
          </div>
          <nav className="hidden lg:block" aria-label="On this page">
            <div className="sticky top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-moss">On this page</p>
              <ul className="mt-4 border-l border-line text-sm">
                {guide.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${sectionId(s.heading)}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-soft hover:border-gold hover:text-paper">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </article>

      <section className="border-t border-line bg-ground py-16">
        <Container>
          <p className="eyebrow">Keep reading</p>
          <div className="mt-8 grid border-t border-line md:grid-cols-3">
            {relatedGuides(guide).map((g, i) => (
              <GuideCard key={g.slug} guide={g} divided={i > 0} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
