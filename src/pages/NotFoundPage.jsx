import { Button } from '../components/ui/Button.jsx';
import { Container } from '../components/ui/Container.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function NotFoundPage() {
  useDocumentTitle('Page not found');
  return (
    <section className="flex min-h-[80vh] items-center bg-ink-950 pt-16">
      <Container className="text-center">
        <p className="font-display text-7xl font-semibold text-gradient">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">This page wandered off-chain</h1>
        <p className="mt-3 text-slate-400">The link may be broken or the page may have moved.</p>
        <Button to="/" className="mt-8">
          Back home
        </Button>
      </Container>
    </section>
  );
}
