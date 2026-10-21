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
  Crown,
  Coins,
  Users,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatCurrency } from '../utils/formatCurrency';
import DietaryBadge from '../components/common/DietaryBadge';
import { COUPONS } from '../data/coupons';
import GroupOrderModal from '../components/cart/GroupOrderModal';

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
    isCoinsApplied,
    toggleCoinsUsage,
  } = useCart();

  const { isGoldMember, walletCoins, openGoldModal } = useAuth();
  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);
  const [isGroupOrderOpen, setIsGroupOrderOpen] = useState(false);

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
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 bg-[#0B0B0E] bg-dark-luxury text-white">
        <div className="max-w-md w-full bg-[#131319]/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl shadow-rose-950/40 text-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-rose-950/60 to-purple-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400 mx-auto mb-6">
            <ShoppingBag className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-black font-display text-white">
            Your Cart is Empty
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-sm mx-auto font-medium">
            You haven't added anything to your cart yet. Explore our delicious restaurants and treat yourself!
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-950/60 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Restaurants</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Page Title & Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-1">
              <Link to="/" className="hover:text-rose-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white font-bold">Cart</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
              Review Your Order
            </h1>
            {currentRestaurant && (
              <p className="text-xs text-gray-400 mt-1">
                Ordering from{' '}
                <span className="font-bold text-rose-300">
                  {currentRestaurant.name}
                </span>
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-bold text-rose-400 hover:bg-rose-950/50 px-3.5 py-2 rounded-xl border border-rose-800/40 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Left Column: Items */}
          <div className="lg:col-span-7 space-y-4">
            {/* Group Order Collaboration Bar */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-purple-950/70 via-[#191522] to-rose-950/40 border border-purple-500/30 flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Ordering with friends or family?</p>
                  <p className="text-xs text-gray-300">Create a collaborative room code & split the bill itemized or evenly</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsGroupOrderOpen(true)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
              >
                Group Order
              </button>
            </div>

            {/* CraveWave Gold VIP Status Card */}
            <div
              onClick={openGoldModal}
              className={`p-4 rounded-3xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                isGoldMember
                  ? 'bg-gradient-to-r from-amber-950/60 via-yellow-950/30 to-black/60 border-amber-500/40 shadow-sm'
                  : 'bg-[#181620] hover:bg-[#1E1C28] border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-black text-white">
                      {isGoldMember ? 'CraveWave Gold VIP Applied' : 'Join CraveWave Gold VIP'}
                    </p>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                      {isGoldMember ? 'FREE Delivery' : 'Save ₹35'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {isGoldMember
                      ? 'Unlimited free express delivery & extra 10% instant VIP off applied to this order'
                      : 'Never pay delivery fees again! Enjoy unlimited free delivery & 10% off. Tap to join.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 pt-2">
              Selected Items ({bill.itemCount})
            </div>

            {cartItems.map((item) => (
              <div
                key={item.cartKey}
                className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-xl flex items-start gap-4"
              >
                <div className="pt-1">
                  <DietaryBadge isVeg={item.isVeg} size="md" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold text-white text-base">
                      {item.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.cartKey)}
                      className="text-gray-400 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-sm font-bold text-rose-300 mt-0.5">
                    {formatCurrency(item.price)}
                  </div>

                  {item.customization && (
                    <div className="mt-2 text-xs text-gray-400 bg-[#1C1C26] p-2.5 rounded-xl border border-white/5 space-y-1">
                      {item.customization.size && (
                        <div>
                          <span className="font-semibold text-gray-300">Portion:</span>{' '}
                          {item.customization.size}
                        </div>
                      )}
                      {item.customization.addOns?.length > 0 && (
                        <div>
                          <span className="font-semibold text-gray-300">Add-ons:</span>{' '}
                          {item.customization.addOns.join(', ')}
                        </div>
                      )}
                      {item.customization.spiceLevel && (
                        <div>
                          <span className="font-semibold text-gray-300">Spice:</span>{' '}
                          {item.customization.spiceLevel}
                        </div>
                      )}
                      {item.customization.specialInstructions && (
                        <div>
                          <span className="font-semibold text-gray-300">Note:</span> "
                          {item.customization.specialInstructions}"
                        </div>
                      )}
                    </div>
                  )}

                  {/* Counter */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-[#1C1C26] rounded-xl border border-white/10 px-2.5 py-1.5 shadow-sm">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                        className="text-gray-400 hover:text-white p-0.5 cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-extrabold w-5 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="text-gray-400 hover:text-white p-0.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-extrabold text-sm text-white">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                </div>

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover flex-shrink-0 border border-white/5"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Coupons & Summary */}
          <div className="lg:col-span-5 space-y-6">
            {/* Coupon Card */}
            <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                <Tag className="w-4 h-4 text-rose-400" />
                <span>Coupons & Special Discounts</span>
              </div>

              {appliedCoupon ? (
                <div className="p-3.5 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                        {appliedCoupon.code}
                      </div>
                      <div className="text-xs text-emerald-400">
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
                      placeholder="Enter Coupon (e.g. WELCOME100)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      className="flex-1 px-3.5 py-2.5 text-xs font-bold uppercase rounded-xl border border-white/10 bg-[#1A1A22] text-white focus:outline-none focus:border-rose-500 tracking-wider placeholder:text-gray-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleApplyCoupon(couponInput)}
                      className="px-5 py-2.5 bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
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
                        className="p-2.5 bg-[#1C1C26] hover:bg-rose-950/50 border border-white/5 hover:border-rose-800/40 rounded-xl text-left transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-black text-rose-300 group-hover:text-rose-200">
                          {cp.code}
                        </div>
                        <div className="text-[10px] text-gray-400 line-clamp-1">
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
                    couponFeedback.success ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {couponFeedback.message}
                </div>
              )}

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
            </div>

            {/* Bill Summary */}
            <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl space-y-3">
              <h3 className="text-base font-extrabold text-white border-b border-white/10 pb-3">
                Bill Details
              </h3>

              <div className="flex justify-between text-xs text-gray-400">
                <span>Item Total</span>
                <span className="font-semibold text-gray-200">{formatCurrency(bill.subtotal)}</span>
              </div>

              {bill.discount > 0 && (
                <div className="flex justify-between text-xs text-emerald-400 font-bold">
                  <span>Coupon Discount ({appliedCoupon?.code})</span>
                  <span>-{formatCurrency(bill.discount)}</span>
                </div>
              )}

              {bill.goldDiscount > 0 && (
                <div className="flex justify-between text-xs text-amber-400 font-bold">
                  <span className="flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 text-amber-400" />
                    CraveWave Gold 10% VIP Off
                  </span>
                  <span>-{formatCurrency(bill.goldDiscount)}</span>
                </div>
              )}

              {bill.coinsDiscount > 0 && (
                <div className="flex justify-between text-xs text-amber-300 font-bold">
                  <span className="flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5 text-amber-400" />
                    Coins Redeemed
                  </span>
                  <span>-{formatCurrency(bill.coinsDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between text-xs text-gray-400">
                <span>Delivery Partner Fee</span>
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
                <span>Taxes & Restaurant Charges (5%)</span>
                <span className="text-gray-200">{formatCurrency(bill.taxes)}</span>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-between text-base font-black text-white">
                <span>Grand Total</span>
                <span className="text-rose-400 text-lg">
                  {formatCurrency(bill.total)}
                </span>
              </div>

              <button
                id="proceed-checkout-page-button"
                type="button"
                onClick={() => navigate('/checkout')}
                className="mt-4 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-rose-950/80 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Group Order Collaborative Modal */}
      <GroupOrderModal
        isOpen={isGroupOrderOpen}
        onClose={() => setIsGroupOrderOpen(false)}
      />
    </div>
  );
}
