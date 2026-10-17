import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { FlightPromo } from '../types';

type FlightPromoCardProps = {
  item: FlightPromo;
  onPress?: () => void;
};

export function FlightPromoCard({ item, onPress }: FlightPromoCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      {/* 1. Header: Airline Logo & Name + Discount Badge */}
      <View style={styles.topRow}>
        <View style={styles.airlineLeft}>
          <View style={[styles.airlineIconCircle, { backgroundColor: item.logoBg }]}>
            <SymbolView
              name={{ ios: 'airplane', android: 'flight', web: 'flight' }}
              size={14}
              tintColor={item.iconColor}
            />
          </View>
          <Text style={styles.airlineName}>{item.airline}</Text>
        </View>

        <View style={styles.badgeRightCol}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>{item.discountBadge}</Text>
          </View>
          {item.cashbackBadge && (
            <Text style={styles.cashbackText}>{item.cashbackBadge}</Text>
          )}
        </View>
      </View>

      {/* 2. Route Text */}
      <Text style={styles.routeText}>{item.route}</Text>

      {/* 3. Flight Info Box */}
      <View style={styles.infoBox}>
        <View style={styles.boxLeft}>
          <Text style={styles.boxLabel}>{item.boxTitle}</Text>
          <Text style={styles.boxValue}>{item.boxDetail}</Text>
        </View>
        <View style={styles.boxRight}>
          <Text style={styles.boxLabel}>Mulai Dari</Text>
          <Text style={styles.priceValue}>{item.price}</Text>
        </View>
      </View>

      {/* 4. Bottom Row: Included Amenities + View Schedule Button */}
      <View style={styles.bottomRow}>
        <View style={styles.amenitiesLeft}>
          <SymbolView
            name={
              item.bottomInfo.icon === 'bag'
                ? { ios: 'suitcase.rolling.fill', android: 'luggage', web: 'luggage' }
                : { ios: 'star.fill', android: 'star', web: 'star' }
            }
            size={13}
            tintColor={item.bottomInfo.color ?? '#64748B'}
          />
          <Text style={styles.amenitiesText}>{item.bottomInfo.text}</Text>
        </View>

        <View style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>Lihat Jadwal</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  airlineLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  airlineIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  airlineName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  badgeRightCol: {
    alignItems: 'flex-end',
  },
  discountBadge: {
    backgroundColor: '#EF4444',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  discountBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  cashbackText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#16A34A',
    marginTop: 2,
  },
  routeText: {
    fontSize: 11.5,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  boxLeft: {
    flex: 1,
    marginRight: 8,
  },
  boxRight: {
    alignItems: 'flex-end',
  },
  boxLabel: {
    fontSize: 10,
    color: '#94A3B8',
    fontWeight: '500',
    marginBottom: 2,
  },
  boxValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
  },
  priceValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amenitiesLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
    marginRight: 8,
  },
  amenitiesText: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '500',
  },
  scheduleButton: {
    backgroundColor: '#0050D6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  scheduleButtonText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
