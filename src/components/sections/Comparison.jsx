import { comparisonColumns, comparisonRows } from '../../data/comparison.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

function ComparisonCards() {
  return (
    <div className="mt-12 border-t border-line md:hidden">
      {comparisonRows.map((row) => (
        <div key={row.label} className="border-b border-line py-5">
          <p className="font-semibold text-paper">{row.label}</p>
          <dl className="mt-3 space-y-2 text-sm">
            {row.values.map((value, i) => (
              <div key={comparisonColumns[i]} className="flex justify-between gap-4">
                <dt className={cn('font-mono text-[11px] uppercase tracking-wider', i === 0 ? 'text-gold' : 'text-moss')}>{comparisonColumns[i]}</dt>
                <dd className={cn('text-right', i === 0 ? 'font-semibold text-paper' : 'text-soft')}>{value}</dd>
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
    <div className="mt-12 hidden overflow-x-auto md:block">
      <table className="w-full min-w-[720px] border-t border-line text-left">
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="py-4 pr-6">
              <span className="sr-only">Feature</span>
            </th>
            {comparisonColumns.map((col, i) => (
              <th
                key={col}
                scope="col"
                className={cn('px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]', i === 0 ? 'bg-gold/[0.06] text-gold' : 'text-moss')}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-line">
              <th scope="row" className="py-5 pr-6 font-semibold text-paper">
                {row.label}
              </th>
              {row.values.map((value, i) => (
                <td key={i} className={cn('px-6 py-5', i === 0 ? 'bg-gold/[0.06] font-semibold text-paper' : 'text-soft')}>
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
    <section id="compare" className="border-b border-line py-24 sm:py-32">
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
