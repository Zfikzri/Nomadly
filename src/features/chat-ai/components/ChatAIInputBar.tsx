import { SymbolView } from 'expo-symbols';
import { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';

type ChatAIInputBarProps = {
  onSend: (text: string) => void;
  onCameraPress?: () => void;
  onMicPress?: () => void;
  placeholder?: string;
};

export function ChatAIInputBar({
  onSend,
  onCameraPress,
  onMicPress,
  placeholder,
}: ChatAIInputBarProps) {
  const { isZh } = useLanguage();
  const [text, setText] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const resolvedPlaceholder =
    placeholder ??
    (isZh
      ? '询问预算、汇率或旅行路线...'
      : 'Ask about budget, rates, or routes...');

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setIsKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setIsKeyboardVisible(false)
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText('');
  };

  const tabBarBottom = Platform.select({
    ios: insets.bottom > 0 ? insets.bottom + 6 : 18,
    default: 18,
  });
  // Generous gap of 24px above FloatingTabBar to avoid cramped layout
  const bottomClearance = isKeyboardVisible ? 12 : tabBarBottom + 68 + 24;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 12 : 0}>
      <View style={[styles.outerContainer, { paddingBottom: bottomClearance }]}>
        <View style={styles.pillContainer}>
          {/* Camera Button */}
          <Pressable
            hitSlop={8}
            onPress={onCameraPress}
            style={({ pressed }) => [styles.iconBtn, pressed && styles.btnPressed]}>
            <SymbolView
              name={{ ios: 'camera.fill', android: 'photo_camera', web: 'photo_camera' }}
              size={18}
              tintColor="#64748B"
            />
          </Pressable>

          {/* Mic Button */}
          <Pressable
            hitSlop={8}
            onPress={onMicPress}
            style={({ pressed }) => [styles.iconBtn, pressed && styles.btnPressed]}>
            <SymbolView
              name={{ ios: 'mic.fill', android: 'mic', web: 'mic' }}
              size={18}
              tintColor="#64748B"
            />
          </Pressable>

          {/* Multiline Text Input with Auto-wrap and Max Height */}
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={resolvedPlaceholder}
            placeholderTextColor="#94A3B8"
            style={styles.textInput}
            multiline
            maxHeight={110}
            textAlignVertical="center"
          />

          {/* Blue Circular Send Button with Up Arrow */}
          <Pressable
            hitSlop={6}
            onPress={handleSend}
            style={({ pressed }) => [
              styles.sendButton,
              pressed && styles.sendButtonPressed,
              !text.trim() && styles.sendButtonDisabled,
            ]}>
            <SymbolView
              name={{ ios: 'arrow.up', android: 'arrow_upward', web: 'arrow_upward' }}
              size={16}
              tintColor="#FFFFFF"
              weight="bold"
            />
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: 'transparent',
  },
  pillContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    minHeight: 50,
  },
  iconBtn: {
    padding: 6,
    marginBottom: 4,
  },
  btnPressed: {
    opacity: 0.6,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: Platform.OS === 'ios' ? 7 : 5,
    paddingHorizontal: 8,
    minHeight: 36,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0050D6',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginBottom: 2,
  },
  sendButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  sendButtonDisabled: {
    backgroundColor: '#94A3B8',
    opacity: 0.6,
  },
});
