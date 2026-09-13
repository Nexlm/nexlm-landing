import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { cn } from '../../lib/cn.js';

function AccordionItem({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-base font-medium text-slate-900 hover:text-brand-700"
        >
          {item.question}
          <ChevronDown className={cn('h-5 w-5 shrink-0 text-slate-400 transition-transform', open && 'rotate-180')} />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!open}
        className="pb-5 pr-10 text-slate-600"
      >
        <p className="leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
