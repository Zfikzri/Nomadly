import { useRouter } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';

type PromoDetailHeaderProps = {
  title?: string;
};

export function PromoDetailHeader({ title }: PromoDetailHeaderProps) {
  const router = useRouter();
  const { isZh } = useLanguage();
  const resolvedTitle = title ?? (isZh ? '门票特惠' : 'Promo Deals');

  return (
    <View style={styles.headerContainer}>
      <Pressable
        hitSlop={12}
        style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}
        onPress={() => router.back()}
        accessibilityLabel="Go back"
        accessibilityRole="button">
        <SymbolView
          name={{
            ios: 'arrow.left',
            android: 'arrow_back',
            web: 'arrow_back',
          }}
          size={22}
          tintColor="#151C27"
          weight="semibold"
        />
      </Pressable>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {resolvedTitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  backButtonPressed: {
    backgroundColor: '#F1F5F9',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#151C27',
  },
});
