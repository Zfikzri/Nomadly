import { StyleSheet, Text, View } from 'react-native';

const SKY_SLICE_COUNT = 16;
const SKY_BACKGROUND_SLICES = Array.from({ length: SKY_SLICE_COUNT }, (_, i) => {
  const t = i / (SKY_SLICE_COUNT - 1);
  const r = Math.round(186 + (224 - 186) * t);
  const g = Math.round(230 + (242 - 230) * t);
  const b = Math.round(253 + (254 - 253) * t);
  return `rgb(${r}, ${g}, ${b})`;
});

type AuthHeaderProps = {
  subtitle?: string;
};

export function AuthHeader({ subtitle }: AuthHeaderProps) {
  return (
    <View style={styles.headerContainer} className="relative w-full overflow-hidden">
      {/* Sky Gradient Background */}
      <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
        {SKY_BACKGROUND_SLICES.map((color, idx) => (
          <View key={idx} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </View>

      {/* Decorative Phone & Card Silhouette in Top Right */}
      <View style={styles.decorativePhone} pointerEvents="none">
        <View style={styles.phoneFrame}>
          <View style={styles.cameraIsland} />
          <View style={styles.phoneScreenLine} />
          <View style={styles.phoneCardPreview} />
        </View>
      </View>

      {/* Title & Subtitle */}
      <View style={styles.textWrapper}>
        <Text style={styles.title} className="text-slate-900 font-extrabold tracking-tight">
          Create Your Account{'\n'}and Simplify Your{'\n'}Journey
        </Text>
        {subtitle ? (
          <Text style={styles.subtitle} className="text-slate-700 font-medium">
            {subtitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 22,
    position: 'relative',
    overflow: 'hidden',
  },
  decorativePhone: {
    position: 'absolute',
    top: 4,
    right: -20,
    width: 125,
    height: 165,
    transform: [{ rotate: '14deg' }],
    zIndex: 1,
  },
  phoneFrame: {
    width: 115,
    height: 170,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.65)',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    padding: 8,
    alignItems: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  cameraIsland: {
    width: 28,
    height: 6,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    marginBottom: 8,
  },
  phoneScreenLine: {
    width: '80%',
    height: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    marginBottom: 8,
  },
  phoneCardPreview: {
    width: '88%',
    height: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  textWrapper: {
    position: 'relative',
    zIndex: 10,
    maxWidth: 290,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 32,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
    lineHeight: 18,
    marginTop: 6,
  },
});
