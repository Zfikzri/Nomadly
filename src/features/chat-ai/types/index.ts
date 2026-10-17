export type StarterPrompt = {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  queryText: string;
};

export type SuggestedQuestion = {
  id: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
  iconColor: string;
  text: string;
};

export type DailyFoodEstimate = {
  title: string;
  yenRange: string;
  rupiahRange: string;
  description: string;
  breakfastTag: string;
  lunchTag: string;
};

export type FreeAdminAtmInfo = {
  title: string;
  bankName: string;
  description: string;
  networkBold: string;
  hoursBold: string;
  compatibleCardsText: string;
};

export type StoreLocationPhoto = {
  title: string;
  subText: string;
  imageUrl: string;
};

export type AIActionItem = {
  id: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
  label: string;
};

export type AIResponseData = {
  agentName: string;
  introPrefix: string;
  destinationBold: string;
  foodEstimate: DailyFoodEstimate;
  atmInfo: FreeAdminAtmInfo;
  storePhoto: StoreLocationPhoto;
  actions: AIActionItem[];
  timestamp: string;
  engineVersion: string;
};

export type ChatMessage = {
  id: string;
  sender: 'user' | 'ai';
  text?: string;
  time: string;
  aiResponse?: AIResponseData;
  isReadReceipt?: boolean;
};
