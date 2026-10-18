import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ChatAIHeaderProps = {
  title?: string;
  onBack?: () => void;
};

export function ChatAIHeader({ title = 'Home', onBack }: ChatAIHeaderProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.navigate('/(tabs)');
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerBar}>
        <Pressable
          hitSlop={12}
          onPress={handleBack}
          style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}>
          <SymbolView
            name={{ ios: 'arrow.left', android: 'arrow_back', web: 'arrow_back' }}
            size={22}
            tintColor="#0F172A"
            weight="semibold"
          />
        </Pressable>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
  },
  headerBar: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  backButton: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.6,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
});
