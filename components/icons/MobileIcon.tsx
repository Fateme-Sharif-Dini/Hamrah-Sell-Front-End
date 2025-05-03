import { SVGProps } from 'react';

interface MobileIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const MobileIcon = ({ 
  size = 37, 
  color = '#005B85',
  ...props 
}: MobileIconProps) => {
  return (
    <svg
      width={size}
      height={size * (60/37)} // Maintain aspect ratio
      viewBox="0 0 37 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 48C13.3954 48 12.5 48.8954 12.5 50C12.5 51.1046 13.3954 52 14.5 52H22.5C23.6046 52 24.5 51.1046 24.5 50C24.5 48.8954 23.6046 48 22.5 48H14.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 0C4.52944 0 0.5 4.02944 0.5 9V51C0.5 55.9706 4.52944 60 9.5 60H27.5C32.4706 60 36.5 55.9706 36.5 51V9C36.5 4.02944 32.4706 0 27.5 0H9.5ZM6.5 9C6.5 7.34315 7.84315 6 9.5 6H12.5V7C12.5 8.65685 13.8431 10 15.5 10H21.5C23.1569 10 24.5 8.65685 24.5 7V6H27.5C29.1569 6 30.5 7.34315 30.5 9V51C30.5 52.6569 29.1569 54 27.5 54H9.5C7.84315 54 6.5 52.6569 6.5 51V9Z"
        fill={color}
      />
    </svg>
  );
}; 