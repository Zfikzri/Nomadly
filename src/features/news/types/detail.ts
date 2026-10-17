export type AiKeyPoint = {
  id: string;
  dotColor: string; // '#2563EB' (blue), '#EF4444' (red), '#10B981' (green)
  boldPrefix: string;
  text: string;
};

export type ArticleCallout = {
  type: 'regulation' | 'strategy';
  title: string;
  text: string;
};

export type ArticleSection = {
  id: string;
  sectionNumberTitle: string; // e.g. "1. Dampak terhadap Wisatawan Mancanegara"
  paragraphs: string[];
  callout?: ArticleCallout;
  image?: {
    url: string;
    caption?: string;
  };
};

export type SocialAction = {
  id: string;
  label: string;
  icon: 'bookmark' | 'share' | 'chat';
  bgColor: string;
  tintColor: string;
};

export type RelatedNewsItem = {
  id: string;
  tagLabel: string;
  tagBgColor: string;
  tagTextColor: string;
  title: string;
  timeAgo: string;
  categoryText: string;
};

export type NewsDetailData = {
  id: string;
  countryCode: string;
  countryName: string;
  flagEmoji: string;
  categoryTag: string;
  timeAgo: string;
  readTime: string;
  translationBadgeText: string;
  title: string;
  heroImage: {
    url: string;
    caption: string;
  };
  aiKeyPoints: {
    title: string;
    subtitle: string;
    accuracyBadge: string;
    points: AiKeyPoint[];
  };
  sections: ArticleSection[];
  socialShare: {
    title: string;
    joinCountText: string;
    actions: SocialAction[];
  };
};
