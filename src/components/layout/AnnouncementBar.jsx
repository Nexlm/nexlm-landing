import { X } from 'lucide-react';
import { useState } from 'react';

const STORAGE_KEY = 'nexlm:announcement-dismissed:early-access-2026';

function wasDismissed() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(wasDismissed);
  if (hidden) return null;

  function dismiss() {
    setHidden(true);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Ignore storage failures; the bar just reappears next visit.
    }
  }

  return (
    <div className="relative border-b border-line px-10 py-2 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-soft">
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-mint align-middle shadow-[0_0_0_3px_rgba(63,208,138,0.18)]" />
      Early access is live on Stellar testnet ·{' '}
      <a href="/#early-access" className="text-gold hover:underline">
        join the waitlist
      </a>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-moss hover:text-paper"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
