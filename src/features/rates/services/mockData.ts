import type {
  CurrencyItem,
  RemittanceBankItem,
  RemittanceRegionFilter,
  WatchlistCardItem,
} from '../types';

export const MOCK_WATCHLIST: WatchlistCardItem[] = [
  {
    id: 'jpy-idr',
    pair: 'JPY / IDR',
    rateFormatted: 'Rp 105.42',
    rateSubtext: '1 Japanese Yen',
    changePercent: '+0.84%',
    isPositive: true,
    isHighlighted: true,
  },
  {
    id: 'usd-idr',
    pair: 'USD / IDR',
    rateFormatted: 'Rp 15,820',
    rateSubtext: '1 US Dollar',
    changePercent: '-0.12%',
    isPositive: false,
    isHighlighted: false,
  },
  {
    id: 'eur-idr',
    pair: 'EUR / IDR',
    rateFormatted: 'Rp 17,250',
    rateSubtext: '1 Euro',
    changePercent: '+0.35%',
    isPositive: true,
    isHighlighted: false,
  },
  {
    id: 'sgd-idr',
    pair: 'SGD / IDR',
    rateFormatted: 'Rp 11,890',
    rateSubtext: '1 Singapore Dollar',
    changePercent: '+0.18%',
    isPositive: true,
    isHighlighted: false,
  },
  {
    id: 'gbp-idr',
    pair: 'GBP / IDR',
    rateFormatted: 'Rp 20,150',
    rateSubtext: '1 British Pound',
    changePercent: '+0.22%',
    isPositive: true,
    isHighlighted: false,
  },
];

export const MOCK_CURRENCIES: CurrencyItem[] = [
  {
    code: 'IDR',
    name: 'Indonesian Rupiah',
    symbol: 'Rp',
    flag: '🇮🇩',
    rateToIdr: 1,
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    flag: '🇯🇵',
    rateToIdr: 113.02,
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
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    rateToIdr: 17250,
  },
  {
    code: 'SGD',
    name: 'Singapore Dollar',
    symbol: 'S$',
    flag: '🇸🇬',
    rateToIdr: 11890,
  },
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    rateToIdr: 20150,
  },
  {
    code: 'AUD',
    name: 'Australian Dollar',
    symbol: 'A$',
    flag: '🇦🇺',
    rateToIdr: 10420,
  },
  {
    code: 'MYR',
    name: 'Malaysian Ringgit',
    symbol: 'RM',
    flag: '🇲🇾',
    rateToIdr: 3550,
  },
  {
    code: 'THB',
    name: 'Thai Baht',
    symbol: '฿',
    flag: '🇹🇭',
    rateToIdr: 460,
  },
  {
    code: 'KRW',
    name: 'South Korean Won',
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
  return `1 ${fromCode} = ${formattedRate} ${toCode}`;
}

export const REMITTANCE_FILTER_CATEGORIES: { id: RemittanceRegionFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'asia', label: 'Asia' },
  { id: 'eropa', label: 'Europe' },
  { id: 'amerika', label: 'Americas' },
  { id: 'digital', label: 'Digital' },
];

export const MOCK_REMITTANCE_BANKS: RemittanceBankItem[] = [
  {
    id: 'webank',
    name: 'WeBank (微众银行)',
    country: 'China',
    countryFlag: '🇨🇳',
    categoryType: 'Digital Neobank',
    region: 'asia',
    statusBadgeText: 'Nomadly Official Partner • Auto-Clear FX',
    statusBadgeType: 'green',
    description:
      'Pioneering digital bank founded by Tencent. Global leader in AI-powered banking, instant micro-loans, and seamless cross-border cashless payments without physical branches.',
    featureTags: ['WeChat Pay QR Sync', 'Zero Fee FX', '24/7 Digital'],
    complianceText: 'Tencent Ecosystem',
    complianceIcon: '🛡️',
    avatarBgColor: '#FFFFFF',
    avatarTextColor: '#0052D9',
    avatarText: 'WeBank',
  },
  {
    id: 'bca',
    name: 'Bank Central Asia (BCA)',
    country: 'Indonesia',
    countryFlag: '🇮🇩',
    categoryType: 'Premier Commercial Bank',
    region: 'asia',
    statusBadgeText: 'Primary IDR Gateway • Instant Top-up',
    statusBadgeType: 'blue',
    description:
      'Largest private bank in Indonesia with trusted digital banking ecosystem (BCA Mobile & myBCA). Supports rapid foreign exchange transfers, cross-border QR payments across Southeast Asia, and nationwide ATM network.',
    featureTags: ['myBCA Direct API', 'Cross-Border QR', 'Low FX Spread'],
    complianceText: 'BCA OneKlik Enabled',
    complianceIcon: '⚡',
    avatarBgColor: '#FFFFFF',
    avatarTextColor: '#005EAD',
    avatarText: 'BCA',
  },
  {
    id: 'revolut',
    name: 'Revolut',
    country: 'UK & European Union',
    countryFlag: '🇬🇧 🇪🇺',
    categoryType: 'Global Superapp',
    region: 'eropa',
    statusBadgeText: 'Multi-Currency Vault',
    statusBadgeType: 'purple',
    description:
      'Global financial technology company providing multi-currency accounts, debit cards with zero foreign exchange fees in 150+ countries, and instant global money transfers.',
    featureTags: ['Multi-Vault EUR/USD', 'Zero ATM Withdrawal Fee Abroad'],
    complianceText: 'FCA & BoL Regulated',
    complianceIcon: '🔒',
    avatarBgColor: '#0F172A',
    avatarTextColor: '#FFFFFF',
    avatarText: 'R',
  },
  {
    id: 'dbs',
    name: 'DBS Bank',
    country: 'Singapore',
    countryFlag: '🇸🇬',
    categoryType: 'Best Bank in the World',
    region: 'asia',
    statusBadgeText: 'Southeast Asia Hub',
    statusBadgeType: 'cyan',
    description:
      'Leading financial services group headquartered in Singapore. Offers zero-fee remittance infrastructure, digibank multi-currency accounts, and world-class asset protection.',
    featureTags: ['Instant Zero-Fee Remit', 'Digibank Multi-Currency'],
    complianceText: 'MAS Regulated AAA Tier',
    complianceIcon: '🛡️',
    avatarBgColor: '#000000',
    avatarTextColor: '#EF4444',
    avatarText: 'DBS',
  },
  {
    id: 'chase',
    name: 'Chase (JPMorgan Chase)',
    country: 'United States',
    countryFlag: '🇺🇸',
    categoryType: 'Global Tier-1',
    region: 'amerika',
    statusBadgeText: 'USD Settlement Partner',
    statusBadgeType: 'blue',
    description:
      'Leading U.S. financial institution providing ultra-fast USD clearing worldwide, premier Sapphire travel credit networks, and comprehensive fraud protection.',
    featureTags: ['FedNow Settlement', 'Global Travel Points'],
    complianceText: 'FDIC Insured Clearing',
    complianceIcon: '🛡️',
    avatarBgColor: '#005EA6',
    avatarTextColor: '#FFFFFF',
    avatarText: 'CHASE',
  },
];


export function filterRemittanceBanks(
  query: string,
  region: RemittanceRegionFilter
): RemittanceBankItem[] {
  const q = query.trim().toLowerCase();

  return MOCK_REMITTANCE_BANKS.filter((item) => {
    // 1. Region filter
    const matchesRegion =
      region === 'all'
        ? true
        : region === 'digital'
        ? item.id === 'webank' || item.id === 'revolut' || item.categoryType.toLowerCase().includes('digital')
        : item.region === region;

    if (!matchesRegion) return false;

    // 2. Query filter
    if (!q) return true;

    return (
      item.name.toLowerCase().includes(q) ||
      item.country.toLowerCase().includes(q) ||
      item.categoryType.toLowerCase().includes(q) ||
      item.featureTags.some((tag) => tag.toLowerCase().includes(q))
    );
  });
}

