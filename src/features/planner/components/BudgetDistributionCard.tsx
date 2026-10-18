import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

import { useLanguage } from '@/i18n';
import type { AIEstimateResult, BudgetItem } from '../types';
import { formatCurrencyValue } from '../services/mockData';
import { AITipsCard } from './AITipsCard';

type BudgetDistributionCardProps = {
  result: AIEstimateResult;
};

export function BudgetDistributionCard({ result }: BudgetDistributionCardProps) {
  const { strings, isZh } = useLanguage();

  return (
    <View style={styles.card} className="bg-white rounded-[28px] p-5 shadow-sm border border-slate-100">
      {/* Header Row: Title & 100% Circle Badge */}
      <View style={styles.headerRow} className="flex-row items-center justify-between mb-2">
        <View style={styles.titleCol} className="flex-1 pr-3">
          <Text style={styles.title} className="text-[17px] font-extrabold text-slate-900 tracking-tight">
            {strings.planner.budgetDistributionTitle}
          </Text>
          <Text style={styles.subtitle} className="text-xs text-slate-500 mt-0.5">
            {isZh
              ? `基于 ${result.durationDays} 天行程的每日理性开支拆解`
              : `Daily breakdown for ${result.durationDays}-day stay`}
          </Text>
        </View>

        {/* Circular percentage badge */}
        <View
          style={[
            styles.percentageCircle,
            { borderColor: result.totalPercentage === 100 ? '#2563EB' : '#16A34A' },
          ]}
          className="w-11 h-11 rounded-full border-[3px] items-center justify-center bg-blue-50/40">
          <Text
            style={[
              styles.percentageCircleText,
              { color: result.totalPercentage === 100 ? '#2563EB' : '#16A34A' },
            ]}
            className="text-[11px] font-extrabold">
            {result.totalPercentage}%
          </Text>
        </View>
      </View>

      {/* Allocation Items */}
      <View style={styles.itemsList} className="gap-2.5 mt-2">
        {result.items.map((item: BudgetItem) => (
          <View key={item.id} style={styles.itemRow} className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-100/80">
            {/* Top row: Icon + Info + Amount */}
            <View style={styles.itemTopRow} className="flex-row items-center justify-between">
              {/* Left: Icon & Title */}
              <View style={styles.itemLeft} className="flex-row items-center gap-3 flex-1 pr-2">
                <View
                  style={[styles.itemIconBox, { backgroundColor: `${item.color}18` }]}
                  className="w-9 h-9 rounded-xl items-center justify-center">
                  <SymbolView name={item.iconName} size={18} tintColor={item.color} />
                </View>
                <View style={styles.itemTitleCol} className="flex-1">
                  <Text style={styles.itemCategory} className="text-[13px] font-bold text-slate-900" numberOfLines={1}>
                    {item.category}
                  </Text>
                  <Text style={styles.itemSubCategory} className="text-xs text-slate-400 mt-0.5" numberOfLines={1}>
                    {item.subCategory}
                  </Text>
                </View>
              </View>

              {/* Right: Amount & Percent */}
              <View style={styles.itemRight} className="items-end">
                <Text style={styles.itemAmount} className="text-[14px] font-extrabold text-slate-900">
                  {formatCurrencyValue(item.amountTargetCurrency, result.currencySymbol)}
                </Text>
                <Text style={[styles.itemPercent, { color: item.color }]} className="text-xs font-bold mt-0.5">
                  {item.percentage}%
                </Text>
              </View>
            </View>

            {/* Bottom Progress Bar */}
            <View style={styles.progressTrack} className="w-full h-1.5 rounded-full bg-slate-200 mt-3 overflow-hidden">
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  },
                ]}
                className="h-full rounded-full"
              />
            </View>
          </View>
        ))}
      </View>

      {/* AI Tips Card at the bottom of the card */}
      <AITipsCard
        title={result.aiTipTitle}
        description={result.aiTipDescription}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  titleCol: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  percentageCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF6FF',
  },
  percentageCircleText: {
    fontSize: 11,
    fontWeight: '800',
  },
  itemsList: {
    gap: 10,
    marginTop: 8,
  },
  itemRow: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  itemTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingRight: 8,
  },
  itemIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitleCol: {
    flex: 1,
  },
  itemCategory: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
  },
  itemSubCategory: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  itemAmount: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
  },
  itemPercent: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: 1,
  },
  progressTrack: {
    width: '100%',
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E2E8F0',
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});
