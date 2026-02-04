import { describe, it, expect } from 'vitest';
import { add, capitalize, formatCurrency } from './index';

describe('utils', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('capitalizes a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('formats currency', () => {
    expect(formatCurrency(100)).toBe('$100.00');
  });
});
