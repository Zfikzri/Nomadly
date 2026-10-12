import { StyleSheet, View } from 'react-native';

import { ScreenContainer } from '@/components/layout';
import { Button, ThemedText, ThemedView } from '@/components/ui';
import { Spacing } from '@/constants/theme';
import { MOCK_HERO_BANNER } from '@/features/home/services/mockData';

export function HomeScreen() {
  return (
    <ScreenContainer scrollable>
      {/* Header Placeholder */}
      <View style={styles.header}>
        <View>
          <ThemedText type="small" themeColor="textSecondary">
            Welcome back,
          </ThemedText>
          <ThemedText type="subtitle">Nomad Traveler</ThemedText>
        </View>
      </View>

      {/* Hero Banner Placeholder (Ready for image slicing) */}
      <ThemedView type="backgroundElement" style={styles.heroBanner}>
        <ThemedText type="title" style={styles.bannerTitle}>
          {MOCK_HERO_BANNER.title}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary" style={styles.bannerSubtitle}>
          {MOCK_HERO_BANNER.subtitle}
        </ThemedText>
        <Button
          title="Explore Destinations"
          variant="primary"
          style={styles.bannerButton}
          onPress={() => {}}
        />
      </ThemedView>

      {/* Content Section Placeholder */}
      <View style={styles.sectionHeader}>
        <ThemedText type="subtitle">Popular Stays</ThemedText>
        <ThemedText type="linkPrimary">View all</ThemedText>
      </View>

      <ThemedView type="backgroundElement" style={styles.placeholderCard}>
        <ThemedText type="small" themeColor="textSecondary">
          Siap untuk slicing desain Home. Aset gambar & layout detail akan diimplementasikan setelah desain diterima.
        </ThemedText>
      </ThemedView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: Spacing.three,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroBanner: {
    borderRadius: 20,
    padding: Spacing.four,
    marginTop: Spacing.two,
    gap: Spacing.two,
  },
  bannerTitle: {
    fontSize: 24,
    lineHeight: 30,
  },
  bannerSubtitle: {
    marginBottom: Spacing.two,
  },
  bannerButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.five,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.five,
    marginBottom: Spacing.three,
  },
  placeholderCard: {
    padding: Spacing.four,
    borderRadius: 16,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
  },
});
