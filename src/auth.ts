import NextAuth, { CredentialsSignin } from 'next-auth';
import { IUser, IUserProfile, UserToken } from '@/types/user.interface';
import { authConfig } from './auth.config';
import { Problem } from '@/types/http-errors.interface';
declare module 'next-auth' {
  interface User extends IUser {}

  interface Session {
    token: UserToken;
    user: IUserProfile;
  }
}

export class AuthorizeError extends CredentialsSignin {
  problem: Problem;
  constructor(err: Problem) {
    super();
    this.problem = err;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    // role?: string[]
    token: UserToken;
    user: IUserProfile;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
