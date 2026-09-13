import { describe, expect, it } from 'vitest';
import { convert, formatCompact, formatNgn, formatXlm } from './format.js';

describe('convert', () => {
  it('converts XLM to NGN rounded to the kobo', () => {
    expect(convert(100, 520.25, 'xlm-to-ngn')).toBe(52025);
    expect(convert('1.005', 3, 'xlm-to-ngn')).toBe(3.02);
  });

  it('converts NGN to XLM with 7 decimals', () => {
    expect(convert(52025, 520.25, 'ngn-to-xlm')).toBe(100);
    expect(convert(1, 3, 'ngn-to-xlm')).toBe(0.3333333);
  });

  it('returns 0 for invalid input', () => {
    expect(convert('abc', 500, 'xlm-to-ngn')).toBe(0);
    expect(convert(10, 0, 'ngn-to-xlm')).toBe(0);
    expect(convert(-5, 500, 'xlm-to-ngn')).toBe(0);
  });
});

describe('formatting', () => {
  it('formats Naira and XLM', () => {
    expect(formatNgn(52025)).toContain('52,025');
    expect(formatXlm(1234.56789)).toBe('1,234.5679 XLM');
    expect(formatXlm('bad')).toBe('0 XLM');
  });

  it('formats compact numbers', () => {
    expect(formatCompact(50_000_000)).toMatch(/50/);
  });
});
