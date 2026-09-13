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
    <div className="relative z-[55] bg-gradient-to-r from-brand-600 to-naira-600 px-10 py-2 text-center text-sm font-medium text-white">
      Early access is open on Stellar testnet —{' '}
      <a href="/#early-access" className="underline underline-offset-2">
        join the waitlist
      </a>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/15"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
