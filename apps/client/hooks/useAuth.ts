import { getServerSession } from 'next-auth/next';
import type { Session } from 'next-auth';
import { authOptions } from '../app/api/auth/[...nextauth]/route';

export const useServerSession = async (): Promise<Session | null> => getServerSession(authOptions);
