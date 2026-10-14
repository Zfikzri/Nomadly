export type PromoCategoryId = 'all' | 'flights' | 'trains' | 'attractions';

export type PromoCategory = {
  id: PromoCategoryId;
  label: string;
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
  iconColor?: string;
};

export type HighlightPromo = {
  id: string;
  badgeLeft: string;
  badgeRight: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  couponCode: string;
  reschedulePolicy: string;
  minTransaction: string;
};

export type TransitPass = {
  id: string;
  discountBadge: string;
  featureBadge: {
    icon: 'bolt' | 'globe';
    text: string;
    color: string;
  };
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  infoBadge: {
    icon: 'calendar' | 'qrcode';
    text: string;
  };
  imageUrl: string;
};

export type FlightPromo = {
  id: string;
  airline: string;
  logoBg: string;
  iconColor: string;
  discountBadge: string;
  cashbackBadge?: string;
  route: string;
  boxTitle: string;
  boxDetail: string;
  price: string;
  bottomInfo: {
    icon: 'bag' | 'star';
    text: string;
    color?: string;
  };
};

export type AttractionPromo = {
  id: string;
  type: 'esim' | 'theme_park';
  iconType: 'esim' | 'image';
  imageUrl?: string;
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
  };
  secondaryBadge?: {
    text: string;
    textColor: string;
  };
  title: string;
  subtitle: string;
  price: string;
  buttonLabel: string;
};
