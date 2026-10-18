import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type NewsMetaPillsProps = {
  flagEmoji: string;
  countryName: string;
  categoryTag: string;
  timeAgo: string;
  readTime: string;
  translationBadgeText: string;
};

export function NewsMetaPills({
  flagEmoji,
  countryName,
  categoryTag,
  timeAgo,
  readTime,
  translationBadgeText,
}: NewsMetaPillsProps) {
  return (
    <View style={styles.container}>
      {/* Category & Country Badges Row */}
      <View style={styles.badgesRow}>
        {/* Country Flag Pill */}
        <View style={styles.countryPill}>
          <Text style={styles.flagEmoji}>{flagEmoji}</Text>
          <Text style={styles.countryNameText}>{countryName}</Text>
        </View>

        {/* Category Pill */}
        <View style={styles.categoryPill}>
          <SymbolView
            name={{ ios: 'mappin.and.ellipse', android: 'location_on', web: 'location_on' }}
            size={12}
            tintColor="#7E22CE"
          />
          <Text style={styles.categoryPillText}>{categoryTag}</Text>
        </View>
      </View>

      {/* Meta Times & AI Translation Row */}
      <View style={styles.metaRow}>
        <View style={styles.metaTimeGroup}>
          <SymbolView
            name={{ ios: 'clock', android: 'schedule', web: 'schedule' }}
            size={13}
            tintColor="#64748B"
          />
          <Text style={styles.metaTimeText}>
            {timeAgo} • {readTime}
          </Text>
        </View>

        <View style={styles.translationGroup}>
          <SymbolView
            name={{ ios: 'character.book.closed', android: 'translate', web: 'translate' }}
            size={13}
            tintColor="#2563EB"
          />
          <Text style={styles.translationText}>{translationBadgeText}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 12,
  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  countryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  flagEmoji: {
    fontSize: 14,
  },
  countryNameText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6B21A8',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 2,
  },
  metaTimeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaTimeText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  translationGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  translationText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
  },
});
