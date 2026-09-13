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
    <section className="flex min-h-[80vh] items-center bg-ink-950 pt-16">
      <Container className="text-center">
        <p className="font-display text-7xl font-semibold text-gradient">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">This page wandered off-chain</h1>
        <p className="mt-3 text-slate-400">The link may be broken or the page may have moved.</p>
        <Button to="/" className="mt-8">
          Back home
        </Button>
        <nav className="mt-10" aria-label="Popular pages">
          <p className="text-sm text-slate-500">Or try one of these:</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-white/30 hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
