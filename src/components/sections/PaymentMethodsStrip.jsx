import { Link } from 'react-router-dom';
import { paymentMethods } from '../../data/paymentMethods.js';
import { Container } from '../ui/Container.jsx';

export function PaymentMethodsStrip() {
  return (
    <section className="border-b border-line bg-ground pb-8 pt-16" aria-label="Supported payment methods">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-moss">
          Pay and get paid with ·{' '}
          <Link to="/payment-methods" className="text-mint hover:underline">
            tips
          </Link>
        </p>
        <ul className="flex flex-wrap gap-2">
          {paymentMethods.map((m) => (
            <li key={m.id} className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-paper" title={m.detail}>
              {m.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
