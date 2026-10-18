import { StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';

export function RatesHeader() {
  const { isZh } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isZh ? '汇率与跨境汇款' : 'Rates & Remittance'}
      </Text>
      <Text style={styles.subtitle}>
        {isZh
          ? '实时官方外汇监控与无缝跨境极速汇款中心。'
          : 'Real-time official FX exchange tracking & instant cross-border remittance.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 13.5,
    fontWeight: '400',
    color: '#475569',
    textAlign: 'center',
    lineHeight: 19,
    maxWidth: 320,
  },
});
