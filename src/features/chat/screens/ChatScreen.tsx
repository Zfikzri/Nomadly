import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfilePopupModal } from '@/features/profile/components';
import { getOtherUserProfile } from '@/features/profile/services/otherUsersMock';
import type { OtherUserProfileData } from '@/features/profile/types';
import {
  ChatFilterChips,
  ChatHeader,
  ChatItemCard,
  ChatSearchBar,
  ChatTabSegment,
  OnlineTravelersSection,
} from '../components';
import { MOCK_CHAT_MESSAGES, MOCK_ONLINE_TRAVELERS } from '../services/mockData';
import type { ChatFilterType, ChatTabType } from '../types';

// Sky gradient background slices (#DDF0FF ke #BAE2FD)
const SKY_SLICE_COUNT = 20;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(221 + (186 - 221) * t);
  const g = Math.round(240 + (226 - 240) * t);
  const b = Math.round(255 + (253 - 255) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function ChatScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<ChatTabType>('personal');
  const [activeFilter, setActiveFilter] = useState<ChatFilterType>('all');
  const [selectedProfile, setSelectedProfile] = useState<OtherUserProfileData | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleOpenProfilePopup = (userId: string) => {
    const profile = getOtherUserProfile(userId);
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

  const handleViewUserProfile = (profile: OtherUserProfileData) => {
    setPopupVisible(false);
    router.push({
      pathname: '/user-profile/[id]',
      params: { id: profile.id },
    } as any);
  };

  // Filter chat items based on search query, active tab, and filter chips
  const filteredChatItems = useMemo(() => {
    return MOCK_CHAT_MESSAGES.filter((item) => {
      // 1. Search Query filter
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchMessage = item.lastMessage.toLowerCase().includes(query);
        const matchMeta = item.metaText ? item.metaText.toLowerCase().includes(query) : false;
        if (!matchName && !matchMessage && !matchMeta) {
          return false;
        }
      }

      // 2. Tab filter (Personal shows all primary chats from mockup; Community shows groups)
      if (activeTab === 'community' && item.type !== 'community') {
        return false;
      }

      // 3. Status Chip filter
      if (activeFilter === 'unread') {
        return (item.unreadCount ?? 0) > 0;
      }
      if (activeFilter === 'favorite') {
        return item.isFavorite === true;
      }

      return true;
    });
  }, [searchQuery, activeTab, activeFilter]);

  return (
    <View style={styles.root}>
      {/* Background Gradient */}
      <View style={styles.gradientContainer} pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* 1. Header */}
          <ChatHeader />

          {/* 2. Search Bar */}
          <ChatSearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onClear={() => setSearchQuery('')}
          />

          {/* 3. Tab Segment (Personal vs Grup Komunitas) */}
          <ChatTabSegment
            activeTab={activeTab}
            onTabChange={setActiveTab}
            personalCount={2}
            communityCount={5}
          />

          {/* 4. Horizontal Online Travelers Section */}
          <OnlineTravelersSection
            travelers={MOCK_ONLINE_TRAVELERS}
            onTravelerPress={(traveler) => handleOpenProfilePopup(traveler.id)}
          />

          {/* 5. Filter Chips (Semua, Belum Dibaca, Favorit) */}
          <ChatFilterChips
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* 6. Chat Cards List */}
          <View style={styles.chatListContainer}>
            {filteredChatItems.map((item) => (
              <ChatItemCard
                key={item.id}
                item={item}
                onPress={() => {
                  if (item.type === 'community') {
                    router.push('/chat-group');
                  } else {
                    router.push({
                      pathname: '/chat-personal',
                      params: {
                        userId: item.userId ?? item.id,
                        userName: item.name,
                      },
                    } as any);
                  }
                }}
                onProfilePress={() => {
                  if (item.type !== 'community') {
                    handleOpenProfilePopup(item.userId ?? item.id);
                  }
                }}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* ── Traveler Profile Popup Modal ── */}
      <ProfilePopupModal
        visible={popupVisible}
        profile={selectedProfile}
        onClose={() => setPopupVisible(false)}
        onMessage={handleMessageUser}
        onViewProfile={handleViewUserProfile}
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
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 110, // Margin for FloatingTabBar
  },
  chatListContainer: {
    paddingBottom: 16,
  },
});
