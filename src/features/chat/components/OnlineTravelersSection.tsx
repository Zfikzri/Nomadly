import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import type { TravelerOnline } from '../types';

type OnlineTravelersSectionProps = {
  travelers: TravelerOnline[];
};

export function OnlineTravelersSection({ travelers }: OnlineTravelersSectionProps) {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.headerRow}>
        <View style={styles.onlineDot} />
        <Text style={styles.headerTitle}>Traveler Online Sekitarmu</Text>
      </View>

      {/* Horizontal Avatar List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {travelers.map((traveler) => (
          <View key={traveler.id} style={styles.travelerItem}>
            {/* Avatar Container with Badges */}
            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: traveler.avatarUrl }}
                style={styles.avatar}
                contentFit="cover"
                transition={200}
              />
              {/* Flag Badge top-right */}
              <View style={styles.flagBadge}>
                <Text style={styles.flagText}>{traveler.countryFlag}</Text>
              </View>
              {/* Active Online Indicator bottom-right */}
              {traveler.isOnline && <View style={styles.statusDot} />}
            </View>

            {/* Name & Location */}
            <Text style={styles.travelerName} numberOfLines={1}>
              {traveler.name}
            </Text>
            <Text style={styles.travelerLocation} numberOfLines={1}>
              {traveler.location}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 14,
  },
  travelerItem: {
    alignItems: 'center',
    width: 60,
  },
  avatarWrapper: {
    position: 'relative',
    width: 52,
    height: 52,
    marginBottom: 6,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E2E8F0',
  },
  flagBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  flagText: {
    fontSize: 11,
    lineHeight: 14,
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#22C55E',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
  },
  travelerName: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0F172A',
    textAlign: 'center',
  },
  travelerLocation: {
    fontSize: 10,
    fontWeight: '400',
    color: '#64748B',
    textAlign: 'center',
    marginTop: 1,
  },
});
