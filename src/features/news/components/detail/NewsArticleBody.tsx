import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import type { ArticleSection } from '../../types/detail';

type NewsArticleBodyProps = {
  sections: ArticleSection[];
};

export function NewsArticleBody({ sections }: NewsArticleBodyProps) {
  return (
    <View style={styles.container}>
      {sections.map((sec) => (
        <View key={sec.id} style={styles.sectionBlock}>
          {/* Section Number & Heading */}
          <Text style={styles.sectionHeading}>{sec.sectionNumberTitle}</Text>

          {/* Section Paragraphs */}
          <View style={styles.paragraphsList}>
            {sec.paragraphs.map((p, idx) => (
              <Text key={idx} style={styles.paragraphText}>
                {p}
              </Text>
            ))}
          </View>

          {/* Optional Inline Image */}
          {sec.image && (
            <View style={styles.inlineImageWrapper}>
              <Image
                source={{ uri: sec.image.url }}
                style={styles.inlineImage}
                contentFit="cover"
                transition={250}
              />
            </View>
          )}

          {/* Optional Callout Boxes */}
          {sec.callout && sec.callout.type === 'regulation' && (
            <View style={styles.regulationCallout}>
              <View style={styles.regulationIconCircle}>
                <SymbolView
                  name={{ ios: 'mappin.circle.fill', android: 'location_on', web: 'location_on' }}
                  size={18}
                  tintColor="#2563EB"
                />
              </View>
              <View style={styles.calloutTextWrapper}>
                <Text style={styles.regulationTitle}>{sec.callout.title}</Text>
                <Text style={styles.regulationText}>{sec.callout.text}</Text>
              </View>
            </View>
          )}

          {sec.callout && sec.callout.type === 'strategy' && (
            <View style={styles.strategyCallout}>
              <View style={styles.strategyHeaderRow}>
                <SymbolView
                  name={{
                    ios: 'checkmark.shield.fill',
                    android: 'verified_user',
                    web: 'verified_user',
                  }}
                  size={16}
                  tintColor="#1D4ED8"
                />
                <Text style={styles.strategyTitle}>{sec.callout.title}</Text>
              </View>
              <Text style={styles.strategyText}>{sec.callout.text}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 24,
    marginBottom: 20,
  },
  sectionBlock: {
    gap: 12,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  paragraphsList: {
    gap: 10,
  },
  paragraphText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 21,
    fontWeight: '400',
  },
  inlineImageWrapper: {
    width: '100%',
    height: 180,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
    marginTop: 4,
  },
  inlineImage: {
    width: '100%',
    height: '100%',
  },
  regulationCallout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    padding: 14,
    marginTop: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  regulationIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutTextWrapper: {
    flex: 1,
    gap: 2,
  },
  regulationTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
  },
  regulationText: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 17,
  },
  strategyCallout: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 18,
    padding: 14,
    gap: 6,
    marginTop: 4,
  },
  strategyHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  strategyTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1D4ED8',
  },
  strategyText: {
    fontSize: 12,
    color: '#1E40AF',
    lineHeight: 18,
  },
});
