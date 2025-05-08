import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { API_URL } from '@/configs/global';
import { getSession } from 'next-auth/react';

import { auth, signOut } from '@/auth';
import { getUserSession } from '../get-user-session';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  formData?: boolean;
}
export interface ErrorResponse {
  type: string;
  title: string;
  status: number;
  traceId: string;
  message?: string;
  detail?: string;
  errors: {
    independedGroup: string[];
  };
}

export async function fetchWithAuth<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T & ErrorResponse> {
  const isServer = typeof window === 'undefined';

  const session = isServer ? await auth() : await getSession();
  const defaultHeaders: Record<string, string> = session?.token.token
    ? {
        Authorization: `Bearer ${session?.token.token}`,
      }
    : {};
  const contentTypeHeader: () => {} = () => {
    if (options?.formData) {
      return {};
    } else {
      return { 'Content-Type': 'application/json' };
    }
  };
  const fetchOptions: FetchOptions = {
    ...options,
    headers: {
      ...contentTypeHeader(),
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, fetchOptions);

  // If token is invalid, log out the user
  if (response.status === 401) {
    // const errorData: ErrorResponse = await response.json();
    try {
      // throw new Error("errorData");
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      await fetch('/api/auth/signout');
      if (typeof window == 'object') {
        window.location.href = '/user/signin';
      } else {
        signOut({ redirectTo: '/user/signin' });
      }
    }
  }

  if (!response.ok) {
    const error = (await response.json()) as ErrorResponse;
    return error as T & ErrorResponse;
  }

  // Ensure the response is parsed as JSON and cast to the generic type `T`
  return (await response.json()) as T & ErrorResponse;
}

export const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

// httpService.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error?.response) {
//       const statusCode = error?.response?.status;
//       if (statusCode == 401) {
//         try {
//           return {
//             isSuccess: true
//           } satisfies OperationResult<void>;
//         } catch (error: any) {
//           throw new Error(error);
//         } finally {
//           // logOut();
//         }
//       }
//       if (statusCode >= 400) {
//         const errorData: ApiError = error.response?.data;

//         errorHandler[statusCode](errorData);
//       }
//     } else {
//       networkErrorStrategy();
//     }
//   }
// );

// httpService.interceptors.request.use(async (request) => {
//   try {
//     const session = await getSession();
//     if (session?.user) {
//       request.headers.Authorization = `Bearer ${session?.token.token}`;
//     }
//     return request;
//   } catch (error) {
//     return request;
//   }
// });

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response.data as T;
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: RawAxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

async function readData<T>(
  url: string,
  headers?: RawAxiosRequestHeaders,
  params?: any
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    params,
  };

  return await apiBase<T>(url, options);
}
async function readAuthenticatedData<T>(
  url: string,
  headers?: RawAxiosRequestHeaders,
  server?: boolean
): Promise<T> {
  const session = await getUserSession({ server: !!server });
  const options: AxiosRequestConfig = {
    headers: {
      ...headers,
      Authorization: `Bearer ${session?.token.token}`,
    },
  };

  return await apiBase<T>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: RawAxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'PUT',
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: RawAxiosRequestHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: 'DELETE',
    headers: headers,
  };

  return await apiBase(url, options);
}

export { createData, readData, updateData, deleteData, readAuthenticatedData };
