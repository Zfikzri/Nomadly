import { StyleSheet, Text, View } from 'react-native';

export default function NomadlyAiRoute() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nomadly AI Assistant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
});
