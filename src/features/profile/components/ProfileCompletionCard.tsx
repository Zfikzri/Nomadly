import { StyleSheet, Text, View } from 'react-native';

type ProfileCompletionCardProps = {
  percent: number;
  hint: string;
};

export function ProfileCompletionCard({ percent, hint }: ProfileCompletionCardProps) {
  return (
    <View style={styles.card}>
      {/* Row: label + percentage */}
      <View style={styles.topRow}>
        <View style={styles.labelRow}>
          <View style={styles.dot} />
          <Text style={styles.labelText}>Kelengkapan Profil</Text>
        </View>
        <Text style={styles.percentText}>{percent}%</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${percent}%` as any }]} />
      </View>

      {/* Hint Row */}
      <View style={styles.hintRow}>
        <View style={styles.hintIconWrapper}>
          <Text style={styles.hintIcon}>✓</Text>
        </View>
        <Text style={styles.hintText}>{hint}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginHorizontal: 20,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E8EEFA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2563EB',
  },
  labelText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E293B',
  },
  percentText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E0E8F8',
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: '#2563EB',
  },
  hintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  hintIconWrapper: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintIcon: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  hintText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '500',
    flex: 1,
  },
});
