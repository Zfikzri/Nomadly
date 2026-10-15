import { useState } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  convertCurrency,
  findCurrencyByCode,
  formatThousands,
  getMiddleRateString,
  parseNumberString,
} from '../services/mockData';
import type { CurrencyItem } from '../types';
import { CurrencyPickerModal } from './CurrencyPickerModal';
import { LinearGradientBackground } from './LinearGradientBackground';

export function RatesConverterCard() {
  const [fromCode, setFromCode] = useState('IDR');
  const [toCode, setToCode] = useState('JPY');
  const [fromAmountText, setFromAmountText] = useState('10.000.000');
  const [toAmountText, setToAmountText] = useState('5000');
  const [pickerTarget, setPickerTarget] = useState<'from' | 'to' | null>(null);

  const fromCurrency = findCurrencyByCode(fromCode);
  const toCurrency = findCurrencyByCode(toCode);

  const handleConvert = () => {
    const numericFrom = parseNumberString(fromAmountText);
    const converted = convertCurrency(numericFrom, fromCode, toCode);
    setToAmountText(formatThousands(Math.round(converted)));
  };

  const handleSwap = () => {
    setFromCode(toCode);
    setToCode(fromCode);
    setFromAmountText(toAmountText);
    const numericFrom = parseNumberString(toAmountText);
    const converted = convertCurrency(numericFrom, toCode, fromCode);
    setToAmountText(formatThousands(Math.round(converted)));
  };

  const handleSelectCurrency = (currency: CurrencyItem) => {
    if (pickerTarget === 'from') {
      setFromCode(currency.code);
      const numericFrom = parseNumberString(fromAmountText);
      const converted = convertCurrency(numericFrom, currency.code, toCode);
      setToAmountText(formatThousands(Math.round(converted)));
    } else if (pickerTarget === 'to') {
      setToCode(currency.code);
      const numericFrom = parseNumberString(fromAmountText);
      const converted = convertCurrency(numericFrom, fromCode, currency.code);
      setToAmountText(formatThousands(Math.round(converted)));
    }
  };

  const handleFromAmountChange = (text: string) => {
    const rawNumber = text.replace(/\D/g, '');
    const formatted = formatThousands(rawNumber);
    setFromAmountText(formatted);
  };

  return (
    <View style={styles.cardContainer}>
      {/* 1. Header: Icon & Title */}
      <View style={styles.headerRow}>
        <Text style={styles.headerIcon}>💱</Text>
        <Text style={styles.headerTitle}>Kurs Konverter</Text>
      </View>

      {/* 2. Date Subtitle */}
      <View style={styles.dateRow}>
        <Text style={styles.calendarIcon}>📅</Text>
        <Text style={styles.dateText}>10 OCTOBER 2026</Text>
      </View>

      {/* 3. Input 1 (From Currency) */}
      <View style={styles.inputBox}>
        {/* Dropdown Selector */}
        <Pressable
          onPress={() => setPickerTarget('from')}
          style={({ pressed }) => [
            styles.currencyPickerButton,
            pressed && { opacity: 0.75 },
          ]}>
          <Text style={styles.chevronIcon}>⌄</Text>
          <Text style={styles.flagIcon}>{fromCurrency.flag}</Text>
          <Text style={styles.currencyCode}>{fromCurrency.code}</Text>
        </Pressable>

        {/* Amount Input */}
        <TextInput
          value={fromAmountText}
          onChangeText={handleFromAmountChange}
          keyboardType="numeric"
          style={styles.amountInput}
          placeholder="0"
          placeholderTextColor="#94A3B8"
        />
      </View>

      {/* 4. Swap Button */}
      <View style={styles.swapButtonWrapper}>
        <Pressable
          onPress={handleSwap}
          style={({ pressed }) => [
            styles.swapButton,
            pressed && { transform: [{ scale: 0.92 }] },
          ]}>
          <Text style={styles.swapIcon}>⇅</Text>
        </Pressable>
      </View>

      {/* 5. Input 2 (To Currency) */}
      <View style={styles.inputBox}>
        {/* Dropdown Selector */}
        <Pressable
          onPress={() => setPickerTarget('to')}
          style={({ pressed }) => [
            styles.currencyPickerButton,
            pressed && { opacity: 0.75 },
          ]}>
          <Text style={styles.chevronIcon}>⌄</Text>
          <Text style={styles.flagIcon}>{toCurrency.flag}</Text>
          <Text style={styles.currencyCode}>{toCurrency.code}</Text>
        </Pressable>

        {/* Amount Input / Display */}
        <TextInput
          value={toAmountText}
          onChangeText={(text) => {
            const raw = text.replace(/\D/g, '');
            setToAmountText(formatThousands(raw));
          }}
          keyboardType="numeric"
          style={styles.amountInput}
          placeholder="0"
          placeholderTextColor="#94A3B8"
        />
      </View>

      {/* 6. Middle Rate Note */}
      <View style={styles.middleRateContainer}>
        <Text style={styles.middleRateLabel}>Nilai Tukar Tengah</Text>
        <Text style={styles.middleRateValue}>
          {getMiddleRateString(fromCode, toCode)}
        </Text>
      </View>

      {/* 7. Action Button "Konversi" */}
      <Pressable
        onPress={handleConvert}
        style={({ pressed }) => [
          styles.convertButton,
          pressed && { opacity: 0.9, transform: [{ scale: 0.99 }] },
        ]}>
        <LinearGradientBackground />
        <Text style={styles.convertButtonText}>Konversi</Text>
      </Pressable>

      {/* Currency Picker Modal */}
      <CurrencyPickerModal
        visible={pickerTarget !== null}
        selectedCode={pickerTarget === 'from' ? fromCode : toCode}
        onSelectCurrency={handleSelectCurrency}
        onClose={() => setPickerTarget(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 20,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 6,
  },
  headerIcon: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 20,
  },
  calendarIcon: {
    fontSize: 13,
  },
  dateText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    justifyContent: 'space-between',
  },
  currencyPickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
    paddingRight: 10,
  },
  chevronIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: '#64748B',
    marginTop: -2,
  },
  flagIcon: {
    fontSize: 20,
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  amountInput: {
    flex: 1,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    paddingVertical: 0,
  },
  swapButtonWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },
  swapButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swapIcon: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  middleRateContainer: {
    alignItems: 'center',
    marginVertical: 18,
    gap: 4,
  },
  middleRateLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
  middleRateValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
  },
  convertButton: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 22,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F5BA3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 3,
  },
  convertButtonText: {
    color: '#FFFFFF',
    fontSize: 15.5,
    fontWeight: '700',
    letterSpacing: 0.2,
    position: 'relative',
    zIndex: 1,
  },
});
