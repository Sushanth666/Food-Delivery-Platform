import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, Sparkles, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFilter } from '../../context/FilterContext';

export default function HeroBanner() {
  const { applyCoupon, openCartDrawer, coupon } = useCart();
  const { selectedCategory, setSelectedCategory } = useFilter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [codeApplied, setCodeApplied] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = 3;

  // Auto-play slideshow every 5.5s (pauses on mouse hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handleOrderNow = (code = 'CRAVE50') => {
    applyCoupon(code);
    setCodeApplied(true);
    openCartDrawer();
    setTimeout(() => setCodeApplied(false), 3000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
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
    <div
      className="mb-10 relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        {/* Ambient background glow */}
        <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />

        {/* Animated Slide Container */}
        <div className="relative z-10 w-full min-h-[380px] flex items-center">
          <AnimatePresence mode="wait">
            {/* ======================================================== */}
            {/* SLIDE 1: 1st Image (FLAT 50% OFF Card & Welcome Offer) */}
            {/* ======================================================== */}
            {activeSlide === 0 && (
              <motion.div
                key="slide-50-off"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full px-6 sm:px-12 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-8"
              >
                {/* 1st Image Card: FLAT 50% OFF */}
                <div className="w-full sm:w-[320px] md:w-[340px] flex-shrink-0 bg-[#14141C]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                  {/* Subtle gloss reflection */}
                  <div className="absolute -top-14 -left-14 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

                  <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                    FLAT
                  </span>
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mt-1.5 font-display">
                    50% OFF
                  </div>
                  <p className="text-sm text-gray-200 font-semibold mt-3 max-w-[220px] leading-relaxed">
                    On Your First Gourmet Order!
                  </p>
                  <div className="mt-3.5 text-xs font-bold text-rose-300">
                    Use Code: <span className="font-black text-white tracking-wider">CRAVE50</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOrderNow('CRAVE50')}
                    className={`mt-5 w-full py-3 px-8 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                      codeApplied || coupon?.code === 'CRAVE50'
                        ? 'bg-emerald-600 text-white shadow-emerald-950/60'
                        : 'bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-rose-950/80 hover:shadow-rose-900 hover:scale-102'
                    }`}
                  >
                    {codeApplied || coupon?.code === 'CRAVE50' ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>COUPON APPLIED</span>
                      </>
                    ) : (
                      <span>ORDER NOW</span>
                    )}
                  </button>
                </div>

                {/* Right Side Showcase for Slide 1 */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-6 sm:gap-10">
                  <div className="text-center md:text-left max-w-md">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-bold mb-3">
                      <Sparkles className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                      <span>Welcome Special Offer</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight leading-tight">
                      Experience Royal Indian Flavors at Half Price
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                      Enjoy authentic handi biryanis, slow-cooked kadai curries, and tandoori starters with instant 50% discount.
                    </p>
                    <div className="mt-4 flex items-center gap-3 justify-center md:justify-start text-xs font-bold text-rose-300">
                      <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                        ⚡ Free Fast Delivery
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                        ★ 4.8+ Top Rated Chefs
                      </span>
                    </div>
                  </div>

                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-2xl border-2 border-white/10 flex-shrink-0 group">
                    <img
                      src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
                      alt="Royal Hyderabadi Biryani"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ======================================================== */}
            {/* SLIDE 2: 2nd Image (Gourmet Dining + Circular Platter)   */}
            {/* ======================================================== */}
            {activeSlide === 1 && (
              <motion.div
                key="slide-gourmet-dining"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full px-6 sm:px-10 lg:px-14 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
              >
                {/* 2nd Image Left: Circular Kadai Platter with Naan */}
                <div className="relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-rose-600/20 blur-2xl pointer-events-none" />
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-black/95 border-2 border-white/15 group">
                    <img
                      src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=85"
                      alt="Kadai Butter Chicken Feast with Naan"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                  </div>
                </div>

                {/* 2nd Image Right: Headline & Cuisine Filter Pills */}
                <div className="flex-1 max-w-xl flex flex-col items-start text-left z-10">
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black font-display text-white tracking-tight leading-tight">
                    Gourmet Dining, Delivered.
                  </h1>
                  <p className="mt-2 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                    Experience Exquisite Flavors in the Comfort of Your Home.
                  </p>

                  {/* 2-Row Cuisine Pills matching Image 2 */}
                  <div className="mt-6 space-y-3 w-full">
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
                              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                                isActive
                                  ? 'bg-[#E11D48] text-white font-bold shadow-md shadow-rose-950/60 scale-103 ring-2 ring-rose-500/30'
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
              </motion.div>
            )}

            {/* ======================================================== */}
            {/* SLIDE 3: 3rd Image (GET 30% OFF Card & Next Order Offer) */}
            {/* ======================================================== */}
            {activeSlide === 2 && (
              <motion.div
                key="slide-30-off"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full px-6 sm:px-12 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-8"
              >
                {/* 3rd Image Card: GET 30% OFF */}
                <div className="w-full sm:w-[320px] md:w-[340px] flex-shrink-0 bg-[#14141C]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                  <div className="absolute -top-14 -left-14 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

                  <span className="text-xs font-black uppercase tracking-widest text-gray-300">
                    GET
                  </span>
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mt-1.5 font-display">
                    30% OFF
                  </div>
                  <p className="text-sm text-gray-200 font-semibold mt-3 max-w-[220px] leading-relaxed">
                    On Your Next Order!
                  </p>
                  <div className="mt-3.5 text-xs font-bold text-rose-300">
                    Use Code: <span className="font-black text-white tracking-wider">TASTY30</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOrderNow('TASTY30')}
                    className={`mt-5 w-full py-3 px-8 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                      codeApplied || coupon?.code === 'TASTY30'
                        ? 'bg-emerald-600 text-white shadow-emerald-950/60'
                        : 'bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-rose-950/80 hover:shadow-rose-900 hover:scale-102'
                    }`}
                  >
                    {codeApplied || coupon?.code === 'TASTY30' ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>COUPON APPLIED</span>
                      </>
                    ) : (
                      <span>ORDER NOW</span>
                    )}
                  </button>
                </div>

                {/* Right Side Showcase for Slide 3 */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-6 sm:gap-10">
                  <div className="text-center md:text-left max-w-md">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-bold mb-3">
                      <Tag className="w-3.5 h-3.5 text-rose-400" />
                      <span>Everyday Foodie Savings</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight leading-tight">
                      Savor Handcrafted Starters & Desserts
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                      Treat yourself to sizzling Galouti kebabs, fresh paneer tikkas, and warm saffron Gulab Jamuns with flat 30% savings.
                    </p>
                    <div className="mt-4 flex items-center gap-3 justify-center md:justify-start text-xs font-bold text-rose-300">
                      <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                        🏷️ Min Order ₹299
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                        ⚡ Instant Discount
                      </span>
                    </div>
                  </div>

                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-2xl border-2 border-white/10 flex-shrink-0 group">
                    <img
                      src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
                      alt="Tandoori Tikka Starters"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => setActiveSlide(0)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeSlide === 0
              ? 'w-8 bg-[#E11D48] shadow-md shadow-rose-950/60'
              : 'w-2 bg-gray-700 hover:bg-gray-500'
          }`}
          aria-label="Slide 1 (50% OFF)"
        />
        <button
          type="button"
          onClick={() => setActiveSlide(1)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeSlide === 1
              ? 'w-8 bg-[#E11D48] shadow-md shadow-rose-950/60'
              : 'w-2 bg-gray-700 hover:bg-gray-500'
          }`}
          aria-label="Slide 2 (Gourmet Dining)"
        />
        <button
          type="button"
          onClick={() => setActiveSlide(2)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeSlide === 2
              ? 'w-8 bg-[#E11D48] shadow-md shadow-rose-950/60'
              : 'w-2 bg-gray-700 hover:bg-gray-500'
          }`}
          aria-label="Slide 3 (30% OFF)"
        />
      </div>
    </div>
  );
}
