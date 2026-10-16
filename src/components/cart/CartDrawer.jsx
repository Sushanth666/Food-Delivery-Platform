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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-base">
                      Your Cart
                    </h3>
                    {currentRestaurant && (
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">
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
                      className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={closeCartDrawer}
                    className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cart Content */}
              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 mb-4 animate-bounce-subtle">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Your cart is feeling empty
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs">
                    Explore delicious food from our top rated restaurants and treat your cravings.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      closeCartDrawer();
                      navigate('/');
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all"
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
                        className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3 relative group"
                      >
                        <div className="pt-0.5">
                          <DietaryBadge isVeg={item.isVeg} size="sm" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <div className="text-xs font-semibold text-brand-600 mt-0.5">
                            {formatCurrency(item.price)}
                          </div>

                          {/* Customizations summary */}
                          {item.customization && (
                            <div className="mt-1 text-[11px] text-gray-500 space-y-0.5">
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
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-2 py-1 shadow-sm">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.cartKey, item.quantity - 1)
                                }
                                className="text-gray-500 hover:text-brand-600 transition-colors"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold w-4 text-center text-gray-900">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.cartKey, item.quantity + 1)
                                }
                                className="text-gray-500 hover:text-brand-600 transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.cartKey)}
                              className="text-xs text-gray-400 hover:text-rose-600 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Coupon System */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-brand-600" />
                      <span>Offers & Coupons</span>
                    </div>

                    {appliedCoupon ? (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-emerald-900 uppercase">
                              {appliedCoupon.code} Applied
                            </div>
                            <div className="text-[11px] text-emerald-700">
                              {appliedCoupon.title}
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeCoupon}
                          className="text-xs font-bold text-rose-600 hover:underline"
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
                            className="flex-1 px-3 py-2 text-xs font-bold uppercase rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500 uppercase tracking-wider"
                          />
                          <button
                            type="button"
                            onClick={() => handleApplyCoupon(couponInput)}
                            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition-colors"
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
                              className="px-2.5 py-1 bg-brand-50 hover:bg-brand-100 border border-brand-200/60 rounded-lg text-[11px] font-bold text-brand-700 transition-colors flex items-center gap-1"
                            >
                              <Percent className="w-3 h-3 text-brand-500" />
                              <span>{cp.code}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {couponFeedback && (
                      <div
                        className={`mt-2 text-xs font-semibold ${
                          couponFeedback.success ? 'text-emerald-600' : 'text-rose-600'
                        }`}
                      >
                        {couponFeedback.message}
                      </div>
                    )}
                  </div>

                  {/* Bill Breakdown */}
                  <div className="pt-2 border-t border-gray-100 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Bill Summary
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Item Subtotal</span>
                      <span>{formatCurrency(bill.subtotal)}</span>
                    </div>

                    {bill.discount > 0 && (
                      <div className="flex justify-between text-xs text-emerald-600 font-semibold">
                        <span>Coupon Discount</span>
                        <span>-{formatCurrency(bill.discount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Delivery Fee</span>
                      <span>
                        {bill.deliveryFee === 0 ? (
                          <span className="text-emerald-600 font-bold">FREE</span>
                        ) : (
                          formatCurrency(bill.deliveryFee)
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Platform Fee</span>
                      <span>{formatCurrency(bill.platformFee)}</span>
                    </div>

                    <div className="flex justify-between text-xs text-gray-600">
                      <span>GST & Taxes (8%)</span>
                      <span>{formatCurrency(bill.taxes)}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-200 flex justify-between text-sm font-extrabold text-gray-900">
                      <span>To Pay</span>
                      <span className="text-brand-600 text-base">
                        {formatCurrency(bill.total)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Fixed Checkout Button */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-gray-100 bg-white sticky bottom-0 z-10 shadow-lg">
                  <button
                    id="drawer-checkout-button"
                    type="button"
                    onClick={handleProceedToCheckout}
                    className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-xl shadow-brand-500/25 flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-xs uppercase tracking-wider text-brand-100">
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
