import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useLanguage } from '@/i18n';
import { ProfilePopupModal } from '@/features/profile/components';
import { getOtherUserProfile } from '@/features/profile/services/otherUsersMock';
import type { OtherUserProfileData } from '@/features/profile/types';
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
  const { isZh } = useLanguage();
  const [messages, setMessages] = useState<GroupDetailMessage[]>(
    MOCK_GROUP_CHAT_MESSAGES
  );
  const [selectedProfile, setSelectedProfile] = useState<OtherUserProfileData | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: GroupDetailMessage = {
      id: `gm-${Date.now()}`,
      senderType: 'me',
      senderName: isZh ? '你' : 'You',
      text,
      time: '10:26',
      statusReceipt: isZh ? '已发送' : 'Sent',
    };
    setMessages((prev) => [...prev, newMessage]);
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const handleMemberAvatarPress = (message: GroupDetailMessage) => {
    const nameLower = (message.senderName ?? '').toLowerCase();
    let targetUserId = 'traveler-1';
    if (nameLower.includes('sarah')) {
      targetUserId = 'traveler-2';
    } else if (nameLower.includes('budi') || nameLower.includes('david')) {
      targetUserId = 'budi';
    } else if (nameLower.includes('kenji')) {
      targetUserId = 'traveler-1';
    }
    const profile = getOtherUserProfile(targetUserId);
    setSelectedProfile(profile);
    setPopupVisible(true);
  };

  const handleMessageUser = (profile: OtherUserProfileData) => {
    setPopupVisible(false);
    router.push({
      pathname: '/chat-personal',
      params: {
        userId: profile.id,
        userName: profile.name,
      },
    } as any);
  };

  const handleViewProfile = (profile: OtherUserProfileData) => {
    setPopupVisible(false);
    router.push({
      pathname: '/user-profile/[id]',
      params: { id: profile.id },
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

      {/* Top Header */}
      <GroupChatHeader title={isZh ? '日本游民群组' : 'Japan Group Chat'} />

      {/* Messages ScrollView */}
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}>
        {/* Date Pill: Today */}
        <DateBadgePill text={isZh ? '今天，2026年10月24日' : 'TODAY, OCTOBER 24, 2026'} />

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

          return (
            <GroupMessageBubble
              key={message.id}
              message={message}
              onAvatarPress={handleMemberAvatarPress}
            />
          );
        })}
      </ScrollView>

      {/* Floating Bottom Input Bar */}
      <ChatInputBar onSendMessage={handleSendMessage} />

      {/* ── Group Member Profile Popup Modal ── */}
      <ProfilePopupModal
        visible={popupVisible}
        profile={selectedProfile}
        onClose={() => setPopupVisible(false)}
        onMessage={handleMessageUser}
        onViewProfile={handleViewProfile}
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
    ...StyleSheet.absoluteFillObject,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});
