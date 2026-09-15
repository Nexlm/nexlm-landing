import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/cn.js';
import { joinWaitlist, validateWaitlist, WAITLIST_ROLES } from '../../lib/waitlist.js';
import { Button } from '../ui/Button.jsx';

export function WaitlistForm() {
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
      <p className="flex items-center gap-2 text-base font-medium text-mint" role="status">
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
              'rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors',
              form.role === r.value ? 'border-gold bg-gold/10 text-gold' : 'border-line text-moss hover:text-paper',
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
          className={cn('field h-12 flex-1', errors.email && 'border-ember')}
        />
        <Button type="submit" variant="gold" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining…' : 'Get early access'}
        </Button>
      </div>
      {(errors.email || status === 'error') && (
        <p id="waitlist-error" className="mt-2 text-sm text-ember">
          {errors.email ?? message}
        </p>
      )}
    </form>
  );
}
