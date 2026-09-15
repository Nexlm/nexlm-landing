import { TrendingDown, TrendingUp } from 'lucide-react';
import { useXlmRate } from '../../hooks/useXlmRate.js';
import { cn } from '../../lib/cn.js';
import { formatNgn } from '../../lib/format.js';

export function LiveRate({ className }) {
  const { rate, error, loading } = useXlmRate();

  if (loading) {
    return <span className={cn('inline-block h-4 w-44 animate-pulse rounded bg-line', className)} aria-label="Loading rate" />;
  }
  if (error || !rate) {
    return <span className={cn('font-mono text-[11px] uppercase tracking-[0.12em] text-moss', className)}>Market rate unavailable</span>;
  }

  const up = (rate.change24h ?? 0) >= 0;
  const Trend = up ? TrendingUp : TrendingDown;

  return (
    <span
      className={cn('inline-flex items-center gap-2 font-mono text-[12px]', className)}
      title={`Indicative market rate from CoinGecko, updated ${new Date(rate.fetchedAt).toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_0_3px_rgba(63,208,138,0.18)]" />
      <span className="uppercase tracking-[0.12em] text-moss">1 XLM ≈</span>
      <span className="font-semibold text-paper">{formatNgn(rate.ngn)}</span>
      {rate.change24h !== null && (
        <span className={cn('inline-flex items-center gap-0.5', up ? 'text-mint' : 'text-ember')}>
          <Trend className="h-3.5 w-3.5" />
          {Math.abs(rate.change24h).toFixed(2)}%
        </span>
      )}
    </span>
  );
}
