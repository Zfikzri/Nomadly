import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type UserChatBubbleProps = {
  text: string;
  time?: string;
  isRead?: boolean;
};

export function UserChatBubble({
  text,
  time = '10:42 AM',
  isRead = true,
}: UserChatBubbleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.timeText}>{time}</Text>
        {isRead && (
          <SymbolView
            name={{ ios: 'checkmark', android: 'done_all', web: 'done_all' }}
            size={13}
            tintColor="#0284C7"
            weight="bold"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bubble: {
    backgroundColor: '#0050D6',
    borderRadius: 22,
    borderBottomRightRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: '84%',
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 13.5,
    color: '#FFFFFF',
    lineHeight: 19,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
    marginRight: 2,
  },
  timeText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
});
