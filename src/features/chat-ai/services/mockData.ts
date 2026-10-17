import type {
  AIResponseData,
  ChatMessage,
  StarterPrompt,
  SuggestedQuestion,
} from '../types';

export const STARTER_PROMPTS: StarterPrompt[] = [
  {
    id: 'starter-1',
    icon: '🍜',
    title: 'Biaya Makan & ATM Shinjuku',
    subtitle: 'Rekomendasi konbini & ATM bebas biaya admin',
    queryText:
      'Berapa rata-rata biaya makan harian di Shinjuku dan apakah ada ATM tanpa biaya admin untuk kartu debit Indonesia?',
  },
  {
    id: 'starter-2',
    icon: '🚆',
    title: 'Tips Shinkansen Tokyo - Kyoto',
    subtitle: 'Pilihan tiket promo & rute tercepat',
    queryText: 'Tips hemat tiket kereta Shinkansen dari Tokyo ke Kyoto untuk 2 orang.',
  },
  {
    id: 'starter-3',
    icon: '📶',
    title: 'Pocket WiFi vs eSIM Jepang',
    subtitle: 'Bandingkan kuota unlimited & harga harian',
    queryText: 'Mana yang lebih hemat antara sewa Pocket WiFi atau beli eSIM untuk liburan 9 hari di Jepang?',
  },
];

export const MOCK_SHINJUKU_AI_RESPONSE: AIResponseData = {
  agentName: 'Orb Intelligence',
  introPrefix: 'Halo Alex! Berikut estimasi cepat untuk ',
  destinationBold: 'Shinjuku, Tokyo:',
  foodEstimate: {
    title: 'Makan Harian',
    yenRange: '¥2,500 – ¥4,000 / hari',
    rupiahRange: 'Rp 260.000 – 420.000',
    description:
      'untuk budget casual dining & konbini (7-Eleven / Lawson / FamilyMart).',
    breakfastTag: 'Breakfast: ¥450',
    lunchTag: 'Ramen Lunch: ¥1,100',
  },
  atmInfo: {
    title: 'Bebas Admin ATM',
    bankName: 'Seven Bank ATM',
    description:
      '7-Eleven. Bebas biaya transaksi operasional untuk jaringan ',
    networkBold: 'Visa / Mastercard',
    hoursBold: '07:00 – 19:00.',
    compatibleCardsText: 'Kompatibel Kartu BCA / Mandiri / Jenius',
  },
  storePhoto: {
    title: '7-Eleven Shinjuku Kabukicho',
    subText: '140m • Buka 24 Jam • 2 Seven Bank ATM',
    imageUrl:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80',
  },
  actions: [
    {
      id: 'act-1',
      iconName: { ios: 'bookmark.fill', android: 'bookmark', web: 'bookmark' },
      label: 'Simpan ke Itinerary',
    },
    {
      id: 'act-2',
      iconName: { ios: 'map.fill', android: 'map', web: 'map' },
      label: 'Cari 7-Eleven Terdekat',
    },
    {
      id: 'act-3',
      iconName: {
        ios: 'chart.bar.xaxis',
        android: 'bar_chart',
        web: 'bar_chart',
      },
      label: 'Masukkan ke Budget Planner',
    },
  ],
  timestamp: '10:42 AM',
  engineVersion: 'Orb AI Engine v4.2',
};

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    id: 'sug-1',
    iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
    iconColor: '#0284C7',
    text: 'Tips hemat transportasi Tokyo',
  },
  {
    id: 'sug-2',
    iconName: { ios: 'fork.knife', android: 'restaurant', web: 'restaurant' },
    iconColor: '#16A34A',
    text: 'Restoran halal / ramah muslim',
  },
  {
    id: 'sug-3',
    iconName: { ios: 'tag.fill', android: 'local_offer', web: 'local_offer' },
    iconColor: '#EA580C',
    text: 'Belanja murah di Don Quijote',
  },
  {
    id: 'sug-4',
    iconName: { ios: 'wifi', android: 'wifi', web: 'wifi' },
    iconColor: '#9333EA',
    text: 'Tempat sewa Pocket WiFi Haneda',
  },
];

export function createMockConversation(userQuery: string): ChatMessage[] {
  return [
    {
      id: 'msg-user-1',
      sender: 'user',
      text: userQuery,
      time: '10:42 AM',
      isReadReceipt: true,
    },
    {
      id: 'msg-ai-1',
      sender: 'ai',
      time: '10:42 AM',
      aiResponse: MOCK_SHINJUKU_AI_RESPONSE,
    },
  ];
}
