'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
// import { Star } from '../icons/StarIcon';
// import { ExclamationMark } from '../icons/ExclamationMarkIcon';
// import { EyeIcon } from '../icons/EyeIcon';
// import { EyeSlashIcon } from '../icons/EyeSlashIcon';

const inputVariants = cva(
  'w-full py-2 px-3 rounded-md text-base focus:outline-none transition-colors duration-200',
  {
    variants: {
      intent: {
        default: 'border-input focus:ring-gray-400',
        error: 'border-orange-500 focus:ring-orange-300',
        success: 'border-green-500 focus:ring-green-300',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);

interface FieldInputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: 'text' | 'password';
}

export function TextInput({
  label,
  placeholder,
  required,
  error,
  value,
  onChange,
  className,
  type = 'text',
}: FieldInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const intent = error ? 'error' : 'default';
  const isPassword = type === 'password';

  return (
    <div dir="rtl" className="w-full space-y-2">
      <Label className="flex items-end gap-1 text-xl font-bold">
        {label}
        {/* {required && <Star />} */}
      </Label>
      <div className="relative">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          className={cn(
            inputVariants({ intent }),
            className,
            isPassword ? 'pr-10' : ''
          )}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute left-4 top-3.5 cursor-pointer text-gray-500"
            tabIndex={-1}
          >
            {/* {showPassword ? (
              <EyeIcon className="h-5 w-5" />
            ) : (
              <EyeSlashIcon className="h-5 w-5" />
            )} */}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 flex items-center gap-1 text-sm text-orange-500">
          {/* <ExclamationMark /> */}
          {error}
        </p>
      )}
    </div>
  );
}
