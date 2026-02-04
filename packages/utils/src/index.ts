export const add = (a: number, b: number) => a + b;
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const formatCurrency = (amount: number, currency: string = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};
