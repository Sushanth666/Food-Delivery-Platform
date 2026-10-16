import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPureVegOnly, setIsPureVegOnly] = useState(false);
  const [isNonVegOnly, setIsNonVegOnly] = useState(false);
  const [minRating, setMinRating] = useState(null); // null, 4.0, 4.5
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(null); // null, 25, 30
  const [onlyOffers, setOnlyOffers] = useState(false); // special discount tags
  const [onlyBestsellers, setOnlyBestsellers] = useState(false); // top trending/bestsellers
  const [budgetUnder, setBudgetUnder] = useState(null); // cost for two <= 350
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'rating', 'time', 'costAsc', 'costDesc'

  // Mutually exclusive toggle for Veg
  const togglePureVeg = () => {
    setIsPureVegOnly((prev) => {
      const next = !prev;
      if (next) setIsNonVegOnly(false);
      return next;
    });
  };

  // Mutually exclusive toggle for Non-Veg
  const toggleNonVeg = () => {
    setIsNonVegOnly((prev) => {
      const next = !prev;
      if (next) setIsPureVegOnly(false);
      return next;
    });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setIsPureVegOnly(false);
    setIsNonVegOnly(false);
    setMinRating(null);
    setMaxDeliveryTime(null);
    setOnlyOffers(false);
    setOnlyBestsellers(false);
    setBudgetUnder(null);
    setSortBy('recommended');
  };

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedCategory !== 'all' ||
    isPureVegOnly ||
    isNonVegOnly ||
    minRating !== null ||
    maxDeliveryTime !== null ||
    onlyOffers ||
    onlyBestsellers ||
    budgetUnder !== null ||
    sortBy !== 'recommended';

  return (
    <FilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        isPureVegOnly,
        setIsPureVegOnly,
        togglePureVeg,
        isNonVegOnly,
        setIsNonVegOnly,
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}
