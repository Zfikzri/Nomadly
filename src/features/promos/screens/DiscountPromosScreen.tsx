import { useRouter } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  AttractionPromoCard,
  FlightPromoCard,
  HighlightPromoCard,
  PromoFilterChips,
  PromoHeader,
  PromoSearchBar,
  TransitPassCard,
} from '../components';
import {
  MOCK_ATTRACTION_PROMOS,
  MOCK_FLIGHT_PROMOS,
  MOCK_HIGHLIGHT_PROMO,
  MOCK_PROMO_CATEGORIES,
  MOCK_TRANSIT_PASSES,
} from '../services/mockData';
import type { PromoCategoryId } from '../types';

export function DiscountPromosScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<PromoCategoryId>('all');

  // ponytail: client-side filter mockup for promos. Ceiling: static in-memory catalog. Upgrade path: connect to live promotional API with personalized sorting.
  const q = searchQuery.toLowerCase().trim();

  const showHighlight = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'flights') return false;
    if (!q) return true;
    return (
      MOCK_HIGHLIGHT_PROMO.title.toLowerCase().includes(q) ||
      MOCK_HIGHLIGHT_PROMO.subtitle.toLowerCase().includes(q) ||
      MOCK_HIGHLIGHT_PROMO.couponCode.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const filteredTransitPasses = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'trains') return [];
    if (!q) return MOCK_TRANSIT_PASSES;
    return MOCK_TRANSIT_PASSES.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const filteredFlights = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'flights') return [];
    if (!q) return MOCK_FLIGHT_PROMOS;
    return MOCK_FLIGHT_PROMOS.filter(
      (item) =>
        item.airline.toLowerCase().includes(q) ||
        item.route.toLowerCase().includes(q) ||
        item.boxDetail.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const filteredAttractions = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'attractions') return [];
    if (!q) return MOCK_ATTRACTION_PROMOS;
    return MOCK_ATTRACTION_PROMOS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const hasAnyResults =
    showHighlight ||
    filteredTransitPasses.length > 0 ||
    filteredFlights.length > 0 ||
    filteredAttractions.length > 0;

  return (
    <View style={styles.root}>
      {/* 1. Header Navigation Bar */}
      <PromoHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        {/* 2. Screen Title & Subtitle Banner */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Promo &amp; Diskon Tiket</Text>
          <Text style={styles.mainSubtitle}>
            Katalog promo penerbangan, kereta cepat &amp; voucher wisata terverifikasi
          </Text>
        </View>

        {/* 3. Search Bar */}
        <PromoSearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFilterPress={() => console.log('Filter button pressed')}
        />

        {/* 4. Horizontal Category Filter Chips */}
        <PromoFilterChips
          categories={MOCK_PROMO_CATEGORIES}
          activeCategoryId={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 5. Highlight Pekan Ini */}
        {showHighlight && (
          <HighlightPromoCard
            promo={MOCK_HIGHLIGHT_PROMO}
            onClaim={() =>
              router.push({
                pathname: '/promo/[id]',
                params: { id: 'promo-1' },
              } as any)
            }
          />
        )}

        {/* 6. Section 2: Rail & Transit Passes */}
        {filteredTransitPasses.length > 0 && (
          <View style={styles.sectionWrapper}>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionHeaderLeft}>
                <SymbolView
                  name={{ ios: 'tram.fill', android: 'train', web: 'train' }}
                  size={16}
                  tintColor="#9333EA"
                />
                <Text style={styles.sectionHeading}>Rail &amp; Transit Passes</Text>
              </View>
              <Text style={styles.sectionLink}>E-Ticket Instan</Text>
            </View>

            {filteredTransitPasses.map((pass) => (
              <TransitPassCard
                key={pass.id}
                item={pass}
                onPress={() => console.log('Selected transit pass:', pass.id)}
              />
            ))}
          </View>
        )}

        {/* Empty State */}
        {!hasAnyResults && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Tidak ada promo ditemukan</Text>
            <Text style={styles.emptySubtitle}>
              Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#BFE3FF',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  titleSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  mainSubtitle: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
    fontWeight: '400',
  },
  sectionWrapper: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  sectionLink: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0050D6',
  },
  sectionSubLink: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
  emptyContainer: {
    paddingHorizontal: 32,
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
  },
});
