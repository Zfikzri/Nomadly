import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '@/i18n';

type SocialAuthButtonsProps = {
  onApplePress?: () => void;
  onGooglePress?: () => void;
};

export function SocialAuthButtons({
  onApplePress,
  onGooglePress,
}: SocialAuthButtonsProps) {
  const { strings } = useLanguage();

  return (
    <View style={styles.container}>
      {/* Divider */}
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>{strings.auth.orContinueWith}</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Buttons Row */}
      <View style={styles.buttonsRow}>
        {/* Apple Button */}
        <Pressable
          style={({ pressed }) => [styles.appleButton, pressed && styles.buttonPressed]}
          onPress={onApplePress}>
          <SymbolView
            name={{ ios: 'apple.logo', android: 'apple', web: 'apple' }}
            size={18}
            tintColor="#FFFFFF"
          />
          <Text style={styles.appleText}>Apple</Text>
        </Pressable>

        {/* Google Button */}
        <Pressable
          style={({ pressed }) => [styles.googleButton, pressed && styles.buttonPressed]}
          onPress={onGooglePress}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png',
            }}
            style={styles.googleIcon}
            contentFit="contain"
          />
          <Text style={styles.googleText}>Google</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    paddingHorizontal: 12,
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  appleButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0F172A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  appleText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  googleButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  googleIcon: {
    width: 18,
    height: 18,
  },
  googleText: {
    color: '#1E293B',
    fontSize: 14,
    fontWeight: '700',
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
