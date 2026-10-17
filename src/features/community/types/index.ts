<<<<<<< HEAD
export type MemberAvatar = {
  id: string;
  avatarUrl: string;
  name?: string;
  flagCode: string;
};

export type CommunityGroupDetail = {
  id: string;
  title: string;
  heroImageUrl: string;
  stayingCard: {
    title: string;
    subtitle: string;
    members: MemberAvatar[];
    remainingCountText: string;
  };
  about: {
    title: string;
    description: string;
  };
  actionButtonText: string;
=======
export type FilterCategoryId = 'all' | 'asia' | 'europe' | 'workation';

export type CategoryFilter = {
  id: FilterCategoryId;
  label: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
  iconColor?: string;
};

export type FeatureTag = {
  label: string;
  type: 'itinerary' | 'split_bill' | 'nomad_work' | 'culinary' | 'budget';
  textColor: string;
  bgColor: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
};

export type CommunityGroup = {
  id: string;
  title: string;
  category: FilterCategoryId;
  imageUrl: string;
  membersCount: number;
  locations?: string[];
  lastMessage: {
    sender: string;
    text: string;
  };
  regionTag: {
    label: string;
    iconEmoji?: string;
  };
  featureTag: FeatureTag;
  unreadCount?: number;
  isRead?: boolean;
>>>>>>> 13f50b222c70bc9ebaa9c2e0e69c2e6dc57a7b8a
};
