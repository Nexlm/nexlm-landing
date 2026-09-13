import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { appLinks } from '../../config/site.js';
import { mainNav } from '../../data/navigation.js';
import { cn } from '../../lib/cn.js';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { Logo } from '../ui/Logo.jsx';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled || open ? 'border-b border-white/10 bg-ink-950/90 backdrop-blur' : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn('rounded-full px-4 py-2 text-sm font-medium transition-colors', isActive ? 'text-white' : 'text-slate-400 hover:text-white')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={appLinks.login} variant="ghost" size="sm">
            Log in
          </Button>
          <Button href={appLinks.register} size="sm">
            Start trading
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-slate-300 hover:text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 bg-ink-950 lg:hidden" aria-label="Mobile">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <NavLink key={item.to} to={item.to} className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5">
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
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
