import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coins, Sparkles, Gift, Tag, Check, ArrowRight, Zap, Crown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import ScratchCardModal from './ScratchCardModal';

const REDEEM_ITEMS = [
  {
    id: 'redeem-25',
    title: 'Flat ₹25 OFF on Any Feast',
    cost: 50,
    code: 'COIN25',
    icon: '🎟️',
    description: 'Instant ₹25 off on orders above ₹149',
  },
  {
    id: 'redeem-60',
    title: 'Flat ₹60 OFF Super Deal',
    cost: 100,
    code: 'COIN60',
    icon: '💰',
    description: 'Save flat ₹60 on orders above ₹299',
  },
  {
    id: 'redeem-dessert',
    title: 'Free Warm Gulab Jamun Voucher',
    cost: 150,
    code: 'SWEETCOIN',
    icon: '🍨',
    description: 'Complimentary dessert with your next order',
  },
  {
    id: 'redeem-delivery',
    title: 'Zero Delivery Fee Pass',
    cost: 200,
    code: 'FREEDEL',
    icon: '🚀',
    description: 'Free express delivery on all orders for 7 days',
  },
];

export default function RewardsHubModal() {
  const {
    isRewardsHubOpen,
    closeRewardsHub,
    walletCoins,
    redeemCoins,
    scratchCards,
    showToast,
    isAuthenticated,
    openLoginModal,
  } = useAuth();
  const { applyCoupon, openCartDrawer } = useCart();

  const [activeScratchCard, setActiveScratchCard] = useState(null);

  if (!isRewardsHubOpen) return null;

  if (!isAuthenticated) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeRewardsHub}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#131319] border border-amber-500/30 rounded-3xl p-8 text-center text-white shadow-2xl z-10"
          >
            <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto mb-5 shadow-lg shadow-amber-950/40">
              <Coins className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black font-display text-white mb-2">
              Sign In for CraveCoins
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Earn CraveCoins on every meal, scratch mystery cards, and redeem free gourmet food rewards by logging into your account.
            </p>
            <button
              type="button"
              onClick={() => {
                closeRewardsHub();
                openLoginModal();
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-rose-950/60 active:scale-95 transition-all cursor-pointer"
            >
              Sign In / Register
            </button>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  const handleRedeem = (item) => {
    if (walletCoins < item.cost) {
      if (showToast) {
        showToast({
          type: 'error',
          title: 'Not Enough CraveCoins',
          message: `You need ${item.cost - walletCoins} more coins to claim this reward.`,
        });
      }
      return;
    }

    const success = redeemCoins(item.cost);
    if (success) {
      applyCoupon(item.code);
      if (showToast) {
        showToast({
          type: 'success',
          title: `🎉 Redeemed: ${item.title}!`,
          message: `Code ${item.code} has been applied to your cart.`,
        });
      }
    }
  };

  const unscratchedCount = scratchCards.filter((c) => !c.isScratched).length;

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeRewardsHub}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-[#14141C] border border-amber-500/30 rounded-3xl shadow-2xl p-5 sm:p-8 z-10 text-white overflow-y-auto max-h-[90vh] my-4 sm:my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-950/50">
                  <Coins className="w-5 h-5 text-amber-200" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black font-display text-white">
                    CraveCoins & Rewards Hub
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    Earn coins on every order & unlock mystery scratch cards
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeRewardsHub}
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Top Coin Balance Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/70 via-black to-rose-950/70 border border-amber-500/40 shadow-xl flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl">
                  🪙
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                    Your Available Balance
                  </span>
                  <div className="text-2xl sm:text-3xl font-black font-display text-white">
                    {walletCoins} <span className="text-sm font-semibold text-amber-400">CraveCoins</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-bold text-gray-400 block">
                  Earn Rate
                </span>
                <span className="text-xs font-black text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  +1 Coin per ₹10 spent
                </span>
              </div>
            </div>

            {/* Unclaimed Scratch Cards Section */}
            {scratchCards.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Your Mystery Scratch Cards</span>
                    {unscratchedCount > 0 && (
                      <span className="bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full ml-1">
                        {unscratchedCount} New
                      </span>
                    )}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scratchCards.map((c) => (
                    <div
                      key={c.id}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${
                        c.isScratched
                          ? 'bg-white/5 border-white/10 opacity-70'
                          : 'bg-gradient-to-r from-amber-950/40 to-rose-950/40 border-amber-500/40 shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{c.icon || '🎁'}</span>
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">
                            {c.title}
                          </div>
                          <div className="text-[10px] text-amber-300 mt-0.5">
                            {c.isScratched ? `Claimed: ${c.prize}` : 'Tap to Scratch & Reveal'}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveScratchCard(c)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                          c.isScratched
                            ? 'bg-white/10 text-gray-400 hover:text-white'
                            : 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-md hover:scale-105 active:scale-95'
                        }`}
                      >
                        {c.isScratched ? 'View' : 'Scratch'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Redeem Coins Shop */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-rose-400" />
                <span>Redeem CraveCoins for Instant Perks</span>
              </h4>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 no-scrollbar">
                {REDEEM_ITEMS.map((item) => {
                  const canAfford = walletCoins >= item.cost;
                  return (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl bg-[#1A1A24] border border-white/10 flex items-center justify-between gap-3 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="text-xs font-black text-white">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {item.description}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRedeem(item)}
                        disabled={!canAfford}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                          canAfford
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500 hover:text-black active:scale-95'
                            : 'bg-white/5 text-gray-500 border border-white/10'
                        }`}
                      >
                        <Coins className="w-3 h-3" />
                        <span>{item.cost} Coins</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Embedded Scratch Card Modal if active */}
      {activeScratchCard && (
        <ScratchCardModal
          card={activeScratchCard}
          isOpen={Boolean(activeScratchCard)}
          onClose={() => setActiveScratchCard(null)}
        />
      )}
    </>
  );
}
