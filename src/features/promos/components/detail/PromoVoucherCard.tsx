import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type PromoVoucherCardProps = {
  sectionTitle: string;
  badgeText: string;
  label: string;
  code: string;
};

export function PromoVoucherCard({
  sectionTitle,
  badgeText,
  label,
  code,
}: PromoVoucherCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <View style={styles.cardContainer}>
      {/* Top Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.titleLeft}>
          <SymbolView
            name={{
              ios: 'ticket.fill',
              android: 'confirmation_number',
              web: 'confirmation_number',
            }}
            size={18}
            tintColor="#9333EA"
          />
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        </View>

        <View style={styles.usagePill}>
          <Text style={styles.usagePillText}>{badgeText}</Text>
        </View>
      </View>

      {/* Code Box */}
      <View style={styles.codeBox}>
        <View style={styles.codeColumn}>
          <Text style={styles.codeLabel}>{label}</Text>
          <Text style={styles.codeText}>{code}</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.copyButton,
            copied && styles.copyButtonActive,
            pressed && styles.copyButtonPressed,
          ]}
          onPress={handleCopy}
          accessibilityRole="button"
          accessibilityLabel={copied ? 'Kode tersalin' : 'Salin kode promo'}>
          <SymbolView
            name={
              copied
                ? { ios: 'checkmark', android: 'check', web: 'check' }
                : { ios: 'doc.on.doc', android: 'content_copy', web: 'content_copy' }
            }
            size={15}
            tintColor="#FFFFFF"
            weight="bold"
          />
          <Text style={styles.copyButtonText}>{copied ? 'Tersalin!' : 'Salin'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
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
    marginBottom: 14,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  usagePill: {
    backgroundColor: '#F3E8FF',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3.5,
  },
  usagePillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7E22CE',
  },
  codeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  codeColumn: {
    gap: 3,
  },
  codeLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.4,
  },
  codeText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#2563EB',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 9,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  copyButtonActive: {
    backgroundColor: '#059669',
    shadowColor: '#059669',
  },
  copyButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  copyButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
