import { StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n';

type HomeHeroHeaderProps = {
  userName?: string;
};

export function HomeHeroHeader({ userName = 'Alex' }: HomeHeroHeaderProps) {
  const { strings, t } = useLanguage();

  return (
    <View style={styles.container} className="px-6 pt-6 pb-2">
      <Text
        style={styles.title}
        className="text-[30px] font-extrabold text-slate-900 leading-[39px] tracking-tight mb-2.5">
        {strings.home.fundsHeading}
      </Text>
      <Text
        style={styles.subtitle}
        className="text-[15px] text-slate-700 font-medium leading-[23px]">
        {t('home.heroSubtitle', { name: userName })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.two,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 39,
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#334155',
    fontWeight: '500',
    lineHeight: 23,
  },
});
