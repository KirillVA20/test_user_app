import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchUsersApi } from '../api';
import type { User } from './types';

export const USERS_QUERY_KEY = ['users'] as const;

export const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: USERS_QUERY_KEY,
    queryFn: fetchUsersApi,
    staleTime: 5 * 60 * 1000, // 5 минут
    retry: 2,
  });
};
