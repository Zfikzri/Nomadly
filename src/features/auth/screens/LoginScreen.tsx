import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  AuthHeader,
  AuthInputField,
  SocialAuthButtons,
} from '../components';
import { validateLoginForm } from '../services/mockAuth';
import type { LoginFormData } from '../types';

export function LoginScreen() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: 'alex@travel.com', // Pre-filled for effortless testing
    password: 'password123',  // Pre-filled for effortless testing
    rememberMe: true,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = () => {
    const result = validateLoginForm(formData);
    if (!result.valid) {
      Alert.alert('Perhatian', result.error);
      return;
    }

    setIsSubmitting(true);
    // Hardcoded auth simulation
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Login Berhasil!',
        `Selamat datang kembali, ${formData.email}!`,
        [
          {
            text: 'Mulai Menjelajah',
            onPress: () => router.replace('/(tabs)'),
          },
        ]
      );
    }, 400);
  };

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            bounces={false}>
            {/* Header: Sky Gradient with Silhouette & Typography */}
            <AuthHeader />

            {/* White Surface Sheet Container */}
            <View style={styles.whiteSheet}>
              {/* Heading & Switch Link */}
              <View style={styles.headerTitleRow}>
                <Text style={styles.sheetTitle}>Login</Text>
                <View style={styles.switchWrapper}>
                  <Text style={styles.switchPrompt}>Don't Have An Account? </Text>
                  <Pressable onPress={() => router.push('/register')}>
                    <Text style={styles.switchAction}>Sign Up</Text>
                  </Pressable>
                </View>
              </View>

              {/* Input: Email */}
              <AuthInputField
                iconName={{ ios: 'envelope.fill', android: 'mail', web: 'mail' }}
                iconColor="#2563EB"
                placeholder="Alamat Email (cth: alex@travel.com)"
                value={formData.email}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, email: text }))}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              {/* Input: Password */}
              <AuthInputField
                iconName={{ ios: 'lock.fill', android: 'lock', web: 'lock' }}
                iconColor="#2563EB"
                placeholder="Password"
                value={formData.password}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, password: text }))}
                isPassword={true}
                isPasswordVisible={isPasswordVisible}
                onTogglePasswordVisibility={() => setIsPasswordVisible((v) => !v)}
              />

              {/* Utility Row: Remember Me & Forgot Password */}
              <View style={styles.utilityRow}>
                <Pressable
                  style={styles.rememberMeWrapper}
                  onPress={() =>
                    setFormData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }))
                  }>
                  <View
                    style={[
                      styles.checkbox,
                      formData.rememberMe && styles.checkboxActive,
                    ]}>
                    {formData.rememberMe && (
                      <SymbolView
                        name={{ ios: 'checkmark', android: 'check', web: 'check' }}
                        size={12}
                        tintColor="#FFFFFF"
                      />
                    )}
                  </View>
                  <Text style={styles.rememberMeText}>Remember Me</Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    Alert.alert(
                      'Lupa Password',
                      'Link reset kata sandi telah dikirimkan ke email terdaftar (fitur demo).'
                    )
                  }>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </Pressable>
              </View>

              {/* Primary Action Button: Login */}
              <Pressable
                style={({ pressed }) => [
                  styles.loginButton,
                  pressed && styles.buttonPressed,
                  isSubmitting && styles.buttonDisabled,
                ]}
                onPress={handleLogin}
                disabled={isSubmitting}>
                <Text style={styles.loginButtonText}>
                  {isSubmitting ? 'Memproses...' : 'Login'}
                </Text>
              </Pressable>

              {/* Social Login Options */}
              <SocialAuthButtons
                onApplePress={() => {
                  Alert.alert('Apple Sign In', 'Login cepat via Apple ID berhasil! (Mock)', [
                    { text: 'Lanjut', onPress: () => router.replace('/(tabs)') },
                  ]);
                }}
                onGooglePress={() => {
                  Alert.alert('Google Sign In', 'Login cepat via Google Account berhasil! (Mock)', [
                    { text: 'Lanjut', onPress: () => router.replace('/(tabs)') },
                  ]);
                }}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#BAE6FD',
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  whiteSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
    marginTop: 10,
  },
  headerTitleRow: {
    alignItems: 'center',
    marginBottom: 24,
  },
  sheetTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
  },
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchPrompt: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
  switchAction: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '700',
  },
  utilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 20,
  },
  rememberMeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  rememberMeText: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500',
  },
  forgotPasswordText: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    height: 54,
    borderRadius: 27,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});
