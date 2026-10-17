import { Image } from 'expo-image';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { OnboardingBadge } from './OnboardingBadge';
import type { OnboardingSlide } from '../types';

type OnboardingSlideItemProps = {
  slide: OnboardingSlide;
};

export function OnboardingSlideItem({ slide }: OnboardingSlideItemProps) {
  const { width } = useWindowDimensions();

  const height = slide.vectorHeight ?? 240;
  const scale = slide.vectorScale ?? 1.0;
  const widthRatio = slide.vectorWidthRatio ?? 0.90;

  return (
    <View style={[styles.slideContainer, { width }]}>
      {/* Top Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.titlePrimary}>
          {slide.titlePrimary}
          {slide.titleHighlight ? (
            <Text style={styles.titleHighlight}>{slide.titleHighlight}</Text>
          ) : null}
        </Text>
        <Text style={styles.subtitle}>{slide.subtitle}</Text>
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
            contentFit="contain"
            transition={200}
          />
        </View>

        <View style={styles.badgeWrapper}>
          <OnboardingBadge
            badgeType={slide.badgeType}
            config={slide.badgeConfig}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
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
