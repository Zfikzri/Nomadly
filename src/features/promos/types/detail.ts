export type TermConditionItem = {
  id: string;
  title: string;
  description: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
};

export type ReservationPartner = {
  id: string;
  name: string;
  cashbackText: string;
  cashbackColor?: string;
  iconBgColor: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
  iconColor: string;
};

export type PromoDetailData = {
  id: string;
  hero: {
    badgeLeft: string;
    badgeRight: string;
    routeSubtitle: string;
    title: string;
    imageUrl: string;
  };
  price: {
    currentPrice: string;
    strikePrice: string;
    discountPill: string;
    usdEstimate: string;
    savingsAmount: string;
    savingsBadge: string;
  };
  voucher: {
    sectionTitle: string;
    badgeText: string;
    label: string;
    code: string;
  };
  orbAiAdvice: {
    title: string;
    messagePrefix: string;
    highlightText: string;
    messageSuffix: string;
  };
  terms: {
    title: string;
    items: TermConditionItem[];
  };
  partners: {
    title: string;
    badgeText: string;
    list: ReservationPartner[];
  };
};
