import type { AIEstimateResult, CountryOption, PlannerFormData } from '../types';

export const ALL_COUNTRIES: CountryOption[] = [
  {
    id: 'id',
    name: 'Indonesia',
    code: 'ID',
    currency: 'IDR',
    currencySymbol: 'Rp',
    exchangeRateToIdr: 1,
    flag: '🇮🇩',
  },
  {
    id: 'ie',
    name: 'Irlandia',
    code: 'IE',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRateToIdr: 17500,
    flag: '🇮🇪',
  },
  {
    id: 'it',
    name: 'Italia',
    code: 'IT',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRateToIdr: 17500,
    flag: '🇮🇹',
  },
  {
    id: 'is',
    name: 'Islandia',
    code: 'IS',
    currency: 'ISK',
    currencySymbol: 'kr',
    exchangeRateToIdr: 120,
    flag: '🇮🇸',
  },
  {
    id: 'in',
    name: 'India',
    code: 'IN',
    currency: 'INR',
    currencySymbol: '₹',
    exchangeRateToIdr: 195,
    flag: '🇮🇳',
  },
  {
    id: 'gb',
    name: 'Inggris (UK)',
    code: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    exchangeRateToIdr: 20800,
    flag: '🇬🇧',
  },
  {
    id: 'jp',
    name: 'Jepang',
    code: 'JP',
    currency: 'JPY',
    currencySymbol: '¥',
    exchangeRateToIdr: 105,
    flag: '🇯🇵',
  },
  {
    id: 'de',
    name: 'Jerman',
    code: 'DE',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRateToIdr: 17500,
    flag: '🇩🇪',
  },
  {
    id: 'kr',
    name: 'Korea Selatan',
    code: 'KR',
    currency: 'KRW',
    currencySymbol: '₩',
    exchangeRateToIdr: 12,
    flag: '🇰🇷',
  },
  {
    id: 'my',
    name: 'Malaysia',
    code: 'MY',
    currency: 'MYR',
    currencySymbol: 'RM',
    exchangeRateToIdr: 3500,
    flag: '🇲🇾',
  },
  {
    id: 'sg',
    name: 'Singapura',
    code: 'SG',
    currency: 'SGD',
    currencySymbol: 'S$',
    exchangeRateToIdr: 11800,
    flag: '🇸🇬',
  },
  {
    id: 'th',
    name: 'Thailand',
    code: 'TH',
    currency: 'THB',
    currencySymbol: '฿',
    exchangeRateToIdr: 450,
    flag: '🇹🇭',
  },
  {
    id: 'au',
    name: 'Australia',
    code: 'AU',
    currency: 'AUD',
    currencySymbol: 'A$',
    exchangeRateToIdr: 10500,
    flag: '🇦🇺',
  },
  {
    id: 'us',
    name: 'Amerika Serikat',
    code: 'US',
    currency: 'USD',
    currencySymbol: '$',
    exchangeRateToIdr: 16200,
    flag: '🇺🇸',
  },
  {
    id: 'ch',
    name: 'Swiss',
    code: 'CH',
    currency: 'CHF',
    currencySymbol: 'CHF',
    exchangeRateToIdr: 18200,
    flag: '🇨🇭',
  },
  {
    id: 'fr',
    name: 'Prancis',
    code: 'FR',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRateToIdr: 17500,
    flag: '🇫🇷',
  },
  {
    id: 'tr',
    name: 'Turki',
    code: 'TR',
    currency: 'TRY',
    currencySymbol: '₺',
    exchangeRateToIdr: 480,
    flag: '🇹🇷',
  },
  {
    id: 'sa',
    name: 'Arab Saudi',
    code: 'SA',
    currency: 'SAR',
    currencySymbol: 'SR',
    exchangeRateToIdr: 4300,
    flag: '🇸🇦',
  },
  {
    id: 'vn',
    name: 'Vietnam',
    code: 'VN',
    currency: 'VND',
    currencySymbol: '₫',
    exchangeRateToIdr: 0.65,
    flag: '🇻🇳',
  },
  {
    id: 'cn',
    name: 'China',
    code: 'CN',
    currency: 'CNY',
    currencySymbol: '¥',
    exchangeRateToIdr: 2250,
    flag: '🇨🇳',
  },
];

export function searchCountries(query: string): CountryOption[] {
  const q = query.trim().toLowerCase();
  if (!q) return ALL_COUNTRIES;
  return ALL_COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.currency.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q)
  );
}

export function findCountryByName(name: string): CountryOption {
  const found = ALL_COUNTRIES.find((c) => c.name.toLowerCase() === name.toLowerCase());
  return found || ALL_COUNTRIES[0];
}

export function parseRupiahNumber(str: string): number {
  const clean = str.replace(/[^0-9]/g, '');
  const parsed = parseInt(clean, 10);
  return isNaN(parsed) ? 0 : parsed;
}

export function formatRupiah(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function formatCurrencyValue(amount: number, symbol: string): string {
  return `${symbol}${Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

export function calculateAIEstimate(formData: PlannerFormData): AIEstimateResult {
  const budgetIdr = parseRupiahNumber(formData.nominalBudget) || 10000000;
  const destCountry = findCountryByName(formData.destinationCountry) || ALL_COUNTRIES.find((c) => c.code === 'JP')!;

  const rate = destCountry.exchangeRateToIdr || 105;
  const totalTarget = Math.round(budgetIdr / rate);

  if (formData.maximizeBudget) {
    // 100% allocation - zero savings left
    return {
      totalPercentage: 100,
      durationDays: formData.durationDays,
      currencySymbol: destCountry.currencySymbol,
      currencyCode: destCountry.currency,
      totalBudgetTargetCurrency: totalTarget,
      items: [
        {
          id: 'acc',
          category: 'Tempat Tinggal (Akomodasi)',
          subCategory: `Hostel / Hotel di ${formData.destinationRegion || destCountry.name}`,
          percentage: 35,
          amountTargetCurrency: Math.round(totalTarget * 0.35),
          amountIdr: Math.round(budgetIdr * 0.35),
          color: '#2563EB', // Blue
          iconName: { ios: 'bed.double.fill', android: 'hotel', web: 'hotel' },
        },
        {
          id: 'food',
          category: 'Makanan & Kuliner',
          subCategory: 'Kuliner Lokal, Cafe & Street Food',
          percentage: 25,
          amountTargetCurrency: Math.round(totalTarget * 0.25),
          amountIdr: Math.round(budgetIdr * 0.25),
          color: '#F43F5E', // Rose/Red
          iconName: { ios: 'fork.knife', android: 'restaurant', web: 'restaurant' },
        },
        {
          id: 'transport',
          category: 'Transportasi',
          subCategory: 'Transit Pass & Tiket Kereta / Bus',
          percentage: 20,
          amountTargetCurrency: Math.round(totalTarget * 0.2),
          amountIdr: Math.round(budgetIdr * 0.2),
          color: '#0284C7', // Sky Blue
          iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
        },
        {
          id: 'lifestyle',
          category: 'Lifestyle & Oleh-oleh',
          subCategory: 'Souvenir, Belanja & Tiket Wisata',
          percentage: 20,
          amountTargetCurrency: Math.round(totalTarget * 0.2),
          amountIdr: Math.round(budgetIdr * 0.2),
          color: '#A855F7', // Purple
          iconName: { ios: 'bag.fill', android: 'shopping_bag', web: 'shopping_bag' },
        },
      ],
      aiTipTitle: 'TIPS AI PENGHEMATAN',
      aiTipDescription:
        `Rekomendasi terbaik di ${destCountry.name}: gunakan kartu transportasi terintegrasi dan manfaatkan pass wisata harian untuk memangkas hingga 20% biaya perjalanan.`,
    };
  }

  // Not maximizing budget -> AI recommends saving 25% safety buffer
  const savingsPct = 25;
  const accPct = 30;
  const foodPct = 20;
  const transportPct = 15;
  const lifestylePct = 10;

  return {
    totalPercentage: 75,
    durationDays: formData.durationDays,
    currencySymbol: destCountry.currencySymbol,
    currencyCode: destCountry.currency,
    totalBudgetTargetCurrency: totalTarget,
    items: [
      {
        id: 'acc',
        category: 'Tempat Tinggal (Akomodasi)',
        subCategory: `Budget Hotel / Guesthouse di ${formData.destinationRegion || destCountry.name}`,
        percentage: accPct,
        amountTargetCurrency: Math.round(totalTarget * (accPct / 100)),
        amountIdr: Math.round(budgetIdr * (accPct / 100)),
        color: '#2563EB',
        iconName: { ios: 'bed.double.fill', android: 'hotel', web: 'hotel' },
      },
      {
        id: 'food',
        category: 'Makanan & Kuliner',
        subCategory: 'Makanan Lokal & Restoran Ekonomis',
        percentage: foodPct,
        amountTargetCurrency: Math.round(totalTarget * (foodPct / 100)),
        amountIdr: Math.round(budgetIdr * (foodPct / 100)),
        color: '#F43F5E',
        iconName: { ios: 'fork.knife', android: 'restaurant', web: 'restaurant' },
      },
      {
        id: 'transport',
        category: 'Transportasi',
        subCategory: 'Subway & Transportasi Umum',
        percentage: transportPct,
        amountTargetCurrency: Math.round(totalTarget * (transportPct / 100)),
        amountIdr: Math.round(budgetIdr * (transportPct / 100)),
        color: '#0284C7',
        iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
      },
      {
        id: 'lifestyle',
        category: 'Lifestyle & Oleh-oleh',
        subCategory: 'Suvenir & Tiket Masuk Tempat Wisata',
        percentage: lifestylePct,
        amountTargetCurrency: Math.round(totalTarget * (lifestylePct / 100)),
        amountIdr: Math.round(budgetIdr * (lifestylePct / 100)),
        color: '#A855F7',
        iconName: { ios: 'bag.fill', android: 'shopping_bag', web: 'shopping_bag' },
      },
      {
        id: 'savings',
        category: 'Sisa Tabungan (Dana Darurat)',
        subCategory: 'Rekomendasi AI agar liburan tetap aman',
        percentage: savingsPct,
        amountTargetCurrency: Math.round(totalTarget * (savingsPct / 100)),
        amountIdr: Math.round(budgetIdr * (savingsPct / 100)),
        color: '#22C55E', // Green
        iconName: { ios: 'shield.fill', android: 'shield', web: 'shield' },
      },
    ],
    aiTipTitle: 'TIPS AI SISA ANGGARAN',
    aiTipDescription:
      `AI menyisihkan ${savingsPct}% (${destCountry.currencySymbol}${Math.round(totalTarget * (savingsPct / 100)).toLocaleString()}) sebagai dana cadangan darurat jika terjadi delay atau kebutuhan medis mendadak.`,
  };
}
