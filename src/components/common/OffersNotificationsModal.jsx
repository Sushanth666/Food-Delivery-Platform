import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, Bell, Percent, Sparkles, Check, ArrowRight, Zap, Copy } from 'lucide-react';
import { COUPONS } from '../../data/coupons';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export default function OffersNotificationsModal({ isOpen, onClose }) {
  const { applyCoupon, openCartDrawer, appliedCoupon } = useCart();
  const { showToast } = useAuth();
  const [activeTab, setActiveTab] = useState('offers'); // 'offers' | 'alerts'
  const [copiedCode, setCopiedCode] = useState(null);

  if (!isOpen) return null;

  const handleApplyCoupon = (code) => {
    const res = applyCoupon(code);
    if (res?.success) {
      if (showToast) {
        showToast({
          type: 'success',
          title: `🎟️ Coupon ${code} Applied!`,
          message: res.message || 'Discount has been applied to your bill.',
        });
      }
      onClose();
      openCartDrawer();
    } else {
      if (showToast) {
        showToast({
          type: 'error',
          title: 'Coupon Notice',
          message: res?.message || 'Could not apply coupon.',
        });
      }
    }
  };

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const NOTIFICATIONS = [
    {
      id: 'notif-1',
      title: '⚡ 15-Minute Rush Guarantee Active',
      time: 'Just now',
      message: 'Order from select express restaurants and get your feast in 15 mins or win ₹50 CraveCoins cashback!',
      type: 'rush',
    },
    {
      id: 'notif-2',
      title: '🎉 Welcome Special Offer: FLAT 50% OFF',
      time: '2 hours ago',
      message: 'Use coupon code CRAVE50 to get up to ₹150 instant discount on your favorite biryanis, pizzas and curries.',
      type: 'promo',
    },
    {
      id: 'notif-3',
      title: '🪙 Scratch Card Reward Waiting',
      time: 'Today',
      message: 'Place any order today to unlock a mystery golden scratch card with instant coins & secret desserts.',
      type: 'reward',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#14141C] border border-white/15 rounded-3xl shadow-2xl p-5 sm:p-7 z-10 text-white overflow-y-auto max-h-[90vh] my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-950/50">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-display text-white">
                  Offers & Notifications
                </h3>
                <p className="text-[11px] text-gray-400">
                  Exclusive promo codes & live foodie updates
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Segment Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#181824] rounded-2xl border border-white/10 mb-4">
            <button
              type="button"
              onClick={() => setActiveTab('offers')}
              className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'offers'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-950/60'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Promos & Coupons ({COUPONS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('alerts')}
              className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'alerts'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-950/60'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Live Alerts ({NOTIFICATIONS.length})</span>
            </button>
          </div>

          {/* Tab 1: Offers & Coupons List */}
          {activeTab === 'offers' && (
            <div className="space-y-3">
              {COUPONS.map((cp) => {
                const isApplied = appliedCoupon?.code === cp.code;
                const isCopied = copiedCode === cp.code;

                return (
                  <div
                    key={cp.code}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isApplied
                        ? 'bg-emerald-950/40 border-emerald-500/50 shadow-md'
                        : 'bg-[#181822] hover:bg-[#1E1E2B] border-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-black uppercase tracking-wider text-rose-300 bg-rose-950/60 border border-rose-500/40 px-2 py-0.5 rounded-md">
                            {cp.code}
                          </span>
                          {cp.tag && (
                            <span className="text-[10px] font-black uppercase text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded">
                              {cp.tag}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white mt-1.5">
                          {cp.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                          {cp.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        {isApplied ? (
                          <span className="px-2.5 py-1 rounded-xl bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>Applied</span>
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleApplyCoupon(cp.code)}
                            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                          >
                            Apply
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => handleCopy(cp.code)}
                          className="text-[10px] text-gray-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Copy className="w-2.5 h-2.5" />
                          <span>{isCopied ? 'Copied!' : 'Copy Code'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: Live Alerts */}
          {activeTab === 'alerts' && (
            <div className="space-y-3">
              {NOTIFICATIONS.map((n) => (
                <div
                  key={n.id}
                  className="p-3.5 rounded-2xl bg-[#181822] border border-white/10 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      {n.title}
                    </span>
                    <span className="text-[10px] text-gray-400">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    {n.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
