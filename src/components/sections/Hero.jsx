import { ArrowRight, ShieldCheck } from 'lucide-react';
import { appLinks } from '../../config/site.js';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { LiveRate } from '../widgets/LiveRate.jsx';
import { TradePreview } from '../widgets/TradePreview.jsx';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <LiveRate />
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
            Buy &amp; sell XLM for <span className="text-gradient">Naira</span>, peer to peer.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Trade Stellar Lumens directly with verified Nigerians using bank transfer, OPay, PalmPay, Kuda or Moniepoint. Every trade is locked in its
            own on-chain escrow — so you never have to trust a stranger.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={appLinks.register} size="lg">
              Start trading <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-naira-400" />
            Zero trading fees · Settles in ~5 seconds · Naira never held by Nexlm
          </p>
        </div>

        <TradePreview />
      </Container>
    </section>
  );
}
