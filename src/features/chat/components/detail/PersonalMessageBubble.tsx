import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import type { PersonalDetailMessage } from '../../types';

type PersonalMessageBubbleProps = {
  message: PersonalDetailMessage;
};

export function PersonalMessageBubble({ message }: PersonalMessageBubbleProps) {
  const isMe = message.sender === 'me';

  if (isMe) {
    return (
      <View style={styles.outgoingContainer}>
        {/* Blue Bubble */}
        <View style={styles.outgoingBubble}>
          <Text style={styles.outgoingText}>{message.text}</Text>
        </View>

        {/* Timestamp & Read Receipt */}
        <View style={styles.outgoingMetaRow}>
          <Text style={styles.outgoingTimeText}>{message.time}</Text>
          {message.isReadReceipt && (
            <SymbolView
              name={{ ios: 'checkmark', android: 'done_all', web: 'done_all' }}
              size={13}
              tintColor="#2563EB"
              weight="bold"
            />
          )}
        </View>
      </View>
    );
  }

  // Incoming Message
  return (
    <View style={styles.incomingRow}>
      {/* Avatar at bottom left */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: message.avatarUrl }}
          style={styles.avatar}
          contentFit="cover"
          transition={200}
        />
      </View>

      <View style={styles.incomingCol}>
        {/* White Bubble */}
        <View style={styles.incomingBubble}>
          <Text style={styles.incomingText}>{message.text}</Text>
        </View>

        {/* Timestamp & Auto ID translation badge */}
        <View style={styles.incomingMetaRow}>
          <Text style={styles.incomingTimeText}>{message.time}</Text>
          {message.autoTranslateLabel && (
            <View style={styles.autoTranslateBadge}>
              <SymbolView
                name={{ ios: 'character.bubble', android: 'translate', web: 'translate' }}
                size={11}
                tintColor="#2563EB"
              />
              <Text style={styles.autoTranslateText}>{message.autoTranslateLabel}</Text>
            </View>
          )}
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
  outgoingMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
    marginRight: 2,
  },
  outgoingTimeText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  incomingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  avatarWrapper: {
    paddingBottom: 18,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#CBD5E1',
  },
  incomingCol: {
    flex: 1,
    maxWidth: '82%',
  },
  incomingBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderBottomLeftRadius: 6,
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
  incomingMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
    marginLeft: 4,
  },
  incomingTimeText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  autoTranslateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  autoTranslateText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2563EB',
  },
});
