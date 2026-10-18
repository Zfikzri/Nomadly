import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';

type PersonalChatHeaderProps = {
  name?: string;
  flagEmoji?: string;
  avatarUrl?: string;
  onProfilePress?: () => void;
  onCallPress?: () => void;
  onVideoPress?: () => void;
};

export function PersonalChatHeader({
  name = 'Kenji Sato',
  flagEmoji = '🇯🇵',
  avatarUrl,
  onProfilePress,
  onCallPress,
  onVideoPress,
}: PersonalChatHeaderProps) {
  const { isZh } = useLanguage();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerBar}>
        {/* Left: Back button + Avatar + Name (Clickable for profile popup) */}
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

          <Pressable
            onPress={onProfilePress}
            style={({ pressed }) => [styles.profileSection, pressed && styles.buttonPressed]}>
            {avatarUrl ? (
              <View style={styles.avatarWrapper}>
                <Image
                  source={{ uri: avatarUrl }}
                  style={styles.headerAvatar}
                  contentFit="cover"
                  transition={200}
                />
                <View style={styles.onlineDot} />
              </View>
            ) : null}

            <View style={styles.titleWrapper}>
              <View style={styles.nameRow}>
                <Text style={styles.titleText} numberOfLines={1}>{name}</Text>
                <Text style={styles.flagText}>{flagEmoji}</Text>
              </View>
              <Text style={styles.statusSubtitle}>
                {isZh ? '在线 • 点击查看资料' : 'Online • Tap to view profile'}
              </Text>
            </View>
          </Pressable>
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
    gap: 8,
    flex: 1,
  },
  backButton: {
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.6,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  avatarWrapper: {
    position: 'relative',
  },
  headerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E2E8F0',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  flagText: {
    fontSize: 14,
  },
  statusSubtitle: {
    fontSize: 11,
    color: '#16A34A',
    fontWeight: '600',
    marginTop: 1,
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
