import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n';
import { MOCK_PROFILE_DATA } from '../services/mockData';
import {
  ProfileAvatarSection,
  ProfileCompletionCard,
  ProfileInfoSection,
} from '../components';

export function ProfileScreen() {
  const { strings, isZh } = useLanguage();
  const profile = MOCK_PROFILE_DATA;

  const handleCompleteProfile = () => {
    router.push('/complete-profile' as any);
  };

  const handleEditProfile = () => {
    router.push('/edit-profile' as any);
  };

  const handleCameraPress = () => {
    Alert.alert(
      isZh ? '更换头像' : 'Change Avatar',
      isZh ? '从相册选择或拍照上传（即将推出）。' : 'Choose a photo from gallery or camera. (Coming soon)'
    );
  };

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* ── Header bar ── */}
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [styles.backButton, pressed && { opacity: 0.6 }]}
            onPress={() => router.back()}
            accessibilityLabel={strings.common.back}>
            <SymbolView
              name={{ ios: 'chevron.left', android: 'chevron_left', web: 'chevron_left' } as any}
              size={18}
              tintColor="#0F172A"
            />
          </Pressable>
          <Text style={styles.headerTitle}>{strings.common.back}</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* ── 1. Profile Completion Card with integrated compact CTA ── */}
          <ProfileCompletionCard
            percent={profile.completionPercent}
            hint={profile.completionHint}
            onComplete={handleCompleteProfile}
          />

          {/* ── 2. Avatar + Name + VIP + Edit Button ── */}
          <ProfileAvatarSection
            name={profile.name}
            avatarUrl={profile.avatarUrl}
            nomadId={profile.nomadId}
            isVip={profile.isVip}
            onEditPress={handleEditProfile}
            onCameraPress={handleCameraPress}
          />

          {/* ── 4. White sheet — Informasi Pribadi ── */}
          <View style={styles.whiteSheet}>
            <ProfileInfoSection profile={profile} />
          </View>

          {/* Bottom spacer for floating nav bar */}
          <View style={styles.bottomSpacer} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F0F3FF',
  },
  safeArea: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 10,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.2,
  },

  // Scroll
  scrollContent: {
    paddingBottom: 20,
  },

  // White surface sheet for Informasi Pribadi
  whiteSheet: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 0,
    marginTop: 16,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: Spacing.four,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  bottomSpacer: {
    height: Spacing.six + 40,
  },
});
