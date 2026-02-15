export const nameRules = [
  { required: true, message: 'Пожалуйста, введите имя' },
  { min: 2, message: 'Имя должно содержать минимум 2 символа' },
];

export const avatarRules = [
  { required: true, message: 'Пожалуйста, введите URL аватара' },
  { type: 'url' as const, message: 'Пожалуйста, введите корректный URL' },
  {
    pattern: /^https?:\/\/.+/,
    message: 'URL должен начинаться с http:// или https://',
  },
];
