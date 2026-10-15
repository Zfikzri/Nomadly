import { StyleSheet, Text, View } from 'react-native';

export function ChatHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>Chat & Komunitas</Text>
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>Live</Text>
        </View>
      </View>
      <Text style={styles.subtitleText}>
        Global travel companion & cross-border peers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  liveBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  liveText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2563EB',
  },
  subtitleText: {
    marginTop: 4,
    fontSize: 13,
    color: '#475569',
    fontWeight: '400',
    lineHeight: 18,
  },
});
