import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  ArrowLeft,
  Trash2,
  Tag,
  Check,
  Percent,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import DietaryBadge from '../components/common/DietaryBadge';
import { COUPONS } from '../data/coupons';

export default function CartPage() {
  const navigate = useNavigate();
  const {
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

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);

  const handleApplyCoupon = (codeToApply) => {
    const code = codeToApply || couponInput;
    if (!code) return;
    const res = applyCoupon(code);
    setCouponFeedback(res);
    if (res.success) setCouponInput('');
    setTimeout(() => setCouponFeedback(null), 4000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 mx-auto mb-6">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-black text-gray-900">
          Your Cart is Empty
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
          You haven't added anything to your cart yet. Explore our delicious restaurants and treat yourself!
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Restaurants</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
      {/* Page Title */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-1">
            <Link to="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Cart</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Review Your Order
          </h1>
          {currentRestaurant && (
            <p className="text-xs text-gray-500 mt-1">
              Ordering from{' '}
              <span className="font-bold text-gray-800">
                {currentRestaurant.name}
              </span>
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="text-xs font-bold text-rose-600 hover:bg-rose-50 px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear All</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Column: Items */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Selected Items ({bill.itemCount})
          </div>

          {cartItems.map((item) => (
            <div
              key={item.cartKey}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-soft flex items-start gap-4"
            >
              <div className="pt-1">
                <DietaryBadge isVeg={item.isVeg} size="md" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-extrabold text-gray-900 text-base">
                    {item.name}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.cartKey)}
                    className="text-gray-400 hover:text-rose-600 p-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-sm font-bold text-brand-600 mt-0.5">
                  {formatCurrency(item.price)}
                </div>

                {item.customization && (
                  <div className="mt-2 text-xs text-gray-500 bg-gray-50 p-2.5 rounded-xl space-y-1">
                    {item.customization.size && (
                      <div>
                        <span className="font-semibold text-gray-700">Portion:</span>{' '}
                        {item.customization.size}
                      </div>
                    )}
                    {item.customization.addOns?.length > 0 && (
                      <div>
                        <span className="font-semibold text-gray-700">Add-ons:</span>{' '}
                        {item.customization.addOns.join(', ')}
                      </div>
                    )}
                    {item.customization.spiceLevel && (
                      <div>
                        <span className="font-semibold text-gray-700">Spice:</span>{' '}
                        {item.customization.spiceLevel}
                      </div>
                    )}
                    {item.customization.specialInstructions && (
                      <div>
                        <span className="font-semibold text-gray-700">Note:</span> "
                        {item.customization.specialInstructions}"
                      </div>
                    )}
                  </div>
                )}

                {/* Counter */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl border border-gray-200 px-2.5 py-1.5 shadow-sm">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                      className="text-gray-500 hover:text-brand-600 p-0.5"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-extrabold w-5 text-center text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                      className="text-gray-500 hover:text-brand-600 p-0.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="font-extrabold text-sm text-gray-900">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              </div>

              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                />
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Coupons & Summary */}
        <div className="lg:col-span-5 space-y-6">
          {/* Coupon Card */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-soft space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700">
              <Tag className="w-4 h-4 text-brand-600" />
              <span>Coupons & Special Discounts</span>
            </div>

            {appliedCoupon ? (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-emerald-900 uppercase tracking-wider">
                      {appliedCoupon.code}
                    </div>
                    <div className="text-xs text-emerald-700">
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
                    placeholder="Enter Coupon (e.g. WELCOME50)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    className="flex-1 px-3.5 py-2.5 text-xs font-bold uppercase rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500 uppercase tracking-wider"
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyCoupon(couponInput)}
                    className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Apply
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {COUPONS.map((cp) => (
                    <button
                      key={cp.code}
                      type="button"
                      onClick={() => handleApplyCoupon(cp.code)}
                      className="p-2.5 bg-brand-50 hover:bg-brand-100 border border-brand-200/60 rounded-xl text-left transition-colors"
                    >
                      <div className="text-xs font-black text-brand-700">
                        {cp.code}
                      </div>
                      <div className="text-[10px] text-gray-500 line-clamp-1">
                        {cp.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {couponFeedback && (
              <div
                className={`text-xs font-semibold ${
                  couponFeedback.success ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {couponFeedback.message}
              </div>
            )}
          </div>

          {/* Bill Summary */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft space-y-3">
            <h3 className="text-base font-extrabold text-gray-900 border-b border-gray-100 pb-3">
              Bill Details
            </h3>

            <div className="flex justify-between text-xs text-gray-600">
              <span>Item Total</span>
              <span className="font-semibold">{formatCurrency(bill.subtotal)}</span>
            </div>

            {bill.discount > 0 && (
              <div className="flex justify-between text-xs text-emerald-600 font-bold">
                <span>Coupon Discount ({appliedCoupon?.code})</span>
                <span>-{formatCurrency(bill.discount)}</span>
              </div>
            )}

            <div className="flex justify-between text-xs text-gray-600">
              <span>Delivery Partner Fee</span>
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
              <span>Taxes & Restaurant Charges (8%)</span>
              <span>{formatCurrency(bill.taxes)}</span>
            </div>

            <div className="pt-3 border-t border-gray-200 flex justify-between text-base font-black text-gray-900">
              <span>Grand Total</span>
              <span className="text-brand-600 text-lg">
                {formatCurrency(bill.total)}
              </span>
            </div>

            <button
              id="proceed-checkout-page-button"
              type="button"
              onClick={() => navigate('/checkout')}
              className="mt-4 w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
