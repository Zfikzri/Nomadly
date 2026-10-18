import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLanguage } from '@/i18n';
import { MOCK_PROFILE_DATA } from '../services/mockData';

const AVAILABLE_COUNTRIES = [
  'United States',
  'Japan',
  'Singapore',
  'United Kingdom',
  'Germany',
  'Australia',
  'South Korea',
  'Thailand',
  'Indonesia',
  'France',
];

export function EditProfileScreen() {
  const { strings, isZh } = useLanguage();
  const [name, setName] = useState(MOCK_PROFILE_DATA.name);
  const [email, setEmail] = useState(MOCK_PROFILE_DATA.email);
  const [dateOfBirth, setDateOfBirth] = useState(MOCK_PROFILE_DATA.dateOfBirth);
  const [age, setAge] = useState(MOCK_PROFILE_DATA.age);
  const [country, setCountry] = useState(MOCK_PROFILE_DATA.country);

  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [tempDobInput, setTempDobInput] = useState(dateOfBirth);

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert(
        strings.common.notice,
        isZh ? '请输入您的真实姓名。' : 'Please enter your full name as shown on your passport.'
      );
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      Alert.alert(
        strings.common.notice,
        isZh ? '请输入有效的电子邮箱。' : 'Please enter a valid active email address.'
      );
      return;
    }

    Alert.alert(
      isZh ? '资料更新成功' : 'Profile Updated',
      isZh
        ? '您的身份与偏好已同步至全球游民专属数据中心。'
        : 'Your identity and nomad preferences have been securely synced.',
      [
        {
          text: strings.common.done,
          onPress: () => router.back(),
        },
      ]
    );
  };

  const handleSelectCountry = (selectedCountry: string) => {
    setCountry(selectedCountry);
    setCountryModalVisible(false);
  };

  const handleConfirmDob = () => {
    if (tempDobInput.trim()) {
      setDateOfBirth(tempDobInput.trim());
    }
    setDateModalVisible(false);
  };

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* ── Top Header ── */}
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [styles.backButton, pressed && { opacity: 0.6 }]}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel={strings.common.back}>
            <SymbolView
              name={{ ios: 'chevron.left', android: 'chevron_left', web: 'chevron_left' } as any}
              size={20}
              tintColor="#0F172A"
            />
          </Pressable>
          <Text style={styles.headerTitle}>{strings.profile.editProfile}</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}>

            {/* ── Headline Title & Subtitle ── */}
            <View style={styles.headlineSection}>
              <Text style={styles.headlineTitle}>
                {isZh ? '编辑游民档案' : 'Update Your Profile'}
              </Text>
              <Text style={styles.headlineSubtitle}>
                {isZh
                  ? '管理您的个人信息，畅享更智能、便捷的全球旅居体验。'
                  : 'Manage your personal details for a seamless and tailored nomad journey.'}
              </Text>
            </View>

            {/* ── White Card Container ── */}
            <View style={styles.card}>

              {/* ── Field 1: Full Name ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <View style={styles.labelGroup}>
                    <Text style={styles.fieldLabel}>{strings.profile.fullName}</Text>
                    <Text style={styles.fieldLabelSub}>
                      {isZh ? ' (需与证件一致)' : ' (Passport / ID)'}
                    </Text>
                  </View>
                  <Text style={styles.requiredBadge}>{isZh ? '必填' : 'Required'}</Text>
                </View>

                <View style={styles.inputBox}>
                  <SymbolView
                    name={{ ios: 'person', android: 'person', web: 'person' } as any}
                    size={18}
                    tintColor="#64748B"
                  />
                  <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={setName}
                    placeholder={strings.auth.fullNamePlaceholder}
                    placeholderTextColor="#94A3B8"
                    autoCapitalize="words"
                    accessibilityLabel={strings.profile.fullName}
                  />
                </View>

                <View style={styles.helperRow}>
                  <SymbolView
                    name={{ ios: 'info.circle', android: 'info', web: 'info' } as any}
                    size={13}
                    tintColor="#64748B"
                  />
                  <Text style={styles.helperText}>
                    {isZh
                      ? '请确保姓名与官方有效国际旅行证件完全一致。'
                      : 'Ensure name matches official travel documents.'}
                  </Text>
                </View>
              </View>

              {/* ── Field 2: Primary Email ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <Text style={styles.fieldLabel}>{strings.profile.primaryEmail}</Text>
                  <View style={styles.verifiedBadge}>
                    <SymbolView
                      name={{ ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' } as any}
                      size={12}
                      tintColor="#16A34A"
                    />
                    <Text style={styles.verifiedText}>{strings.common.verified}</Text>
                  </View>
                </View>

                <View style={styles.inputBox}>
                  <SymbolView
                    name={{ ios: 'envelope', android: 'mail', web: 'mail' } as any}
                    size={18}
                    tintColor="#64748B"
                  />
                  <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="name@email.com"
                    placeholderTextColor="#94A3B8"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    accessibilityLabel={strings.profile.primaryEmail}
                  />
                  <SymbolView
                    name={{ ios: 'checkmark.seal.fill', android: 'verified', web: 'verified' } as any}
                    size={18}
                    tintColor="#16A34A"
                  />
                </View>

                <View style={styles.helperRow}>
                  <SymbolView
                    name={{ ios: 'envelope', android: 'mail', web: 'mail' } as any}
                    size={13}
                    tintColor="#64748B"
                  />
                  <Text style={styles.helperText}>
                    {isZh
                      ? '用于电子凭证及多币种换汇交易通知。'
                      : 'Used for booking receipts and currency exchange alerts.'}
                  </Text>
                </View>
              </View>

              {/* ── Field 3: Date of Birth ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <Text style={styles.fieldLabel}>{strings.profile.birthDateAndAge}</Text>
                  <Text style={styles.ageBadge}>{age} {strings.profile.yearsOld}</Text>
                </View>

                <Pressable
                  style={({ pressed }) => [styles.inputBox, pressed && { opacity: 0.85 }]}
                  onPress={() => {
                    setTempDobInput(dateOfBirth);
                    setDateModalVisible(true);
                  }}
                  accessibilityRole="button"
                  accessibilityLabel={strings.profile.birthDateAndAge}>
                  <SymbolView
                    name={{ ios: 'calendar', android: 'calendar_today', web: 'calendar_today' } as any}
                    size={18}
                    tintColor="#64748B"
                  />
                  <View style={styles.dobTextGroup}>
                    <Text style={styles.dobTextMain}>{dateOfBirth} </Text>
                    <Text style={styles.dobTextSub}>(14/05/1996)</Text>
                  </View>
                  <SymbolView
                    name={{ ios: 'calendar', android: 'event', web: 'event' } as any}
                    size={18}
                    tintColor="#64748B"
                  />
                </Pressable>
              </View>

              {/* ── Field 4: Residence Country ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <Text style={styles.fieldLabel}>{strings.profile.residenceCountry}</Text>
                </View>

                <Pressable
                  style={({ pressed }) => [styles.inputBox, pressed && { opacity: 0.85 }]}
                  onPress={() => setCountryModalVisible(true)}
                  accessibilityRole="button"
                  accessibilityLabel={strings.profile.residenceCountry}>
                  <Text style={styles.countryValueText}>{country}</Text>
                  <SymbolView
                    name={{ ios: 'chevron.down', android: 'expand_more', web: 'expand_more' } as any}
                    size={18}
                    tintColor="#64748B"
                  />
                </Pressable>
              </View>

              {/* ── Field 5: Security Box ── */}
              <View style={styles.securityBox}>
                <View style={styles.shieldIconWrapper}>
                  <SymbolView
                    name={{ ios: 'lock.shield.fill', android: 'security', web: 'security' } as any}
                    size={18}
                    tintColor="#0050D6"
                  />
                </View>
                <View style={styles.securityTextGroup}>
                  <Text style={styles.securityTitle}>
                    {isZh ? 'Nomadly 银行级隐私保护' : 'Bank-Grade Security Guaranteed'}
                  </Text>
                  <Text style={styles.securityDescription}>
                    {isZh
                      ? '所有数据均采用端到端军工级加密保护，绝不会向任何第三方披露。'
                      : 'All personal and financial data is encrypted and strictly protected 24/7.'}
                  </Text>
                </View>
              </View>
            </View>

            {/* ── Action Buttons ── */}
            <View style={styles.actionSection}>
              {/* Primary Save Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.saveButton,
                  pressed && styles.saveButtonPressed,
                ]}
                onPress={handleSave}
                accessibilityRole="button"
                accessibilityLabel={strings.common.save}>
                <Text style={styles.saveButtonText}>{strings.common.save}</Text>
                <SymbolView
                  name={{ ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' } as any}
                  size={16}
                  tintColor="#FFFFFF"
                />
              </Pressable>

              {/* Secondary Cancel Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.cancelButton,
                  pressed && { opacity: 0.6 },
                ]}
                onPress={() => router.back()}
                accessibilityRole="button"
                accessibilityLabel={strings.common.cancel}>
                <Text style={styles.cancelButtonText}>{strings.common.cancel}</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* ── Country Picker Modal ── */}
      <Modal
        visible={countryModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setCountryModalVisible(false)}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setCountryModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{strings.auth.selectCountry}</Text>
            {AVAILABLE_COUNTRIES.map((item) => (
              <Pressable
                key={item}
                style={({ pressed }) => [
                  styles.modalItem,
                  item === country && styles.modalItemActive,
                  pressed && { opacity: 0.7 },
                ]}
                onPress={() => handleSelectCountry(item)}>
                <Text
                  style={[
                    styles.modalItemText,
                    item === country && styles.modalItemTextActive,
                  ]}>
                  {item}
                </Text>
                {item === country && (
                  <SymbolView
                    name={{ ios: 'checkmark', android: 'check', web: 'check' } as any}
                    size={16}
                    tintColor="#0050D6"
                  />
                )}
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* ── Date of Birth Quick Edit Modal ── */}
      <Modal
        visible={dateModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDateModalVisible(false)}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setDateModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{strings.auth.selectBirthDate}</Text>
            <View style={[styles.inputBox, { marginTop: 12 }]}>
              <TextInput
                style={styles.textInput}
                value={tempDobInput}
                onChangeText={setTempDobInput}
                placeholder="14 May 1996"
                placeholderTextColor="#94A3B8"
              />
            </View>
            <Pressable
              style={[styles.saveButton, { marginTop: 14 }]}
              onPress={handleConfirmDob}>
              <Text style={styles.saveButtonText}>{strings.common.confirm}</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },

  // ── Header ──
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  headerPlaceholder: {
    width: 36,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  // ── Headline ──
  headlineSection: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 16,
  },
  headlineTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  headlineSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#475569',
    fontWeight: '400',
  },

  // ── Main Card ──
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 3,
  },

  // ── Field Block ──
  fieldBlock: {
    marginBottom: 16,
  },
  fieldHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldLabel: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#0F172A',
  },
  fieldLabelSub: {
    fontSize: 12.5,
    color: '#64748B',
    fontWeight: '500',
  },
  requiredBadge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0050D6',
  },

  // Verified Badge
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    borderRadius: 12,
  },
  verifiedText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#16A34A',
  },

  // Age Badge
  ageBadge: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0050D6',
  },

  // Input Box
  inputBox: {
    backgroundColor: '#F0F4FF',
    borderRadius: 14,
    height: 52,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    paddingVertical: 0,
  },

  // Helper Row
  helperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
    paddingHorizontal: 2,
  },
  helperText: {
    fontSize: 11.5,
    color: '#64748B',
    lineHeight: 16,
    flex: 1,
  },

  // DOB group
  dobTextGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dobTextMain: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  dobTextSub: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },

  // Country
  countryValueText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },

  // ── Keamanan Privasi Box ──
  securityBox: {
    backgroundColor: '#EEF4FF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 4,
  },
  shieldIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  securityTextGroup: {
    flex: 1,
  },
  securityTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },
  securityDescription: {
    fontSize: 11.5,
    lineHeight: 16.5,
    color: '#475569',
    fontWeight: '400',
  },

  // ── Action Section ──
  actionSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  saveButton: {
    backgroundColor: '#000000',
    height: 54,
    borderRadius: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  saveButtonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15.5,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 6,
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },

  // ── Modal Styles ──
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 14,
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 10,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  modalItemActive: {
    backgroundColor: '#EFF6FF',
  },
  modalItemText: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '500',
  },
  modalItemTextActive: {
    fontWeight: '700',
    color: '#0050D6',
  },
  modalInputBox: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 14,
  },
  modalTextInput: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '600',
  },
  modalSaveButton: {
    backgroundColor: '#0050D6',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalSaveButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
