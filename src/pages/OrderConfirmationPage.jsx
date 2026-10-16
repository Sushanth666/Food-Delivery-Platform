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
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Order not found</h2>
        <Link
          to="/"
          className="mt-4 inline-block px-5 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
      {/* Confirmation Header Banner */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft text-center mb-8 relative overflow-hidden">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4 animate-bounce-subtle">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Order Confirmed
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-3">
          Delicious Food is on Its Way!
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
          We've notified{' '}
          <span className="font-bold text-gray-800">
            {order.restaurantName}
          </span>
          . Your order ID is{' '}
          <span className="font-mono font-bold text-brand-600">
            #{order.id}
          </span>
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            id="track-live-order-btn"
            to={`/track/${order.id}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Bike className="w-4 h-4" />
            <span>Track Live Delivery Status</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/orders"
            className="w-full sm:w-auto px-5 py-3.5 rounded-2xl border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-xs sm:text-sm transition-all text-center"
          >
            View Order History
          </Link>
        </div>
      </div>

      {/* Order Summary Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-soft space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-extrabold text-gray-900 text-base">
              Order Details
            </h3>
            <span className="text-xs text-gray-500">
              Placed on {new Date(order.date).toLocaleString()}
            </span>
          </div>

          <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-xl">
            {order.paymentMethod}
          </span>
        </div>

        {/* Restaurant Preview */}
        <div className="flex items-center gap-3.5 p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
          <img
            src={order.restaurantImage}
            alt={order.restaurantName}
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div>
            <h4 className="font-extrabold text-sm text-gray-900">
              {order.restaurantName}
            </h4>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
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
              className="flex justify-between items-start text-xs border-b border-gray-50 pb-2"
            >
              <div>
                <span className="font-bold text-brand-600 mr-2">{it.quantity}x</span>
                <span className="font-semibold text-gray-900">{it.name}</span>
                {it.customization && (
                  <p className="text-[11px] text-gray-700 ml-6">
                    {it.customization.size && `${it.customization.size} • `}
                    {it.customization.addOns?.length > 0 &&
                      it.customization.addOns.join(', ')}
                  </p>
                )}
              </div>
              <span className="font-bold text-gray-900">
                {formatCurrency(it.price * it.quantity)}
              </span>
            </div>
          ))}
        </div>

        {/* Bill Breakdown */}
        <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-600">
          <div className="flex justify-between">
            <span>Item Subtotal</span>
            <span>{formatCurrency(order.bill.subtotal)}</span>
          </div>
          {order.bill.discount > 0 && (
            <div className="flex justify-between text-emerald-600 font-bold">
              <span>Coupon Savings</span>
              <span>-{formatCurrency(order.bill.discount)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>
              {order.bill.deliveryFee === 0
                ? 'FREE'
                : formatCurrency(order.bill.deliveryFee)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Taxes & Fees</span>
            <span>
              {formatCurrency(order.bill.taxes + order.bill.platformFee)}
            </span>
          </div>

          <div className="pt-3 border-t border-gray-200 flex justify-between text-base font-black text-gray-900">
            <span>Paid Total</span>
            <span className="text-brand-600 text-lg">
              {formatCurrency(order.bill.total)}
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="pt-3 border-t border-gray-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Delivering To
          </h4>
          <div className="p-3.5 bg-gray-50 rounded-2xl text-xs space-y-0.5 text-gray-700">
            <div className="font-bold text-gray-900">
              {order.deliveryAddress?.fullName} • {order.deliveryAddress?.phone}
            </div>
            <div>
              {order.deliveryAddress?.street}, {order.deliveryAddress?.city}{' '}
              {order.deliveryAddress?.zip}
            </div>
            {order.deliveryInstructions && (
              <div className="text-brand-700 font-medium pt-1">
                Note: {order.deliveryInstructions}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
