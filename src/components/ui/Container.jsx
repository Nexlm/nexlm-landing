import { cn } from '../../lib/cn.js';

export function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-5 sm:px-8', className)} {...props}>
      {children}
    </Tag>
  );
}
