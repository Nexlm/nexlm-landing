import { comparisonColumns, comparisonRows } from '../../data/comparison.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function Comparison() {
  return (
    <section id="compare" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Compare"
          title="Safer than OTC groups. More focused than big exchanges."
          description="How Nexlm stacks up against the usual ways Nigerians trade XLM."
        />
        <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
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
      </Container>
    </section>
  );
}
