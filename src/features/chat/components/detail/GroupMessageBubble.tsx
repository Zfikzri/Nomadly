import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import type { GroupDetailMessage } from '../../types';

type GroupMessageBubbleProps = {
  message: GroupDetailMessage;
};

export function GroupMessageBubble({ message }: GroupMessageBubbleProps) {
  const isMe = message.senderType === 'me';

  if (isMe) {
    return (
      <View style={styles.outgoingContainer}>
        {/* Outgoing Header: 10:25 Kamu */}
        <View style={styles.outgoingHeader}>
          <Text style={styles.timeText}>{message.time} </Text>
          <Text style={styles.outgoingSenderName}>{message.senderName ?? 'Kamu'}</Text>
        </View>

        {/* Outgoing Bubble */}
        <View style={styles.outgoingBubble}>
          <Text style={styles.outgoingText}>{message.text}</Text>
        </View>

        {/* Status Receipt: Terkirim ✓✓ */}
        <View style={styles.receiptRow}>
          <Text style={styles.receiptText}>{message.statusReceipt ?? 'Terkirim'}</Text>
          <SymbolView
            name={{ ios: 'checkmark', android: 'done_all', web: 'done_all' }}
            size={12}
            tintColor="#0284C7"
            weight="bold"
          />
        </View>
      </View>
    );
  }

  // Incoming Member Message
  return (
    <View style={styles.incomingContainer}>
      <View style={styles.incomingRow}>
        {/* Avatar with Country Code badge */}
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: message.avatarUrl }}
            style={styles.avatar}
            contentFit="cover"
            transition={200}
          />
          {message.countryCode && (
            <View style={styles.countryCodeBadge}>
              <Text style={styles.countryCodeText}>[{message.countryCode}]</Text>
            </View>
          )}
        </View>

        <View style={styles.incomingCol}>
          {/* Header Row: Sender name, Role badge, and Time */}
          <View style={styles.memberHeaderRow}>
            <View style={styles.nameAndBadge}>
              <Text style={styles.memberName}>{message.senderName}</Text>
              {message.senderBadge && (
                <View
                  style={[
                    styles.roleBadge,
                    { backgroundColor: message.senderBadge.bgColor },
                  ]}>
                  <Text
                    style={[
                      styles.roleBadgeText,
                      { color: message.senderBadge.textColor },
                    ]}>
                    {message.senderBadge.label}
                  </Text>
                </View>
              )}
            </View>

            <Text style={styles.timeText}>{message.time}</Text>
          </View>

          {/* Message Bubble */}
          <View style={styles.incomingBubble}>
            <Text style={styles.incomingText}>{message.text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outgoingContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  outgoingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginRight: 4,
  },
  outgoingSenderName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
  },
  outgoingBubble: {
    backgroundColor: '#0050D6',
    borderRadius: 22,
    borderBottomRightRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: '82%',
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  outgoingText: {
    fontSize: 13.5,
    color: '#FFFFFF',
    lineHeight: 19,
  },
  receiptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 4,
    marginRight: 2,
  },
  receiptText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  incomingContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  incomingRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  avatarWrapper: {
    alignItems: 'center',
    width: 38,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#CBD5E1',
  },
  countryCodeBadge: {
    marginTop: -4,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 3,
    paddingVertical: 0.5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#CBD5E1',
  },
  countryCodeText: {
    fontSize: 8.5,
    fontWeight: '700',
    color: '#475569',
    letterSpacing: -0.5,
  },
  incomingCol: {
    flex: 1,
    maxWidth: '84%',
  },
  memberHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  nameAndBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  roleBadgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  timeText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  incomingBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderTopLeftRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  incomingText: {
    fontSize: 13.5,
    color: '#0F172A',
    lineHeight: 19,
  },
});
