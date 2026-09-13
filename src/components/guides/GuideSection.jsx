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
    <section id={sectionId(section.heading)} className="scroll-mt-28">
      <h2 className="mt-12 text-2xl font-semibold text-slate-900">{section.heading}</h2>
      {section.body?.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed text-slate-700">
          {paragraph}
        </p>
      ))}
      {section.list && (
        <List className={cn('mt-4 space-y-2 pl-5 text-slate-700', section.ordered ? 'list-decimal' : 'list-disc')}>
          {section.list.map((item) => (
            <li key={item} className="pl-1 leading-relaxed">
              {item}
            </li>
          ))}
        </List>
      )}
      {callout && (
        <div
          className={cn(
            'mt-5 flex gap-3 rounded-2xl border p-4 text-sm',
            warning ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-sky-200 bg-sky-50 text-sky-900',
          )}
        >
          {warning ? <TriangleAlert className="h-5 w-5 shrink-0" aria-hidden /> : <Info className="h-5 w-5 shrink-0" aria-hidden />}
          <p>{callout.text}</p>
        </div>
      )}
    </section>
  );
}
