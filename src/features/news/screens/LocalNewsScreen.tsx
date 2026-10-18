import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
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
import { getLocalizedNewsCatalog } from '../services/mockData';
import type { NewsCategoryId } from '../types';

export function LocalNewsScreen() {
  const router = useRouter();
  const { isZh } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<NewsCategoryId>('all');

  const {
    categories,
    fxAlertNews,
    preClearanceNews,
    etiasNews,
    customsCashNews,
    touristFeeNews,
  } = getLocalizedNewsCatalog(isZh);

  // ponytail: client-side filter mockup for news & regulations. Ceiling: static in-memory catalog. Upgrade path: connect to live geopolitical and foreign exchange API.
  const q = searchQuery.toLowerCase().trim();

  const showFxAlert = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'japan') return false;
    if (!q) return true;
    return (
      fxAlertNews.title.toLowerCase().includes(q) ||
      fxAlertNews.summary.toLowerCase().includes(q) ||
      fxAlertNews.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q, fxAlertNews]);

  const showPreClearance = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'japan') return false;
    if (!q) return true;
    return (
      preClearanceNews.title.toLowerCase().includes(q) ||
      preClearanceNews.summary.toLowerCase().includes(q) ||
      preClearanceNews.regionTag.toLowerCase().includes(q) ||
      preClearanceNews.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q, preClearanceNews]);

  const showEtias = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'europe') return false;
    if (!q) return true;
    return (
      etiasNews.title.toLowerCase().includes(q) ||
      etiasNews.summary.toLowerCase().includes(q) ||
      etiasNews.regionTag.toLowerCase().includes(q) ||
      etiasNews.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q, etiasNews]);

  const showCustomsCash = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'singapore') return false;
    if (!q) return true;
    return (
      customsCashNews.title.toLowerCase().includes(q) ||
      customsCashNews.summary.toLowerCase().includes(q) ||
      customsCashNews.regionTag.toLowerCase().includes(q) ||
      customsCashNews.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q, customsCashNews]);

  const showTouristFee = useMemo(() => {
    if (activeCategory !== 'all' && activeCategory !== 'thailand') return false;
    if (!q) return true;
    return (
      touristFeeNews.title.toLowerCase().includes(q) ||
      touristFeeNews.summary.toLowerCase().includes(q) ||
      touristFeeNews.regionTag.toLowerCase().includes(q) ||
      touristFeeNews.categoryTag.toLowerCase().includes(q)
    );
  }, [activeCategory, q, touristFeeNews]);

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
            {isZh
              ? '精选全球签证政策、实时汇率、旅游规费与跨境支付法规指南'
              : 'Curated updates on visa policies, exchange rates, tourist fees & global financial regulations'}
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
          categories={categories}
          activeCategoryId={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 5. News Cards */}
        {showFxAlert && (
          <NewsFxCard
            item={fxAlertNews}
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
            item={preClearanceNews}
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
            item={etiasNews}
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
            item={customsCashNews}
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
            item={touristFeeNews}
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
            <Text style={styles.emptyTitle}>
              {isZh ? '未找到相关法规或新闻' : 'No regulations or news found'}
            </Text>
            <Text style={styles.emptySubtitle}>
              {isZh
                ? '请尝试更换搜索关键词或选择“全部”分类。'
                : 'Try searching with different keywords or switch to the "All" category.'}
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
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
});
