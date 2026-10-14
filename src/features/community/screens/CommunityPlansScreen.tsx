import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  CommunityFilterChips,
  CommunityGroupCard,
  CommunityHeader,
  CommunitySearchBar,
} from '../components';
import {
  MOCK_CATEGORY_FILTERS,
  MOCK_COMMUNITY_GROUPS,
} from '../services/mockData';
import type { FilterCategoryId } from '../types';

export function CommunityPlansScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterCategoryId>('all');

  // ponytail: client-side filter mockup. Ceiling: 5-50 items in memory. Upgrade path: replace with server-side query + infinite query when backend ready.
  const filteredGroups = useMemo(() => {
    return MOCK_COMMUNITY_GROUPS.filter((group) => {
      // 1. Filter by category
      if (activeCategory !== 'all' && group.category !== activeCategory) {
        return false;
      }

      // 2. Filter by search query
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = group.title.toLowerCase().includes(q);
      const matchMsg = group.lastMessage.text.toLowerCase().includes(q);
      const matchSender = group.lastMessage.sender.toLowerCase().includes(q);
      const matchRegion = group.regionTag.label.toLowerCase().includes(q);
      const matchLocations = group.locations?.some((loc) =>
        loc.toLowerCase().includes(q)
      );

      return matchTitle || matchMsg || matchSender || matchRegion || matchLocations;
    });
  }, [searchQuery, activeCategory]);

  return (
    <View style={styles.root}>
      {/* 1. Header Bar: White with <- Home */}
      <CommunityHeader />

      {/* 2. Search Bar */}
      <CommunitySearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />

      {/* 3. Category Filter Chips */}
      <CommunityFilterChips
        categories={MOCK_CATEGORY_FILTERS}
        activeCategoryId={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. Groups Vertical List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <CommunityGroupCard
              key={group.id}
              group={group}
              onPress={() => console.log('Tapped group:', group.id)}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Tidak ada grup ditemukan</Text>
            <Text style={styles.emptySubtitle}>
              Coba gunakan kata kunci pencarian lain atau pilih kategori Semua Grup.
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
    paddingTop: 4,
    paddingBottom: 40,
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
