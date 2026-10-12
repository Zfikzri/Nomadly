import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import type { NewsSnippet } from '../types';

type LocalNewsSectionProps = {
  newsList: NewsSnippet[];
  onSelectNews?: (news: NewsSnippet) => void;
  onAiAdvicePress?: (news: NewsSnippet) => void;
};

export function LocalNewsSection({
  newsList,
  onSelectNews,
  onAiAdvicePress,
}: LocalNewsSectionProps) {
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
          <Text style={styles.sectionTitle}>Local News Snippet</Text>
        </View>
        <Text style={styles.autoTranslatedText}>Auto-translated</Text>
      </View>

      {/* Cards List */}
      <View style={styles.newsListWrapper} className="gap-4">
        {newsList.map((news) => (
          <Pressable
            key={news.id}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            className="bg-white rounded-3xl p-6 flex-row items-center gap-4 border border-slate-100 shadow-sm"
            onPress={() => onSelectNews?.(news)}>
            {/* Country Square Badge with Dotted Border */}
            <View
              style={styles.countryCodeBadge}
              className="w-11 h-11 rounded-2xl border-[1.5px] border-dashed border-cyan-500 bg-cyan-50 items-center justify-center">
              <Text style={styles.countryCodeText} className="text-[15px] font-extrabold text-cyan-600 tracking-wider">
                {news.code}
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
  autoTranslatedText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
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
  countryCodeBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#06B6D4',
    backgroundColor: '#ECFEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryCodeText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0891B2',
    letterSpacing: 1,
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
