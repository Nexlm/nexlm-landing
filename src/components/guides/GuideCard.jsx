import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GuideCard({ guide }) {
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-300"
    >
      <div className="flex items-center justify-between text-xs">
        <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">{guide.category}</span>
        <span className="inline-flex items-center gap-1 text-slate-500">
          <Clock className="h-3.5 w-3.5" aria-hidden /> {guide.readMinutes} min read
        </span>
      </div>
      <h3 className="mt-4 font-sans text-lg font-semibold text-slate-900 group-hover:text-brand-700">{guide.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{guide.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
