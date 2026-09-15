import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { ScreenFrame } from '../ui/ScreenFrame.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function ProductScreens() {
  return (
    <section id="product" className="border-b border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The real app"
          title="A Stellar-only market, built for how Nigerians pay."
          description="These are live screens from Nexlm on Stellar testnet — not mockups."
        />

        <Reveal className="mt-14">
          <ScreenFrame
            src="/screens/market.png"
            alt="Nexlm P2P market with verified sellers emeka_ng, chioma_trades and tunde_xlm, prices from ₦237.40 per XLM, and OPay, PalmPay, Kuda, Moniepoint and bank transfer"
            url="app.nexlm · P2P Market"
            crop="1440 / 590"
            height={760}
          />
          <p className="mt-4 grid gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-moss sm:grid-cols-3">
            <span>Best price first</span>
            <span>BVN / NIN verified traders</span>
            <span>Completion rate on every offer</span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ScreenFrame
              src="/screens/wallet.png"
              alt="Nexlm wallet showing a 9,682.99988 XLM balance, XLM committed to sell orders, a deposit QR code and on-chain escrow activity"
              url="app.nexlm · Wallet"
              crop="1440 / 1000"
              height={1000}
            />
            <h3 className="mt-6 text-2xl font-bold tracking-tight">A Stellar wallet for every trader</h3>
            <p className="mt-2 text-soft">QR deposits, withdrawals to any Stellar address, and every escrow movement you can trace.</p>
          </Reveal>
          <Reveal delay={120}>
            <ScreenFrame
              src="/screens/admin.png"
              alt="Nexlm admin overview with 30-day traded volume, completion rate, trades in progress and KYC review counts"
              url="app.nexlm · Admin"
              crop="1440 / 720"
              height={720}
            />
            <h3 className="mt-6 text-2xl font-bold tracking-tight">Operations built in</h3>
            <p className="mt-2 text-soft">Identity review, account controls and live trade monitoring with read-only chat.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
