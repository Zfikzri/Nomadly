import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useLanguage } from '@/i18n';
import { ProfilePopupModal } from '@/features/profile/components';
import { getOtherUserProfile } from '@/features/profile/services/otherUsersMock';
import type { OtherUserProfileData } from '@/features/profile/types';
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
  const { isZh } = useLanguage();
  const params = useLocalSearchParams<{ userId?: string; userName?: string }>();
  const [popupVisible, setPopupVisible] = useState(false);

  // Dynamic user profile resolution based on navigation params
  const profile: OtherUserProfileData = useMemo(() => {
    return getOtherUserProfile(params.userId ?? 'traveler-1');
  }, [params.userId]);

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

  const handleViewFullProfile = (p: OtherUserProfileData) => {
    setPopupVisible(false);
    router.push({
      pathname: '/user-profile/[id]',
      params: { id: p.id },
    } as any);
  };

  return (
    <View style={styles.root}>
      {/* Sky Background Gradient */}
      <View style={styles.gradientContainer} pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      {/* Top Header (Clickable profile to view popup) */}
      <PersonalChatHeader
        name={profile.name}
        flagEmoji={profile.countryFlag}
        avatarUrl={profile.avatarUrl}
        onProfilePress={() => setPopupVisible(true)}
        onCallPress={() => {}}
        onVideoPress={() => {}}
      />

      {/* Messages ScrollView */}
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}>
        {/* Date Pill: Yesterday & Today */}
        <DateBadgePill text={isZh ? '昨天与今天' : 'Yesterday & Today'} />

        {/* Message Items */}
        {messages.map((message) => {
          if (message.isVoiceNote) {
            return (
              <VoiceNoteCard
                key={message.id}
                avatarUrl={message.avatarUrl ?? profile.avatarUrl}
                duration={message.voiceDuration}
                voiceTitle={message.voiceTitle}
                transcription={message.transcription}
                time={message.time}
                onAvatarPress={() => setPopupVisible(true)}
              />
            );
          }

          return (
            <PersonalMessageBubble
              key={message.id}
              message={
                message.sender === 'other'
                  ? { ...message, avatarUrl: message.avatarUrl ?? profile.avatarUrl }
                  : message
              }
              onAvatarPress={() => setPopupVisible(true)}
            />
          );
        })}
      </ScrollView>

      {/* Floating Bottom Input Bar */}
      <ChatInputBar onSendMessage={handleSendMessage} />

      {/* ── Traveler Profile Popup Modal ── */}
      <ProfilePopupModal
        visible={popupVisible}
        profile={profile}
        onClose={() => setPopupVisible(false)}
        onMessage={() => setPopupVisible(false)}
        onViewProfile={handleViewFullProfile}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#DDF0FF',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFill,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});
