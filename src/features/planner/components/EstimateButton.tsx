import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

type EstimateButtonProps = {
  isLoading: boolean;
  onPress: () => void;
};

// Pure native horizontal linear gradient slices from #0F5BA3 to #9BCDF8
const GRADIENT_SLICES_COUNT = 24;
const BUTTON_GRADIENT_SLICES = Array.from({ length: GRADIENT_SLICES_COUNT }, (_, i) => {
  const t = i / (GRADIENT_SLICES_COUNT - 1);
  const r = Math.round(15 + (155 - 15) * t);
  const g = Math.round(91 + (205 - 91) * t);
  const b = Math.round(163 + (248 - 163) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

export function EstimateButton({ isLoading, onPress }: EstimateButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.buttonWrapper, pressed && styles.buttonPressed]}
      className="w-full h-[52px] rounded-2xl overflow-hidden mt-5 shadow-lg shadow-blue-500/25"
      onPress={onPress}
      disabled={isLoading}>
      {/* Linear Gradient Background (#0F5BA3 -> #9BCDF8) */}
      <View style={styles.gradientContainer} pointerEvents="none">
        {BUTTON_GRADIENT_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      {/* Button Content */}
      <View style={styles.content}>
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text style={styles.text} className="text-white text-[15px] font-bold tracking-wide">
            Estimate With AI
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 20,
    shadowColor: '#0F5BA3',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});
