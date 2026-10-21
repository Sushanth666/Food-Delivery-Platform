import React, { useMemo, useState } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedExquisiteCuisines from '../components/home/FeaturedExquisiteCuisines';
import CategoryBar from '../components/home/CategoryBar';
import FilterBar from '../components/home/FilterBar';
import RestaurantCard from '../components/home/RestaurantCard';
import CravingWheelModal from '../components/home/CravingWheelModal';
import HappyHourBanner from '../components/home/HappyHourBanner';
import { RESTAURANTS } from '../data/restaurants';
import { useFilter } from '../context/FilterContext';
import { Utensils, Frown, Sparkles, Dices, Zap } from 'lucide-react';

export default function HomePage() {
  const {
    searchTerm,
    selectedCategory,
    isPureVegOnly,
    isNonVegOnly,
    minRating,
    maxDeliveryTime,
    onlyOffers,
    onlyBestsellers,
    budgetUnder,
    sortBy,
    resetFilters,
    is15MinRushOnly,
    setIs15MinRushOnly,
  } = useFilter();

  const [isWheelOpen, setIsWheelOpen] = useState(false);

  const filteredRestaurants = useMemo(() => {
    return RESTAURANTS.filter((rest) => {
      // Search query filter (matches restaurant name, cuisines, or dishes)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = rest.name.toLowerCase().includes(query);
        const matchesCuisine = rest.cuisines.some((c) =>
          c.toLowerCase().includes(query)
        );
        const matchesDish = rest.menuCategories.some((cat) =>
          cat.items.some((it) => it.name.toLowerCase().includes(query))
        );

        if (!matchesName && !matchesCuisine && !matchesDish) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all') {
        const catMap = {
          biryani: 'Biryani & Pulao',
          'north-indian': 'North Indian',
          'south-indian': 'South Indian',
          chaat: 'Chaat & Street Food',
          rolls: 'Rolls & Burgers',
          chinese: 'Indo-Chinese',
          pizza: 'Pizza & Breads',
          desserts: 'Mithai & Desserts',
          beverages: 'Chai & Lassi',
          italian: 'Pizza & Breads',
          japanese: 'Indo-Chinese',
          thai: 'Indo-Chinese',
          healthy: 'South Indian',
        };
        const targetCuisine = catMap[selectedCategory];
        if (
          targetCuisine &&
          !rest.cuisines.some(
            (c) => c.toLowerCase() === targetCuisine.toLowerCase()
          )
        ) {
          return false;
        }
      }

      // Veg only
      if (isPureVegOnly && !rest.isPureVeg) {
        return false;
      }

      // Non-Veg filter (restaurants that are NOT pure veg, serving non-veg delights)
      if (isNonVegOnly && rest.isPureVeg) {
        return false;
      }

      // Rating filter
      if (minRating && rest.rating < minRating) {
        return false;
      }

      // Delivery time filter (e.g. "20-30 min" -> max minutes 30)
      if (maxDeliveryTime) {
        const match = rest.deliveryTime.match(/\d+/g);
        if (match && match.length > 0) {
          const upperTime = parseInt(match[match.length - 1], 10);
          if (upperTime > maxDeliveryTime) return false;
        }
      }

      // Great Offers only
      if (onlyOffers && !rest.tag) {
        return false;
      }

      // Bestsellers / Top Rated only
      if (onlyBestsellers && rest.rating < 4.5 && !rest.tag?.toLowerCase().includes('trending')) {
        return false;
      }

      // Budget friendly (cost for two <= budgetUnder)
      if (budgetUnder && rest.costForTwo > budgetUnder) {
        return false;
      }

      // CraveExpress 15-Minute Rush Guarantee Filter
      if (is15MinRushOnly) {
        const match = rest.deliveryTime.match(/\d+/g);
        const lowerTime = match && match.length > 0 ? parseInt(match[0], 10) : 30;
        const isExpress =
          lowerTime <= 25 ||
          rest.cuisines.some((c) =>
            ['Chaat & Street Food', 'Chai & Lassi', 'Rolls & Burgers', 'Fast Food'].includes(c)
          );
        if (!isExpress) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'costAsc') return a.costForTwo - b.costForTwo;
      if (sortBy === 'costDesc') return b.costForTwo - a.costForTwo;
      if (sortBy === 'time') {
        const timeA = parseInt(a.deliveryTime) || 30;
        const timeB = parseInt(b.deliveryTime) || 30;
        return timeA - timeB;
      }
      return 0; // recommended default
    });
  }, [
    searchTerm,
    selectedCategory,
    isPureVegOnly,
    isNonVegOnly,
    minRating,
    maxDeliveryTime,
    onlyOffers,
    onlyBestsellers,
    budgetUnder,
    sortBy,
    is15MinRushOnly,
  ]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
      {/* Flagship Hero Panoramic Banner matching reference */}
      <HeroBanner />

      {/* Featured Exquisite Cuisines Row matching reference */}
      <FeaturedExquisiteCuisines />

      {/* Gamified Craving Roulette Interactive Banner */}
      <section className="my-6 relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-950/80 via-[#1B141D] to-purple-950/70 border border-rose-500/30 p-5 sm:p-7 shadow-xl shadow-rose-950/30">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-rose-500 to-purple-600 p-0.5 shadow-lg shadow-rose-950/60 shrink-0 animate-pulse">
              <div className="w-full h-full rounded-[14px] bg-[#141018] flex items-center justify-center text-3xl sm:text-4xl">
                🎰
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Can't Decide What to Eat?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                Spin the Crave Roulette Wheel
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                Let fate pick your dinner from 30+ regional cuisines or win surprise FLAT 50% discount coupons instantly!
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsWheelOpen(true)}
            className="w-full md:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-brand-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-sm tracking-wide shadow-xl shadow-rose-900/50 flex items-center justify-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <Dices className="w-5 h-5 text-amber-200" />
            <span>Spin Now & Win</span>
          </button>
        </div>
      </section>

      {/* Dynamic Happy Hour Flash Deal Banner */}
      <HappyHourBanner />

      {/* Food Category Carousel */}
      <CategoryBar />

      {/* Search & Dynamic Filter Bar */}
      <FilterBar />

      {/* Section Header */}
      <div id="restaurants-list-section" className="flex items-center justify-between mb-6 scroll-mt-24">
        <div>
          <h2 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight flex items-center gap-2">
            <span>
              {is15MinRushOnly
                ? '⚡ 15-Minute Hyper-Fast Rush Guarantee'
                : selectedCategory !== 'all'
                ? `Restaurants for ${selectedCategory.toUpperCase().replace('-', ' ')}`
                : 'All Authentic Restaurants'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-950/70 text-rose-300 border border-rose-800/50 shadow-2xs">
              {filteredRestaurants.length} available
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
            {is15MinRushOnly
              ? 'Guaranteed on-time express dispatch in 15 mins or get ₹50 CraveCoins cashback!'
              : 'Handpicked gourmet eateries with exceptional ratings and swift express delivery'}
          </p>
        </div>

        {(selectedCategory !== 'all' || is15MinRushOnly) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setIs15MinRushOnly(false);
            }}
            className="text-xs font-bold text-rose-400 hover:text-rose-300 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Restaurant Grid or Empty Results State */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <div className="bg-[#14141A] rounded-3xl p-12 text-center border border-white/10 shadow-2xl max-w-lg mx-auto my-8">
          <div className="w-20 h-20 rounded-full bg-rose-950/60 border border-rose-800/40 flex items-center justify-center text-rose-400 mx-auto mb-4">
            <Frown className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-bold text-white">
            No matching restaurants found
          </h3>
          <p className="text-sm text-gray-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search criteria, dietary toggles, or filter settings to explore more places.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs shadow-md shadow-brand-950/50 transition-all active:scale-95"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Floating Quick Spin Trigger Button (Bottom-Right, subtle & glowing) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setIsWheelOpen(true)}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-rose-600 via-brand-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-rose-900/80 border border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span className="text-lg group-hover:rotate-180 transition-transform duration-500">🎰</span>
          <span>Spin Craving Wheel</span>
          <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
        </button>
      </div>

      {/* Craving Wheel Interactive Modal */}
      <CravingWheelModal
        isOpen={isWheelOpen}
        onClose={() => setIsWheelOpen(false)}
      />
    </main>
  );
}
