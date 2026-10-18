import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';

type TripDurationSectionProps = {
  durationDays: number;
  dateRangeText?: string;
  onDurationChange: (days: number, dateText: string) => void;
};

type PresetHoliday = {
  id: string;
  labelEn: string;
  labelZh: string;
  days: number;
  dateRange: string;
};

const PRESET_HOLIDAYS: PresetHoliday[] = [
  { id: 'weekend', labelEn: 'Long Weekend', labelZh: '长周末假期', days: 4, dateRange: '06 Nov - 10 Nov 2026' },
  { id: '1week', labelEn: '1-Week Vacation', labelZh: '一周深度度假', days: 7, dateRange: '10 Nov - 17 Nov 2026' },
  { id: 'golden', labelEn: 'Golden Holiday', labelZh: '九天黄金假期', days: 9, dateRange: '15 Nov - 24 Nov 2026' },
  { id: '2weeks', labelEn: '2-Week Getaway', labelZh: '两周悠闲旅居', days: 14, dateRange: '01 Dec - 15 Dec 2026' },
  { id: '3weeks', labelEn: '3-Week Exploration', labelZh: '三周环游探索', days: 21, dateRange: '05 Dec - 26 Dec 2026' },
  { id: 'month', labelEn: '1-Month Nomad Trip', labelZh: '一个月游民旅居', days: 30, dateRange: '01 Jan - 31 Jan 2027' },
];

export function TripDurationSection({
  durationDays,
  dateRangeText = '15 Nov - 24 Nov 2026',
  onDurationChange,
}: TripDurationSectionProps) {
  const { strings, isZh } = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPresetId, setSelectedPresetId] = useState<string>('golden');

  const handleSelectPreset = (preset: PresetHoliday) => {
    setSelectedPresetId(preset.id);
    onDurationChange(preset.days, preset.dateRange);
    setModalVisible(false);
  };

  return (
    <View style={styles.container} className="mb-3">
      {/* Label */}
      <Text style={styles.sectionTitle} className="text-[14px] font-bold text-slate-800 mb-2.5">
        {strings.planner.durationLabel}
      </Text>

      {/* Selector Card */}
      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        className="bg-[#EEF2FF] rounded-2xl p-3.5 flex-row items-center justify-between"
        onPress={() => setModalVisible(true)}>
        {/* Left: Icon + Text */}
        <View style={styles.leftRow} className="flex-row items-center gap-3 flex-1">
          <View style={styles.iconBox} className="w-9 h-9 rounded-xl bg-white items-center justify-center shadow-xs">
            <SymbolView
              name={{ ios: 'calendar', android: 'calendar_today', web: 'calendar_today' }}
              size={18}
              tintColor="#475569"
            />
          </View>
          <View style={styles.textCol} className="flex-1">
            <Text style={styles.title} className="text-[13px] font-bold text-slate-800">
              {dateRangeText || (isZh ? '选择行程日期' : 'Select Departure Dates')}
            </Text>
            <Text style={styles.subtitle} className="text-xs text-slate-400 mt-0.5">
              {isZh ? '选择本次旅行预计天数' : 'Select travel duration range'}
            </Text>
          </View>
        </View>

        {/* Right: Duration Pill */}
        <View style={styles.durationPill} className="bg-white/90 px-3 py-1.5 rounded-full border border-slate-200">
          <Text style={styles.durationText} className="text-xs font-bold text-slate-700">
            {durationDays > 0 ? `${durationDays} ${strings.planner.days}` : `— ${strings.planner.days}`}
          </Text>
        </View>
      </Pressable>

      {/* Modal Date & Duration Picker */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>
                  {isZh ? '选择行程日期与天数' : 'Select Trip Dates & Duration'}
                </Text>
                <Text style={styles.modalSubtitle}>
                  {isZh ? '选择天数范围，以便 AI 精确计算每日预算' : 'Choose date range for AI daily budget estimation'}
                </Text>
              </View>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <SymbolView
                  name={{ ios: 'xmark', android: 'close', web: 'close' }}
                  size={16}
                  tintColor="#64748B"
                />
              </Pressable>
            </View>

            {/* Presets List */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.presetList}>
              {PRESET_HOLIDAYS.map((preset) => {
                const isSelected = durationDays === preset.days;
                return (
                  <Pressable
                    key={preset.id}
                    style={({ pressed }) => [
                      styles.presetItem,
                      isSelected && styles.presetItemSelected,
                      pressed && styles.presetItemPressed,
                    ]}
                    onPress={() => handleSelectPreset(preset)}>
                    <View style={styles.presetLeft}>
                      <View
                        style={[
                          styles.radioCircle,
                          isSelected && styles.radioCircleSelected,
                        ]}>
                        {isSelected && <View style={styles.radioDot} />}
                      </View>
                      <View>
                        <Text style={styles.presetLabel}>
                          {isZh ? preset.labelZh : preset.labelEn}
                        </Text>
                        <Text style={styles.presetDates}>{preset.dateRange}</Text>
                      </View>
                    </View>
                    <View style={styles.presetDaysBadge}>
                      <Text style={styles.presetDaysText}>{preset.days} {strings.planner.days}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardPressed: {
    opacity: 0.8,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  durationPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  durationText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
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
    maxHeight: '75%',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  presetList: {
    gap: 10,
    paddingBottom: 16,
  },
  presetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  presetItemSelected: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  presetItemPressed: {
    backgroundColor: '#EEF2FF',
  },
  presetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleSelected: {
    borderColor: '#2563EB',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2563EB',
  },
  presetLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  presetDates: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  presetDaysBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  presetDaysText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
  },
});
