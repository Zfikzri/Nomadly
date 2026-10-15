import { useState } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  RatesConverterCard,
  RatesHeader,
  RatesTabSegment,
  RatesWatchlistSection,
} from '../components';
import { MOCK_WATCHLIST } from '../services/mockData';
import type { RateTabType, WatchlistCardItem } from '../types';

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
  const [activeTab, setActiveTab] = useState<RateTabType>('exchange');
  const [watchlist, setWatchlist] = useState<WatchlistCardItem[]>(MOCK_WATCHLIST);

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
          rateSubtext: '1 Dolar Australia',
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
          {/* 1. Header (Title & Subtitle) */}
          <RatesHeader />

          {/* 2. Top Tab Segment (Exchange Kurs Rate vs Remittence) */}
          <RatesTabSegment
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* 3. Watchlist Section (+ Tambah Watchlist, Live status, Horizontal Cards) */}
          <RatesWatchlistSection
            items={watchlist}
            onAddPress={handleAddWatchlist}
          />

          {/* 4. Converter Card (Kurs Konverter, Date, Inputs, Swap, Rate, Konversi CTA) */}
          <RatesConverterCard />
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
});
