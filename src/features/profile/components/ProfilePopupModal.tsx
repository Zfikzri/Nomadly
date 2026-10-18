import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '@/i18n';

import type { OtherUserProfileData } from '../types';

type ProfilePopupModalProps = {
  visible: boolean;
  profile: OtherUserProfileData | null;
  onClose: () => void;
  onMessage: (profile: OtherUserProfileData) => void;
  onViewProfile: (profile: OtherUserProfileData) => void;
};

export function ProfilePopupModal({
  visible,
  profile,
  onClose,
  onMessage,
  onViewProfile,
}: ProfilePopupModalProps) {
  const { strings } = useLanguage();

  if (!profile) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        {/* Modal Card Content */}
        <Pressable style={styles.card} onPress={(e) => e.stopPropagation()}>
          {/* Close Button X */}
          <Pressable
            hitSlop={10}
            style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}
            onPress={onClose}>
            <SymbolView
              name={{ ios: 'xmark', android: 'close', web: 'close' }}
              size={14}
              tintColor="#64748B"
            />
          </Pressable>

          {/* Avatar Section */}
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

            {/* Online Status Dot */}
            {profile.isOnline && <View style={styles.onlineDot} />}
          </View>

          {/* Name & Location only (no VIP, no ID, no sub-info, no bio, no tags) */}
          <View style={styles.infoWrapper}>
            <Text style={styles.nameText} numberOfLines={1}>
              {profile.name}
            </Text>
            <Text style={styles.locationText}>
              📍 {profile.city}, {profile.country}
            </Text>
          </View>

          {/* Action Buttons: Message & View Profile */}
          <View style={styles.actionRow}>
            {/* 1. Message Button */}
            <Pressable
              style={({ pressed }) => [
                styles.messageButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => onMessage(profile)}>
              <SymbolView
                name={{
                  ios: 'bubble.left.and.bubble.right.fill',
                  android: 'chat',
                  web: 'chat',
                }}
                size={16}
                tintColor="#1D4ED8"
              />
              <Text style={styles.messageButtonText}>{strings.profile.message}</Text>
            </Pressable>

            {/* 2. View Profile Button */}
            <Pressable
              style={({ pressed }) => [
                styles.viewProfileButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => onViewProfile(profile)}>
              <SymbolView
                name={{
                  ios: 'person.crop.circle.fill',
                  android: 'person',
                  web: 'person',
                }}
                size={16}
                tintColor="#FFFFFF"
              />
              <Text style={styles.viewProfileButtonText}>{strings.profile.viewProfile}</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingTop: 26,
    paddingBottom: 22,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 14,
  },
  avatarGlowRing: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#9BCDF8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E2E8F0',
  },
  flagBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  flagEmoji: {
    fontSize: 14,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#22C55E',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  infoWrapper: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
    marginBottom: 4,
    textAlign: 'center',
  },
  locationText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  messageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#EEF4FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    paddingVertical: 12,
    borderRadius: 16,
  },
  messageButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  viewProfileButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  viewProfileButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
});
