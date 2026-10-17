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
  CountrySelectModal,
  DatePickerModal,
  GenderSelectModal,
  SocialAuthButtons,
} from '../components';
import {
  findCountryByName,
  validateRegisterForm,
} from '../services/mockAuth';
import type { CountryOption } from '../services/mockAuth';
import type { RegisterFormData } from '../types';

export function RegisterScreen() {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: 'Alex Rogers',               // Pre-filled for effortless testing
    email: 'alex@travel.com',              // Pre-filled for effortless testing
    age: '15 Okt 2002 (24 Tahun)',         // Pre-filled by birth date
    country: 'Indonesia',                  // Pre-filled for effortless testing
    gender: 'Laki-laki (Male)',           // Pre-filled for effortless testing
    password: 'password123',               // Pre-filled for effortless testing
    confirmPassword: 'password123',        // Pre-filled for effortless testing
    agreeTerms: true,                      // Pre-filled for effortless testing
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isGenderModalVisible, setIsGenderModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Selected country details
  const selectedCountryData: CountryOption = findCountryByName(formData.country);

  const handleRegister = () => {
    const result = validateRegisterForm(formData);
    if (!result.valid) {
      Alert.alert('Perhatian', result.error);
      return;
    }

    setIsSubmitting(true);
    // Hardcoded registration simulation
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Pendaftaran Berhasil!',
        `Selamat bergabung di Nomadly, ${formData.fullName}! Akun Anda siap digunakan.`,
        [
          {
            text: 'Masuk ke Beranda',
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
            bounces={false}
            keyboardShouldPersistTaps="handled">
            {/* Header: Sky Gradient with Subtitle */}
            <AuthHeader subtitle="Nomadly • Global Travel & Multi-Currency Finance" />

            {/* White Surface Sheet Container */}
            <View style={styles.whiteSheet}>
              {/* Heading & Switch Link */}
              <View style={styles.headerTitleRow}>
                <Text style={styles.sheetTitle}>Sign up</Text>
                <View style={styles.switchWrapper}>
                  <Text style={styles.switchPrompt}>Already Have An Account? </Text>
                  <Pressable onPress={() => router.push('/login')}>
                    <Text style={styles.switchAction}>Log In</Text>
                  </Pressable>
                </View>
              </View>

              {/* 1. Nama Lengkap */}
              <AuthInputField
                iconName={{ ios: 'person', android: 'person', web: 'person' }}
                placeholder="Nama Lengkap (cth: Alex Rogers)"
                value={formData.fullName}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, fullName: text }))}
                autoCapitalize="words"
              />

              {/* 2. Alamat Email */}
              <AuthInputField
                iconName={{ ios: 'envelope', android: 'mail', web: 'mail' }}
                placeholder="Alamat Email (cth: alex@travel.com)"
                value={formData.email}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, email: text }))}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              {/* 3. Umur (Dipilih by Tanggal Lahir) */}
              <AuthInputField
                iconName={{ ios: 'calendar', android: 'calendar_today', web: 'calendar_today' }}
                placeholder="Pilih Tanggal Lahir (cth: 15 Okt 2002)"
                value={formData.age}
                onPress={() => setIsDatePickerVisible(true)}
              />

              {/* 4. Pilih Negara Asal (Search Modal, Tanpa Kurs/Mata Uang) */}
              <AuthInputField
                iconName={{ ios: 'globe', android: 'public', web: 'public' }}
                placeholder="Pilih Negara Asal (cth: Indonesia)"
                value={
                  selectedCountryData
                    ? `${selectedCountryData.flag} ${selectedCountryData.name}`
                    : formData.country
                }
                onPress={() => setIsCountryModalVisible(true)}
              />

              {/* 5. Pilih Jenis Kelamin */}
              <AuthInputField
                iconName={{
                  ios: 'person.2',
                  android: 'group',
                  web: 'group',
                }}
                placeholder="Pilih Jenis Kelamin (Gender)"
                value={formData.gender}
                onPress={() => setIsGenderModalVisible(true)}
              />

              {/* 6. Kata Sandi */}
              <AuthInputField
                iconName={{ ios: 'lock', android: 'lock', web: 'lock' }}
                placeholder="Kata Sandi"
                value={formData.password}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, password: text }))}
                isPassword={true}
                isPasswordVisible={isPasswordVisible}
                onTogglePasswordVisibility={() => setIsPasswordVisible((v) => !v)}
              />

              {/* 7. Konfirmasi Kata Sandi */}
              <AuthInputField
                iconName={{ ios: 'lock.shield', android: 'verified_user', web: 'verified_user' }}
                placeholder="Konfirmasi Kata Sandi"
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  setFormData((prev) => ({ ...prev, confirmPassword: text }))
                }
                isPassword={true}
                isPasswordVisible={isConfirmPasswordVisible}
                onTogglePasswordVisibility={() => setIsConfirmPasswordVisible((v) => !v)}
              />

              {/* Agreement Checkbox */}
              <Pressable
                style={styles.agreementRow}
                onPress={() =>
                  setFormData((prev) => ({ ...prev, agreeTerms: !prev.agreeTerms }))
                }>
                <View
                  style={[
                    styles.checkbox,
                    formData.agreeTerms && styles.checkboxActive,
                  ]}>
                  {formData.agreeTerms && (
                    <SymbolView
                      name={{ ios: 'checkmark', android: 'check', web: 'check' }}
                      size={12}
                      tintColor="#FFFFFF"
                    />
                  )}
                </View>
                <Text style={styles.agreementText}>
                  Saya menyetujui{' '}
                  <Text
                    style={styles.linkText}
                    onPress={() =>
                      Alert.alert(
                        'Syarat & Ketentuan',
                        'Semua syarat & ketentuan penggunaan Nomadly berlaku sesuai hukum yang berlaku (fitur demo).'
                      )
                    }>
                    syarat & ketentuan
                  </Text>
                  {' '}serta{' '}
                  <Text
                    style={styles.linkText}
                    onPress={() =>
                      Alert.alert(
                        'Kebijakan Privasi',
                        'Data pribadi Anda terlindungi dan dienkripsi secara aman di Nomadly (fitur demo).'
                      )
                    }>
                    kebijakan privasi
                  </Text>
                  {' '}Nomadly.
                </Text>
              </Pressable>

              {/* Primary Action Button: Daftar Akun / Sign Up */}
              <Pressable
                style={({ pressed }) => [
                  styles.registerButton,
                  pressed && styles.buttonPressed,
                  isSubmitting && styles.buttonDisabled,
                ]}
                onPress={handleRegister}
                disabled={isSubmitting}>
                <Text style={styles.registerButtonText}>
                  {isSubmitting ? 'Memproses...' : 'Daftar Akun / Sign Up'}
                </Text>
              </Pressable>

              {/* Social Login Options */}
              <SocialAuthButtons
                onApplePress={() => {
                  Alert.alert('Apple Sign Up', 'Pendaftaran cepat via Apple ID berhasil! (Mock)', [
                    { text: 'Lanjut', onPress: () => router.replace('/(tabs)') },
                  ]);
                }}
                onGooglePress={() => {
                  Alert.alert('Google Sign Up', 'Pendaftaran cepat via Google Account berhasil! (Mock)', [
                    { text: 'Lanjut', onPress: () => router.replace('/(tabs)') },
                  ]);
                }}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* Date of Birth Picker Modal */}
      <DatePickerModal
        visible={isDatePickerVisible}
        onSelectDate={(formattedDate) =>
          setFormData((prev) => ({ ...prev, age: formattedDate }))
        }
        onClose={() => setIsDatePickerVisible(false)}
      />

      {/* Country Search Modal (Clean: No Kurs/Currency) */}
      <CountrySelectModal
        visible={isCountryModalVisible}
        selectedCountry={formData.country}
        onSelectCountry={(country) =>
          setFormData((prev) => ({ ...prev, country: country.name }))
        }
        onClose={() => setIsCountryModalVisible(false)}
      />

      {/* Gender Select Modal */}
      <GenderSelectModal
        visible={isGenderModalVisible}
        selectedGender={formData.gender}
        onSelectGender={(gender) =>
          setFormData((prev) => ({ ...prev, gender }))
        }
        onClose={() => setIsGenderModalVisible(false)}
      />
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
  },
  whiteSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
    marginTop: 8,
  },
  headerTitleRow: {
    alignItems: 'center',
    marginBottom: 18,
  },
  sheetTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
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
  agreementRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 4,
    marginBottom: 16,
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
    marginTop: 1,
  },
  checkboxActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  agreementText: {
    flex: 1,
    fontSize: 12,
    color: '#475569',
    lineHeight: 17,
    fontWeight: '500',
  },
  linkText: {
    color: '#2563EB',
    fontWeight: '700',
  },
  registerButton: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    backgroundColor: '#0F172A', // Dark Navy/Black button per Register_UI.png
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  registerButtonText: {
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
