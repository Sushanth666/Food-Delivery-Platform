import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Clock,
  MapPin,
  Bike,
  ArrowRight,
  ShoppingBag,
  Share2,
} from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { formatCurrency } from '../utils/formatCurrency';
import confetti from 'canvas-confetti';

export default function OrderConfirmationPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { getOrderById } = useOrders();

  const order = getOrderById(orderId);

  useEffect(() => {
    // Fire celebratory particles
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch (e) {
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
    <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-20">
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
    </div>
  );
}
