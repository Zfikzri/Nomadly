import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { AINavigationRecommendation } from '../../types';

type AITravelCardProps = {
  recommendation: AINavigationRecommendation;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
};

export function AITravelCard({
  recommendation,
  onPrimaryAction,
  onSecondaryAction,
}: AITravelCardProps) {
  return (
    <View style={styles.card}>
      {/* Header Row: AI Logo, Name, and Smart Badge */}
      <View style={styles.headerRow}>
        <View style={styles.titleGroup}>
          <View style={styles.aiIconWrapper}>
            <SymbolView
              name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }}
              size={14}
              tintColor="#FFFFFF"
            />
          </View>
          <Text style={styles.aiNameText}>{recommendation.title}</Text>
        </View>

        <View style={styles.badgePill}>
          <Text style={styles.badgeText}>{recommendation.badge}</Text>
        </View>
      </View>

      {/* Body: Navigation Advice with bold highlights and green price */}
      <View style={styles.bodyWrapper}>
        <Text style={styles.bodyText}>
          <Text style={styles.bulbIcon}>💡 </Text>
          <Text style={styles.boldText}>Saran Navigasi: </Text>
          {recommendation.tipsIntro}
          <Text style={styles.boldText}>{recommendation.jrPassBold}</Text>
          {recommendation.jrPassText}
          <Text style={styles.boldText}>{recommendation.comboBold}</Text>
          {recommendation.comboText}
          <Text style={styles.savingsText}>{recommendation.savingsRupiah}</Text>
          {recommendation.savingsYen}
        </Text>
      </View>

      {/* Action Buttons Row */}
      <View style={styles.actionsRow}>
        <Pressable
          onPress={onPrimaryAction}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}>
          <Text style={styles.primaryButtonText}>{recommendation.primaryActionText}</Text>
        </Pressable>

        <Pressable
          onPress={onSecondaryAction}
          style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}>
          <Text style={styles.secondaryButtonText}>{recommendation.secondaryActionText}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0F2FE',
    borderRadius: 24,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#BAE6FD',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  aiIconWrapper: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0050D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiNameText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  badgePill: {
    backgroundColor: '#BFDBFE',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  bodyWrapper: {
    marginBottom: 14,
  },
  bodyText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 19,
  },
  bulbIcon: {
    fontSize: 12,
  },
  boldText: {
    fontWeight: '700',
    color: '#0F172A',
  },
  savingsText: {
    fontWeight: '800',
    color: '#16A34A',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  primaryButton: {
    backgroundColor: '#0050D6',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '600',
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
