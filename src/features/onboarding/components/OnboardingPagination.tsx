import { Pressable, StyleSheet, View } from 'react-native';

type OnboardingPaginationProps = {
  total: number;
  activeIndex: number;
  onDotPress?: (index: number) => void;
};

export function OnboardingPagination({
  total,
  activeIndex,
  onDotPress,
}: OnboardingPaginationProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }, (_, i) => {
        const isActive = i === activeIndex;
        return (
          <Pressable
            key={i}
            hitSlop={8}
            onPress={() => onDotPress?.(i)}
            style={[
              styles.dot,
              isActive ? styles.dotActive : styles.dotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    height: 20,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 26,
    backgroundColor: '#0F172A',
  },
  dotInactive: {
    width: 6,
    backgroundColor: '#93C5FD',
  },
});
