import type { NextAuthConfig, Session } from 'next-auth';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '@/types/user.interface';
import { redirect } from 'next/navigation';
import { isDateExpired } from '@/utils/time';
import { NEXT_AUTH_SECRET } from '@/configs/global';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ErrorResponse } from './core/http-service/http-service';
import { BlazeError } from './core/http-service/blaze-error';
import { fetchWrapper } from './actions/fetch-wrapper';
import { Problem } from './types/http-errors.interface';

export const authConfig = {
  trustHost: true,
  secret: NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        phoneNumber: { label: 'Phone Number', type: 'text' },
        otpCode: { label: 'OTP Code', type: 'text' },
      },
      async authorize(credentials) {
        try {
          const user = await fetchWrapper<IUser>(
            `/v1/auth/verify-otp`,
            {
              method: 'POST',
              body: JSON.stringify({
                phoneNumber: credentials.phoneNumber as string,
                otpCode: credentials.otpCode as string,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            },
            {
              noAuth: true,
              responsible: true,
            }
          );

          if (!user.response) {
            throw {
              status: 400,
              title: 'نداریم رسپانس',
            } satisfies Problem;
          }

          // Auth.js expects the user object to be returned
          return user.response;
        } catch (error) {
          // throw new Error((error as Problem).detail);
          throw new BlazeError(error as ErrorResponse);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        const decoded = jwtDecode<{ exp: number }>(user.token);
        token.token = {
          token: user.token,
          exp: decoded.exp * 1000,
        };
        token.user = user.user;
      }

      if (trigger === 'update' && session?.token) {
        token.token = session.token;
        token.user = session.user;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const isTokenExpired = isDateExpired(token.token?.exp);
      if (isTokenExpired) {
        redirect('/api/auth/signOut');
      } else {
        session.token = {
          token: token.token?.token!,
          exp: token.token?.exp!,
        };
        session.user = token.user!;
      }
      return session;
    },
    async authorized({ auth, request }) {
      // const { nextUrl } = request;
      // const isAuthenticated = !!auth?.user;
      // const authRoutes = ['/signin', '/verification'];

      // const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

      // if (isAuthRoutes && isAuthenticated) {
      //   const callbackUrl = nextUrl.searchParams.get('callbackUrl');

      //   return Response.redirect(
      //     new URL(`${callbackUrl ? callbackUrl : '/products'}`, nextUrl)
      //   );
      // }

      // // Redirect unauthenticated users trying to access protected routes
      // if (!isAuthenticated && !isAuthRoutes) {
      //   // Add callback to redirect users back to the requested page after authentication
      //   const redirectUrl = `/signin?callbackUrl=${nextUrl.pathname}`;
      //   return Response.redirect(new URL(redirectUrl, nextUrl));
      // }

      return true;
    },
    async redirect({ url, baseUrl }) {
      // ✅ Ensure the redirect happens correctly
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`; // Relative URL case
      } else if (url.startsWith('http')) {
        return url; // External URL case
      }
      return `${baseUrl}/profile`; // Default to Dashboard
    },
  },
} satisfies NextAuthConfig;
