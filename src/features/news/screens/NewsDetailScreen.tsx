import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';
import {
  NewsAiKeyPointsCard,
  NewsArticleBody,
  NewsDetailHeader,
  NewsHeroSection,
  NewsMetaPills,
  NewsSocialShareCard,
} from '../components/detail';
import { getNewsDetail } from '../services/newsDetailMock';

type NewsDetailScreenProps = {
  id?: string;
};

export function NewsDetailScreen({ id = 'news-1' }: NewsDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const { isZh } = useLanguage();
  const news = getNewsDetail(id, isZh);

  return (
    <View style={styles.root}>
      {/* 1. Fixed Top White Header */}
      <NewsDetailHeader />

      {/* 2. Scrollable Body Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}>
        {/* Category, Flag & Time Badges */}
        <NewsMetaPills
          flagEmoji={news.flagEmoji}
          countryName={news.countryName}
          categoryTag={news.categoryTag}
          timeAgo={news.timeAgo}
          readTime={news.readTime}
          translationBadgeText={news.translationBadgeText}
        />

        {/* Title & Hero Image with Scrim */}
        <NewsHeroSection
          title={news.title}
          imageUrl={news.heroImage.url}
          caption={news.heroImage.caption}
        />

        {/* AI Key Points Orb Intelligence Card */}
        <NewsAiKeyPointsCard
          title={news.aiKeyPoints.title}
          subtitle={news.aiKeyPoints.subtitle}
          accuracyBadge={news.aiKeyPoints.accuracyBadge}
          points={news.aiKeyPoints.points}
        />

        {/* Article Body with 3 Sections, Callouts & Images */}
        <NewsArticleBody sections={news.sections} />

        {/* Share & Discussion Card */}
        <NewsSocialShareCard
          title={news.socialShare.title}
          joinCountText={news.socialShare.joinCountText}
          actions={news.socialShare.actions}
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D8EEFF', // Soft sky blue background persis mockup
  },
  scrollContent: {
    paddingTop: 8,
  },
});
