import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Percent } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function HeroBanner() {
  const { applyCoupon, openCartDrawer } = useCart();

  const handleClaimOffer = (code) => {
    applyCoupon(code);
    openCartDrawer();
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-amber-500 text-white shadow-xl shadow-brand-500/20 mb-8 p-6 sm:p-10 lg:p-12">
      {/* Background Decorative Circles */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute right-1/3 -bottom-20 w-60 h-60 rounded-full bg-amber-400/20 blur-xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/25">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Curated Fine Dining & Fast Bites</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
          Craving Something Delicious Today?
        </h1>

        <p className="mt-3 text-sm sm:text-base text-white/90 font-medium max-w-lg leading-relaxed">
          Discover top-rated culinary gems across India. From royal Hyderabadi dum biryanis and crispy butter masala dosas to sizzling Mumbai pav bhaji, delivered hot in 30 minutes.
        </p>

        {/* Promo Coupons Cards in Hero */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 flex items-center justify-between group hover:bg-white/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-black text-amber-300">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-amber-200">
                  CODE: INDIA50
                </div>
                <div className="text-sm font-extrabold text-white">
                  50% OFF Up to ₹100
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleClaimOffer('INDIA50')}
              className="px-3 py-1.5 bg-white text-brand-600 rounded-xl text-xs font-bold hover:bg-amber-100 transition-colors shadow-sm"
            >
              Apply
            </button>
          </div>

          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 flex items-center justify-between group hover:bg-white/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-black text-emerald-300">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-emerald-200">
                  CODE: FREEDEL
                </div>
                <div className="text-sm font-extrabold text-white">
                  Free Zero Delivery Fee
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleClaimOffer('FREEDEL')}
              className="px-3 py-1.5 bg-white text-brand-600 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors shadow-sm"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
