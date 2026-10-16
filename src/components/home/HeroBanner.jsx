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
      <div className="relative overflow-hidden rounded-[28px] bg-[#0C0C10] border border-white/10 shadow-2xl shadow-rose-950/40 min-h-[360px] sm:min-h-[400px] flex items-center">
        {/* Full-width Food Photography spanning left and center */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Main gourmet feast image */}
          <img
            src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1600&q=85"
            alt="Gourmet Dining Feast"
            className="w-full h-full object-cover object-[30%_center] opacity-85"
          />

          {/* Left subtle dark vignette so the glass card pops with readability */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0C0C10]/80 via-[#0C0C10]/40 to-transparent" />

          {/* Right dark fade covering the right half for pristine typography */}
          <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-[#0C0C10] via-[#0C0C10]/95 via-40% to-transparent" />

          {/* Ambient Ruby Waves on right border */}
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-bl from-rose-950/40 via-transparent to-transparent" />
        </div>

        {/* Dynamic Curved Wave Graphic SVG Accent on Right matching reference */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden z-1">
          <svg
            className="absolute -right-10 top-0 h-full w-[130%] text-[#9F1239]/30"
            viewBox="0 0 400 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 400,0 C 260,80 320,240 180,500 L 400,500 Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="absolute -right-4 top-0 h-full w-[120%] text-[#E11D48]/25"
            viewBox="0 0 400 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 400,0 C 290,100 340,280 230,500 L 400,500 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Floating Frosted Glass 50% OFF Card */}
          <div className="w-full sm:w-64 lg:w-[260px] flex-shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
            {/* Subtle gloss reflection */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-white/15 rounded-full blur-xl pointer-events-none" />

            <span className="text-[11px] font-black uppercase tracking-widest text-gray-200">
              FLAT
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mt-1">
              50% OFF
            </div>
            <p className="text-xs text-gray-200 font-medium mt-2 max-w-[160px] leading-relaxed">
              On Your First Gourmet Order!
            </p>
            <div className="mt-3 text-[11px] font-semibold text-rose-300">
              Use Code: <span className="font-extrabold text-white">CRAVE50</span>
            </div>

            <button
              type="button"
              onClick={() => handleOrderNow('CRAVE50')}
              className={`mt-4 px-7 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-1.5 ${
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

          {/* Right: Headlines & Cuisine Pills */}
          <div className="flex-1 lg:max-w-xl lg:pl-10 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-[1.12]">
              Gourmet Dining, Delivered.
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
              Experience Exquisite Flavors in the Comfort of Your Home.
            </p>

            {/* Pill Rows matching screenshot */}
            <div className="mt-6 space-y-2.5 w-full">
              {pillRows.map((row, rIdx) => (
                <div key={rIdx} className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {row.map((item) => {
                    const isActive =
                      selectedCategory === item.id ||
                      (item.id === 'all' && selectedCategory === 'all');

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedCategory(item.id)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
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

          {/* Peeking Next Carousel Card on far right edge (Desktop) */}
          <div className="hidden xl:flex absolute -right-24 top-1/2 -translate-y-1/2 w-56 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 flex-col items-center text-center opacity-70 hover:opacity-100 transition-opacity pointer-events-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
              GET
            </span>
            <div className="text-3xl font-black text-white">30% OFF</div>
            <p className="text-[11px] text-gray-300 mt-1">On Your Next Order</p>
            <button
              type="button"
              onClick={() => handleOrderNow('TASTY20')}
              className="mt-3 px-5 py-1.5 rounded-full bg-[#E11D48] text-white text-[10px] font-bold uppercase tracking-wider"
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
