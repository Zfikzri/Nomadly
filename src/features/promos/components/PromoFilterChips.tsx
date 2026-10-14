import { SymbolView } from 'expo-symbols';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { PromoCategory, PromoCategoryId } from '../types';

type PromoFilterChipsProps = {
  categories: PromoCategory[];
  activeCategoryId: PromoCategoryId;
  onSelectCategory: (id: PromoCategoryId) => void;
};

export function PromoFilterChips({
  categories,
  activeCategoryId,
  onSelectCategory,
}: PromoFilterChipsProps) {
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
                size={15}
                tintColor={isActive ? '#FFFFFF' : category.iconColor ?? '#475569'}
                weight={isActive ? 'bold' : 'medium'}
              />
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
