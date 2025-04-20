'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Star } from '../icons/StarIcon';
import { ExclamationMark } from '../icons/ExclamationMarkIcon';

const inputVariants = cva(
  'w-full py-2 px-3 border rounded-md text-base focus:outline-none focus:ring-2 transition-colors duration-200',
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
}

export function FieldInput({
  label,
  placeholder,
  required,
  error,
  value,
  onChange,
  className,
}: FieldInputProps) {
  const intent = error ? 'error' : 'default';

  return (
    <div dir="rtl" className="w-full space-y-2">
      <Label className="flex items-end gap-1 text-xl font-bold">
        {label}
        {required && <Star />}
      </Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(inputVariants({ intent }), className)}
      />
      {error && (
        <p className="mt-1 flex items-center gap-1 text-sm text-orange-500">
          <ExclamationMark />
          {error}
        </p>
      )}
    </div>
  );
}
