import { Plus } from 'lucide-react';
import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn.js';

function AccordionItem({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-lg font-semibold text-paper hover:text-mint"
        >
          {item.question}
          <Plus className={cn('h-5 w-5 shrink-0 text-moss transition-transform', open && 'rotate-45 text-gold')} />
        </button>
      </h3>
      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-trigger`} hidden={!open} className="pb-6 pr-10">
        <p className="leading-relaxed text-soft">{item.answer}</p>
        {item.guide && (
          <Link to={`/guides/${item.guide}`} className="link mt-3 inline-block text-sm">
            Read the full guide →
          </Link>
        )}
      </div>
    </div>
  );
}

/** Arrow/Home/End keys move focus between accordion triggers (WAI-ARIA pattern). */
function handleKeyDown(event) {
  const triggers = [...event.currentTarget.querySelectorAll('button[aria-expanded]')];
  const index = triggers.indexOf(document.activeElement);
  if (index === -1) return;

  const next = {
    ArrowDown: (index + 1) % triggers.length,
    ArrowUp: (index - 1 + triggers.length) % triggers.length,
    Home: 0,
    End: triggers.length - 1,
  }[event.key];

  if (next !== undefined) {
    event.preventDefault();
    triggers[next].focus();
  }
}

export function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  return (
    <div className="border-t border-line" onKeyDown={handleKeyDown}>
      {items.map((item, i) => (
        <AccordionItem key={item.question} item={item} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
      ))}
    </div>
  );
}
