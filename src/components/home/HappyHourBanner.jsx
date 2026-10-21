import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Clock, Sparkles, X, ArrowRight, Zap, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useFilter } from '../../context/FilterContext';

export default function HappyHourBanner() {
  const { applyCoupon, openCartDrawer } = useCart();
  const { showToast } = useAuth();
  const { setOnlyOffers, setSelectedCategory } = useFilter();

  const [isVisible, setIsVisible] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(1485); // 24m 45s initial

  // Ticking countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 1800));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleClaimHappyHour = () => {
    applyCoupon('INDIA50');
    setOnlyOffers(true);
    if (showToast) {
      showToast({
        type: 'success',
        title: '🔥 Happy Hour Deal Claimed!',
        message: '50% OFF promo applied & showing participating restaurants!',
      });
    }
    const el = document.getElementById('restaurants-list-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="w-full mb-6 relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600/25 via-rose-600/30 to-purple-600/25 border border-amber-500/40 p-4 sm:p-5 shadow-xl shadow-amber-950/20 backdrop-blur-md">
      {/* Background Glows */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Event Info */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-amber-950/50 flex-shrink-0 animate-bounce-subtle">
            <Flame className="w-6 h-6 fill-white text-white" />
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-black shadow-xs flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 fill-black" />
                Live Happy Hour
              </span>
              <span className="text-xs font-bold text-amber-300">
                Evening Street Food & Chai Rush
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black font-display text-white mt-0.5 tracking-tight">
              Flat 50% OFF on Bestselling Delicacies & Express Meals
            </h3>
          </div>
        </div>

        {/* Right: Countdown Timer & CTA */}
        <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto justify-between md:justify-end">
          {/* Live Countdown Box */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-black/60 border border-amber-500/30 text-amber-300 font-mono text-xs sm:text-sm font-black shadow-inner">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Ends in</span>
            <span className="text-white text-sm sm:text-base font-extrabold tracking-wider">
              {formatTime(secondsLeft)}
            </span>
          </div>

          {/* Grab Deal Button */}
          <button
            type="button"
            onClick={handleClaimHappyHour}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-brand-600 hover:from-amber-400 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-950/50 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Grab 50% Deal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Dismiss Button */}
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="w-7 h-7 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
