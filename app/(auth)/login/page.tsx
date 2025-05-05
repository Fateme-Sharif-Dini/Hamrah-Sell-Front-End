'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TextInput } from '@/components/form/TextInput';
import { Button } from '@/components/ui/button';
import { login, testAuthorization } from '@/services/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await login(username, password);
      console.log('Login response:', response);
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#005B85] to-[#0095DA]">
      <form
        onSubmit={handleLogin}
        className="flex w-full max-w-[534px] flex-col items-center justify-center gap-6 rounded-2xl bg-white py-10 shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
        dir="rtl"
      >
        <h1
          className="mb-3 text-center text-3xl font-bold"
          style={{ color: '#005B85' }}
        >
          سامانه مدیریت فروش همراه سل
        </h1>

        {error && (
          <div className="w-[392px] rounded-lg bg-red-100 p-3 text-center text-red-600">
            {error}
          </div>
        )}

        <div className="w-[392px] space-y-7">
          <TextInput
            label="نام کاربری"
            required
            placeholder=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-xl py-3"
          />
          <TextInput
            label="رمز عبور"
            required
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl py-3"
            type="password"
          />
        </div>

        <div className="cursor-pointer text-center text-xs font-bold text-[var(--blue-400)] underline hover:text-gray-800">
          فراموشی رمز
        </div>

        <Button
          type="submit"
          color="primary"
          size="large"
          className="w-3xs py-2.5"
          disabled={isLoading}
          onClick={async () => {
            try {
              await testAuthorization();
              alert(
                'Authorization test successful! Check console for details.'
              );
            } catch (error: any) {
              alert('Authorization test failed: ' + error.message);
            }
          }}
        >
          {isLoading ? 'در حال ورود...' : 'ورود'}
        </Button>
      </form>
      <div className="mt-20">
        <Image
          src="/assets/images/mci-logo.png"
          alt="لوگو همراه اول"
          width={265}
          height={108}
        />
      </div>
    </div>
  );
}
