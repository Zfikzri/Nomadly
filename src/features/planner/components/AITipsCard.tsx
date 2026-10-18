import { SymbolView } from 'expo-symbols';
import { StyleSheet, Text, View } from 'react-native';

type AITipsCardProps = {
  title: string;
  description: string;
};

export function AITipsCard({ title, description }: AITipsCardProps) {
  return (
    <View style={styles.card} className="bg-[#EEF2FF] rounded-2xl p-4 mt-3.5 flex-row gap-3 items-start border border-blue-100/60">
      {/* Icon: Solid Blue Circle with Lightbulb/Sparkle */}
      <View style={styles.iconCircle} className="w-7 h-7 rounded-full bg-[#1D4ED8] items-center justify-center mt-0.5">
        <SymbolView
          name={{ ios: 'lightbulb.fill', android: 'lightbulb', web: 'lightbulb' }}
          size={14}
          tintColor="#FFFFFF"
        />
      </View>

      {/* Text Content */}
      <View style={styles.contentCol} className="flex-1">
        <Text style={styles.title} className="text-blue-700 font-extrabold text-[11px] tracking-wide mb-1">
          {title}
        </Text>
        <Text style={styles.description} className="text-slate-700 text-xs leading-[18px] font-medium">
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 14,
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1D4ED8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  contentCol: {
    flex: 1,
  },
  title: {
    color: '#1D4ED8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  description: {
    color: '#334155',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
  },
});
