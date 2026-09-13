import { site } from '../config/site.js';

export const WAITLIST_ROLES = [
  { value: 'buyer', label: 'I want to buy XLM' },
  { value: 'seller', label: 'I want to sell XLM' },
  { value: 'trader', label: 'I trade actively' },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateWaitlist({ email, role }) {
  const errors = {};
  if (!EMAIL_PATTERN.test(String(email ?? '').trim())) errors.email = 'Enter a valid email address';
  if (!WAITLIST_ROLES.some((r) => r.value === role)) errors.role = 'Choose what you want to do';
  return errors;
}

export function waitlistMailto({ email, role }) {
  const subject = encodeURIComponent('Nexlm early access');
  const body = encodeURIComponent(`Please add me to the Nexlm waitlist.\n\nEmail: ${email}\nInterest: ${role}`);
  return `mailto:${site.supportEmail}?subject=${subject}&body=${body}`;
}

/**
 * Submits to the configured endpoint. Returns { mode: 'api' } on success or
 * { mode: 'mailto', href } when no endpoint is configured.
 */
export async function joinWaitlist(entry, { endpoint = site.waitlistEndpoint, fetchImpl = fetch } = {}) {
  const payload = { email: entry.email.trim().toLowerCase(), role: entry.role };
  if (!endpoint) return { mode: 'mailto', href: waitlistMailto(payload) };

  const res = await fetchImpl(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('We could not add you right now. Please try again.');
  return { mode: 'api' };
}
