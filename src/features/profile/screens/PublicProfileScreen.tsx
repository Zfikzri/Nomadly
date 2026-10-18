import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';
import { getOtherUserProfile } from '../services/otherUsersMock';
import type { OtherUserProfileData } from '../types';

type PublicProfileScreenProps = {
  userId?: string;
  userProfile?: OtherUserProfileData;
};

export function PublicProfileScreen({ userId, userProfile }: PublicProfileScreenProps) {
  const { strings, isZh } = useLanguage();
  const profile = userProfile || getOtherUserProfile(userId || 'traveler-1', isZh);

  const handleMessage = () => {
    router.push({
      pathname: '/chat-personal',
      params: {
        userId: profile.id,
        userName: profile.name,
      },
    } as any);
  };

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* ── Top Header bar ── */}
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
          <Text style={styles.headerTitle}>{isZh ? '旅行者主页' : 'Traveler Profile'}</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* ── Avatar Section with Message CTA ── */}
          <View style={styles.avatarSection}>
            {/* Avatar Glow Ring */}
            <View style={styles.avatarContainer}>
              <View style={styles.avatarGlowRing}>
                <Image
                  source={{ uri: profile.avatarUrl }}
                  style={styles.avatar}
                  contentFit="cover"
                  transition={200}
                />
              </View>

              {/* Country Flag Badge */}
              <View style={styles.flagBadge}>
                <Text style={styles.flagEmoji}>{profile.countryFlag}</Text>
              </View>

              {/* Online Indicator */}
              {profile.isOnline && <View style={styles.onlineDot} />}
            </View>

            {/* Traveler Name */}
            <Text style={styles.userName}>{profile.name}</Text>

            {/* Location */}
            <Text style={styles.locationText}>
              📍 {profile.city}, {profile.country}
            </Text>

            {/* Quick Action: Message Button */}
            <Pressable
              style={({ pressed }) => [
                styles.messageButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleMessage}>
              <SymbolView
                name={{
                  ios: 'bubble.left.and.bubble.right.fill',
                  android: 'chat',
                  web: 'chat',
                } as any}
                size={16}
                tintColor="#FFFFFF"
              />
              <Text style={styles.messageButtonText}>{strings.profile.message}</Text>
            </Pressable>
          </View>

          {/* ── White Sheet: Traveler Basic Info ── */}
          <View style={styles.whiteSheet}>
            <Text style={styles.sheetTitle}>{isZh ? '旅行者档案' : 'Traveler Info'}</Text>

            {/* 1. Full Name */}
            <View style={styles.fieldWrapper}>
              <Text style={styles.fieldLabel}>{strings.profile.fullName}</Text>
              <View style={styles.fieldBox}>
                <SymbolView
                  name={{ ios: 'person.fill', android: 'person', web: 'person' } as any}
                  size={16}
                  tintColor="#64748B"
                />
                <Text style={styles.fieldValue}>{profile.name}</Text>
              </View>
            </View>

            {/* 2. Residence / Country */}
            <View style={styles.fieldWrapper}>
              <Text style={styles.fieldLabel}>{strings.profile.residenceCountry}</Text>
              <View style={styles.fieldBox}>
                <Text style={styles.inlineEmoji}>{profile.countryFlag}</Text>
                <Text style={styles.fieldValue}>
                  {profile.city}, {profile.country} ({profile.countryCode})
                </Text>
              </View>
            </View>

            {/* 3. Gender & Age */}
            <View style={styles.twoColumnRow}>
              {/* Gender */}
              <View style={[styles.fieldWrapper, { flex: 1 }]}>
                <Text style={styles.fieldLabel}>{strings.profile.gender}</Text>
                <View style={styles.fieldBox}>
                  <SymbolView
                    name={{
                      ios:
                        profile.gender === 'female'
                          ? 'figure.dress.line.vertical.figure'
                          : 'figure.stand',
                      android: 'person',
                      web: 'person',
                    } as any}
                    size={16}
                    tintColor="#64748B"
                  />
                  <Text style={styles.fieldValue}>
                    {profile.gender === 'male' ? (isZh ? '男士' : 'Male') : (isZh ? '女士' : 'Female')}
                  </Text>
                </View>
              </View>

              {/* Age */}
              <View style={[styles.fieldWrapper, { flex: 1 }]}>
                <Text style={styles.fieldLabel}>{isZh ? '年龄' : 'Age'}</Text>
                <View style={styles.fieldBox}>
                  <SymbolView
                    name={{ ios: 'calendar', android: 'calendar_today', web: 'calendar_today' } as any}
                    size={16}
                    tintColor="#64748B"
                  />
                  <Text style={styles.fieldValue}>{profile.age} {strings.profile.yearsOld}</Text>
                </View>
              </View>
            </View>

            {/* 4. Community Hubs */}
            {profile.communityHubs && profile.communityHubs.length > 0 && (
              <View style={styles.fieldWrapper}>
                <Text style={styles.fieldLabel}>Community Hub</Text>
                <View style={styles.communityList}>
                  {profile.communityHubs.map((hub, idx) => (
                    <View key={idx} style={styles.communityCard}>
                      <View style={styles.communityIconWrap}>
                        <SymbolView
                          name={{
                            ios: 'person.3.sequence.fill',
                            android: 'groups',
                            web: 'groups',
                          } as any}
                          size={14}
                          tintColor="#2563EB"
                        />
                      </View>
                      <Text style={styles.communityText}>{hub}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Bottom spacing */}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 12,
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
  scrollContent: {
    paddingBottom: 24,
  },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatarGlowRing: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#9BCDF8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E2E8F0',
  },
  flagBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flagEmoji: {
    fontSize: 16,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#22C55E',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  locationText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 16,
    textAlign: 'center',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    minWidth: 160,
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  whiteSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 18,
    letterSpacing: -0.2,
  },
  fieldWrapper: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 7,
    letterSpacing: 0.1,
  },
  fieldBox: {
    backgroundColor: '#F0F4FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  fieldValue: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
  },
  inlineEmoji: {
    fontSize: 16,
  },
  twoColumnRow: {
    flexDirection: 'row',
    gap: 12,
  },
  communityList: {
    gap: 8,
  },
  communityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  communityIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E293B',
  },
  bottomSpacer: {
    height: 20,
  },
});
