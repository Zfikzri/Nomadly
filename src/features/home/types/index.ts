export type UserProfile = {
  name: string;
  country: string;
  role: string;
  avatarUrl: string;
  isVip: boolean;
  isOnline: boolean;
};

export type CommunityPlan = {
  id: string;
  title: string;
  dateRange: string;
  duration: string;
  countryPill: string;
  repliesCount: number;
  originFlag: string;
};

export type PromoBadge = {
  text: string;
  variant: 'solid' | 'translucent';
  icon?: 'clock' | 'lightning';
};

export type DiscountPromo = {
  id: string;
  badge: PromoBadge;
  secondaryBadge?: PromoBadge;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
};

export type NewsSnippet = {
  id: string;
  code: string;
  flagEmoji?: string;
  badgeText: string;
  timeAgo: string;
  title: string;
  aiActionText: string;
};
