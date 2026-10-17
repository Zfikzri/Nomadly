import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  AboutHubSection,
  ChooseRoomBottomBar,
  CommunityDetailHeader,
  CommunityHeroBanner,
  StayingMembersCard,
} from '../components';
import { getCommunityGroupDetail } from '../services/mockData';

type CommunityDetailScreenProps = {
  id?: string;
};

export function CommunityDetailScreen({ id = 'plan-1' }: CommunityDetailScreenProps) {
  const detail = getCommunityGroupDetail(id);
  const [isJoined, setIsJoined] = useState(false);

  const handleActionPress = () => {
    if (!isJoined) {
      setIsJoined(true);
      Alert.alert(
        'Berhasil Bergabung!',
        `Selamat! Kamu telah bergabung dengan ${detail.title}. Silakan pilih kamar atau mulai diskusi dengan sesama nomad.`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert('Info Komunitas', 'Kamu sudah terdaftar di komunitas ini.', [{ text: 'OK' }]);
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
