'use client';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: 'text' | 'password';
}

export const Input = ({
  placeholder,
  value = '',
  onChange,
  className,
  type,
}: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-white px-2 py-3 pr-5 ${className || ''}`}
      />
    </div>
  );
};
