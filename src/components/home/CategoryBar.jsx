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
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Craving Inspiration</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight">
            What's On Your Mind?
          </h2>
        </div>

        {/* Scroll Buttons for Desktop */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-white/10 bg-[#15151B] hover:bg-[#1E1E26] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full border border-white/10 bg-[#15151B] hover:bg-[#1E1E26] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
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
                  ? 'bg-gradient-to-r from-brand-600 to-rose-600 border-transparent text-white shadow-lg shadow-rose-950/50 scale-105'
                  : 'bg-[#15151B] border-white/10 text-gray-300 hover:border-brand-500/40 hover:bg-[#1E1E26] hover:-translate-y-0.5'
              }`}
            >
              {/* Category Icon Badge with Gradient Container */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <span>{cat.icon}</span>
              </div>

              {/* Text Meta */}
              <div className="text-left">
                <div
                  className={`text-xs sm:text-sm font-extrabold whitespace-nowrap leading-snug ${
                    isSelected ? 'text-white' : 'text-gray-200 group-hover:text-rose-400'
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
