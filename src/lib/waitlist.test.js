import { describe, expect, it, vi } from 'vitest';
import { joinWaitlist, validateWaitlist, waitlistMailto } from './waitlist.js';

describe('validateWaitlist', () => {
  it('accepts a valid entry', () => {
    expect(validateWaitlist({ email: 'amaka@example.ng', role: 'buyer' })).toEqual({});
  });

  it('flags bad emails and roles', () => {
    expect(validateWaitlist({ email: 'nope', role: 'buyer' })).toHaveProperty('email');
    expect(validateWaitlist({ email: 'a@b.co', role: 'whale' })).toHaveProperty('role');
  });
});

describe('joinWaitlist', () => {
  it('falls back to mailto without an endpoint', async () => {
    const result = await joinWaitlist({ email: 'Dayo@Example.ng ', role: 'trader' }, { endpoint: '' });
    expect(result.mode).toBe('mailto');
    expect(result.href).toContain('dayo%40example.ng');
  });

  it('posts normalised JSON to the endpoint', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true });
    await joinWaitlist({ email: 'Emeka@Example.ng', role: 'seller' }, { endpoint: 'https://x.test/w', fetchImpl });
    const [, init] = fetchImpl.mock.calls[0];
    expect(JSON.parse(init.body)).toEqual({ email: 'emeka@example.ng', role: 'seller' });
  });

  it('throws a friendly error when the endpoint fails', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: false });
    await expect(joinWaitlist({ email: 'a@b.co', role: 'buyer' }, { endpoint: 'https://x.test', fetchImpl })).rejects.toThrow(
      'could not add you',
    );
  });

  it('builds a support mailto link', () => {
    expect(waitlistMailto({ email: 'a@b.co', role: 'buyer' })).toMatch(/^mailto:support@nexlm\.app\?subject=/);
  });
});
