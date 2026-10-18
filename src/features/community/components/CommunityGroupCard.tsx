import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { CommunityGroup } from '../types';

type CommunityGroupCardProps = {
  group: CommunityGroup;
  onPress?: () => void;
};

export function CommunityGroupCard({ group, onPress }: CommunityGroupCardProps) {
  const { isZh } = useLanguage();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      {/* 1. Top Section: Avatar, Title, Time, Location/Members */}
      <View style={styles.topRow}>
        <Image
          source={{ uri: group.imageUrl }}
          style={styles.avatar}
          contentFit="cover"
          transition={200}
        />

        <View style={styles.topInfo}>
          {/* Title & Timestamp */}
          <View style={styles.titleRow}>
            <Text style={styles.titleText} numberOfLines={1}>
              {group.title}
            </Text>
            <Text style={styles.timeText}>{group.time}</Text>
          </View>

          {/* Subtitle: Location Pin / Members */}
          <View style={styles.subRow}>
            {group.locations && group.locations.length > 0 ? (
              <>
                <SymbolView
                  name={{
                    ios: 'mappin.and.ellipse',
                    android: 'location_on',
                    web: 'location_on',
                  }}
                  size={12}
                  tintColor="#0050D6"
                />
                <Text style={styles.locationText} numberOfLines={1}>
                  {group.locations.join(' • ')}
                </Text>
                <Text style={styles.dotSeparator}>•</Text>
                <Text style={styles.membersText}>{group.membersCount} {isZh ? '位成员' : 'Members'}</Text>
              </>
            ) : (
              <Text style={styles.membersText}>• {group.membersCount} {isZh ? '位成员' : 'Members'}</Text>
            )}
          </View>
        </View>
      </View>

      {/* 2. Chat Quote Bubble */}
      <View style={styles.quoteBubble}>
        <Text style={styles.quoteText}>
          <Text style={styles.senderText}>{group.lastMessage.sender}: </Text>
          &quot;{group.lastMessage.text}&quot;
        </Text>
      </View>

      {/* 3. Bottom Row: Region Pill + Feature Tag Pill + Unread Badge / Read Status */}
      <View style={styles.bottomRow}>
        {/* Left Pills */}
        <View style={styles.tagsContainer}>
          {/* Region Pill */}
          <View style={styles.regionPill}>
            {group.regionTag.iconEmoji ? (
              <Text style={styles.regionEmoji}>{group.regionTag.iconEmoji}</Text>
            ) : (
              <View style={styles.stripeIcon}>
                <View style={styles.stripeBar} />
                <View style={styles.stripeBar} />
              </View>
            )}
            <Text style={styles.regionLabel}>{group.regionTag.label}</Text>
          </View>

          {/* Feature Tag Pill */}
          <View
            style={[
              styles.featurePill,
              { backgroundColor: group.featureTag.bgColor },
            ]}>
            <SymbolView
              name={group.featureTag.iconName}
              size={12}
              tintColor={group.featureTag.textColor}
            />
            <Text
              style={[
                styles.featureLabel,
                { color: group.featureTag.textColor },
              ]}>
              {group.featureTag.label}
            </Text>
          </View>
        </View>

        {/* Right Status */}
        {group.unreadCount && group.unreadCount > 0 ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCountText}>{group.unreadCount}</Text>
          </View>
        ) : (
          <SymbolView
            name={{ ios: 'checkmark', android: 'done_all', web: 'done_all' }}
            size={16}
            tintColor="#94A3B8"
            weight="semibold"
          />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.99 }],
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
  },
  topInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  titleText: {
    flex: 1,
    fontSize: 15.5,
    fontWeight: '700',
    color: '#0F172A',
    marginRight: 6,
    letterSpacing: -0.2,
  },
  timeText: {
    fontSize: 11.5,
    fontWeight: '500',
    color: '#64748B',
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0050D6',
    flexShrink: 1,
  },
  dotSeparator: {
    fontSize: 12,
    color: '#94A3B8',
  },
  membersText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '400',
  },
  quoteBubble: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 12,
  },
  quoteText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#334155',
  },
  senderText: {
    fontWeight: '700',
    color: '#0F172A',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  regionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#F1F5F9',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4.5,
  },
  stripeIcon: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  stripeBar: {
    width: 2.5,
    height: 9,
    backgroundColor: '#475569',
    borderRadius: 1,
  },
  regionEmoji: {
    fontSize: 11,
  },
  regionLabel: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#334155',
  },
  featurePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4.5,
  },
  featureLabel: {
    fontSize: 11.5,
    fontWeight: '600',
  },
  unreadBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadCountText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
