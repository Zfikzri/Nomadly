import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  NewsCustomsCard,
  NewsEtiasCard,
  NewsFilterChips,
  NewsFxCard,
  NewsHeader,
  NewsPhotoCard,
  NewsSearchBar,
  NewsTouristTaxCard,
} from '../components';
import {
  MOCK_CUSTOMS_CASH_NEWS,
  MOCK_ETIAS_NEWS,
  MOCK_FX_ALERT_NEWS,
  MOCK_NEWS_CATEGORIES,
  MOCK_PRE_CLEARANCE_NEWS,
  MOCK_TOURIST_FEE_NEWS,
} from '../services/mockData';
import type { NewsCategoryId } from '../types';

export function LocalNewsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<NewsCategoryId>('all');

  // ponytail: client-side filter mockup for news & regulations. Ceiling: static in-memory catalog. Upgrade path: connect to live geopolitical and foreign exchange API.
  const q = searchQuery.toLowerCase().trim();

  const showFxAlert = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'japan') return false;
    if (!q) return true;
    return (
      MOCK_FX_ALERT_NEWS.title.toLowerCase().includes(q) ||
      MOCK_FX_ALERT_NEWS.summary.toLowerCase().includes(q) ||
      MOCK_FX_ALERT_NEWS.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const showPreClearance = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'japan') return false;
    if (!q) return true;
    return (
      MOCK_PRE_CLEARANCE_NEWS.title.toLowerCase().includes(q) ||
      MOCK_PRE_CLEARANCE_NEWS.summary.toLowerCase().includes(q) ||
      MOCK_PRE_CLEARANCE_NEWS.regionTag.toLowerCase().includes(q) ||
      MOCK_PRE_CLEARANCE_NEWS.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const showEtias = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'europe') return false;
    if (!q) return true;
    return (
      MOCK_ETIAS_NEWS.title.toLowerCase().includes(q) ||
      MOCK_ETIAS_NEWS.summary.toLowerCase().includes(q) ||
      MOCK_ETIAS_NEWS.regionTag.toLowerCase().includes(q) ||
      MOCK_ETIAS_NEWS.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const showCustomsCash = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'singapore') return false;
    if (!q) return true;
    return (
      MOCK_CUSTOMS_CASH_NEWS.title.toLowerCase().includes(q) ||
      MOCK_CUSTOMS_CASH_NEWS.summary.toLowerCase().includes(q) ||
      MOCK_CUSTOMS_CASH_NEWS.regionTag.toLowerCase().includes(q) ||
      MOCK_CUSTOMS_CASH_NEWS.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const showTouristFee = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'thailand') return false;
    if (!q) return true;
    return (
      MOCK_TOURIST_FEE_NEWS.title.toLowerCase().includes(q) ||
      MOCK_TOURIST_FEE_NEWS.summary.toLowerCase().includes(q) ||
      MOCK_TOURIST_FEE_NEWS.regionTag.toLowerCase().includes(q) ||
      MOCK_TOURIST_FEE_NEWS.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q]);

  const hasAnyResults =
    showFxAlert ||
    showPreClearance ||
    showEtias ||
    showCustomsCash ||
    showTouristFee;

  return (
    <View style={styles.root}>
      {/* 1. Header Navigation Bar */}
      <NewsHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        {/* 2. Subtitle Description */}
        <View style={styles.subtitleWrapper}>
          <Text style={styles.subtitleText}>
            Info terkurasi seputar kebijakan visa, kurs, pajak turis &amp; aturan
            keuangan global
          </Text>
        </View>

        {/* 3. Search Bar */}
        <NewsSearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFilterPress={() => console.log('Filter button pressed')}
        />

        {/* 4. Horizontal Category Filter Chips */}
        <NewsFilterChips
          categories={MOCK_NEWS_CATEGORIES}
          activeCategoryId={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 5. News Cards */}
        {showFxAlert && (
          <NewsFxCard
            item={MOCK_FX_ALERT_NEWS}
            onPress={() =>
              router.push({
                pathname: '/news/[id]',
                params: { id: 'news-1' },
              } as any)
            }
            onLockRate={() =>
              router.push({
                pathname: '/news/[id]',
                params: { id: 'news-1' },
              } as any)
            }
          />
        )}

        {showPreClearance && (
          <NewsPhotoCard
            item={MOCK_PRE_CLEARANCE_NEWS}
            onPress={() =>
              router.push({
                pathname: '/news/[id]',
                params: { id: 'news-1' },
              } as any)
            }
          />
        )}

        {showEtias && (
          <NewsEtiasCard
            item={MOCK_ETIAS_NEWS}
            onPress={() =>
              router.push({
                pathname: '/news/[id]',
                params: { id: 'news-2' },
              } as any)
            }
            onGuidePress={() =>
              router.push({
                pathname: '/news/[id]',
                params: { id: 'news-2' },
              } as any)
            }
          />
        )}

        {showCustomsCash && (
          <NewsCustomsCard
            item={MOCK_CUSTOMS_CASH_NEWS}
            onPress={() =>
              router.push({
                pathname: '/news/[id]',
                params: { id: 'news-4' },
              } as any)
            }
          />
        )}

        {showTouristFee && (
          <NewsTouristTaxCard
            item={MOCK_TOURIST_FEE_NEWS}
            onPress={() =>
              router.push({
                pathname: '/news/[id]',
                params: { id: 'news-3' },
              } as any)
            }
          />
        )}

        {/* Empty State */}
        {!hasAnyResults && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Tidak ada regulasi atau berita ditemukan</Text>
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
  subtitleWrapper: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 12,
  },
  subtitleText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
    fontWeight: '400',
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
