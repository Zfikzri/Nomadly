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

import { MOCK_PROFILE_DATA } from '../services/mockData';

const AVAILABLE_COUNTRIES = [
  'Indonesia',
  'Singapura',
  'Malaysia',
  'Thailand',
  'Jepang',
  'Korea Selatan',
  'Australia',
  'Amerika Serikat',
  'Inggris',
];

export function EditProfileScreen() {
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
      Alert.alert('Validasi Gagal', 'Nama lengkap wajib diisi sesuai paspor atau KTP.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Validasi Gagal', 'Harap masukkan alamat email aktif yang valid.');
      return;
    }

    Alert.alert(
      'Profil Berhasil Diperbarui',
      'Data identitas Anda telah disinkronkan secara aman dengan Paspor Global & Vault Finansial.',
      [
        {
          text: 'OK',
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
            accessibilityLabel="Kembali">
            <SymbolView
              name={{ ios: 'chevron.left', android: 'chevron_left', web: 'chevron_left' } as any}
              size={20}
              tintColor="#0F172A"
            />
          </Pressable>
          <Text style={styles.headerTitle}>Nomadly User Profile</Text>
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
              <Text style={styles.headlineTitle}>Perbarui Profil Anda</Text>
              <Text style={styles.headlineSubtitle}>
                Kelola informasi pribadi Anda untuk pengalaman perjalanan yang lebih personal dan nyaman.
              </Text>
            </View>

            {/* ── White Card Container ── */}
            <View style={styles.card}>

              {/* ── Field 1: Nama Lengkap ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <View style={styles.labelGroup}>
                    <Text style={styles.fieldLabel}>Nama Lengkap</Text>
                    <Text style={styles.fieldLabelSub}> (Sesuai Paspor / KTP)</Text>
                  </View>
                  <Text style={styles.requiredBadge}>Wajib</Text>
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
                    placeholder="Masukkan nama lengkap"
                    placeholderTextColor="#94A3B8"
                    autoCapitalize="words"
                    accessibilityLabel="Nama Lengkap"
                  />
                </View>

                <View style={styles.helperRow}>
                  <SymbolView
                    name={{ ios: 'info.circle', android: 'info', web: 'info' } as any}
                    size={13}
                    tintColor="#64748B"
                  />
                  <Text style={styles.helperText}>
                    Pastikan nama sesuai dengan dokumen identitas perjalanan resmi.
                  </Text>
                </View>
              </View>

              {/* ── Field 2: Alamat Email Aktif ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <Text style={styles.fieldLabel}>Alamat Email Aktif</Text>
                  <View style={styles.verifiedBadge}>
                    <SymbolView
                      name={{ ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' } as any}
                      size={12}
                      tintColor="#16A34A"
                    />
                    <Text style={styles.verifiedText}>Terverifikasi</Text>
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
                    placeholder="nama@email.com"
                    placeholderTextColor="#94A3B8"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    accessibilityLabel="Alamat Email Aktif"
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
                    Digunakan untuk bukti transaksi tiket dan konfirmasi valuta.
                  </Text>
                </View>
              </View>

              {/* ── Field 3: Tanggal Lahir ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <Text style={styles.fieldLabel}>Tanggal Lahir</Text>
                  <Text style={styles.ageBadge}>{age} Tahun</Text>
                </View>

                <Pressable
                  style={({ pressed }) => [styles.inputBox, pressed && { opacity: 0.85 }]}
                  onPress={() => {
                    setTempDobInput(dateOfBirth);
                    setDateModalVisible(true);
                  }}
                  accessibilityRole="button"
                  accessibilityLabel="Pilih Tanggal Lahir">
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

              {/* ── Field 4: Negara Domisili / Asal ── */}
              <View style={styles.fieldBlock}>
                <View style={styles.fieldHeaderRow}>
                  <Text style={styles.fieldLabel}>Negara Domisili / Asal</Text>
                </View>

                <Pressable
                  style={({ pressed }) => [styles.inputBox, pressed && { opacity: 0.85 }]}
                  onPress={() => setCountryModalVisible(true)}
                  accessibilityRole="button"
                  accessibilityLabel="Pilih Negara Domisili">
                  <Text style={styles.countryValueText}>{country}</Text>
                  <SymbolView
                    name={{ ios: 'chevron.down', android: 'expand_more', web: 'expand_more' } as any}
                    size={18}
                    tintColor="#64748B"
                  />
                </Pressable>
              </View>

              {/* ── Field 5: Keamanan Privasi Nomadly Card ── */}
              <View style={styles.securityBox}>
                <View style={styles.shieldIconWrapper}>
                  <SymbolView
                    name={{ ios: 'lock.shield.fill', android: 'security', web: 'security' } as any}
                    size={18}
                    tintColor="#0050D6"
                  />
                </View>
                <View style={styles.securityTextGroup}>
                  <Text style={styles.securityTitle}>Keamanan Privasi Nomadly</Text>
                  <Text style={styles.securityDescription}>
                    Informasi ini akan disinkronkan secara aman dengan Paspor Global & Vault Finansial Anda tanpa dibagikan ke pihak ketiga.
                  </Text>
                </View>
              </View>
            </View>

            {/* ── Action Buttons ── */}
            <View style={styles.actionSection}>
              {/* Primary Black Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.saveButton,
                  pressed && styles.saveButtonPressed,
                ]}
                onPress={handleSave}
                accessibilityRole="button"
                accessibilityLabel="Simpan dan Lanjutkan">
                <Text style={styles.saveButtonText}>Simpan & Lanjutkan</Text>
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
                accessibilityLabel="Batal atau Kembali">
                <Text style={styles.cancelButtonText}>Batal / Kembali</Text>
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
            <Text style={styles.modalTitle}>Pilih Negara Domisili</Text>
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
            <Text style={styles.modalTitle}>Ubah Tanggal Lahir</Text>
            <Text style={styles.modalSubtitle}>Format contoh: 14 Mei 1996</Text>
            <View style={styles.modalInputBox}>
              <TextInput
                style={styles.modalTextInput}
                value={tempDobInput}
                onChangeText={setTempDobInput}
                placeholder="Tanggal Lahir"
                placeholderTextColor="#94A3B8"
              />
            </View>
            <Pressable
              style={styles.modalSaveButton}
              onPress={handleConfirmDob}>
              <Text style={styles.modalSaveButtonText}>Terapkan</Text>
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
