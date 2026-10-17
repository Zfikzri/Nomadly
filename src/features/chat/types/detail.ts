export type MessageSenderType = 'other' | 'me' | 'ai';

export type PersonalDetailMessage = {
  id: string;
  sender: 'other' | 'me';
  text?: string;
  time: string;
  avatarUrl?: string;
  isVoiceNote?: boolean;
  voiceDuration?: string;
  voiceTitle?: string;
  transcription?: string;
  autoTranslateLabel?: string;
  isReadReceipt?: boolean;
};

export type GroupMemberBadge = {
  label: string;
  bgColor: string;
  textColor: string;
};

export type AINavigationRecommendation = {
  title: string;
  badge: string;
  tipsIntro: string;
  jrPassBold: string;
  jrPassText: string;
  comboBold: string;
  comboText: string;
  savingsRupiah: string;
  savingsYen: string;
  primaryActionText: string;
  secondaryActionText: string;
};

export type GroupDetailMessage = {
  id: string;
  senderType: 'member' | 'ai' | 'me';
  senderName?: string;
  senderBadge?: GroupMemberBadge;
  countryCode?: string;
  avatarUrl?: string;
  text?: string;
  time: string;
  aiRecommendation?: AINavigationRecommendation;
  statusReceipt?: string;
};
