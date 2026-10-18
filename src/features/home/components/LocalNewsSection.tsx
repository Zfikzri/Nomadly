import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n';
import type { NewsSnippet } from '../types';

type LocalNewsSectionProps = {
  newsList: NewsSnippet[];
  onSeeAll?: () => void;
  onSelectNews?: (news: NewsSnippet) => void;
  onAiAdvicePress?: (news: NewsSnippet) => void;
};

export function LocalNewsSection({
  newsList,
  onSeeAll,
  onSelectNews,
  onAiAdvicePress,
}: LocalNewsSectionProps) {
  const { strings } = useLanguage();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.titleLeft}>
          <SymbolView
            name={{ ios: 'newspaper.fill', android: 'newspaper', web: 'newspaper' }}
            size={18}
            tintColor="#0050D6"
          />
          <Text style={styles.sectionTitle}>{strings.home.localNewsSnippet}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.autoTranslatedText}>{strings.home.autoTranslated}</Text>
          {onSeeAll && (
            <Pressable hitSlop={8} onPress={onSeeAll}>
              <Text style={styles.seeAllText}>{strings.home.seeAll}</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Cards List */}
      <View style={styles.newsListWrapper} className="gap-4">
        {newsList.map((news) => (
          <Pressable
            key={news.id}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            className="bg-white rounded-3xl p-6 flex-row items-center gap-4 border border-slate-100 shadow-sm"
            onPress={() => onSelectNews?.(news)}>
            {/* Country Flag Badge */}
            <View
              style={styles.countryFlagBadge}
              className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-center">
              <Text style={styles.countryFlagText}>
                {news.flagEmoji || (news.code === 'JP' ? '🇯🇵' : news.code === 'EU' ? '🇪🇺' : news.code === 'TH' ? '🇹🇭' : news.code === 'SG' ? '🇸🇬' : '🌐')}
              </Text>
            </View>

            {/* Content */}
            <View style={styles.contentWrapper} className="flex-1 gap-1.5">
              {/* Metadata Row */}
              <View style={styles.metaRow} className="flex-row items-center gap-1.5 mb-1">
                <View style={styles.alertPill} className="bg-rose-100 rounded-lg px-2 py-0.5">
                  <Text style={styles.alertPillText} className="text-[10px] font-bold text-rose-600">
                    {news.badgeText}
                  </Text>
                </View>
                <Text style={styles.timeText} className="text-[11px] text-slate-400 font-medium">
                  • {news.timeAgo}
                </Text>
              </View>

              {/* News Headline */}
              <Text style={styles.newsHeadline} className="text-sm font-bold text-slate-900 leading-[22px] my-1">
                {news.title}
              </Text>

              {/* AI Travel & FX Action */}
              <Pressable
                hitSlop={6}
                style={({ pressed }) => [styles.aiActionRow, pressed && styles.aiPressed]}
                className="flex-row items-center gap-1.5 mt-1"
                onPress={() => onAiAdvicePress?.(news)}>
                <SymbolView
                  name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }}
                  size={13}
                  tintColor="#0050D6"
                />
                <Text style={styles.aiActionText} className="text-[11px] font-bold text-[#0050D6]">
                  {news.aiActionText}
                </Text>
              </Pressable>
            </View>

            {/* Right Arrow */}
            <SymbolView
              name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }}
              size={16}
              tintColor="#94A3B8"
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.four,
    marginBottom: Spacing.six + 40, // Space for floating bottom navigation bar
    paddingHorizontal: Spacing.four,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.three,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#151C27',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  autoTranslatedText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0050D6',
  },
  newsListWrapper: {
    gap: Spacing.three,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.99 }],
  },
  countryFlagBadge: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryFlagText: {
    fontSize: 24,
  },
  contentWrapper: {
    flex: 1,
    gap: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  alertPill: {
    backgroundColor: '#FFE4E6',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  alertPillText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#E11D48',
  },
  timeText: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '500',
  },
  newsHeadline: {
    fontSize: 14,
    fontWeight: '700',
    color: '#151C27',
    lineHeight: 22,
    marginTop: 2,
    marginBottom: 4,
  },
  aiActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 4,
  },
  aiPressed: {
    opacity: 0.7,
  },
  aiActionText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0050D6',
  },
});
