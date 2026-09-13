import { describe, expect, it } from 'vitest';
import { summariseLedgers } from './horizon.js';

const ledger = (sequence, closedAt, txs) => ({ sequence, closed_at: closedAt, successful_transaction_count: txs });

describe('summariseLedgers', () => {
  it('computes latest sequence, average close time and tx count', () => {
    const summary = summariseLedgers({
      _embedded: {
        records: [
          ledger(103, '2026-09-13T10:00:15Z', 300),
          ledger(102, '2026-09-13T10:00:10Z', 200),
          ledger(101, '2026-09-13T10:00:04Z', 100),
        ],
      },
    });
    expect(summary).toEqual({ sequence: 103, closedAt: '2026-09-13T10:00:15Z', avgCloseSeconds: 5.5, avgTransactions: 200 });
  });

  it('handles a single ledger and bad payloads', () => {
    expect(summariseLedgers({ _embedded: { records: [ledger(1, '2026-01-01T00:00:00Z', 5)] } }).avgCloseSeconds).toBeNull();
    expect(summariseLedgers({})).toBeNull();
    expect(summariseLedgers(null)).toBeNull();
  });
});
