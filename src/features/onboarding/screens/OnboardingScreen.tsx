import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingPagination, OnboardingSlideItem } from '../components';
import { ONBOARDING_SLIDES } from '../services/mockData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// 24-slice seamless native sky gradient (iOS, Android, Web)
const SKY_SLICE_COUNT = 24;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  // From #F0F9FF (240, 249, 255) to #BAE6FD (186, 230, 253)
  const r = Math.round(240 + (186 - 240) * t);
  const g = Math.round(249 + (230 - 249) * t);
  const b = Math.round(255 + (253 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SCREEN_WIDTH);
    if (index !== activeIndex && index >= 0 && index < ONBOARDING_SLIDES.length) {
      setActiveIndex(index);
    }
  };

  const handleSkipOrFinish = () => {
    router.replace('/login');
  };

  const handleDotPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setActiveIndex(index);
  };

  const isLastSlide = activeIndex === ONBOARDING_SLIDES.length - 1;

  return (
    <View style={styles.root}>
      {/* Seamless Sky Gradient Background */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        {/* Top Bar: Skip (Lewati) Action */}
        <View style={styles.topBar}>
          {!isLastSlide ? (
            <Pressable
              hitSlop={10}
              onPress={handleSkipOrFinish}
              style={({ pressed }) => [styles.skipButton, pressed && styles.skipPressed]}>
              <Text style={styles.skipText}>Lewati</Text>
            </Pressable>
          ) : (
            <View style={styles.skipPlaceholder} />
          )}
        </View>

        {/* Pager: Horizontal Swipe FlatList */}
        <View style={styles.pagerContainer}>
          <FlatList
            ref={flatListRef}
            data={ONBOARDING_SLIDES}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onMomentumScrollEnd={handleScroll}
            renderItem={({ item }) => <OnboardingSlideItem slide={item} />}
          />
        </View>

        {/* Bottom Area: Pagination & CTA on Slide 3 */}
        <View style={styles.bottomContainer}>
          {/* Pagination Dots */}
          <View style={styles.paginationWrapper}>
            <OnboardingPagination
              total={ONBOARDING_SLIDES.length}
              activeIndex={activeIndex}
              onDotPress={handleDotPress}
            />
          </View>

          {/* Slide 3 Action Button (Click button required on final slide) */}
          {isLastSlide && (
            <View style={styles.ctaWrapper}>
              <Pressable
                style={({ pressed }) => [
                  styles.ctaButton,
                  pressed && styles.ctaButtonPressed,
                ]}
                onPress={handleSkipOrFinish}>
                <Text style={styles.ctaButtonText}>Mulai Sekarang / Get Started</Text>
                <SymbolView
                  name={{ ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' }}
                  size={18}
                  tintColor="#FFFFFF"
                />
              </Pressable>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#BAE6FD',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 8,
    height: 44,
  },
  skipButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  skipPressed: {
    opacity: 0.6,
  },
  skipText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
  },
  skipPlaceholder: {
    height: 24,
  },
  pagerContainer: {
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: 28,
    paddingBottom: 28,
    alignItems: 'center',
  },
  paginationWrapper: {
    marginBottom: 16,
  },
  ctaWrapper: {
    width: '100%',
    marginTop: 4,
  },
  ctaButton: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  ctaButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
