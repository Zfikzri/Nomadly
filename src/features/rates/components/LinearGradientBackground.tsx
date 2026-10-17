import { Platform, StyleSheet, View } from 'react-native';

// Horizontal linear gradient slices from #0F5BA3 (rgb 15, 91, 163) to #9BCDF8 (rgb 155, 205, 248)
const GRADIENT_SLICES_COUNT = 32;
export const BLUE_GRADIENT_SLICES = Array.from({ length: GRADIENT_SLICES_COUNT }, (_, i) => {
  const t = i / (GRADIENT_SLICES_COUNT - 1);
  const r = Math.round(15 + (155 - 15) * t);
  const g = Math.round(91 + (205 - 91) * t);
  const b = Math.round(163 + (248 - 163) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function LinearGradientBackground() {
  // On Web, use native CSS horizontal linear gradient for 100% smooth rendering
  if (Platform.OS === 'web') {
    return (
      <View
        pointerEvents="none"
        style={[
          styles.gradientContainer,
          {
            backgroundImage: 'linear-gradient(90deg, #0F5BA3 100%, #9BCDF8 100%)',
          } as any,
        ]}
      />
    );
  }

  // On Native (iOS/Android), use subpixel-overlapped horizontal slices
  return (
    <View style={styles.gradientContainer} pointerEvents="none">
      {BLUE_GRADIENT_SLICES.map((color, idx) => (
        <View
          key={idx}
          style={{
            flex: 1,
            backgroundColor: color,
            marginRight: idx < GRADIENT_SLICES_COUNT - 1 ? -0.5 : 0,
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    ...StyleSheet.absoluteFill,
    flexDirection: 'row',
    zIndex: 0,
  },
});
