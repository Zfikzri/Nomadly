import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ProfileCompletionCardProps = {
  percent: number;
  hint: string;
  onComplete?: () => void;
};

export function ProfileCompletionCard({
  percent,
  hint,
  onComplete,
}: ProfileCompletionCardProps) {
  const isComplete = percent >= 100;

  return (
    <View style={styles.card}>
      {/* ── Top Row: label + percentage badge ── */}
      <View style={styles.topRow}>
        <View style={styles.labelRow}>
          <View style={[styles.dot, isComplete && styles.dotComplete]} />
          <Text style={styles.labelText}>Kelengkapan Profil</Text>
        </View>
        <View style={[styles.percentBadge, isComplete && styles.percentBadgeComplete]}>
          <Text style={[styles.percentText, isComplete && styles.percentTextComplete]}>
            {percent}%
          </Text>
        </View>
      </View>

      {/* ── Progress Bar ── */}
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${Math.min(Math.max(percent, 0), 100)}%` as any },
            isComplete && styles.progressFillComplete,
          ]}
        />
      </View>

      {/* ── Hint Row ── */}
      <View style={styles.hintRow}>
        <View style={[styles.hintIconWrapper, isComplete && styles.hintIconWrapperComplete]}>
          <Text style={styles.hintIcon}>✓</Text>
        </View>
        <Text style={styles.hintText} numberOfLines={2}>
          {hint}
        </Text>
      </View>

      {/* ── Bottom Action Footer: Status Badge + Compact CTA ── */}
      {onComplete && !isComplete && (
        <View style={styles.actionFooter}>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Belum Lengkap</Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.ctaButton,
              pressed && styles.ctaButtonPressed,
            ]}
            onPress={onComplete}
            accessibilityRole="button"
            accessibilityLabel="Lengkapi profil">
            <SymbolView
              name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' } as any}
              size={12}
              tintColor="#FFFFFF"
            />
            <Text style={styles.ctaButtonText}>Lengkapi Profil</Text>
            <SymbolView
              name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' } as any}
              size={11}
              tintColor="#FFFFFF"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E8EEFA',
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
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
    gap: 7,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0050D6',
  },
  dotComplete: {
    backgroundColor: '#22C55E',
  },
  labelText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.1,
  },
  percentBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    borderRadius: 12,
  },
  percentBadgeComplete: {
    backgroundColor: '#F0FDF4',
  },
  percentText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0050D6',
  },
  percentTextComplete: {
    color: '#16A34A',
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E6EDF9',
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: '#0050D6',
  },
  progressFillComplete: {
    backgroundColor: '#22C55E',
  },
  hintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  hintIconWrapper: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintIconWrapperComplete: {
    backgroundColor: '#16A34A',
  },
  hintIcon: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },
  hintText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
    flex: 1,
    lineHeight: 16,
  },

  // ── Action Footer ──
  actionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3B82F6',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 32,
    paddingHorizontal: 13,
    borderRadius: 16,
    backgroundColor: '#0050D6',
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  ctaButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  ctaButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.1,
  },
});
