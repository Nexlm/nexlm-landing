import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { paymentMethods } from '../data/paymentMethods.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function PaymentMethodsPage() {
  useDocumentTitle('Payment methods', 'Trade XLM for Naira on Nexlm using bank transfer, OPay, PalmPay, Kuda or Moniepoint.');

  return (
    <>
      <PageHero
        eyebrow="Payment methods"
        title="Pay the way you already do."
        description="Naira moves directly between traders through Nigeria's everyday payment rails. Nexlm never holds it."
      />
      <section className="py-16">
        <Container>
          <ol className="border-t border-line">
            {paymentMethods.map((method) => (
              <li key={method.id} className="grid gap-6 border-b border-line py-10 lg:grid-cols-[18rem_1fr]">
                <div>
                  <h2 className="text-4xl font-extrabold tracking-tight">{method.name}</h2>
                  <p className="mt-2 text-soft">{method.detail}</p>
                </div>
                <ul className="grid content-start gap-3">
                  {method.tips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-paper">
                      <span className="mt-2.5 h-1 w-3 shrink-0 bg-mint" aria-hidden />
                      {tip}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
