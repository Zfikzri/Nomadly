import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';

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
  const { isZh } = useLanguage();

  return (
    <View style={styles.cardContainer}>
      {/* Top Row: Label & Discount Pill */}
      <View style={styles.topRow}>
        <Text style={styles.labelHeader}>
          {isZh ? '特惠专属价格' : 'SPECIAL PROMO PRICE'}
        </Text>
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
            <Text style={styles.savingsTitle}>
              {isZh ? '累计为您节省' : 'Total Savings'}
            </Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelHeader: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.8,
  },
  discountPill: {
    backgroundColor: '#FFE4E6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  discountPillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#E11D48',
  },
  mainPriceText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0050D6',
    letterSpacing: -0.5,
  },
  strikePriceText: {
    fontSize: 14,
    color: '#94A3B8',
    textDecorationLine: 'line-through',
    marginTop: 2,
    marginBottom: 8,
  },
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  currencyText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0284C7',
  },
  savingsBox: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#DCFCE7',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  savingsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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
    fontSize: 11,
    color: '#15803D',
    fontWeight: '600',
  },
  savingsValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#166534',
  },
  multiCurrencyPill: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  multiCurrencyText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#16A34A',
  },
});
