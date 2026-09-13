import { describe, expect, it } from 'vitest';
import { parseRate } from './rates.js';

describe('parseRate', () => {
  it('reads NGN, USD and 24h change', () => {
    const rate = parseRate({ stellar: { ngn: 512.4, usd: 0.33, ngn_24h_change: -1.25 } }, 1000);
    expect(rate).toEqual({ ngn: 512.4, usd: 0.33, change24h: -1.25, fetchedAt: 1000 });
  });

  it('tolerates missing optional fields', () => {
    expect(parseRate({ stellar: { ngn: 500 } }, 1)).toMatchObject({ usd: null, change24h: null });
  });

  it('rejects malformed payloads', () => {
    expect(parseRate(null)).toBeNull();
    expect(parseRate({ stellar: { ngn: 0 } })).toBeNull();
    expect(parseRate({ bitcoin: { ngn: 1 } })).toBeNull();
  });
});
