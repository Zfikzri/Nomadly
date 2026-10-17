import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { EtiasNewsItem } from '../types';

type NewsEtiasCardProps = {
  item: EtiasNewsItem;
  onPress?: () => void;
  onGuidePress?: () => void;
};

export function NewsEtiasCard({ item, onPress, onGuidePress }: NewsEtiasCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}>
      {/* Top Header Row */}
      <View style={styles.topRow}>
        <View style={styles.tagsGroup}>
          <View style={styles.tagPill}>
            <View style={styles.stripeIndicator}>
              <View style={styles.stripeBar} />
              <View style={styles.stripeBar} />
            </View>
            <Text style={styles.tagText}>{item.regionTag}</Text>
          </View>

          <View style={styles.indigoPill}>
            <Text style={styles.indigoText}>{item.categoryTag}</Text>
          </View>
        </View>

        <Text style={styles.timeText}>{item.timeAgo}</Text>
      </View>

      {/* Headline */}
      <Text style={styles.title}>{item.title}</Text>

      {/* Summary */}
      <Text style={styles.summary}>{item.summary}</Text>

      {/* Bottom Link & Read Time */}
      <View style={styles.bottomRow}>
        <Pressable
          hitSlop={8}
          onPress={onGuidePress}
          style={({ pressed }) => [styles.linkButton, pressed && styles.linkPressed]}>
          <Text style={styles.linkText}>{item.guideLinkText}</Text>
        </Pressable>

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
  indigoPill: {
    backgroundColor: '#EEF2FF',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  indigoText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4F46E5',
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
    marginBottom: 8,
    letterSpacing: -0.2,
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
    paddingTop: 2,
  },
  linkButton: {
    paddingVertical: 2,
  },
  linkPressed: {
    opacity: 0.6,
  },
  linkText: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#0050D6',
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
