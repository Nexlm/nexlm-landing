import { cn } from '../../lib/cn.js';

export function SectionHeading({ eyebrow, title, description, align = 'center', dark = false, className }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className={cn('eyebrow', dark && 'text-brand-300')}>{eyebrow}</p>}
      <h2 className={cn('mt-3 text-3xl font-semibold sm:text-4xl', dark ? 'text-white' : 'text-slate-900')}>{title}</h2>
      {description && (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', dark ? 'text-slate-400' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </div>
  );
}
