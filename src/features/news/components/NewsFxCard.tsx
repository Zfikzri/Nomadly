import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { FxAlertNewsItem } from '../types';

type NewsFxCardProps = {
  item: FxAlertNewsItem;
  onPress?: () => void;
  onLockRate?: () => void;
};

export function NewsFxCard({ item, onPress }: NewsFxCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}>
      {/* Top Header Row */}
      <View style={styles.topRow}>
        <View style={styles.alertBadge}>
          <View style={styles.redDot} />
          <SymbolView
            name={{ ios: 'arrow.left.arrow.right', android: 'swap_horiz', web: 'swap_horiz' }}
            size={12}
            tintColor="#E11D48"
          />
          <Text style={styles.alertText}>{item.badgeText}</Text>
        </View>

        <View style={styles.timeWrapper}>
          <SymbolView
            name={{ ios: 'clock', android: 'schedule', web: 'schedule' }}
            size={12}
            tintColor="#94A3B8"
          />
          <Text style={styles.timeText}>{item.timeAgo}</Text>
        </View>
      </View>

      {/* Headline */}
      <Text style={styles.title}>{item.title}</Text>
      {/* Summary */}
      <Text style={styles.summary}>{item.summary}</Text>

      {/* Bottom Tags & Read Time */}
      <View style={styles.bottomRow}>
        <View style={styles.tagsGroup}>
          <View style={styles.tagPill}>
            <View style={styles.stripeIndicator}>
              <View style={styles.stripeBar} />
              <View style={styles.stripeBar} />
            </View>
          </View>

          <View style={styles.tagPill}>
            <Text style={styles.tagText}>{item.categoryTag}</Text>
          </View>
        </View>

        <View style={styles.readTimeWrapper}>
          <SymbolView
            name={{ ios: 'book', android: 'menu_book', web: 'menu_book' }}
            size={13}
            tintColor="#94A3B8"
          />
          <Text style={styles.readTimeText}>{item.readTime}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    marginBottom: 14,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.96,
    transform: [{ scale: 0.995 }],
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  alertBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FFE4E6',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 3.5,
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E11D48',
  },
  alertText: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#E11D48',
    letterSpacing: 0.2,
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 11.5,
    color: '#94A3B8',
    fontWeight: '500',
  },
  title: {
    fontSize: 15.5,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 22,
    marginBottom: 12,
    letterSpacing: -0.2,
  },
  spotRateBox: {
    backgroundColor: '#F0F5FF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  rateCol: {
    flex: 1,
  },
  rateLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 2,
  },
  rateValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rateValue: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  rateChange: {
    fontSize: 12,
    fontWeight: '700',
    color: '#16A34A',
  },
  lockButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  lockButtonPressed: {
    opacity: 0.85,
  },
  lockButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  summary: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    fontWeight: '400',
    marginBottom: 14,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  tagsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F1F5F9',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  stripeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  stripeBar: {
    width: 2,
    height: 9,
    backgroundColor: '#94A3B8',
    borderRadius: 1,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
  readTimeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  readTimeText: {
    fontSize: 11.5,
    color: '#94A3B8',
    fontWeight: '500',
  },
});
