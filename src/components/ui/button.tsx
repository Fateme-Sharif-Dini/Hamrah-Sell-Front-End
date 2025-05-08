import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode, ComponentType } from 'react';
import { cn } from '@/lib/utils'; // Helper to merge classNames

const buttonVariants = cva(
  'flex items-end justify-center rounded-[10px] text-xl font-bold transition-colors focus-visible:outline-none cursor-pointer transition-all duration-300',
  {
    variants: {
      color: {
        primary: 'bg-[var(--blue-300)] text-white hover:bg-[var(--blue-500)]',
        secondary:
          'bg-[var(--blue-50)] text-black border-2 border-[var(--blue-200)] hover:border-transparent hover:bg-[var(--blue-100)]',
        tertiary:
          'bg-[var(--orange-50)] text-black border-2 border-[var(--orange-200)] hover:border-transparent hover:bg-[var(--orange-200)]',
        destructive:
          'bg-[var(--orange-300)] text-white hover:bg-[var(--orange-400)]',
      },
      size: {
        small: 'px-[30px] py-[15px]',
        large: 'px-20 py-[15px] gap-[10px]',
      },
    },
  }
);

export function Button({
  color,
  size,
  icon: Icon,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  size?: 'small' | 'large';
  icon?: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <button
      className={cn(buttonVariants({ color, size }), className)}
      {...props}
    >
      {children}
      {size === 'large' && Icon && <Icon className="h-5 w-5" />}
    </button>
  );
}
