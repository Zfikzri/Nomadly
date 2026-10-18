import { useRouter } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import {
  AttractionPromoCard,
  FlightPromoCard,
  HighlightPromoCard,
  PromoFilterChips,
  PromoHeader,
  PromoSearchBar,
  TransitPassCard,
} from '../components';
import { getLocalizedPromoCatalog } from '../services/mockData';
import type { PromoCategoryId } from '../types';

export function DiscountPromosScreen() {
  const router = useRouter();
  const { isZh } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<PromoCategoryId>('all');

  const {
    categories,
    highlightPromo,
    transitPasses,
    flightPromos,
    attractionPromos,
  } = getLocalizedPromoCatalog(isZh);

  // ponytail: client-side filter mockup for promos. Ceiling: static in-memory catalog. Upgrade path: connect to live promotional API with personalized sorting.
  const q = searchQuery.toLowerCase().trim();

  const showHighlight = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'flights') return false;
    if (!q) return true;
    return (
      highlightPromo.title.toLowerCase().includes(q) ||
      highlightPromo.subtitle.toLowerCase().includes(q) ||
      highlightPromo.couponCode.toLowerCase().includes(q)
    );
  }, [activeCategory, q, highlightPromo]);

  const filteredTransitPasses = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'trains') return [];
    if (!q) return transitPasses;
    return transitPasses.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
    );
  }, [activeCategory, q, transitPasses]);

  const filteredFlights = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'flights') return [];
    if (!q) return flightPromos;
    return flightPromos.filter(
      (item) =>
        item.airline.toLowerCase().includes(q) ||
        item.route.toLowerCase().includes(q) ||
        item.boxDetail.toLowerCase().includes(q)
    );
  }, [activeCategory, q, flightPromos]);

  const filteredAttractions = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'attractions') return [];
    if (!q) return attractionPromos;
    return attractionPromos.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
    );
  }, [activeCategory, q, attractionPromos]);

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
          <Text style={styles.mainTitle}>
            {isZh ? '特惠与折扣门票' : 'Promotions & Discounts'}
          </Text>
          <Text style={styles.mainSubtitle}>
            {isZh
              ? '精选认证机票折扣、高速铁路通票及旅行优惠券'
              : 'Verified flight discounts, high-speed rail passes & travel vouchers'}
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
          categories={categories}
          activeCategoryId={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 5. Highlight of the Week */}
        {showHighlight && (
          <HighlightPromoCard
            promo={highlightPromo}
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
              <Text style={styles.sectionLink}>
                {isZh ? '即时电子票' : 'Instant E-Ticket'}
              </Text>
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

        {/* 7. Section 3: Flights Promos */}
        {filteredFlights.length > 0 && (
          <View style={styles.sectionWrapper}>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionHeaderLeft}>
                <SymbolView
                  name={{ ios: 'airplane', android: 'flight', web: 'flight' }}
                  size={16}
                  tintColor="#0284C7"
                />
                <Text style={styles.sectionHeading}>Flight Specials</Text>
              </View>
              <Text style={styles.sectionSubLink}>
                {isZh ? '精选往返' : 'Featured Return'}
              </Text>
            </View>

            {filteredFlights.map((flight) => (
              <FlightPromoCard
                key={flight.id}
                item={flight}
                onPress={() =>
                  router.push({
                    pathname: '/promo/[id]',
                    params: { id: 'promo-1' },
                  } as any)
                }
              />
            ))}
          </View>
        )}

        {/* 8. Section 4: Attractions & eSIM */}
        {filteredAttractions.length > 0 && (
          <View style={styles.sectionWrapper}>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionHeaderLeft}>
                <SymbolView
                  name={{ ios: 'ticket.fill', android: 'confirmation_number', web: 'confirmation_number' }}
                  size={16}
                  tintColor="#16A34A"
                />
                <Text style={styles.sectionHeading}>Passes &amp; eSIM</Text>
              </View>
              <Text style={styles.sectionLink}>
                {isZh ? '查看全部' : 'View All'}
              </Text>
            </View>

            {filteredAttractions.map((attr) => (
              <AttractionPromoCard
                key={attr.id}
                item={attr}
                onPress={() => console.log('Selected attraction:', attr.id)}
              />
            ))}
          </View>
        )}

        {/* Empty State */}
        {!hasAnyResults && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              {isZh ? '未找到相关优惠' : 'No promotions found'}
            </Text>
            <Text style={styles.emptySubtitle}>
              {isZh
                ? '请尝试更换搜索关键词或选择“全部”分类。'
                : 'Try searching with different keywords or select the "All" category.'}
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
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
});
