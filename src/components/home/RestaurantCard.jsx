import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Heart, Sparkles } from 'lucide-react';
import RatingPill from '../common/RatingPill';

export default function RestaurantCard({ restaurant }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Image & Badges Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Link to={`/restaurant/${restaurant.slug || restaurant.id}`}>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {restaurant.tag && (
            <span className="pointer-events-auto px-3 py-1 bg-white/95 backdrop-blur-md text-brand-700 text-xs font-black tracking-wide rounded-full shadow-md flex items-center gap-1 border border-brand-100">
              <Sparkles className="w-3 h-3 text-brand-500 fill-brand-500" />
              <span>{restaurant.tag}</span>
            </span>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-white shadow-md transition-all active:scale-90 ml-auto"
            title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? 'fill-rose-500 text-rose-500' : ''
              }`}
            />
          </button>
        </div>

        {/* Bottom Details Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{restaurant.deliveryTime}</span>
            </span>
            <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{restaurant.distance}</span>
            </span>
          </div>

          <RatingPill rating={restaurant.rating} size="sm" />
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              to={`/restaurant/${restaurant.slug || restaurant.id}`}
              className="text-base font-extrabold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1"
            >
              {restaurant.name}
            </Link>
          </div>

          {/* Cuisines */}
          <p className="text-xs text-gray-500 mt-1 line-clamp-1">
            {restaurant.cuisines.join(' • ')}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
          <span className="font-semibold text-gray-700">
            ₹{restaurant.costForTwo} for two
          </span>

          <Link
            to={`/restaurant/${restaurant.slug || restaurant.id}`}
            className="text-brand-600 font-bold hover:text-brand-700 flex items-center gap-1 group-hover:underline"
          >
            View Menu →
          </Link>
        </div>
      </div>
    </div>
  );
}
