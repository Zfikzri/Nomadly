export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterFormData = {
  fullName: string;
  email: string;
  age: string;
  country: string;
  gender: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  age?: number;
  country: string;
  gender?: string;
  role: string;
  isVip: boolean;
  avatarUrl: string;
};
