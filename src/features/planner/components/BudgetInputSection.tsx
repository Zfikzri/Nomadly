import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import {
  findCountryByName,
  formatCurrencyValue,
  formatRupiah,
  parseRupiahNumber,
} from '../services/mockData';

type BudgetInputSectionProps = {
  nominalBudget: string;
  destinationCountry: string;
  onBudgetChange: (val: string) => void;
};

export function BudgetInputSection({
  nominalBudget,
  destinationCountry,
  onBudgetChange,
}: BudgetInputSectionProps) {
  // Reaktif terhadap perubahan negara tujuan!
  const currentCountry = findCountryByName(destinationCountry);

  const numericValue = parseRupiahNumber(nominalBudget);
  const targetCurrencyValue = numericValue && currentCountry.exchangeRateToIdr
    ? Math.round(numericValue / currentCountry.exchangeRateToIdr)
    : 0;

  const handleTextChange = (text: string) => {
    const rawNumber = parseRupiahNumber(text);
    if (!rawNumber) {
      onBudgetChange('');
      return;
    }
    onBudgetChange(formatRupiah(rawNumber));
  };

  return (
    <View style={styles.container} className="mb-4">
      {/* Title & Real-time Rate Badge */}
      <View style={styles.headerRow} className="flex-row items-center justify-between mb-2">
        <Text style={styles.title} className="text-[14px] font-bold text-slate-800">
          Modal Anggaran
        </Text>
        <View style={styles.rateBadge} className="flex-row items-center gap-1">
          <SymbolView
            name={{ ios: 'arrow.triangle.2.circlepath', android: 'sync', web: 'sync' }}
            size={12}
            tintColor="#0050D6"
          />
          <Text style={styles.rateText} className="text-xs font-semibold text-[#0050D6]">
            Kurs Real-time
          </Text>
        </View>
      </View>

      {/* Input Field: Rp [Contoh: 10.000.000] */}
      <View style={styles.inputWrapper} className="flex-row items-center bg-[#EEF2FF] rounded-2xl h-14 px-4">
        <Text style={styles.currencyPrefix} className="text-base font-bold text-slate-900 mr-2.5">
          Rp
        </Text>
        <TextInput
          style={styles.input}
          className="flex-1 text-base font-medium text-slate-900"
          placeholder="Contoh: 10.000.000"
          placeholderTextColor="#94A3B8"
          keyboardType="numeric"
          value={nominalBudget}
          onChangeText={handleTextChange}
        />
      </View>

      {/* Estimasi Daya Beli Sub-Card (Otomatis Ganti Sesuai Negara Tujuan) */}
      <View style={styles.buyingPowerCard} className="bg-[#EEF2FF] rounded-2xl p-3.5 mt-2.5 flex-row items-start gap-2.5">
        <View style={styles.iconContainer} className="mt-0.5">
          <SymbolView
            name={{ ios: 'creditcard', android: 'credit_card', web: 'credit_card' }}
            size={16}
            tintColor="#0050D6"
          />
        </View>
        <View style={styles.buyingPowerContent} className="flex-1">
          <Text style={styles.buyingPowerLabel} className="text-[12px] font-medium text-slate-600">
            Estimasi Daya Beli di {currentCountry.name}:
          </Text>
          <Text style={styles.buyingPowerValue} className="text-[13px] font-bold text-slate-900 mt-0.5">
            {targetCurrencyValue > 0
              ? `${formatCurrencyValue(targetCurrencyValue, currentCountry.currencySymbol)} ${currentCountry.currency}`
              : `~0 ${currentCountry.currency}`}
            <Text style={styles.rateNote} className="text-[11px] font-normal text-slate-500">
              {' '}(1 {currentCountry.currency} ≈ Rp {formatRupiah(currentCountry.exchangeRateToIdr)})
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  rateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#E0EAFF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  rateText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0050D6',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    height: 52,
    paddingHorizontal: 16,
  },
  currencyPrefix: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    paddingVertical: 0,
  },
  buyingPowerCard: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyingPowerContent: {
    flex: 1,
  },
  buyingPowerLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#64748B',
  },
  buyingPowerValue: {
    fontSize: 13,
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
