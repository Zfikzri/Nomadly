import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

type CommunityHeroBannerProps = {
  imageUrl: string;
};

export function CommunityHeroBanner({ imageUrl }: CommunityHeroBannerProps) {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.heroImage}
        contentFit="cover"
        priority="high"
        cachePolicy="memory-disk"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 16,
    height: 260,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
});
