import React from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, Star, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { RESTAURANTS } from '../../data/restaurants';
import { FEATURED_EXQUISITE_CUISINES } from '../../data/featuredCuisines';

export default function WishlistModal() {
  const { wishlist, isWishlistModalOpen, closeWishlist, toggleWishlist } = useWishlist();

  if (!isWishlistModalOpen) return null;

  // Resolve wishlisted items from both datasets
  const items = wishlist
    .map((id) => {
      const feat = FEATURED_EXQUISITE_CUISINES.find((f) => f.id === id);
      if (feat) return feat;
      const rest = RESTAURANTS.find((r) => r.id === id || r.slug === id);
      if (rest) {
        return {
          id: rest.id,
          name: rest.name,
          cuisine: rest.cuisines?.[0] || 'Gourmet',
          rating: rest.rating,
          slug: rest.slug || rest.id,
          image: rest.image,
          deliveryTime: rest.deliveryTime,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={closeWishlist}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-[#14141A] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-rose-950/40 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-950/60 border border-rose-800/40 flex items-center justify-center text-rose-400">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h3 className="text-lg font-black font-display text-white">
                Your Wishlist ({items.length})
              </h3>
              <p className="text-xs text-gray-400">
                Your favorite gourmet restaurants & cuisines
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeWishlist}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="overflow-y-auto flex-1 my-4 space-y-3 pr-1">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <Heart className="w-12 h-12 text-gray-600 mx-auto mb-3 stroke-1" />
              <p className="text-sm font-bold text-gray-300">Your wishlist is empty</p>
              <p className="text-xs text-gray-500 mt-1">
                Tap the heart icon on any card to save it for later.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#1C1C24] border border-white/5 hover:border-white/15 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-400">
                    <span>{item.cuisine}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {item.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    to={`/restaurant/${item.slug}`}
                    onClick={closeWishlist}
                    className="px-3 py-1.5 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase transition-colors"
                  >
                    View
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(item.id)}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-rose-950/60 text-gray-400 hover:text-rose-400 flex items-center justify-center transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="pt-3 border-t border-white/10 flex justify-end">
            <button
              type="button"
              onClick={closeWishlist}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
