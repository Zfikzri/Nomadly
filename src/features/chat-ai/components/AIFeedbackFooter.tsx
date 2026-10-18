import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type AIFeedbackFooterProps = {
  timestamp: string;
  engineVersion: string;
};

export function AIFeedbackFooter({
  timestamp,
  engineVersion,
}: AIFeedbackFooterProps) {
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.engineText}>
        {timestamp} • {engineVersion}
      </Text>

      <View style={styles.actionsRow}>
        {/* Thumbs up */}
        <Pressable
          hitSlop={6}
          onPress={() => setFeedback(feedback === 'up' ? null : 'up')}
          style={({ pressed }) => [styles.iconBtn, pressed && styles.btnPressed]}>
          <SymbolView
            name={{
              ios: feedback === 'up' ? 'hand.thumbsup.fill' : 'hand.thumbsup',
              android: feedback === 'up' ? 'thumb_up' : 'thumb_up_off_alt',
              web: feedback === 'up' ? 'thumb_up' : 'thumb_up_off_alt',
            }}
            size={13}
            tintColor={feedback === 'up' ? '#0050D6' : '#64748B'}
          />
        </Pressable>

        {/* Thumbs down */}
        <Pressable
          hitSlop={6}
          onPress={() => setFeedback(feedback === 'down' ? null : 'down')}
          style={({ pressed }) => [styles.iconBtn, pressed && styles.btnPressed]}>
          <SymbolView
            name={{
              ios: feedback === 'down' ? 'hand.thumbsdown.fill' : 'hand.thumbsdown',
              android: feedback === 'down' ? 'thumb_down' : 'thumb_down_off_alt',
              web: feedback === 'down' ? 'thumb_down' : 'thumb_down_off_alt',
            }}
            size={13}
            tintColor={feedback === 'down' ? '#EF4444' : '#64748B'}
          />
        </Pressable>

        {/* Copy */}
        <Pressable
          hitSlop={6}
          onPress={handleCopy}
          style={({ pressed }) => [styles.iconBtn, pressed && styles.btnPressed]}>
          <SymbolView
            name={{
              ios: copied ? 'checkmark' : 'doc.on.doc',
              android: copied ? 'check' : 'content_copy',
              web: copied ? 'check' : 'content_copy',
            }}
            size={13}
            tintColor={copied ? '#16A34A' : '#64748B'}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginHorizontal: 4,
    marginBottom: 16,
  },
  engineText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 3,
  },
  btnPressed: {
    opacity: 0.6,
  },
});
