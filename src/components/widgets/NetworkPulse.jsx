import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn.js';
import { fetchNetworkPulse } from '../../lib/horizon.js';

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

  const cells = [
    { label: 'Stellar mainnet ledger', value: pulse ? `#${Number(pulse.sequence).toLocaleString('en-US')}` : '—' },
    { label: 'Average close time', value: pulse?.avgCloseSeconds ? `${pulse.avgCloseSeconds}s` : '—' },
    { label: 'Transactions per ledger', value: pulse ? pulse.avgTransactions.toLocaleString('en-US') : '—' },
  ];

  return (
    <dl className={cn('grid border-y border-line sm:grid-cols-3', className)} aria-live="polite">
      {cells.map((cell, i) => (
        <div key={cell.label} className={cn('py-5', i > 0 && 'sm:border-l sm:border-line sm:pl-6')}>
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-moss">{cell.label}</dt>
          <dd className="num mt-2 text-2xl font-semibold text-paper">{cell.value}</dd>
        </div>
      ))}
    </dl>
  );
}
