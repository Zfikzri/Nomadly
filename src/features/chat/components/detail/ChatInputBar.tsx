import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';

type ChatInputBarProps = {
  onSendMessage?: (text: string) => void;
  onPlusPress?: () => void;
  onCameraPress?: () => void;
  onMicPress?: () => void;
  placeholder?: string;
};

export function ChatInputBar({
  onSendMessage,
  onPlusPress,
  onCameraPress,
  onMicPress,
  placeholder,
}: ChatInputBarProps) {
  const { isZh } = useLanguage();
  const [inputText, setInputText] = useState('');
  const insets = useSafeAreaInsets();

  const resolvedPlaceholder =
    placeholder ?? (isZh ? '输入消息...' : 'Type a message...');

  const handleSend = () => {
    if (inputText.trim().length === 0) return;
    onSendMessage?.(inputText.trim());
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 8 : 0}>
      <View
        style={[
          styles.containerWrapper,
          {
            paddingBottom: Math.max(insets.bottom, 12),
          },
        ]}>
        <View style={styles.floatingBar}>
          {/* 1. Plus Button */}
          <Pressable
            hitSlop={8}
            onPlusPress={onPlusPress}
            style={({ pressed }) => [styles.iconButton, pressed && styles.buttonPressed]}>
            <SymbolView
              name={{ ios: 'plus.circle', android: 'add_circle', web: 'add_circle' }}
              size={22}
              tintColor="#334155"
              weight="medium"
            />
          </Pressable>

          {/* 2. Camera Button */}
          <Pressable
            hitSlop={8}
            onPress={onCameraPress}
            style={({ pressed }) => [styles.iconButton, pressed && styles.buttonPressed]}>
            <SymbolView
              name={{ ios: 'camera', android: 'photo_camera', web: 'photo_camera' }}
              size={20}
              tintColor="#334155"
              weight="medium"
            />
          </Pressable>

          {/* 3. Text Input Field with Translate badge 文A */}
          <View style={styles.inputPill}>
            <TextInput
              style={styles.textInput}
              placeholder={resolvedPlaceholder}
              placeholderTextColor="#94A3B8"
              value={inputText}
              onChangeText={setInputText}
              multiline={false}
              returnKeyType="send"
              onSubmitEditing={handleSend}
            />

            {/* Translate Symbol 文A */}
            <View style={styles.translateBadge}>
              <SymbolView
                name={{ ios: 'character.bubble', android: 'translate', web: 'translate' }}
                size={14}
                tintColor="#2563EB"
              />
            </View>
          </View>

          {/* 4. Mic Button */}
          <Pressable
            hitSlop={8}
            onPress={onMicPress}
            style={({ pressed }) => [styles.iconButton, pressed && styles.buttonPressed]}>
            <SymbolView
              name={{ ios: 'mic.fill', android: 'mic', web: 'mic' }}
              size={20}
              tintColor="#334155"
              weight="medium"
            />
          </Pressable>

          {/* 5. Circular Send Button */}
          <Pressable
            onPress={handleSend}
            style={({ pressed }) => [styles.sendButton, pressed && styles.sendButtonPressed]}>
            <SymbolView
              name={{ ios: 'paperplane.fill', android: 'send', web: 'send' }}
              size={15}
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
  containerWrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  floatingBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    gap: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  iconButton: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.6,
  },
  inputPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 38,
  },
  textInput: {
    flex: 1,
    fontSize: 13,
    color: '#0F172A',
    paddingVertical: 0,
    marginRight: 4,
  },
  translateBadge: {
    padding: 2,
  },
  sendButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#0050D6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0050D6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  sendButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.95 }],
  },
});
