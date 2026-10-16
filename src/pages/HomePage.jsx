import React, { useMemo } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryBar from '../components/home/CategoryBar';
import FilterBar from '../components/home/FilterBar';
import RestaurantCard from '../components/home/RestaurantCard';
import { RESTAURANTS } from '../data/restaurants';
import { useFilter } from '../context/FilterContext';
import { Utensils, Frown, Sparkles } from 'lucide-react';

export default function HomePage() {
  const {
    searchTerm,
    selectedCategory,
    isPureVegOnly,
    minRating,
    maxDeliveryTime,
    sortBy,
    resetFilters,
  } = useFilter();

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
          burgers: 'Burgers',
          pizza: 'Pizza',
          biryani: 'Biryani',
          asian: 'Asian',
          healthy: 'Healthy',
          desserts: 'Desserts',
          mexican: 'Mexican',
          beverages: 'Beverages',
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
    minRating,
    maxDeliveryTime,
    sortBy,
  ]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
      {/* Hero with interactive coupon activations */}
      <HeroBanner />

      {/* Food Category Carousel */}
      <CategoryBar />

      {/* Search & Dynamic Filter Bar */}
      <FilterBar />

      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <span>Restaurants Near You</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-50 text-brand-600 border border-brand-100">
              {filteredRestaurants.length} available
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Handpicked eateries with exceptional food ratings and swift delivery
          </p>
        </div>
      </div>

      {/* Restaurant Grid or Empty Results State */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-soft max-w-lg mx-auto my-8">
          <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 mx-auto mb-4">
            <Frown className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            No matching restaurants found
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search criteria, dietary toggles, or filter settings to explore more places.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </main>
  );
}
