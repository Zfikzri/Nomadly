import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { HighlightPromo } from '../types';

type HighlightPromoCardProps = {
  promo: HighlightPromo;
  onClaim?: () => void;
};

export function HighlightPromoCard({ promo, onClaim }: HighlightPromoCardProps) {
  const { isZh } = useLanguage();
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
          <Text style={styles.sectionTitle}>
            {isZh ? '本周特惠精选' : 'DEAL OF THE WEEK'}
          </Text>
        </View>

        <View style={styles.timerBadge}>
          <SymbolView
            name={{ ios: 'clock.fill', android: 'schedule', web: 'schedule' }}
            size={11}
            tintColor="#E11D48"
          />
          <Text style={styles.timerText}>
            {isZh ? '仅剩 3 天' : '3 Days Left'}
          </Text>
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
            priority="high"
            cachePolicy="memory-disk"
          />
          <View style={styles.imageOverlay} pointerEvents="none" />

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
                <Text style={styles.couponLabel}>
                  {isZh ? '优惠兑换代码' : 'Promo Coupon Code'}
                </Text>
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
                {copied
                  ? isZh
                    ? '已复制'
                    : 'Copied'
                  : isZh
                  ? '复制'
                  : 'Copy'}
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
            <Text style={styles.claimButtonText}>
              {isZh ? '立即领取特惠' : 'Claim Promo Deal'}
            </Text>
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
    marginBottom: 20,
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
    fontSize: 12,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFE4E6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  timerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#E11D48',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    height: 160,
    position: 'relative',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#0F172A',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
  },
  topBadgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  discountPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#0050D6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  discountPillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  savePill: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  savePillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
  },
  imageBottomContent: {
    gap: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#E2E8F0',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bodyContainer: {
    padding: 14,
    gap: 12,
  },
  couponBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  couponLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  couponIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
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
    color: '#0050D6',
    letterSpacing: 0.5,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  copyButtonActive: {
    borderColor: '#86EFAC',
    backgroundColor: '#F0FDF4',
  },
  copyButtonPressed: {
    opacity: 0.7,
  },
  copyButtonText: {
    fontSize: 11,
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
  },
  policyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  claimButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#0050D6',
    paddingVertical: 11,
    borderRadius: 12,
  },
  claimButtonPressed: {
    opacity: 0.9,
  },
  claimButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
