import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { ChatTabType } from '../types';

type ChatTabSegmentProps = {
  activeTab: ChatTabType;
  onTabChange: (tab: ChatTabType) => void;
  personalCount?: number;
  communityCount?: number;
};

export function ChatTabSegment({
  activeTab,
  onTabChange,
  personalCount = 2,
  communityCount = 5,
}: ChatTabSegmentProps) {
  const { isZh } = useLanguage();
  const isPersonal = activeTab === 'personal';
  const isCommunity = activeTab === 'community';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onTabChange('personal')}
        style={[styles.tabButton, isPersonal && styles.activeTabButton]}>
        <Text style={[styles.tabLabel, isPersonal && styles.activeTabLabel]}>
          {isZh ? '个人私信' : 'Personal'}
        </Text>
        <View style={[styles.badge, isPersonal ? styles.activeBadge : styles.inactiveBadge]}>
          <Text style={[styles.badgeText, isPersonal ? styles.activeBadgeText : styles.inactiveBadgeText]}>
            {personalCount}
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={() => onTabChange('community')}
        style={[styles.tabButton, isCommunity && styles.activeTabButton]}>
        <Text style={[styles.tabLabel, isCommunity && styles.activeTabLabel]}>
          {isZh ? '社群小组' : 'Community'}
        </Text>
        <View style={[styles.badge, isCommunity ? styles.activeBadge : styles.inactiveBadge]}>
          <Text style={[styles.badgeText, isCommunity ? styles.activeBadgeText : styles.inactiveBadgeText]}>
            {communityCount}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#DCEBFA',
    borderRadius: 24,
    padding: 3,
    height: 44,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    gap: 6,
    paddingVertical: 6,
  },
  activeTabButton: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#475569',
  },
  activeTabLabel: {
    fontWeight: '700',
    color: '#0F172A',
  },
  badge: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  activeBadge: {
    backgroundColor: '#0050D6',
  },
  inactiveBadge: {
    backgroundColor: '#CBD5E1',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  activeBadgeText: {
    color: '#FFFFFF',
  },
  inactiveBadgeText: {
    color: '#475569',
  },
});
