import { StyleSheet, Text, View } from 'react-native';

export function RatesHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kurs & Remitansi</Text>
      <Text style={styles.subtitle}>
        Pusat pemantauan kurs valas resmi & transfer dana instan lintas batas negara.
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
