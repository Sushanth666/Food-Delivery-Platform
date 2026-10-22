import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

/**
 * Utility to calculate a darker gradient stop from any hex color.
 */
function hexToDarker(hex, percent = 35) {
  if (!hex || typeof hex !== 'string') return '#1A1A24';
  const cleanHex = hex.replace('#', '');
  const fullHex = cleanHex.length === 3 ? cleanHex.split('').map((c) => c + c).join('') : cleanHex;
  const num = parseInt(fullHex, 16);
  if (isNaN(num)) return '#1A1A24';
  const r = Math.max(0, Math.floor(((num >> 16) & 255) * (1 - percent / 100)));
  const g = Math.max(0, Math.floor(((num >> 8) & 255) * (1 - percent / 100)));
  const b = Math.max(0, Math.floor((num & 255) * (1 - percent / 100)));
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Curated luxury gradient themes for the First-Letter Profile Badge.
 * The 6th (last) option is the Custom Colour Palette where the user selects their favourite colour.
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
    id: 'custom',
    name: 'Custom Colour',
    isCustom: true,
    preview: 'from-pink-500 via-purple-500 to-amber-400',
  },
];

/**
 * UserAvatar component that displays:
 * 1. Uploaded custom profile picture (if available)
 * 2. OR dynamic first letter of the user's name in a luxury gradient badge (with custom color support).
 */
export default function UserAvatar({
  name = 'User',
  imageSrc,
  size = 'md',
  theme,
  customColor,
  shape = 'squircle', // 'squircle' | 'circle'
  className = '',
  border = true,
}) {
  const [imageError, setImageError] = useState(false);
  const auth = useAuth();

  const userAvatarTheme = auth?.user?.avatarTheme || null;
  const userAvatarShape = auth?.user?.avatarShape || null;
  const userAvatarImage = auth?.user?.avatarImage || null;
  const userAvatarCustomColor = auth?.user?.avatarCustomColor || null;

  const effectiveImage = imageSrc !== undefined ? imageSrc : userAvatarImage;
  const activeThemeId = theme || userAvatarTheme || 'crimson';
  const activeShape = shape || userAvatarShape || 'squircle';
  const activeCustomColor = customColor || userAvatarCustomColor || '#EC4899';

  const isCustomTheme = activeThemeId === 'custom';
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

  // Custom styling when user selects their favourite custom colour
  const customInlineStyle = isCustomTheme
    ? {
        background: `linear-gradient(135deg, ${activeCustomColor}, ${hexToDarker(activeCustomColor, 35)})`,
        borderColor: border ? `${activeCustomColor}88` : undefined,
        boxShadow: border ? `0 4px 20px ${activeCustomColor}45` : undefined,
      }
    : undefined;

  const borderClass =
    border && !isCustomTheme
      ? `border ${currentTheme.border} shadow-md ${currentTheme.glow}`
      : border && isCustomTheme
      ? 'border'
      : '';

  const backgroundClass = isCustomTheme
    ? ''
    : `bg-gradient-to-tr ${currentTheme.gradient}`;

  const hasPhoto = Boolean(effectiveImage) && !imageError;

  return (
    <div
      style={customInlineStyle}
      className={`relative inline-flex items-center justify-center overflow-hidden font-black font-display text-white ${backgroundClass} select-none flex-shrink-0 transition-all duration-300 ${shapeClasses} ${selectedSize} ${borderClass} ${className}`}
      aria-label={`Avatar for ${name}`}
    >
      {hasPhoto ? (
        <img
          src={effectiveImage}
          alt={name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <span className="leading-none drop-shadow-xs">{initial}</span>
      )}
    </div>
  );
}
