import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Clock,
  MapPin,
  Bike,
  ArrowRight,
  ShoppingBag,
  Share2,
  Gift,
  Sparkles,
  Coins,
  Leaf,
  Copy,
  Check,
  EyeOff,
} from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import { formatCurrency } from '../utils/formatCurrency';
import { GIFT_THEMES } from '../components/cart/GiftOrderModal';
import ScratchCardModal from '../components/rewards/ScratchCardModal';
import confetti from 'canvas-confetti';

export default function OrderConfirmationPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { getOrderById } = useOrders();
  const { scratchCards } = useAuth();

  const [activeScratchCard, setActiveScratchCard] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const order = getOrderById(orderId);
  const latestCard = scratchCards?.[0] || null;
  const themeObj = (order?.isGiftOrder && order?.giftDetails)
    ? (GIFT_THEMES?.[order.giftDetails.theme] || GIFT_THEMES?.birthday || {})
    : {};

  useEffect(() => {
    // Fire celebratory particles
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch {
      // ignore
    }
  }, []);

  if (!order) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-[#0B0B0E] bg-dark-luxury text-white">
        <div className="max-w-md w-full bg-[#131319]/90 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-rose-950/40 text-center">
          <h2 className="text-2xl font-black font-display text-white">Order not found</h2>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-950/60 cursor-pointer"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-28 lg:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        {/* Confirmation Header Banner */}
        <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-rose-950/40 text-center mb-8 relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-bounce-subtle">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <span className="text-xs font-black uppercase tracking-widest text-emerald-300 bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/30">
            Order Confirmed
          </span>

          <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight mt-3">
            Delicious Food is on Its Way!
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-md mx-auto">
            We've notified{' '}
            <span className="font-bold text-rose-300">
              {order.restaurantName}
            </span>
            . Your order ID is{' '}
            <span className="font-mono font-bold text-rose-400">
              #{order.id}
            </span>
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              id="track-live-order-btn"
              to={`/track/${order.id}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-rose-950/80 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
            >
              <Bike className="w-4 h-4" />
              <span>Track Live Delivery Status</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/orders"
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl border border-white/10 hover:border-white/20 bg-[#1A1A22] text-gray-300 font-bold text-xs sm:text-sm transition-all text-center cursor-pointer"
            >
              View Order History
            </Link>
          </div>
        </div>

        {/* 🎁 Feature 1: Gift Order Greeting Card Preview */}
        {order.isGiftOrder && order.giftDetails && (
          <div className="mb-6 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-pink-950/60 via-purple-950/40 to-rose-950/60 border border-pink-500/40 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-xl shadow-md">
                  {themeObj.icon || '🎁'}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-pink-300 block">
                    Surprise Gift Order
                  </span>
                  <h3 className="text-base font-black font-display text-white">
                    Digital Greeting Card Sent to {order.giftDetails.recipientName}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 3000);
                }}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-pink-200 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Link Copied!' : 'Share Card'}</span>
              </button>
            </div>

            {/* Greeting Card Preview Paper */}
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${themeObj.gradient} text-white shadow-xl relative overflow-hidden border ${themeObj.borderColor}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider bg-black/40 px-2.5 py-0.5 rounded-full">
                  {themeObj.title}
                </span>
                <span className="text-[10px] font-semibold text-white/90 bg-white/20 px-2 py-0.5 rounded-md">
                  {order.giftDetails.hidePrice ? '🔒 Price Hidden on Receipt' : '📄 Receipt Included'}
                </span>
              </div>

              <div className="my-3 text-sm sm:text-base font-bold italic font-display">
                "{order.giftDetails.message}"
              </div>

              <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-white/90">
                <span>With love & delicious food</span>
                <span className="font-extrabold">{order.restaurantName}</span>
              </div>
            </div>
          </div>
        )}

        {/* 🪙 Feature 3: Mystery Scratch Card Unlocked Banner */}
        {latestCard && !latestCard.isScratched && (
          <div className="mb-6 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-950/70 via-black to-rose-950/70 border-2 border-amber-500/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-3xl shadow-lg shadow-amber-950/60 shrink-0 animate-bounce-subtle">
                🪙
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block">
                  Order Reward Unlocked!
                </span>
                <h3 className="text-base font-black font-display text-white">
                  You Won a Mystery Scratch Card!
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Scratch now to reveal instant CraveCoins & bonus surprise treats
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveScratchCard(latestCard)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-950/50 flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scratch Card Now</span>
            </button>
          </div>
        )}

        {/* 🌱 Feature 6: Eco-Hero Zero Waste Impact Badge */}
        {order.isEcoDelivery && (
          <div className="mb-6 p-4 rounded-2xl bg-[#0F1E16] border border-emerald-500/40 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0">
              🌱
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 block">
                Eco-Hero Order Mode Active
              </span>
              <p className="text-xs text-emerald-100 font-semibold mt-0.5">
                Thank you! You eliminated 4 single-use plastic cutlery items and chose zero-emission delivery!
              </p>
            </div>
          </div>
        )}

        {/* Order Summary Card */}
        <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="font-extrabold text-white text-base">
                Order Details
              </h3>
              <span className="text-xs text-gray-400">
                Placed on {new Date(order.date).toLocaleString()}
              </span>
            </div>

            <span className="text-xs font-bold text-rose-300 bg-rose-950/60 border border-rose-800/40 px-3 py-1.5 rounded-xl">
              {order.paymentMethod}
            </span>
          </div>

          {/* Restaurant Preview */}
          <div className="flex items-center gap-3.5 p-3.5 bg-[#1A1A22] rounded-2xl border border-white/5">
            <img
              src={order.restaurantImage}
              alt={order.restaurantName}
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div>
              <h4 className="font-extrabold text-sm text-white">
                {order.restaurantName}
              </h4>
              <div className="flex items-center gap-2 text-xs text-rose-300 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Est. Delivery: {order.estimatedDeliveryTime || '25-35 mins'}</span>
              </div>
            </div>
          </div>

          {/* Items List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Items Ordered ({order.items.length})
            </h4>
            {order.items.map((it, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start text-xs border-b border-white/5 pb-2"
              >
                <div>
                  <span className="font-bold text-rose-400 mr-2">{it.quantity}x</span>
                  <span className="font-semibold text-gray-200">{it.name}</span>
                  {it.customization && (
                    <p className="text-[11px] text-gray-400 ml-6">
                      {it.customization.size && `${it.customization.size} • `}
                      {it.customization.addOns?.length > 0 &&
                        it.customization.addOns.join(', ')}
                    </p>
                  )}
                </div>
                <span className="font-bold text-white">
                  {formatCurrency(it.price * it.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Bill Breakdown */}
          <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-gray-400">
            <div className="flex justify-between">
              <span>Item Subtotal</span>
              <span className="text-gray-200">{formatCurrency(order.bill.subtotal)}</span>
            </div>
            {order.bill.discount > 0 && (
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Coupon Savings</span>
                <span>-{formatCurrency(order.bill.discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>
                {order.bill.deliveryFee === 0 ? (
                  <span className="text-emerald-400 font-bold">FREE</span>
                ) : (
                  <span className="text-gray-200">{formatCurrency(order.bill.deliveryFee)}</span>
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & Fees</span>
              <span className="text-gray-200">
                {formatCurrency(order.bill.taxes + order.bill.platformFee)}
              </span>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-between text-base font-black text-white">
              <span>Paid Total</span>
              <span className="text-rose-400 text-lg">
                {formatCurrency(order.bill.total)}
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="pt-3 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Delivering To
            </h4>
            <div className="p-3.5 bg-[#1A1A22] rounded-2xl text-xs space-y-0.5 text-gray-300 border border-white/5">
              <div className="font-bold text-white">
                {order.deliveryAddress?.fullName} • {order.deliveryAddress?.phone}
              </div>
              <div className="text-gray-400">
                {order.deliveryAddress?.street}, {order.deliveryAddress?.city}{' '}
                {order.deliveryAddress?.zip}
              </div>
              {order.deliveryInstructions && (
                <div className="text-rose-300 font-medium pt-1">
                  Note: {order.deliveryInstructions}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Scratch Card Modal */}
      {activeScratchCard && (
        <ScratchCardModal
          card={activeScratchCard}
          isOpen={Boolean(activeScratchCard)}
          onClose={() => setActiveScratchCard(null)}
        />
      )}
    </div>
  );
}
