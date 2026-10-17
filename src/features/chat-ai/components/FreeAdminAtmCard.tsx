import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import type { FreeAdminAtmInfo } from '../types';

type FreeAdminAtmCardProps = {
  data: FreeAdminAtmInfo;
};

export function FreeAdminAtmCard({ data }: FreeAdminAtmCardProps) {
  return (
    <View style={styles.card}>
      {/* Title */}
      <View style={styles.titleRow}>
        <Text style={styles.emojiIcon}>🏧</Text>
        <Text style={styles.titleText}>{data.title}</Text>
      </View>

      {/* Description with bold highlights */}
      <Text style={styles.bodyText}>
        Gunakan <Text style={styles.boldText}>{data.bankName}</Text> {data.description}
        <Text style={styles.boldText}>{data.networkBold}</Text> tertentu di jam{' '}
        <Text style={styles.boldBlueText}>{data.hoursBold}</Text>
      </Text>

      {/* Compatible Cards Badge Row */}
      <View style={styles.compatibleRow}>
        <SymbolView
          name={{ ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' }}
          size={14}
          tintColor="#16A34A"
        />
        <Text style={styles.compatibleText}>{data.compatibleCardsText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  emojiIcon: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  bodyText: {
    fontSize: 12.5,
    color: '#334155',
    lineHeight: 18,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: '700',
    color: '#0F172A',
  },
  boldBlueText: {
    fontWeight: '700',
    color: '#0284C7',
  },
  compatibleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  compatibleText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#16A34A',
  },
});
