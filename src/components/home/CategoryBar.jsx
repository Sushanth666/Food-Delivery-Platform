import React, { useRef } from 'react';
import { CATEGORIES } from '../../data/categories';
import { useFilter } from '../../context/FilterContext';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';

export default function CategoryBar() {
  const { selectedCategory, setSelectedCategory } = useFilter();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full py-6 mb-2">
      {/* Header with Title and Scroll Controls */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 fill-brand-500" />
            <span>Craving Inspiration</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-display text-gray-900 tracking-tight">
            What's On Your Mind?
          </h2>
        </div>

        {/* Scroll Buttons for Desktop */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-brand-600 shadow-xs transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-brand-600 shadow-xs transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal scrolling visual category cards */}
      <div
        ref={scrollRef}
        className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
      >
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 group active:scale-95 ${
                isSelected
                  ? 'bg-gradient-to-r from-brand-600 to-amber-500 border-transparent text-white shadow-lg shadow-brand-500/30 scale-105'
                  : 'bg-white/80 backdrop-blur-md border-gray-200/90 text-gray-700 hover:border-brand-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {/* Category Icon Badge with Gradient Container */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100/80'
                }`}
              >
                <span>{cat.icon}</span>
              </div>

              {/* Text Meta */}
              <div className="text-left">
                <div
                  className={`text-xs sm:text-sm font-extrabold whitespace-nowrap leading-snug ${
                    isSelected ? 'text-white' : 'text-gray-900 group-hover:text-brand-600'
                  }`}
                >
                  {cat.name}
                </div>
                <div
                  className={`text-[11px] font-medium whitespace-nowrap ${
                    isSelected ? 'text-white/80' : 'text-gray-400'
                  }`}
                >
                  {cat.description || 'Explore'}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
