import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type PromoHeroCardProps = {
  badgeLeft: string;
  badgeRight: string;
  routeSubtitle: string;
  title: string;
  imageUrl: string;
};

export function PromoHeroCard({
  badgeLeft,
  badgeRight,
  routeSubtitle,
  title,
  imageUrl,
}: PromoHeroCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Background Image */}
      <Image
        source={{ uri: imageUrl }}
        style={styles.heroImage}
        contentFit="cover"
        priority="high"
        cachePolicy="memory-disk"
      />

      {/* Dark gradient overlay for readability */}
      <View style={styles.overlayScrim} pointerEvents="none" />

      {/* Content wrapper */}
      <View style={styles.contentWrapper}>
        {/* Top Badges Row */}
        <View style={styles.badgesRow}>
          {/* Left badge with red dot */}
          <View style={styles.leftBadge}>
            <View style={styles.redDot} />
            <Text style={styles.leftBadgeText}>{badgeLeft}</Text>
          </View>

          {/* Right badge with clock icon */}
          <View style={styles.rightBadge}>
            <SymbolView
              name={{ ios: 'clock', android: 'schedule', web: 'schedule' }}
              size={12}
              tintColor="#0284C7"
            />
            <Text style={styles.rightBadgeText}>{badgeRight}</Text>
          </View>
        </View>

        {/* Bottom Route & Title */}
        <View style={styles.bottomInfo}>
          <View style={styles.routeRow}>
            <SymbolView
              name={{ ios: 'airplane', android: 'flight', web: 'flight' }}
              size={14}
              tintColor="#FFFFFF"
            />
            <Text style={styles.routeText}>{routeSubtitle}</Text>
          </View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 270,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0F172A',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 4,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlayScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
  },
  contentWrapper: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  redDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#EF4444',
  },
  leftBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.4,
  },
  rightBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  rightBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
  },
  bottomInfo: {
    gap: 6,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  routeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 31,
  },
});
