import axiosInstance from '@/lib/api';

interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

interface LoginError {
  message: string;
  status: number;
}

export async function login(
  username: string,
  password: string
): Promise<LoginResponse> {
  try {
    console.log('Attempting login with:', { username });

    const response = await axiosInstance.post<LoginResponse>('/auth/login/', {
      username,
      password,
    });

    console.log('Login successful:', response.data);

    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.access}`;

    return response.data;
  } catch (error: any) {
    console.error('Login error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });

    throw {
      message:
        error.response?.data?.detail ||
        'Login failed. Please check your credentials.',
      status: error.response?.status || 500,
    } as LoginError;
  }
}

export async function refreshToken(): Promise<string> {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) throw new Error('No refresh token');

    const response = await axiosInstance.post<{ access: string }>(
      '/auth/refresh/',
      {
        refresh: refreshToken,
      }
    );

    localStorage.setItem('access_token', response.data.access);
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.access}`;

    return response.data.access;
  } catch (error) {
    console.log({ error });
    throw new Error('Failed to refresh token');
  }
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem('access_token');
}

export function logout(): void {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
  delete axiosInstance.defaults.headers.common['Authorization'];
}

export async function testAuthorization(): Promise<void> {
  try {
    // Test if we have tokens
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (!accessToken || !refreshToken) {
      throw new Error('No tokens found. Please login first.');
    }

    // Test the access token
    const response = await axiosInstance.get('/auth/verify/');
    console.log('Access token is valid:', response.data);

    // Test token refresh
    // const newAccessToken = await refreshToken();
    // console.log('Token refresh successful:', newAccessToken);

    // Test user data
    const userData = localStorage.getItem('user');
    console.log('User data:', userData ? JSON.parse(userData) : 'No user data');
  } catch (error: any) {
    console.error('Authorization test failed:', error.message);
    throw error;
  }
}
