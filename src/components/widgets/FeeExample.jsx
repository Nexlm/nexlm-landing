import { formatNgn } from '../../lib/format.js';

const EXAMPLE = { xlm: 100, rate: 238, networkFeePerOp: 0.00001 };

// Lock (2 ops) + release (3 ops), each op charged the base fee.
const LOCK_OPS = 2;
const RELEASE_OPS = 3;

export function feeBreakdown({ xlm, rate, networkFeePerOp } = EXAMPLE) {
  const lockFee = LOCK_OPS * networkFeePerOp;
  const releaseFee = RELEASE_OPS * networkFeePerOp;
  return {
    buyerPays: xlm * rate,
    buyerReceives: xlm,
    sellerReceivesNgn: xlm * rate,
    sellerNetworkFees: Math.round((lockFee + releaseFee) * 1e7) / 1e7,
    reserveSetAside: 2,
  };
}

function Side({ title, rows }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold">{title}</p>
      <dl className="mt-4 border-t border-line">
        {rows.map(([label, value, accent]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-line py-3 text-sm">
            <dt className="text-moss">{label}</dt>
            <dd className={`num font-semibold ${accent ?? 'text-paper'}`}>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Worked example of what each side pays and receives on a typical trade. */
export function FeeExample() {
  const b = feeBreakdown();
  return (
    <div className="mt-16">
      <p className="eyebrow">Worked example</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
        {EXAMPLE.xlm} XLM at {formatNgn(EXAMPLE.rate)}
      </h2>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <Side
          title="Buyer"
          rows={[
            ['Pays the seller', formatNgn(b.buyerPays)],
            ['Receives', `${b.buyerReceives} XLM`, 'text-gold'],
            ['Nexlm fee', '₦0', 'text-mint'],
          ]}
        />
        <Side
          title="Seller"
          rows={[
            ['Receives', formatNgn(b.sellerReceivesNgn)],
            ['Stellar network fees', `${b.sellerNetworkFees} XLM`],
            ['Reserve while open (returned)', `${b.reserveSetAside} XLM`, 'text-gold'],
          ]}
        />
      </div>
    </div>
  );
}
