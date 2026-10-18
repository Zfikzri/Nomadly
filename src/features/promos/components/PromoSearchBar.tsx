import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { useLanguage } from '@/i18n';

type PromoSearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress?: () => void;
  placeholder?: string;
};

export function PromoSearchBar({
  value,
  onChangeText,
  onFilterPress,
  placeholder,
}: PromoSearchBarProps) {
  const { isZh } = useLanguage();
  const defaultPlaceholder = isZh
    ? '搜索目的地、航空公司或城市...'
    : 'Search destination, airline, or city...';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? defaultPlaceholder}
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      <Pressable
        hitSlop={8}
        onPress={onFilterPress}
        style={({ pressed }) => [styles.filterButton, pressed && styles.filterPressed]}>
        <SymbolView
          name={{ ios: 'slider.horizontal.3', android: 'tune', web: 'tune' }}
          size={18}
          tintColor="#475569"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 13.5,
    color: '#0F172A',
    fontWeight: '400',
    paddingVertical: 0,
    marginRight: 8,
  },
  filterButton: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterPressed: {
    opacity: 0.6,
  },
});
