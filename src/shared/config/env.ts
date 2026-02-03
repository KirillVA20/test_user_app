export const ENV = {
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000/api',
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production',
};
