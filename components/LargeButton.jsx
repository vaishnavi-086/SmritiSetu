import React from 'react';
import { cn } from '@/lib/utils';

export default function LargeButton({ children, onClick, className, variant = 'primary', disabled, ...props }) {
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30',
    secondary: 'bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-200',
    ghost: 'bg-transparent hover:bg-orange-50 text-orange-600',
    success: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'px-8 py-4 rounded-2xl text-lg font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
