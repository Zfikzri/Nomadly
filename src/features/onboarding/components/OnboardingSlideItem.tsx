import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { useLanguage } from '@/i18n';
import { OnboardingBadge } from './OnboardingBadge';
import type { OnboardingSlide } from '../types';

type OnboardingSlideItemProps = {
  slide: OnboardingSlide;
};

export function OnboardingSlideItem({ slide }: OnboardingSlideItemProps) {
  const { width } = useWindowDimensions();
  const { strings } = useLanguage();

  const height = slide.vectorHeight ?? 240;
  const scale = slide.vectorScale ?? 1.0;
  const widthRatio = slide.vectorWidthRatio ?? 0.90;

  // Localize text dynamically based on current language
  let titlePrimary = slide.titlePrimary;
  let titleHighlight = slide.titleHighlight;
  let subtitle = slide.subtitle;
  let badgeConfig = slide.badgeConfig;

  if (slide.id === 'slide-1') {
    titlePrimary = strings.onboarding.slide1Title;
    titleHighlight = strings.onboarding.slide1Highlight;
    subtitle = strings.onboarding.slide1Subtitle;
    badgeConfig = { ...slide.badgeConfig, text: strings.onboarding.slide1Badge };
  } else if (slide.id === 'slide-2') {
    titlePrimary = strings.onboarding.slide2Title;
    titleHighlight = strings.onboarding.slide2Highlight;
    subtitle = strings.onboarding.slide2Subtitle;
    badgeConfig = {
      ...slide.badgeConfig,
      text: strings.onboarding.slide2Badge,
      subtext: strings.onboarding.slide2BadgeSub,
    };
  } else if (slide.id === 'slide-3') {
    titlePrimary = strings.onboarding.slide3Title;
    titleHighlight = strings.onboarding.slide3Highlight;
    subtitle = strings.onboarding.slide3Subtitle;
    badgeConfig = {
      ...slide.badgeConfig,
      text: strings.onboarding.slide3Badge,
      subtext: strings.onboarding.slide3BadgeSub,
    };
  }

  return (
    <View style={[styles.slideContainer, { width }]}>
      {/* Top Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.titlePrimary}>
          {titlePrimary}
          {titleHighlight ? (
            <Text style={styles.titleHighlight}>{titleHighlight}</Text>
          ) : null}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {/* Center Artwork & Floating Badge */}
      <View style={[styles.artworkContainer, { width }]}>
        <View style={[styles.vectorWrapper, { width, height }]}>
          <Image
            source={slide.vectorSource}
            style={[
              styles.vectorImage,
              {
                width: width * widthRatio,
                height,
                transform: [{ scale }],
              },
            ]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.badgeWrapper}>
          <OnboardingBadge
            badgeType={slide.badgeType}
            config={badgeConfig}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 20,
  },
  textContainer: {
    paddingHorizontal: 28,
    maxWidth: 360,
    marginTop: 8,
  },
  titlePrimary: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 38,
    letterSpacing: -0.6,
  },
  titleHighlight: {
    color: '#2563EB',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#475569',
    lineHeight: 22,
    marginTop: 12,
  },
  artworkContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  vectorWrapper: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vectorImage: {
    // Dynamic sizing via style prop
  },
  badgeWrapper: {
    marginTop: 14,
    paddingHorizontal: 28,
  },
});
