import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPureVegOnly, setIsPureVegOnly] = useState(false);
  const [minRating, setMinRating] = useState(null); // null, 4.0, 4.5
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(null); // null, 25, 30
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'rating', 'time', 'costAsc', 'costDesc'

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setIsPureVegOnly(false);
    setMinRating(null);
    setMaxDeliveryTime(null);
    setSortBy('recommended');
  };

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedCategory !== 'all' ||
    isPureVegOnly ||
    minRating !== null ||
    maxDeliveryTime !== null ||
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
        minRating,
        setMinRating,
        maxDeliveryTime,
        setMaxDeliveryTime,
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
