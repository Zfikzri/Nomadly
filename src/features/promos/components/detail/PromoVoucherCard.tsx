import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';

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
  const { isZh } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false), 2000;
    });
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
          accessibilityLabel={
            copied
              ? isZh
                ? '已复制兑换码'
                : 'Voucher code copied'
              : isZh
              ? '复制优惠码'
              : 'Copy promo code'
          }>
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
          <Text style={styles.copyButtonText}>
            {copied
              ? isZh
                ? '已复制!'
                : 'Copied!'
              : isZh
              ? '复制'
              : 'Copy'}
          </Text>
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  usagePillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9333EA',
  },
  codeBox: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeColumn: {
    gap: 2,
  },
  codeLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  codeText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 1,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#0050D6',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  copyButtonActive: {
    backgroundColor: '#16A34A',
  },
  copyButtonPressed: {
    opacity: 0.8,
  },
  copyButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
