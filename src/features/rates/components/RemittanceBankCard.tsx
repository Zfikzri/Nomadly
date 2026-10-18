import { StyleSheet, Text, View } from 'react-native';

import type { RemittanceBankItem } from '../types';

type RemittanceBankCardProps = {
  item: RemittanceBankItem;
};

export function RemittanceBankCard({ item }: RemittanceBankCardProps) {
  const getBadgeStyles = () => {
    switch (item.statusBadgeType) {
      case 'green':
        return {
          container: { backgroundColor: '#DCFCE7' },
          text: { color: '#15803D' },
          dot: '🟢',
        };
      case 'purple':
        return {
          container: { backgroundColor: '#F3E8FF' },
          text: { color: '#7E22CE' },
          dot: '🔄',
        };
      case 'cyan':
        return {
          container: { backgroundColor: '#CFFAFE' },
          text: { color: '#0E7490' },
          dot: '🌐',
        };
      case 'blue':
      default:
        return {
          container: { backgroundColor: '#DBEAFE' },
          text: { color: '#1D4ED8' },
          dot: item.id === 'chase' ? '💲' : '💳',
        };
    }
  };

  const getFooterColor = () => {
    switch (item.statusBadgeType) {
      case 'green':
        return '#2563EB';
      case 'purple':
        return '#9333EA';
      case 'cyan':
        return '#059669';
      case 'blue':
      default:
        return '#2563EB';
    }
  };

  const badgeStyle = getBadgeStyles();
  const footerColor = getFooterColor();

  return (
    <View style={styles.card}>
      {/* 1. Header: Logo & Titles */}
      <View style={styles.headerRow}>
        {/* Bank Logo / Avatar */}
        <View
          style={[
            styles.avatarBox,
            { backgroundColor: item.avatarBgColor },
            item.avatarBgColor === '#FFFFFF' && styles.avatarBoxBorder,
          ]}>
          <Text
            style={[
              styles.avatarText,
              { color: item.avatarTextColor },
              item.avatarText.length > 4 && { fontSize: 10 },
            ]}>
            {item.avatarText}
          </Text>
        </View>

        {/* Name & Region Subtitle */}
        <View style={styles.headerTextCol}>
          <Text style={styles.bankName}>{item.name}</Text>
          <View style={styles.subtitleRow}>
            <Text style={styles.countryText}>
              {item.country} {item.countryFlag}
            </Text>
            <Text style={styles.dotSeparator}>•</Text>
            <Text style={styles.categoryText}>{item.categoryType}</Text>
          </View>
        </View>
      </View>

      {/* 2. Status Badge Pill */}
      <View style={[styles.statusBadge, badgeStyle.container]}>
        <Text style={styles.statusBadgeIcon}>{badgeStyle.dot}</Text>
        <Text style={[styles.statusBadgeText, badgeStyle.text]}>
          {item.statusBadgeText}
        </Text>
      </View>

      {/* 3. Description */}
      <Text style={styles.descriptionText}>{item.description}</Text>

      {/* 4. Feature Tags */}
      <View style={styles.tagsContainer}>
        {item.featureTags.map((tag, idx) => (
          <View key={idx} style={styles.tagPill}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* 5. Compliance / Partner Footer */}
      <View style={styles.footerRow}>
        <Text style={styles.footerIcon}>{item.complianceIcon}</Text>
        <Text style={[styles.footerText, { color: footerColor }]}>
          {item.complianceText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  avatarBoxBorder: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatarText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  headerTextCol: {
    flex: 1,
  },
  bankName: {
    fontSize: 15.5,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.2,
    marginBottom: 2,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  countryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  dotSeparator: {
    fontSize: 11,
    color: '#94A3B8',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginTop: 12,
  },
  statusBadgeIcon: {
    fontSize: 11,
  },
  statusBadgeText: {
    fontSize: 11.5,
    fontWeight: '700',
    letterSpacing: -0.1,
  },
  descriptionText: {
    marginTop: 12,
    fontSize: 13,
    lineHeight: 20,
    color: '#334155',
    fontWeight: '400',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 12,
  },
  tagPill: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4.5,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#475569',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
  },
  footerIcon: {
    fontSize: 13,
  },
  footerText: {
    fontSize: 12.5,
    fontWeight: '700',
    letterSpacing: -0.1,
  },
});
