import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type NewsHeroSectionProps = {
  title: string;
  imageUrl: string;
  caption: string;
};

export function NewsHeroSection({
  title,
  imageUrl,
  caption,
}: NewsHeroSectionProps) {
  return (
    <View style={styles.container}>
      {/* Article Title */}
      <Text style={styles.titleText}>{title}</Text>

      {/* Hero Image with Floating Pill Scrim */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.heroImage}
          contentFit="cover"
          transition={300}
        />

        {/* Bottom-left Location Scrim Pill */}
        <View style={styles.captionBadge}>
          <SymbolView
            name={{ ios: 'mappin', android: 'location_on', web: 'location_on' }}
            size={12}
            tintColor="#FFFFFF"
          />
          <Text style={styles.captionText}>{caption}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    gap: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 30,
    letterSpacing: -0.4,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  captionBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(15, 23, 42, 0.78)',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 16,
  },
  captionText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
