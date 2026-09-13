import { describe, expect, it } from 'vitest';
import { feeBreakdown } from './FeeExample.jsx';

describe('feeBreakdown', () => {
  it('charges no platform fee and only five network operations to the seller', () => {
    const b = feeBreakdown({ xlm: 100, rate: 520, networkFeePerOp: 0.00001 });
    expect(b.buyerPays).toBe(52000);
    expect(b.sellerReceivesNgn).toBe(52000);
    expect(b.buyerReceives).toBe(100);
    expect(b.sellerNetworkFees).toBe(0.00005);
    expect(b.reserveSetAside).toBe(2);
  });
});
