import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
  UseMutationResult,
} from '@tanstack/react-query';
import {
  fetchUsersApi,
  fetchUserByIdApi,
  createUserApi,
  updateUserApi,
  deleteUserApi,
  CreateUserDto,
  UpdateUserDto,
} from '../api';
import type { User } from './types';

export const USERS_QUERY_KEY = ['users'] as const;

export const getUserQueryKey = (id: string) => ['users', { id }] as const;

export const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: USERS_QUERY_KEY,
    queryFn: fetchUsersApi,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

export const useUser = (userId: string): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: getUserQueryKey(userId),
    queryFn: () => fetchUserByIdApi(userId),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

export const useCreateUser = (): UseMutationResult<
  User,
  Error,
  CreateUserDto
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
    },
  });
};

export const useUpdateUser = (): UseMutationResult<
  User,
  Error,
  UpdateUserDto
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: getUserQueryKey(data.id) });
    },
  });
};

export const useDeleteUser = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
    },
  });
};
