import { StyleSheet, Text, View } from 'react-native';

export function PlannerHeader() {
  return (
    <View style={styles.container} className="items-center px-4 pt-2 pb-1">
      {/* Small top indicator handle */}
      <View style={styles.handle} className="w-10 h-1 rounded-full bg-blue-200 mb-3" />

      {/* Main Title */}
      <Text style={styles.title} className="text-[25px] font-extrabold text-slate-900 text-center tracking-tight">
        AI Travel Budget Planner
      </Text>

      {/* Subtitle */}
      <Text
        style={styles.subtitle}
        className="text-[13px] text-slate-500 text-center mt-2 px-6 leading-5 font-normal">
        Simulasikan anggaran liburan & maksimalkan daya beli mata uang tujuan secara instan.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#BFDBFE',
    marginBottom: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 24,
    lineHeight: 20,
  },
});
