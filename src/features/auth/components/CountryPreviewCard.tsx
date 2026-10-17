import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import { formatRupiah } from '../services/mockAuth';
import type { CountryOption } from '../services/mockAuth';

type CountryPreviewCardProps = {
  country: CountryOption;
};

export function CountryPreviewCard({ country }: CountryPreviewCardProps) {
  return (
    <View style={styles.card} className="bg-[#EEF2FF] rounded-2xl p-3 mb-3 -mt-1 flex-row items-center gap-2.5">
      <View style={styles.iconContainer}>
        <SymbolView
          name={{ ios: 'creditcard', android: 'credit_card', web: 'credit_card' }}
          size={16}
          tintColor="#0050D6"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>
          Negara Terpilih: {country.flag} {country.name}
        </Text>
        <Text style={styles.value}>
          Mata Uang: {country.currency} ({country.currencySymbol})
          <Text style={styles.rateNote}>
            {' '}(1 {country.currency} ≈ Rp {formatRupiah(country.exchangeRateToIdr)})
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    marginTop: -4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#E0EAFF',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
  value: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 1,
  },
  rateNote: {
    fontSize: 11,
    fontWeight: '400',
    color: '#64748B',
  },
});
