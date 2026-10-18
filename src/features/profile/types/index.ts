export type Gender = 'male' | 'female';

export * from './otherUser';

export type UserProfileData = {
  name: string;
  email: string;
  avatarUrl: string;
  nomadId: string;
  isVip: boolean;
  dateOfBirth: string;
  age: number;
  country: string;
  countryCode: string;
  gender: Gender;
  isEmailVerified: boolean;
  completionPercent: number;
  completionHint: string;
};
