import { comparisonColumns, comparisonRows } from '../../data/comparison.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

function ComparisonCards() {
  return (
    <div className="mt-12 space-y-4 md:hidden">
      {comparisonRows.map((row) => (
        <div key={row.label} className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-semibold text-slate-900">{row.label}</p>
          <dl className="mt-3 space-y-2 text-sm">
            {row.values.map((value, i) => (
              <div key={comparisonColumns[i]} className={cn('flex justify-between gap-4 rounded-lg px-3 py-2', i === 0 && 'bg-brand-50')}>
                <dt className={cn(i === 0 ? 'font-semibold text-brand-700' : 'text-slate-500')}>{comparisonColumns[i]}</dt>
                <dd className={cn('text-right', i === 0 ? 'font-medium text-slate-900' : 'text-slate-600')}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="mt-12 hidden overflow-x-auto rounded-3xl border border-slate-200 bg-white md:block">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th scope="col" className="p-5 font-medium text-slate-500">
              <span className="sr-only">Feature</span>
            </th>
            {comparisonColumns.map((col, i) => (
              <th key={col} scope="col" className={cn('p-5 font-semibold', i === 0 ? 'bg-brand-50 text-brand-700' : 'text-slate-700')}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-slate-100 last:border-b-0">
              <th scope="row" className="p-5 font-medium text-slate-900">
                {row.label}
              </th>
              {row.values.map((value, i) => (
                <td key={i} className={cn('p-5', i === 0 ? 'bg-brand-50/60 font-medium text-slate-900' : 'text-slate-600')}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Comparison() {
  return (
    <section id="compare" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Compare"
          title="Safer than OTC groups. More focused than big exchanges."
          description="How Nexlm stacks up against the usual ways Nigerians trade XLM."
        />
        <ComparisonCards />
        <ComparisonTable />
      </Container>
    </section>
  );
}
