import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AICompanionBanner,
  AIResponseCard,
  ChatAIEmptyState,
  ChatAIInputBar,
  SuggestedQuestionsBar,
  UserChatBubble,
} from '../components';
import {
  MOCK_SHINJUKU_AI_RESPONSE,
  SUGGESTED_QUESTIONS,
} from '../services/mockData';
import type { ChatMessage, SuggestedQuestion } from '../types';

// Signature Nomadly sky gradient (#D8EEFF ke #9BCDF8) matching HomeScreen
const SKY_SLICE_COUNT = 24;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(216 + (155 - 216) * t);
  const g = Math.round(238 + (205 - 238) * t);
  const b = Math.round(255 + (248 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function ChatAIScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

  const handleSendMessage = (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      time: '10:42 AM',
      isReadReceipt: true,
    };

    const aiMessage: ChatMessage = {
      id: `msg-ai-${Date.now() + 1}`,
      sender: 'ai',
      time: '10:42 AM',
      aiResponse: MOCK_SHINJUKU_AI_RESPONSE,
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 120);
  };

  const handleSelectSuggestedQuestion = (item: SuggestedQuestion) => {
    handleSendMessage(item.text);
  };

  return (
    <View style={styles.root}>
      {/* Sky pastel gradient background */}
      <View style={styles.gradientContainer} pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      {/* Top AI Companion Card Banner with Safe Area Inset */}
      <View style={{ paddingTop: insets.top + 6 }}>
        <AICompanionBanner />
      </View>

      {/* Main Content Area */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {messages.length === 0 ? (
          /* Empty state: welcome & starter prompts */
          <ChatAIEmptyState
            userName="Alex"
            onSelectPrompt={handleSendMessage}
          />
        ) : (
          /* Active conversation view */
          <View style={styles.chatList}>
            {messages.map((msg) => {
              if (msg.sender === 'user' && msg.text) {
                return (
                  <UserChatBubble
                    key={msg.id}
                    text={msg.text}
                    time={msg.time}
                    isRead={msg.isReadReceipt}
                  />
                );
              }
              if (msg.sender === 'ai' && msg.aiResponse) {
                return (
                  <AIResponseCard
                    key={msg.id}
                    data={msg.aiResponse}
                  />
                );
              }
              return null;
            })}

            {/* Horizontal Suggested Questions */}
            <SuggestedQuestionsBar
              questions={SUGGESTED_QUESTIONS}
              onSelectQuestion={handleSelectSuggestedQuestion}
            />
          </View>
        )}
      </ScrollView>

      {/* Floating Bottom Input Bar */}
      <ChatAIInputBar onSend={handleSendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#D8EEFF',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFill,
    zIndex: -1,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  chatList: {
    flex: 1,
  },
});
