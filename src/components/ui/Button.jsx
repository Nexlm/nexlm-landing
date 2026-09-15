import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn.js';

const VARIANTS = {
  primary: 'bg-leaf text-ink hover:bg-mint',
  gold: 'bg-gold text-ink hover:brightness-110',
  outline: 'border border-line text-paper hover:border-mint',
  ghost: 'text-soft hover:text-paper',
};

const SIZES = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded font-semibold transition disabled:cursor-not-allowed disabled:opacity-60';

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
