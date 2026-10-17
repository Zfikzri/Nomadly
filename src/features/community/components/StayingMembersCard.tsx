import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import type { MemberAvatar } from '../types';

type StayingMembersCardProps = {
  title: string;
  subtitle: string;
  members: MemberAvatar[];
  remainingCountText: string;
};

export function StayingMembersCard({
  title,
  subtitle,
  members,
  remainingCountText,
}: StayingMembersCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>

      {/* Overlapping Avatars Row */}
      <View style={styles.avatarsRow}>
        {members.map((member, index) => (
          <View
            key={member.id}
            style={[
              styles.avatarWrapper,
              { zIndex: members.length - index },
            ]}>
            <Image
              source={{ uri: member.avatarUrl }}
              style={styles.avatarImage}
              contentFit="cover"
              cachePolicy="memory-disk"
            />

            {/* Indonesia Flag Badge at bottom right */}
            <View style={styles.flagBadge}>
              <View style={styles.flagRed} />
              <View style={styles.flagWhite} />
            </View>
          </View>
        ))}

        {/* Counter Badge (+13) */}
        <View style={[styles.counterBadge, { zIndex: 0 }]}>
          <Text style={styles.counterText}>{remainingCountText}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: '#F1F4FD',
    borderRadius: 22,
    padding: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#151C27',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
    marginBottom: 16,
  },
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: -10,
  },
  avatarImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    backgroundColor: '#E2E8F0',
  },
  flagBadge: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  flagRed: {
    flex: 1,
    backgroundColor: '#DC2626',
  },
  flagWhite: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  counterBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1D5BD8',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -10,
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
