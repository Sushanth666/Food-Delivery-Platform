import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  Trash2,
  Tag,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Check,
  Percent,
  Crown,
  Coins,
  Users,
  Gift,
  Leaf,
  Bike,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { formatCurrency } from '../../utils/formatCurrency';
import DietaryBadge from '../common/DietaryBadge';
import { COUPONS } from '../../data/coupons';
import GroupOrderModal from './GroupOrderModal';
import GiftOrderModal from './GiftOrderModal';

export default function CartDrawer() {
  const {
    isCartDrawerOpen,
    closeCartDrawer,
    cartItems,
    currentRestaurant,
    bill,
    updateQuantity,
    removeFromCart,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    isCoinsApplied,
    toggleCoinsUsage,
    isGiftOrder,
    setIsGiftOrder,
    giftDetails,
    setGiftDetails,
    isNoCutlery,
    toggleNoCutlery,
    isEvFleet,
    toggleEvFleet,
  } = useCart();

  const { isGoldMember, walletCoins, openGoldModal } = useAuth();
  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);
  const [isGroupOrderOpen, setIsGroupOrderOpen] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  const handleApplyCoupon = (codeToApply) => {
    const code = codeToApply || couponInput;
    if (!code) return;
    const res = applyCoupon(code);
    setCouponFeedback(res);
    if (res.success) {
      setCouponInput('');
    }
    setTimeout(() => {
      setCouponFeedback(null);
    }, 4000);
  };

  const handleProceedToCheckout = () => {
    closeCartDrawer();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCartDrawer}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-[#131319] text-white shadow-2xl shadow-rose-950/70 border-l border-white/10 flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#131319] sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-950/50">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">
                      Your Cart
                    </h3>
                    {currentRestaurant && (
                      <p className="text-xs text-rose-300 truncate max-w-[200px]">
                        From {currentRestaurant.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {cartItems.length > 0 && (
                    <button
                      type="button"
                      onClick={clearCart}
                      title="Clear Cart"
                      className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-950/50 rounded-xl transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={closeCartDrawer}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cart Content */}
              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-rose-950/60 to-purple-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400 mb-4">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Your cart is feeling empty
                  </h4>
                  <p className="text-sm text-gray-400 mt-1 max-w-xs">
                    Explore delicious food from our top rated restaurants and treat your cravings.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      closeCartDrawer();
                      navigate('/');
                    }}
                    className="mt-6 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-950/60 transition-all cursor-pointer"
                  >
                    Browse Restaurants
                  </button>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {/* Group Order Collaboration Bar */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#191522] to-rose-950/40 border border-purple-500/30 flex items-center justify-between gap-3 shadow-md">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-white">Ordering with friends?</p>
                        <p className="text-[10px] text-gray-300">Share cart link & split bill automatically</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsGroupOrderOpen(true)}
                      className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                    >
                      Group Order
                    </button>
                  </div>

                  {/* CraveWave Gold VIP Status Card */}
                  <div
                    onClick={openGoldModal}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                      isGoldMember
                        ? 'bg-gradient-to-r from-amber-950/60 via-yellow-950/30 to-black/60 border-amber-500/40 shadow-sm'
                        : 'bg-[#181620] hover:bg-[#1E1C28] border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                        <Crown className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-black text-white">
                            {isGoldMember ? 'CraveWave Gold Active' : 'Join CraveWave Gold VIP'}
                          </p>
                          <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                            {isGoldMember ? 'FREE Delivery' : 'Save ₹35'}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {isGoldMember
                            ? 'Unlimited FREE express delivery & 10% extra off applied'
                            : 'Unlimited free delivery & 10% off every order. Tap to activate.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Items Ordered ({bill.itemCount})
                    </div>
                    {cartItems.map((item) => (
                      <div
                        key={item.cartKey}
                        className="p-3.5 rounded-2xl bg-[#1A1A22] border border-white/10 flex items-start gap-3 relative group"
                      >
                        <div className="pt-0.5">
                          <DietaryBadge isVeg={item.isVeg} size="sm" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-white truncate">
                            {item.name}
                          </h4>
                          <div className="text-xs font-semibold text-rose-300 mt-0.5">
                            {formatCurrency(item.price)}
                          </div>

                          {/* Customizations summary */}
                          {item.customization && (
                            <div className="mt-1 text-[11px] text-gray-400 space-y-0.5">
                              {item.customization.size && (
                                <div>Size: {item.customization.size}</div>
                              )}
                              {item.customization.addOns?.length > 0 && (
                                <div>
                                  Add-ons: {item.customization.addOns.join(', ')}
                                </div>
                              )}
                              {item.customization.spiceLevel && (
                                <div>Spice: {item.customization.spiceLevel}</div>
                              )}
                            </div>
                          )}

                          {/* Quantity Counter */}
                          <div className="mt-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-[#22222D] rounded-lg border border-white/10 px-2 py-1 shadow-sm">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.cartKey, item.quantity - 1)
                                }
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold w-4 text-center text-white">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.cartKey, item.quantity + 1)
                                }
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.cartKey)}
                              className="text-xs text-gray-400 hover:text-rose-400 transition-colors cursor-pointer"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-white/5"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Coupon System */}
                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-rose-400" />
                      <span>Offers & Coupons</span>
                    </div>

                    {appliedCoupon ? (
                      <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-emerald-300 uppercase">
                              {appliedCoupon.code} Applied
                            </div>
                            <div className="text-[11px] text-emerald-400">
                              {appliedCoupon.title}
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeCoupon}
                          className="text-xs font-bold text-rose-400 hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Enter Promo Code"
                            value={couponInput}
                            onChange={(e) =>
                              setCouponInput(e.target.value.toUpperCase())
                            }
                            className="flex-1 px-3 py-2 text-xs font-bold uppercase rounded-xl border border-white/10 bg-[#1A1A22] text-white focus:outline-none focus:border-rose-500 tracking-wider placeholder:text-gray-500"
                          />
                          <button
                            type="button"
                            onClick={() => handleApplyCoupon(couponInput)}
                            className="px-4 py-2 bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                          >
                            Apply
                          </button>
                        </div>

                        {/* Quick Available Coupon Chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {COUPONS.slice(0, 3).map((cp) => (
                            <button
                              key={cp.code}
                              type="button"
                              onClick={() => handleApplyCoupon(cp.code)}
                              className="px-2.5 py-1 bg-rose-950/50 hover:bg-rose-900/60 border border-rose-800/40 rounded-lg text-[11px] font-bold text-rose-300 transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <Percent className="w-3 h-3 text-rose-400" />
                              <span>{cp.code}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {couponFeedback && (
                      <div
                        className={`mt-2 text-xs font-semibold ${
                          couponFeedback.success ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {couponFeedback.message}
                      </div>
                    )}
                  </div>

                  {/* CraveWave Loyalty Coins Redemption Card */}
                  {walletCoins > 0 && (
                    <div
                      onClick={toggleCoinsUsage}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                        isCoinsApplied
                          ? 'bg-amber-950/40 border-amber-500/50 shadow-md'
                          : 'bg-[#181622] hover:bg-[#1E1C2B] border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isCoinsApplied
                              ? 'bg-amber-500 border-amber-400 text-black'
                              : 'border-gray-500 bg-white/5'
                          }`}
                        >
                          {isCoinsApplied && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-black text-white flex items-center gap-1">
                              <Coins className="w-3.5 h-3.5 text-amber-400" />
                              Redeem CraveWave Coins
                            </span>
                            <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-1.5 py-0.2 rounded">
                              {walletCoins} available
                            </span>
                          </div>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            Apply coins to save up to ₹100 instant cash discount
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-amber-400">
                        {isCoinsApplied ? `-₹${bill.coinsDiscount}` : 'Redeem'}
                      </span>
                    </div>
                  )}

                  {/* 🎁 Feature 1: Send as a Gift Card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-950/40 via-[#1A1624] to-rose-950/40 border border-pink-500/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                          <Gift className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-white block">
                            {isGiftOrder ? '🎁 Surprise Gift Configured' : 'Send as a Surprise Gift?'}
                          </span>
                          <span className="text-[10px] text-gray-400 block">
                            {isGiftOrder
                              ? `For ${giftDetails.recipientName || 'a Friend'} • ${giftDetails.hidePrice ? 'Prices Hidden' : 'Bill Included'}`
                              : 'Add personalized digital card & hide prices'}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsGiftModalOpen(true)}
                        className="px-3 py-1.5 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer"
                      >
                        {isGiftOrder ? 'Edit Card' : '+ Add Gift'}
                      </button>
                    </div>
                  </div>

                  {/* 🌱 Feature 6: Eco-Green Zero-Waste Delivery Preferences */}
                  <div className="p-3.5 rounded-2xl bg-[#121B16] border border-emerald-500/30 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                        Eco-Green Delivery Mode
                      </span>
                    </div>

                    <label className="flex items-center justify-between cursor-pointer text-xs">
                      <div className="pr-2">
                        <span className="text-white font-bold block text-[11px]">
                          No Plastic Cutlery / Napkins
                        </span>
                        <span className="text-[10px] text-gray-400 block">
                          Help eliminate single-use plastic waste
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={isNoCutlery}
                        onChange={toggleNoCutlery}
                        className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                      />
                    </label>

                    <label className="flex items-center justify-between cursor-pointer text-xs pt-2 border-t border-white/5">
                      <div className="pr-2">
                        <span className="text-white font-bold block text-[11px] flex items-center gap-1">
                          <Bike className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Electric Vehicle (EV) Delivery</span>
                        </span>
                        <span className="text-[10px] text-gray-400 block">
                          Zero-emission priority dispatch
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={isEvFleet}
                        onChange={toggleEvFleet}
                        className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                      />
                    </label>
                  </div>

                  {/* Bill Breakdown */}
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Bill Summary
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Item Subtotal</span>
                      <span className="text-gray-200">{formatCurrency(bill.subtotal)}</span>
                    </div>

                    {bill.discount > 0 && (
                      <div className="flex justify-between text-xs text-emerald-400 font-semibold">
                        <span>Coupon Discount</span>
                        <span>-{formatCurrency(bill.discount)}</span>
                      </div>
                    )}

                    {bill.goldDiscount > 0 && (
                      <div className="flex justify-between text-xs text-amber-400 font-semibold">
                        <span className="flex items-center gap-1">
                          <Crown className="w-3 h-3 text-amber-400" />
                          CraveWave Gold 10% VIP Off
                        </span>
                        <span>-{formatCurrency(bill.goldDiscount)}</span>
                      </div>
                    )}

                    {bill.coinsDiscount > 0 && (
                      <div className="flex justify-between text-xs text-amber-300 font-semibold">
                        <span className="flex items-center gap-1">
                          <Coins className="w-3 h-3 text-amber-400" />
                          CraveWave Coins Redeemed
                        </span>
                        <span>-{formatCurrency(bill.coinsDiscount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Delivery Fee</span>
                      <span>
                        {bill.deliveryFee === 0 ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            {isGoldMember && <Crown className="w-3 h-3 text-amber-400" />}
                            FREE {isGoldMember && <span className="line-through text-gray-500 text-[10px]">₹35</span>}
                          </span>
                        ) : (
                          <span className="text-gray-200">{formatCurrency(bill.deliveryFee)}</span>
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Platform Fee</span>
                      <span className="text-gray-200">{formatCurrency(bill.platformFee)}</span>
                    </div>

                    <div className="flex justify-between text-xs text-gray-400">
                      <span>GST & Restaurant Taxes (5%)</span>
                      <span className="text-gray-200">{formatCurrency(bill.taxes)}</span>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-extrabold text-white">
                      <span>To Pay</span>
                      <span className="text-rose-400 text-base font-black">
                        {formatCurrency(bill.total)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Fixed Checkout Button */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-white/10 bg-[#101016] sticky bottom-0 z-10 shadow-2xl">
                  <button
                    id="drawer-checkout-button"
                    type="button"
                    onClick={handleProceedToCheckout}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-rose-950/80 flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-xs uppercase tracking-wider text-rose-200 font-semibold">
                        {bill.itemCount} {bill.itemCount === 1 ? 'item' : 'items'}
                      </span>
                      <span className="text-base font-extrabold">
                        {formatCurrency(bill.total)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-bold">
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {/* Group Order & Bill Splitting Collaborative Modal */}
      <GroupOrderModal
        isOpen={isGroupOrderOpen}
        onClose={() => setIsGroupOrderOpen(false)}
      />

      {/* Gift Order & Digital Greeting Card Modal */}
      <GiftOrderModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
        giftDetails={giftDetails}
        onSave={(data) => {
          setIsGiftOrder(true);
          setGiftDetails(data);
        }}
      />
    </AnimatePresence>
  );
}
