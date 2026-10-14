import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { NewsCategory, NewsCategoryId } from '../types';

type NewsFilterChipsProps = {
  categories: NewsCategory[];
  activeCategoryId: NewsCategoryId;
  onSelectCategory: (id: NewsCategoryId) => void;
};

export function NewsFilterChips({
  categories,
  activeCategoryId,
  onSelectCategory,
}: NewsFilterChipsProps) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          const isAll = category.id === 'all';

          return (
            <Pressable
              key={category.id}
              onPress={() => onSelectCategory(category.id)}
              style={({ pressed }) => [
                styles.chip,
                isActive ? styles.activeChip : styles.inactiveChip,
                pressed && styles.chipPressed,
              ]}>
              {!isAll && (
                <View style={styles.stripeIndicator}>
                  <View
                    style={[
                      styles.stripeBar,
                      isActive ? styles.stripeBarActive : styles.stripeBarInactive,
                    ]}
                  />
                  <View
                    style={[
                      styles.stripeBar,
                      isActive ? styles.stripeBarActive : styles.stripeBarInactive,
                    ]}
                  />
                </View>
              )}
              <Text
                style={[
                  styles.chipLabel,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                ]}>
                {category.label}
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
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 999,
  },
  activeChip: {
    backgroundColor: '#0050D6',
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
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
  stripeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginRight: 2,
  },
  stripeBar: {
    width: 2.5,
    height: 10,
    borderRadius: 1,
  },
  stripeBarActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  stripeBarInactive: {
    backgroundColor: '#CBD5E1',
  },
  chipLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#FFFFFF',
  },
  inactiveLabel: {
    color: '#0F172A',
  },
});
