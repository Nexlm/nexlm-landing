import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button.jsx';
import { Container } from '../components/ui/Container.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

const SUGGESTIONS = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/guides', label: 'Guides' },
  { to: '/fees', label: 'Fees' },
  { to: '/faq', label: 'FAQ' },
];

export default function NotFoundPage() {
  useDocumentTitle('Page not found');
  return (
    <section className="glow-leaf flex min-h-[70vh] items-center py-20">
      <Container>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 max-w-4xl text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-8xl">
          This page wandered <span className="text-gold">off-chain</span>.
        </h1>
        <p className="mt-6 text-lg text-soft">The link may be broken or the page may have moved.</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button to="/" size="lg">
            Back home
          </Button>
          <nav aria-label="Popular pages">
            <ul className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.12em]">
              {SUGGESTIONS.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-moss hover:text-paper">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
