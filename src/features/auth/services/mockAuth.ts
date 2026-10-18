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
  country: 'United States',
  gender: 'Male',
  role: 'Full-stack Nomad & Investor',
  isVip: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
};

export const GENDER_OPTIONS = [
  { id: 'male', label: 'Male', labelZh: '男士', icon: '👨' },
  { id: 'female', label: 'Female', labelZh: '女士', icon: '👩' },
  { id: 'other', label: 'Other', labelZh: '其他', icon: '⚧️' },
] as const;

export function validateLoginForm(data: LoginFormData, lang: 'en' | 'zh' = 'en'): { valid: boolean; error?: string } {
  const isZh = lang === 'zh';
  if (!data.email.trim()) return { valid: false, error: isZh ? '请输入电子邮箱。' : 'Please enter your email address.' };
  if (!data.email.includes('@')) return { valid: false, error: isZh ? '电子邮箱格式不正确。' : 'Please enter a valid email address.' };
  if (!data.password.trim()) return { valid: false, error: isZh ? '请输入密码。' : 'Please enter your password.' };
  return { valid: true };
}

export function validateRegisterForm(data: RegisterFormData, lang: 'en' | 'zh' = 'en'): { valid: boolean; error?: string } {
  const isZh = lang === 'zh';
  if (!data.fullName.trim()) return { valid: false, error: isZh ? '请输入您的姓名。' : 'Please enter your full name.' };
  if (!data.email.trim() || !data.email.includes('@')) return { valid: false, error: isZh ? '电子邮箱格式不正确。' : 'Please enter a valid email address.' };
  if (!data.age.trim()) return { valid: false, error: isZh ? '请输入您的出生日期/年龄。' : 'Please enter your age / birth date.' };
  if (!data.country.trim()) return { valid: false, error: isZh ? '请选择您的常住国家/地区。' : 'Please select your country of residence.' };
  if (!data.gender.trim()) return { valid: false, error: isZh ? '请选择您的性别。' : 'Please select your gender.' };
  if (data.password.length < 6) return { valid: false, error: isZh ? '密码长度至少需为 6 个字符。' : 'Password must be at least 6 characters.' };
  if (data.password !== data.confirmPassword) return { valid: false, error: isZh ? '两次输入的密码不一致。' : 'Passwords do not match.' };
  if (!data.agreeTerms) return { valid: false, error: isZh ? '请阅读并同意服务条款与隐私政策。' : 'You must agree to the Terms & Conditions.' };
  return { valid: true };
}
