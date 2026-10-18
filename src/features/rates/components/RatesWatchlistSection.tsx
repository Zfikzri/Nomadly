import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { WatchlistCardItem } from '../types';
import { LinearGradientBackground } from './LinearGradientBackground';

type RatesWatchlistSectionProps = {
  items: WatchlistCardItem[];
  onAddPress?: () => void;
};

export function RatesWatchlistSection({
  items,
  onAddPress,
}: RatesWatchlistSectionProps) {
  const { isZh } = useLanguage();

  return (
    <View style={styles.container}>
      {/* 1. Action & Status Row */}
      <View style={styles.actionRow}>
        {/* + Add Watchlist Button */}
        <Pressable
          onPress={onAddPress}
          style={({ pressed }) => [
            styles.addWatchlistButton,
            pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
          ]}>
          <LinearGradientBackground />
          <Text style={styles.addWatchlistText}>
            {isZh ? '+ 添加关注' : '+ Add Watchlist'}
          </Text>
        </Pressable>

        {/* Live Kurs Update Indicator */}
        <View style={styles.liveIndicator}>
          <Text style={styles.liveRadioIcon}>((•))</Text>
          <Text style={styles.liveText}>
            {isZh ? '实时汇率更新' : 'Live FX Update'}
          </Text>
        </View>
      </View>

      {/* 2. Horizontal Cards Carousel (Alternating: 1 Linear Gradient, 1 Putih) */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsScrollContainer}>
        {items.map((item, index) => {
          // Tiap jarak 1 card putih, 1 card linear gradient
          const isGradient = index % 2 === 0;

          return (
            <View
              key={item.id}
              style={[
                styles.card,
                isGradient ? styles.gradientCard : styles.whiteCard,
              ]}>
              {/* Linear Gradient for alternating Card */}
              {isGradient && <LinearGradientBackground />}

              {/* Pair Title & Trend Badge */}
              <View style={styles.cardHeaderRow}>
                <Text
                  style={[
                    styles.pairText,
                    isGradient ? styles.gradientPairText : styles.whitePairText,
                  ]}>
                  {item.pair}
                </Text>
                <Text
                  style={[
                    styles.trendBadge,
                    item.isPositive ? styles.positiveTrend : styles.negativeTrend,
                  ]}>
                  {item.isPositive ? `^${item.changePercent}` : `v${item.changePercent}`}
                </Text>
              </View>

              {/* Big Rate Amount */}
              <Text
                style={[
                  styles.rateAmount,
                  isGradient ? styles.gradientRateAmount : styles.whiteRateAmount,
                ]}>
                {item.rateFormatted}
              </Text>

              {/* Rate Subtext */}
              <Text
                style={[
                  styles.rateSubtext,
                  isGradient ? styles.gradientRateSubtext : styles.whiteRateSubtext,
                ]}
                numberOfLines={1}>
                {item.rateSubtext}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  addWatchlistButton: {
    position: 'relative',
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    shadowColor: '#0F5BA3',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  addWatchlistText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
    letterSpacing: 0.2,
    position: 'relative',
    zIndex: 1,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  liveRadioIcon: {
    color: '#EF4444',
    fontSize: 13,
    fontWeight: '800',
  },
  liveText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
  },
  cardsScrollContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  card: {
    width: 144,
    padding: 14,
    borderRadius: 18,
    justifyContent: 'space-between',
    minHeight: 96,
    position: 'relative',
    overflow: 'hidden',
  },
  gradientCard: {
    shadowColor: '#0F5BA3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    position: 'relative',
    zIndex: 1,
  },
  pairText: {
    fontSize: 12.5,
    fontWeight: '700',
  },
  gradientPairText: {
    color: '#FFFFFF',
  },
  whitePairText: {
    color: '#0F172A',
  },
  trendBadge: {
    fontSize: 11.5,
    fontWeight: '700',
  },
  positiveTrend: {
    color: '#4ADE80',
  },
  negativeTrend: {
    color: '#EF4444',
  },
  rateAmount: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
    letterSpacing: -0.3,
    position: 'relative',
    zIndex: 1,
  },
  gradientRateAmount: {
    color: '#FFFFFF',
  },
  whiteRateAmount: {
    color: '#0F172A',
  },
  rateSubtext: {
    fontSize: 11,
    fontWeight: '500',
    position: 'relative',
    zIndex: 1,
  },
  gradientRateSubtext: {
    color: '#BFDBFE',
  },
  whiteRateSubtext: {
    color: '#64748B',
  },
});
