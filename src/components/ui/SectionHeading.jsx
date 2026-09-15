import { cn } from '../../lib/cn.js';

export function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-tight text-paper sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">{description}</p>}
    </div>
  );
}
