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

const POPULAR_SEARCHES = ['Biryani', 'Masala Dosa', 'Butter Chicken', 'Pav Bhaji', 'Paneer Tikka'];

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
    <div className="glass-card rounded-3xl p-4 sm:p-5 shadow-card border border-white/80 space-y-3.5 mb-8 transition-shadow">
      {/* Top Search Input with ambient glow */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-600 transition-colors">
          <Search className="w-5 h-5 text-brand-600" />
        </div>
        <input
          type="text"
          placeholder="Search restaurants, dishes (e.g. Biryani, Masala Dosa, Butter Chicken, Pav Bhaji)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-10 py-3.5 bg-gray-50/80 hover:bg-gray-100/70 focus:bg-white text-sm font-semibold text-gray-900 rounded-2xl border border-gray-200/80 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Popular quick search suggestions */}
      {!searchTerm && (
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 pt-0.5">
          <span className="font-bold flex items-center gap-1 text-gray-400">
            <TrendingUp className="w-3.5 h-3.5 text-brand-500" />
            Popular:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {POPULAR_SEARCHES.map((query) => (
              <button
                key={query}
                type="button"
                onClick={() => setSearchTerm(query)}
                className="px-2.5 py-1 rounded-lg bg-gray-100/70 hover:bg-brand-50 hover:text-brand-600 text-[11px] font-semibold text-gray-600 transition-colors"
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filter & Sorting Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100/80">
        <div className="flex flex-wrap items-center gap-2">
          {/* Veg Only Toggle (with authentic Indian green square-dot emblem) */}
          <button
            type="button"
            onClick={() => setIsPureVegOnly(!isPureVegOnly)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all active:scale-95 ${
              isPureVegOnly
                ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-xs'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="w-3.5 h-3.5 rounded border border-emerald-600 flex items-center justify-center p-0.5">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isPureVegOnly ? 'bg-emerald-600' : 'bg-gray-300'
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
                ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-xs'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <Star
              className={`w-3.5 h-3.5 ${
                minRating === 4.0
                  ? 'fill-amber-500 text-amber-500'
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
                ? 'bg-orange-50 border-orange-500 text-brand-900 shadow-xs'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <Zap
              className={`w-3.5 h-3.5 ${
                maxDeliveryTime === 30 ? 'text-brand-600 fill-brand-500' : 'text-gray-400'
              }`}
            />
            <span>Express (&lt; 30m)</span>
          </button>

          {/* Reset Filters Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1"
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
            className="text-xs font-bold text-gray-700 bg-gray-50/90 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500 cursor-pointer shadow-2xs hover:bg-white transition-colors"
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
