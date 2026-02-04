import { apiInstance } from '@/shared/api/instance';
import type { User } from '../model/types';

export const fetchUsersApi = async (): Promise<User[]> => {
  const response = await apiInstance.get<User[]>('/users');

  return response.data;
};
