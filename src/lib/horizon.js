const HORIZON_URL = 'https://horizon.stellar.org';

/**
 * Summarises the most recent ledgers: latest sequence, average close time and
 * transactions per ledger. Returns null for unusable payloads.
 */
export function summariseLedgers(payload) {
  const records = payload?._embedded?.records;
  if (!Array.isArray(records) || records.length === 0) return null;

  const times = records.map((r) => new Date(r.closed_at).getTime()).filter(Number.isFinite);
  const gaps = times.slice(0, -1).map((t, i) => Math.abs(t - times[i + 1]) / 1000);
  const avgCloseSeconds = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : null;
  const txs = records.map((r) => Number(r.successful_transaction_count) || 0);

  return {
    sequence: records[0].sequence,
    closedAt: records[0].closed_at,
    avgCloseSeconds: avgCloseSeconds === null ? null : Math.round(avgCloseSeconds * 10) / 10,
    avgTransactions: Math.round(txs.reduce((a, b) => a + b, 0) / txs.length),
  };
}

export async function fetchNetworkPulse({ signal } = {}) {
  const res = await fetch(`${HORIZON_URL}/ledgers?order=desc&limit=10`, { signal });
  if (!res.ok) throw new Error(`Horizon request failed (${res.status})`);
  const summary = summariseLedgers(await res.json());
  if (!summary) throw new Error('No ledger data');
  return summary;
}
