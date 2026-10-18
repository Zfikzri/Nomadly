import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n';
import type { UserProfile } from '../types';

type ProfileCardProps = {
  profile: UserProfile;
  onOpen?: () => void;
};

export function ProfileCard({ profile, onOpen }: ProfileCardProps) {
  const { strings, isZh } = useLanguage();

  const displayRole = profile.role === 'Mahasiswa'
    ? (isZh ? '学生' : 'Student Traveler')
    : profile.role;

  return (
    <View
      style={styles.card}
      className="bg-white rounded-3xl px-6 py-4 flex-row items-center mx-6 border border-slate-100 shadow-md">
      {/* Avatar Container with VIP badge */}
      <View style={styles.avatarWrapper} className="relative mr-4">
        <Image
          source={{ uri: profile.avatarUrl }}
          style={styles.avatar}
          className="w-[52px] h-[52px] rounded-full bg-slate-200"
          contentFit="cover"
        />
        {profile.isVip && (
          <View
            style={styles.vipBadge}
            className="absolute -bottom-0.5 -right-1 bg-blue-700 rounded-full px-1.5 py-0.5 border-[1.5px] border-white">
            <Text style={styles.vipText} className="text-white text-[9px] font-extrabold tracking-wider">
              VIP
            </Text>
          </View>
        )}
      </View>

      {/* User Info */}
      <View style={styles.infoWrapper} className="flex-1 justify-center gap-0.5">
        <View style={styles.nameRow} className="flex-row items-center gap-1.5 mb-0.5">
          <Text style={styles.name} className="text-[17px] font-bold text-slate-900">
            {profile.name}
          </Text>
          {profile.isOnline && (
            <View style={styles.onlineDot} className="w-2 h-2 rounded-full bg-green-500" />
          )}
        </View>
        <Text style={styles.metaText} className="text-xs text-slate-500 font-medium leading-[18px]">
          {profile.country}
        </Text>
        <Text style={styles.metaText} className="text-xs text-slate-500 font-medium leading-[18px]">
          {displayRole}
        </Text>
      </View>

      {/* Action Button */}
      <Pressable
        style={({ pressed }) => [styles.openButton, pressed && styles.buttonPressed]}
        className="bg-indigo-50 rounded-full px-4 py-2 items-center justify-center"
        onPress={onOpen}>
        <Text style={styles.openText} className="text-indigo-800 text-[13px] font-bold">
          {strings.home.open}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three + 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Spacing.four,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 5,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: Spacing.three,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E2E8F0',
  },
  vipBadge: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    backgroundColor: '#1D4ED8',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  vipText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'center',
    gap: 3,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
  },
  metaText: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
    fontWeight: '500',
  },
  openButton: {
    backgroundColor: '#EEF2FF',
    borderRadius: 20,
    paddingHorizontal: Spacing.three + 2,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  openText: {
    color: '#3730A3',
    fontSize: 13,
    fontWeight: '700',
  },
});
