import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  // Filter chat items based on search query, active tab, and filter chips
  const filteredChatItems = useMemo(() => {
    return MOCK_CHAT_MESSAGES.filter((item) => {
      // 1. Search Query filter
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchMessage = item.lastMessage.toLowerCase().includes(query);
        const matchMeta = item.metaText.toLowerCase().includes(query);
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
          <OnlineTravelersSection travelers={MOCK_ONLINE_TRAVELERS} />

          {/* 5. Filter Chips (Semua, Belum Dibaca, Favorit) */}
          <ChatFilterChips
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* 6. Chat Cards List */}
          <View style={styles.chatListContainer}>
            {filteredChatItems.map((item) => (
              <ChatItemCard key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
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
