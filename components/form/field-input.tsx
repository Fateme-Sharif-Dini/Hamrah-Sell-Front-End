'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Star } from '../icons/StarIcon';
import { ExclamationMark } from '../icons/ExclamationMarkIcon';

const inputVariants = cva(
  "base styles...",
  {
    variants: {
      intent: {
        default: 'border-input',
        error: 'border-orange-500',
        success: 'border-green-500',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);

interface FieldInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export function FieldInput({
  label,
  placeholder,
  required,
  error,
}: FieldInputProps) {
  const intent = error ? 'error' : 'default';

  return (
    <div dir="rtl" className="w-full space-y-2">
      <Label className="flex items-end gap-1 text-xl font-bold">
        {label}
        {required && <Star/>}
      </Label>
      <Input
        placeholder={placeholder}
        className={cn(inputVariants({ intent }))}
      />
      {error && (
        <p className="mt-[30px] flex items-center gap-1 text-sm text-orange-500">
          <ExclamationMark/>
          {error}
        </p>
      )}
    </div>
  );
}
