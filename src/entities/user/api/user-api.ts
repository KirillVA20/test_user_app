import { apiInstance } from '@/shared/api/instance';
import type { User } from '../model/types';

export interface CreateUserDto {
  name: string;
  avatar: string;
}

export interface UpdateUserDto {
  id: string;
  name: string;
  avatar: string;
}

export const fetchUsersApi = async (): Promise<User[]> => {
  const response = await apiInstance.get<User[]>('/users');

  return response.data;
};

export const fetchUserByIdApi = async (userId: string): Promise<User> => {
  const response = await apiInstance.get<User>(`/users/${userId}`);

  return response.data;
};

export const createUserApi = async (data: CreateUserDto): Promise<User> => {
  const response = await apiInstance.post<User>('/users', data);

  return response.data;
};

export const updateUserApi = async (data: UpdateUserDto): Promise<User> => {
  const response = await apiInstance.put<User>(`/users/${data.id}`, {
    name: data.name,
    avatar: data.avatar,
  });

  return response.data;
};

export const deleteUserApi = async (userId: string): Promise<void> => {
  await apiInstance.delete(`/users/${userId}`);
};
