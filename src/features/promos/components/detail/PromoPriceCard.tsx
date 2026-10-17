import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type PromoPriceCardProps = {
  currentPrice: string;
  strikePrice: string;
  discountPill: string;
  usdEstimate: string;
  savingsAmount: string;
  savingsBadge: string;
};

export function PromoPriceCard({
  currentPrice,
  strikePrice,
  discountPill,
  usdEstimate,
  savingsAmount,
  savingsBadge,
}: PromoPriceCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Top Row: Label & Discount Pill */}
      <View style={styles.topRow}>
        <Text style={styles.labelHeader}>HARGA SPESIAL PROMO</Text>
        <View style={styles.discountPill}>
          <Text style={styles.discountPillText}>{discountPill}</Text>
        </View>
      </View>

      {/* Main Prices */}
      <Text style={styles.mainPriceText}>{currentPrice}</Text>
      <Text style={styles.strikePriceText}>{strikePrice}</Text>

      {/* Currency Exchange Locked Info */}
      <View style={styles.currencyRow}>
        <SymbolView
          name={{
            ios: 'arrow.triangle.2.circlepath',
            android: 'sync',
            web: 'sync',
          }}
          size={14}
          tintColor="#0284C7"
        />
        <Text style={styles.currencyText}>
          {usdEstimate}
        </Text>
      </View>

      {/* Total Savings Highlight Box */}
      <View style={styles.savingsBox}>
        <View style={styles.savingsLeft}>
          <View style={styles.savingsIconWrapper}>
            <SymbolView
              name={{
                ios: 'banknote.fill',
                android: 'savings',
                web: 'savings',
              }}
              size={18}
              tintColor="#16A34A"
            />
          </View>
          <View style={styles.savingsTextColumn}>
            <Text style={styles.savingsTitle}>Total Penghematan</Text>
            <Text style={styles.savingsValue}>{savingsAmount}</Text>
          </View>
        </View>

        <View style={styles.multiCurrencyPill}>
          <Text style={styles.multiCurrencyText}>{savingsBadge}</Text>
        </View>
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
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  labelHeader: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  discountPill: {
    backgroundColor: '#DCFCE7',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  discountPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#15803D',
  },
  mainPriceText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 36,
  },
  strikePriceText: {
    fontSize: 14,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
    marginTop: 2,
    marginBottom: 12,
  },
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  currencyText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#16A34A',
  },
  savingsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1F5FD',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  savingsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  savingsIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  savingsTextColumn: {
    gap: 2,
  },
  savingsTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
  },
  savingsValue: {
    fontSize: 13,
    fontWeight: '500',
    color: '#475569',
  },
  multiCurrencyPill: {
    backgroundColor: '#E2E8F8',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  multiCurrencyText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1E40AF',
  },
});
