import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '@/i18n';

type Props = {
  variant?: 'light' | 'white' | 'dark';
};

export function LanguagePillSwitcher({ variant = 'light' }: Props) {
  const { language, setLanguage } = useLanguage();

  const isEn = language === 'en';
  const isZh = language === 'zh';

  return (
    <View
      style={[
        styles.pillContainer,
        variant === 'white' && styles.pillContainerWhite,
        variant === 'dark' && styles.pillContainerDark,
      ]}>
      <Pressable
        onPress={() => setLanguage('en')}
        hitSlop={4}
        style={[styles.button, isEn && styles.buttonActive]}>
        <Text style={[styles.label, isEn && styles.labelActive]}>EN</Text>
      </Pressable>

      <Pressable
        onPress={() => setLanguage('zh')}
        hitSlop={4}
        style={[styles.button, isZh && styles.buttonActive]}>
        <Text style={[styles.label, isZh && styles.labelActive]}>中文</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: 20,
    padding: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  pillContainerWhite: {
    backgroundColor: '#F1F5F9',
    borderColor: '#E2E8F0',
  },
  pillContainerDark: {
    backgroundColor: '#1E293B',
    borderColor: '#334155',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  buttonActive: {
    backgroundColor: '#2563EB',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  labelActive: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});
