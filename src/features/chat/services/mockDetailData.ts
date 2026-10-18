import type { GroupDetailMessage, PersonalDetailMessage } from '../types';

export const MOCK_PERSONAL_CHAT_MESSAGES: PersonalDetailMessage[] = [
  {
    id: 'pm-1',
    sender: 'other',
    text: 'Hello Alex! Great to connect with you. What date are you arriving in Tokyo?',
    time: '10:14',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    autoTranslateLabel: 'Auto EN',
  },
  {
    id: 'pm-2',
    sender: 'me',
    text: 'Hey Kenji! I arrive on October 24th. Looking for convenience store recommendations and low-fee yen exchange around Shinjuku.',
    time: '10:16',
    isReadReceipt: true,
  },
  {
    id: 'pm-3',
    sender: 'other',
    isVoiceNote: true,
    voiceDuration: '0:42',
    voiceTitle: 'Voice Note Tips',
    transcription:
      '“It is much better to use a digital Suica or Pasmo on Apple Wallet / Google Wallet, Alex. For Tokyo subway gates, tapping the IC card gives instant access without queues, and you can reload directly with your card.”',
    time: '10:24',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
];

export const MOCK_GROUP_CHAT_MESSAGES: GroupDetailMessage[] = [
  {
    id: 'gm-1',
    senderType: 'member',
    senderName: 'Kenji',
    countryCode: 'JP',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    senderBadge: {
      label: 'Local Host',
      bgColor: '#EDE9FE',
      textColor: '#8B5CF6',
    },
    text: 'Welcome to Shinjuku everyone! 🍁 For anyone looking to purchase a physical Suica Card at the station, the ticket machines stay open until 21:00.',
    time: '10:14',
  },
  {
    id: 'gm-2',
    senderType: 'member',
    senderName: 'Sarah',
    countryCode: 'DE',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'Thanks Kenji! Just landed at Narita. Is Narita Express or Keisei Skyliner the more affordable option?',
    time: '10:18',
  },
  {
    id: 'gm-3',
    senderType: 'ai',
    time: '10:20',
    aiRecommendation: {
      title: 'Nomadly Travel AI',
      badge: 'Smart Savings',
      tipsIntro: 'Transit Advice: If you hold a ',
      jrPassBold: 'JR Pass',
      jrPassText: ', Narita Express is 100% free! Otherwise, combine ',
      comboBold: 'Keisei Skyliner + Tokyo Subway 72-Hour Pass',
      comboText: ' to save around ',
      savingsRupiah: '$12 USD',
      savingsYen: ' (¥1,700).',
      primaryActionText: 'Book Combined Pass',
      secondaryActionText: 'View Schedule',
    },
  },
  {
    id: 'gm-4',
    senderType: 'member',
    senderName: 'Budi',
    countryCode: 'ID',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Anyone up for sharing an unlimited pocket WiFi or splitting a ramen dinner tonight in Omoide Yokocho? 🍜',
    time: '10:22',
  },
  {
    id: 'gm-5',
    senderType: 'me',
    senderName: 'You',
    text: 'Count me in Budi! My JPY balance is all loaded in Nomadly wallet 🚀',
    time: '10:25',
    statusReceipt: 'Sent',
  },
];
