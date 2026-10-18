import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { useLanguage } from '@/i18n';
import { REMITTANCE_FILTER_CATEGORIES } from '../services/mockData';
import type { RemittanceRegionFilter } from '../types';

type RemittanceFilterChipsProps = {
  selectedRegion: RemittanceRegionFilter;
  onSelectRegion: (region: RemittanceRegionFilter) => void;
};

export function RemittanceFilterChips({
  selectedRegion,
  onSelectRegion,
}: RemittanceFilterChipsProps) {
  const { isZh } = useLanguage();

  const getLabel = (id: RemittanceRegionFilter, defaultLabel: string) => {
    switch (id) {
      case 'all':
        return isZh ? '全部' : 'All';
      case 'asia':
        return isZh ? '亚洲' : 'Asia';
      case 'eropa':
        return isZh ? '欧洲' : 'Europe';
      case 'amerika':
        return isZh ? '美洲' : 'Americas';
      case 'digital':
        return isZh ? '数字银行' : 'Digital';
      default:
        return defaultLabel;
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {REMITTANCE_FILTER_CATEGORIES.map((cat) => {
        const isSelected = selectedRegion === cat.id;

        return (
          <Pressable
            key={cat.id}
            onPress={() => onSelectRegion(cat.id)}
            style={({ pressed }) => [
              styles.chip,
              isSelected ? styles.activeChip : styles.inactiveChip,
              pressed && { opacity: 0.85, transform: [{ scale: 0.97 }] },
            ]}>
            <Text
              style={[
                styles.chipText,
                isSelected ? styles.activeChipText : styles.inactiveChipText,
              ]}>
              {getLabel(cat.id, cat.label)}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeChip: {
    backgroundColor: '#2563EB',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  inactiveChip: {
    backgroundColor: '#E2E8F0',
  },
  chipText: {
    fontSize: 13,
    letterSpacing: -0.1,
  },
  activeChipText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  inactiveChipText: {
    color: '#475569',
    fontWeight: '600',
  },
});
