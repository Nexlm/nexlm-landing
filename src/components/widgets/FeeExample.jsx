import { formatNgn } from '../../lib/format.js';

const EXAMPLE = { xlm: 100, rate: 520, networkFeePerOp: 0.00001 };

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

/** Worked example of what each side pays and receives on a typical trade. */
export function FeeExample() {
  const b = feeBreakdown();
  return (
    <div className="mt-12 rounded-3xl border border-slate-200 p-7">
      <h2 className="font-sans text-lg font-semibold text-slate-900">
        Worked example: {EXAMPLE.xlm} XLM at {formatNgn(EXAMPLE.rate)}
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <dl className="space-y-3 rounded-2xl bg-slate-50 p-5 text-sm">
          <p className="font-semibold text-slate-900">Buyer</p>
          <div className="flex justify-between">
            <dt className="text-slate-500">Pays the seller</dt>
            <dd className="font-medium">{formatNgn(b.buyerPays)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Receives</dt>
            <dd className="font-medium">{b.buyerReceives} XLM</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Nexlm fee</dt>
            <dd className="font-medium">₦0</dd>
          </div>
        </dl>
        <dl className="space-y-3 rounded-2xl bg-slate-50 p-5 text-sm">
          <p className="font-semibold text-slate-900">Seller</p>
          <div className="flex justify-between">
            <dt className="text-slate-500">Receives</dt>
            <dd className="font-medium">{formatNgn(b.sellerReceivesNgn)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Stellar network fees</dt>
            <dd className="font-medium">{b.sellerNetworkFees} XLM</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Reserve while open (returned)</dt>
            <dd className="font-medium">{b.reserveSetAside} XLM</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
