import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { TransitPass } from '../types';

type TransitPassCardProps = {
  item: TransitPass;
  onPress?: () => void;
};

export function TransitPassCard({ item, onPress }: TransitPassCardProps) {
  const { isZh } = useLanguage();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      {/* Top Details Row */}
      <View style={styles.topRow}>
        {/* Thumbnail with overlay discount badge */}
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.thumbnail}
            contentFit="cover"
            transition={200}
          />
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discountBadge}</Text>
          </View>
        </View>

        {/* Info Column */}
        <View style={styles.infoCol}>
          {/* Feature Badge */}
          <View style={styles.featureRow}>
            <SymbolView
              name={
                item.featureBadge.icon === 'bolt'
                  ? { ios: 'bolt.fill', android: 'bolt', web: 'bolt' }
                  : { ios: 'globe.americas.fill', android: 'public', web: 'public' }
              }
              size={12}
              tintColor={item.featureBadge.color}
            />
            <Text style={[styles.featureText, { color: item.featureBadge.color }]}>
              {item.featureBadge.text}
            </Text>
          </View>

          {/* Title & Subtitle */}
          <Text style={styles.passTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.passSubtitle} numberOfLines={1}>
            {item.subtitle}
          </Text>

          {/* Pricing Row */}
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style={styles.originalPriceText}>{item.originalPrice}</Text>
          </View>
        </View>
      </View>

      {/* Bottom Action Row */}
      <View style={styles.bottomRow}>
        <View style={styles.infoLeft}>
          <SymbolView
            name={
              item.infoBadge.icon === 'calendar'
                ? { ios: 'calendar', android: 'calendar_today', web: 'calendar_today' }
                : { ios: 'qrcode', android: 'qr_code_2', web: 'qr_code_2' }
            }
            size={13}
            tintColor="#64748B"
          />
          <Text style={styles.infoText}>{item.infoBadge.text}</Text>
        </View>

        <View style={styles.buyButton}>
          <Text style={styles.buyButtonText}>
            {isZh ? '购买通票 >' : 'Buy Pass >'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.99 }],
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  thumbnailContainer: {
    width: 82,
    height: 82,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#F1F5F9',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: '#EF4444',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    fontSize: 9.5,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  infoCol: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  featureText: {
    fontSize: 11,
    fontWeight: '700',
  },
  passTitle: {
    fontSize: 14.5,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 3,
  },
  passSubtitle: {
    fontSize: 11.5,
    color: '#64748B',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0050D6',
  },
  originalPriceText: {
    fontSize: 11,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoText: {
    fontSize: 11,
    color: '#64748B',
  },
  buyButton: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  buyButtonText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#0050D6',
  },
});
