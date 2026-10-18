import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';

type VoiceNoteCardProps = {
  avatarUrl?: string;
  duration?: string;
  voiceTitle?: string;
  transcription?: string;
  time?: string;
  onAvatarPress?: () => void;
};

// Waveform bar heights mimicking audio spectrum
const WAVEFORM_BARS = [
  { height: 8, active: true },
  { height: 16, active: true },
  { height: 22, active: true },
  { height: 14, active: true },
  { height: 24, active: true },
  { height: 18, active: true },
  { height: 26, active: true },
  { height: 15, active: false },
  { height: 10, active: false },
  { height: 18, active: false },
  { height: 12, active: false },
  { height: 6, active: false },
];

export function VoiceNoteCard({
  avatarUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  duration = '0:42',
  voiceTitle = 'Voice Note Tips',
  transcription = '“It is much better to use a digital Suica or Pasmo on Apple Wallet / Google Wallet, Alex. For Tokyo subway gates, tapping the IC card gives instant access without queues, and you can reload directly with your card.”',
  time = '10:24',
  onAvatarPress,
}: VoiceNoteCardProps) {
  const { isZh } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.outerRow}>
      {/* Avatar at bottom left (Clickable for profile popup) */}
      <Pressable
        hitSlop={6}
        onPress={onAvatarPress}
        style={({ pressed }) => [styles.avatarCol, pressed && styles.avatarPressed]}>
        <Image
          source={{ uri: avatarUrl }}
          style={styles.avatar}
          contentFit="cover"
          transition={200}
        />
      </Pressable>

      <View style={styles.cardCol}>
        {/* Main Card Container */}
        <View style={styles.cardContainer}>
          {/* 1. Voice Note Player Box */}
          <View style={styles.playerBox}>
            <View style={styles.playerTopRow}>
              {/* Play / Pause button */}
              <Pressable
                onPress={() => setIsPlaying(!isPlaying)}
                style={({ pressed }) => [styles.playButton, pressed && styles.playButtonPressed]}>
                <SymbolView
                  name={{
                    ios: isPlaying ? 'pause.fill' : 'play.fill',
                    android: isPlaying ? 'pause' : 'play_arrow',
                    web: isPlaying ? 'pause' : 'play_arrow',
                  }}
                  size={14}
                  tintColor="#FFFFFF"
                />
              </Pressable>

              {/* Waveform Visualization */}
              <View style={styles.waveformContainer}>
                {WAVEFORM_BARS.map((bar, idx) => (
                  <View
                    key={idx}
                    style={[
                      styles.waveformBar,
                      { height: bar.height },
                      bar.active ? styles.barActive : styles.barInactive,
                    ]}
                  />
                ))}
              </View>
            </View>

            {/* Duration and Category info row */}
            <View style={styles.playerMetaRow}>
              <Text style={styles.durationText}>{duration}</Text>
              <Text style={styles.voiceTitleText}>{voiceTitle}</Text>
            </View>
          </View>

          {/* 2. Transcription Section */}
          <View style={styles.transcriptionBox}>
            <View style={styles.transcriptionHeader}>
              <SymbolView
                name={{
                  ios: 'text.badge.checkmark',
                  android: 'translate',
                  web: 'translate',
                }}
                size={14}
                tintColor="#2563EB"
              />
              <Text style={styles.transcriptionTitle}>
                {isZh
                  ? '语音转写 (简体中文)'
                  : 'Automatic Transcription (English)'}
              </Text>
            </View>

            <Text style={styles.transcriptionText}>{transcription}</Text>
          </View>
        </View>

        {/* Timestamp */}
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  avatarCol: {
    paddingBottom: 18,
  },
  avatarPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.95 }],
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#CBD5E1',
  },
  cardCol: {
    flex: 1,
    maxWidth: '88%',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  playerBox: {
    backgroundColor: '#F3F6FD',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },
  playerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  playButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#0050D6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  playButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }],
  },
  waveformContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 28,
    paddingHorizontal: 4,
  },
  waveformBar: {
    width: 3.5,
    borderRadius: 2,
  },
  barActive: {
    backgroundColor: '#0050D6',
  },
  barInactive: {
    backgroundColor: '#93C5FD',
  },
  playerMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  durationText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#334155',
  },
  voiceTitleText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
  },
  transcriptionBox: {
    paddingHorizontal: 4,
  },
  transcriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  transcriptionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
  },
  transcriptionText: {
    fontSize: 12.5,
    color: '#334155',
    lineHeight: 18,
    fontStyle: 'normal',
  },
  timeText: {
    fontSize: 11,
    color: '#475569',
    marginTop: 4,
    marginLeft: 4,
    fontWeight: '500',
  },
});
