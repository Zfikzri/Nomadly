import type {
  AIResponseData,
  ChatMessage,
  StarterPrompt,
  SuggestedQuestion,
} from '../types';

export const STARTER_PROMPTS_EN: StarterPrompt[] = [
  {
    id: 'starter-1',
    icon: '🍜',
    title: 'Shinjuku Dining & ATM Costs',
    subtitle: 'Convenience store & zero-fee ATM tips',
    queryText:
      'What is the average daily dining cost in Shinjuku, and are there zero-fee ATMs for international cards?',
  },
  {
    id: 'starter-2',
    icon: '🚆',
    title: 'Tokyo to Kyoto Shinkansen Tips',
    subtitle: 'Discount passes & fastest bullet trains',
    queryText: 'Tips to save on Shinkansen bullet train tickets from Tokyo to Kyoto for 2 travelers.',
  },
  {
    id: 'starter-3',
    icon: '📶',
    title: 'Pocket WiFi vs Japan eSIM',
    subtitle: 'Compare unlimited data & daily pricing',
    queryText: 'Which is more cost-effective: renting a Pocket WiFi or buying an eSIM for a 9-day trip in Japan?',
  },
];

export const STARTER_PROMPTS_ZH: StarterPrompt[] = [
  {
    id: 'starter-1',
    icon: '🍜',
    title: '新宿餐饮与免手续费 ATM',
    subtitle: '便利店美食推荐与境外取现攻略',
    queryText: '请问新宿每日平均餐饮预算是多少？附近是否有免手续费的境外银联卡 ATM？',
  },
  {
    id: 'starter-2',
    icon: '🚆',
    title: '东京至京都新干线省钱攻略',
    subtitle: '早鸟优惠票与高速线路对比',
    queryText: '两人从东京到京都乘坐新干线有哪些省钱折扣与车票建议？',
  },
  {
    id: 'starter-3',
    icon: '📶',
    title: '随身 WiFi 与日本 eSIM 对比',
    subtitle: '无限流量配额与每日费用对比',
    queryText: '在日本旅行 9 天，租借随身 WiFi 和购买 eSIM 哪个更划算方便？',
  },
];

export const STARTER_PROMPTS: StarterPrompt[] = STARTER_PROMPTS_EN;

export function getStarterPrompts(isZh: boolean = false): StarterPrompt[] {
  return isZh ? STARTER_PROMPTS_ZH : STARTER_PROMPTS_EN;
}

export const MOCK_SHINJUKU_AI_RESPONSE_EN: AIResponseData = {
  agentName: 'Nomadly Intelligence',
  introPrefix: 'Hello Alex! Here is a quick breakdown for ',
  destinationBold: 'Shinjuku, Tokyo:',
  foodEstimate: {
    title: 'Daily Dining',
    yenRange: '¥2,500 – ¥4,000 / day',
    rupiahRange: '$18 – $28 USD',
    description:
      'for casual dining and convenience stores (7-Eleven / Lawson / FamilyMart).',
    breakfastTag: 'Breakfast: ¥450',
    lunchTag: 'Ramen Lunch: ¥1,100',
  },
  atmInfo: {
    title: 'Zero-Fee ATM',
    bankName: 'Seven Bank ATM',
    description:
      'located at 7-Eleven. Zero operational withdrawal surcharge for ',
    networkBold: 'Visa / Mastercard / UnionPay',
    hoursBold: '07:00 – 19:00.',
    compatibleCardsText: 'Compatible with all major international travel debit cards',
  },
  storePhoto: {
    title: '7-Eleven Shinjuku Kabukicho',
    subText: '140m • Open 24 Hours • 2 Seven Bank ATMs',
    imageUrl:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80',
  },
  actions: [
    {
      id: 'act-1',
      iconName: { ios: 'bookmark.fill', android: 'bookmark', web: 'bookmark' },
      label: 'Save to Itinerary',
    },
    {
      id: 'act-2',
      iconName: { ios: 'map.fill', android: 'map', web: 'map' },
      label: 'Find Nearest 7-Eleven',
    },
    {
      id: 'act-3',
      iconName: {
        ios: 'chart.bar.xaxis',
        android: 'bar_chart',
        web: 'bar_chart',
      },
      label: 'Add to Budget Planner',
    },
  ],
  timestamp: '10:42 AM',
  engineVersion: 'Nomadly AI Engine v4.2',
};

export const MOCK_SHINJUKU_AI_RESPONSE_ZH: AIResponseData = {
  agentName: 'Nomadly 智能助手',
  introPrefix: '你好 Alex！以下是为您整理的快速指南：',
  destinationBold: '东京新宿 (Shinjuku):',
  foodEstimate: {
    title: '每日餐饮开支',
    yenRange: '¥2,500 – ¥4,000 / 天',
    rupiahRange: '约 ¥120 – ¥190 元',
    description:
      '适用于便民食堂与连锁便利店 (7-Eleven / Lawson / FamilyMart)。',
    breakfastTag: '早餐: ¥450',
    lunchTag: '拉面午餐: ¥1,100',
  },
  atmInfo: {
    title: '免手续费 ATM 取现',
    bankName: 'Seven Bank ATM',
    description:
      '设立于 7-Eleven 便利店内。针对国际卡免收柜台服务费：',
    networkBold: 'Visa / Mastercard / 银联',
    hoursBold: '07:00 – 19:00。',
    compatibleCardsText: '全面支持各类国际及跨境旅行借记卡/信用卡',
  },
  storePhoto: {
    title: '7-Eleven 新宿歌舞伎町店',
    subText: '步行 140 米 • 24小时营业 • 配备 2 台 Seven Bank ATM',
    imageUrl:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80',
  },
  actions: [
    {
      id: 'act-1',
      iconName: { ios: 'bookmark.fill', android: 'bookmark', web: 'bookmark' },
      label: '保存至行程规划',
    },
    {
      id: 'act-2',
      iconName: { ios: 'map.fill', android: 'map', web: 'map' },
      label: '导航至最近 7-Eleven',
    },
    {
      id: 'act-3',
      iconName: {
        ios: 'chart.bar.xaxis',
        android: 'bar_chart',
        web: 'bar_chart',
      },
      label: '导入预算计算器',
    },
  ],
  timestamp: '10:42 AM',
  engineVersion: 'Nomadly AI Engine v4.2',
};

export const MOCK_SHINJUKU_AI_RESPONSE: AIResponseData = MOCK_SHINJUKU_AI_RESPONSE_EN;

export function getMockShinjukuAIResponse(isZh: boolean = false): AIResponseData {
  return isZh ? MOCK_SHINJUKU_AI_RESPONSE_ZH : MOCK_SHINJUKU_AI_RESPONSE_EN;
}

export const SUGGESTED_QUESTIONS_EN: SuggestedQuestion[] = [
  {
    id: 'sug-1',
    iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
    iconColor: '#0284C7',
    text: 'Tokyo transit discount pass tips',
  },
  {
    id: 'sug-2',
    iconName: { ios: 'fork.knife', android: 'restaurant', web: 'restaurant' },
    iconColor: '#16A34A',
    text: 'Halal & vegan dining options',
  },
  {
    id: 'sug-3',
    iconName: { ios: 'tag.fill', android: 'local_offer', web: 'local_offer' },
    iconColor: '#EA580C',
    text: 'Tax-free shopping at Don Quijote',
  },
  {
    id: 'sug-4',
    iconName: { ios: 'wifi', android: 'wifi', web: 'wifi' },
    iconColor: '#9333EA',
    text: 'Pocket WiFi airport pickup at Haneda',
  },
];

export const SUGGESTED_QUESTIONS_ZH: SuggestedQuestion[] = [
  {
    id: 'sug-1',
    iconName: { ios: 'tram.fill', android: 'train', web: 'train' },
    iconColor: '#0284C7',
    text: '东京地铁乘车优惠一日通票建议',
  },
  {
    id: 'sug-2',
    iconName: { ios: 'fork.knife', android: 'restaurant', web: 'restaurant' },
    iconColor: '#16A34A',
    text: '新宿附近清真或素食友好餐厅',
  },
  {
    id: 'sug-3',
    iconName: { ios: 'tag.fill', android: 'local_offer', web: 'local_offer' },
    iconColor: '#EA580C',
    text: '唐吉诃德免税退税购物指南',
  },
  {
    id: 'sug-4',
    iconName: { ios: 'wifi', android: 'wifi', web: 'wifi' },
    iconColor: '#9333EA',
    text: '羽田机场随身 WiFi 快速取还点',
  },
];

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = SUGGESTED_QUESTIONS_EN;

export function getSuggestedQuestions(isZh: boolean = false): SuggestedQuestion[] {
  return isZh ? SUGGESTED_QUESTIONS_ZH : SUGGESTED_QUESTIONS_EN;
}

export function createMockConversation(userQuery: string, isZh: boolean = false): ChatMessage[] {
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
      aiResponse: getMockShinjukuAIResponse(isZh),
    },
  ];
}
