import { ArrowDownUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { appLinks } from '../../config/site.js';
import { useXlmRate } from '../../hooks/useXlmRate.js';
import { convert, formatNgn, formatXlm } from '../../lib/format.js';
import { Button } from '../ui/Button.jsx';

const PRESETS = [50, 100, 500, 1000];

export function RateCalculator() {
  const { rate: market, error: marketError } = useXlmRate();
  const [direction, setDirection] = useState('xlm-to-ngn');
  const [amount, setAmount] = useState('250');
  const [rate, setRate] = useState('');

  // Pre-fill with the market rate once it loads, unless the user typed their own.
  useEffect(() => {
    if (market && rate === '') setRate(String(Math.round(market.ngn * 100) / 100));
  }, [market, rate]);

  const result = convert(amount, rate, direction);
  const fromLabel = direction === 'xlm-to-ngn' ? 'XLM' : 'NGN';

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Estimate a trade</p>
        <button
          type="button"
          onClick={() => setDirection((d) => (d === 'xlm-to-ngn' ? 'ngn-to-xlm' : 'xlm-to-ngn'))}
          className="inline-flex items-center gap-1.5 rounded border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-soft hover:border-mint hover:text-paper"
        >
          <ArrowDownUp className="h-3.5 w-3.5" /> Swap
        </button>
      </div>

      <label className="label mt-6" htmlFor="calc-amount">
        You {direction === 'xlm-to-ngn' ? 'sell' : 'spend'}
      </label>
      <div className="flex items-center rounded border border-line bg-ink focus-within:border-leaf focus-within:ring-2 focus-within:ring-leaf/25">
        <input
          id="calc-amount"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ''))}
          className="num w-full bg-transparent px-4 py-3 text-3xl font-semibold text-paper outline-none"
        />
        <span className="pr-4 font-mono text-sm font-semibold text-gold">{fromLabel}</span>
      </div>

      {direction === 'xlm-to-ngn' && (
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(String(p))}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-soft hover:border-mint hover:text-paper"
            >
              {p} XLM
            </button>
          ))}
        </div>
      )}

      <label className="label mt-5" htmlFor="calc-rate">
        Rate (₦ per XLM)
      </label>
      <input
        id="calc-rate"
        inputMode="decimal"
        value={rate}
        onChange={(e) => setRate(e.target.value.replace(/[^\d.]/g, ''))}
        placeholder="e.g. 238"
        className="field num"
      />
      {market && (
        <p className="mt-2 text-xs text-moss">
          Market reference {formatNgn(market.ngn)} ·{' '}
          <button type="button" className="link" onClick={() => setRate(String(Math.round(market.ngn * 100) / 100))}>
            use it
          </button>
        </p>
      )}
      {marketError && !market && <p className="mt-2 text-xs text-moss">Market reference is unavailable — enter the rate you have in mind.</p>}

      <div className="mt-6 border-t border-line pt-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-moss">You {direction === 'xlm-to-ngn' ? 'receive about' : 'get about'}</p>
        <p className="mt-2 font-display text-5xl font-extrabold tracking-tight text-paper" aria-live="polite">
          {direction === 'xlm-to-ngn' ? formatNgn(result) : formatXlm(result, 7)}
        </p>
        <p className="mt-2 text-xs text-moss">₦0 trading fees. Final price depends on the offer you choose.</p>
      </div>

      <Button href={appLinks.register} className="mt-6 w-full" size="lg">
        {direction === 'xlm-to-ngn' ? 'Sell XLM on Nexlm' : 'Buy XLM on Nexlm'}
      </Button>
    </div>
  );
}
