import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { ChatFilterType } from '../types';

type ChatFilterChipsProps = {
  activeFilter: ChatFilterType;
  onFilterChange: (filter: ChatFilterType) => void;
};

export function ChatFilterChips({
  activeFilter,
  onFilterChange,
}: ChatFilterChipsProps) {
  return (
    <View style={styles.container}>
      {/* 1. Semua */}
      <Pressable
        onPress={() => onFilterChange('all')}
        style={[
          styles.chip,
          activeFilter === 'all' ? styles.activeChip : styles.inactiveChip,
        ]}>
        <Text
          style={[
            styles.chipText,
            activeFilter === 'all' ? styles.activeChipText : styles.inactiveChipText,
          ]}>
          Semua
        </Text>
      </Pressable>

      {/* 2. Belum Dibaca */}
      <Pressable
        onPress={() => onFilterChange('unread')}
        style={[
          styles.chip,
          activeFilter === 'unread' ? styles.activeChip : styles.inactiveChip,
        ]}>
        <View style={styles.blueDot} />
        <Text
          style={[
            styles.chipText,
            activeFilter === 'unread' ? styles.activeChipText : styles.inactiveChipText,
          ]}>
          Belum Dibaca
        </Text>
      </Pressable>

      {/* 3. Favorit */}
      <Pressable
        onPress={() => onFilterChange('favorite')}
        style={[
          styles.chip,
          activeFilter === 'favorite' ? styles.activeChip : styles.inactiveChip,
        ]}>
        <Text style={styles.starIcon}>☆</Text>
        <Text
          style={[
            styles.chipText,
            activeFilter === 'favorite' ? styles.activeChipText : styles.inactiveChipText,
          ]}>
          Favorit
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 6,
  },
  activeChip: {
    backgroundColor: '#0F172A',
  },
  inactiveChip: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeChipText: {
    color: '#FFFFFF',
  },
  inactiveChipText: {
    color: '#0F172A',
  },
  blueDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2563EB',
  },
  starIcon: {
    fontSize: 13,
    color: '#EF4444',
    fontWeight: '700',
  },
});
