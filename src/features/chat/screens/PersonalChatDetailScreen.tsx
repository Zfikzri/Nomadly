import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
  ChatInputBar,
  DateBadgePill,
  PersonalChatHeader,
  PersonalMessageBubble,
  VoiceNoteCard,
} from '../components';
import { MOCK_PERSONAL_CHAT_MESSAGES } from '../services/mockDetailData';
import type { PersonalDetailMessage } from '../types';

const SKY_SLICE_COUNT = 20;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(221 + (186 - 221) * t);
  const g = Math.round(240 + (226 - 240) * t);
  const b = Math.round(255 + (253 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function PersonalChatDetailScreen() {
  const [messages, setMessages] = useState<PersonalDetailMessage[]>(
    MOCK_PERSONAL_CHAT_MESSAGES
  );
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: PersonalDetailMessage = {
      id: `pm-${Date.now()}`,
      sender: 'me',
      text,
      time: '10:26',
      isReadReceipt: false,
    };
    setMessages((prev) => [...prev, newMessage]);
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <View style={styles.root}>
      {/* Sky Background Gradient */}
      <View style={styles.gradientContainer} pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      {/* Top Header */}
      <PersonalChatHeader
        name="Kenji Sato"
        flagEmoji="🇯🇵"
        onCallPress={() => {}}
        onVideoPress={() => {}}
      />

      {/* Messages ScrollView */}
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}>
        {/* Date Pill: Kemarin & Hari Ini */}
        <DateBadgePill text="Kemarin & Hari Ini" />

        {/* Message Items */}
        {messages.map((message) => {
          if (message.isVoiceNote) {
            return (
              <VoiceNoteCard
                key={message.id}
                avatarUrl={message.avatarUrl}
                duration={message.voiceDuration}
                voiceTitle={message.voiceTitle}
                transcription={message.transcription}
                time={message.time}
              />
            );
          }

          return <PersonalMessageBubble key={message.id} message={message} />;
        })}
      </ScrollView>

      {/* Floating Bottom Input Bar */}
      <ChatInputBar onSendMessage={handleSendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#DDF0FF',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});
