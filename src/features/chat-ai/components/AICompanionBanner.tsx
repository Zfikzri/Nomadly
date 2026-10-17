import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type AICompanionBannerProps = {
  title?: string;
  isPro?: boolean;
};

export function AICompanionBanner({
  title = 'Noname AI Companion',
  isPro = true,
}: AICompanionBannerProps) {
  return (
    <View style={styles.card}>
      {/* 1. Left: AI Logo with Green Online Dot */}
      <View style={styles.logoWrapper}>
        <Image
          source={require('@/assets/images/navbar-ai-icon.png')}
          style={styles.logoImage}
          contentFit="contain"
          priority="high"
        />
        <View style={styles.onlineDot} />
      </View>

      {/* 2. Middle: Name & Status */}
      <View style={styles.infoCol}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.statusRow}>
          <View style={styles.miniGreenDot} />
          <Text style={styles.statusText} numberOfLines={1}>
            Multilingual Auto-Detect • Online
          </Text>
        </View>
      </View>

      {/* 3. Right: PRO badge & Translate Icon */}
      <View style={styles.rightCol}>
        {isPro && (
          <View style={styles.proBadge}>
            <Text style={styles.proText}>PRO</Text>
          </View>
        )}
        <View style={styles.translateWrapper}>
          <SymbolView
            name={{ ios: 'character.bubble', android: 'translate', web: 'translate' }}
            size={16}
            tintColor="#334155"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  logoWrapper: {
    position: 'relative',
    width: 44,
    height: 44,
  },
  logoImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  onlineDot: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  infoCol: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  miniGreenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#22C55E',
  },
  statusText: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '400',
  },
  rightCol: {
    alignItems: 'flex-end',
    gap: 6,
  },
  proBadge: {
    backgroundColor: '#0050D6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  proText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  translateWrapper: {
    padding: 2,
  },
});
