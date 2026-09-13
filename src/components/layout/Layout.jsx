import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BackToTop } from '../widgets/BackToTop.jsx';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the target section to render before scrolling to it.
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
