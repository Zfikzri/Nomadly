import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { PreClearanceNewsItem } from '../types';

type NewsPhotoCardProps = {
  item: PreClearanceNewsItem;
  onPress?: () => void;
};

export function NewsPhotoCard({ item, onPress }: NewsPhotoCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}>
      {/* Top Photo Banner */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          contentFit="cover"
          transition={300}
        />
        <View style={styles.darkGradientOverlay} />

        {/* Top Badges over Photo */}
        <View style={styles.imageTopRow}>
          <View style={styles.regionPill}>
            <View style={styles.stripeIndicator}>
              <View style={styles.stripeBar} />
              <View style={styles.stripeBar} />
            </View>
            <Text style={styles.regionPillText}>{item.regionTag}</Text>
          </View>

          <View style={styles.translatePill}>
            <Text style={styles.translatePillText}>{item.badgeText}</Text>
          </View>
        </View>

        {/* Bottom Credit over Photo */}
        <View style={styles.imageBottomRow}>
          <SymbolView
            name={{ ios: 'character.book.closed.fill', android: 'translate', web: 'translate' }}
            size={12}
            tintColor="#FFFFFF"
          />
          <Text style={styles.creditText}>{item.translationCredit}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <View style={styles.leftMeta}>
            <View style={styles.categoryPill}>
              <Text style={styles.categoryText}>{item.categoryTag}</Text>
            </View>
            <Text style={styles.timeText}>{item.timeAgo}</Text>
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
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 14,
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
  imageContainer: {
    height: 155,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0F172A',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  darkGradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.28)',
  },
  imageTopRow: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  regionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
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
    backgroundColor: '#0F172A',
    borderRadius: 1,
  },
  regionPillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
  },
  translatePill: {
    backgroundColor: '#7C3AED',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  translatePillText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  imageBottomRow: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    paddingHorizontal: 9,
    paddingVertical: 3.5,
    borderRadius: 8,
  },
  creditText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 4,
    paddingTop: 12,
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
    marginBottom: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 2,
  },
  leftMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryPill: {
    backgroundColor: '#E0F2FE',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0284C7',
  },
  timeText: {
    fontSize: 11.5,
    color: '#94A3B8',
    fontWeight: '500',
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
