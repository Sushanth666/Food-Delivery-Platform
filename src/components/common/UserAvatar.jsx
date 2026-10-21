import React from 'react';
import { useAuth } from '../../context/AuthContext';

/**
 * Curated luxury gradient themes for the First-Letter Profile Badge.
 */
export const AVATAR_THEMES = [
  {
    id: 'crimson',
    name: 'Ruby Crimson',
    gradient: 'from-[#E11D48] via-rose-600 to-brand-600',
    border: 'border-rose-400/40',
    glow: 'shadow-rose-950/50',
    preview: 'from-rose-500 to-rose-700',
  },
  {
    id: 'indigo',
    name: 'Royal Indigo',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    border: 'border-violet-400/40',
    glow: 'shadow-indigo-950/50',
    preview: 'from-violet-500 to-indigo-700',
  },
  {
    id: 'emerald',
    name: 'Emerald Luxe',
    gradient: 'from-emerald-500 via-teal-600 to-emerald-700',
    border: 'border-emerald-400/40',
    glow: 'shadow-emerald-950/50',
    preview: 'from-emerald-400 to-teal-700',
  },
  {
    id: 'amber',
    name: 'Golden Sunset',
    gradient: 'from-amber-500 via-orange-500 to-rose-600',
    border: 'border-amber-400/40',
    glow: 'shadow-amber-950/50',
    preview: 'from-amber-400 to-orange-600',
  },
  {
    id: 'sapphire',
    name: 'Ocean Sapphire',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    border: 'border-cyan-400/40',
    glow: 'shadow-cyan-950/50',
    preview: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'magenta',
    name: 'Electric Pink',
    gradient: 'from-fuchsia-600 via-pink-600 to-rose-600',
    border: 'border-pink-400/40',
    glow: 'shadow-pink-950/50',
    preview: 'from-fuchsia-500 to-pink-600',
  },
];

/**
 * UserAvatar component that displays the first letter of the user's name
 * in a luxury gradient badge with customizable theme colors.
 */
export default function UserAvatar({
  name = 'User',
  size = 'md',
  theme,
  shape = 'squircle', // 'squircle' | 'circle'
  className = '',
  border = true,
}) {
  let userAvatarTheme = null;
  let userAvatarShape = null;
  try {
    const auth = useAuth();
    userAvatarTheme = auth?.user?.avatarTheme;
    userAvatarShape = auth?.user?.avatarShape;
  } catch {
    // If rendered outside AuthProvider
    userAvatarTheme = null;
    userAvatarShape = null;
  }

  const activeThemeId = theme || userAvatarTheme || 'crimson';
  const activeShape = shape || userAvatarShape || 'squircle';
  const currentTheme =
    AVATAR_THEMES.find((t) => t.id === activeThemeId) || AVATAR_THEMES[0];

  const initial = (name?.trim()?.charAt(0) || 'U').toUpperCase();

  // Size variations
  const sizeClasses = {
    xs: 'w-5 h-5 text-[10px]',
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
    xl: 'w-16 h-16 text-2xl',
    '2xl': 'w-24 h-24 text-4xl',
  };

  const shapeClasses =
    activeShape === 'circle' || size === 'xs'
      ? 'rounded-full'
      : size === '2xl'
      ? 'rounded-3xl'
      : size === 'xl' || size === 'lg'
      ? 'rounded-2xl'
      : 'rounded-xl';

  const selectedSize = sizeClasses[size] || sizeClasses.md;
  const borderClass = border
    ? `border ${currentTheme.border} shadow-md ${currentTheme.glow}`
    : '';

  return (
    <div
      className={`relative inline-flex items-center justify-center font-black font-display text-white bg-gradient-to-tr ${currentTheme.gradient} select-none flex-shrink-0 transition-all duration-300 ${shapeClasses} ${selectedSize} ${borderClass} ${className}`}
      aria-label={`Avatar for ${name}`}
    >
      <span className="leading-none drop-shadow-xs">{initial}</span>
    </div>
  );
}
