import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Spacing } from '@/constants/theme';
import { MOCK_PROFILE_DATA } from '../services/mockData';
import {
  ProfileAvatarSection,
  ProfileCompletionCard,
  ProfileInfoSection,
} from '../components';

export function ProfileScreen() {
  const profile = MOCK_PROFILE_DATA;

  const handleCompleteProfile = () => {
    Alert.alert(
      'Lengkapi Profil',
      'Anda akan diarahkan ke form pengisian profil lengkap untuk mendapatkan rekomendasi finansial yang akurat.',
      [{ text: 'Mulai Sekarang', style: 'default' }, { text: 'Nanti', style: 'cancel' }]
    );
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profil', 'Fitur edit profil akan segera hadir. (Coming soon)');
  };

  const handleCameraPress = () => {
    Alert.alert('Ganti Foto', 'Pilih foto dari galeri atau kamera. (Coming soon)');
  };

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* ── Header bar ── */}
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [styles.backButton, pressed && { opacity: 0.6 }]}
            onPress={() => router.back()}
            accessibilityLabel="Kembali ke Home">
            <SymbolView
              name={{ ios: 'chevron.left', android: 'chevron_left', web: 'chevron_left' } as any}
              size={18}
              tintColor="#0F172A"
            />
          </Pressable>
          <Text style={styles.headerTitle}>Home</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* ── 1. Profile Completion Card ── */}
          <ProfileCompletionCard
            percent={profile.completionPercent}
            hint={profile.completionHint}
          />

          {/* ── 2. "Lengkapi Profil" CTA Button ── */}
          <View style={styles.ctaWrapper}>
            <Pressable
              style={({ pressed }) => [
                styles.ctaButton,
                pressed && styles.ctaButtonPressed,
              ]}
              onPress={handleCompleteProfile}
              accessibilityLabel="Lengkapi profil saya">
              <SymbolView
                name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' } as any}
                size={18}
                tintColor="#FFFFFF"
              />
              <Text style={styles.ctaButtonText}>Lengkapi Profil</Text>
            </Pressable>
          </View>

          {/* ── 3. Avatar + Name + VIP + Edit Button ── */}
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

  // "Lengkapi Profil" CTA
  ctaWrapper: {
    paddingHorizontal: 20,
    marginTop: 14,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2563EB',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 6,
  },
  ctaButtonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  ctaButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.1,
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
