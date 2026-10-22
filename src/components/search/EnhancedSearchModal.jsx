import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  Star,
  Flame,
  Zap,
  Plus,
  Check,
  UtensilsCrossed,
  SlidersHorizontal,
  Mic,
  MicOff,
} from 'lucide-react';
import { RESTAURANTS } from '../../data/restaurants';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { DietaryBadge } from '../ui';

const POPULAR_SEARCH_TAGS = [
  { label: 'Biryani', icon: '🔥' },
  { label: 'Butter Chicken', icon: '🍗' },
  { label: 'Wood-Fired Pizza', icon: '🍕' },
  { label: 'Masala Dosa', icon: '🥞' },
  { label: 'Steamed Momos', icon: '🥟' },
  { label: 'Smash Burgers', icon: '🍔' },
  { label: 'Hakka Noodles', icon: '🍜' },
  { label: 'Gulab Jamun', icon: '🍯' },
  { label: 'Cold Brew & Shakes', icon: '🥤' },
];

const QUICK_FILTERS = [
  { id: 'all', label: 'All Results' },
  { id: 'dishes', label: 'Dishes' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'veg', label: 'Pure Veg 🌱' },
  { id: 'bestseller', label: 'Bestsellers ⭐' },
  { id: 'rush', label: '15-Min Rush ⚡' },
];

export default function EnhancedSearchModal({ isOpen, onClose, initialQuery = '' }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const inputRef = useRef(null);

  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState('all');
  const [addedItemIds, setAddedItemIds] = useState(new Set());
  const [isListening, setIsListening] = useState(false);
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cw_recent_searches') || '[]');
    } catch {
      return ['Biryani', 'Pizza', 'Dosa'];
    }
  });

  // Keep query in sync when opened with initialQuery
  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery || '');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, initialQuery]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Save to recent searches
  const saveRecentSearch = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, 6);
      localStorage.setItem('cw_recent_searches', JSON.stringify(updated));
      return updated;
    });
  };

  const removeRecentSearch = (e, itemToRemove) => {
    e.stopPropagation();
    setRecentSearches((prev) => {
      const updated = prev.filter((item) => item !== itemToRemove);
      localStorage.setItem('cw_recent_searches', JSON.stringify(updated));
      return updated;
    });
  };

  const clearAllRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('cw_recent_searches');
  };

  // Mock voice search listening simulation
  const toggleVoiceSearch = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      // Simulate listening and picking up voice input
      setTimeout(() => {
        const sampleVoices = ['Special Hyderabadi Biryani', 'Wood-Fired Pizza', 'Crispy Masala Dosa', 'Gulab Jamun'];
        const randomPick = sampleVoices[Math.floor(Math.random() * sampleVoices.length)];
        setQuery(randomPick);
        setIsListening(false);
        saveRecentSearch(randomPick);
      }, 2200);
    }
  };

  // Extract all dishes mapped to their parent restaurant for deep searching
  const allDishes = useMemo(() => {
    const list = [];
    RESTAURANTS.forEach((restaurant) => {
      restaurant.menuCategories?.forEach((category) => {
        category.items?.forEach((item) => {
          list.push({
            ...item,
            categoryName: category.name,
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            restaurantSlug: restaurant.slug,
            restaurantRating: restaurant.rating,
            deliveryTime: restaurant.deliveryTime,
            restaurantObj: restaurant,
          });
        });
      });
    });
    return list;
  }, []);

  // Filtered Results Calculation
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { restaurants: [], dishes: [], totalCount: 0 };

    // 1. Filter Restaurants
    let matchedRestaurants = RESTAURANTS.filter((r) => {
      const nameMatch = r.name.toLowerCase().includes(q);
      const cuisineMatch = r.cuisines.some((c) => c.toLowerCase().includes(q));
      const descMatch = r.description?.toLowerCase().includes(q);
      return nameMatch || cuisineMatch || descMatch;
    });

    // 2. Filter Dishes
    let matchedDishes = allDishes.filter((d) => {
      const nameMatch = d.name.toLowerCase().includes(q);
      const descMatch = d.description?.toLowerCase().includes(q);
      const catMatch = d.categoryName?.toLowerCase().includes(q);
      return nameMatch || descMatch || catMatch;
    });

    // Apply quick filters
    if (activeFilter === 'restaurants') {
      matchedDishes = [];
    } else if (activeFilter === 'dishes') {
      matchedRestaurants = [];
    } else if (activeFilter === 'veg') {
      matchedRestaurants = matchedRestaurants.filter((r) => r.isPureVeg);
      matchedDishes = matchedDishes.filter((d) => d.isVeg);
    } else if (activeFilter === 'bestseller') {
      matchedRestaurants = matchedRestaurants.filter((r) => r.rating >= 4.5);
      matchedDishes = matchedDishes.filter((d) => d.isBestseller);
    } else if (activeFilter === 'rush') {
      matchedRestaurants = matchedRestaurants.filter((r) => {
        const timeNum = parseInt(r.deliveryTime, 10);
        return !isNaN(timeNum) && timeNum <= 25;
      });
      matchedDishes = matchedDishes.filter((d) => {
        const timeNum = parseInt(d.deliveryTime, 10);
        return !isNaN(timeNum) && timeNum <= 25;
      });
    }

    return {
      restaurants: matchedRestaurants.slice(0, 4),
      dishes: matchedDishes.slice(0, 8),
      totalCount: matchedRestaurants.length + matchedDishes.length,
    };
  }, [query, activeFilter, allDishes]);

  const handleSelectRestaurant = (slug) => {
    saveRecentSearch(query || slug);
    onClose();
    navigate(`/restaurant/${slug}`);
  };

  const handleSelectDish = (dish) => {
    saveRecentSearch(dish.name);
    onClose();
    navigate(`/restaurant/${dish.restaurantSlug}?dish=${encodeURIComponent(dish.name)}&itemId=${dish.id}`);
  };

  const handleQuickAddToCart = (e, dish) => {
    e.stopPropagation();
    addToCart(dish.restaurantObj, dish);
    setAddedItemIds((prev) => new Set([...prev, dish.id]));
    setTimeout(() => {
      setAddedItemIds((prev) => {
        const next = new Set(prev);
        next.delete(dish.id);
        return next;
      });
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#121218]/95 border border-white/15 rounded-3xl shadow-2xl shadow-rose-950/70 overflow-hidden flex flex-col max-h-[90vh] transition-all transform animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP ENHANCED SEARCH BAR */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-[#161622]/90 flex items-center gap-3 relative">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-950/60 shrink-0">
            <Search className="w-5 h-5 text-white" />
          </div>

          <div className="flex-1 relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes, restaurants, cuisines (e.g. Biryani, Pizza, Dosa)..."
              className="w-full bg-transparent text-white placeholder-gray-400 text-sm sm:text-base font-semibold focus:outline-none pr-10"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Voice Search Simulation Button */}
          <button
            type="button"
            onClick={toggleVoiceSearch}
            className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
              isListening
                ? 'bg-rose-600 text-white border-rose-500 animate-pulse shadow-lg shadow-rose-600/40'
                : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border-white/10'
            }`}
            title="Voice Search"
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* ESC Shortcut Badge / Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-xs font-bold transition-all cursor-pointer shrink-0"
          >
            <span>ESC</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Listening Indicator Notice */}
        {isListening && (
          <div className="px-5 py-2.5 bg-rose-950/60 border-b border-rose-800/40 flex items-center justify-between text-xs text-rose-200">
            <div className="flex items-center gap-2 font-bold animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span>Listening to your cravings... Say a dish or restaurant name!</span>
            </div>
            <span className="text-[10px] text-rose-400">Tap mic to stop</span>
          </div>
        )}

        {/* QUICK FILTER PILLS */}
        <div className="px-4 sm:px-5 py-2.5 border-b border-white/10 bg-[#0E0E14] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold shrink-0 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {QUICK_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* BODY SCROLLABLE CONTAINER */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* CASE A: USER HAS NOT TYPED QUERY YET -> DISPLAY RECENT SEARCHES & TRENDING DISHES */}
          {!query.trim() && (
            <div className="space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-rose-400" />
                      <span>Recent Searches</span>
                    </div>
                    <button
                      type="button"
                      onClick={clearAllRecentSearches}
                      className="text-[11px] font-bold text-gray-400 hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <div
                        key={term}
                        onClick={() => {
                          setQuery(term);
                          saveRecentSearch(term);
                        }}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1A1A24] hover:bg-rose-950/50 border border-white/10 hover:border-rose-800/40 text-xs font-semibold text-gray-200 hover:text-white transition-all cursor-pointer"
                      >
                        <Clock className="w-3 h-3 text-gray-400 group-hover:text-rose-400" />
                        <span>{term}</span>
                        <button
                          type="button"
                          onClick={(e) => removeRecentSearch(e, term)}
                          className="text-gray-500 hover:text-rose-400 ml-0.5"
                          title="Remove from history"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Food Categories / Popular Searches */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  <span>Popular Cravings in Bengaluru</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {POPULAR_SEARCH_TAGS.map((tag) => (
                    <button
                      key={tag.label}
                      type="button"
                      onClick={() => {
                        setQuery(tag.label);
                        saveRecentSearch(tag.label);
                      }}
                      className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#171720] hover:bg-[#201D2C] border border-white/5 hover:border-rose-500/30 text-left transition-all active:scale-[0.98] cursor-pointer group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        {tag.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white group-hover:text-rose-300 truncate">
                          {tag.label}
                        </p>
                        <p className="text-[10px] text-gray-400">Explore places</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cuisines Grid */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-3">
                  Browse by Popular Cuisines
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Biryani & Pulao', 'North Indian', 'South Indian', 'Mughlai & Kebabs', 'Desserts & Sweets', 'Beverages & Chai'].map((cuisine) => (
                    <button
                      key={cuisine}
                      type="button"
                      onClick={() => {
                        setQuery(cuisine);
                        saveRecentSearch(cuisine);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      {cuisine}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CASE B: QUERY ENTERED -> SHOW LIVE MATCHING RESULTS */}
          {query.trim() && (
            <div className="space-y-6">
              {/* Header result count */}
              <div className="flex items-center justify-between text-xs text-gray-400 font-semibold pb-2 border-b border-white/10">
                <span>
                  Showing results for <span className="text-rose-300 font-bold">"{query}"</span>
                </span>
                <span className="bg-white/10 text-white px-2 py-0.5 rounded-md font-bold text-[11px]">
                  {searchResults.totalCount} found
                </span>
              </div>

              {/* No Results Found */}
              {searchResults.totalCount === 0 && (
                <div className="text-center py-12 space-y-3">
                  <div className="w-16 h-16 rounded-3xl bg-rose-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400 mx-auto">
                    <UtensilsCrossed className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white">No dishes or restaurants found</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    We couldn't find matches for "{query}". Try checking your spelling or search for popular items like Biryani, Dosa, or Pizza.
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="mt-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Clear Search Query
                  </button>
                </div>
              )}

              {/* Matching Restaurants */}
              {searchResults.restaurants.length > 0 && (
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-1.5">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Restaurants ({searchResults.restaurants.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {searchResults.restaurants.map((rest) => (
                      <div
                        key={rest.id}
                        onClick={() => handleSelectRestaurant(rest.slug)}
                        className="p-3 rounded-2xl bg-[#181822] hover:bg-[#20202E] border border-white/10 hover:border-rose-500/40 flex items-center gap-3 transition-all cursor-pointer group shadow-md"
                      >
                        <img
                          src={rest.image}
                          alt={rest.name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/5 group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-black text-white group-hover:text-rose-300 truncate">
                            {rest.name}
                          </h5>
                          <p className="text-[11px] text-gray-400 truncate">
                            {rest.cuisines?.slice(0, 2).join(', ')}
                          </p>
                          <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-300 font-bold">
                            <span className="flex items-center gap-0.5 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded">
                              <Star className="w-2.5 h-2.5 fill-current" />
                              {rest.rating}
                            </span>
                            <span>• {rest.deliveryTime}</span>
                            <span>• {rest.distance}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Dishes */}
              {searchResults.dishes.length > 0 && (
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dishes & Gourmet Cravings ({searchResults.dishes.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {searchResults.dishes.map((dish) => {
                      const isAdded = addedItemIds.has(dish.id);
                      return (
                        <div
                          key={`${dish.restaurantId}-${dish.id}`}
                          onClick={() => handleSelectDish(dish)}
                          className="p-3 rounded-2xl bg-[#181822] hover:bg-[#20202E] border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-3 transition-all cursor-pointer group shadow-md"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative shrink-0">
                              <img
                                src={dish.image}
                                alt={dish.name}
                                className="w-14 h-14 rounded-xl object-cover border border-white/5 group-hover:scale-105 transition-transform"
                              />
                              <div className="absolute top-1 left-1 bg-black/60 backdrop-blur-xs p-0.5 rounded">
                                <DietaryBadge isVeg={dish.isVeg} size="xs" />
                              </div>
                            </div>
                            <div className="min-w-0">
                              <h5 className="text-xs font-black text-white group-hover:text-emerald-300 truncate">
                                {dish.name}
                              </h5>
                              <p className="text-[10px] text-gray-400 truncate">
                                From: <span className="text-rose-300 font-semibold">{dish.restaurantName}</span>
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs font-black text-white">
                                  {formatCurrency(dish.price)}
                                </span>
                                {dish.isBestseller && (
                                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                                    Bestseller
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Quick Add Button */}
                          <button
                            type="button"
                            onClick={(e) => handleQuickAddToCart(e, dish)}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer shrink-0 ${
                              isAdded
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60'
                                : 'bg-white/10 hover:bg-rose-600 text-white border border-white/10'
                            }`}
                            title="Add directly to cart"
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* FOOTER SHORTCUT HINTS */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#0E0E14] flex flex-wrap items-center justify-between text-[11px] text-gray-400">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">
              Tip: Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-200 font-mono text-[10px]">⌘K</kbd> or <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-200 font-mono text-[10px]">Ctrl+K</kbd> anywhere to search
            </span>
          </div>
          <span className="text-rose-400 font-medium">CraveWave Instant Omnisearch</span>
        </div>
      </div>
    </div>
  );
}
