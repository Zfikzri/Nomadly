import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';

type ChooseRoomBottomBarProps = {
  buttonText?: string;
  isJoined?: boolean;
  onPress?: () => void;
};

export function ChooseRoomBottomBar({
  buttonText = 'Choose Room',
  isJoined = false,
  onPress,
}: ChooseRoomBottomBarProps) {
  const insets = useSafeAreaInsets();
  const { isZh } = useLanguage();

  return (
    <View
      style={[
        styles.bottomBarContainer,
        { paddingBottom: Math.max(insets.bottom, 16) },
      ]}>
      <Pressable
        style={({ pressed }) => [
          styles.actionButton,
          isJoined && styles.actionButtonJoined,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={isJoined ? 'Joined community' : buttonText}>
        <Text style={styles.actionButtonText}>
          {isJoined
            ? isZh ? '已加入社群' : 'Joined Community'
            : isZh ? '选择房间' : buttonText}
        </Text>
        <SymbolView
          name={
            isJoined
              ? { ios: 'checkmark', android: 'check', web: 'check' }
              : { ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' }
          }
          size={16}
          tintColor="#FFFFFF"
          weight="bold"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingHorizontal: 20,
    paddingTop: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 8,
  },
  actionButton: {
    height: 52,
    backgroundColor: '#1D5BD8',
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#1D5BD8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonJoined: {
    backgroundColor: '#059669',
    shadowColor: '#059669',
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
