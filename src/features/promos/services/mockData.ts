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
    label: 'Semua',
    iconName: { ios: 'tag.fill', android: 'local_offer', web: 'sell' },
  },
  {
    id: 'flights',
    label: 'Tiket Pesawat',
    iconName: { ios: 'airplane.departure', android: 'flight_takeoff', web: 'flight_takeoff' },
    iconColor: '#0284C7',
  },
  {
    id: 'trains',
    label: 'Kereta & Shinkansen',
    iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
    iconColor: '#9333EA',
  },
  {
    id: 'attractions',
    label: 'eSIM & Wisata',
    iconName: { ios: 'ticket.fill', android: 'confirmation_number', web: 'confirmation_number' },
    iconColor: '#16A34A',
  },
];

export const MOCK_HIGHLIGHT_PROMO: HighlightPromo = {
  id: 'highlight-1',
  badgeLeft: 'Diskon 35%',
  badgeRight: 'Hemat s.d Rp 3.2 Jt',
  title: 'Rute Spesial Barcelona (BCN)',
  subtitle: 'Terbang nyaman dari Jakarta & Denpasar',
  imageUrl:
    'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80',
  couponCode: 'FLYCATALUNYA',
  reschedulePolicy: 'Bebas Reschedule 1x',
  minTransaction: 'Min. Transaksi Rp 8 Jt',
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
    subtitle: 'Rute Shinkansen bebas antre...',
    price: 'Rp 3.612.500',
    originalPrice: 'Rp 4.250.000',
    infoBadge: {
      icon: 'calendar',
      text: 'Tersedia s.d 31 Des 2025',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'transit-2',
    discountBadge: '20% OFF',
    featureBadge: {
      icon: 'globe',
      text: 'Akses 33 Negara',
      color: '#0284C7',
    },
    title: 'Eurail Global Continuous Pass',
    subtitle: 'Keliling Eropa fleksibel tanpa beli tiket...',
    price: 'Rp 5.120.000',
    originalPrice: 'Rp 6.400.000',
    infoBadge: {
      icon: 'qrcode',
      text: 'Aktivasi via Mobile App',
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
    discountBadge: 'Diskon 25%',
    route: 'CGK ⇄ NRT / HND (Pulang-Pergi)',
    boxTitle: 'Periode Terbang',
    boxDetail: '1 Okt 2025 – 28 Feb 2026',
    price: 'Rp 6.890.000',
    bottomInfo: {
      icon: 'bag',
      text: 'Termasuk Bagasi 25kg + Meal',
    },
  },
  {
    id: 'flight-2',
    airline: 'Qatar Airways',
    logoBg: '#FCE7F3',
    iconColor: '#BE185D',
    discountBadge: 'Diskon 30%',
    cashbackBadge: '+ Cashback 500rb',
    route: 'Destinasi Utama Eropa via Doha',
    boxTitle: 'Pilihan Kota',
    boxDetail: 'London, Paris, Milan, Amsterdam',
    price: 'Rp 9.450.000',
    bottomInfo: {
      icon: 'star',
      text: "World's Best Business & Eco",
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
      text: 'Aktif Instan',
      textColor: '#16A34A',
    },
    title: 'Roaming eSIM Asia',
    subtitle: 'Jepang, Korsel, SG, MY & T...',
    price: 'Rp 89.000',
    buttonLabel: 'Beli eSIM',
  },
  {
    id: 'attr-2',
    type: 'theme_park',
    iconType: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80',
    badge: {
      text: 'Combo Hemat',
      bgColor: '#F3E8FF',
      textColor: '#9333EA',
    },
    title: 'Universal Studios...',
    subtitle: '1-Day Studio Pass + Expre...',
    price: 'Rp 985.000',
    buttonLabel: 'Klaim',
  },
];
