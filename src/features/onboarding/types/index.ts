import { ImageSourcePropType } from 'react-native';

export type BadgeType = 'green-dot' | 'currency-exchange' | 'community';

export interface OnboardingBadgeConfig {
  text: string;
  subtext?: string;
  rate?: string;
}

export interface OnboardingSlide {
  id: string;
  titlePrimary: string;
  titleHighlight?: string;
  subtitle: string;
  vectorSource: ImageSourcePropType;
  badgeType: BadgeType;
  badgeConfig: OnboardingBadgeConfig;
  isLastSlide?: boolean;
  vectorHeight?: number;
  vectorScale?: number;
  vectorWidthRatio?: number;
}
