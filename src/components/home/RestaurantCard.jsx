import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Heart, Sparkles, Zap, ArrowRight } from 'lucide-react';
import RatingPill from '../common/RatingPill';
import { useWishlist } from '../../context/WishlistContext';

export default function RestaurantCard({ restaurant }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const favorited = isWishlisted(restaurant.id) || isWishlisted(restaurant.slug);

  return (
    <div className="group bg-[#14141A] rounded-3xl overflow-hidden border border-white/10 hover:border-brand-500/50 shadow-2xl shadow-black/60 hover:shadow-rose-950/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      {/* Image & Overlay Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
        <Link to={`/restaurant/${restaurant.slug || restaurant.id}`}>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Ambient Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges: Promotional Tag, Veg Emblem & Favorite */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 flex-wrap">
            {restaurant.tag && (
              <span className="pointer-events-auto px-2.5 py-1 bg-gradient-to-r from-brand-600 to-rose-600 text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-md flex items-center gap-1 border border-white/20">
                <Sparkles className="w-3 h-3 text-rose-200 fill-rose-200" />
                <span>{restaurant.tag}</span>
              </span>
            )}
            {restaurant.isPureVeg && (
              <span className="pointer-events-auto px-2 py-0.5 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1 border border-emerald-400/30">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Pure Veg</span>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(restaurant.id);
            }}
            className="pointer-events-auto w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-rose-400 hover:bg-black/80 shadow-md transition-all active:scale-90 ml-auto"
            title={favorited ? 'Remove from favorites' : 'Save to favorites'}
            aria-label="Add to favorites"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                favorited ? 'fill-rose-500 text-rose-500' : ''
              }`}
            />
          </button>
        </div>

        {/* Bottom Details Overlay inside Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none text-xs font-bold">
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px]">
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>{restaurant.deliveryTime}</span>
            </span>
            <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 text-[11px]">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>{restaurant.distance}</span>
            </span>
          </div>

          <RatingPill rating={restaurant.rating} size="sm" />
        </div>
      </div>

      {/* Card Body Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              to={`/restaurant/${restaurant.slug || restaurant.id}`}
              className="text-base font-black font-display text-white group-hover:text-rose-400 transition-colors line-clamp-1"
            >
              {restaurant.name}
            </Link>
          </div>

          {/* Cuisines */}
          <p className="text-xs font-medium text-gray-400 mt-1 line-clamp-1">
            {restaurant.cuisines.join(' • ')}
          </p>

          {/* Location Area */}
          {restaurant.address && (
            <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
              {restaurant.address}
            </p>
          )}
        </div>

        {/* Footer Meta & Quick Action */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-sm">
              ₹{restaurant.costForTwo}
            </span>
            <span className="text-[10px] text-gray-400 font-medium">for two</span>
          </div>

          <Link
            to={`/restaurant/${restaurant.slug || restaurant.id}`}
            className="flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-brand-950/40 group/btn"
          >
            <span>VIEW MENU</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
