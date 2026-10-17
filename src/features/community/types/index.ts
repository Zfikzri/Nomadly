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
};
