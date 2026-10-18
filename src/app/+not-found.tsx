import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ui/ThemedText';
import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n';

export default function NotFoundScreen() {
  const { isZh } = useLanguage();

  return (
    <>
      <Stack.Screen options={{ title: isZh ? '抱歉！' : 'Oops!' }} />
      <View style={styles.container}>
        <ThemedText type="title">
          {isZh ? '页面未找到' : 'Screen Not Found'}
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="linkPrimary">
            {isZh ? '返回首页' : 'Go back to Home'}
          </ThemedText>
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
