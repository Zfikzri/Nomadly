import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';
import {
  PromoDetailHeader,
  PromoHeroCard,
  PromoOrbAiCard,
  PromoPartnersCard,
  PromoPriceCard,
  PromoTermsCard,
  PromoVoucherCard,
} from '../components/detail';
import { getPromoDetail } from '../services/promoDetailMock';
import type { ReservationPartner } from '../types/detail';

type PromoDetailScreenProps = {
  id?: string;
};

export function PromoDetailScreen({ id = 'promo-1' }: PromoDetailScreenProps) {
  const { isZh } = useLanguage();
  const detail = getPromoDetail(id, isZh);

  const handleSelectPartner = (partner: ReservationPartner) => {
    Alert.alert(
      isZh ? '预约渠道' : 'Booking Channel',
      isZh
        ? `正在前往 ${partner.name.replace('\n', ' ')}，专享返现 ${partner.cashbackText}。`
        : `Redirecting to ${partner.name.replace('\n', ' ')} with promo cashback ${partner.cashbackText}.`,
      [
        { text: isZh ? '继续' : 'Continue' },
        { text: isZh ? '取消' : 'Cancel', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.root}>
      {/* Top Safe Area & White Header */}
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <PromoDetailHeader title={isZh ? '特惠详情' : 'Promo Details'} />

        {/* Scrollable Sky Canvas Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* 1. Hero Promo Card */}
          <PromoHeroCard
            badgeLeft={detail.hero.badgeLeft}
            badgeRight={detail.hero.badgeRight}
            routeSubtitle={detail.hero.routeSubtitle}
            title={detail.hero.title}
            imageUrl={detail.hero.imageUrl}
          />

          {/* 2. Harga Spesial Card */}
          <PromoPriceCard
            currentPrice={detail.price.currentPrice}
            strikePrice={detail.price.strikePrice}
            discountPill={detail.price.discountPill}
            usdEstimate={detail.price.usdEstimate}
            savingsAmount={detail.price.savingsAmount}
            savingsBadge={detail.price.savingsBadge}
          />

          {/* 3. Kode Voucher Card */}
          <PromoVoucherCard
            sectionTitle={detail.voucher.sectionTitle}
            badgeText={detail.voucher.badgeText}
            label={detail.voucher.label}
            code={detail.voucher.code}
          />

          {/* 4. Saran Orb AI Card */}
          <PromoOrbAiCard
            title={detail.orbAiAdvice.title}
            messagePrefix={detail.orbAiAdvice.messagePrefix}
            highlightText={detail.orbAiAdvice.highlightText}
            messageSuffix={detail.orbAiAdvice.messageSuffix}
          />

          {/* 5. Syarat & Ketentuan Card */}
          <PromoTermsCard
            title={detail.terms.title}
            items={detail.terms.items}
          />

          {/* 6. Kanal Reservasi Mitra Card */}
          <PromoPartnersCard
            title={detail.partners.title}
            badgeText={detail.partners.badgeText}
            partners={detail.partners.list}
            onSelectPartner={handleSelectPartner}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    backgroundColor: '#D8EEFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
    gap: 16,
  },
});
