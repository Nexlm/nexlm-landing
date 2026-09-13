import { PageHero } from '../../components/layout/PageHero.jsx';
import { Container } from '../../components/ui/Container.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

/** Shared layout for legal documents. Content is a draft pending legal review. */
export function LegalPage({ title, description, updated, children }) {
  useDocumentTitle(title, description);
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={`Last updated ${updated}`} />
      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <p className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
            Draft for early access. This document is pending review by legal counsel and may change before public launch.
          </p>
          <div className="prose-legal mt-8">{children}</div>
        </Container>
      </section>
    </>
  );
}
