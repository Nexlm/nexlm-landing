import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { feeTable } from '../data/fees.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function FeesPage() {
  useDocumentTitle('Fees', 'Nexlm charges no trading fees. You only pay the Stellar network fee of 0.00001 XLM.');

  return (
    <>
      <PageHero eyebrow="Fees" title="Zero trading fees. Really." description="Buying and selling on Nexlm is free. The only cost is Stellar's tiny network fee." />

      <section className="bg-white py-20">
        <Container>
          <div className="overflow-x-auto rounded-3xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th scope="col" className="p-5 font-medium">
                    What
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Cost
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeTable.map((row) => (
                  <tr key={row.item} className="border-t border-slate-100">
                    <th scope="row" className="p-5 font-medium text-slate-900">
                      {row.item}
                    </th>
                    <td className="p-5 font-semibold text-slate-900">{row.cost}</td>
                    <td className="p-5 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-7">
              <h2 className="font-sans text-lg font-semibold">Why is there a 2 XLM reserve?</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Stellar requires every account — including a trade&apos;s escrow account — to hold a small minimum balance. The seller funds it when the trade
                opens, and whatever isn&apos;t spent on network fees is merged back into their wallet when the trade completes or is cancelled.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-7">
              <h2 className="font-sans text-lg font-semibold">How will Nexlm make money?</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Core P2P trading stays free. We plan to earn from optional premium features for power traders — never by hiding a margin inside your rate.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
