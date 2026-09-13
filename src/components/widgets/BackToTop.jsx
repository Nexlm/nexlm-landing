import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn.js';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        'fixed bottom-5 right-5 z-40 rounded-full bg-ink-900 p-3 text-white shadow-lg ring-1 ring-white/10 transition-opacity hover:bg-ink-700',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
