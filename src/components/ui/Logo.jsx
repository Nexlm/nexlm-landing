import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn.js';

export function Logo({ dark = true, className }) {
  return (
    <Link to="/" className={cn('flex items-center gap-2.5', className)} aria-label="Nexlm home">
      <img src="/favicon.svg" alt="" className="h-8 w-8" />
      <span className={cn('font-display text-xl font-semibold tracking-tight', dark ? 'text-white' : 'text-slate-900')}>
        Nexlm
      </span>
    </Link>
  );
}
