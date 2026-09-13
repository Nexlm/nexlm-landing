import { BadgeCheck, Clock, Lock } from 'lucide-react';

/** Illustrative mock of the Nexlm trade room (not live data). */
export function TradePreview() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-label="Illustration of a Nexlm trade" role="img">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/30 to-naira-500/20 blur-2xl" aria-hidden />
      <div className="relative rounded-3xl border border-white/10 bg-ink-800/90 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Buying from</p>
            <p className="flex items-center gap-1 font-semibold text-white">
              emeka_ng <BadgeCheck className="h-4 w-4 text-brand-400" />
            </p>
          </div>
          <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-300">Awaiting payment</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/5 p-3">
            <p className="text-xs text-slate-400">You receive</p>
            <p className="text-lg font-semibold text-white">250 XLM</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-3">
            <p className="text-xs text-slate-400">You pay</p>
            <p className="text-lg font-semibold text-white">₦130,000</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-2xl border border-naira-500/30 bg-naira-500/10 px-3 py-2.5">
          <span className="flex items-center gap-2 text-sm text-naira-300">
            <Lock className="h-4 w-4" /> 250 XLM locked in escrow
          </span>
          <span className="text-xs text-naira-400">on-chain ✓</span>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2.5 text-sm">
          <span className="flex items-center gap-2 text-slate-300">
            <Clock className="h-4 w-4" /> Time left to pay
          </span>
          <span className="font-mono font-semibold text-white">12:48</span>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <p className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-slate-200">
            OPay 803 123 4567 — Emeka Okafor
          </p>
          <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand-500 px-3 py-2 text-white">Sent! Receipt attached 📎</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <span className="rounded-full bg-naira-500 py-2.5 text-center text-sm font-semibold text-ink-950">I have paid</span>
          <span className="rounded-full border border-white/15 py-2.5 text-center text-sm font-semibold text-slate-300">Cancel</span>
        </div>
      </div>
    </div>
  );
}
