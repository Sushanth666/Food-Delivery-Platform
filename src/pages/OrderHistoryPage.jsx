import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  RotateCcw,
  Bike,
  CheckCircle2,
  ShoppingBag,
  ArrowRight,
  Lock,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatCurrency } from '../utils/formatCurrency';
import heroFallback from '../assets/hero.png';

export default function OrderHistoryPage() {
  const navigate = useNavigate();
  const { orders } = useOrders();
  const { reorderItems } = useCart();
  const { isAuthenticated, openLoginModal, openSignupModal } = useAuth();

  const handleReorder = (order) => {
    reorderItems(order);
    navigate('/cart');
  };

  // If user is not logged in, prompt to log in instead of displaying orders
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-28 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/15 gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Order History & Activity</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight flex items-center gap-3">
                <span>Your Order History</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-2xl leading-relaxed">
                Review past deliveries, track active shipments, or re-order your favorite meals with one click.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-all self-start sm:self-center shadow-xs cursor-pointer group"
            >
              <ShoppingBag className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
              <span>Order More Food</span>
            </Link>
          </div>

          {/* Not Logged In Prompt */}
          <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-8 sm:p-14 text-center border border-white/10 shadow-2xl shadow-rose-950/40 max-w-lg mx-auto my-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-950/60 to-purple-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400 mx-auto mb-5 shadow-inner">
              <Lock className="w-10 h-10" />
            </div>

            <span className="text-[11px] font-black uppercase tracking-widest text-rose-300 bg-rose-950/60 px-3.5 py-1 rounded-full border border-rose-800/40 inline-block mb-3">
              Account Required
            </span>

            <h2 className="text-2xl font-black font-display text-white">
              Sign In to View Orders
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
              Please log in with your CraveWave account to view your past orders, monitor live deliveries, and easily re-order your favorite food.
            </p>

            {/* Action CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="order-history-login-btn"
                type="button"
                onClick={openLoginModal}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-rose-950/60 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </button>

              <button
                id="order-history-signup-btn"
                type="button"
                onClick={openSignupModal}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-wider border border-white/10 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>Create Account</span>
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <Link
                to="/"
                className="text-xs font-semibold text-gray-400 hover:text-rose-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Restaurants Without Signing In</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-28 lg:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/15 gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Order History & Activity</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight flex items-center gap-3">
              <span>Your Order History</span>
              {orders.length > 0 && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 text-rose-300 border border-white/15">
                  {orders.length} {orders.length === 1 ? 'order' : 'orders'}
                </span>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-2xl leading-relaxed">
              Review past deliveries, track active shipments, or re-order your favorite meals with one click.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-all self-start sm:self-center shadow-xs cursor-pointer group"
          >
            <ShoppingBag className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
            <span>Order More Food</span>
          </Link>
        </div>

        {orders.length === 0 ? (
          <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-16 text-center border border-white/10 shadow-2xl shadow-rose-950/40 max-w-lg mx-auto my-12">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-950/60 to-purple-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400 mx-auto mb-4">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">No Orders Yet</h3>
            <p className="text-sm text-gray-400 mt-1">
              Once you place an order, you can monitor its live timeline and easily re-order it right here.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-rose-950/60 transition-all cursor-pointer"
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
                  className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl hover:border-rose-500/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  {/* Left: Restaurant & Meta */}
                  <div className="flex items-start gap-4">
                    <img
                      src={order.restaurantImage}
                      alt={order.restaurantName}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = heroFallback;
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover flex-shrink-0 border border-white/10"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-base sm:text-lg text-white">
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
                              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-950/60 text-amber-300 border border-amber-500/30 animate-pulse'
                          }`}
                        >
                          {isDelivered ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : (
                            <Bike className="w-3.5 h-3.5" />
                          )}
                          <span>{order.status}</span>
                        </span>

                        <span className="text-xs font-bold text-rose-300">
                          {formatCurrency(order.bill.total)}
                        </span>
                      </div>

                      {/* Items preview snippet */}
                      <p className="text-xs text-gray-400 mt-2 line-clamp-1">
                        {order.items.map((i) => `${i.quantity}x ${i.name}`).join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-3 self-end md:self-center">
                    <Link
                      to={`/track/${order.id}`}
                      className="px-4 py-2.5 rounded-xl bg-[#1C1C26] hover:bg-[#252533] text-gray-200 font-bold text-xs flex items-center gap-1.5 border border-white/10 transition-colors cursor-pointer"
                    >
                      <Bike className="w-3.5 h-3.5 text-rose-400" />
                      <span>Track Order</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleReorder(order)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs shadow-md shadow-rose-950/50 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
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
    </div>
  );
}
