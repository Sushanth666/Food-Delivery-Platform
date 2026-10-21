import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Check, Zap, Sparkles, ShieldCheck, Coins, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function GoldClubModal() {
  const {
    isGoldMember,
    walletCoins,
    isGoldModalOpen,
    closeGoldModal,
    toggleGoldMembership,
    showToast,
  } = useAuth();

  const [selectedPlan, setSelectedPlan] = useState('3months');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isGoldModalOpen) return null;

  const handleAction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toggleGoldMembership();
      closeGoldModal();
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeGoldModal}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#14121A] text-white rounded-3xl shadow-2xl shadow-amber-950/40 overflow-hidden z-10 border border-amber-500/30 flex flex-col"
        >
          {/* Top Banner with Crown & Gold Shimmer */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-amber-950/70 via-[#1C1624] to-black border-b border-amber-500/20 text-center overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />

            <button
              type="button"
              onClick={closeGoldModal}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-0.5 mx-auto mb-3 shadow-lg shadow-amber-950/80">
              <div className="w-full h-full rounded-[14px] bg-[#16121D] flex items-center justify-center">
                <Crown className="w-8 h-8 text-amber-400 fill-amber-400/20 animate-pulse" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>CraveWave Elite VIP Membership</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
              CraveWave <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">GOLD</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-sm mx-auto">
              Save an average of ₹1,200 every month on your gourmet orders across India.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#1A1824] border border-amber-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Unlimited Free Delivery</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">On all orders above ₹199. Never pay ₹35 delivery fees again.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#1A1824] border border-amber-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Crown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Extra 10% VIP Off</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Instant 10% off up to ₹100 stackable on all existing coupons.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#1A1824] border border-amber-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">VIP Priority Dispatch</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Express kitchen prep & assigned top-rated 5-star delivery riders.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#1A1824] border border-amber-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">2x Loyalty Coins</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Earn 2x CraveWave coins redeemable as pure cash discount.</p>
                </div>
              </div>
            </div>

            {/* Wallet Status Box */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 to-black/60 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your CraveWave Wallet</p>
                  <p className="text-sm font-black text-white">{walletCoins} Coins <span className="text-xs text-amber-300 font-medium">(₹{walletCoins} value)</span></p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-bold text-gray-300">
                1 Coin = ₹1
              </span>
            </div>

            {/* Plan Selector */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-black uppercase tracking-wider text-gray-300">Choose Membership</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlan('3months')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedPlan === '3months'
                      ? 'border-amber-400 bg-amber-950/40 shadow-md shadow-amber-950/50'
                      : 'border-white/10 bg-[#161420] text-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white">Quarterly VIP</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-300">Popular</span>
                  </div>
                  <p className="text-base font-black text-amber-400 mt-1">₹199 <span className="text-xs text-gray-400 font-normal">/ 3 mos</span></p>
                  <p className="text-[10px] text-gray-400 mt-0.5">₹66/month only</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPlan('1year')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedPlan === '1year'
                      ? 'border-amber-400 bg-amber-950/40 shadow-md shadow-amber-950/50'
                      : 'border-white/10 bg-[#161420] text-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white">Annual VIP</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-300">Best Value</span>
                  </div>
                  <p className="text-base font-black text-amber-400 mt-1">₹599 <span className="text-xs text-gray-400 font-normal">/ 1 yr</span></p>
                  <p className="text-[10px] text-gray-400 mt-0.5">₹49/month only</p>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="p-5 border-t border-amber-500/20 bg-[#100E16] flex items-center gap-3">
            <button
              type="button"
              disabled={isProcessing}
              onClick={handleAction}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-950/60 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
            >
              {isProcessing ? (
                <span>Processing...</span>
              ) : isGoldMember ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>Gold Active • Tap to Toggle/Pause</span>
                </>
              ) : (
                <>
                  <Crown className="w-4 h-4 text-black" />
                  <span>Join CraveWave Gold VIP Now</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
