import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

type CommunitySearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
};

export function CommunitySearchBar({
  value,
  onChangeText,
  onClear,
}: CommunitySearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari grup rute, kota, atau split bill..."
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
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
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '400',
    paddingVertical: 0,
    marginRight: 8,
  },
  clearButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearPressed: {
    opacity: 0.7,
    backgroundColor: '#E2E8F0',
  },
});
