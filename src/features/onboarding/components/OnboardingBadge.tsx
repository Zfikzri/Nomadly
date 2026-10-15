import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import type { BadgeType, OnboardingBadgeConfig } from '../types';

type OnboardingBadgeProps = {
  badgeType: BadgeType;
  config: OnboardingBadgeConfig;
};

export function OnboardingBadge({ badgeType, config }: OnboardingBadgeProps) {
  if (badgeType === 'green-dot') {
    return (
      <View style={styles.badgeContainer}>
        <View style={styles.greenDot} />
        <Text style={styles.badgeTextMuted}>{config.text}</Text>
      </View>
    );
  }

  if (badgeType === 'currency-exchange') {
    return (
      <View style={styles.badgeContainer}>
        <SymbolView
          name={{ ios: 'arrow.left.arrow.right', android: 'swap_horiz', web: 'swap_horiz' }}
          size={15}
          tintColor="#2563EB"
        />
        <Text style={styles.badgeTextBold}>{config.text}</Text>
        <Text style={styles.bulletSeparator}>•</Text>
        <Text style={styles.badgeTextGreen}>{config.subtext}</Text>
      </View>
    );
  }

  return (
    <View style={styles.badgeContainer}>
      <SymbolView
        name={{ ios: 'globe', android: 'public', web: 'public' }}
        size={15}
        tintColor="#2563EB"
      />
      <Text style={styles.badgeTextBold}>{config.text}</Text>
      <Text style={styles.bulletSeparator}>•</Text>
      <Text style={styles.badgeTextBlue}>{config.subtext}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 9,
    paddingHorizontal: 18,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
  },
  badgeTextMuted: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    letterSpacing: -0.2,
  },
  badgeTextBold: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  bulletSeparator: {
    fontSize: 13,
    color: '#94A3B8',
  },
  badgeTextGreen: {
    fontSize: 13,
    fontWeight: '600',
    color: '#16A34A',
    letterSpacing: -0.2,
  },
  badgeTextBlue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
    letterSpacing: -0.2,
  },
});
