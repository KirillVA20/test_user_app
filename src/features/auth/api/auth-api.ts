export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

const MOCK_USER = {
  username: 'admin',
  password: 'admin',
};

export const loginApi = (credentials: LoginCredentials): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === MOCK_USER.username &&
        credentials.password === MOCK_USER.password
      ) {
        resolve({ token: 'mock-jwt-token-' + Date.now() });
      } else {
        reject(new Error('Неверный логин или пароль'));
      }
    }, 2000);
  });
};
