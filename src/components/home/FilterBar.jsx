import React from 'react';
import {
  Search,
  X,
  SlidersHorizontal,
  Star,
  Clock,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { useFilter } from '../../context/FilterContext';

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
    <div className="bg-white rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-soft space-y-4 mb-8">
      {/* Top Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <Search className="w-5 h-5 text-brand-600" />
        </div>
        <input
          type="text"
          placeholder="Search restaurants, dishes (e.g. Biryani, Masala Dosa, Butter Chicken, Chole Bhature, Pav Bhaji)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-10 py-3.5 bg-gray-50 hover:bg-gray-100/70 focus:bg-white text-sm font-medium text-gray-900 rounded-2xl border border-gray-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-gray-400"
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

      {/* Filter & Sorting Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-gray-100">
        <div className="flex flex-wrap items-center gap-2">
          {/* Veg Only Toggle */}
          <button
            type="button"
            onClick={() => setIsPureVegOnly(!isPureVegOnly)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all active:scale-95 ${
              isPureVegOnly
                ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isPureVegOnly ? 'bg-emerald-600' : 'bg-gray-300'
              }`}
            />
            <span>Pure Veg</span>
          </button>

          {/* Rating 4.0+ Toggle */}
          <button
            type="button"
            onClick={() => setMinRating(minRating === 4.0 ? null : 4.0)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              minRating === 4.0
                ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-sm'
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
            <span>Ratings 4.0+</span>
          </button>

          {/* Fast Delivery (< 30 min) */}
          <button
            type="button"
            onClick={() => setMaxDeliveryTime(maxDeliveryTime === 30 ? null : 30)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              maxDeliveryTime === 30
                ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <Clock
              className={`w-3.5 h-3.5 ${
                maxDeliveryTime === 30 ? 'text-blue-600' : 'text-gray-400'
              }`}
            />
            <span>Fast (&lt; 30 mins)</span>
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
            className="text-xs font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500 cursor-pointer"
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
