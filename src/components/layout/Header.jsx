import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { appLinks, site } from '../../config/site.js';
import { mainNav } from '../../data/navigation.js';
import { cn } from '../../lib/cn.js';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { Logo } from '../ui/Logo.jsx';
import { AnnouncementBar } from './AnnouncementBar.jsx';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <AnnouncementBar />
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center lg:flex" aria-label="Main">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'relative px-3 py-5 text-sm font-medium transition-colors',
                    isActive ? 'text-paper after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-gold' : 'text-moss hover:text-paper',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          <Button href={site.docsUrl} variant="ghost" size="sm">
            Docs
          </Button>
          <Button href={appLinks.login} variant="ghost" size="sm">
            Log in
          </Button>
          <Button href={appLinks.register} size="sm" className="ml-2">
            Start trading
          </Button>
        </div>

        <button
          type="button"
          className="rounded p-2 text-soft hover:text-paper lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-ink lg:hidden" aria-label="Mobile">
          <Container className="flex flex-col py-2">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn('border-b border-line py-4 text-base font-medium', isActive ? 'text-gold' : 'text-soft')}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-3 py-4">
              <Button href={appLinks.login} variant="outline">
                Log in
              </Button>
              <Button href={appLinks.register}>Start trading</Button>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
