export type UserModalMode = 'create' | 'edit';

export interface UserFormValues {
  name: string;
  avatar: string;
}

export type { CreateUserDto, UpdateUserDto } from '@/entities/user/api';
