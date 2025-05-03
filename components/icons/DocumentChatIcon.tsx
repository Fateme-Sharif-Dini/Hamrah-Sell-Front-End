import { SVGProps } from 'react';

interface DocumentChatIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const DocumentChatIcon = ({ 
  size = 57, 
  color = '#005B85',
  ...props 
}: DocumentChatIconProps) => {
  return (
    <svg
      width={size}
      height={size * (44/57)} // Maintain aspect ratio
      viewBox="0 0 57 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 0C2.73858 0 0.5 2.23857 0.5 5V24H32.5V5C32.5 2.23858 30.2614 0 27.5 0H5.5Z"
        fill={color}
      />
      <path
        d="M32.5 28H0.5V35C0.5 37.7614 2.73858 40 5.5 40H6.5C6.5 35.5817 10.0817 32 14.5 32C18.9183 32 22.5 35.5817 22.5 40H30.5C31.6046 40 32.5 39.1046 32.5 38V28Z"
        fill={color}
      />
      <path
        d="M18.5 40C18.5 37.7909 16.7091 36 14.5 36C12.2909 36 10.5 37.7909 10.5 40C10.5 42.2091 12.2909 44 14.5 44C16.7091 44 18.5 42.2091 18.5 40Z"
        fill={color}
      />
      <path
        d="M38.5 6C37.3954 6 36.5 6.89543 36.5 8V38C36.5 38.2315 36.5393 38.4537 36.6116 38.6605C37.249 34.8799 40.5382 32 44.5 32C48.8844 32 52.4451 35.5271 52.4994 39.8986C54.775 39.4318 56.5597 37.4043 56.4041 34.8785C55.7827 24.7975 52.1734 15.5227 46.4531 7.93306C45.508 6.67901 44.0374 6 42.5322 6H38.5Z"
        fill={color}
      />
      <path
        d="M48.5 40C48.5 37.7909 46.7091 36 44.5 36C42.2909 36 40.5 37.7909 40.5 40C40.5 42.2091 42.2909 44 44.5 44C46.7091 44 48.5 42.2091 48.5 40Z"
        fill={color}
      />
    </svg>
  );
}; 