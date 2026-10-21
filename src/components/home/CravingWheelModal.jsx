import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, RotateCw, Store, Shuffle, Gift, Utensils } from 'lucide-react';
import { useFilter } from '../../context/FilterContext';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

// Master pool of authentic Indian & global dishes across diverse categories with direct dish links
const MASTER_DISH_POOL = [
  {
    id: 'biryani',
    label: 'Hyderabadi Dum Biryani',
    shortLabel: 'BIRYANI',
    icon: '🍚',
    color: '#E11D48',
    type: 'category',
    topRestSlug: 'paradise-meghana-biryani',
    topRestName: 'Paradise & Meghana Royal',
    targetItemId: 'item-101',
    targetDishQuery: 'Special Andhra Chicken Dum Biryani',
  },
  {
    id: 'biryani',
    label: 'Thalappakatti Biryani',
    shortLabel: 'DINDIGUL',
    icon: '🍗',
    color: '#BE123C',
    type: 'category',
    topRestSlug: 'dindigul-thalappakatti-biryani',
    topRestName: 'Dindigul Thalappakatti',
    targetItemId: 'item-384',
    targetDishQuery: 'Thalappakatti Mutton Biryani Special',
  },
  {
    id: 'north-indian',
    label: 'Butter Naan & Dal Makhani',
    shortLabel: 'DAL MAKHAN',
    icon: '🥘',
    color: '#991B1B',
    type: 'category',
    topRestSlug: 'paradise-meghana-biryani',
    topRestName: 'Paradise & Meghana Royal',
    targetItemId: 'item-117',
    targetDishQuery: 'Dal Makhani 24-hr Slow Cooked',
  },
  {
    id: 'north-indian',
    label: 'Shahi Paneer Tikka',
    shortLabel: 'PANEER',
    icon: '🫓',
    color: '#B45309',
    type: 'category',
    topRestSlug: 'paradise-meghana-biryani',
    topRestName: 'Paradise & Meghana Royal',
    targetItemId: 'item-103',
    targetDishQuery: 'Shahi Paneer Tikka Dum Biryani',
  },
  {
    id: 'south-indian',
    label: 'Ghee Roast Masala Dosa',
    shortLabel: 'DOSA',
    icon: '🥞',
    color: '#CA8A04',
    type: 'category',
    topRestSlug: 'murugan-idli-a2b',
    topRestName: 'Murugan Idli Bhavan',
    targetItemId: 'item-128',
    targetDishQuery: 'Special Ghee Masala Dosa',
  },
  {
    id: 'south-indian',
    label: 'Steamed Mallipoo Idli',
    shortLabel: 'IDLI VADA',
    icon: '🥟',
    color: '#65A30D',
    type: 'category',
    topRestSlug: 'murugan-idli-a2b',
    topRestName: 'Murugan Idli Bhavan',
    targetItemId: 'item-122',
    targetDishQuery: 'Famous Soft Mallipoo Idli',
  },
  {
    id: 'chaat',
    label: 'Mumbai Butter Pav Bhaji',
    shortLabel: 'PAV BHAJI',
    icon: '🍛',
    color: '#EA580C',
    type: 'category',
    topRestSlug: 'sardar-pav-bhaji-bademiya',
    topRestName: 'Sardar Pav Bhaji',
    targetItemId: 'item-203',
    targetDishQuery: 'Amul Butter Overload Pav Bhaji',
  },
  {
    id: 'chaat',
    label: 'Crispy Pani Puri',
    shortLabel: 'PANI PURI',
    icon: '🥟',
    color: '#7C3AED',
    type: 'category',
    topRestSlug: 'sardar-pav-bhaji-bademiya',
    topRestName: 'Sardar Pav Bhaji & Bademiya',
    targetItemId: 'item-220',
    targetDishQuery: 'Pani Puri with 2 Waters',
  },
  {
    id: 'rolls',
    label: 'Kolkata Kathi Roll',
    shortLabel: 'KATHI ROLL',
    icon: '🌯',
    color: '#059669',
    type: 'category',
    topRestSlug: 'sardar-pav-bhaji-bademiya',
    topRestName: 'Sardar Pav Bhaji & Bademiya',
    targetItemId: 'item-210',
    targetDishQuery: 'Chicken Tikka Kathi Roll',
  },
  {
    id: 'rolls',
    label: 'Mumbai Vada Pav',
    shortLabel: 'VADA PAV',
    icon: '🍔',
    color: '#16A34A',
    type: 'category',
    topRestSlug: 'chai-point-kulhad-chai',
    topRestName: 'Chai Point Heritage',
    targetItemId: 'item-295',
    targetDishQuery: 'Vada Pav Mumbai Style with Chutneys',
  },
  {
    id: 'chinese',
    label: 'Steamed Chicken Momos',
    shortLabel: 'MOMOS',
    icon: '🥟',
    color: '#0284C7',
    type: 'category',
    topRestSlug: 'chowringhee-arsalan-kolkata',
    topRestName: 'Chowringhee & Arsalan',
    targetItemId: 'item-256',
    targetDishQuery: 'Steamed Chicken Momos',
  },
  {
    id: 'chinese',
    label: 'Spicy Hakka Noodles',
    shortLabel: 'NOODLES',
    icon: '🍜',
    color: '#2563EB',
    type: 'category',
    topRestSlug: 'chowringhee-arsalan-kolkata',
    topRestName: 'Chowringhee & Arsalan',
    targetItemId: 'item-258',
    targetDishQuery: 'Kolkata Hakka Noodles with Egg & Chicken',
  },
  {
    id: 'chaat',
    label: 'Bombay Grilled Sandwich',
    shortLabel: 'SANDWICH',
    icon: '🥪',
    color: '#D97706',
    type: 'category',
    topRestSlug: 'shiv-sagar-pure-veg',
    topRestName: 'Shiv Sagar Pure Veg',
    targetItemId: 'item-507',
    targetDishQuery: 'Bombay Grilled Club Sandwich',
  },
  {
    id: 'desserts',
    label: 'Warm Gulab Jamun & Rabdi',
    shortLabel: 'GULAB JAMUN',
    icon: '🍨',
    color: '#DB2777',
    type: 'category',
    topRestSlug: 'paradise-meghana-biryani',
    topRestName: 'Paradise & Meghana Royal',
    targetItemId: 'item-120',
    targetDishQuery: 'Shahi Gulab Jamun in Kesar Syrup',
  },
  {
    id: 'desserts',
    label: 'Royal Falooda Kulfi',
    shortLabel: 'KULFI',
    icon: '🍧',
    color: '#9333EA',
    type: 'category',
    topRestSlug: 'sardar-pav-bhaji-bademiya',
    topRestName: 'Sardar Pav Bhaji & Bademiya',
    targetItemId: 'item-222',
    targetDishQuery: 'Royal Falooda with Kulfi',
  },
  {
    id: 'beverages',
    label: 'Creamy Mango Lassi',
    shortLabel: 'MANGO LASSI',
    icon: '🥭',
    color: '#F59E0B',
    type: 'category',
    topRestSlug: 'paradise-meghana-biryani',
    topRestName: 'Paradise & Meghana Royal',
    targetItemId: 'item-121',
    targetDishQuery: 'Thick Mango Lassi with Malai',
  },
  {
    id: 'beverages',
    label: 'Kadak Dum Chai Flask',
    shortLabel: 'KULHAD CHAI',
    icon: '☕',
    color: '#78350F',
    type: 'category',
    topRestSlug: 'chai-point-kulhad-chai',
    topRestName: 'Chai Point Heritage',
    targetItemId: 'item-283',
    targetDishQuery: 'Dum Chai Flask',
  },
];

// Rewards & Coupons Pool
const COUPON_REWARDS = [
  {
    id: 'coupon-crave50',
    label: 'FLAT 50% OFF Coupon',
    shortLabel: '50% OFF',
    icon: '🎟️',
    color: '#DC2626',
    type: 'coupon',
    couponCode: 'CRAVE50',
  },
  {
    id: 'coupon-freedel',
    label: 'FREE Delivery Pass',
    shortLabel: 'FREE DEL',
    icon: '🚀',
    color: '#0D9488',
    type: 'coupon',
    couponCode: 'FREEDEL',
  },
  {
    id: 'coupon-feast100',
    label: 'Flat ₹100 OFF Treat',
    shortLabel: '₹100 OFF',
    icon: '💰',
    color: '#4F46E5',
    type: 'coupon',
    couponCode: 'FEAST100',
  },
];

// Helper to assemble 8 randomized items (7 distinct dishes + 1 reward)
function generateShuffledWheelItems() {
  const chosenCoupon = COUPON_REWARDS[Math.floor(Math.random() * COUPON_REWARDS.length)];

  // Shuffle master dishes pool
  const shuffled = [...MASTER_DISH_POOL].sort(() => 0.5 - Math.random());

  // Pick 7 distinct categories if possible to keep maximum culinary variety
  const pickedDishes = [];
  const seenCategories = new Set();

  for (const item of shuffled) {
    if (!seenCategories.has(item.id) && pickedDishes.length < 7) {
      pickedDishes.push(item);
      seenCategories.add(item.id);
    }
  }

  // If less than 7, fill from remaining
  for (const item of shuffled) {
    if (pickedDishes.length < 7 && !pickedDishes.some((d) => d.label === item.label)) {
      pickedDishes.push(item);
    }
  }

  // Combine dishes and coupon, and position coupon randomly
  const combined = [...pickedDishes];
  const couponInsertIndex = Math.floor(Math.random() * 8);
  combined.splice(couponInsertIndex, 0, chosenCoupon);

  return combined;
}

export default function CravingWheelModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { setSelectedCategory, setSearchTerm } = useFilter();
  const { applyCoupon, openCartDrawer } = useCart();
  const { showToast } = useAuth();

  const [wheelItems, setWheelItems] = useState(() => generateShuffledWheelItems());
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  // Shuffle dishes when modal is opened fresh
  useEffect(() => {
    if (isOpen) {
      setWinner(null);
      setWheelItems(generateShuffledWheelItems());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const shuffleDishes = () => {
    if (isSpinning) return;
    setWinner(null);
    setWheelItems(generateShuffledWheelItems());
    if (showToast) {
      showToast({
        type: 'info',
        title: '🎲 Fresh Dishes Loaded!',
        message: 'The wheel has been randomized with 8 new mouth-watering delicacies.',
      });
    }
  };

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWinner(null);

    // Pick random slice from current 8 items
    const randomIndex = Math.floor(Math.random() * wheelItems.length);
    const sliceAngle = 360 / wheelItems.length;

    // Target slice center aligned with 12 o'clock pointer
    const targetSliceRotation = 360 - (randomIndex * sliceAngle + sliceAngle / 2);
    const currentAngle = rotation % 360;

    let angleDiff = targetSliceRotation - currentAngle;
    while (angleDiff <= 0) {
      angleDiff += 360;
    }

    // Minimum 5 full rotations + difference to land on target
    const extraRotations = 360 * (5 + Math.floor(Math.random() * 2));
    const totalNewRotation = rotation + extraRotations + angleDiff;

    setRotation(totalNewRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWinner(wheelItems[randomIndex]);
    }, 4200);
  };

  const handleClaimWinner = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!winner) return;

    if (winner.type === 'coupon') {
      const code = winner.couponCode || 'CRAVE50';
      applyCoupon(code);
      openCartDrawer();
      if (showToast) {
        showToast({
          type: 'success',
          title: `🎟️ ${winner.label} Applied!`,
          message: `Code ${code} has been applied to your cart!`,
        });
      }
      onClose();
    } else {
      // Direct redirect to that specific food inside the restaurant!
      if (winner.topRestSlug) {
        if (showToast) {
          showToast({
            type: 'success',
            title: `${winner.icon} Taking you to ${winner.label}!`,
            message: `Opening ${winner.topRestName} straight to your craving.`,
          });
        }
        onClose();
        navigate(
          `/restaurant/${winner.topRestSlug}?dish=${encodeURIComponent(
            winner.targetDishQuery || winner.label
          )}&itemId=${winner.targetItemId || ''}`
        );
        return;
      }

      // Fallback: category filter on home page
      setSelectedCategory(winner.id);
      setSearchTerm('');
      if (window.location.pathname !== '/') {
        navigate('/');
      }
      setTimeout(() => {
        const el = document.getElementById('restaurants-list-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 900, behavior: 'smooth' });
        }
      }, 150);
      onClose();
    }
  };

  const handleBrowseAllCategoryRestaurants = () => {
    if (!winner) return;
    setSelectedCategory(winner.id);
    setSearchTerm('');
    if (showToast) {
      showToast({
        type: 'info',
        title: `${winner.icon} ${winner.label} Filter Applied!`,
        message: `Showing all authentic restaurants serving ${winner.label}.`,
      });
    }
    onClose();
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const el = document.getElementById('restaurants-list-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 900, behavior: 'smooth' });
      }
    }, 150);
  };

  const sliceAngle = 360 / wheelItems.length;

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
            className="relative w-full max-w-lg bg-[#14141C] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto max-h-[92vh] z-10 flex flex-col text-white text-center p-5 sm:p-8"
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

              {/* Action buttons: Shuffle dishes + Close */}
              <div className="flex items-center gap-2">
                {!isSpinning && (
                  <button
                    type="button"
                    onClick={shuffleDishes}
                    title="Shuffle dishes on wheel"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-xs font-bold transition-all cursor-pointer active:scale-95"
                  >
                    <Shuffle className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Shuffle</span>
                  </button>
                )}

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
            </div>

            {/* Wheel Canvas Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto my-2 flex items-center justify-center select-none">
              {/* Sleek Roulette Pointer Indicator at 12 o'clock */}
              <div className="absolute -top-3.5 z-30 flex flex-col items-center pointer-events-none filter drop-shadow-[0_4px_10px_rgba(245,158,11,0.6)]">
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-amber-400 shadow-md -mt-1" />
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
                  {wheelItems.map((item, index) => {
                    const startAngle = index * sliceAngle;
                    const endAngle = (index + 1) * sliceAngle;

                    const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                    const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                    const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                    const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

                    const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;

                    return (
                      <path
                        key={`${item.id}-${index}`}
                        d={pathData}
                        fill={item.color}
                        stroke="#14141C"
                        strokeWidth="0.8"
                      />
                    );
                  })}
                </svg>

                {/* Slice Icons & Labels Overlay */}
                {wheelItems.map((item, index) => {
                  const angle = index * sliceAngle + sliceAngle / 2;
                  return (
                    <div
                      key={`${item.id}-label-${index}`}
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
                        {item.shortLabel || (item.type === 'coupon' ? 'COUPON' : item.label.split(' ')[0])}
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
                  className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/70 via-black to-rose-950/70 border border-rose-500/40 w-full"
                >
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-300">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>The Craving Wheel Has Decided!</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-display text-white mt-1 flex items-center justify-center gap-2">
                    <span>{winner.icon}</span>
                    <span>{winner.label}</span>
                  </div>

                  {/* Primary Explore / Direct Dish Redirect Button */}
                  <button
                    id="explore-wheel-winner-btn"
                    type="button"
                    onClick={handleClaimWinner}
                    className="mt-3 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 via-rose-600 to-amber-600 hover:from-brand-500 hover:via-rose-500 hover:to-amber-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-950/50 flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer active:scale-95 group"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>
                        {winner.type === 'coupon'
                          ? `Claim ${winner.couponCode || '50% OFF'} Coupon`
                          : `Explore ${winner.label}`}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    {winner.topRestName && (
                      <span className="text-[10px] font-semibold text-rose-100/90 normal-case">
                        Direct to dish at {winner.topRestName}
                      </span>
                    )}
                  </button>

                  {/* Secondary alternative: browse all restaurants for this cuisine on home */}
                  {winner.type !== 'coupon' && (
                    <button
                      type="button"
                      onClick={handleBrowseAllCategoryRestaurants}
                      className="mt-2 w-full py-1 text-[11px] font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span>Or browse all restaurants for {winner.label}</span>
                      <ArrowRight className="w-3 h-3 text-gray-500" />
                    </button>
                  )}

                  {/* Spin Again or Shuffle options */}
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-center gap-4 text-xs font-semibold text-gray-400">
                    <button
                      type="button"
                      onClick={spinWheel}
                      disabled={isSpinning}
                      className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <RotateCw className="w-3 h-3 text-amber-400" />
                      <span>Spin Again</span>
                    </button>
                    <span className="text-white/20">•</span>
                    <button
                      type="button"
                      onClick={shuffleDishes}
                      disabled={isSpinning}
                      className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Shuffle className="w-3 h-3 text-amber-400" />
                      <span>Shuffle Dishes</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-xs text-gray-400 font-medium">
                    {isSpinning
                      ? 'Spinning through delicious flavours... get ready!'
                      : 'Click SPIN in the center to randomly pick your crave!'}
                  </p>
                  {!isSpinning && (
                    <p className="text-[11px] text-amber-400/80">
                      Want different dishes? Click <span className="underline font-bold cursor-pointer" onClick={shuffleDishes}>Shuffle</span> anytime!
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
