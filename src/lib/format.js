const ngn = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 2,
});

export const formatNgn = (value) => ngn.format(Number.isFinite(Number(value)) ? Number(value) : 0);

export function formatXlm(value, decimals = 4) {
  const n = Number(value);
  return `${(Number.isFinite(n) ? n : 0).toLocaleString('en-US', { maximumFractionDigits: decimals })} XLM`;
}

/**
 * Rounds half-up to `decimals` places. The value is first normalised to 10
 * significant decimals so float artefacts like 3.0149999999 round as 3.015.
 */
export function roundTo(value, decimals) {
  const factor = 10 ** decimals;
  return Math.round(Number(value.toFixed(10)) * factor) / factor;
}

/** Converts between XLM and NGN at a rate (NGN per XLM). Returns 0 for invalid input. */
export function convert(amount, rate, direction) {
  const a = Number(amount);
  const r = Number(rate);
  if (!Number.isFinite(a) || !Number.isFinite(r) || a < 0 || r <= 0) return 0;
  return direction === 'xlm-to-ngn' ? roundTo(a * r, 2) : roundTo(a / r, 7);
}

export function formatCompact(value) {
  return new Intl.NumberFormat('en-NG', { notation: 'compact', maximumFractionDigits: 1 }).format(Number(value) || 0);
}
