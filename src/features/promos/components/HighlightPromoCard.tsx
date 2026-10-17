import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { HighlightPromo } from '../types';

type HighlightPromoCardProps = {
  promo: HighlightPromo;
  onClaim?: () => void;
};

export function HighlightPromoCard({ promo, onClaim }: HighlightPromoCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.sectionContainer}>
      {/* 1. Section Header: Flame + Title + Timer Badge */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <SymbolView
            name={{ ios: 'flame.fill', android: 'local_fire_department', web: 'local_fire_department' }}
            size={16}
            tintColor="#EF4444"
          />
          <Text style={styles.sectionTitle}>HIGHLIGHT PEKAN INI</Text>
        </View>

        <View style={styles.timerBadge}>
          <SymbolView
            name={{ ios: 'clock.fill', android: 'schedule', web: 'schedule' }}
            size={11}
            tintColor="#E11D48"
          />
          <Text style={styles.timerText}>Sisa 3 Hari</Text>
        </View>
      </View>

      {/* 2. Main Hero Card */}
      <View style={styles.card}>
        {/* Top Image Banner */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: promo.imageUrl }}
            style={styles.image}
            contentFit="cover"
            transition={200}
          />
          <View style={styles.imageOverlay} />

          {/* Top Badges Row over image */}
          <View style={styles.topBadgesRow}>
            <View style={styles.discountPill}>
              <SymbolView
                name={{ ios: 'airplane.departure', android: 'flight_takeoff', web: 'flight_takeoff' }}
                size={11}
                tintColor="#FFFFFF"
              />
              <Text style={styles.discountPillText}>{promo.badgeLeft}</Text>
            </View>

            <View style={styles.savePill}>
              <Text style={styles.savePillText}>{promo.badgeRight}</Text>
            </View>
          </View>

          {/* Bottom Title & Subtitle over image */}
          <View style={styles.imageBottomContent}>
            <Text style={styles.cardTitle}>{promo.title}</Text>
            <Text style={styles.cardSubtitle}>{promo.subtitle}</Text>
          </View>
        </View>

        {/* Lower Details Area */}
        <View style={styles.bodyContainer}>
          {/* Kupon Box */}
          <View style={styles.couponBox}>
            <View style={styles.couponLeft}>
              <View style={styles.couponIconCircle}>
                <SymbolView
                  name={{ ios: 'ticket.fill', android: 'confirmation_number', web: 'confirmation_number' }}
                  size={14}
                  tintColor="#0050D6"
                />
              </View>
              <View>
                <Text style={styles.couponLabel}>Kode Kupon Promo</Text>
                <Text style={styles.couponCode}>{promo.couponCode}</Text>
              </View>
            </View>

            <Pressable
              hitSlop={8}
              onPress={handleCopy}
              style={({ pressed }) => [
                styles.copyButton,
                copied && styles.copyButtonActive,
                pressed && styles.copyButtonPressed,
              ]}>
              <SymbolView
                name={
                  copied
                    ? { ios: 'checkmark', android: 'done', web: 'done' }
                    : { ios: 'doc.on.doc', android: 'content_copy', web: 'content_copy' }
                }
                size={12}
                tintColor={copied ? '#16A34A' : '#0F172A'}
              />
              <Text
                style={[
                  styles.copyButtonText,
                  copied && styles.copyButtonTextActive,
                ]}>
                {copied ? 'Tersalin' : 'Salin'}
              </Text>
            </Pressable>
          </View>

          {/* Policy & Min Transaction Row */}
          <View style={styles.metaRow}>
            <View style={styles.policyLeft}>
              <SymbolView
                name={{ ios: 'checkmark.seal.fill', android: 'verified', web: 'verified' }}
                size={14}
                tintColor="#16A34A"
              />
              <Text style={styles.metaText}>{promo.reschedulePolicy}</Text>
            </View>
            <Text style={styles.metaText}>{promo.minTransaction}</Text>
          </View>

          {/* CTA Button */}
          <Pressable
            onPress={onClaim}
            style={({ pressed }) => [styles.claimButton, pressed && styles.claimButtonPressed]}>
            <Text style={styles.claimButtonText}>Klaim Promo Tiket</Text>
            <SymbolView
              name={{ ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' }}
              size={14}
              tintColor="#FFFFFF"
              weight="bold"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    fontSize: 12.5,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFE4E6',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3.5,
  },
  timerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#E11D48',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    height: 165,
    position: 'relative',
    justifyContent: 'space-between',
    padding: 14,
  },
  image: {
    position: 'absolute',
    inset: 0,
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.38)',
  },
  topBadgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    zIndex: 2,
  },
  discountPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#0050D6',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  discountPillText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  savePill: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  savePillText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#0F172A',
  },
  imageBottomContent: {
    zIndex: 2,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.92)',
    fontWeight: '500',
  },
  bodyContainer: {
    padding: 16,
  },
  couponBox: {
    backgroundColor: '#F0F5FF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0EAFF',
  },
  couponLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  couponIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponLabel: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: '500',
  },
  couponCode: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  copyButtonActive: {
    backgroundColor: '#DCFCE7',
  },
  copyButtonPressed: {
    opacity: 0.75,
  },
  copyButtonText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#0F172A',
  },
  copyButtonTextActive: {
    color: '#16A34A',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  policyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    fontSize: 11.5,
    color: '#475569',
    fontWeight: '500',
  },
  claimButton: {
    height: 46,
    backgroundColor: '#0050D6',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  claimButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  claimButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
