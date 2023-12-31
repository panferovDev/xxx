import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from '@xxx/prism';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn(params) {
      if (params.account?.provider === 'google') {
        const allowedDomains = ['elbrusboot.camp'];
        if (allowedDomains.some((domain) => params.user.email?.endsWith(`@${domain}`))) {
          try {
            await prisma.user.upsert({
              where: {
                email: params.user.email as string,
              },
              update: {},
              create: {
                email: params.user.email as string,
                name: params.user.name as string,
              },
            });
          } catch (e) {
            console.log(e);
          }
          return true;
        }
      }
      return false;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
