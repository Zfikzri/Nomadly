import type { OnboardingSlide } from '../types';

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 'slide-1',
    titlePrimary: 'Your Study Abroad,\n',
    titleHighlight: 'Without the Worry.',
    subtitle: 'Plan your travel budget, manage your expenses, and make every journey count.',
    vectorSource: require('../../../../assets/images/onboarding-vector-1.png'),
    badgeType: 'green-dot',
    badgeConfig: {
      text: 'Zero FX Markup • Multi-Currency',
    },
    isLastSlide: false,
    vectorHeight: 265,
    vectorScale: 1.15,
    vectorWidthRatio: 0.98,
  },
  {
    id: 'slide-2',
    titlePrimary: 'Your Money,\nWherever You Study.',
    subtitle: 'Track exchange rates, convert currencies, and make smarter money decisions while studying abroad.',
    vectorSource: require('../../../../assets/images/onboarding-vector-2.png'),
    badgeType: 'currency-exchange',
    badgeConfig: {
      text: '1 USD = 0.92 EUR',
      subtext: 'Real-time FX',
    },
    isLastSlide: false,
    vectorHeight: 280,
    vectorScale: 1.28,
    vectorWidthRatio: 1.0,
  },
  {
    id: 'slide-3',
    titlePrimary: 'Travel Smarter,\n',
    titleHighlight: 'Explore with Ease.',
    subtitle: 'Discover local communities, share travel plans, and unlock smart travel finance everywhere.',
    vectorSource: require('../../../../assets/images/onboarding-vector-3.png'),
    badgeType: 'community',
    badgeConfig: {
      text: 'Nomad Community',
      subtext: '50+ Countries',
    },
    isLastSlide: true,
    vectorHeight: 265,
    vectorScale: 1.15,
    vectorWidthRatio: 0.98,
  },
];
