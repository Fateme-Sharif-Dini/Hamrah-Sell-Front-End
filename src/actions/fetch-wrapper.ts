'use server';

import { API_URL } from '@/configs/global'; // Global API URL configuration
import { AuthorizeError, auth, signOut } from '@/auth'; // Authentication utilities
import { Problem } from '@/types/http-errors.interface'; // Problem type for HTTP errors
import { OperationResult } from '@/types/operation-result'; // Operation result type
import { redirect, RedirectType } from 'next/navigation'; // Redirect utilities from Next.js

export type FetchWrapperArgs = {
  onSuccess?: () => void; // Optional success callback
  API_URL?: string; // Optional API URL override
  responsible?: boolean; // Flag to determine if the response should be returned
  responsibleText?: boolean; // Flag to determine if the response should be returned
  noAuth?: boolean;
};

// TODO: Implement Refresh Token
// Main fetchWrapper function
export const fetchWrapper = async <T = void>(
  url: string,
  options: RequestInit = {},
  args?: FetchWrapperArgs
): Promise<OperationResult<T>> => {
  let redirectPath: string | null = null; // Initialize redirect path
  try {
    // Fetch current session
    const session = await auth();
    if (!args?.noAuth && !session?.token.token) {
      // If no access token, sign out and set redirect path
      signOut();
      redirectPath = '/signin';
    }

    // Fetch data from API with the provided options and authorization header
    const response = await fetch(`${args?.API_URL ?? API_URL}${url}`, {
      ...options,
      cache: 'no-store',
      headers: {
        ...options.headers,
        ...(!args?.noAuth
          ? { Authorization: `Bearer ${session?.token.token}` }
          : {}),
      },
    });

    if (!response.ok) {
      // Handle unauthorized access
      if (!args?.noAuth && response.status === 401) {
        signOut();
        redirectPath = '/signin';
      } else {
        // Handle other response errors
        let error: Problem | undefined;
        try {
          error = (await response.json()) as Problem;
        } catch (jsonError) {
          console.log({ jsonError });
          // If parsing JSON fails, handle it accordingly
          throw new AuthorizeError({
            status: response.status,
            title: 'Failed to parse error response',
            detail: 'The response could not be parsed as JSON.',
          });
        }
        if (error) {
          throw new AuthorizeError({ ...error, status: response.status });
        }
      }
    }

    const data: OperationResult<T> = { isSuccess: true }; // Initialize success result

    // Call onSuccess callback if provided
    args?.onSuccess?.();

    // If responsible flag is set, include response data
    if (args?.responsible) {
      data.response = args.responsibleText
        ? await response.text()
        : await response.json();
    }

    return data; // Return the operation result
  } catch (error) {
    // Handle errors
    return handleError<T>(error);
  } finally {
    // Redirect if redirect path is set
    if (redirectPath) return handleRedirect();
  }
};

// Redirect handler function
const handleRedirect = (): never => {
  return redirect('/signin', RedirectType.push);
};

// Error handler function
const handleError = <T>(error: unknown): OperationResult<T> => {
  let operationResult: OperationResult<T> = {
    isSuccess: false,
    error: {
      status: 400,
      title: 'خطایی رخ داد.',
    },
  };
  // Customize error handling for AuthorizeError
  if (error instanceof AuthorizeError) {
    operationResult.error = error.problem!;
    if (!operationResult.error.detail) {
      operationResult.error.detail =
        operationResult.error.title || 'خظایی سمت سرور رخ داد';
    }
  }
  return operationResult; // Return the operation result with error
};
