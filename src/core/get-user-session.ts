import { auth } from '@/auth';
import { getSession } from 'next-auth/react';

export const getUserSession = async ({ server }: { server: boolean }) => {
  let session;
  if (server) {
    session = await auth();
  } else {
    session = await getSession();
  }
  return session;
};
