import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Spacing } from '@/constants/theme';
import {
  CommunityPlansSection,
  DiscountPromosSection,
  HomeHeroHeader,
  LocalNewsSection,
  ProfileCard,
} from '../components';
import {
  MOCK_COMMUNITY_PLANS,
  MOCK_DISCOUNT_PROMOS,
  MOCK_LOCAL_NEWS,
  MOCK_USER_PROFILE,
} from '../services/mockData';

// Pure native sky gradient background (#D8EEFF ke #9BCDF8)
// 100% reliable di Android, iOS, & Web tanpa ketergantungan SVG parser
const SKY_SLICE_COUNT = 24;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(216 + (155 - 216) * t);
  const g = Math.round(238 + (205 - 238) * t);
  const b = Math.round(255 + (248 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function HomeScreen() {
  return (
    <View style={styles.root} className="flex-1 bg-skyTop">
      {/* 1. Sky Gradient Background di bagian atas (#D8EEFF -> #9BCDF8) */}
      <View style={styles.skyHeaderBackground} className="absolute top-0 left-0 right-0 h-[520px]" pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      <SafeAreaView edges={['top']} style={styles.safeArea} className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          className="pt-2">
          {/* Header Title & Subtitle di area langit */}
          <HomeHeroHeader userName="Lontong Balap" />

          {/* Floating User Profile Card yang overlap ke sheet putih */}
          <View style={styles.profileSection} className="z-20 mt-2 -mb-11">
            <ProfileCard
              profile={MOCK_USER_PROFILE}
              onOpen={() => router.push('/profile' as any)}
            />
          </View>

          {/* 2. White Surface Sheet dengan Corner Radius Atas (36px) & overflow hidden */}
          <View
            style={styles.whiteSurfaceSheet}
            className="bg-white rounded-t-[36px] overflow-hidden pt-14 shadow-md">
            {/* Carousel Community & Travel Plans */}
            <CommunityPlansSection
              plans={MOCK_COMMUNITY_PLANS}
              onSeeAll={() => router.push('/community-plans')}
              onSelectPlan={(plan) => console.log('Selected plan:', plan.id)}
            />

            {/* Fancy a Discount? Promos */}
            <DiscountPromosSection
              promos={MOCK_DISCOUNT_PROMOS}
              onSeeAll={() => router.push('/discount-promos')}
              onSelectPromo={(promo) => console.log('Selected promo:', promo.id)}
            />

            {/* Local News Snippet List */}
            <LocalNewsSection
              newsList={MOCK_LOCAL_NEWS}
              onSeeAll={() => router.push('/local-news')}
              onSelectNews={(news) => console.log('Selected news:', news.id)}
              onAiAdvicePress={(news) => console.log('AI Advice clicked for:', news.id)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D8EEFF', // Pastikan background dasar adalah warna gradient atas
  },
  skyHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 520, // Memastikan gradient langit meluas di belakang lekukan sheet putih
    backgroundColor: '#D8EEFF',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Spacing.two,
  },
  profileSection: {
    zIndex: 20,
    marginTop: Spacing.two,
    marginBottom: -44, // Tepat 50% card di area langit dan 50% di sheet putih (seam merging)
  },
  whiteSurfaceSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    overflow: 'hidden', // Wajib agar corner radius terlihat tegas dan tidak kotak di Android/iOS
    paddingTop: 56, // Ruang agar konten sheet putih mulai di bawah card profile yang overlap
    paddingBottom: Spacing.six + 60, // Space untuk floating bottom navigation bar
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },
});
