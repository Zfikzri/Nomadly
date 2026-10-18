import type {
  AttractionPromo,
  FlightPromo,
  HighlightPromo,
  PromoCategory,
  TransitPass,
} from '../types';

export const MOCK_PROMO_CATEGORIES: PromoCategory[] = [
  {
    id: 'all',
    label: 'All',
    iconName: { ios: 'tag.fill', android: 'local_offer', web: 'sell' },
  },
  {
    id: 'flights',
    label: 'Flights',
    iconName: { ios: 'airplane.departure', android: 'flight_takeoff', web: 'flight_takeoff' },
    iconColor: '#0284C7',
  },
  {
    id: 'trains',
    label: 'Trains & Rail',
    iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
    iconColor: '#9333EA',
  },
  {
    id: 'attractions',
    label: 'eSIM & Passes',
    iconName: { ios: 'ticket.fill', android: 'confirmation_number', web: 'confirmation_number' },
    iconColor: '#16A34A',
  },
];

export const MOCK_PROMO_CATEGORIES_ZH: PromoCategory[] = [
  {
    id: 'all',
    label: '全部',
    iconName: { ios: 'tag.fill', android: 'local_offer', web: 'sell' },
  },
  {
    id: 'flights',
    label: '机票特惠',
    iconName: { ios: 'airplane.departure', android: 'flight_takeoff', web: 'flight_takeoff' },
    iconColor: '#0284C7',
  },
  {
    id: 'trains',
    label: '铁路与高铁',
    iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
    iconColor: '#9333EA',
  },
  {
    id: 'attractions',
    label: 'eSIM与门票',
    iconName: { ios: 'ticket.fill', android: 'confirmation_number', web: 'confirmation_number' },
    iconColor: '#16A34A',
  },
];

export const MOCK_HIGHLIGHT_PROMO: HighlightPromo = {
  id: 'highlight-1',
  badgeLeft: '35% OFF',
  badgeRight: 'Save up to $220',
  title: 'Special Route Barcelona (BCN)',
  subtitle: 'Comfortable flights from major Asian hubs',
  imageUrl:
    'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80',
  couponCode: 'FLYCATALUNYA',
  reschedulePolicy: '1x Free Reschedule',
  minTransaction: 'Min. Spend $500',
};

export const MOCK_HIGHLIGHT_PROMO_ZH: HighlightPromo = {
  id: 'highlight-1',
  badgeLeft: '特惠 35% OFF',
  badgeRight: '立省高达 1,500 元',
  title: '巴塞罗那 (BCN) 特惠航线',
  subtitle: '从亚洲主要枢纽直飞或无缝中转',
  imageUrl:
    'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80',
  couponCode: 'FLYCATALUNYA',
  reschedulePolicy: '免费改签1次',
  minTransaction: '起用门槛 3,500 元',
};

export const MOCK_TRANSIT_PASSES: TransitPass[] = [
  {
    id: 'transit-1',
    discountBadge: '15% OFF',
    featureBadge: {
      icon: 'bolt',
      text: 'Instant e-Voucher',
      color: '#10B981',
    },
    title: 'All Japan JR Pass (7 Days)',
    subtitle: 'Fast-track Shinkansen across Japan...',
    price: '$235',
    originalPrice: '$280',
    infoBadge: {
      icon: 'calendar',
      text: 'Valid until Dec 31, 2026',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'transit-2',
    discountBadge: '20% OFF',
    featureBadge: {
      icon: 'globe',
      text: '33 Countries Access',
      color: '#0284C7',
    },
    title: 'Eurail Global Continuous Pass',
    subtitle: 'Flexible Europe travel without booking fees...',
    price: '$335',
    originalPrice: '$420',
    infoBadge: {
      icon: 'qrcode',
      text: 'Mobile Pass in App',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=400&q=80',
  },
];

export const MOCK_TRANSIT_PASSES_ZH: TransitPass[] = [
  {
    id: 'transit-1',
    discountBadge: '15% OFF',
    featureBadge: {
      icon: 'bolt',
      text: '即时电子兑换券',
      color: '#10B981',
    },
    title: '全日本 JR Pass 铁路通票 (7日)',
    subtitle: '全日本新干线及特急列车畅行...',
    price: '¥1,680',
    originalPrice: '¥1,980',
    infoBadge: {
      icon: 'calendar',
      text: '有效期至2026年12月31日',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'transit-2',
    discountBadge: '20% OFF',
    featureBadge: {
      icon: 'globe',
      text: '畅游欧洲33国',
      color: '#0284C7',
    },
    title: 'Eurail 欧洲全境火车通票',
    subtitle: '欧洲跨国自由漫游无需繁复订票...',
    price: '¥2,390',
    originalPrice: '¥2,990',
    infoBadge: {
      icon: 'qrcode',
      text: '手机 App 即刻激活',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=400&q=80',
  },
];

export const MOCK_FLIGHT_PROMOS: FlightPromo[] = [
  {
    id: 'flight-1',
    airline: 'Singapore Airlines',
    logoBg: '#E0F2FE',
    iconColor: '#0284C7',
    discountBadge: '25% OFF',
    route: 'SIN ⇄ NRT / HND (Round Trip)',
    boxTitle: 'Travel Period',
    boxDetail: 'Oct 1, 2026 – Feb 28, 2027',
    price: '$450',
    bottomInfo: {
      icon: 'bag',
      text: 'Includes 25kg Baggage + Meals',
    },
  },
  {
    id: 'flight-2',
    airline: 'Qatar Airways',
    logoBg: '#FCE7F3',
    iconColor: '#BE185D',
    discountBadge: '30% OFF',
    cashbackBadge: '+ $35 Cashback',
    route: 'Key European Cities via Doha',
    boxTitle: 'Available Destinations',
    boxDetail: 'London, Paris, Milan, Amsterdam',
    price: '$620',
    bottomInfo: {
      icon: 'star',
      text: "World's Best Business & Eco",
      color: '#9333EA',
    },
  },
];

export const MOCK_FLIGHT_PROMOS_ZH: FlightPromo[] = [
  {
    id: 'flight-1',
    airline: '新加坡航空',
    logoBg: '#E0F2FE',
    iconColor: '#0284C7',
    discountBadge: '立减 25%',
    route: 'SIN ⇄ NRT / HND (往返特惠)',
    boxTitle: '出行日期',
    boxDetail: '2026年10月1日 – 2027年2月28日',
    price: '¥3,250',
    bottomInfo: {
      icon: 'bag',
      text: '含25kg托运行李及机上餐食',
    },
  },
  {
    id: 'flight-2',
    airline: '卡塔尔航空',
    logoBg: '#FCE7F3',
    iconColor: '#BE185D',
    discountBadge: '特惠 30%',
    cashbackBadge: '+ ¥250 返现',
    route: '经多哈飞往欧洲核心枢纽',
    boxTitle: '精选目的地',
    boxDetail: '伦敦、巴黎、米兰、阿姆斯特丹',
    price: '¥4,450',
    bottomInfo: {
      icon: 'star',
      text: '全球顶级商务舱与经济舱服务',
      color: '#9333EA',
    },
  },
];

export const MOCK_ATTRACTION_PROMOS: AttractionPromo[] = [
  {
    id: 'attr-1',
    type: 'esim',
    iconType: 'esim',
    badge: {
      text: '40% OFF',
      bgColor: '#FFE4E6',
      textColor: '#E11D48',
    },
    secondaryBadge: {
      text: 'Instant Setup',
      textColor: '#16A34A',
    },
    title: 'Asia Roaming eSIM',
    subtitle: 'Japan, S. Korea, SG, MY & TH...',
    price: '$6.50',
    buttonLabel: 'Get eSIM',
  },
  {
    id: 'attr-2',
    type: 'theme_park',
    iconType: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80',
    badge: {
      text: 'Super Combo',
      bgColor: '#F3E8FF',
      textColor: '#9333EA',
    },
    title: 'Universal Studios Pass',
    subtitle: '1-Day Studio Pass + Express Access...',
    price: '$65.00',
    buttonLabel: 'Claim',
  },
];

export const MOCK_ATTRACTION_PROMOS_ZH: AttractionPromo[] = [
  {
    id: 'attr-1',
    type: 'esim',
    iconType: 'esim',
    badge: {
      text: '40% OFF',
      bgColor: '#FFE4E6',
      textColor: '#E11D48',
    },
    secondaryBadge: {
      text: '秒速激活',
      textColor: '#16A34A',
    },
    title: '亚洲多国通用 eSIM',
    subtitle: '日本、韩国、新马泰高速流量...',
    price: '¥45.00',
    buttonLabel: '购买 eSIM',
  },
  {
    id: 'attr-2',
    type: 'theme_park',
    iconType: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80',
    badge: {
      text: '超值套票',
      bgColor: '#F3E8FF',
      textColor: '#9333EA',
    },
    title: '环球影城一日门票',
    subtitle: '单日入园门票 + 快速通关...',
    price: '¥465.00',
    buttonLabel: '立即领取',
  },
];

export function getLocalizedPromoCatalog(isZh: boolean = false) {
  return {
    categories: isZh ? MOCK_PROMO_CATEGORIES_ZH : MOCK_PROMO_CATEGORIES,
    highlightPromo: isZh ? MOCK_HIGHLIGHT_PROMO_ZH : MOCK_HIGHLIGHT_PROMO,
    transitPasses: isZh ? MOCK_TRANSIT_PASSES_ZH : MOCK_TRANSIT_PASSES,
    flightPromos: isZh ? MOCK_FLIGHT_PROMOS_ZH : MOCK_FLIGHT_PROMOS,
    attractionPromos: isZh ? MOCK_ATTRACTION_PROMOS_ZH : MOCK_ATTRACTION_PROMOS,
  };
}
