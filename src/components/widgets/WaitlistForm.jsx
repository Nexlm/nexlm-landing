import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/cn.js';
import { joinWaitlist, validateWaitlist, WAITLIST_ROLES } from '../../lib/waitlist.js';
import { Button } from '../ui/Button.jsx';

export function WaitlistForm({ dark = true }) {
  const [form, setForm] = useState({ email: '', role: 'buyer' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function submit(e) {
    e.preventDefault();
    const found = validateWaitlist(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('loading');
    try {
      const result = await joinWaitlist(form);
      if (result.mode === 'mailto') window.location.href = result.href;
      setStatus('done');
    } catch (err) {
      setMessage(err.message);
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className={cn('flex items-center gap-2 text-base font-medium', dark ? 'text-naira-300' : 'text-naira-600')} role="status">
        <CheckCircle2 className="h-5 w-5" /> You&apos;re on the list. We&apos;ll email you when your invite is ready.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xl" noValidate>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="What do you want to do?">
        {WAITLIST_ROLES.map((r) => (
          <button
            key={r.value}
            type="button"
            role="radio"
            aria-checked={form.role === r.value}
            onClick={() => setForm((f) => ({ ...f, role: r.value }))}
            className={cn(
              'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
              form.role === r.value
                ? 'border-naira-400 bg-naira-400/10 text-naira-300'
                : dark
                  ? 'border-white/15 text-slate-400 hover:text-white'
                  : 'border-slate-300 text-slate-600 hover:bg-slate-50',
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'waitlist-error' : undefined}
          className={cn(
            'h-12 flex-1 rounded-full border px-5 text-sm outline-none focus:ring-2 focus:ring-brand-400/40',
            dark ? 'border-white/15 bg-white/5 text-white placeholder:text-slate-500' : 'border-slate-300 bg-white text-slate-900',
            errors.email && 'border-rose-400',
          )}
        />
        <Button type="submit" variant="naira" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining…' : 'Get early access'}
        </Button>
      </div>
      {(errors.email || status === 'error') && (
        <p id="waitlist-error" className="mt-2 text-sm text-rose-400">
          {errors.email ?? message}
        </p>
      )}
    </form>
  );
}
