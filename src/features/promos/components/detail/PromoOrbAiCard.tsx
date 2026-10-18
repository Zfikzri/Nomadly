import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type PromoOrbAiCardProps = {
  title: string;
  messagePrefix: string;
  highlightText: string;
  messageSuffix: string;
};

export function PromoOrbAiCard({
  title,
  messagePrefix,
  highlightText,
  messageSuffix,
}: PromoOrbAiCardProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerContent}>
        {/* Left Icon Orb */}
        <View style={styles.iconCircle}>
          <SymbolView
            name={{
              ios: 'sparkles',
              android: 'auto_awesome',
              web: 'auto_awesome',
            }}
            size={18}
            tintColor="#60A5FA"
          />
        </View>

        {/* Text Area */}
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.activeDot} />
          </View>
          <Text style={styles.messageText}>
            {messagePrefix}
            <Text style={styles.highlightText}>{highlightText}</Text>
            {messageSuffix}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#09132B',
    borderRadius: 22,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  innerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(37, 99, 235, 0.25)',
    borderWidth: 1.5,
    borderColor: 'rgba(96, 165, 250, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
    gap: 6,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#22C55E',
  },
  messageText: {
    fontSize: 13,
    lineHeight: 19,
    color: 'rgba(255, 255, 255, 0.88)',
  },
  highlightText: {
    color: '#F43F5E',
    fontWeight: '800',
  },
});
