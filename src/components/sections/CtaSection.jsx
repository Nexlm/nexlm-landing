import { Container } from '../ui/Container.jsx';
import { WaitlistForm } from '../widgets/WaitlistForm.jsx';

export function CtaSection() {
  return (
    <section id="early-access" className="bg-white pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-14 sm:px-14 sm:py-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-naira-500/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <p className="eyebrow text-naira-400">Early access</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Be first on Nigeria&apos;s Stellar P2P market.</h2>
            <p className="mt-4 text-lg text-slate-400">
              We&apos;re onboarding traders in waves. Join the list and we&apos;ll send your invite as soon as your spot opens.
            </p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
