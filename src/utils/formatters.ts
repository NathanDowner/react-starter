export function formatCurrency(
  num: number,
  currency = 'JMD',
  decimalPlaces = 2
): string {
  const result = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: decimalPlaces,
    minimumFractionDigits: decimalPlaces,
  }).format(num);

  return currency === 'JMD' ? result.replace('JMD', 'JMD $') : `USD ${result}`;
}

export function formatNumber(num: number, decimalPlaces = 2): string {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: decimalPlaces,
  }).format(num);
}

export const dateFormatter = (date: number | Date) =>
  new Intl.DateTimeFormat('en-US').format(date);
