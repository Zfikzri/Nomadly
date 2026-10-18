import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { useLanguage } from '@/i18n';

type ChatSearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
};

export function ChatSearchBar({
  value,
  onChangeText,
  onClear,
}: ChatSearchBarProps) {
  const { isZh } = useLanguage();

  return (
    <View style={styles.container}>
      <SymbolView
        name={{ ios: 'magnifyingglass', android: 'search', web: 'search' }}
        size={18}
        tintColor="#94A3B8"
        weight="medium"
      />
      <TextInput
        style={styles.input}
        placeholder={
          isZh
            ? '搜索游民伙伴、小组或分账记录'
            : 'Search travel buddies, groups, or split records'
        }
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      {value.length > 0 && (
        <Pressable
          hitSlop={8}
          onPress={onClear}
          style={({ pressed }) => [styles.clearButton, pressed && styles.clearPressed]}>
          <SymbolView
            name={{ ios: 'xmark', android: 'close', web: 'close' }}
            size={12}
            tintColor="#64748B"
            weight="bold"
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: '#0F172A',
    fontWeight: '400',
    paddingVertical: 0,
  },
  clearButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearPressed: {
    opacity: 0.7,
    backgroundColor: '#E2E8F0',
  },
});
