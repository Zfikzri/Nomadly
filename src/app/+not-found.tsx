import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ui/ThemedText';
import { Spacing } from '@/constants/theme';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <ThemedText type="title">Screen Not Found</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="linkPrimary">Go back to Home</ThemedText>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.four,
  },
  link: {
    marginTop: Spacing.three,
    paddingVertical: Spacing.three,
  },
});
