import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import type { AiKeyPoint } from '../../types/detail';

type NewsAiKeyPointsCardProps = {
  title: string;
  subtitle: string;
  accuracyBadge: string;
  points: AiKeyPoint[];
};

export function NewsAiKeyPointsCard({
  title,
  subtitle,
  accuracyBadge,
  points,
}: NewsAiKeyPointsCardProps) {
  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <View style={styles.iconCircle}>
            <SymbolView
              name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }}
              size={16}
              tintColor="#FFFFFF"
            />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>{subtitle}</Text>
          </View>
        </View>

        <View style={styles.accuracyPill}>
          <Text style={styles.accuracyText}>{accuracyBadge}</Text>
        </View>
      </View>

      {/* Points List */}
      <View style={styles.pointsList}>
        {points.map((point) => (
          <View key={point.id} style={styles.pointRow}>
            {/* Colored Dot Indicator */}
            <View style={[styles.dotIndicator, { backgroundColor: point.dotColor }]} />

            {/* Content Text with bold lead */}
            <Text style={styles.pointText}>
              <Text style={styles.boldLead}>{point.boldPrefix}</Text>
              {point.text}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    gap: 1,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtitleText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  accuracyPill: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
  },
  accuracyText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  pointsList: {
    gap: 14,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  dotIndicator: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginTop: 6,
  },
  pointText: {
    flex: 1,
    fontSize: 13,
    color: '#334155',
    lineHeight: 20,
    fontWeight: '400',
  },
  boldLead: {
    fontWeight: '700',
    color: '#0F172A',
  },
});
