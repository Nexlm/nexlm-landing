import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn.js';

export function Logo({ className }) {
  return (
    <Link to="/" className={cn('flex items-center gap-2.5', className)} aria-label="Nexlm home">
      <span className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-leaf font-display text-base font-extrabold text-ink">N</span>
      <span className="font-display text-xl font-bold tracking-tight text-paper">Nexlm</span>
    </Link>
  );
}
