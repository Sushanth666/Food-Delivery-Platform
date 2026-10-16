import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  RotateCcw,
  Bike,
  CheckCircle2,
  ChevronRight,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

export default function OrderHistoryPage() {
  const navigate = useNavigate();
  const { orders } = useOrders();
  const { reorderItems } = useCart();

  const handleReorder = (order) => {
    reorderItems(order);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
      {/* Header */}
      <div className="pb-6 border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Your Order History
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Review past deliveries, track active shipments, or re-order your favorite meals with one click
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-soft max-w-lg mx-auto my-12">
          <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 mx-auto mb-4">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">No Orders Yet</h3>
          <p className="text-sm text-gray-500 mt-1">
            Once you place an order, you can monitor its live timeline and easily re-order it right here.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Explore Restaurants</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          {orders.map((order) => {
            const isDelivered = order.currentStep === 5;

            return (
              <div
                key={order.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Left: Restaurant & Meta */}
                <div className="flex items-start gap-4">
                  <img
                    src={order.restaurantImage}
                    alt={order.restaurantName}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-base sm:text-lg text-gray-900">
                        {order.restaurantName}
                      </h3>
                      <span className="text-xs font-mono text-gray-400">
                        #{order.id}
                      </span>
                    </div>

                    <div className="text-xs text-gray-400 mt-0.5">
                      {new Date(order.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>

                    {/* Status Badge */}
                    <div className="mt-2.5 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          isDelivered
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200 animate-pulse'
                        }`}
                      >
                        {isDelivered ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <Bike className="w-3.5 h-3.5" />
                        )}
                        <span>{order.status}</span>
                      </span>

                      <span className="text-xs font-bold text-gray-900">
                        {formatCurrency(order.bill.total)}
                      </span>
                    </div>

                    {/* Items preview snippet */}
                    <p className="text-xs text-gray-500 mt-2 line-clamp-1">
                      {order.items.map((i) => `${i.quantity}x ${i.name}`).join(', ')}
                    </p>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3 self-end md:self-center">
                  <Link
                    to={`/track/${order.id}`}
                    className="px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-xs flex items-center gap-1.5 border border-gray-200 transition-colors"
                  >
                    <Bike className="w-3.5 h-3.5 text-brand-600" />
                    <span>Track Order</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleReorder(order)}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/20 flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Re-order</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
