import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';
import { ProfilePopupModal } from '@/features/profile/components';
import { getOtherUserProfile } from '@/features/profile/services/otherUsersMock';
import type { OtherUserProfileData } from '@/features/profile/types';
import {
  AboutHubSection,
  ChooseRoomBottomBar,
  CommunityDetailHeader,
  CommunityHeroBanner,
  StayingMembersCard,
} from '../components';
import { getCommunityGroupDetail } from '../services/mockData';
import type { MemberAvatar } from '../types';

type CommunityDetailScreenProps = {
  id?: string;
};

export function CommunityDetailScreen({ id = 'plan-1' }: CommunityDetailScreenProps) {
  const { strings, isZh } = useLanguage();
  const detail = getCommunityGroupDetail(id);
  const [isJoined, setIsJoined] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<OtherUserProfileData | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleMemberPress = (member: MemberAvatar) => {
    const profile = getOtherUserProfile(member.id);
    setSelectedProfile(profile);
    setPopupVisible(true);
  };

  const handleMessage = (profile: OtherUserProfileData) => {
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

  const handleActionPress = () => {
    if (!isJoined) {
      setIsJoined(true);
      Alert.alert(
        isZh ? '加入社群成功！' : 'Successfully Joined!',
        isZh
          ? `恭喜！您已加入 ${detail.title}。请选择房间或开始与游民伙伴交流。`
          : `Congratulations! You have joined ${detail.title}. Feel free to select your room or chat with fellow nomads.`,
        [{ text: strings.common.done }]
      );
    } else {
      Alert.alert(
        isZh ? '社群提示' : 'Community Notice',
        isZh ? '您已是该社群成员。' : 'You are already registered in this community.',
        [{ text: strings.common.done }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* Top Header */}
        <CommunityDetailHeader title={detail.title} />

        {/* Scrollable Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* Hero Image Banner */}
          <CommunityHeroBanner imageUrl={detail.heroImageUrl} />

          {/* Group Title */}
          <Text style={styles.groupTitle}>{detail.title}</Text>

          {/* See who's staying here Card */}
          <StayingMembersCard
            title={detail.stayingCard.title}
            subtitle={detail.stayingCard.subtitle}
            members={detail.stayingCard.members}
            remainingCountText={detail.stayingCard.remainingCountText}
            onMemberPress={handleMemberPress}
          />

          {/* About the Hub Section */}
          <AboutHubSection
            title={detail.about.title}
            description={detail.about.description}
          />
        </ScrollView>

        {/* Fixed Bottom Action Bar */}
        <ChooseRoomBottomBar
          buttonText={detail.actionButtonText}
          isJoined={isJoined}
          onPress={handleActionPress}
        />
      </SafeAreaView>

      {/* ── Traveler Profile Popup Modal ── */}
      <ProfilePopupModal
        visible={popupVisible}
        profile={selectedProfile}
        onClose={() => setPopupVisible(false)}
        onMessage={handleMessage}
        onViewProfile={handleViewProfile}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 110, // Space for fixed bottom action bar
  },
  groupTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#151C27',
    marginHorizontal: 16,
    marginTop: 18,
  },
});
