import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import { getStarterPrompts } from '../services/mockData';
import type { StarterPrompt } from '../types';

type ChatAIEmptyStateProps = {
  userName?: string;
  onSelectPrompt: (query: string) => void;
};

export function ChatAIEmptyState({
  userName = 'Alex',
  onSelectPrompt,
}: ChatAIEmptyStateProps) {
  const { isZh } = useLanguage();
  const prompts = getStarterPrompts(isZh);

  return (
    <View style={styles.container}>
      {/* 1. Large Glowing Center AI Logo */}
      <View style={styles.heroLogoWrapper}>
        <View style={styles.glowCircle} />
        <Image
          source={require('@/assets/images/navbar-ai-icon.png')}
          style={styles.heroLogo}
          contentFit="contain"
          priority="high"
        />
      </View>

      {/* 2. Welcome Title & Description */}
      <Text style={styles.welcomeTitle}>
        {isZh
          ? `你好 ${userName}！Noma AI 随时为您服务 ✈️`
          : `Hello ${userName}! Noma AI is ready to help ✈️`}
      </Text>
      <Text style={styles.welcomeSubtitle}>
        {isZh
          ? '询问关于预算估算、便利店推荐、免手续费 ATM、实时汇率以及日本东京出游贴士的任何问题。'
          : 'Ask anything about budget estimates, convenience stores, zero-fee ATMs, currency exchange, or travel tips across Tokyo & Japan.'}
      </Text>

      {/* 3. Starter Prompt Cards */}
      <View style={styles.promptsSection}>
        <Text style={styles.promptsHeaderTitle}>
          {isZh ? '试试询问这些' : 'TRY ASKING THESE'}
        </Text>

        <View style={styles.promptList}>
          {prompts.map((prompt: StarterPrompt) => (
            <Pressable
              key={prompt.id}
              onPress={() => onSelectPrompt(prompt.queryText)}
              style={({ pressed }) => [styles.promptCard, pressed && styles.promptPressed]}>
              <View style={styles.promptIconBox}>
                <Text style={styles.promptEmoji}>{prompt.icon}</Text>
              </View>

              <View style={styles.promptContent}>
                <Text style={styles.promptTitle}>{prompt.title}</Text>
                {prompt.subtitle && (
                  <Text style={styles.promptSubtitle}>{prompt.subtitle}</Text>
                )}
              </View>

              <SymbolView
                name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }}
                size={16}
                tintColor="#94A3B8"
              />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    alignItems: 'center',
  },
  heroLogoWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  glowCircle: {
    position: 'absolute',
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#93C5FD',
    opacity: 0.35,
  },
  heroLogo: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 19,
    paddingHorizontal: 10,
    marginBottom: 24,
  },
  promptsSection: {
    width: '100%',
  },
  promptsHeaderTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
    letterSpacing: 0.5,
    marginBottom: 10,
    marginLeft: 4,
  },
  promptList: {
    gap: 10,
  },
  promptCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  promptPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  promptIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  promptEmoji: {
    fontSize: 20,
  },
  promptContent: {
    flex: 1,
  },
  promptTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 2,
  },
  promptSubtitle: {
    fontSize: 11.5,
    color: '#64748B',
  },
});
