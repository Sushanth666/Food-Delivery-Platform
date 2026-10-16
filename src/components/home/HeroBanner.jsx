import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFilter } from '../../context/FilterContext';

export default function HeroBanner() {
  const { applyCoupon, openCartDrawer, coupon } = useCart();
  const { selectedCategory, setSelectedCategory } = useFilter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [codeApplied, setCodeApplied] = useState(false);

  const handleOrderNow = (code = 'CRAVE50') => {
    applyCoupon(code);
    setCodeApplied(true);
    openCartDrawer();
    setTimeout(() => setCodeApplied(false), 3000);
  };

  const pillRows = [
    [
      { id: 'all', label: 'All' },
      { id: 'north-indian', label: 'North Indian', flag: '🇮🇳' },
      { id: 'italian', label: 'Premium Italian' },
      { id: 'healthy', label: 'Healthy', icon: '🥗' },
    ],
    [
      { id: 'japanese', label: 'Japanese Sushi' },
      { id: 'thai', label: 'Thai' },
      { id: 'desserts', label: 'Desserts, Healthy' },
    ],
  ];

  return (
    <div className="mb-10">
      {/* Outer Panoramic Hero Frame */}
      <div className="relative overflow-hidden rounded-[28px] bg-[#0C0C11] border border-white/10 shadow-2xl shadow-rose-950/40 min-h-[380px] flex items-center">
        {/* Ambient Dark Ruby Waves on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none overflow-hidden z-0">
          <svg
            className="absolute -right-8 top-0 h-full w-[130%] text-[#881337]/35"
            viewBox="0 0 400 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 400,0 C 240,70 310,230 160,500 L 400,500 Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="absolute -right-2 top-0 h-full w-[115%] text-[#BE123C]/25"
            viewBox="0 0 400 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 400,0 C 270,90 330,270 210,500 L 400,500 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Ambient background glow behind food */}
        <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

        {/* 3-Column Layout: Left Promo Card | Center Platter | Right Headlines */}
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* 1. Left: Floating Frosted Glass 50% OFF Card */}
          <div className="w-full sm:w-60 lg:w-[245px] flex-shrink-0 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
            {/* Subtle gloss reflection */}
            <div className="absolute -top-14 -left-14 w-28 h-28 bg-white/15 rounded-full blur-xl pointer-events-none" />

            <span className="text-[11px] font-black uppercase tracking-widest text-gray-300">
              FLAT
            </span>
            <div className="text-4xl sm:text-[44px] font-black text-white tracking-tight leading-none mt-1">
              50% OFF
            </div>
            <p className="text-xs text-gray-200 font-medium mt-2 max-w-[150px] leading-relaxed">
              On Your First Gourmet Order!
            </p>
            <div className="mt-3 text-[11px] font-semibold text-rose-300">
              Use Code: <span className="font-extrabold text-white">CRAVE50</span>
            </div>

            <button
              type="button"
              onClick={() => handleOrderNow('CRAVE50')}
              className={`mt-4 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-1.5 ${
                codeApplied || coupon?.code === 'CRAVE50'
                  ? 'bg-emerald-600 text-white shadow-emerald-950/60'
                  : 'bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-rose-950/70 hover:shadow-rose-900 hover:scale-103'
              }`}
            >
              {codeApplied || coupon?.code === 'CRAVE50' ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>APPLIED</span>
                </>
              ) : (
                <span>ORDER NOW</span>
              )}
            </button>
          </div>

          {/* 2. Center: Gourmet Feast Platter sitting neatly in the middle */}
          <div className="relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] flex items-center justify-center">
            {/* Soft radial glow under the plate */}
            <div className="absolute inset-0 rounded-full bg-rose-600/15 blur-2xl pointer-events-none" />

            {/* Circular Plate with soft border and shadow */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-black/90 border-2 border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=85"
                alt="Kadai Butter Chicken Feast with Naan"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle inner shadow for dish depth */}
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
            </div>
          </div>

          {/* 3. Right: Clean Headlines & Cuisine Pills on Dark Background */}
          <div className="flex-1 lg:max-w-[460px] flex flex-col items-start text-left z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-[35px] font-black font-display text-white tracking-tight leading-tight whitespace-nowrap">
              Gourmet Dining, Delivered.
            </h1>
            <p className="mt-1.5 text-xs sm:text-[13px] text-gray-300 font-medium leading-relaxed">
              Experience Exquisite Flavors in the Comfort of Your Home.
            </p>

            {/* Pill Rows matching screenshot */}
            <div className="mt-5 space-y-2.5 w-full">
              {pillRows.map((row, rIdx) => (
                <div key={rIdx} className="flex flex-wrap items-center gap-2">
                  {row.map((item) => {
                    const isActive =
                      selectedCategory === item.id ||
                      (item.id === 'all' && selectedCategory === 'all');

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedCategory(item.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                          isActive
                            ? 'bg-[#E11D48] text-white font-bold shadow-md shadow-rose-950/60 scale-103'
                            : 'bg-white/5 hover:bg-white/10 border border-white/15 text-gray-300 hover:text-white hover:border-rose-500/40'
                        }`}
                      >
                        {item.flag && <span>{item.flag}</span>}
                        {item.icon && <span>{item.icon}</span>}
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* 4. Peeking Next Carousel Card on the far right edge (Desktop) */}
          <div className="hidden 2xl:flex absolute -right-20 top-1/2 -translate-y-1/2 w-48 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 flex-col items-center text-center opacity-65 hover:opacity-100 transition-opacity pointer-events-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
              GET
            </span>
            <div className="text-2xl font-black text-white">30% OFF</div>
            <p className="text-[10px] text-gray-300 mt-0.5">On Your Next Order</p>
            <button
              type="button"
              onClick={() => handleOrderNow('TASTY20')}
              className="mt-2.5 px-4 py-1 rounded-full bg-[#E11D48] text-white text-[10px] font-bold uppercase tracking-wider"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => setActiveSlide(0)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeSlide === 0 ? 'w-7 bg-[#E11D48]' : 'w-1.5 bg-gray-600 hover:bg-gray-400'
          }`}
          aria-label="Slide 1"
        />
        <button
          type="button"
          onClick={() => setActiveSlide(1)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeSlide === 1 ? 'w-7 bg-[#E11D48]' : 'w-1.5 bg-gray-600 hover:bg-gray-400'
          }`}
          aria-label="Slide 2"
        />
        <button
          type="button"
          onClick={() => setActiveSlide(2)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeSlide === 2 ? 'w-7 bg-[#E11D48]' : 'w-1.5 bg-gray-600 hover:bg-gray-400'
          }`}
          aria-label="Slide 3"
        />
      </div>
    </div>
  );
}
