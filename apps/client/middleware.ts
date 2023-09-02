export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/',
    '/stseats',
    '/api/group',
  ],
};
