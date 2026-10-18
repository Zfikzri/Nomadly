import { SymbolView } from 'expo-symbols';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { CategoryFilter, FilterCategoryId } from '../types';

type CommunityFilterChipsProps = {
  categories: CategoryFilter[];
  activeCategoryId: FilterCategoryId;
  onSelectCategory: (id: FilterCategoryId) => void;
};

export function CommunityFilterChips({
  categories,
  activeCategoryId,
  onSelectCategory,
}: CommunityFilterChipsProps) {
  const { isZh } = useLanguage();

  const getCategoryLabel = (id: FilterCategoryId, defaultLabel: string) => {
    switch (id) {
      case 'all':
        return isZh ? '全部社群' : 'All Groups';
      case 'asia':
        return isZh ? '亚洲目的地' : 'Asia Destinations';
      case 'europe':
        return isZh ? '欧洲与申根' : 'Europe & Schengen';
      case 'workation':
        return isZh ? '游民旅居' : 'Nomad & Workation';
      default:
        return defaultLabel;
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <Pressable
              key={category.id}
              onPress={() => onSelectCategory(category.id)}
              style={({ pressed }) => [
                styles.chip,
                isActive ? styles.activeChip : styles.inactiveChip,
                pressed && styles.chipPressed,
              ]}>
              <SymbolView
                name={category.iconName}
                size={16}
                tintColor={isActive ? '#FFFFFF' : category.iconColor ?? '#475569'}
                weight={isActive ? 'bold' : 'medium'}
              />
              <Text
                style={[
                  styles.chipLabel,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                ]}>
                {getCategoryLabel(category.id, category.label)}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 10,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 999,
  },
  activeChip: {
    backgroundColor: '#0F172A',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  inactiveChip: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  chipPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  chipLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#FFFFFF',
  },
  inactiveLabel: {
    color: '#1E293B',
  },
});
