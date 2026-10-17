import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import type { StoreLocationPhoto } from '../types';

type StorePhotoCardProps = {
  data: StoreLocationPhoto;
};

export function StorePhotoCard({ data }: StorePhotoCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.imageUrl }}
        style={styles.image}
        contentFit="cover"
        transition={200}
      />
      {/* Dark gradient overlay at bottom */}
      <View style={styles.overlay}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Text style={styles.subText}>{data.subText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 124,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 12,
    position: 'relative',
    backgroundColor: '#0F172A',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
    marginBottom: 2,
  },
  subText: {
    color: '#E2E8F0',
    fontSize: 11,
    fontWeight: '400',
  },
});
