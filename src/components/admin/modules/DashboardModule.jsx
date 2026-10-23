import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Users,
  IndianRupee,
  Bike,
  Clock,
  ArrowUpRight,
  Flame,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Eye,
  Store,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardModule({ setActiveTab }) {
  const { orders, restaurantsList, deliveryPartners, customers, pendingRestaurants, tickets } = useAdmin();
  const [chartPeriod, setChartPeriod] = useState('7d');

  // Compute live aggregates
  const totalRevenue = orders.reduce((sum, o) => sum + (o.payment?.amount || 0), 0) + 3845000;
  const totalOrdersCount = orders.length + 14200;
  const activePartnersCount = deliveryPartners.filter((p) => p.status === 'Online' || p.status === 'Busy').length;
  const pendingOrdersCount = orders.filter((o) => o.status === 'Pending Confirmation').length;
  const inFlightCount = orders.filter((o) => o.status === 'Out for Delivery' || o.status === 'Kitchen Preparing Food').length;
  const openTicketsCount = tickets.filter((t) => t.status === 'Open').length;

  // Chart datasets
  const salesData7d = [
    { day: 'Mon', revenue: 420000, orders: 1850 },
    { day: 'Tue', revenue: 460000, orders: 1980 },
    { day: 'Wed', revenue: 490000, orders: 2100 },
    { day: 'Thu', revenue: 530000, orders: 2340 },
    { day: 'Fri', revenue: 680000, orders: 2950 },
    { day: 'Sat', revenue: 840000, orders: 3620 },
    { day: 'Sun', revenue: 790000, orders: 3410 },
  ];

  const peakHours = [
    { time: '11 AM', intensity: 35, label: 'Early Lunch' },
    { time: '12 PM', intensity: 75, label: 'Lunch Rush' },
    { time: '1 PM', intensity: 95, label: 'Peak Lunch' },
    { time: '2 PM', intensity: 80, label: 'Late Lunch' },
    { time: '3 PM', intensity: 40, label: 'Afternoon' },
    { time: '4 PM', intensity: 30, label: 'Tea Break' },
    { time: '5 PM', intensity: 45, label: 'Snacks' },
    { time: '6 PM', intensity: 60, label: 'Early Dinner' },
    { time: '7 PM', intensity: 88, label: 'Dinner Wave' },
    { time: '8 PM', intensity: 100, label: 'Mega Dinner Peak' },
    { time: '9 PM', intensity: 92, label: 'Late Dinner' },
    { time: '10 PM', intensity: 65, label: 'Midnight Cravings' },
  ];

  const topSellingCategories = [
    { name: 'Royal Biryani & Pulao', share: '38%', revenue: '₹14.6 Lakhs', color: 'from-amber-500 to-rose-500' },
    { name: 'South Indian Tiffin & Curries', share: '24%', revenue: '₹9.2 Lakhs', color: 'from-emerald-500 to-teal-500' },
    { name: 'North Indian & Butter Chicken', share: '18%', revenue: '₹6.9 Lakhs', color: 'from-orange-500 to-red-500' },
    { name: 'Asian Dim Sum & Noodles', share: '12%', revenue: '₹4.6 Lakhs', color: 'from-purple-500 to-indigo-500' },
    { name: 'Gourmet Desserts & Shakes', share: '8%', revenue: '₹3.1 Lakhs', color: 'from-pink-500 to-rose-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner Alert Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-amber-950/30 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
              Platform Real-Time Live Status
              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-black border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                SYSTEM HEALTHY 99.98%
              </span>
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400">
              {inFlightCount} orders in flight • {activePartnersCount} delivery partners active • {pendingRestaurants.length} restaurant onboarding requests pending
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {pendingRestaurants.length > 0 && (
            <button
              onClick={() => setActiveTab('restaurants')}
              className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all cursor-pointer"
            >
              Review {pendingRestaurants.length} Restaurants
            </button>
          )}
          {openTicketsCount > 0 && (
            <button
              onClick={() => setActiveTab('support')}
              className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-all cursor-pointer"
            >
              {openTicketsCount} Support Tickets
            </button>
          )}
        </div>
      </div>

      {/* 1. Core KPIs Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/30 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gross Platform GMV</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <IndianRupee className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl sm:text-3xl font-black text-white font-display">
              ₹{(totalRevenue / 100000).toFixed(1)}L
            </span>
            <span className="flex items-center text-xs font-bold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +18.4%
            </span>
          </div>
          <p className="text-[11px] text-gray-400">
            Net commission earned: ₹{((totalRevenue * 0.2) / 100000).toFixed(1)}L (20% avg)
          </p>
        </div>

        {/* Total Orders */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/30 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Orders</span>
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl sm:text-3xl font-black text-white font-display">
              {totalOrdersCount.toLocaleString()}
            </span>
            <span className="flex items-center text-xs font-bold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +12.8%
            </span>
          </div>
          <p className="text-[11px] text-gray-400">
            {pendingOrdersCount} pending confirmation • {inFlightCount} active delivery
          </p>
        </div>

        {/* Active Customers */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/30 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Customers</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl sm:text-3xl font-black text-white font-display">
              28,950
            </span>
            <span className="flex items-center text-xs font-bold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +24.1%
            </span>
          </div>
          <p className="text-[11px] text-gray-400">
            Gold VIP members: 4,120 (32% repeat rate)
          </p>
        </div>

        {/* Active Delivery Fleet */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/30 transition-all group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fleet Efficiency</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Bike className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl sm:text-3xl font-black text-white font-display">
              {activePartnersCount} / {deliveryPartners.length}
            </span>
            <span className="flex items-center text-xs font-bold text-emerald-400">
              98.2% On-Time
            </span>
          </div>
          <p className="text-[11px] text-gray-400">
            Avg delivery transit time: 26.4 mins
          </p>
        </div>
      </div>

      {/* 2. Charts Section: Revenue Analytics & Peak-Hours Demand */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales & Revenue Chart (2 cols) */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-base font-black text-white">Sales & Revenue Performance</h3>
              <p className="text-xs text-gray-400">Daily gross turnover and customer order volumes</p>
            </div>
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
              {['7d', '30d', 'Quarter'].map((p) => (
                <button
                  key={p}
                  onClick={() => setChartPeriod(p)}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    chartPeriod === p ? 'bg-rose-500 text-white shadow-xs' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {p.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Responsive SVG Chart */}
          <div className="h-60 w-full relative">
            <div className="absolute inset-0 flex items-end justify-between gap-2 sm:gap-4 px-2 pb-6">
              {salesData7d.map((item, idx) => {
                const heightPercent = Math.round((item.revenue / 900000) * 100);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                    {/* Tooltip on Hover */}
                    <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1C1C26] border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-lg pointer-events-none shadow-xl z-20 whitespace-nowrap">
                      ₹{(item.revenue / 1000).toLocaleString()}k • {item.orders} orders
                    </div>
                    {/* Bar */}
                    <div className="w-full max-w-[42px] bg-white/5 rounded-t-xl overflow-hidden flex items-end h-44">
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className="w-full bg-gradient-to-t from-rose-600 via-rose-500 to-amber-400 rounded-t-xl group-hover:brightness-125 transition-all duration-300"
                      />
                    </div>
                    {/* Day label */}
                    <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" /> Daily Revenue (INR)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" /> Weekend Surge Factor
              </span>
            </div>
            <span className="text-emerald-400 font-bold">Highest Day: Saturday (₹8.40 Lakhs)</span>
          </div>
        </div>

        {/* Peak-Hours Statistics */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-black text-white">Peak-Hour Statistics</h3>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs text-gray-400 mb-4">Live hourly ordering velocity & kitchen load</p>

            <div className="space-y-2.5">
              {peakHours.slice(0, 7).map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-300 font-mono">{item.time} ({item.label})</span>
                    <span className={item.intensity > 80 ? 'text-rose-400 font-black' : 'text-gray-400 font-bold'}>
                      {item.intensity}% Load
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      style={{ width: `${item.intensity}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.intensity > 80
                          ? 'bg-gradient-to-r from-orange-500 to-rose-500'
                          : item.intensity > 50
                          ? 'bg-amber-400'
                          : 'bg-emerald-400'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200 flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Recommended: Trigger 1.2x rider bonus during 8 PM – 10 PM dinner peak.</span>
          </div>
        </div>
      </div>

      {/* 3. Category Distribution & Recent Live Orders Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Share */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-white">Cuisine Sales Share</h3>
            <span className="text-xs text-gray-400">Total 30 Restaurants</span>
          </div>
          <div className="space-y-3">
            {topSellingCategories.map((cat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-white">{cat.name}</span>
                  <span className="text-rose-400 font-extrabold">{cat.share}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-1">
                  <div
                    style={{ width: cat.share }}
                    className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <span>Gross Share</span>
                  <span>{cat.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Real-Time Order Activities (2 cols) */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-black text-white">Recent Activities & Live Orders</h3>
              <p className="text-xs text-gray-400">Real-time status tracking across city hubs</p>
            </div>
            <button
              onClick={() => setActiveTab('orders')}
              className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1"
            >
              View All Orders <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5 overflow-x-auto">
            {orders.slice(0, 5).map((ord) => (
              <div
                key={ord.id}
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 font-mono text-xs font-black">
                    #{ord.id.split('-')[1]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">{ord.restaurantName}</p>
                    <p className="text-[11px] text-gray-400 truncate">
                      {ord.customer?.name} • {ord.items?.length || 1} items • ₹{ord.payment?.amount || 520}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${
                      ord.status === 'Delivered'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : ord.status === 'Out for Delivery'
                        ? 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                        : ord.status === 'Kitchen Preparing Food'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : ord.status === 'Refund Requested'
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                        : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                    }`}
                  >
                    {ord.status}
                  </span>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
                    title="Inspect order"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span>Synchronized with Bangalore Cluster Dispatcher</span>
            <span className="text-emerald-400 font-semibold">● 142ms live latency</span>
          </div>
        </div>
      </div>
    </div>
  );
}
