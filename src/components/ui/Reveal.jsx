import { useInView } from '../../hooks/useInView.js';
import { cn } from '../../lib/cn.js';

/** Fades content up the first time it enters the viewport. */
export function Reveal({ as: Tag = 'div', delay = 0, className, children }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition duration-700 ease-out',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
