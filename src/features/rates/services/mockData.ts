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

export const REMITTANCE_FILTER_CATEGORIES: { id: RemittanceRegionFilter; label: string }[] = [
  { id: 'all', label: 'Semua' },
  { id: 'asia', label: 'Asia' },
  { id: 'eropa', label: 'Eropa' },
  { id: 'amerika', label: 'Amerika' },
  { id: 'digital', label: 'Digital' },
];

export const MOCK_REMITTANCE_BANKS: RemittanceBankItem[] = [
  {
    id: 'webank',
    name: 'WeBank (微众银行)',
    country: 'Tiongkok',
    countryFlag: '🇨🇳',
    categoryType: 'Digital Neobank',
    region: 'asia',
    statusBadgeText: 'Mitra Resmi Nomadly • Auto-Clear FX',
    statusBadgeType: 'green',
    description:
      'Bank digital murni pertama di Tiongkok yang didirikan oleh Tencent. Terkemuka dalam teknologi AI banking, micro-loans instan, dan solusi pembayaran lintas negara tanpa kantor cabang fisik.',
    featureTags: ['QR WeChat Pay Sync', 'Zero Fee FX', '24/7 Digital'],
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
    categoryType: 'Bank Komersial Terbesar',
    region: 'asia',
    statusBadgeText: 'Dompet Utama IDR • Instant Top-up',
    statusBadgeType: 'blue',
    description:
      'Bank swasta terbesar di Indonesia dengan ekosistem perbankan digital terandal (BCA Mobile & myBCA). Mendukung transfer valas cepat, QRIS cross-border ke berbagai negara Asia Tenggara, dan jaringan ATM terluas.',
    featureTags: ['myBCA Direct API', 'QRIS Cross-Border', 'Kurs Rendah'],
    complianceText: 'BCA OneKlik Enabled',
    complianceIcon: '⚡',
    avatarBgColor: '#FFFFFF',
    avatarTextColor: '#005EAD',
    avatarText: 'BCA',
  },
  {
    id: 'revolut',
    name: 'Revolut',
    country: 'Inggris & Uni Eropa',
    countryFlag: '🇬🇧 🇪🇺',
    categoryType: 'Global Superapp',
    region: 'eropa',
    statusBadgeText: 'Multi-Currency Vault',
    statusBadgeType: 'purple',
    description:
      'Fintech perbankan global asal Inggris yang menyediakan rekening multi-mata uang, kartu debit bebas biaya konversi di lebih dari 150 negara, serta transfer internasional instan.',
    featureTags: ['Multi-Vault EUR/USD', 'Bebas Biaya Tarik ATM Luar Negeri'],
    complianceText: 'FCA & BoL Regulated',
    complianceIcon: '🔒',
    avatarBgColor: '#0F172A',
    avatarTextColor: '#FFFFFF',
    avatarText: 'R',
  },
  {
    id: 'dbs',
    name: 'DBS Bank',
    country: 'Singapura',
    countryFlag: '🇸🇬',
    categoryType: 'Best Bank in the World',
    region: 'asia',
    statusBadgeText: 'Southeast Asia Hub',
    statusBadgeType: 'cyan',
    description:
      'Grup perbankan terkemuka di Asia yang berkantor pusat di Singapura. Menawarkan infrastruktur remitansi instan, rekening multicurrency digibank, dan proteksi aset kelas dunia.',
    featureTags: ['Remit Instan 0 Biaya', 'Digibank Multi-Currency'],
    complianceText: 'MAS Regulated AAA Tier',
    complianceIcon: '🛡️',
    avatarBgColor: '#000000',
    avatarTextColor: '#EF4444',
    avatarText: 'DBS',
  },
  {
    id: 'chase',
    name: 'Chase (JPMorgan Chase)',
    country: 'Amerika Serikat',
    countryFlag: '🇺🇸',
    categoryType: 'Global Tier-1',
    region: 'amerika',
    statusBadgeText: 'USD Settlement Partner',
    statusBadgeType: 'blue',
    description:
      'Institusi finansial terkemuka di Amerika Serikat yang menyediakan kliring USD tercepat di dunia, jaringan kartu kredit perjalanan Sapphire terbaik, dan perlindungan penipuan menyeluruh.',
    featureTags: ['FedNow Settlement', 'Global Travel Points'],
    complianceText: 'FDIC Insured Kliring',
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

