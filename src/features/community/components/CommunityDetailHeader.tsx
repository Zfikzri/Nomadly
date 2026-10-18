import { useRouter } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CommunityDetailHeaderProps = {
  title: string;
};

export function CommunityDetailHeader({ title }: CommunityDetailHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.headerRow}>
      <Pressable
        hitSlop={12}
        style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}
        onPress={() => router.back()}
        accessibilityLabel="Go back"
        accessibilityRole="button">
        <SymbolView
          name={{
            ios: 'chevron.left',
            android: 'arrow_back',
            web: 'arrow_back',
          }}
          size={22}
          tintColor="#151C27"
          weight="semibold"
        />
      </Pressable>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
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
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#151C27',
  },
});
