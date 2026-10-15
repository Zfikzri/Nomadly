import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

type ProfileAvatarSectionProps = {
  name: string;
  avatarUrl: string;
  nomadId: string;
  isVip: boolean;
  onEditPress?: () => void;
  onCameraPress?: () => void;
};

export function ProfileAvatarSection({
  name,
  avatarUrl,
  nomadId,
  isVip,
  onEditPress,
  onCameraPress,
}: ProfileAvatarSectionProps) {
  return (
    <View style={styles.container}>
      {/* Section title */}
      <Text style={styles.sectionTitle}>Profile</Text>

      {/* Avatar with glow ring + camera button */}
      <View style={styles.avatarArea}>
        {/* Sky-blue glow ring */}
        <View style={styles.avatarGlowRing}>
          <Image
            source={{ uri: avatarUrl }}
            style={styles.avatar}
            contentFit="cover"
          />
        </View>

        {/* Camera icon overlay */}
        <Pressable
          style={({ pressed }) => [styles.cameraButton, pressed && { opacity: 0.8 }]}
          onPress={onCameraPress}
          accessibilityLabel="Ganti foto profil">
          <SymbolView
            name={{ ios: 'camera.fill', android: 'photo_camera', web: 'photo_camera' } as any}
            size={16}
            tintColor="#FFFFFF"
          />
        </Pressable>
      </View>

      {/* Name */}
      <Text style={styles.name}>{name}</Text>

      {/* VIP + ID row */}
      <View style={styles.badgeRow}>
        {isVip && (
          <View style={styles.vipBadge}>
            <Text style={styles.vipDot}>●</Text>
            <Text style={styles.vipText}>VIP</Text>
          </View>
        )}
        <Text style={styles.idText}>ID: {nomadId}</Text>
      </View>

      {/* Edit Profil button — right-aligned */}
      <View style={styles.editButtonRow}>
        <Pressable
          style={({ pressed }) => [styles.editButton, pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] }]}
          onPress={onEditPress}
          accessibilityLabel="Edit profil">
          <SymbolView
            name={{ ios: 'pencil', android: 'edit', web: 'edit' } as any}
            size={14}
            tintColor="#FFFFFF"
          />
          <Text style={styles.editButtonText}>Edit Profil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.4,
    marginBottom: 18,
  },
  avatarArea: {
    position: 'relative',
    marginBottom: 14,
  },
  avatarGlowRing: {
    width: 116,
    height: 116,
    borderRadius: 58,
    backgroundColor: '#9BCDF8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4B9FEA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 8,
    // 3px border simulation
    padding: 3,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#E2E8F0',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  vipBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    gap: 4,
  },
  vipDot: {
    fontSize: 7,
    color: '#2563EB',
    lineHeight: 12,
  },
  vipText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563EB',
    letterSpacing: 0.5,
  },
  idText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  editButtonRow: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    marginTop: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#2563EB',
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 10,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 5,
  },
  editButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
