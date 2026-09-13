import { Link } from 'react-router-dom';
import { paymentMethods } from '../../data/paymentMethods.js';
import { Container } from '../ui/Container.jsx';

export function PaymentMethodsStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-10" aria-label="Supported payment methods">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-sm font-medium text-slate-500">
          Pay and get paid with{' '}
          <Link to="/payment-methods" className="text-brand-700 hover:underline">
            (tips)
          </Link>
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {paymentMethods.map((m) => (
            <li key={m.id} className={`rounded-full px-4 py-2 text-sm font-semibold ${m.color}`} title={m.detail}>
              {m.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
