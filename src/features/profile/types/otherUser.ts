import type { Gender } from './index';

export type OtherUserProfileData = {
  id: string;
  name: string;
  avatarUrl: string;
  country: string;
  countryCode: string;
  countryFlag: string;
  city: string;
  age: number;
  gender: Gender;
  isOnline: boolean;
  nomadId?: string;
  isVip?: boolean;
  role?: string;
  bio?: string;
  tags?: string[];
  communityHubs?: string[];
};
