import { Check } from 'lucide-react';
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
        title="Pay the way you already do"
        description="Naira moves directly between traders through Nigeria's everyday payment rails. Nexlm never holds it."
      />
      <section className="bg-white py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {paymentMethods.map((method) => (
            <article key={method.id} className="rounded-3xl border border-slate-200 p-7">
              <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${method.color}`}>{method.name}</span>
              <p className="mt-4 text-slate-600">{method.detail}</p>
              <ul className="mt-5 space-y-2.5">
                {method.tips.map((tip) => (
                  <li key={tip} className="flex gap-2.5 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-naira-500" aria-hidden /> {tip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
