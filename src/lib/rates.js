const COINGECKO_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=ngn,usd&include_24hr_change=true';
const CACHE_KEY = 'nexlm:xlm-rate';
const CACHE_TTL_MS = 5 * 60 * 1000;

/** Parses the CoinGecko simple price payload into a rate object, or null if malformed. */
export function parseRate(payload, now = Date.now()) {
  const stellar = payload?.stellar;
  if (!stellar || typeof stellar.ngn !== 'number' || stellar.ngn <= 0) return null;
  return {
    ngn: stellar.ngn,
    usd: typeof stellar.usd === 'number' ? stellar.usd : null,
    change24h: typeof stellar.ngn_24h_change === 'number' ? stellar.ngn_24h_change : null,
    fetchedAt: now,
  };
}

function readCache(now) {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? 'null');
    return cached && now - cached.fetchedAt < CACHE_TTL_MS ? cached : null;
  } catch {
    return null;
  }
}

function writeCache(rate) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(rate));
  } catch {
    // Storage can be unavailable (private mode); caching is best-effort.
  }
}

/** Indicative market rate for XLM. Nexlm traders set their own P2P prices. */
export async function fetchXlmRate({ signal, now = Date.now() } = {}) {
  const cached = typeof sessionStorage !== 'undefined' ? readCache(now) : null;
  if (cached) return cached;

  const res = await fetch(COINGECKO_URL, { signal, headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`Rate request failed (${res.status})`);
  const rate = parseRate(await res.json(), now);
  if (!rate) throw new Error('Rate unavailable');
  if (typeof sessionStorage !== 'undefined') writeCache(rate);
  return rate;
}
