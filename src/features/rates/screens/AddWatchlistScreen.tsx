import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradientBackground } from '../components/LinearGradientBackground';

// Signature sky gradient slices matching RatesScreen
const SKY_SLICE_COUNT = 24;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(221 + (186 - 221) * t);
  const g = Math.round(240 + (226 - 240) * t);
  const b = Math.round(255 + (253 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

type WatchlistOption = {
  id: string;
  pair: string;
  flags: string;
  rateFormatted: string;
  rateSubtext: string;
  changePercent: string;
  isPositive: boolean; // true = Blue (Rate Increase), false = White (Rate Decrease)
};

const WATCHLIST_OPTIONS: WatchlistOption[] = [
  {
    id: 'jpy-idr',
    pair: 'JPY / IDR',
    flags: '🇯🇵 ➔ 🇮🇩',
    rateFormatted: '1 JPY = Rp 105.42',
    rateSubtext: 'Live FX • Updated today',
    changePercent: '+0.84%',
    isPositive: true, // Blue Card (Up)
  },
  {
    id: 'idr-cny',
    pair: 'IDR / CNY (RMB)',
    flags: '🇮🇩 ➔ 🇨🇳',
    rateFormatted: '1 IDR = ¥ 0.00045',
    rateSubtext: '1 CNY = Rp 2,215 • Updated today',
    changePercent: '-0.35%',
    isPositive: false, // White Card (Down)
  },
  {
    id: 'idr-usd',
    pair: 'IDR / USD',
    flags: '🇮🇩 ➔ 🇺🇸',
    rateFormatted: '1 USD = Rp 15,820',
    rateSubtext: '1 IDR = $ 0.000063 • Updated today',
    changePercent: '-0.18%',
    isPositive: false, // White Card (Down)
  },
];

export function AddWatchlistScreen() {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({
    'jpy-idr': true,
  });

  const handleToggleWatchlist = (item: WatchlistOption) => {
    const isCurrentlyAdded = !!addedIds[item.id];
    setAddedIds((prev) => ({
      ...prev,
      [item.id]: !isCurrentlyAdded,
    }));

    if (!isCurrentlyAdded) {
      Alert.alert(
        'Added to Watchlist',
        `${item.pair} (${item.rateFormatted}) has been added to your watchlist.`
      );
    }
  };

  return (
    <View style={styles.root}>
      {/* Background Gradient */}
      <View
        style={[
          styles.gradientContainer,
          Platform.OS === 'web'
            ? ({
                backgroundImage: 'linear-gradient(180deg, #DDF0FF 0%, #BAE2FD 100%)',
              } as any)
            : null,
        ]}
        pointerEvents="none">
        {Platform.OS !== 'web' &&
          SKY_BACKGROUND_SLICES.map((color, idx) => (
            <View key={idx} style={{ flex: 1, backgroundColor: color }} />
          ))}
      </View>

      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* 1. Header Bar with Back Button */}
        <View style={styles.headerBar}>
          <Pressable
            hitSlop={12}
            onPress={() => router.back()}
            style={({ pressed }) => [styles.backBtn, pressed && styles.btnPressed]}>
            <SymbolView
              name={{ ios: 'chevron.left', android: 'chevron_left', web: 'chevron_left' }}
              size={22}
              tintColor="#0F172A"
              weight="semibold"
            />
          </Pressable>
          <View style={styles.headerTitleCol}>
            <Text style={styles.headerTitle}>Add Watchlist</Text>
            <Text style={styles.headerSubtitle}>
              Select currency pairs to track in real-time
            </Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* Legend Banner: Blue = Up, White = Down */}
          <View style={styles.legendCard}>
            <Text style={styles.legendTitle}>💡 Rate Movement Indicator</Text>
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <View style={[styles.legendPill, styles.legendPillBlue]} />
                <Text style={styles.legendText}>Blue Card = Rate Increase</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendPill, styles.legendPillWhite]} />
                <Text style={styles.legendText}>White Card = Rate Decrease</Text>
              </View>
            </View>
          </View>

          {/* 3 List Button Cards */}
          <View style={styles.cardsList}>
            {WATCHLIST_OPTIONS.map((item) => {
              const isAdded = !!addedIds[item.id];
              const isBlue = item.isPositive;

              return (
                <Pressable
                  key={item.id}
                  onPress={() => handleToggleWatchlist(item)}
                  style={({ pressed }) => [
                    styles.card,
                    isBlue ? styles.blueCard : styles.whiteCard,
                    pressed && styles.cardPressed,
                  ]}>
                  {/* Linear Gradient for Blue (Up) Card */}
                  {isBlue && <LinearGradientBackground />}

                  {/* Header: Pair + Flag & Trend Badge */}
                  <View style={styles.cardHeaderRow}>
                    <View style={styles.pairCol}>
                      <Text
                        style={[
                          styles.pairText,
                          isBlue ? styles.textWhite : styles.textDark,
                        ]}>
                        {item.pair}
                      </Text>
                      <Text style={styles.flagText}>{item.flags}</Text>
                    </View>

                    {/* Trend Badge */}
                    <View
                      style={[
                        styles.trendBadgePill,
                        isBlue ? styles.trendPillBlueCard : styles.trendPillWhiteCard,
                      ]}>
                      <SymbolView
                        name={
                          item.isPositive
                            ? { ios: 'arrow.up.right', android: 'north_east', web: 'north_east' }
                            : { ios: 'arrow.down.right', android: 'south_east', web: 'south_east' }
                        }
                        size={12}
                        tintColor={item.isPositive ? '#16A34A' : '#EF4444'}
                      />
                      <Text
                        style={[
                          styles.trendBadgeText,
                          item.isPositive ? styles.textGreen : styles.textRed,
                        ]}>
                        {item.changePercent} ({item.isPositive ? 'Up' : 'Down'})
                      </Text>
                    </View>
                  </View>

                  {/* Big Rate Value */}
                  <Text
                    style={[
                      styles.rateAmount,
                      isBlue ? styles.textWhite : styles.textDark,
                    ]}>
                    {item.rateFormatted}
                  </Text>

                  {/* Footer Row: Subtext & Add Button State */}
                  <View style={styles.cardFooterRow}>
                    <Text
                      style={[
                        styles.rateSubtext,
                        isBlue ? styles.textLightBlue : styles.textMuted,
                      ]}>
                      {item.rateSubtext}
                    </Text>

                    {/* Action button inside card */}
                    <View
                      style={[
                        styles.actionButton,
                        isBlue
                          ? isAdded
                            ? styles.actionBtnBlueAdded
                            : styles.actionBtnBlueDefault
                          : isAdded
                            ? styles.actionBtnWhiteAdded
                            : styles.actionBtnWhiteDefault,
                      ]}>
                      <SymbolView
                        name={
                          isAdded
                            ? { ios: 'checkmark', android: 'check', web: 'check' }
                            : { ios: 'plus', android: 'add', web: 'add' }
                        }
                        size={13}
                        tintColor={
                          isBlue
                            ? isAdded
                              ? '#0050D6'
                              : '#FFFFFF'
                            : isAdded
                              ? '#FFFFFF'
                              : '#0050D6'
                        }
                        weight="bold"
                      />
                      <Text
                        style={[
                          styles.actionBtnText,
                          isBlue
                            ? isAdded
                              ? styles.actionTextDarkBlue
                              : styles.actionTextWhite
                            : isAdded
                              ? styles.actionTextWhite
                              : styles.actionTextDarkBlue,
                        ]}>
                        {isAdded ? 'Added' : '+ Watchlist'}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#DDF0FF',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  safeArea: {
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    gap: 14,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  btnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  headerTitleCol: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500',
    marginTop: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  legendCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  legendTitle: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendPill: {
    width: 14,
    height: 14,
    borderRadius: 4,
  },
  legendPillBlue: {
    backgroundColor: '#0F5BA3',
  },
  legendPillWhite: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  legendText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },
  cardsList: {
    gap: 14,
  },
  card: {
    width: '100%',
    padding: 18,
    borderRadius: 20,
    minHeight: 126,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.99 }],
  },
  blueCard: {
    shadowColor: '#0F5BA3',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 5,
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
    position: 'relative',
    zIndex: 1,
  },
  pairCol: {
    gap: 3,
  },
  pairText: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  flagText: {
    fontSize: 12,
  },
  trendBadgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  trendPillBlueCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  trendPillWhiteCard: {
    backgroundColor: '#F1F5F9',
  },
  trendBadgeText: {
    fontSize: 11.5,
    fontWeight: '700',
  },
  rateAmount: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginVertical: 4,
    position: 'relative',
    zIndex: 1,
  },
  cardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    position: 'relative',
    zIndex: 1,
  },
  rateSubtext: {
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  actionBtnBlueDefault: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  actionBtnBlueAdded: {
    backgroundColor: '#FFFFFF',
  },
  actionBtnWhiteDefault: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  actionBtnWhiteAdded: {
    backgroundColor: '#0050D6',
  },
  actionBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },
  actionTextWhite: {
    color: '#FFFFFF',
  },
  actionTextDarkBlue: {
    color: '#0050D6',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textDark: {
    color: '#0F172A',
  },
  textLightBlue: {
    color: '#D8EEFF',
  },
  textMuted: {
    color: '#64748B',
  },
  textGreen: {
    color: '#16A34A',
  },
  textRed: {
    color: '#EF4444',
  },
});
