import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n';
import type { DiscountPromo } from '../types';

type DiscountPromosSectionProps = {
  promos: DiscountPromo[];
  onSeeAll?: () => void;
  onSelectPromo?: (promo: DiscountPromo) => void;
};

export function DiscountPromosSection({
  promos,
  onSeeAll,
  onSelectPromo,
}: DiscountPromosSectionProps) {
  const { strings } = useLanguage();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.titleLeft}>
          <SymbolView
            name={{ ios: 'tag.fill', android: 'local_offer', web: 'sell' }}
            size={18}
            tintColor="#0050D6"
          />
          <Text style={styles.sectionTitle}>{strings.home.fancyDiscount}</Text>
        </View>
        <Pressable hitSlop={8} onPress={onSeeAll}>
          <Text style={styles.seeAllText}>{strings.home.seeAll}</Text>
        </Pressable>
      </View>

      {/* Promos Stacked List */}
      <View style={styles.promosList} className="gap-6">
        {promos.map((promo) => (
          <Pressable
            key={promo.id}
            style={({ pressed }) => [styles.cardWrapper, pressed && styles.cardPressed]}
            className="h-[204px] rounded-3xl overflow-hidden relative bg-slate-900 border border-slate-200 shadow-md"
            onPress={() => onSelectPromo?.(promo)}>
            {/* Clean travel photo */}
            <Image
              source={{ uri: promo.imageUrl }}
              style={styles.cardImage}
              className="absolute inset-0 w-full h-full"
              contentFit="cover"
              priority="high"
              cachePolicy="memory-disk"
            />

            {/* Subtle dark overlay for text contrast (tanpa color gradient) */}
            <View style={styles.cardOverlay} pointerEvents="none" />

            {/* Content Container */}
            <View style={styles.cardContent} className="absolute inset-0 p-6 justify-between">
              {/* Badges Row */}
              <View style={styles.badgesRow} className="flex-row items-center justify-between">
                <View style={styles.solidBadge} className="bg-white rounded-full px-3 py-1 shadow-sm">
                  <Text style={styles.solidBadgeText} className="text-[10px] font-extrabold text-[#0050D6] tracking-wide">
                    {promo.badge.text}
                  </Text>
                </View>

                {promo.secondaryBadge && (
                  <View style={styles.translucentBadge} className="bg-[#02265A]/45 rounded-full px-2.5 py-1 flex-row items-center gap-1 border border-white/20">
                    <SymbolView
                      name={
                        promo.secondaryBadge.icon === 'clock'
                          ? { ios: 'clock.fill', android: 'schedule', web: 'schedule' }
                          : { ios: 'bolt.fill', android: 'bolt', web: 'bolt' }
                      }
                      size={11}
                      tintColor="#FFFFFF"
                    />
                    <Text style={styles.translucentBadgeText} className="text-[10px] font-semibold text-white">
                      {promo.secondaryBadge.text}
                    </Text>
                  </View>
                )}
              </View>

              {/* Text Info with Comfortable Vertical Spacing */}
              <View style={styles.infoWrapper} className="gap-1.5 mt-2">
                <Text style={styles.subtitleText} className="text-[10px] font-bold text-white/90 tracking-widest mb-1 uppercase">
                  {promo.subtitle}
                </Text>
                <Text style={styles.titleText} className="text-[22px] font-extrabold text-white leading-[30px] mb-1.5">
                  {promo.title}
                </Text>
                <Text style={styles.descriptionText} className="text-xs text-white/95 font-normal leading-[19px]">
                  {promo.description}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    paddingHorizontal: Spacing.four,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.three,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#151C27',
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0050D6',
  },
  promosList: {
    gap: Spacing.four,
  },
  cardWrapper: {
    height: 204,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.99 }],
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.38)', // Simple clean dark scrim for white text readability
  },
  cardContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: Spacing.four,
    justifyContent: 'space-between',
  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  solidBadge: {
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  solidBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#0050D6',
    letterSpacing: 0.4,
  },
  translucentBadge: {
    backgroundColor: 'rgba(2, 38, 90, 0.45)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  translucentBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  infoWrapper: {
    gap: 6,
    marginTop: Spacing.two,
  },
  subtitleText: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.90)',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 30,
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '400',
    lineHeight: 19,
  },
});
