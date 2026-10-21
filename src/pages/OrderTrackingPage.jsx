import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Bike,
  CheckCircle2,
  ChefHat,
  Receipt,
  UserCheck,
  Clock,
  Phone,
  MessageSquare,
  MapPin,
  ChevronRight,
  ShieldCheck,
  FastForward,
  RotateCcw,
} from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { ORDER_STATUS_STEPS } from '../data/mockOrders';
import { formatCurrency } from '../utils/formatCurrency';
import { getIndianAvatarByName } from '../utils/indianAvatars';
import DeliveryChatDrawer from '../components/tracking/DeliveryChatDrawer';

export default function OrderTrackingPage() {
  const { orderId } = useParams();
  const { getOrderById, updateOrderStatus } = useOrders();

  const order = getOrderById(orderId);
  const currentStep = order ? order.currentStep || 1 : 1;

  // Auto progression simulation (advance status every 15s if desired)
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (!autoAdvance || !order || currentStep >= 5) return;
    const interval = setInterval(() => {
      updateOrderStatus(order.id, currentStep + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [autoAdvance, order, currentStep]);

  if (!order) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-[#0B0B0E] bg-dark-luxury text-white">
        <div className="max-w-md w-full bg-[#131319]/90 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-rose-950/40 text-center">
          <h2 className="text-2xl font-black font-display text-white">Order not found</h2>
          <Link
            to="/orders"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-950/60 cursor-pointer"
          >
            View All Orders
          </Link>
        </div>
      </div>
    );
  }

  const stepIcons = [
    Receipt,
    ChefHat,
    UserCheck,
    Bike,
    CheckCircle2,
  ];

  const progressPercent = ((currentStep - 1) / 4) * 100;

  return (
    <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/15 gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-1.5">
              <Link to="/orders" className="hover:text-rose-400 transition-colors">
                Orders
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-rose-400 font-bold">Live Tracking</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight flex flex-wrap items-center gap-2.5">
              <span>Tracking Order</span>
              <span className="font-mono text-rose-300 bg-rose-950/70 border border-rose-500/40 px-2.5 py-0.5 rounded-xl text-lg sm:text-xl font-bold shadow-xs">
                #{order.id}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1.5 flex items-center gap-1.5">
              <span className="text-gray-400">From</span>
              <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded-md border border-white/15">
                {order.restaurantName}
              </span>
            </p>
          </div>

          {/* Test Status Simulator Controls */}
          <div className="flex items-center gap-2 bg-[#14141C]/95 backdrop-blur-md border border-white/15 p-2 rounded-2xl shadow-xl self-start sm:self-center">
            <span className="text-[11px] font-black text-gray-300 px-2 uppercase tracking-wider">
              Test Status:
            </span>
            <button
              type="button"
              onClick={() => updateOrderStatus(order.id, Math.min(5, currentStep + 1))}
              disabled={currentStep >= 5}
              className="px-3.5 py-2 bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 disabled:from-gray-800 disabled:to-gray-800 disabled:text-gray-500 text-white text-xs font-black rounded-xl shadow-md shadow-rose-950/50 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>Next Step</span>
            </button>
            <button
              type="button"
              onClick={() => updateOrderStatus(order.id, 1)}
              className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              title="Reset to Step 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Left Column: Live Status & Simulated Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Animated Status Card */}
            <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-300 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800/40">
                    Step {currentStep} of 5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight mt-2">
                    {ORDER_STATUS_STEPS[currentStep - 1]?.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {ORDER_STATUS_STEPS[currentStep - 1]?.description}
                  </p>
                </div>

                {currentStep < 5 && (
                  <div className="text-right">
                    <div className="text-xs font-bold text-gray-400 uppercase">
                      Estimated Time
                    </div>
                    <div className="text-lg sm:text-xl font-black text-emerald-400">
                      {currentStep === 4 ? '6-8 mins' : '22-26 mins'}
                    </div>
                  </div>
                )}
              </div>

              {/* Visual Step Progress Bar */}
              <div className="relative pt-4 pb-2">
                <div className="overflow-hidden h-2.5 mb-6 text-xs flex rounded-full bg-[#20202C]">
                  <div
                    style={{ width: `${progressPercent}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-brand-600 via-rose-500 to-amber-500 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Step Icons Row */}
                <div className="grid grid-cols-5 gap-1 text-center">
                  {ORDER_STATUS_STEPS.map((st, idx) => {
                    const Icon = stepIcons[idx];
                    const isCompleted = currentStep > st.step;
                    const isCurrent = currentStep === st.step;

                    return (
                      <div key={st.step} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all ${
                            isCompleted
                              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/50'
                              : isCurrent
                              ? 'bg-gradient-to-tr from-brand-600 to-rose-600 text-white shadow-lg shadow-rose-950/80 scale-110 ring-4 ring-rose-500/20'
                              : 'bg-[#1C1C26] text-gray-500 border border-white/5'
                          }`}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span
                          className={`text-[10px] sm:text-xs font-bold mt-2 leading-tight max-w-[70px] ${
                            isCurrent
                              ? 'text-rose-400 font-extrabold'
                              : isCompleted
                              ? 'text-gray-300'
                              : 'text-gray-500'
                          }`}
                        >
                          {st.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Simulated Live Delivery Map */}
            <div className="bg-[#14141C] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-slate-900 via-gray-950 to-black p-6 flex flex-col justify-between text-white overflow-hidden">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* SVG Simulated Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 60 120 Q 220 40 450 110 T 800 70"
                    fill="none"
                    stroke="#E11D48"
                    strokeWidth="4"
                    strokeDasharray="8 8"
                    className="animate-pulse"
                  />
                </svg>

                {/* Top Map Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-gray-200">GPS Live Satellite Tracking Active</span>
                  </div>
                  <span className="text-xs text-rose-300 bg-black/70 px-2.5 py-1 rounded-lg border border-white/10">
                    Speed: 28 km/h
                  </span>
                </div>

                {/* Moving Scooter Marker */}
                <div
                  className="relative z-10 flex items-center gap-3 transition-all duration-1000"
                  style={{
                    transform: `translateX(${Math.min(currentStep * 18, 80)}%)`,
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-rose-600 text-white flex items-center justify-center shadow-xl shadow-rose-950/60 animate-bounce-subtle">
                    <Bike className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs shadow-lg">
                    <span className="font-extrabold text-amber-300">
                      {order.deliveryDriver?.name || 'Ramesh Kumar'}
                    </span>
                    <div className="text-[10px] text-gray-300">
                      {currentStep === 5
                        ? 'Delivered to your door'
                        : currentStep === 4
                        ? '1.2 km away from your location'
                        : 'At the restaurant'}
                    </div>
                  </div>
                </div>

                {/* Destination Point */}
                <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-gray-300">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>
                    Destination: {order.deliveryAddress?.street},{' '}
                    {order.deliveryAddress?.city}
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Driver Info Card */}
            {order.deliveryDriver && (
              <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={getIndianAvatarByName(
                      order.deliveryDriver.name,
                      order.deliveryDriver.gender
                    )}
                    alt={order.deliveryDriver.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-rose-500/40"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-white text-base">
                        {order.deliveryDriver.name}
                      </h3>
                      <span className="bg-emerald-950/60 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-md border border-emerald-500/30">
                        ★ {order.deliveryDriver.rating}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {order.deliveryDriver.trips} completed trips •{' '}
                      {order.deliveryDriver.vehicle}
                    </p>
                    <p className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Temperature Checked & Fully Vaccinated</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsChatOpen(true)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
                    <span>Chat with Rider</span>
                  </button>

                  <a
                    href={`tel:${order.deliveryDriver.phone}`}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-rose-950/50"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Rider</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Order Details & Receipt */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl space-y-5">
              <h3 className="font-extrabold text-white text-base pb-3 border-b border-white/10">
                Receipt Summary
              </h3>

              {/* Restaurant */}
              <div className="flex items-center gap-3">
                <img
                  src={order.restaurantImage}
                  alt={order.restaurantName}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-extrabold text-xs text-white">
                    {order.restaurantName}
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-2.5 border-t border-b border-white/10 py-3">
                {order.items.map((it, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start text-xs"
                  >
                    <div>
                      <span className="font-bold text-rose-400 mr-2">
                        {it.quantity}x
                      </span>
                      <span className="font-semibold text-gray-200">
                        {it.name}
                      </span>
                      {it.customization && (
                        <p className="text-[10px] text-gray-400 ml-5">
                          {it.customization.size && `${it.customization.size} • `}
                          {it.customization.addOns?.join(', ')}
                        </p>
                      )}
                    </div>
                    <span className="font-bold text-white">
                      {formatCurrency(it.price * it.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bill details */}
              <div className="space-y-1.5 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-200">{formatCurrency(order.bill.subtotal)}</span>
                </div>
                {order.bill.discount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Savings</span>
                    <span>-{formatCurrency(order.bill.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery</span>
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
                <div className="pt-2 border-t border-white/10 flex justify-between font-black text-sm text-white">
                  <span>Total Amount</span>
                  <span className="text-rose-400 text-base">
                    {formatCurrency(order.bill.total)}
                  </span>
                </div>
              </div>

              {/* Delivery Location */}
              <div className="pt-2 border-t border-white/10 text-xs">
                <span className="font-bold text-gray-400 uppercase text-[10px] block mb-1">
                  Drop Location
                </span>
                <p className="font-semibold text-gray-200">
                  {order.deliveryAddress?.street}, {order.deliveryAddress?.city}
                </p>
                <p className="text-gray-400 mt-0.5">
                  {order.deliveryAddress?.fullName} ({order.deliveryAddress?.phone})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Delivery Partner Chat Drawer */}
      {order.deliveryDriver && (
        <DeliveryChatDrawer
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          driver={{
            ...order.deliveryDriver,
            avatar: getIndianAvatarByName(
              order.deliveryDriver.name,
              order.deliveryDriver.gender
            ),
          }}
          restaurantName={order.restaurantName}
        />
      )}
    </div>
  );
}
