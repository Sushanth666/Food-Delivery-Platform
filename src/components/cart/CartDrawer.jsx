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
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import DietaryBadge from '../common/DietaryBadge';
import { COUPONS } from '../../data/coupons';

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
  } = useCart();

  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);

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

                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Delivery Fee</span>
                      <span>
                        {bill.deliveryFee === 0 ? (
                          <span className="text-emerald-400 font-bold">FREE</span>
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
                      <span>GST & Taxes (8%)</span>
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
    </AnimatePresence>
  );
}
