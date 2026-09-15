import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { FeeExample } from '../components/widgets/FeeExample.jsx';
import { feeTable } from '../data/fees.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function FeesPage() {
  useDocumentTitle('Fees', 'Nexlm charges no trading fees. You only pay the Stellar network fee of 0.00001 XLM.');

  return (
    <>
      <PageHero
        eyebrow="Fees"
        title={
          <>
            <span className="text-gold">₦0</span> trading fees. Really.
          </>
        }
        description="Buying and selling on Nexlm is free. The only cost is Stellar's tiny network fee."
      />

      <section className="py-20">
        <Container>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-t border-line text-left">
              <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-moss">
                <tr className="border-b border-line">
                  <th scope="col" className="py-4 pr-6 font-semibold">
                    What
                  </th>
                  <th scope="col" className="py-4 pr-6 font-semibold">
                    Cost
                  </th>
                  <th scope="col" className="py-4 font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeTable.map((row) => (
                  <tr key={row.item} className="border-b border-line">
                    <th scope="row" className="py-5 pr-6 font-semibold text-paper">
                      {row.item}
                    </th>
                    <td className={`num py-5 pr-6 font-semibold ${row.cost === 'Free' ? 'text-mint' : 'text-gold'}`}>{row.cost}</td>
                    <td className="py-5 text-soft">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FeeExample />

          <div className="mt-16 grid border-t border-line md:grid-cols-2">
            <div className="border-b border-line py-8 md:pr-8">
              <h2 className="text-2xl font-bold">Why is there a 2 XLM reserve?</h2>
              <p className="mt-3 leading-relaxed text-soft">
                Stellar requires every account — including a trade&apos;s escrow account — to hold a small minimum balance. The seller funds it when the trade opens,
                and whatever isn&apos;t spent on network fees is merged back when the trade closes.
              </p>
            </div>
            <div className="border-b border-line py-8 md:border-l md:border-line md:pl-8">
              <h2 className="text-2xl font-bold">How will Nexlm make money?</h2>
              <p className="mt-3 leading-relaxed text-soft">
                Core P2P trading stays free. We plan to earn from optional premium features for power traders — never by hiding a margin inside your rate.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
