import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Percent,
  Check,
  Star,
  Clock,
  Flame,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFilter } from '../../context/FilterContext';

export default function HeroBanner() {
  const { applyCoupon, openCartDrawer, coupon } = useCart();
  const { setSelectedCategory } = useFilter();
  const [copiedCode, setCopiedCode] = useState(null);

  const handleClaimOffer = (code) => {
    applyCoupon(code);
    setCopiedCode(code);
    openCartDrawer();
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-[#270813] text-white shadow-2xl shadow-rose-950/40 mb-10 p-6 sm:p-10 lg:p-12 border border-rose-900/40">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 -bottom-24 w-80 h-80 rounded-full bg-brand-600/20 blur-2xl pointer-events-none" />
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Heading, Subtitle & Interactive Offers */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Live Pulsing Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 backdrop-blur-md text-rose-200 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-800/50 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>India's Gourmet Dining • 30-Min Express</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.08] text-white">
            Gourmet Dining.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 drop-shadow-sm">
              Delivered Fast.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-300 font-medium max-w-xl leading-relaxed">
            Experience exquisite flavors delivered in the comfort of your home. Savor rich Mughlai biryanis, sizzling tandoori grills, butter chicken, and regional delights from India's finest culinary institutions.
          </p>

          {/* Promo Coupons Cards in Hero */}
          <div className="mt-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            {/* Coupon 1: INDIA50 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 flex items-center justify-between group hover:bg-white/15 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-rose-500 flex items-center justify-center font-black text-white shadow-xs">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-rose-300">
                    CODE: INDIA50
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    50% OFF Up to ₹100
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleClaimOffer('INDIA50')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1 ${
                  coupon?.code === 'INDIA50' || copiedCode === 'INDIA50'
                    ? 'bg-brand-600 text-white'
                    : 'bg-white text-brand-700 hover:bg-rose-50 active:scale-95'
                }`}
              >
                {coupon?.code === 'INDIA50' || copiedCode === 'INDIA50' ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Applied</span>
                  </>
                ) : (
                  <span>Apply</span>
                )}
              </button>
            </div>

            {/* Coupon 2: FREEDEL */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 flex items-center justify-between group hover:bg-white/15 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-black text-white shadow-xs">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-emerald-300">
                    CODE: FREEDEL
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    Zero Delivery Fee
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleClaimOffer('FREEDEL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1 ${
                  coupon?.code === 'FREEDEL' || copiedCode === 'FREEDEL'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-brand-700 hover:bg-emerald-50 active:scale-95'
                }`}
              >
                {coupon?.code === 'FREEDEL' || copiedCode === 'FREEDEL' ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Applied</span>
                  </>
                ) : (
                  <span>Apply</span>
                )}
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-white/10 text-xs font-semibold text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>30 Min Express Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8★ Gourmet Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Contactless & Safe</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase Dish Card */}
        <div className="hidden lg:flex lg:col-span-5 justify-center relative">
          <div className="relative w-full max-w-sm group">
            {/* Ambient Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-rose-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-55 transition-opacity" />

            {/* Showcase Main Card */}
            <div className="relative bg-gray-900/95 backdrop-blur-xl border border-rose-900/40 rounded-3xl p-4 text-white shadow-2xl overflow-hidden">
              {/* Dish Visual Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80"
                  alt="Hyderabadi Dum Biryani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Trending Pill on Image */}
                <div className="absolute top-3 left-3 bg-brand-600/90 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>Trending #1</span>
                </div>

                {/* Floating Rating Pill on Image */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 (2.4k+)</span>
                </div>
              </div>

              {/* Showcase Card Details */}
              <div className="pt-4 px-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-rose-400 uppercase tracking-wider">
                    Chef's Special
                  </span>
                  <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-rose-400" />
                    25-30 min
                  </span>
                </div>

                <h3 className="text-base font-black text-white mt-1">
                  Hyderabadi Dum Biryani
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                  Aromatic basmati rice, royal spices, caramelised onions & succulent cuts.
                </p>

                <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-sm font-black text-white">
                    ₹349 <span className="text-xs font-medium text-gray-500 line-through">₹420</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('biryani')}
                    className="flex items-center gap-1 text-xs font-bold text-rose-400 hover:text-rose-300 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
