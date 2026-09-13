import { ArrowRight, Landmark, Lock, User } from 'lucide-react';

function Node({ icon: Icon, title, subtitle, tone }) {
  return (
    <div className={`flex flex-col items-center rounded-2xl border p-4 text-center ${tone}`}>
      <Icon className="h-6 w-6" aria-hidden />
      <p className="mt-2 font-semibold">{title}</p>
      <p className="mt-1 text-xs opacity-80">{subtitle}</p>
    </div>
  );
}

function Arrow({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 px-1 text-xs text-slate-400">
      <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" aria-hidden />
      <span className="text-center">{label}</span>
    </div>
  );
}

/** Visual summary of how XLM and Naira move during a trade. */
export function EscrowDiagram() {
  return (
    <figure
      className="rounded-3xl border border-white/10 bg-ink-900 p-6 sm:p-8"
      aria-label="Escrow flow: the seller funds an escrow account with XLM, the escrow releases the XLM to the buyer on confirmation, and Naira goes directly from buyer to seller."
    >
      <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <Node icon={User} title="Seller" subtitle="Funds a new escrow account" tone="border-white/10 bg-white/5 text-white" />
        <Arrow label="XLM + 2 XLM reserve" />
        <Node icon={Lock} title="Escrow account" subtitle="Seller key disabled · platform co-signs" tone="border-brand-400/40 bg-brand-500/10 text-brand-100" />
        <Arrow label="Released on confirmation" />
        <Node icon={User} title="Buyer" subtitle="Receives XLM in ~5 seconds" tone="border-naira-400/40 bg-naira-500/10 text-naira-100" />
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 p-3 text-sm text-slate-300">
        <Landmark className="h-4 w-4" aria-hidden />
        Naira goes directly from buyer to seller — never through Nexlm
      </div>
      <figcaption className="mt-4 text-center text-xs text-slate-500">
        If the buyer doesn&apos;t pay in time, the escrow merges back into the seller&apos;s wallet automatically.
      </figcaption>
    </figure>
  );
}
