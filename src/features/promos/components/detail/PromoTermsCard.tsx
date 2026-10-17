import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import type { TermConditionItem } from '../../types/detail';

type PromoTermsCardProps = {
  title: string;
  items: TermConditionItem[];
};

export function PromoTermsCard({ title, items }: PromoTermsCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{title}</Text>
        <SymbolView
          name={{
            ios: 'info.circle',
            android: 'info',
            web: 'info',
          }}
          size={18}
          tintColor="#64748B"
        />
      </View>

      {/* Items List */}
      <View style={styles.itemsList}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemBox}>
            <View style={styles.iconCircle}>
              <SymbolView
                name={item.iconName}
                size={18}
                tintColor="#2563EB"
              />
            </View>

            <View style={styles.textColumn}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDesc}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  itemsList: {
    gap: 10,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flex: 1,
    gap: 2,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
  },
  itemDesc: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 17,
  },
});
