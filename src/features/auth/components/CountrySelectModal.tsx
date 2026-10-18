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

import { useLanguage } from '@/i18n';
import { searchCountries } from '../services/mockAuth';
import type { CountryOption } from '../services/mockAuth';

type CountrySelectModalProps = {
  visible: boolean;
  selectedCountry: string;
  onSelectCountry: (country: CountryOption) => void;
  onClose: () => void;
};

export function CountrySelectModal({
  visible,
  selectedCountry,
  onSelectCountry,
  onClose,
}: CountrySelectModalProps) {
  const { isZh } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = useMemo(() => {
    return searchCountries(searchQuery);
  }, [searchQuery]);

  const handleSelect = (country: CountryOption) => {
    onSelectCountry(country);
    setSearchQuery('');
    onClose();
  };

  const handleClose = () => {
    setSearchQuery('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>
                {isZh ? '选择国家/地区' : 'Select Country'}
              </Text>
              <Text style={styles.modalSubtitle}>
                {isZh ? '搜索并选择您的常住国家/地区' : 'Search and select your country of residence'}
              </Text>
            </View>
            <Pressable hitSlop={8} style={styles.closeButton} onPress={handleClose}>
              <SymbolView
                name={{ ios: 'xmark', android: 'close', web: 'close' }}
                size={16}
                tintColor="#64748B"
              />
            </Pressable>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <SymbolView
              name={{ ios: 'magnifyingglass', android: 'search', web: 'search' }}
              size={18}
              tintColor="#64748B"
            />
            <TextInput
              style={styles.searchInput}
              placeholder={isZh ? '搜索国家或地区（例如：日本、美国）...' : 'Search country (e.g. Japan, United States)...'}
              placeholderTextColor="#94A3B8"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus={true}
            />
            {searchQuery.length > 0 && (
              <Pressable hitSlop={8} onPress={() => setSearchQuery('')}>
                <SymbolView
                  name={{ ios: 'xmark.circle.fill', android: 'cancel', web: 'cancel' }}
                  size={16}
                  tintColor="#94A3B8"
                />
              </Pressable>
            )}
          </View>

          {/* Country List */}
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => {
              const isSelected = selectedCountry.toLowerCase() === item.name.toLowerCase();

              return (
                <Pressable
                  style={({ pressed }) => [
                    styles.countryItem,
                    isSelected && styles.countryItemSelected,
                    pressed && styles.countryItemPressed,
                  ]}
                  onPress={() => handleSelect(item)}>
                  <View style={styles.countryInfoLeft}>
                    <Text style={styles.countryFlag}>{item.flag}</Text>
                    <Text style={[styles.countryName, isSelected && styles.countryNameSelected]}>
                      {item.name}
                    </Text>
                  </View>

                  {isSelected && (
                    <SymbolView
                      name={{ ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' }}
                      size={20}
                      tintColor="#2563EB"
                    />
                  )}
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '75%',
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
    height: 44,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
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
    paddingBottom: 24,
    gap: 6,
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
    fontSize: 22,
  },
  countryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  countryNameSelected: {
    color: '#1D4ED8',
    fontWeight: '700',
  },
});
