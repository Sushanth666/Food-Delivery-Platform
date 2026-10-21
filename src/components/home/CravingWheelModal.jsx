import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Award, ArrowRight, RotateCw, Utensils, Check, Store } from 'lucide-react';
import { useFilter } from '../../context/FilterContext';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const WHEEL_ITEMS = [
  { id: 'biryani', label: 'Hyderabadi Biryani', icon: '🍚', color: '#E11D48', type: 'category', topRestSlug: 'paradise-meghana-biryani', topRestName: 'Paradise & Meghana Biryani' },
  { id: 'north-indian', label: 'Butter Naan & Paneer', icon: '🥘', color: '#881337', type: 'category', topRestSlug: 'punjabi-dhaba-amritsar', topRestName: 'Pind Punjab Heritage Dhaba' },
  { id: 'pizza', label: 'Woodfired Pizza', icon: '🍕', color: '#D97706', type: 'category', topRestSlug: 'toscano-italian-trattoria', topRestName: 'Toscano Pizzeria' },
  { id: 'rolls', label: 'Kolkata Kathi Roll', icon: '🌯', color: '#059669', type: 'category', topRestSlug: 'paradise-meghana-biryani', topRestName: 'Paradise & Meghana Royal' },
  { id: 'chinese', label: 'Spicy Hakka Noodles', icon: '🍜', color: '#2563EB', type: 'category', topRestSlug: 'mainland-dragon-wok', topRestName: 'Mainland Dragon Wok' },
  { id: 'chaat', label: 'Crispy Pani Puri', icon: '🥟', color: '#7C3AED', type: 'category', topRestSlug: 'chandni-chowk-chaat-bhavan', topRestName: 'Chandni Chowk Chaat' },
  { id: 'desserts', label: 'Gulab Jamun & Kulfi', icon: '🍨', color: '#DB2777', type: 'category', topRestSlug: 'anand-sweets-delights', topRestName: 'Anand Mithai & Desserts' },
  { id: 'coupon', label: 'FLAT 50% Coupon', icon: '🎟️', color: '#DC2626', type: 'coupon' },
];

export default function CravingWheelModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { setSelectedCategory, setSearchTerm } = useFilter();
  const { applyCoupon, openCartDrawer } = useCart();
  const { showToast } = useAuth();

  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  if (!isOpen) return null;

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWinner(null);

    // Random slice (0 to 7)
    const randomIndex = Math.floor(Math.random() * WHEEL_ITEMS.length);
    const sliceAngle = 360 / WHEEL_ITEMS.length;

    // Minimum 5 full rotations + landing angle
    const extraRotations = 360 * (5 + Math.floor(Math.random() * 3));
    // Center of target slice aligned with top pointer (270 deg or 0 deg offset)
    const targetSliceRotation = 360 - (randomIndex * sliceAngle + sliceAngle / 2);
    const totalNewRotation = rotation + extraRotations + (targetSliceRotation - (rotation % 360));

    setRotation(totalNewRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWinner(WHEEL_ITEMS[randomIndex]);
    }, 4200);
  };

  const handleClaimWinner = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!winner) return;

    if (winner.type === 'coupon') {
      applyCoupon('CRAVE50');
      openCartDrawer();
      if (showToast) {
        showToast({
          type: 'success',
          title: '🎟️ FLAT 50% Coupon Applied!',
          message: 'Code CRAVE50 has been applied to your cart!',
        });
      }
    } else {
      setSelectedCategory(winner.id);
      setSearchTerm('');

      if (showToast) {
        showToast({
          type: 'success',
          title: `${winner.icon} ${winner.label} Filter Applied!`,
          message: `Showing 10+ authentic restaurants serving delicious ${winner.label}.`,
        });
      }

      // Navigate to homepage if user opened modal from another page
      if (window.location.pathname !== '/') {
        navigate('/');
      }

      // Smoothly scroll down to the restaurant list section
      setTimeout(() => {
        const el = document.getElementById('restaurants-list-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 900, behavior: 'smooth' });
        }
      }, 150);
    }
    onClose();
  };

  const sliceAngle = 360 / WHEEL_ITEMS.length;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={!isSpinning ? onClose : undefined}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#14141C] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-white text-center p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎰</span>
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-black font-display text-white">
                    Craving Roulette
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    Can't decide? Let fate pick your feast!
                  </p>
                </div>
              </div>

              {!isSpinning && (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Wheel Canvas Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto my-2 flex items-center justify-center select-none">
              {/* Top Pointer Indicator */}
              <div className="absolute -top-3 z-30 flex flex-col items-center">
                <div className="w-6 h-7 bg-amber-400 border-2 border-white rounded-b-lg shadow-xl shadow-amber-500/50 clip-triangle" />
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs -mt-1" />
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-rose-600/20 blur-2xl pointer-events-none" />

              {/* Outer Golden/Neon Rim */}
              <div className="absolute inset-0 rounded-full border-4 border-amber-400/40 shadow-2xl shadow-rose-950/80 pointer-events-none" />

              {/* Spinning SVG Wheel */}
              <div
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning
                    ? 'transform 4.2s cubic-bezier(0.15, 0.9, 0.25, 1)'
                    : 'none',
                }}
                className="w-full h-full rounded-full overflow-hidden relative shadow-inner"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {WHEEL_ITEMS.map((item, index) => {
                    const startAngle = index * sliceAngle;
                    const endAngle = (index + 1) * sliceAngle;

                    const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                    const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                    const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                    const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

                    const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;

                    return (
                      <path
                        key={item.id}
                        d={pathData}
                        fill={item.color}
                        stroke="#14141C"
                        strokeWidth="0.8"
                      />
                    );
                  })}
                </svg>

                {/* Slice Icons & Labels Overlay */}
                {WHEEL_ITEMS.map((item, index) => {
                  const angle = index * sliceAngle + sliceAngle / 2;
                  return (
                    <div
                      key={item.id}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -95px)`,
                      }}
                      className="flex flex-col items-center justify-center text-center pointer-events-none"
                    >
                      <span className="text-base sm:text-lg drop-shadow-md">{item.icon}</span>
                      <span className="text-[8px] sm:text-[9px] font-black uppercase text-white tracking-wider max-w-[50px] leading-tight drop-shadow-md">
                        {item.type === 'coupon' ? '50% OFF' : item.label.split(' ')[0]}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Center Hub Button */}
              <button
                type="button"
                onClick={spinWheel}
                disabled={isSpinning}
                className="absolute z-20 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-brand-600 border-4 border-[#14141C] shadow-2xl shadow-black flex flex-col items-center justify-center text-white font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 disabled:opacity-80 transition-all cursor-pointer"
              >
                <RotateCw className={`w-4 h-4 mb-0.5 ${isSpinning ? 'animate-spin' : ''}`} />
                <span className="text-[10px]">{isSpinning ? '...' : 'SPIN'}</span>
              </button>
            </div>

            {/* Winner Announcement or Instruction */}
            <div className="mt-4 min-h-[90px] flex flex-col items-center justify-center">
              {winner ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/70 via-black to-rose-950/70 border border-rose-500/40 w-full"
                >
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-300">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>The Craving Wheel Has Decided!</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 flex items-center justify-center gap-2">
                    <span>{winner.icon}</span>
                    <span>{winner.label}</span>
                  </div>
                  <button
                    id="explore-wheel-winner-btn"
                    type="button"
                    onClick={handleClaimWinner}
                    className="mt-3 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-950/50 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                  >
                    <span>{winner.type === 'coupon' ? 'Claim 50% OFF Coupon' : `Explore ${winner.label}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {winner.topRestSlug && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        navigate(`/restaurant/${winner.topRestSlug}`);
                      }}
                      className="mt-2 w-full py-1 text-[11px] font-bold text-rose-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Store className="w-3 h-3 text-rose-400" />
                      <span>Or jump straight to {winner.topRestName} →</span>
                    </button>
                  )}
                </motion.div>
              ) : (
                <p className="text-xs text-gray-400 font-medium">
                  {isSpinning
                    ? 'Spinning through delicious flavours... get ready!'
                    : 'Click SPIN in the center to randomly pick your crave!'}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
