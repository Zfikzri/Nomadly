import { Platform, StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

export function RemittanceSecurityBanner() {
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
        <Text style={styles.title}>Keamanan Moneter Terjamin</Text>
        <Text style={styles.description}>
          Seluruh bank mitra terdaftar dan diawasi oleh otoritas moneter resmi (OJK, MAS, FCA, HKMA) dengan enkripsi data 256-bit standar industri perbankan internasional.
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
