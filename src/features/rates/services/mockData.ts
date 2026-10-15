import type { CurrencyItem, WatchlistCardItem } from '../types';

export const MOCK_WATCHLIST: WatchlistCardItem[] = [
  {
    id: 'jpy-idr',
    pair: 'JPY / IDR',
    rateFormatted: 'Rp 105,42',
    rateSubtext: '1 Yen Jepang',
    changePercent: '+0.84%',
    isPositive: true,
    isHighlighted: true,
  },
  {
    id: 'usd-idr',
    pair: 'USD / IDR',
    rateFormatted: 'Rp 15.820',
    rateSubtext: '1 US Dollar',
    changePercent: '-0.12%',
    isPositive: false,
    isHighlighted: false,
  },
  {
    id: 'eur-idr',
    pair: 'EUR / IDR',
    rateFormatted: 'Rp 17.250',
    rateSubtext: '1 Euro Uni Eropa',
    changePercent: '+0.35%',
    isPositive: true,
    isHighlighted: false,
  },
  {
    id: 'sgd-idr',
    pair: 'SGD / IDR',
    rateFormatted: 'Rp 11.890',
    rateSubtext: '1 Dolar Singapura',
    changePercent: '+0.18%',
    isPositive: true,
    isHighlighted: false,
  },
  {
    id: 'gbp-idr',
    pair: 'GBP / IDR',
    rateFormatted: 'Rp 20.150',
    rateSubtext: '1 Pound Britania',
    changePercent: '+0.22%',
    isPositive: true,
    isHighlighted: false,
  },
];

export const MOCK_CURRENCIES: CurrencyItem[] = [
  {
    code: 'IDR',
    name: 'Rupiah Indonesia',
    symbol: 'Rp',
    flag: '🇮🇩',
    rateToIdr: 1,
  },
  {
    code: 'JPY',
    name: 'Yen Jepang',
    symbol: '¥',
    flag: '🇯🇵',
    rateToIdr: 113.02, // 1 IDR = 0.008848 JPY match mockup
  },
  {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    rateToIdr: 15820,
  },
  {
    code: 'EUR',
    name: 'Euro Uni Eropa',
    symbol: '€',
    flag: '🇪🇺',
    rateToIdr: 17250,
  },
  {
    code: 'SGD',
    name: 'Dolar Singapura',
    symbol: 'S$',
    flag: '🇸🇬',
    rateToIdr: 11890,
  },
  {
    code: 'GBP',
    name: 'Pound Britania',
    symbol: '£',
    flag: '🇬🇧',
    rateToIdr: 20150,
  },
  {
    code: 'AUD',
    name: 'Dolar Australia',
    symbol: 'A$',
    flag: '🇦🇺',
    rateToIdr: 10420,
  },
  {
    code: 'MYR',
    name: 'Ringgit Malaysia',
    symbol: 'RM',
    flag: '🇲🇾',
    rateToIdr: 3550,
  },
  {
    code: 'THB',
    name: 'Baht Thailand',
    symbol: '฿',
    flag: '🇹🇭',
    rateToIdr: 460,
  },
  {
    code: 'KRW',
    name: 'Won Korea',
    symbol: '₩',
    flag: '🇰🇷',
    rateToIdr: 11.5,
  },
];

export function findCurrencyByCode(code: string): CurrencyItem {
  return (
    MOCK_CURRENCIES.find((c) => c.code.toUpperCase() === code.toUpperCase()) ??
    MOCK_CURRENCIES[0]
  );
}

export function searchCurrencies(query: string): CurrencyItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return MOCK_CURRENCIES;
  return MOCK_CURRENCIES.filter(
    (c) =>
      c.code.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q)
  );
}

export function formatThousands(val: number | string): string {
  const numStr = String(val).replace(/\D/g, '');
  if (!numStr) return '0';
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function parseNumberString(val: string): number {
  const clean = val.replace(/\./g, '').replace(/,/g, '.').replace(/[^\d.]/g, '');
  return parseFloat(clean) || 0;
}

export function convertCurrency(
  amount: number,
  fromCode: string,
  toCode: string
): number {
  if (fromCode === toCode) return amount;
  const fromCurrency = findCurrencyByCode(fromCode);
  const toCurrency = findCurrencyByCode(toCode);

  const amountInIdr = amount * fromCurrency.rateToIdr;
  const converted = amountInIdr / toCurrency.rateToIdr;
  return converted;
}

export function getMiddleRateString(fromCode: string, toCode: string): string {
  const fromCurrency = findCurrencyByCode(fromCode);
  const toCurrency = findCurrencyByCode(toCode);
  const rate = fromCurrency.rateToIdr / toCurrency.rateToIdr;

  const formattedRate = rate < 0.01 ? rate.toFixed(6) : rate.toFixed(4);
  return `Rp 1 ${fromCode} = ${formattedRate} ${toCode}`;
}
