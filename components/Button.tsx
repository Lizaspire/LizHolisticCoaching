import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14b2ad] transition-all duration-300";
  
  const variants = {
    primary: "border-transparent text-white bg-[#14b2ad] hover:bg-[#12a09b] shadow-lg hover:shadow-xl",
    secondary: "border-transparent text-sage-900 bg-sage-200 hover:bg-sage-300",
    outline: "border-[#14b2ad] text-[#14b2ad] bg-transparent hover:bg-[#14b2ad]/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};