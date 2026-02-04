import { fetchUsersApi, USERS_QUERY_KEY } from '@/entities/user';
import { QueryClient } from '@tanstack/react-query';

export const usersLoader = (queryClient: QueryClient) => async () => {
  return queryClient.ensureQueryData({
    queryKey: USERS_QUERY_KEY,
    queryFn: fetchUsersApi,
  });
};
