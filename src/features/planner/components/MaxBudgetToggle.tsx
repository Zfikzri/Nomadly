import { SymbolView } from 'expo-symbols';
import { StyleSheet, Switch, Text, View } from 'react-native';

type MaxBudgetToggleProps = {
  isEnabled: boolean;
  onToggle: (val: boolean) => void;
};

export function MaxBudgetToggle({ isEnabled, onToggle }: MaxBudgetToggleProps) {
  return (
    <View style={styles.card} className="bg-[#EEF2FF] rounded-2xl p-3.5 flex-row items-center justify-between mt-2.5">
      {/* Left: Green lightning icon + texts */}
      <View style={styles.leftRow} className="flex-row items-center gap-3 flex-1 pr-2">
        <View style={styles.iconCircle} className="w-9 h-9 rounded-full bg-emerald-100 items-center justify-center">
          <SymbolView
            name={{ ios: 'bolt.fill', android: 'bolt', web: 'bolt' }}
            size={18}
            tintColor="#16A34A"
          />
        </View>
        <View style={styles.textCol} className="flex-1">
          <Text style={styles.title} className="text-[13px] font-bold text-slate-800">
            Maksimalkan Budget
          </Text>
          <Text style={styles.subtitle} className="text-[11px] text-slate-400 mt-0.5 leading-4">
            Otomatis bagi alokasi hingga habis tanpa sisa tabungan.
          </Text>
        </View>
      </View>

      {/* Right: Switch */}
      <Switch
        trackColor={{ false: '#CBD5E1', true: '#2563EB' }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#CBD5E1"
        onValueChange={onToggle}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingRight: 8,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DCFCE7',
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
    lineHeight: 15,
  },
});
