import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { ReservationPartner } from '../../types/detail';

type PromoPartnersCardProps = {
  title: string;
  badgeText: string;
  partners: ReservationPartner[];
  onSelectPartner?: (partner: ReservationPartner) => void;
};

export function PromoPartnersCard({
  title,
  badgeText,
  partners,
  onSelectPartner,
}: PromoPartnersCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.badgeActive}>
          <View style={styles.dotGreen} />
          <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
      </View>

      {/* 3 Partner Tiles */}
      <View style={styles.partnersRow}>
        {partners.map((partner) => (
          <Pressable
            key={partner.id}
            style={({ pressed }) => [
              styles.partnerTile,
              pressed && styles.tilePressed,
            ]}
            onPress={() => onSelectPartner?.(partner)}
            accessibilityRole="button"
            accessibilityLabel={`Pilih mitra ${partner.name}`}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: partner.iconBgColor },
              ]}>
              <SymbolView
                name={partner.iconName}
                size={18}
                tintColor={partner.iconColor}
              />
            </View>

            <Text style={styles.partnerName} numberOfLines={2}>
              {partner.name}
            </Text>

            <Text
              style={[
                styles.cashbackText,
                { color: partner.cashbackColor ?? '#2563EB' },
              ]}>
              {partner.cashbackText}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  badgeActive: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dotGreen: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#16A34A',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#16A34A',
  },
  partnersRow: {
    flexDirection: 'row',
    gap: 10,
  },
  partnerTile: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  tilePressed: {
    backgroundColor: '#EEF2FF',
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  partnerName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
    minHeight: 32,
    marginBottom: 4,
  },
  cashbackText: {
    fontSize: 11,
    fontWeight: '800',
    textAlign: 'center',
  },
});
