import { Platform, StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import { useLanguage } from '@/i18n';

export function RemittanceSecurityBanner() {
  const { isZh } = useLanguage();

  return (
    <View style={styles.container}>
      {/* 1. Shield Check Icon Badge */}
      <View style={styles.iconBadge}>
        {Platform.OS === 'ios' ? (
          <SymbolView
            name="checkmark.shield.fill"
            size={18}
            tintColor="#2563EB"
          />
        ) : (
          <Text style={styles.fallbackIcon}>🛡️</Text>
        )}
      </View>

      {/* 2. Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {isZh ? '银行级金融安全保障' : 'Bank-Grade Security Guaranteed'}
        </Text>
        <Text style={styles.description}>
          {isZh
            ? '所有合作银行均受官方金融监管机构（MAS、FCA、HKMA 等）严格监督，具备 256 位国际银行级数据加密。'
            : 'All partner banks are registered and supervised by official monetary authorities (MAS, FCA, HKMA) with 256-bit bank-grade encryption.'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#EEF4FF',
    borderRadius: 22,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E0EAFF',
  },
  iconBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  fallbackIcon: {
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    color: '#475569',
  },
});
