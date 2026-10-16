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
  TrendingUp,
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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-amber-500 text-white shadow-2xl shadow-brand-500/25 mb-10 p-6 sm:p-10 lg:p-12 border border-brand-400/30">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 -bottom-24 w-80 h-80 rounded-full bg-brand-400/20 blur-2xl pointer-events-none" />
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Heading, Subtitle & Interactive Offers */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Live Pulsing Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>India's Premier Food Delivery • 30-Min Express</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.08] text-white">
            Feast Like Royalty.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-orange-100 drop-shadow-sm">
              Delivered Fast.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/90 font-medium max-w-xl leading-relaxed">
            Savor authentic royal dum biryanis, crispy ghee podi dosas, creamy butter chicken, and sizzling Mumbai street chaat from India's top certified kitchens.
          </p>

          {/* Promo Coupons Cards in Hero */}
          <div className="mt-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            {/* Coupon 1: INDIA50 */}
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-3.5 flex items-center justify-between group hover:bg-white/25 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-300 flex items-center justify-center font-black text-brand-900 shadow-xs">
                  <Percent className="w-5 h-5 text-brand-950" />
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-amber-200">
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
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-brand-600 hover:bg-amber-50 active:scale-95'
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
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-3.5 flex items-center justify-between group hover:bg-white/25 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-300 flex items-center justify-center font-black text-emerald-950 shadow-xs">
                  <Zap className="w-5 h-5 text-emerald-950" />
                </div>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-emerald-200">
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
                    : 'bg-white text-brand-600 hover:bg-emerald-50 active:scale-95'
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
          <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-white/15 text-xs font-semibold text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>30 Min Express Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>4.8★ Avg Kitchen Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>100% Contactless & Safe</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase Dish Card */}
        <div className="hidden lg:flex lg:col-span-5 justify-center relative">
          <div className="relative w-full max-w-sm group">
            {/* Ambient Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-brand-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />

            {/* Showcase Main Card */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl p-4 text-gray-900 shadow-2xl overflow-hidden">
              {/* Dish Visual Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80"
                  alt="Hyderabadi Dum Biryani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

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
                  <span className="text-[11px] font-extrabold text-brand-600 uppercase tracking-wider">
                    Royal Mughlai Special
                  </span>
                  <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-500" />
                    25-30 min
                  </span>
                </div>

                <h3 className="text-base font-black text-gray-900 mt-1">
                  Hyderabadi Dum Biryani
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                  Aromatic basmati rice, saffron, caramelised onions & tender spiced cuts.
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-black text-gray-900">
                    ₹349 <span className="text-xs font-medium text-gray-400 line-through">₹420</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('biryani')}
                    className="flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Biryanis</span>
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
