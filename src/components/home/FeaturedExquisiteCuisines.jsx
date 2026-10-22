import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { FEATURED_EXQUISITE_CUISINES } from '../../data/featuredCuisines';
import { useWishlist } from '../../context/WishlistContext';
import heroFallback from '../../assets/hero.png';

export default function FeaturedExquisiteCuisines() {
  const { isWishlisted, toggleWishlist } = useWishlist();

  return (
    <section className="mb-12">
      {/* Section Title matching screenshot */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight">
          Featured Exquisite Cuisines
        </h2>
      </div>

      {/* Grid of 6 Exquisite Cuisine Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {FEATURED_EXQUISITE_CUISINES.map((item) => {
          const favorited = isWishlisted(item.id);

          return (
            <div
              key={item.id}
              className="group bg-[#15151B] border border-white/10 hover:border-brand-500/50 rounded-2xl p-2.5 flex flex-col justify-between card-interactive"
            >
              {/* Dish / Restaurant Photo */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-gray-900">
                <Link to={`/restaurant/${item.slug}`} className="block w-full h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = heroFallback;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </Link>

                {/* Floating Heart Wishlist Icon Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(item.id);
                  }}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-rose-400 hover:scale-110 transition-all active:scale-90"
                  aria-label="Save to Wishlist"
                  title={favorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${
                      favorited ? 'fill-rose-500 text-rose-500' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Title & Star Rating */}
              <div className="mt-2.5 px-0.5">
                <div className="flex items-center justify-between gap-1">
                  <Link
                    to={`/restaurant/${item.slug}`}
                    className="text-xs sm:text-[13px] font-bold text-white group-hover:text-rose-400 transition-colors truncate"
                    title={item.name}
                  >
                    {item.name}
                  </Link>
                  <span className="flex items-center gap-0.5 text-[11px] font-bold text-amber-400 flex-shrink-0">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </span>
                </div>

                {/* Cuisine Subtitle */}
                <p className="text-[11px] text-gray-400 font-medium mt-0.5 truncate">
                  {item.cuisine}
                </p>
              </div>

              {/* VIEW MENU Action Button */}
              <Link
                to={`/restaurant/${item.slug}`}
                className="mt-3 w-full py-2 px-2 rounded-xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white text-[11px] font-black uppercase tracking-wider text-center block shadow-md shadow-brand-950/40 transition-all active:scale-98 btn-shine"
              >
                VIEW MENU
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
