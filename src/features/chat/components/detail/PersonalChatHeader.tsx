import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type PersonalChatHeaderProps = {
  name?: string;
  flagEmoji?: string;
  onCallPress?: () => void;
  onVideoPress?: () => void;
};

export function PersonalChatHeader({
  name = 'Kenji Sato',
  flagEmoji = '🇯🇵',
  onCallPress,
  onVideoPress,
}: PersonalChatHeaderProps) {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerBar}>
        {/* Left: Back button + Name */}
        <View style={styles.leftGroup}>
          <Pressable
            hitSlop={12}
            onPress={() => router.back()}
            style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}>
            <SymbolView
              name={{ ios: 'arrow.left', android: 'arrow_back', web: 'arrow_back' }}
              size={22}
              tintColor="#0F172A"
              weight="semibold"
            />
          </Pressable>

          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.flagText}>{flagEmoji}</Text>
          </View>
        </View>

        {/* Right: Phone & Video Call actions */}
        <View style={styles.actionsGroup}>
          <Pressable
            hitSlop={8}
            onPress={onCallPress}
            style={({ pressed }) => [styles.iconCircle, pressed && styles.buttonPressed]}>
            <SymbolView
              name={{ ios: 'phone.fill', android: 'call', web: 'call' }}
              size={18}
              tintColor="#0F172A"
              weight="medium"
            />
          </Pressable>

          <Pressable
            hitSlop={8}
            onPress={onVideoPress}
            style={({ pressed }) => [styles.iconCircle, pressed && styles.buttonPressed]}>
            <SymbolView
              name={{ ios: 'video.fill', android: 'videocam', web: 'videocam' }}
              size={18}
              tintColor="#0F172A"
              weight="medium"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  headerBar: {
    height: 56,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.6,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  flagText: {
    fontSize: 16,
  },
  actionsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
