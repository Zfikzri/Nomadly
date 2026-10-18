import type {
  CommunityPlan,
  DiscountPromo,
  NewsSnippet,
  UserProfile,
} from '../types';

export const MOCK_USER_PROFILE: UserProfile = {
  name: 'Alex Morgan',
  country: 'United States',
  role: 'Student Traveler',
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
    originFlag: 'US',
  },
  {
    id: 'plan-2',
    title: 'Autumn in Kyoto & Osaka',
    dateRange: 'Nov 2026',
    duration: '7 Days',
    countryPill: 'Japan',
    repliesCount: 38,
    originFlag: 'US',
  },
  {
    id: 'plan-3',
    title: 'Euro Summer Backpacking',
    dateRange: 'Jul 2027',
    duration: '14 Days',
    countryPill: 'Europe',
    repliesCount: 56,
    originFlag: 'US',
  },
  {
    id: 'plan-4',
    title: 'Workation in Chiang Mai',
    dateRange: 'Jan 2027',
    duration: '21 Days',
    countryPill: 'Thailand',
    repliesCount: 29,
    originFlag: 'US',
  },
];

export const MOCK_DISCOUNT_PROMOS: DiscountPromo[] = [
  {
    id: 'promo-1',
    badge: { text: 'FLIGHT PROMO', variant: 'solid' },
    secondaryBadge: { text: '3 Days Left', variant: 'translucent', icon: 'clock' },
    subtitle: 'BARCELONA, SPAIN',
    title: '35% Off Flight\nTickets',
    description: 'Save up to $220 on select international nomad routes',
    imageUrl:
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'promo-2',
    badge: { text: 'TRAIN PASS', variant: 'solid' },
    secondaryBadge: { text: 'Instant E-Voucher', variant: 'translucent', icon: 'lightning' },
    subtitle: 'ALL JAPAN RAILS',
    title: 'JR Pass 15% Discount',
    description: 'Valid all routes • Fast Shinkansen bullet train access',
    imageUrl:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'promo-3',
    badge: { text: 'SCENIC RAIL', variant: 'solid' },
    secondaryBadge: { text: '5 Days Left', variant: 'translucent', icon: 'clock' },
    subtitle: 'ZERMATT, SWITZERLAND',
    title: 'Glacier Express 25% Off',
    description: 'Alpine panoramic rail pass & resort accommodation discount',
    imageUrl:
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'promo-4',
    badge: { text: 'NOMAD STAY', variant: 'solid' },
    secondaryBadge: { text: '$30 Cashback', variant: 'translucent', icon: 'lightning' },
    subtitle: 'CANGGU & UBUD, BALI',
    title: 'Monthly Villa Stay 40%',
    description: 'Co-living amenities with fiber internet & 24/7 co-working space',
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
    title: 'New Visa Waiver Policy & Weakening Yen Trends for Digital Nomads',
    aiActionText: 'Tap for AI Travel & FX Advice',
  },
  {
    id: 'news-2',
    code: 'EU',
    flagEmoji: '🇪🇺',
    badgeText: 'EUR Rate Peak',
    timeAgo: '35m ago',
    title: 'ECB Interest Rates Shift: Best Window to Lock EUR Exchange Rates',
    aiActionText: 'Tap for Hedging & Budget Simulation',
  },
  {
    id: 'news-3',
    code: 'TH',
    flagEmoji: '🇹🇭',
    badgeText: 'DTV Visa Update',
    timeAgo: '2h ago',
    title: 'Thailand Officially Launches 5-Year Destination Thailand Visa (DTV)',
    aiActionText: 'Tap for Visa Requirements & Tax Guide',
  },
  {
    id: 'news-4',
    code: 'SG',
    flagEmoji: '🇸🇬',
    badgeText: 'Cashless Borderless',
    timeAgo: '4h ago',
    title: 'Cross-Border QR & Contactless Payments Ready Across Singapore & Asia',
    aiActionText: 'Tap for Zero-Fee Cashless Guide',
  },
];
