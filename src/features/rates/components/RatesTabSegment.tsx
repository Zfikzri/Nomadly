import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { RateTabType } from '../types';
import { LinearGradientBackground } from './LinearGradientBackground';

type RatesTabSegmentProps = {
  activeTab: RateTabType;
  onTabChange: (tab: RateTabType) => void;
};

export function RatesTabSegment({ activeTab, onTabChange }: RatesTabSegmentProps) {
  const { isZh } = useLanguage();
  const isExchange = activeTab === 'exchange';
  const isRemittance = activeTab === 'remittance';

  return (
    <View style={styles.container}>
      {/* 1. Exchange Kurs Rate Tab */}
      <Pressable
        onPress={() => onTabChange('exchange')}
        style={[styles.tabButton, isExchange && styles.activeTabButton]}>
        {isExchange && <LinearGradientBackground />}
        {Platform.OS === 'ios' ? (
          <SymbolView
            name="chart.line.uptrend.xyaxis"
            size={16}
            tintColor={isExchange ? '#FFFFFF' : '#475569'}
          />
        ) : (
          <Text style={[styles.tabIconText, isExchange && styles.activeTabIconText]}>
            📈
          </Text>
        )}
        <Text style={[styles.tabLabel, isExchange && styles.activeTabLabel]}>
          {isZh ? '汇率兑换' : 'Exchange Rate'}
        </Text>
      </Pressable>

      {/* 2. Remittance Tab */}
      <Pressable
        onPress={() => onTabChange('remittance')}
        style={[styles.tabButton, isRemittance && styles.activeTabButton]}>
        {isRemittance && <LinearGradientBackground />}
        {Platform.OS === 'ios' ? (
          <SymbolView
            name="arrow.triangle.2.circlepath"
            size={16}
            tintColor={isRemittance ? '#FFFFFF' : '#475569'}
          />
        ) : (
          <Text style={[styles.tabIconText, isRemittance && styles.activeTabIconText]}>
            🔄
          </Text>
        )}
        <Text style={[styles.tabLabel, isRemittance && styles.activeTabLabel]}>
          {isZh ? '跨境汇款' : 'Remittance'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 4,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  activeTabButton: {
    shadowColor: '#0F5BA3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  tabIconText: {
    fontSize: 14,
    position: 'relative',
    zIndex: 1,
  },
  activeTabIconText: {
    color: '#FFFFFF',
  },
  tabLabel: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#475569',
    position: 'relative',
    zIndex: 1,
  },
  activeTabLabel: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
