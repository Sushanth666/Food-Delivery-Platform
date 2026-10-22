import React from 'react';

export default function DietaryBadge({ isVeg, size = 'md' }) {
  const isSmall = size === 'sm';

  if (isVeg) {
    return (
      <span
        title="Pure Vegetarian"
        className={`inline-flex items-center justify-center border-2 border-emerald-600 rounded p-[2px] bg-emerald-50/50 ${
          isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'
        }`}
      >
        <span
          className={`rounded-full bg-emerald-600 ${
            isSmall ? 'w-1.5 h-1.5' : 'w-2 h-2'
          }`}
        />
      </span>
    );
  }

  return (
    <span
      title="Non-Vegetarian"
      className={`inline-flex items-center justify-center border-2 border-rose-600 rounded p-[2px] bg-rose-50/50 ${
        isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'
      }`}
    >
      <span
        className={`rounded-full bg-rose-600 ${
          isSmall ? 'w-1.5 h-1.5' : 'w-2 h-2'
        }`}
      />
    </span>
  );
}
