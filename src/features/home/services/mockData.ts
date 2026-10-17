import type {
  CommunityPlan,
  DiscountPromo,
  NewsSnippet,
  UserProfile,
} from '../types';

export const MOCK_USER_PROFILE: UserProfile = {
  name: 'Lontong Balap',
  country: 'Indonesia',
  role: 'Mahasiswa',
  avatarUrl:
    'https://i.pinimg.com/736x/15/ca/c1/15cac111f5d91ac0fa4edd71a707751a.jpg',
  isVip: true,
  isOnline: true,
};

export const MOCK_COMMUNITY_PLANS: CommunityPlan[] = [
  {
    id: 'plan-1',
    title: 'Solo trip to Tokyo',
    dateRange: 'Nov 2026',
    duration: '8 Days',
    countryPill: 'Japan',
    repliesCount: 42,
    originFlag: 'ID',
  },
  {
    id: 'plan-2',
    title: 'Autumn in Kyoto & Osaka',
    dateRange: 'Nov 2026',
    duration: '7 Days',
    countryPill: 'Japan',
    repliesCount: 38,
    originFlag: 'ID',
  },
  {
    id: 'plan-3',
    title: 'Euro Summer Backpacking',
    dateRange: 'Jul 2027',
    duration: '14 Days',
    countryPill: 'Europe',
    repliesCount: 56,
    originFlag: 'ID',
  },
  {
    id: 'plan-4',
    title: 'Workation di Chiang Mai',
    dateRange: 'Jan 2027',
    duration: '21 Days',
    countryPill: 'Thailand',
    repliesCount: 29,
    originFlag: 'ID',
  },
];

export const MOCK_DISCOUNT_PROMOS: DiscountPromo[] = [
  {
    id: 'promo-1',
    badge: { text: 'FLIGHT PROMO', variant: 'solid' },
    secondaryBadge: { text: '3 Days Left', variant: 'translucent', icon: 'clock' },
    subtitle: 'BARCELONA, SPAIN',
    title: 'Diskon 35% Tiket\nPesawat',
    description: 'Hemat hingga Rp 3.2 Jt untuk rute internasional terpilih',
    imageUrl:
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'promo-2',
    badge: { text: 'TRAIN PASS', variant: 'solid' },
    secondaryBadge: { text: 'Instant E-Voucher', variant: 'translucent', icon: 'lightning' },
    subtitle: 'ALL JAPAN RAILS',
    title: 'Promo JR Pass 15%',
    description: 'Valid all routes • Akses Shinkansen tanpa ribet antre',
    imageUrl:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'promo-3',
    badge: { text: 'SCENIC RAIL', variant: 'solid' },
    secondaryBadge: { text: '5 Days Left', variant: 'translucent', icon: 'clock' },
    subtitle: 'ZERMATT, SWITZERLAND',
    title: 'Glacier Express 25% Off',
    description: 'Tiket terusan panorama Alpen & potongan hotel resort',
    imageUrl:
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'promo-4',
    badge: { text: 'NOMAD STAY', variant: 'solid' },
    secondaryBadge: { text: 'Cashback 200k', variant: 'translucent', icon: 'lightning' },
    subtitle: 'CANGGU & UBUD, BALI',
    title: 'Monthly Villa Stay 40%',
    description: 'Co-living fasilitas fiber internet & 24/7 co-working space',
    imageUrl:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
  },
];

export const MOCK_LOCAL_NEWS: NewsSnippet[] = [
  {
    id: 'news-1',
    code: 'JP',
    flagEmoji: '🇯🇵',
    badgeText: 'JPY Drop Alert',
    timeAgo: '12m ago',
    title: 'Kebijakan Bebas Visa Baru & Tren Melemahnya Yen',
    aiActionText: 'Tap for AI Travel & FX Advice',
  },
  {
    id: 'news-2',
    code: 'EU',
    flagEmoji: '🇪🇺',
    badgeText: 'EUR Rate Peak',
    timeAgo: '35m ago',
    title: 'Suku Bunga ECB Turun: Peluang Kunci Kurs EUR untuk Liburan Musim Panas',
    aiActionText: 'Tap for Hedging & Budget Simulation',
  },
  {
    id: 'news-3',
    code: 'TH',
    flagEmoji: '🇹🇭',
    badgeText: 'DTV Visa Update',
    timeAgo: '2h ago',
    title: 'Thailand Resmi Rilis Visa DTV 5 Tahun untuk Digital Nomad',
    aiActionText: 'Tap for Visa Requirements & Tax Guide',
  },
  {
    id: 'news-4',
    code: 'SG',
    flagEmoji: '🇸🇬',
    badgeText: 'Cashless Borderless',
    timeAgo: '4h ago',
    title: 'Integrasi QRIS Lintas Negara Siap Dipakai Penuh di Singapura & Malaysia',
    aiActionText: 'Tap for Zero-Fee Cashless Guide',
  },
];
