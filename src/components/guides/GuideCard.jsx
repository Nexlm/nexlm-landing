import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn.js';

export function GuideCard({ guide, divided = false }) {
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className={cn('group flex h-full flex-col border-b border-line py-8 pr-6 transition-colors hover:bg-panel/40', divided && 'md:border-l md:border-line md:pl-6')}
    >
      <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em]">
        <span className="text-mint">{guide.category}</span>
        <span className="text-moss">{guide.readMinutes} min read</span>
      </div>
      <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-paper group-hover:text-gold">{guide.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">{guide.summary}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-mint">
        Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
