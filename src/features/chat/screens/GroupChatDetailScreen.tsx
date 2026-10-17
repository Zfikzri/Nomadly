import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
  AITravelCard,
  ChatInputBar,
  DateBadgePill,
  GroupChatHeader,
  GroupMessageBubble,
} from '../components';
import { MOCK_GROUP_CHAT_MESSAGES } from '../services/mockDetailData';
import type { GroupDetailMessage } from '../types';

const SKY_SLICE_COUNT = 20;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(221 + (186 - 221) * t);
  const g = Math.round(240 + (226 - 240) * t);
  const b = Math.round(255 + (253 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function GroupChatDetailScreen() {
  const [messages, setMessages] = useState<GroupDetailMessage[]>(
    MOCK_GROUP_CHAT_MESSAGES
  );
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: GroupDetailMessage = {
      id: `gm-${Date.now()}`,
      senderType: 'me',
      senderName: 'Kamu',
      text,
      time: '10:26',
      statusReceipt: 'Terkirim',
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
      <GroupChatHeader title="Japan Group Chat" />

      {/* Messages ScrollView */}
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}>
        {/* Date Pill: HARI INI, 24 OKTOBER 2026 */}
        <DateBadgePill text="HARI INI, 24 OKTOBER 2026" />

        {/* Message Items & AI Cards */}
        {messages.map((message) => {
          if (message.senderType === 'ai' && message.aiRecommendation) {
            return (
              <AITravelCard
                key={message.id}
                recommendation={message.aiRecommendation}
                onPrimaryAction={() => {}}
                onSecondaryAction={() => {}}
              />
            );
          }

          return <GroupMessageBubble key={message.id} message={message} />;
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
