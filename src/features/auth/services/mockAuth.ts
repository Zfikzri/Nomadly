import {
  ALL_COUNTRIES,
  findCountryByName,
  formatRupiah,
  searchCountries,
} from '@/features/planner/services/mockData';
import type { CountryOption } from '@/features/planner/types';
import type { AuthUser, LoginFormData, RegisterFormData } from '../types';

export { ALL_COUNTRIES, findCountryByName, formatRupiah, searchCountries };
export type { CountryOption };

export const DEFAULT_MOCK_USER: AuthUser = {
  id: 'usr_alex',
  name: 'Alex Rogers',
  email: 'alex@travel.com',
  age: 24,
  country: 'Indonesia',
  gender: 'Laki-laki (Male)',
  role: 'Full-stack Nomad & Investor',
  isVip: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
};

export const GENDER_OPTIONS = [
  { id: 'male', label: 'Laki-laki (Male)', icon: '👨' },
  { id: 'female', label: 'Perempuan (Female)', icon: '👩' },
  { id: 'other', label: 'Lainnya (Other)', icon: '⚧️' },
] as const;

export function validateLoginForm(data: LoginFormData): { valid: boolean; error?: string } {
  if (!data.email.trim()) return { valid: false, error: 'Masukkan alamat email.' };
  if (!data.email.includes('@')) return { valid: false, error: 'Format email tidak valid.' };
  if (!data.password.trim()) return { valid: false, error: 'Masukkan password.' };
  return { valid: true };
}

export function validateRegisterForm(data: RegisterFormData): { valid: boolean; error?: string } {
  if (!data.fullName.trim()) return { valid: false, error: 'Masukkan nama lengkap.' };
  if (!data.email.trim() || !data.email.includes('@')) return { valid: false, error: 'Format email tidak valid.' };
  if (!data.age.trim()) return { valid: false, error: 'Masukkan umur Anda.' };
  if (!data.country.trim()) return { valid: false, error: 'Pilih negara asal Anda.' };
  if (!data.gender.trim()) return { valid: false, error: 'Pilih jenis kelamin Anda.' };
  if (data.password.length < 6) return { valid: false, error: 'Kata sandi minimal 6 karakter.' };
  if (data.password !== data.confirmPassword) return { valid: false, error: 'Konfirmasi kata sandi tidak cocok.' };
  if (!data.agreeTerms) return { valid: false, error: 'Anda harus menyetujui syarat & ketentuan.' };
  return { valid: true };
}
