import { StyleSheet, Text, View } from 'react-native';

type AboutHubSectionProps = {
  title: string;
  description: string;
};

export function AboutHubSection({ title, description }: AboutHubSectionProps) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#151C27',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 23,
    color: '#475569',
  },
});
