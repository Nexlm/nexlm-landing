import { Activity } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchNetworkPulse } from '../../lib/horizon.js';
import { cn } from '../../lib/cn.js';

/** Live proof of Stellar's speed, read straight from public Horizon. */
export function NetworkPulse({ className }) {
  const [pulse, setPulse] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const load = () => fetchNetworkPulse({ signal: controller.signal }).then(setPulse).catch(() => {});
    load();
    const timer = setInterval(load, 15_000);
    return () => {
      clearInterval(timer);
      controller.abort();
    };
  }, []);

  if (!pulse) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500', className)} aria-live="polite">
      <span className="inline-flex items-center gap-2 font-medium text-slate-700">
        <Activity className="h-4 w-4 text-naira-500" aria-hidden /> Stellar mainnet, live
      </span>
      <span>
        Ledger <span className="font-mono font-semibold text-slate-900">#{Number(pulse.sequence).toLocaleString('en-US')}</span>
      </span>
      {pulse.avgCloseSeconds && (
        <span>
          Closing every <span className="font-semibold text-slate-900">{pulse.avgCloseSeconds}s</span>
        </span>
      )}
      <span>
        <span className="font-semibold text-slate-900">{pulse.avgTransactions.toLocaleString('en-US')}</span> transactions per ledger
      </span>
    </div>
  );
}
