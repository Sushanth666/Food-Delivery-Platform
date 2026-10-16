import React from 'react';
import {
  Search,
  X,
  Star,
  Clock,
  RotateCcw,
  Sparkles,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { useFilter } from '../../context/FilterContext';

const POPULAR_SEARCHES = ['Biryani', 'Butter Chicken', 'Masala Dosa', 'Pasta', 'Sushi', 'Pav Bhaji'];

export default function FilterBar() {
  const {
    searchTerm,
    setSearchTerm,
    isPureVegOnly,
    setIsPureVegOnly,
    minRating,
    setMinRating,
    maxDeliveryTime,
    setMaxDeliveryTime,
    sortBy,
    setSortBy,
    resetFilters,
    hasActiveFilters,
  } = useFilter();

  return (
    <div className="bg-[#14141A] rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/10 space-y-3.5 mb-8 transition-shadow">
      {/* Top Search Input with ambient glow */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-rose-500">
          <Search className="w-5 h-5 text-rose-500" />
        </div>
        <input
          type="text"
          placeholder="Search restaurants, cuisines, dishes (e.g. Biryani, Butter Chicken, Pasta, Sushi)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-10 py-3.5 bg-[#1C1C24] hover:bg-[#20202A] focus:bg-[#20202A] text-sm font-semibold text-white rounded-2xl border border-white/10 focus:outline-none focus:border-brand-500/60 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Popular quick search suggestions */}
      {!searchTerm && (
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 pt-0.5">
          <span className="font-bold flex items-center gap-1 text-gray-400">
            <TrendingUp className="w-3.5 h-3.5 text-rose-500" />
            Popular:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {POPULAR_SEARCHES.map((query) => (
              <button
                key={query}
                type="button"
                onClick={() => setSearchTerm(query)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-rose-950/60 text-gray-300 hover:text-rose-300 border border-white/5 text-[11px] font-semibold transition-colors"
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filter & Sorting Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          {/* Veg Only Toggle */}
          <button
            type="button"
            onClick={() => setIsPureVegOnly(!isPureVegOnly)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all active:scale-95 ${
              isPureVegOnly
                ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-xs'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/20'
            }`}
          >
            <div className="w-3.5 h-3.5 rounded border border-emerald-500 flex items-center justify-center p-0.5">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isPureVegOnly ? 'bg-emerald-400' : 'bg-gray-500'
                }`}
              />
            </div>
            <span>Pure Veg</span>
          </button>

          {/* Rating 4.0+ Toggle */}
          <button
            type="button"
            onClick={() => setMinRating(minRating === 4.0 ? null : 4.0)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              minRating === 4.0
                ? 'bg-amber-950/60 border-amber-500 text-amber-300 shadow-xs'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/20'
            }`}
          >
            <Star
              className={`w-3.5 h-3.5 ${
                minRating === 4.0
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-gray-400'
              }`}
            />
            <span>Rating 4.0+</span>
          </button>

          {/* Fast Delivery (< 30 min) */}
          <button
            type="button"
            onClick={() => setMaxDeliveryTime(maxDeliveryTime === 30 ? null : 30)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              maxDeliveryTime === 30
                ? 'bg-rose-950/70 border-rose-500 text-rose-300 shadow-xs'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/20'
            }`}
          >
            <Zap
              className={`w-3.5 h-3.5 ${
                maxDeliveryTime === 30 ? 'text-rose-400 fill-rose-400' : 'text-gray-400'
              }`}
            />
            <span>Express (&lt; 30m)</span>
          </button>

          {/* Reset Filters Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="px-3 py-2 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-950/40 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs font-bold text-gray-400 hidden sm:inline">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-bold text-gray-200 bg-[#1C1C24] border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500 cursor-pointer shadow-inner hover:bg-[#23232C] transition-colors"
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Rating: High to Low</option>
            <option value="time">Fastest Delivery</option>
            <option value="costAsc">Cost: Low to High</option>
            <option value="costDesc">Cost: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
