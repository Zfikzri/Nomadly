import { StyleSheet, Text, View } from 'react-native';

import type { DailyFoodEstimate } from '../types';

type DailyFoodCardProps = {
  data: DailyFoodEstimate;
};

export function DailyFoodCard({ data }: DailyFoodCardProps) {
  return (
    <View style={styles.card}>
      {/* Title */}
      <View style={styles.titleRow}>
        <Text style={styles.emojiIcon}>🍜</Text>
        <Text style={styles.titleText}>{data.title}</Text>
      </View>

      {/* Description with highlights */}
      <Text style={styles.bodyText}>
        Sekitar <Text style={styles.boldYen}>{data.yenRange}</Text> (
        <Text style={styles.highlightRupiah}>{data.rupiahRange}</Text>) {data.description}
      </Text>

      {/* Pill Tags Row */}
      <View style={styles.pillsRow}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>{data.breakfastTag}</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>{data.lunchTag}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  emojiIcon: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  bodyText: {
    fontSize: 12.5,
    color: '#334155',
    lineHeight: 18,
    marginBottom: 10,
  },
  boldYen: {
    fontWeight: '700',
    color: '#0F172A',
  },
  highlightRupiah: {
    fontWeight: '700',
    color: '#0284C7',
  },
  pillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  pill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  pillText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
});
