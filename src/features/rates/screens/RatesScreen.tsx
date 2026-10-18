import { useMemo, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';
import {
  RatesConverterCard,
  RatesHeader,
  RatesTabSegment,
  RatesWatchlistSection,
  RemittanceBankCard,
  RemittanceFilterChips,
  RemittanceSearchBar,
  RemittanceSecurityBanner,
} from '../components';
import {
  filterRemittanceBanks,
  MOCK_WATCHLIST,
} from '../services/mockData';
import type {
  RateTabType,
  RemittanceRegionFilter,
  WatchlistCardItem,
} from '../types';

// Sky gradient background slices (#DDF0FF ke #BAE2FD)
const SKY_SLICE_COUNT = 24;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(221 + (186 - 221) * t);
  const g = Math.round(240 + (226 - 240) * t);
  const b = Math.round(255 + (253 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function RatesScreen() {
  const { isZh } = useLanguage();
  const [activeTab, setActiveTab] = useState<RateTabType>('exchange');
  const [watchlist, setWatchlist] = useState<WatchlistCardItem[]>(MOCK_WATCHLIST);

  // Remittance state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<RemittanceRegionFilter>('all');

  const filteredBanks = useMemo(() => {
    return filterRemittanceBanks(searchQuery, selectedRegion);
  }, [searchQuery, selectedRegion]);

  const handleAddWatchlist = () => {
    // Add additional mock currency pair if not exists
    const audExists = watchlist.some((item) => item.id === 'aud-idr');
    if (!audExists) {
      setWatchlist((prev) => [
        ...prev,
        {
          id: 'aud-idr',
          pair: 'AUD / IDR',
          rateFormatted: 'Rp 10.420',
          rateSubtext: isZh ? '1 澳大利亚元' : '1 Australian Dollar',
          changePercent: '-0.28%',
          isPositive: false,
        },
      ]);
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* 1. Header (Title & Subtitle) - shared across tabs */}
          <RatesHeader />

          {/* 2. Top Tab Segment (Exchange Kurs Rate vs Remittance) - shared across tabs */}
          <RatesTabSegment
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* 3. Conditional Content based on activeTab */}
          {activeTab === 'exchange' ? (
            <>
              {/* Watchlist Section (+ Add Watchlist, Live status, Horizontal Cards) */}
              <RatesWatchlistSection
                items={watchlist}
                onAddPress={handleAddWatchlist}
              />

              {/* Converter Card (FX Converter, Date, Inputs, Swap, Rate, Convert CTA) */}
              <RatesConverterCard />
            </>
          ) : (
            <>
              {/* Remittance Security Banner */}
              <RemittanceSecurityBanner />

              {/* Remittance Search Bar */}
              <RemittanceSearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                onClear={() => setSearchQuery('')}
              />

              {/* Remittance Region Filter Chips */}
              <RemittanceFilterChips
                selectedRegion={selectedRegion}
                onSelectRegion={setSelectedRegion}
              />

              {/* Remittance Bank Partner Cards */}
              {filteredBanks.length > 0 ? (
                filteredBanks.map((bank) => (
                  <RemittanceBankCard key={bank.id} item={bank} />
                ))
              ) : (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyIcon}>🔍</Text>
                  <Text style={styles.emptyTitle}>
                    {isZh ? '未找到合作机构' : 'No Partners Found'}
                  </Text>
                  <Text style={styles.emptySubtitle}>
                    {isZh
                      ? `没有找到与 "${searchQuery}" 匹配的合作银行。`
                      : `No partner banks match "${searchQuery}".`}
                  </Text>
                </View>
              )}
            </>
          )}
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
    flexDirection: 'column',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 110, // Bottom padding to avoid FloatingTabBar overlap
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
  emptyIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
  },
});

