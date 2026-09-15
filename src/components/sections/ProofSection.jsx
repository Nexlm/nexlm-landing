import { ExternalLink } from 'lucide-react';
import { explorerTx, proofTransactions } from '../../data/proof.js';
import { cn } from '../../lib/cn.js';
import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

const TONES = {
  gold: 'bg-gold/[0.12] text-gold',
  mint: 'bg-mint/[0.12] text-mint',
  frost: 'bg-frost/[0.12] text-frost',
  soft: 'bg-moss/15 text-soft',
};

const shortHash = (hash) => `${hash.slice(0, 12)}…${hash.slice(-8)}`;

export function ProofSection() {
  return (
    <section id="proof" className="border-b border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Verifiable, not promised"
          title="Every step is a public Stellar transaction."
          description="Real transactions from Nexlm's escrow on testnet. Open any of them on Stellar Expert."
        />
        <ol className="mt-14 border-t border-line">
          {proofTransactions.map((tx, i) => (
            <Reveal as="li" key={tx.hash} delay={i * 80} className="grid items-center gap-3 border-b border-line py-5 sm:grid-cols-[8rem_1fr_auto] sm:gap-8">
              <span className={cn('w-fit rounded-[3px] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em]', TONES[tx.tone])}>
                {tx.kind}
              </span>
              <a
                href={explorerTx(tx.hash)}
                target="_blank"
                rel="noreferrer"
                className="num inline-flex w-fit items-center gap-2 text-lg text-paper hover:text-gold"
                title={tx.hash}
              >
                {shortHash(tx.hash)} <ExternalLink className="h-4 w-4 text-moss" />
              </a>
              <p className="text-sm text-soft sm:text-right">{tx.detail}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
