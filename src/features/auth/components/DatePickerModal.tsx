import { SymbolView } from 'expo-symbols';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des',
];

const MONTH_FULL_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

// Generate days 1..31
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

// Generate years 1960..2012 (Nomadly travelers >= 14 y/o)
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1959 }, (_, i) => CURRENT_YEAR - 14 - i);

type DatePickerModalProps = {
  visible: boolean;
  onSelectDate: (formattedDate: string, ageYears: number) => void;
  onClose: () => void;
};

export function DatePickerModal({
  visible,
  onSelectDate,
  onClose,
}: DatePickerModalProps) {
  const [selectedDay, setSelectedDay] = useState<number>(15);
  const [selectedMonth, setSelectedMonth] = useState<number>(9); // 0-indexed, 9 = Oktober
  const [selectedYear, setSelectedYear] = useState<number>(2002);

  // Calculate live age
  const calculatedAge = useMemo(() => {
    const today = new Date();
    let age = today.getFullYear() - selectedYear;
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    if (currentMonth < selectedMonth || (currentMonth === selectedMonth && currentDay < selectedDay)) {
      age--;
    }
    return Math.max(0, age);
  }, [selectedDay, selectedMonth, selectedYear]);

  const handleConfirm = () => {
    const formatted = `${selectedDay} ${MONTH_NAMES[selectedMonth]} ${selectedYear} (${calculatedAge} Tahun)`;
    onSelectDate(formatted, calculatedAge);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Pilih Tanggal Lahir</Text>
              <Text style={styles.modalSubtitle}>
                Umur Anda akan dihitung otomatis
              </Text>
            </View>
            <Pressable hitSlop={8} style={styles.closeButton} onPress={onClose}>
              <SymbolView
                name={{ ios: 'xmark', android: 'close', web: 'close' }}
                size={16}
                tintColor="#64748B"
              />
            </Pressable>
          </View>

          {/* Age Live Calculation Badge */}
          <View style={styles.ageBadge}>
            <SymbolView
              name={{ ios: 'calendar', android: 'calendar_today', web: 'calendar_today' }}
              size={18}
              tintColor="#2563EB"
            />
            <Text style={styles.ageBadgeText}>
              {selectedDay} {MONTH_FULL_NAMES[selectedMonth]} {selectedYear} •{' '}
              <Text style={styles.ageBadgeHighlight}>{calculatedAge} Tahun</Text>
            </Text>
          </View>

          {/* 3 Selector Columns: Tanggal | Bulan | Tahun */}
          <View style={styles.columnsContainer}>
            {/* Column 1: Hari (Day) */}
            <View style={styles.columnWrapper}>
              <Text style={styles.columnHeader}>Tanggal</Text>
              <FlatList
                data={DAYS}
                keyExtractor={(item) => `day-${item}`}
                showsVerticalScrollIndicator={false}
                style={styles.columnList}
                renderItem={({ item }) => {
                  const isSelected = item === selectedDay;
                  return (
                    <Pressable
                      style={[styles.pickerItem, isSelected && styles.pickerItemSelected]}
                      onPress={() => setSelectedDay(item)}>
                      <Text
                        style={[
                          styles.pickerItemText,
                          isSelected && styles.pickerItemTextSelected,
                        ]}>
                        {item}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>

            {/* Column 2: Bulan (Month) */}
            <View style={styles.columnWrapperWide}>
              <Text style={styles.columnHeader}>Bulan</Text>
              <FlatList
                data={MONTH_NAMES}
                keyExtractor={(_, i) => `month-${i}`}
                showsVerticalScrollIndicator={false}
                style={styles.columnList}
                renderItem={({ item, index }) => {
                  const isSelected = index === selectedMonth;
                  return (
                    <Pressable
                      style={[styles.pickerItem, isSelected && styles.pickerItemSelected]}
                      onPress={() => setSelectedMonth(index)}>
                      <Text
                        style={[
                          styles.pickerItemText,
                          isSelected && styles.pickerItemTextSelected,
                        ]}>
                        {item}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>

            {/* Column 3: Tahun (Year) */}
            <View style={styles.columnWrapper}>
              <Text style={styles.columnHeader}>Tahun</Text>
              <FlatList
                data={YEARS}
                keyExtractor={(item) => `year-${item}`}
                showsVerticalScrollIndicator={false}
                style={styles.columnList}
                renderItem={({ item }) => {
                  const isSelected = item === selectedYear;
                  return (
                    <Pressable
                      style={[styles.pickerItem, isSelected && styles.pickerItemSelected]}
                      onPress={() => setSelectedYear(item)}>
                      <Text
                        style={[
                          styles.pickerItemText,
                          isSelected && styles.pickerItemTextSelected,
                        ]}>
                        {item}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>

          {/* Confirm Button */}
          <Pressable
            style={({ pressed }) => [styles.confirmButton, pressed && styles.confirmPressed]}
            onPress={handleConfirm}>
            <Text style={styles.confirmText}>Gunakan Tanggal Ini</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingTop: 20,
    paddingHorizontal: 18,
    paddingBottom: 22,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  ageBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E293B',
    flex: 1,
  },
  ageBadgeHighlight: {
    color: '#2563EB',
    fontWeight: '800',
  },
  columnsContainer: {
    flexDirection: 'row',
    gap: 8,
    height: 190,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 16,
  },
  columnWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  columnWrapperWide: {
    flex: 1.2,
    alignItems: 'center',
  },
  columnHeader: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  columnList: {
    width: '100%',
  },
  pickerItem: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 2,
  },
  pickerItemSelected: {
    backgroundColor: '#2563EB',
  },
  pickerItemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  pickerItemTextSelected: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  confirmButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmPressed: {
    opacity: 0.85,
  },
  confirmText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
