import { Container } from '../ui/Container.jsx';
import { WaitlistForm } from '../widgets/WaitlistForm.jsx';

export function CtaSection() {
  return (
    <section id="early-access" className="glow-leaf glow-gold py-24 sm:py-36">
      <Container>
        <p className="eyebrow">Early access</p>
        <h2 className="mt-5 max-w-5xl text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-8xl">
          Make XLM <span className="text-mint">spendable</span> in Naira.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-soft">
          We&apos;re onboarding traders in waves on Stellar testnet. Join the list and we&apos;ll send your invite as soon as your spot opens.
        </p>
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </Container>
    </section>
  );
}
