import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn.js';

const VARIANTS = {
  primary: 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-400',
  naira: 'bg-naira-500 text-ink-950 shadow-lg shadow-naira-500/25 hover:bg-naira-400',
  light: 'bg-white text-ink-900 hover:bg-slate-100',
  outline: 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
  outlineDark: 'border border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50',
  ghost: 'text-slate-300 hover:text-white',
};

const SIZES = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60';

/** Renders an internal Link, an external anchor, or a button depending on props. */
export function Button({ to, href, variant = 'primary', size = 'md', className, children, ...props }) {
  const classes = cn(base, VARIANTS[variant], SIZES[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noreferrer' })} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
