import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appLinks } from '../../config/site.js';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { ScreenFrame } from '../ui/ScreenFrame.jsx';
import { LiveRate } from '../widgets/LiveRate.jsx';

const FACTS = [
  { value: '1', label: 'escrow account per trade', note: 'seller key disabled on-chain' },
  { value: '₦0', label: 'trading fees', note: '0.00001 XLM network fee' },
  { value: '~5s', label: 'from release to wallet', note: 'Stellar ledger close', gold: true },
];

export function Hero() {
  return (
    <section className="glow-leaf glow-gold relative overflow-hidden border-b border-line pt-16 sm:pt-24">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">Lagos · XLM ↔ Naira · peer to peer</p>
          <LiveRate />
        </div>

        <h1 className="mt-8 max-w-5xl text-[3.4rem] font-extrabold leading-[0.9] tracking-[-0.03em] text-paper sm:text-8xl">
          Trade XLM for Naira. <span className="text-gold">Escrow</span> on every trade.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-soft">
            Buy and sell Stellar Lumens directly with verified Nigerians using bank transfer, OPay, PalmPay, Kuda or Moniepoint. The seller&apos;s XLM
            is locked in its own Stellar account before you pay a kobo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={appLinks.register} size="lg">
              Start trading <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </div>
        </div>

        <dl className="mt-14 grid border-t border-line sm:grid-cols-3">
          {FACTS.map((f, i) => (
            <div key={f.label} className={`border-b border-line py-6 sm:border-b-0 ${i > 0 ? 'sm:border-l sm:border-line sm:pl-8' : ''}`}>
              <dt className={`font-display text-5xl font-extrabold tracking-tight ${f.gold ? 'text-gold' : 'text-paper'}`}>{f.value}</dt>
              <dd className="mt-2 text-soft">{f.label}</dd>
              <dd className="mt-0.5 font-mono text-[11px] text-moss">{f.note}</dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-6 translate-y-6 sm:mt-10">
          <ScreenFrame
            src="/screens/trade.png"
            alt="The real Nexlm trade room: 250 XLM locked in escrow, a gold 12-minute payment countdown, the seller's OPay details and trade chat"
            url="app.nexlm · Buy 250 XLM · Awaiting payment"
            crop="1440 / 640"
            height={900}
          />
          <p className="absolute -top-3 right-4 rounded-full border border-line bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-moss">
            Real app · <Link to="/security" className="text-mint hover:underline">verifiable escrow</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
