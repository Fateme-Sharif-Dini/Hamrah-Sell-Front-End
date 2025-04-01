import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode, ComponentType } from 'react';
import { cn } from '@/lib/utils'; // Helper to merge classNames

// Define the variants for the button component
const buttonVariants = cva(
  'flex items-center justify-center rounded-[10px] text-xl font-bold transition-colors focus-visible:outline-none disabled:opacity-50 cursor-pointer transition-all duration-300',
  {
    variants: {
      color: {
        primary: 'bg-blue-300 text-white hover:bg-blue-500',
        secondary: 'bg-blue-50 text-black border-2 border-blue-200 hover:border-transparent hover:bg-blue-100',
        tertiary: 'bg-orange-50 text-black border-2 border-orange-200 hover:border-transparent hover:bg-orange-200',
        destructive: 'bg-orange-300 text-white hover:bg-orange-400',
      },
      // Outline variants (only applies to primary/secondary)
      outline: {
        true: 'border-[2px] border-solid',
        false: '',
      },
      // Size variants (small vs. large, with icon for large)
      size: {
        small: 'px-[30px] pb-[15px] pt-[13px]',
        large: 'px-6 py-3 text-lg gap-2', // Large size, add gap for icon spacing
      },
    },
  }
);

export function Button({
  color,
  size,
  outline,
  icon: Icon,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  size?: 'small' | 'large';
  outline?: boolean;
  icon?: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <button
      className={cn(buttonVariants({ color, outline, size }), className)}
      {...props}
    >
      {size === 'large' && Icon && (
        <Icon className="h-5 w-5" /> // If size is large, show icon with className
      )}
      {children}
    </button>
  );
}
