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
  Tag,
  Flame,
  BadgeIndianRupee,
} from 'lucide-react';
import { useFilter } from '../../context/FilterContext';

const POPULAR_SEARCHES = ['Biryani', 'Butter Chicken', 'Masala Dosa', 'Pasta', 'Sushi', 'Pav Bhaji'];

export default function FilterBar() {
  const {
    searchTerm,
    setSearchTerm,
    isPureVegOnly,
    togglePureVeg,
    isNonVegOnly,
    toggleNonVeg,
    minRating,
    setMinRating,
    maxDeliveryTime,
    setMaxDeliveryTime,
    onlyOffers,
    setOnlyOffers,
    onlyBestsellers,
    setOnlyBestsellers,
    budgetUnder,
    setBudgetUnder,
    sortBy,
    setSortBy,
    resetFilters,
    hasActiveFilters,
    is15MinRushOnly,
    toggle15MinRush,
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
          {/* 1. Pure Veg Toggle (Indian Green Square + Dot) */}
          <button
            type="button"
            onClick={togglePureVeg}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all active:scale-95 ${
              isPureVegOnly
                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/40 ring-2 ring-emerald-500/20'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
            }`}
          >
            <div className="w-3.5 h-3.5 rounded border border-emerald-500 flex items-center justify-center p-0.5 bg-emerald-950/40">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isPureVegOnly ? 'bg-emerald-400' : 'bg-gray-400'
                }`}
              />
            </div>
            <span>Pure Veg</span>
          </button>

          {/* 2. Non-Veg Toggle (Indian Red/Brown Square + Triangle) */}
          <button
            type="button"
            onClick={toggleNonVeg}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all active:scale-95 ${
              isNonVegOnly
                ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-md shadow-rose-950/40 ring-2 ring-rose-500/20'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
            }`}
          >
            <div className="w-3.5 h-3.5 rounded border border-rose-500 flex items-center justify-center p-0.5 bg-rose-950/40">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isNonVegOnly ? 'bg-rose-500' : 'bg-rose-400/60'
                }`}
              />
            </div>
            <span>Non-Veg</span>
          </button>

          {/* 3. Rating 4.0+ Toggle */}
          <button
            type="button"
            onClick={() => setMinRating(minRating === 4.0 ? null : 4.0)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              minRating === 4.0
                ? 'bg-amber-950/70 border-amber-500 text-amber-300 shadow-md shadow-amber-950/40 ring-2 ring-amber-500/20'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
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

          {/* ⚡ CraveExpress 15-Min Rush Button */}
          <button
            type="button"
            onClick={toggle15MinRush}
            className={`px-3.5 py-2 rounded-xl text-xs font-black border flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
              is15MinRushOnly
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black border-amber-300 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/40'
                : 'bg-[#1C1C24] border-amber-500/30 text-amber-300 hover:border-amber-400 hover:text-white'
            }`}
          >
            <Zap
              className={`w-3.5 h-3.5 ${
                is15MinRushOnly ? 'fill-black text-black' : 'text-amber-400 fill-amber-400'
              }`}
            />
            <span>⚡ 15-Min Rush</span>
          </button>

          {/* 4. Fast Express Delivery (< 30 min) */}
          <button
            type="button"
            onClick={() => setMaxDeliveryTime(maxDeliveryTime === 30 ? null : 30)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              maxDeliveryTime === 30
                ? 'bg-orange-950/70 border-orange-500 text-orange-300 shadow-md shadow-orange-950/40 ring-2 ring-orange-500/20'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
            }`}
          >
            <Zap
              className={`w-3.5 h-3.5 ${
                maxDeliveryTime === 30 ? 'text-orange-400 fill-orange-400' : 'text-gray-400'
              }`}
            />
            <span>Express (&lt; 30m)</span>
          </button>

          {/* 5. Great Offers Toggle */}
          <button
            type="button"
            onClick={() => setOnlyOffers(!onlyOffers)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              onlyOffers
                ? 'bg-purple-950/70 border-purple-500 text-purple-300 shadow-md shadow-purple-950/40 ring-2 ring-purple-500/20'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
            }`}
          >
            <Tag className="w-3.5 h-3.5 text-purple-400" />
            <span>Offers</span>
          </button>

          {/* 6. Top Rated 4.5+ / Bestsellers */}
          <button
            type="button"
            onClick={() => setOnlyBestsellers(!onlyBestsellers)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              onlyBestsellers
                ? 'bg-red-950/70 border-red-500 text-red-300 shadow-md shadow-red-950/40 ring-2 ring-red-500/20'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Top Rated 4.5+</span>
          </button>

          {/* 7. Budget Friendly Under ₹350 */}
          <button
            type="button"
            onClick={() => setBudgetUnder(budgetUnder === 350 ? null : 350)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
              budgetUnder === 350
                ? 'bg-blue-950/70 border-blue-500 text-blue-300 shadow-md shadow-blue-950/40 ring-2 ring-blue-500/20'
                : 'bg-[#1C1C24] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
            }`}
          >
            <BadgeIndianRupee className="w-3.5 h-3.5 text-blue-400" />
            <span>Under ₹350</span>
          </button>

          {/* Reset Filters Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="px-3 py-2 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-950/50 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All</span>
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
