import React from 'react';
import { Star } from 'lucide-react';

export default function RatingPill({ rating, reviewCount = null, size = 'md' }) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const getBgColor = (r) => {
    if (r >= 4.5) return 'bg-emerald-600 text-white';
    if (r >= 4.0) return 'bg-emerald-500 text-white';
    if (r >= 3.5) return 'bg-amber-500 text-white';
    return 'bg-gray-600 text-white';
  };

  return (
    <div className="inline-flex items-center gap-1.5">
      <span
        className={`inline-flex items-center gap-1 font-bold rounded-lg ${getBgColor(
          rating
        )} ${
          isLarge
            ? 'px-2.5 py-1 text-sm'
            : isSmall
            ? 'px-1.5 py-0.5 text-xs'
            : 'px-2 py-0.5 text-xs'
        }`}
      >
        <span>{rating.toFixed(1)}</span>
        <Star className={isLarge ? 'w-3.5 h-3.5 fill-current' : 'w-3 h-3 fill-current'} />
      </span>
      {reviewCount && (
        <span className="text-xs text-gray-700 font-semibold">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
