import { PageHero } from '../../components/layout/PageHero.jsx';
import { Container } from '../../components/ui/Container.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

/** Shared layout for legal documents. Content is a draft pending legal review. */
export function LegalPage({ title, description, updated, children }) {
  useDocumentTitle(title, description);
  return (
    <>
      <PageHero eyebrow={`Legal · last updated ${updated}`} title={title} />
      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="border-l-2 border-gold bg-gold/[0.06] p-4 text-sm text-paper">
            Draft for early access. This document is pending review by legal counsel and may change before public launch.
          </p>
          <div className="prose-legal mt-8">{children}</div>
        </Container>
      </section>
    </>
  );
}
