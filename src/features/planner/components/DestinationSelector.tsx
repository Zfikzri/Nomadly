import { SymbolView } from 'expo-symbols';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  ALL_COUNTRIES,
  findCountryByName,
  formatRupiah,
  searchCountries,
} from '../services/mockData';
import type { CountryOption } from '../types';

type DestinationSelectorProps = {
  originCountry: string;
  destinationCountry: string;
  destinationRegion: string;
  onOriginChange: (val: string) => void;
  onDestinationChange: (val: string) => void;
  onRegionChange: (val: string) => void;
  onSwapCountries: () => void;
};

export function DestinationSelector({
  originCountry,
  destinationCountry,
  destinationRegion,
  onOriginChange,
  onDestinationChange,
  onRegionChange,
  onSwapCountries,
}: DestinationSelectorProps) {
  // Modal state for country search picker
  const [pickerTarget, setPickerTarget] = useState<'origin' | 'destination' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = useMemo(() => {
    return searchCountries(searchQuery);
  }, [searchQuery]);

  const originCountryData = findCountryByName(originCountry);
  const destCountryData = findCountryByName(destinationCountry);

  const openPicker = (target: 'origin' | 'destination') => {
    setSearchQuery('');
    setPickerTarget(target);
  };

  const handleSelectCountry = (country: CountryOption) => {
    if (pickerTarget === 'origin') {
      onOriginChange(country.name);
    } else if (pickerTarget === 'destination') {
      onDestinationChange(country.name);
    }
    setPickerTarget(null);
  };

  return (
    <View style={styles.container} className="mb-4">
      {/* Section Header */}
      <Text style={styles.sectionTitle} className="text-[14px] font-bold text-slate-800 mb-2.5">
        Destinasi & Mata Uang
      </Text>

      {/* Row: Negara Asal <-> Negara Tujuan */}
      <View style={styles.row} className="flex-row items-center gap-2">
        {/* Negara Asal Pill */}
        <Pressable
          style={({ pressed }) => [styles.pill, pressed && styles.pillPressed]}
          className="flex-1 bg-[#EEF2FF] h-12 rounded-2xl items-center justify-center px-3"
          onPress={() => openPicker('origin')}>
          <Text
            style={[styles.pillText, originCountry ? styles.pillTextActive : styles.pillTextPlaceholder]}
            className="text-[13px] font-semibold text-slate-700 text-center"
            numberOfLines={1}>
            {originCountryData
              ? `${originCountryData.flag} ${originCountryData.name}`
              : 'Negara Asal'}
          </Text>
        </Pressable>

        {/* Swap Button */}
        <Pressable
          style={({ pressed }) => [styles.swapButton, pressed && styles.swapButtonPressed]}
          className="w-10 h-10 items-center justify-center rounded-full bg-white shadow-sm"
          onPress={onSwapCountries}>
          <SymbolView
            name={{ ios: 'arrow.left.arrow.right', android: 'swap_horiz', web: 'swap_horiz' }}
            size={18}
            tintColor="#0F172A"
          />
        </Pressable>

        {/* Negara Tujuan Pill */}
        <Pressable
          style={({ pressed }) => [styles.pill, pressed && styles.pillPressed]}
          className="flex-1 bg-[#EEF2FF] h-12 rounded-2xl items-center justify-center px-3"
          onPress={() => openPicker('destination')}>
          <Text
            style={[styles.pillText, destinationCountry ? styles.pillTextActive : styles.pillTextPlaceholder]}
            className="text-[13px] font-semibold text-slate-700 text-center"
            numberOfLines={1}>
            {destCountryData
              ? `${destCountryData.flag} ${destCountryData.name}`
              : 'Negara Tujuan'}
          </Text>
        </Pressable>
      </View>

      {/* Row: Daerah / Provinsi Negara Tujuan (Ketik Manual Biasa) */}
      <View style={styles.manualRegionWrapper} className="w-full bg-[#EEF2FF] h-12 rounded-2xl px-4 mt-2.5 flex-row items-center">
        <TextInput
          style={styles.manualRegionInput}
          className="flex-1 text-[13px] font-medium text-slate-800 text-center"
          placeholder="Provinsi / Daerah Tujuan (Ketik manual)"
          placeholderTextColor="#94A3B8"
          value={destinationRegion}
          onChangeText={onRegionChange}
        />
      </View>

      {/* Modal Auto Search Negara */}
      <Modal
        visible={pickerTarget !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPickerTarget(null)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header Modal */}
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>
                  {pickerTarget === 'origin' ? 'Pilih Negara Asal' : 'Pilih Negara Tujuan'}
                </Text>
                <Text style={styles.modalSubtitle}>
                  Cari negara untuk melihat kurs mata uang real-time
                </Text>
              </View>
              <Pressable
                style={styles.closeButton}
                onPress={() => setPickerTarget(null)}>
                <SymbolView
                  name={{ ios: 'xmark', android: 'close', web: 'close' }}
                  size={16}
                  tintColor="#64748B"
                />
              </Pressable>
            </View>

            {/* Search Input Field */}
            <View style={styles.searchBar}>
              <SymbolView
                name={{ ios: 'magnifyingglass', android: 'search', web: 'search' }}
                size={18}
                tintColor="#64748B"
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Ketik nama negara (misal: I, Jepang, Irlandia)..."
                placeholderTextColor="#94A3B8"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus={true}
              />
              {searchQuery.length > 0 && (
                <Pressable onPress={() => setSearchQuery('')}>
                  <SymbolView
                    name={{ ios: 'xmark.circle.fill', android: 'cancel', web: 'cancel' }}
                    size={16}
                    tintColor="#94A3B8"
                  />
                </Pressable>
              )}
            </View>

            {/* List of Countries with Kurs */}
            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.listContent}
              renderItem={({ item }) => {
                const isSelected =
                  pickerTarget === 'origin'
                    ? originCountry === item.name
                    : destinationCountry === item.name;

                return (
                  <Pressable
                    style={({ pressed }) => [
                      styles.countryItem,
                      isSelected && styles.countryItemSelected,
                      pressed && styles.countryItemPressed,
                    ]}
                    onPress={() => handleSelectCountry(item)}>
                    {/* Flag & Name */}
                    <View style={styles.countryInfoLeft}>
                      <Text style={styles.countryFlag}>{item.flag}</Text>
                      <View>
                        <Text style={styles.countryName}>{item.name}</Text>
                        <Text style={styles.currencyBadge}>
                          {item.currency} ({item.currencySymbol})
                        </Text>
                      </View>
                    </View>

                    {/* Kurs Info */}
                    <View style={styles.kursBadge}>
                      <Text style={styles.kursLabel}>KURS REAL-TIME</Text>
                      <Text style={styles.kursValue}>
                        1 {item.currency} ≈ Rp {formatRupiah(item.exchangeRateToIdr)}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pill: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  pillPressed: {
    opacity: 0.75,
  },
  pillText: {
    fontSize: 13,
    textAlign: 'center',
  },
  pillTextActive: {
    color: '#1E293B',
    fontWeight: '700',
  },
  pillTextPlaceholder: {
    color: '#94A3B8',
    fontWeight: '500',
  },
  swapButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  swapButtonPressed: {
    backgroundColor: '#F1F5F9',
  },
  manualRegionWrapper: {
    width: '100%',
    height: 48,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  manualRegionInput: {
    fontSize: 13,
    color: '#0F172A',
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 0,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '80%',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 34,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 46,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '500',
    paddingVertical: 0,
  },
  listContent: {
    paddingBottom: 20,
    gap: 8,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  countryItemSelected: {
    backgroundColor: '#EFF6FF',
    borderColor: '#93C5FD',
  },
  countryItemPressed: {
    backgroundColor: '#EEF2FF',
  },
  countryInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  countryFlag: {
    fontSize: 24,
  },
  countryName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  currencyBadge: {
    fontSize: 11,
    fontWeight: '500',
    color: '#64748B',
    marginTop: 1,
  },
  kursBadge: {
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  kursLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#2563EB',
    letterSpacing: 0.3,
  },
  kursValue: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 1,
  },
});
