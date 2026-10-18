export type ApiResponse<T> = {
  data: T;
  message?: string;
  success: boolean;
};

export type PaginationParams = {
  page?: number;
  limit?: number;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
};
