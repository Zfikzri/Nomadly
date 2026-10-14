import type { CategoryFilter, CommunityGroup } from '../types';

export const MOCK_CATEGORY_FILTERS: CategoryFilter[] = [
  {
    id: 'all',
    label: 'Semua Grup',
    iconName: { ios: 'globe.asia.australia.fill', android: 'public', web: 'public' },
  },
  {
    id: 'asia',
    label: 'Destinasi Asia',
    iconName: { ios: 'airplane.departure', android: 'flight_takeoff', web: 'flight_takeoff' },
    iconColor: '#0284C7',
  },
  {
    id: 'europe',
    label: 'Eropa & Schengen',
    iconName: { ios: 'building.columns.fill', android: 'account_balance', web: 'account_balance' },
    iconColor: '#9333EA',
  },
  {
    id: 'workation',
    label: 'Nomad & Workation',
    iconName: { ios: 'laptopcomputer', android: 'laptop', web: 'laptop' },
    iconColor: '#16A34A',
  },
];

export const MOCK_COMMUNITY_GROUPS: CommunityGroup[] = [
  {
    id: 'comm-1',
    title: 'Solo Travelers Japan 🍁',
    category: 'asia',
    imageUrl:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80',
    membersCount: 42,
    lastMessage: {
      sender: 'Budi',
      text: 'Ada yang mau bareng sewa pocket wifi di Haneda?',
    },
    regionTag: {
      label: 'Jepang',
    },
    featureTag: {
      label: 'Itinerary Sync',
      type: 'itinerary',
      textColor: '#4F46E5',
      bgColor: '#EEF2FF',
      iconName: {
        ios: 'arrow.triangle.2.circlepath',
        android: 'sync',
        web: 'sync',
      },
    },
    unreadCount: 4,
  },
  {
    id: 'comm-2',
    title: 'Eurotrip Autumn 2026 🍂',
    category: 'europe',
    imageUrl:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=400&q=80',
    membersCount: 18,
    locations: ['Berlin', 'Paris', 'Amsterdam'],
    lastMessage: {
      sender: 'Elena',
      text: 'Tiket kereta Eurail udah confirmed guys!',
    },
    regionTag: {
      label: 'Zona Schengen',
    },
    featureTag: {
      label: 'Split Bill',
      type: 'split_bill',
      textColor: '#16A34A',
      bgColor: '#DCFCE7',
      iconName: {
        ios: 'banknote',
        android: 'payments',
        web: 'payments',
      },
    },
    unreadCount: 2,
  },
  {
    id: 'comm-3',
    title: 'Digital Nomad Bali & SE Asia',
    category: 'workation',
    imageUrl:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=400&q=80',
    membersCount: 125,
    locations: ['Canggu', 'Uluwatu'],
    lastMessage: {
      sender: 'Marcus',
      text: 'Coworking space terbaik dekat pantai Berawa ada rekomendasi?',
    },
    regionTag: {
      label: 'Indonesia',
    },
    featureTag: {
      label: 'Nomad Work',
      type: 'nomad_work',
      textColor: '#9333EA',
      bgColor: '#F3E8FF',
      iconName: {
        ios: 'laptopcomputer',
        android: 'laptop',
        web: 'laptop',
      },
    },
    isRead: true,
  },
  {
    id: 'comm-4',
    title: 'Seoul Foodie & K-Pass Explorers',
    category: 'asia',
    imageUrl:
      'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=400&q=80',
    membersCount: 29,
    locations: ['Myeongdong & Hongdae'],
    lastMessage: {
      sender: 'Minji',
      text: 'Tmoney vs Climate Card mana yang lebih hemat?',
    },
    regionTag: {
      label: 'Korea',
    },
    featureTag: {
      label: 'Culinary Tour',
      type: 'culinary',
      textColor: '#0284C7',
      bgColor: '#E0F2FE',
      iconName: {
        ios: 'fork.knife',
        android: 'restaurant',
        web: 'restaurant',
      },
    },
    isRead: true,
  },
  {
    id: 'comm-5',
    title: 'Backpacker Hemat Indochina',
    category: 'asia',
    imageUrl:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80',
    membersCount: 54,
    locations: ['Vietnam', 'Kamboja', 'Thailand'],
    lastMessage: {
      sender: 'Rian',
      text: 'Info perbatasan darat Poipet terbaru: visa on arrival aman.',
    },
    regionTag: {
      label: 'Indochina',
      iconEmoji: '🌏',
    },
    featureTag: {
      label: 'Budget Savvy',
      type: 'budget',
      textColor: '#E11D48',
      bgColor: '#FFE4E6',
      iconName: {
        ios: 'tag.fill',
        android: 'local_offer',
        web: 'sell',
      },
    },
    isRead: true,
  },
];
