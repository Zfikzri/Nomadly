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
import { searchCurrencies } from '../services/mockData';
import type { CurrencyItem } from '../types';

type CurrencyPickerModalProps = {
  visible: boolean;
  selectedCode: string;
  onSelectCurrency: (currency: CurrencyItem) => void;
  onClose: () => void;
};

export function CurrencyPickerModal({
  visible,
  selectedCode,
  onSelectCurrency,
  onClose,
}: CurrencyPickerModalProps) {
  const { isZh } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCurrencies = useMemo(() => {
    return searchCurrencies(searchQuery);
  }, [searchQuery]);

  const handleSelect = (currency: CurrencyItem) => {
    onSelectCurrency(currency);
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
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>
              {isZh ? '选择货币' : 'Select Currency'}
            </Text>
            <Pressable onPress={handleClose} hitSlop={12} style={styles.closeButton}>
              <Text style={styles.closeText}>✕</Text>
            </Pressable>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder={
                isZh ? '搜索货币代码或国家/地区...' : 'Search currency code or country...'
              }
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery('')} hitSlop={8}>
                <Text style={styles.clearText}>✕</Text>
              </Pressable>
            )}
          </View>

          {/* List */}
          <FlatList
            data={filteredCurrencies}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => {
              const isSelected = item.code.toUpperCase() === selectedCode.toUpperCase();

              return (
                <Pressable
                  onPress={() => handleSelect(item)}
                  style={[styles.itemRow, isSelected && styles.selectedItemRow]}>
                  <Text style={styles.itemFlag}>{item.flag}</Text>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemCode}>{item.code}</Text>
                    <Text style={styles.itemName}>{item.name}</Text>
                  </View>
                  <Text style={styles.itemSymbol}>{item.symbol}</Text>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 18,
    paddingBottom: 36,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  closeButton: {
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    color: '#64748B',
    fontWeight: '700',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    marginBottom: 14,
    height: 44,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: 0,
  },
  clearText: {
    fontSize: 14,
    color: '#94A3B8',
    padding: 4,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 4,
  },
  selectedItemRow: {
    backgroundColor: '#EFF6FF',
  },
  itemFlag: {
    fontSize: 24,
    marginRight: 14,
  },
  itemInfo: {
    flex: 1,
  },
  itemCode: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 2,
  },
  itemName: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  itemSymbol: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0050D6',
  },
});
