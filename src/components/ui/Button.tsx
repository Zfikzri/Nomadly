import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  StyleSheet,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { ThemedText } from './ThemedText';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonProps = Omit<PressableProps, 'style'> & {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function Button({
  title,
  variant = 'primary',
  loading = false,
  disabled,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  const getContainerStyle = (pressed: boolean): ViewStyle => {
    const base: ViewStyle = {
      backgroundColor: variant === 'primary' ? theme.text : variant === 'secondary' ? theme.backgroundElement : 'transparent',
      borderColor: variant === 'outline' ? theme.backgroundSelected : 'transparent',
      borderWidth: variant === 'outline' ? 1 : 0,
      opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
    };
    return base;
  };

  const getTextColor = () => {
    if (variant === 'primary') return theme.background;
    return theme.text;
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.base, getContainerStyle(pressed), style]}
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={getTextColor()} />
      ) : (
        <ThemedText
          style={[
            styles.text,
            { color: getTextColor() },
            textStyle,
          ]}>
          {title}
        </ThemedText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 48,
    paddingHorizontal: Spacing.four,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
