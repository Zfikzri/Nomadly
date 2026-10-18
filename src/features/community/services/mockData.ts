import type { CategoryFilter, CommunityGroup, CommunityGroupDetail } from '../types';

export const MOCK_COMMUNITY_DETAILS: Record<string, CommunityGroupDetail> = {
  'plan-1': {
    id: 'plan-1',
    title: 'Solo Travelers Japan',
    heroImageUrl:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    stayingCard: {
      title: "See who's staying here",
      subtitle: 'Connect, split tapas, and cowork together',
      members: [
        {
          id: 'm-1',
          avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-2',
          avatarUrl:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-3',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-4',
          avatarUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-5',
          avatarUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
      ],
      remainingCountText: '+13',
    },
    about: {
      title: 'About the Hub',
      description:
        'Fabrizzios is an authentic boutique hub with a genuine family atmosphere nestled in the heart of Barcelona. Our lush garden terrace invites you to work productively during the morning breeze, join homemade paella dinners, and easily coordinate excursions with fellow global nomads.',
    },
    actionButtonText: 'Choose Room',
  },
  'comm-1': {
    id: 'comm-1',
    title: 'Solo Travelers Japan',
    heroImageUrl:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    stayingCard: {
      title: "See who's staying here",
      subtitle: 'Connect, split tapas, and cowork together',
      members: [
        {
          id: 'm-1',
          avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-2',
          avatarUrl:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-3',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-4',
          avatarUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-5',
          avatarUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
      ],
      remainingCountText: '+13',
    },
    about: {
      title: 'About the Hub',
      description:
        'Fabrizzios is an authentic boutique hub with a genuine family atmosphere nestled in the heart of Barcelona. Our lush garden terrace invites you to work productively during the morning breeze, join homemade paella dinners, and easily coordinate excursions with fellow global nomads.',
    },
    actionButtonText: 'Choose Room',
  },
  'plan-2': {
    id: 'plan-2',
    title: 'Autumn in Kyoto & Osaka',
    heroImageUrl:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    stayingCard: {
      title: "See who's staying here",
      subtitle: 'Tea ceremonies, autumn foliage walks, and matcha tasting',
      members: [
        {
          id: 'm-1',
          avatarUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-2',
          avatarUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-3',
          avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-4',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
      ],
      remainingCountText: '+8',
    },
    about: {
      title: 'About the Hub',
      description:
        'A restored traditional Machiya nestled in Gion, Kyoto. Fast fiber wifi, quiet tatami workspaces, tranquil zen garden courtyard, and weekly local food excursions with fellow nomad travelers.',
    },
    actionButtonText: 'Choose Room',
  },
  'plan-3': {
    id: 'plan-3',
    title: 'Euro Summer Backpacking',
    heroImageUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    stayingCard: {
      title: "See who's staying here",
      subtitle: 'Rail passes, hostel hopping, and sunset rooftop drinks',
      members: [
        {
          id: 'm-1',
          avatarUrl:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-2',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-3',
          avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
      ],
      remainingCountText: '+24',
    },
    about: {
      title: 'About the Hub',
      description:
        'A central community hub in Western Europe designed for flexible remote workers and summer explorers. Fully equipped co-working desks, outdoor social terrace, and daily group outings.',
    },
    actionButtonText: 'Choose Room',
  },
  'plan-4': {
    id: 'plan-4',
    title: 'Workation in Chiang Mai',
    heroImageUrl:
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
    stayingCard: {
      title: "See who's staying here",
      subtitle: 'Nimman cafes, night markets, and ergonomic desk setups',
      members: [
        {
          id: 'm-1',
          avatarUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-2',
          avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
        {
          id: 'm-3',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          flagCode: 'ID',
        },
      ],
      remainingCountText: '+19',
    },
    about: {
      title: 'About the Hub',
      description:
        'Tropical workation sanctuary located in Nimman. High-speed multi-WAN internet, 24/7 air-conditioned coworking hub, pool lounge, and community events every evening.',
    },
    actionButtonText: 'Choose Room',
  },
};

export function getCommunityGroupDetail(id: string): CommunityGroupDetail {
  return MOCK_COMMUNITY_DETAILS[id] ?? MOCK_COMMUNITY_DETAILS['plan-1'];
}

export const MOCK_CATEGORY_FILTERS: CategoryFilter[] = [
  {
    id: 'all',
    label: 'All Groups',
    iconName: { ios: 'globe.asia.australia.fill', android: 'public', web: 'public' },
  },
  {
    id: 'asia',
    label: 'Asia Destinations',
    iconName: { ios: 'airplane.departure', android: 'flight_takeoff', web: 'flight_takeoff' },
    iconColor: '#0284C7',
  },
  {
    id: 'europe',
    label: 'Europe & Schengen',
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
      text: 'Anyone want to split pocket WiFi rental at Haneda Airport?',
    },
    regionTag: {
      label: 'Japan',
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
      text: 'Eurail train tickets are confirmed everyone!',
    },
    regionTag: {
      label: 'Schengen Zone',
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
      text: 'Any recommendations for the best coworking space near Berawa Beach?',
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
      text: 'T-money vs Climate Card, which one is more budget-friendly?',
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
    title: 'Budget Backpackers Indochina',
    category: 'asia',
    imageUrl:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80',
    membersCount: 54,
    locations: ['Vietnam', 'Cambodia', 'Thailand'],
    lastMessage: {
      sender: 'Rian',
      text: 'Latest Poipet border crossing info: Visa on arrival is smooth.',
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
