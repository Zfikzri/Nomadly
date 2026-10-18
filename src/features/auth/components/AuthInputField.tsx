import { SymbolView } from 'expo-symbols';
import { ReactNode } from 'react';
import {
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type AuthInputFieldProps = {
  iconName: {
    ios: string;
    android: string;
    web: string;
  };
  iconColor?: string;
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  rightElement?: ReactNode;
  onPress?: () => void;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  onTogglePasswordVisibility?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};

export function AuthInputField({
  iconName,
  iconColor = '#94A3B8',
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  rightElement,
  onPress,
  isPassword = false,
  isPasswordVisible = false,
  onTogglePasswordVisibility,
  autoCapitalize = 'none',
}: AuthInputFieldProps) {
  // If onPress is provided, act as a clickable selector
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
        <View style={styles.leftIconWrapper}>
          <SymbolView name={iconName} size={18} tintColor={iconColor} />
        </View>

        <Text
          style={[styles.fieldText, value ? styles.fieldValue : styles.fieldPlaceholder]}
          numberOfLines={1}>
          {value || placeholder}
        </Text>

        {rightElement ? (
          <View style={styles.rightWrapper}>{rightElement}</View>
        ) : (
          <View style={styles.rightWrapper}>
            <SymbolView
              name={{ ios: 'chevron.down', android: 'expand_more', web: 'expand_more' }}
              size={16}
              tintColor="#64748B"
            />
          </View>
        )}
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftIconWrapper}>
        <SymbolView name={iconName} size={18} tintColor={iconColor} />
      </View>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword ? !isPasswordVisible : secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />

      {isPassword && onTogglePasswordVisibility ? (
        <Pressable
          hitSlop={8}
          onPress={onTogglePasswordVisibility}
          style={({ pressed }) => [styles.rightWrapper, pressed && styles.eyePressed]}>
          <SymbolView
            name={{
              ios: isPasswordVisible ? 'eye.fill' : 'eye.slash.fill',
              android: isPasswordVisible ? 'visibility' : 'visibility_off',
              web: isPasswordVisible ? 'visibility' : 'visibility_off',
            }}
            size={18}
            tintColor="#94A3B8"
          />
        </Pressable>
      ) : rightElement ? (
        <View style={styles.rightWrapper}>{rightElement}</View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 25,
    height: 48,
    paddingHorizontal: 16,
    marginBottom: 9,
  },
  pressed: {
    backgroundColor: '#E2E8F0',
  },
  leftIconWrapper: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '500',
    paddingVertical: 0,
  },
  fieldText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  fieldValue: {
    color: '#0F172A',
  },
  fieldPlaceholder: {
    color: '#94A3B8',
  },
  rightWrapper: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyePressed: {
    opacity: 0.6,
  },
});
