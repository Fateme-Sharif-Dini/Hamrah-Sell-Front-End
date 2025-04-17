import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Star } from '../icons/StarIcon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input = ({ label, icon, className, ...props }: InputProps) => {
  return (
    <div className="space-y-2">
      <div className="flex">
        <label className="text-xl">{label}</label>
        {icon && <Star />}
      </div>
      <input className={cn('w-1/3 py-3 rounded-xl border px-2', className)} {...props} />
    </div>
  );
};
