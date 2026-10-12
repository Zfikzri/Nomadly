import { SymbolView } from 'expo-symbols';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import type { CommunityPlan } from '../types';

type CommunityPlansSectionProps = {
  plans: CommunityPlan[];
  onSeeAll?: () => void;
  onSelectPlan?: (plan: CommunityPlan) => void;
};

export function CommunityPlansSection({
  plans,
  onSeeAll,
  onSelectPlan,
}: CommunityPlansSectionProps) {
  return (
    <View style={styles.container} className="mt-6 mb-4">
      {/* Header */}
      <View style={styles.headerRow} className="flex-row items-center justify-between px-6 mb-2">
        <View style={styles.titleLeft} className="flex-row items-center gap-2">
          <SymbolView
            name={{ ios: 'person.2.fill', android: 'group', web: 'group' }}
            size={18}
            tintColor="#0050D6"
          />
          <Text style={styles.sectionTitle} className="text-lg font-bold text-slate-900">
            Community & Travel Plans
          </Text>
        </View>
        <Pressable hitSlop={8} onPress={onSeeAll}>
          <Text style={styles.seeAllText} className="text-[13px] font-semibold text-[#0050D6]">
            See all &gt;
          </Text>
        </Pressable>
      </View>

      {/* Cards Horizontal Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        className="gap-4">
        {plans.map((plan) => (
          <Pressable
            key={plan.id}
            style={({ pressed }) => [styles.planCard, pressed && styles.cardPressed]}
            className="w-[220px] bg-white rounded-[22px] p-6 border border-slate-100 shadow-sm"
            onPress={() => onSelectPlan?.(plan)}>
            {/* Top row: Flag + Country Pill */}
            <View style={styles.cardTopRow} className="flex-row items-center justify-between mb-4">
              {/* Indonesian Flag Round Badge */}
              <View style={styles.flagCircle} className="w-[30px] h-[30px] rounded-full overflow-hidden border border-slate-200">
                <View style={styles.flagTop} className="flex-1 bg-red-600" />
                <View style={styles.flagBottom} className="flex-1 bg-white" />
              </View>

              {/* Destination Pill */}
              <View style={styles.countryPill} className="bg-sky-100 rounded-full px-2.5 py-1">
                <Text style={styles.countryText} className="text-[11px] font-bold text-sky-600">
                  {plan.countryPill}
                </Text>
              </View>
            </View>

            {/* Title & Metadata */}
            <Text style={styles.planTitle} className="text-base font-bold text-slate-900 mb-1.5" numberOfLines={1}>
              {plan.title}
            </Text>
            <Text style={styles.planDate} className="text-xs text-slate-500 mb-4 leading-[18px]">
              {plan.dateRange} • {plan.duration}
            </Text>

            {/* Bottom Row */}
            <View style={styles.cardBottomRow} className="flex-row items-center justify-between">
              <View style={styles.repliesRow} className="flex-row items-center gap-1.5">
                <SymbolView
                  name={{ ios: 'bubble.left', android: 'chat_bubble_outline', web: 'chat_bubble' }}
                  size={14}
                  tintColor="#0050D6"
                />
                <Text style={styles.repliesText} className="text-xs text-slate-500 font-medium">
                  {plan.repliesCount} replies
                </Text>
              </View>

              <View style={styles.arrowButton} className="w-[26px] h-[26px] rounded-full bg-slate-100 items-center justify-center">
                <SymbolView
                  name={{
                    ios: 'arrow.up.right',
                    android: 'north_east',
                    web: 'arrow_outward',
                  }}
                  size={12}
                  tintColor="#45464C"
                  weight="bold"
                />
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.four,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.four,
    marginBottom: Spacing.two,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#151C27',
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0050D6',
  },
  scrollContent: {
    paddingLeft: Spacing.four,
    paddingRight: Spacing.four,
    paddingTop: Spacing.one,
    paddingBottom: Spacing.four, // Extra bottom padding so shadow/border never gets clipped
    gap: Spacing.three,
  },
  planCard: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: Spacing.four,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.three,
  },
  flagCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  flagTop: {
    flex: 1,
    backgroundColor: '#DC2626',
  },
  flagBottom: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  countryPill: {
    backgroundColor: '#E0F2FE',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3.5,
  },
  countryText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0284C7',
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#151C27',
    lineHeight: 22,
    marginBottom: 6,
  },
  planDate: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
    marginBottom: 16,
  },
  cardBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  repliesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  repliesText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  arrowButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
