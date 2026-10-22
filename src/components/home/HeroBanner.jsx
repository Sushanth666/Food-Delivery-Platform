import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import butterChickenImg from '../../assets/hero_butter_chicken.jpg';
import biryaniImg from '../../assets/hero_biryani.jpg';
import paneerTikkaImg from '../../assets/hero_paneer_tikka.jpg';

export default function HeroBanner() {
  const { applyCoupon, openCartDrawer, coupon } = useCart();
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
            {/* SLIDE 1: (Gourmet Dining + Circular Kadai Platter)       */}
            {/* ======================================================== */}
            {activeSlide === 0 && (
              <motion.div
                key="slide-gourmet-dining"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full px-6 sm:px-8 md:px-10 lg:px-14 py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12"
              >
                {/* Image Left: Circular Kadai Platter with Naan */}
                <div className="relative flex-shrink-0 w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[320px] lg:h-[320px] flex items-center justify-center animate-float-slow">
                  <div className="absolute inset-0 rounded-full bg-rose-600/20 blur-2xl pointer-events-none" />
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-black/95 border-2 border-white/15 group">
                    <img
                      src={butterChickenImg}
                      alt="Kadai Butter Chicken Feast with Naan"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                  </div>
                </div>

                {/* Image Right: Headline & Description */}
                <div className="flex-1 max-w-xl flex flex-col items-start text-left z-10">
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black font-display text-white tracking-tight leading-tight">
                    Gourmet Dining, Delivered.
                  </h1>
                  <p className="mt-3 text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                    Experience Exquisite Flavors in the Comfort of Your Home.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ======================================================== */}
            {/* SLIDE 2: (FLAT 50% OFF Card & Welcome Offer)            */}
            {/* ======================================================== */}
            {activeSlide === 1 && (
              <motion.div
                key="slide-50-off"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full px-6 sm:px-12 lg:px-16 py-8 flex flex-col lg:flex-row items-center justify-between gap-8"
              >
                {/* Card: FLAT 50% OFF */}
                <div className="w-full sm:w-[320px] md:w-[340px] flex-shrink-0 bg-[#14141C]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
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
                    className={`mt-5 w-full py-3 px-8 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer btn-shine ${
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

                {/* Right Side Showcase for Slide 2 */}
                <div className="flex-1 flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-10">
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

                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-2xl border-2 border-white/10 flex-shrink-0 group animate-float-reverse">
                    <img
                      src={biryaniImg}
                      alt="Royal Hyderabadi Biryani"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
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
                className="w-full px-6 sm:px-12 lg:px-16 py-8 flex flex-col lg:flex-row items-center justify-between gap-8"
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
                    className={`mt-5 w-full py-3 px-8 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer btn-shine ${
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
                <div className="flex-1 flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-10">
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

                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-2xl border-2 border-white/10 flex-shrink-0 group animate-float-slow">
                    <img
                      src={paneerTikkaImg}
                      alt="Tandoori Paneer Tikka Starters"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
          aria-label="Slide 1 (Gourmet Dining)"
        />
        <button
          type="button"
          onClick={() => setActiveSlide(1)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeSlide === 1
              ? 'w-8 bg-[#E11D48] shadow-md shadow-rose-950/60'
              : 'w-2 bg-gray-700 hover:bg-gray-500'
          }`}
          aria-label="Slide 2 (50% OFF)"
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
