import { useInView } from '../../hooks/useInView.js';
import { cn } from '../../lib/cn.js';

const NODES = [
  { title: 'Seller', detail: 'Funds amount + 2 XLM', tone: '' },
  { title: 'Escrow', detail: 'Own key disabled · platform co-signs', tone: 'border-gold/50 text-gold' },
  { title: 'Buyer', detail: 'Receives XLM in ~5 s', tone: '' },
];

const OPS = {
  lock: [
    ['createAccount', '(escrow, ', 'amount + 2 XLM', ')'],
    ['setOptions', '(signer: platform, ', 'masterWeight: 0', ')'],
  ],
  release: [
    ['payment', '(buyer, ', 'amount', ')'],
    ['accountMerge', '(→ seller)', '', '  // reserve returned'],
  ],
};

function OpLine({ op }) {
  const [name, args, value, tail] = op;
  return (
    <code className="block whitespace-nowrap font-mono text-[13px] leading-8 text-paper">
      <span className="text-mint">{name}</span>
      {args}
      <span className="text-gold">{value}</span>
      <span className={tail.startsWith('  //') ? 'text-moss' : ''}>{tail}</span>
    </code>
  );
}

/** How XLM moves during a trade — the same model shown in the pitch reel. */
export function EscrowDiagram() {
  const [ref, inView] = useInView();

  return (
    <figure ref={ref} aria-label="Escrow flow: the seller funds an escrow account, the platform can only release it to the buyer or refund the seller, and Naira goes directly from buyer to seller.">
      <div className="relative grid gap-4 sm:grid-cols-3 sm:gap-10">
        <div className="absolute left-[16%] right-[16%] top-1/2 hidden h-px bg-[repeating-linear-gradient(90deg,#7b8a80_0_8px,transparent_8px_16px)] opacity-60 sm:block" aria-hidden />
        <span
          className={cn(
            'absolute top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffe7a0,#f3c44b_55%,#b98a1c)] shadow-[0_0_24px_rgba(243,196,75,0.55)] transition-[left] duration-[2400ms] ease-in-out sm:block',
            inView ? 'left-[82%]' : 'left-[14%]',
          )}
          aria-hidden
        />
        {NODES.map((node) => (
          <div key={node.title} className={cn('relative z-10 rounded border border-line bg-panel p-5', node.tone)}>
            <p className="font-display text-2xl font-bold">{node.title}</p>
            <p className="mt-1 font-mono text-[11px] text-moss">{node.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 overflow-x-auto sm:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">Lock · one atomic transaction</p>
          <div className="mt-2">{OPS.lock.map((op) => <OpLine key={op[0]} op={op} />)}</div>
        </div>
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">Release · after the Naira lands</p>
          <div className="mt-2">{OPS.release.map((op) => <OpLine key={op[0]} op={op} />)}</div>
        </div>
      </div>

      <figcaption className="mt-6 border-t border-line pt-4 text-sm text-soft">
        Naira goes directly from buyer to seller — never through Nexlm. If the buyer doesn&apos;t pay in 15 minutes, the escrow merges back to the seller.
      </figcaption>
    </figure>
  );
}
