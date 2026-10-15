import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

type RemittanceSearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
};

export function RemittanceSearchBar({
  value,
  onChangeText,
  onClear,
}: RemittanceSearchBarProps) {
  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <View style={styles.iconWrapper}>
        {Platform.OS === 'ios' ? (
          <SymbolView
            name="magnifyingglass"
            size={16}
            tintColor="#64748B"
          />
        ) : (
          <Text style={styles.fallbackSearchIcon}>🔍</Text>
        )}
      </View>

      {/* Text Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Cari bank mitra atau negara..."
        placeholderTextColor="#94A3B8"
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="never"
      />

      {/* Clear Button */}
      {value.length > 0 && (
        <Pressable
          onPress={() => {
            onChangeText('');
            onClear?.();
          }}
          hitSlop={8}
          style={styles.clearButton}>
          <Text style={styles.clearIcon}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 14,
    height: 46,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  iconWrapper: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackSearchIcon: {
    fontSize: 14,
  },
  input: {
    flex: 1,
    fontSize: 13.5,
    fontWeight: '500',
    color: '#0F172A',
    paddingVertical: 0,
  },
  clearButton: {
    padding: 4,
  },
  clearIcon: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
  },
});
