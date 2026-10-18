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

export type RemittanceRegionFilter = 'all' | 'asia' | 'eropa' | 'amerika' | 'digital';

export type RemittanceBankItem = {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  categoryType: string;
  region: 'asia' | 'eropa' | 'amerika' | 'digital';
  statusBadgeText: string;
  statusBadgeType: 'green' | 'blue' | 'purple' | 'cyan';
  description: string;
  featureTags: string[];
  complianceText: string;
  complianceIcon: string;
  avatarBgColor: string;
  avatarTextColor: string;
  avatarText: string;
};
