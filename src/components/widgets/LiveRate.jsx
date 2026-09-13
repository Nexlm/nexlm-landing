import { TrendingDown, TrendingUp } from 'lucide-react';
import { useXlmRate } from '../../hooks/useXlmRate.js';
import { cn } from '../../lib/cn.js';
import { formatNgn } from '../../lib/format.js';

export function LiveRate({ className }) {
  const { rate, error, loading } = useXlmRate();

  if (loading) {
    return <span className={cn('inline-block h-5 w-40 animate-pulse rounded bg-white/10', className)} aria-label="Loading rate" />;
  }
  if (error || !rate) {
    return <span className={cn('text-sm text-slate-500', className)}>Market rate unavailable</span>;
  }

  const up = (rate.change24h ?? 0) >= 0;
  const Trend = up ? TrendingUp : TrendingDown;

  return (
    <span
      className={cn('inline-flex items-center gap-2 text-sm', className)}
      title={`Indicative market rate from CoinGecko, updated ${new Date(rate.fetchedAt).toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-naira-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-naira-500" />
      </span>
      <span className="text-slate-300">1 XLM ≈</span>
      <span className="font-semibold text-white">{formatNgn(rate.ngn)}</span>
      {rate.change24h !== null && (
        <span className={cn('inline-flex items-center gap-0.5 text-xs', up ? 'text-naira-400' : 'text-rose-400')}>
          <Trend className="h-3.5 w-3.5" />
          {Math.abs(rate.change24h).toFixed(2)}%
        </span>
      )}
    </span>
  );
}
