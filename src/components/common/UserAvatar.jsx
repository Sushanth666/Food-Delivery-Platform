import React from 'react';

/**
 * UserAvatar component that displays the first letter of the user's name
 * in a luxury gradient badge with subtle border and shadow.
 */
export default function UserAvatar({
  name = 'User',
  size = 'md',
  className = '',
  border = true,
}) {
  const initial = (name?.trim()?.charAt(0) || 'U').toUpperCase();

  // Size variations
  const sizeClasses = {
    xs: 'w-5 h-5 text-[10px] rounded-full',
    sm: 'w-7 h-7 text-xs rounded-xl',
    md: 'w-9 h-9 text-sm rounded-xl',
    lg: 'w-11 h-11 text-base rounded-2xl',
    xl: 'w-16 h-16 text-2xl rounded-2xl',
    '2xl': 'w-24 h-24 text-4xl rounded-3xl',
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;
  const borderClass = border ? 'border border-rose-400/40 shadow-md shadow-rose-950/50' : '';

  return (
    <div
      className={`relative inline-flex items-center justify-center font-black font-display text-white bg-gradient-to-tr from-[#E11D48] via-rose-600 to-brand-600 select-none flex-shrink-0 transition-transform ${selectedSize} ${borderClass} ${className}`}
      aria-label={`Avatar for ${name}`}
    >
      <span className="leading-none drop-shadow-xs">{initial}</span>
    </div>
  );
}
