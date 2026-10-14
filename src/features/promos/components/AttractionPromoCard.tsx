import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { AttractionPromo } from '../types';

type AttractionPromoCardProps = {
  item: AttractionPromo;
  onPress?: () => void;
};

export function AttractionPromoCard({ item, onPress }: AttractionPromoCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      {/* 1. Left Thumbnail or Icon */}
      {item.iconType === 'esim' ? (
        <View style={styles.esimIconBox}>
          <SymbolView
            name={{ ios: 'simcard.fill', android: 'sim_card', web: 'sim_card' }}
            size={22}
            tintColor="#0050D6"
          />
        </View>
      ) : (
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.thumbnail}
          contentFit="cover"
          transition={200}
        />
      )}

      {/* 2. Middle Content Info */}
      <View style={styles.midCol}>
        <View style={styles.badgesRow}>
          <View style={[styles.badgePill, { backgroundColor: item.badge.bgColor }]}>
            <Text style={[styles.badgeText, { color: item.badge.textColor }]}>
              {item.badge.text}
            </Text>
          </View>
          {item.secondaryBadge && (
            <Text
              style={[
                styles.secondaryBadgeText,
                { color: item.secondaryBadge.textColor },
              ]}>
              {item.secondaryBadge.text}
            </Text>
          )}
        </View>

        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.subtitleText} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>

      {/* 3. Right Price & Action Button */}
      <View style={styles.rightCol}>
        <Text style={styles.priceText}>{item.price}</Text>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>{item.buttonLabel}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.99 }],
  },
  esimIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EEF4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
  },
  midCol: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 3,
  },
  badgePill: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
  },
  badgeText: {
    fontSize: 9.5,
    fontWeight: '800',
  },
  secondaryBadgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  titleText: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 1,
  },
  subtitleText: {
    fontSize: 11,
    color: '#64748B',
  },
  rightCol: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 13.5,
    fontWeight: '800',
    color: '#0050D6',
    marginBottom: 4,
  },
  actionButton: {
    backgroundColor: '#0050D6',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4.5,
  },
  actionButtonText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
