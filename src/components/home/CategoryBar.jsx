import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { useFilter } from '../../context/FilterContext';

export default function CategoryBar() {
  const { selectedCategory, setSelectedCategory } = useFilter();

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            What's on your mind?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Explore curated dishes from your favorite food categories
          </p>
        </div>
      </div>

      {/* Horizontal scrolling pill list */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-all duration-200 active:scale-95 ${
                isSelected
                  ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-brand-200 hover:bg-brand-50/40'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold whitespace-nowrap">
                  {cat.name}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
