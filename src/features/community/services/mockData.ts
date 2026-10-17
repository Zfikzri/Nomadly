import type { CommunityGroupDetail } from '../types';

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
    title: 'Workation di Chiang Mai',
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
