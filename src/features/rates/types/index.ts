export type RateTabType = 'exchange' | 'remittance';

export type CurrencyItem = {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  rateToIdr: number;
};

export type WatchlistCardItem = {
  id: string;
  pair: string;
  rateFormatted: string;
  rateSubtext: string;
  changePercent: string;
  isPositive: boolean;
  isHighlighted?: boolean;
};

export type ConverterState = {
  fromCode: string;
  toCode: string;
  fromAmount: string;
  toAmount: string;
};
