import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { AIResponseData } from '../types';
import { ActionButtonsList } from './ActionButtonsList';
import { AIFeedbackFooter } from './AIFeedbackFooter';
import { DailyFoodCard } from './DailyFoodCard';
import { FreeAdminAtmCard } from './FreeAdminAtmCard';
import { StorePhotoCard } from './StorePhotoCard';

type AIResponseCardProps = {
  data: AIResponseData;
};

export function AIResponseCard({ data }: AIResponseCardProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* Main White Response Card */}
      <View style={styles.card}>
        {/* 1. Header: Orb Intelligence + Audio Speaker Icon */}
        <View style={styles.headerRow}>
          <View style={styles.titleGroup}>
            <View style={styles.aiIconBubble}>
              <SymbolView
                name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }}
                size={13}
                tintColor="#FFFFFF"
              />
            </View>
            <Text style={styles.agentNameText}>{data.agentName}</Text>
          </View>

          <Pressable
            hitSlop={8}
            onPress={() => setIsSpeaking(!isSpeaking)}
            style={({ pressed }) => [styles.speakerBtn, pressed && styles.btnPressed]}>
            <SymbolView
              name={{
                ios: isSpeaking ? 'speaker.wave.3.fill' : 'speaker.wave.2.fill',
                android: isSpeaking ? 'volume_up' : 'volume_down',
                web: isSpeaking ? 'volume_up' : 'volume_down',
              }}
              size={16}
              tintColor={isSpeaking ? '#0050D6' : '#64748B'}
            />
          </Pressable>
        </View>

        {/* 2. Intro Prefix with Highlighted Location */}
        <Text style={styles.introText}>
          {data.introPrefix}
          <Text style={styles.locationHighlight}>{data.destinationBold}</Text>
        </Text>

        {/* 3. Sub-card 1: Makan Harian */}
        <DailyFoodCard data={data.foodEstimate} />

        {/* 4. Sub-card 2: Bebas Admin ATM */}
        <FreeAdminAtmCard data={data.atmInfo} />

        {/* 5. Sub-card 3: Photo Preview 7-Eleven */}
        <StorePhotoCard data={data.storePhoto} />

        {/* 6. Action Buttons List */}
        <ActionButtonsList actions={data.actions} />
      </View>

      {/* 7. Footer: Timestamp & Feedback Icons */}
      <AIFeedbackFooter
        timestamp={data.timestamp}
        engineVersion={data.engineVersion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  aiIconBubble: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0050D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  agentNameText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0050D6',
  },
  speakerBtn: {
    padding: 4,
  },
  btnPressed: {
    opacity: 0.6,
  },
  introText: {
    fontSize: 13.5,
    color: '#0F172A',
    lineHeight: 19,
    marginBottom: 14,
  },
  locationHighlight: {
    fontWeight: '700',
    color: '#0050D6',
  },
});
