import { Info, TriangleAlert } from 'lucide-react';
import { cn } from '../../lib/cn.js';

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const sectionId = (heading) => slugify(heading);

export function GuideSection({ section }) {
  const List = section.ordered ? 'ol' : 'ul';
  const callout = section.callout;
  const warning = callout?.tone === 'warning';

  return (
    <section id={sectionId(section.heading)} className="scroll-mt-28 border-t border-line pt-8 first:border-t-0 first:pt-0 [&:not(:first-child)]:mt-12">
      <h2 className="text-3xl font-bold tracking-tight text-paper">{section.heading}</h2>
      {section.body?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-lg leading-relaxed text-soft">
          {paragraph}
        </p>
      ))}
      {section.list && (
        <List className={cn('mt-5 space-y-3 pl-5 text-soft marker:text-gold', section.ordered ? 'list-decimal marker:font-mono' : 'list-disc')}>
          {section.list.map((item) => (
            <li key={item} className="pl-1 leading-relaxed">
              {item}
            </li>
          ))}
        </List>
      )}
      {callout && (
        <div className={cn('mt-6 flex gap-3 border-l-2 p-4 text-sm', warning ? 'border-gold bg-gold/[0.06]' : 'border-frost bg-frost/[0.06]')}>
          {warning ? <TriangleAlert className="h-5 w-5 shrink-0 text-gold" aria-hidden /> : <Info className="h-5 w-5 shrink-0 text-frost" aria-hidden />}
          <p className="text-paper">{callout.text}</p>
        </div>
      )}
    </section>
  );
}
