import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { ChatMessageItem } from '../types';

type ChatItemCardProps = {
  item: ChatMessageItem;
  onPress?: () => void;
};

export function ChatItemCard({ item, onPress }: ChatItemCardProps) {
  const isCommunity = item.type === 'community';
  const hasUnread = (item.unreadCount ?? 0) > 0;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      {/* 1. Left Avatar Column */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: item.avatarUrl }}
          style={styles.avatar}
          contentFit="cover"
          transition={200}
        />

        {/* Personal: Flag Badge top-right */}
        {!isCommunity && item.countryFlag && (
          <View style={styles.flagBadge}>
            <Text style={styles.flagText}>{item.countryFlag}</Text>
          </View>
        )}

        {/* Personal: Online / Status dot bottom-right */}
        {!isCommunity && (
          <View
            style={[
              styles.statusDot,
              hasUnread ? styles.statusOnline : styles.statusOffline,
            ]}
          />
        )}

        {/* Community: Pax pill badge at bottom */}
        {isCommunity && item.membersCount && (
          <View style={styles.paxBadge}>
            <Text style={styles.paxText}>{item.membersCount} pax</Text>
          </View>
        )}
      </View>

      {/* 2. Right Content Column */}
      <View style={styles.contentCol}>
        {/* Row 1: Name, Flag Tag, and Timestamp */}
        <View style={styles.headerRow}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText} numberOfLines={1}>
              {item.name}
            </Text>
            {item.countryCode && (
              <View style={styles.countryCodeBadge}>
                <Text style={styles.countryCodeText}>{item.countryCode}</Text>
              </View>
            )}
          </View>
          <Text
            style={[
              styles.timeText,
              item.timeHighlight ? styles.timeHighlight : styles.timeMuted,
            ]}>
            {item.time}
          </Text>
        </View>

        {/* Row 2: Message preview */}
        <Text style={styles.messageText} numberOfLines={2}>
          {item.senderName ? (
            <Text style={styles.senderHighlight}>{item.senderName}: </Text>
          ) : null}
          {item.lastMessage}
        </Text>

        {/* Row 3: Meta Tag / Subtitle and Status (Unread badge / Checkmarks) */}
        <View style={styles.footerRow}>
          {/* Meta left */}
          <View style={styles.metaLeft}>
            {item.categoryTag && (
              <View
                style={[
                  styles.categoryPill,
                  { backgroundColor: item.categoryTag.bgColor },
                ]}>
                <Text
                  style={[
                    styles.categoryPillText,
                    { color: item.categoryTag.textColor },
                  ]}>
                  {item.categoryTag.label}
                </Text>
              </View>
            )}

            {item.metaIconType === 'location' && (
              <SymbolView
                name={{
                  ios: 'mappin.and.ellipse',
                  android: 'location_on',
                  web: 'location_on',
                }}
                size={12}
                tintColor="#0284C7"
              />
            )}
            {item.metaIconType === 'flight' && (
              <SymbolView
                name={{
                  ios: 'airplane',
                  android: 'flight',
                  web: 'flight',
                }}
                size={12}
                tintColor="#64748B"
              />
            )}
            {item.metaIconType === 'backpack' && (
              <SymbolView
                name={{
                  ios: 'bag.fill',
                  android: 'backpack',
                  web: 'backpack',
                }}
                size={12}
                tintColor="#64748B"
              />
            )}

            <Text
              style={[
                styles.metaText,
                item.metaIconType === 'location' && styles.metaLocationColor,
              ]}
              numberOfLines={1}>
              {item.metaText}
            </Text>
          </View>

          {/* Status right: Unread circle badge OR double checkmark */}
          {hasUnread ? (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          ) : (
            <View style={styles.readReceiptContainer}>
              <SymbolView
                name={{
                  ios: 'checkmark',
                  android: 'done_all',
                  web: 'done_all',
                }}
                size={15}
                tintColor="#64748B"
                weight="bold"
              />
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 14,
    marginBottom: 12,
    marginHorizontal: 20,
    flexDirection: 'row',
    gap: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  avatarContainer: {
    position: 'relative',
    width: 52,
    height: 52,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E2E8F0',
  },
  flagBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  flagText: {
    fontSize: 11,
    lineHeight: 14,
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
  },
  statusOnline: {
    backgroundColor: '#22C55E',
  },
  statusOffline: {
    backgroundColor: '#CBD5E1',
  },
  paxBadge: {
    position: 'absolute',
    bottom: -2,
    left: 4,
    right: 4,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    borderRadius: 8,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paxText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  contentCol: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
    marginRight: 8,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  countryCodeBadge: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 0.5,
  },
  countryCodeText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#475569',
  },
  timeText: {
    fontSize: 11,
    fontWeight: '500',
  },
  timeHighlight: {
    color: '#2563EB',
    fontWeight: '600',
  },
  timeMuted: {
    color: '#64748B',
  },
  messageText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
    marginBottom: 8,
  },
  senderHighlight: {
    fontWeight: '700',
    color: '#2563EB',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
    marginRight: 8,
  },
  categoryPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  categoryPillText: {
    fontSize: 10,
    fontWeight: '700',
  },
  metaText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '400',
  },
  metaLocationColor: {
    color: '#0284C7',
    fontWeight: '500',
  },
  unreadBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  readReceiptContainer: {
    paddingRight: 2,
  },
});
