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
  const [amount, setAmount] = useState('100');
  const [rate, setRate] = useState('');

  // Pre-fill with the market rate once it loads, unless the user typed their own.
  useEffect(() => {
    if (market && rate === '') setRate(String(Math.round(market.ngn * 100) / 100));
  }, [market, rate]);

  const result = convert(amount, rate, direction);
  const fromLabel = direction === 'xlm-to-ngn' ? 'XLM' : 'NGN';
  const toLabel = direction === 'xlm-to-ngn' ? 'NGN' : 'XLM';

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-lg font-semibold text-slate-900">Estimate your trade</h3>
        <button
          type="button"
          onClick={() => setDirection((d) => (d === 'xlm-to-ngn' ? 'ngn-to-xlm' : 'xlm-to-ngn'))}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
        >
          <ArrowDownUp className="h-3.5 w-3.5" /> Swap
        </button>
      </div>

      <label className="mt-6 block text-sm font-medium text-slate-700" htmlFor="calc-amount">
        You {direction === 'xlm-to-ngn' ? 'sell' : 'spend'}
      </label>
      <div className="mt-1.5 flex items-center rounded-2xl border border-slate-300 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20">
        <input
          id="calc-amount"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ''))}
          className="w-full rounded-2xl bg-transparent px-4 py-3 text-2xl font-semibold text-slate-900 outline-none"
        />
        <span className="pr-4 text-sm font-semibold text-slate-500">{fromLabel}</span>
      </div>

      {direction === 'xlm-to-ngn' && (
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(String(p))}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-200"
            >
              {p} XLM
            </button>
          ))}
        </div>
      )}

      <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="calc-rate">
        Rate (₦ per XLM)
      </label>
      <input
        id="calc-rate"
        inputMode="decimal"
        value={rate}
        onChange={(e) => setRate(e.target.value.replace(/[^\d.]/g, ''))}
        placeholder="e.g. 520"
        className="mt-1.5 w-full rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
      {market && (
        <p className="mt-1.5 text-xs text-slate-500">
          Market reference: {formatNgn(market.ngn)}.{' '}
          <button
            type="button"
            className="font-medium text-brand-600 hover:underline"
            onClick={() => setRate(String(Math.round(market.ngn * 100) / 100))}
          >
            Use it
          </button>
        </p>
      )}
      {marketError && !market && (
        <p className="mt-1.5 text-xs text-slate-500">Market reference is unavailable right now — enter the rate you have in mind.</p>
      )}

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">You {direction === 'xlm-to-ngn' ? 'receive about' : 'get about'}</p>
        <p className="mt-1 text-3xl font-semibold text-slate-900" aria-live="polite">
          {toLabel === 'NGN' ? formatNgn(result) : formatXlm(result, 7)}
        </p>
        <p className="mt-2 text-xs text-slate-500">No trading fees. Final price depends on the offer you choose.</p>
      </div>

      <Button href={appLinks.register} className="mt-6 w-full" size="lg">
        {direction === 'xlm-to-ngn' ? 'Sell XLM on Nexlm' : 'Buy XLM on Nexlm'}
      </Button>
    </div>
  );
}
