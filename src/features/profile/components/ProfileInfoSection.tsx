import { SymbolView } from 'expo-symbols';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Gender, UserProfileData } from '../types';

// ── Reusable info field row ───────────────────────────────────────────────────
type FieldRowProps = {
  label: string;
  value: string;
  iconName: { ios: string; android: string; web: string };
  rightBadge?: React.ReactNode;
  hasChevron?: boolean;
  onPress?: () => void;
};

function FieldRow({ label, value, iconName, rightBadge, hasChevron, onPress }: FieldRowProps) {
  const content = (
    <View style={fieldStyles.row}>
      <SymbolView name={iconName as any} size={16} tintColor="#64748B" />
      <Text style={fieldStyles.value} numberOfLines={1}>{value}</Text>
      {rightBadge}
      {hasChevron && (
        <SymbolView
          name={{ ios: 'chevron.down', android: 'expand_more', web: 'expand_more' } as any}
          size={14}
          tintColor="#94A3B8"
        />
      )}
    </View>
  );

  return (
    <View style={fieldStyles.wrapper}>
      <Text style={fieldStyles.label}>{label}</Text>
      {onPress ? (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [fieldStyles.fieldBox, pressed && { opacity: 0.75 }]}>
          {content}
        </Pressable>
      ) : (
        <View style={fieldStyles.fieldBox}>{content}</View>
      )}
    </View>
  );
}

const fieldStyles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 7,
    letterSpacing: 0.1,
  },
  fieldBox: {
    backgroundColor: '#F0F4FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  value: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#1E293B',
  },
});

// ── Gender Selector ───────────────────────────────────────────────────────────
type GenderSelectorProps = {
  value: Gender;
  onChange?: (gender: Gender) => void;
};

function GenderSelector({ value, onChange }: GenderSelectorProps) {
  return (
    <View style={genderStyles.wrapper}>
      <Text style={genderStyles.label}>Jenis Kelamin</Text>
      <View style={genderStyles.row}>
        {/* Laki-laki */}
        <Pressable
          style={({ pressed }) => [
            genderStyles.option,
            value === 'male' && genderStyles.optionActive,
            pressed && { opacity: 0.8 },
          ]}
          onPress={() => onChange?.('male')}
          accessibilityLabel="Laki-laki">
          <View style={[genderStyles.radio, value === 'male' && genderStyles.radioActive]}>
            {value === 'male' && <View style={genderStyles.radioInner} />}
          </View>
          <Text style={[genderStyles.optionText, value === 'male' && genderStyles.optionTextActive]}>
            Laki-laki
          </Text>
        </Pressable>

        {/* Perempuan */}
        <Pressable
          style={({ pressed }) => [
            genderStyles.option,
            value === 'female' && genderStyles.optionActive,
            pressed && { opacity: 0.8 },
          ]}
          onPress={() => onChange?.('female')}
          accessibilityLabel="Perempuan">
          <View style={[genderStyles.radio, value === 'female' && genderStyles.radioActive]}>
            {value === 'female' && <View style={genderStyles.radioInner} />}
          </View>
          <Text style={[genderStyles.optionText, value === 'female' && genderStyles.optionTextActive]}>
            Perempuan
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const genderStyles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 10,
    letterSpacing: 0.1,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F0F4FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  optionActive: {
    backgroundColor: '#EEF2FF',
    borderColor: '#2563EB',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CBD5E1',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: '#2563EB',
    backgroundColor: '#2563EB',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
  },
  optionTextActive: {
    color: '#1E293B',
    fontWeight: '600',
  },
});

// ── Verified badge ────────────────────────────────────────────────────────────
function VerifiedBadge() {
  return (
    <View style={verifiedStyles.badge}>
      <SymbolView
        name={{ ios: 'checkmark.seal.fill', android: 'verified', web: 'verified' } as any}
        size={13}
        tintColor="#22C55E"
      />
      <Text style={verifiedStyles.text}>Terverifikasi</Text>
    </View>
  );
}

const verifiedStyles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#22C55E',
  },
});

// ── Main ProfileInfoSection ───────────────────────────────────────────────────
type ProfileInfoSectionProps = {
  profile: Pick<
    UserProfileData,
    'name' | 'email' | 'dateOfBirth' | 'age' | 'country' | 'countryCode' | 'gender' | 'isEmailVerified'
  >;
};

export function ProfileInfoSection({ profile }: ProfileInfoSectionProps) {
  return (
    <View style={styles.container}>
      {/* Section header */}
      <View style={styles.sectionHeader}>
        <SymbolView
          name={{ ios: 'person.text.rectangle.fill', android: 'badge', web: 'badge' } as any}
          size={20}
          tintColor="#2563EB"
        />
        <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
      </View>

      {/* Nama Lengkap */}
      <FieldRow
        label="Nama Lengkap"
        value={profile.name}
        iconName={{ ios: 'person.fill', android: 'person', web: 'person' }}
      />

      {/* Email Utama */}
      <View style={fieldStyles.wrapper}>
        <View style={styles.emailLabelRow}>
          <Text style={fieldStyles.label}>Email Utama</Text>
          {profile.isEmailVerified && <VerifiedBadge />}
        </View>
        <View style={[fieldStyles.fieldBox, { flexDirection: 'row', gap: 10, alignItems: 'center' }]}>
          <SymbolView
            name={{ ios: 'envelope.fill', android: 'mail', web: 'mail' } as any}
            size={16}
            tintColor="#64748B"
          />
          <Text style={[fieldStyles.value, { color: '#1E293B' }]} numberOfLines={1}>
            {profile.email}
          </Text>
        </View>
      </View>

      {/* Tanggal Lahir & Usia */}
      <FieldRow
        label="Tanggal Lahir & Usia"
        value={`${profile.dateOfBirth} (${profile.age} Tahun)`}
        iconName={{ ios: 'calendar', android: 'calendar_today', web: 'calendar_today' }}
        hasChevron
        onPress={() =>
          Alert.alert('Tanggal Lahir', 'Edit tanggal lahir (fitur coming soon)')
        }
      />

      {/* Negara Domisili */}
      <FieldRow
        label="Negara Domisili / Asal"
        value={`${profile.country} (${profile.countryCode})`}
        iconName={{ ios: 'globe', android: 'language', web: 'language' }}
      />

      {/* Jenis Kelamin */}
      <GenderSelector value={profile.gender} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  emailLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
});
