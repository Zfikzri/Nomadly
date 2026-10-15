export type ChatTabType = 'personal' | 'community';

export type ChatFilterType = 'all' | 'unread' | 'favorite';

export type TravelerOnline = {
  id: string;
  name: string;
  location: string;
  avatarUrl: string;
  countryCode: string;
  countryFlag: string;
  isOnline: boolean;
};

export type ChatItemMetaIcon = 'location' | 'flight' | 'backpack';

export type ChatMessageItem = {
  id: string;
  type: ChatTabType;
  name: string;
  countryCode?: string;
  countryFlag?: string;
  avatarUrl: string;
  lastMessage: string;
  senderName?: string;
  time: string;
  timeHighlight?: boolean;
  unreadCount?: number;
  isRead?: boolean;
  isFavorite?: boolean;
  categoryTag?: {
    label: string;
    bgColor: string;
    textColor: string;
  };
  metaText: string;
  metaIconType?: ChatItemMetaIcon;
  membersCount?: number;
};
