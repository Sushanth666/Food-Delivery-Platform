import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import {
  LayoutDashboard,
  ShoppingBag,
  Store,
  Bike,
  Users,
  IndianRupee,
  Tag,
  Settings,
  ArrowLeft,
  Search,
  Bell,
  UtensilsCrossed,
  ShieldCheck,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

import DashboardModule from './modules/DashboardModule';
import OrderManagementModule from './modules/OrderManagementModule';
import RestaurantManagementModule from './modules/RestaurantManagementModule';
import DeliveryPartnerModule from './modules/DeliveryPartnerModule';
import CustomerManagementModule from './modules/CustomerManagementModule';
import FinanceModule from './modules/FinanceModule';
import OffersModule from './modules/OffersModule';
import SupportSettingsModule from './modules/SupportSettingsModule';

export default function AdminLayout() {
  const {
    currentAdmin,
    orders,
    pendingRestaurants,
    deliveryPartners,
    tickets,
    couponsList,
  } = useAdmin();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get('tab');
  const [activeTab, setActiveTabState] = useState(urlTab || 'dashboard');

  useEffect(() => {
    if (urlTab && urlTab !== activeTab) {
      setActiveTabState(urlTab);
    }
  }, [urlTab, activeTab]);

  const setActiveTab = (tab) => {
    setActiveTabState(tab);
    setSearchParams({ tab });
  };

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);

  // Reset scroll to top inside admin page content whenever active tab changes
  useEffect(() => {
    const adminMain = document.getElementById('admin-main-scroll');
    if (adminMain) {
      adminMain.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  // Badge calculations
  const pendingOrdersCount = orders.filter((o) => o.status === 'Pending Confirmation').length;
  const pendingRestCount = pendingRestaurants.length;
  const activeRidersCount = deliveryPartners.filter((p) => p.status === 'Online').length;
  const openTicketsCount = tickets.filter((t) => t.status !== 'Resolved').length;

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard & Analytics', icon: LayoutDashboard },
    { id: 'orders', label: 'Order Management', icon: ShoppingBag, badge: pendingOrdersCount > 0 ? pendingOrdersCount : null, badgeColor: 'bg-rose-500 text-white' },
    { id: 'restaurants', label: 'Restaurant & Menu', icon: Store, badge: pendingRestCount > 0 ? pendingRestCount : null, badgeColor: 'bg-amber-400 text-black' },
    { id: 'delivery', label: 'Delivery Partners', icon: Bike, badge: `${activeRidersCount} live`, badgeColor: 'bg-sky-500/20 text-sky-300' },
    { id: 'customers', label: 'Customer Management', icon: Users },
    { id: 'finance', label: 'Payments & Finance', icon: IndianRupee },
    { id: 'offers', label: 'Offers & Promotions', icon: Tag, badge: couponsList.filter((c) => c.isActive).length, badgeColor: 'bg-purple-500/20 text-purple-300' },
    { id: 'support', label: 'Support & Settings', icon: Settings, badge: openTicketsCount > 0 ? openTicketsCount : null, badgeColor: 'bg-rose-500 text-white' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#09090C] text-gray-100 font-sans selection:bg-rose-500 selection:text-white overflow-hidden">
      {/* 1. TOP ENTERPRISE HEADER - Fixed full-width at top with ZERO scrollbar beside it */}
      <header className="h-16 shrink-0 z-40 bg-[#0E0E14]/95 border-b border-white/10 backdrop-blur-xl">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Left: Mobile hamburger + Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 lg:hidden text-gray-300 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link to="/admin" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E11D48] via-rose-600 to-brand-700 flex items-center justify-center text-white shadow-md shadow-rose-950/60 group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black font-display tracking-tight text-white">
                    Crave<span className="text-[#E11D48]">Wave</span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/30">
                    Admin Flow
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-gray-400 block -mt-0.5">
                  Enterprise Platform Ops
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Quick actions + Storefront link + Admin user info */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Storefront Toggle Button */}
            <Link
              to="/"
              className="h-9 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
              title="Return to Consumer Storefront"
            >
              <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">Live Storefront</span>
            </Link>

            {/* Admin Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                className="h-9 px-2.5 sm:px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center gap-2 cursor-pointer transition-all"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center font-black text-[11px] text-white">
                  {currentAdmin.avatar || (currentAdmin.name ? currentAdmin.name.slice(0, 2).toUpperCase() : 'AD')}
                </div>
                <div className="hidden sm:block text-left text-xs leading-tight">
                  <p className="font-bold text-white leading-none">{currentAdmin.name}</p>
                  <p className="text-[9px] text-rose-400 font-semibold leading-none mt-0.5">{currentAdmin.role}</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {adminMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setAdminMenuOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 bg-[#161622] border border-white/15 rounded-2xl shadow-2xl z-50 p-2 text-xs text-white animate-fade-in">
                    <div className="p-2 border-b border-white/10 mb-1">
                      <p className="font-black text-white">{currentAdmin.name}</p>
                      <p className="text-[10px] text-gray-400 font-mono">{currentAdmin.email}</p>
                      <span className="inline-block mt-1 text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Role: {currentAdmin.role}
                      </span>
                    </div>

                    <Link
                      to="/"
                      onClick={() => setAdminMenuOpen(false)}
                      className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white font-bold transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 text-rose-400" />
                      <span>Back to Food Ordering</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 2. BODY LAYOUT: SIDEBAR + MAIN CONTENT (Scrollbar exists ONLY in pages below header) */}
      <div className="flex-1 flex w-full max-w-[1720px] mx-auto min-h-0 overflow-hidden">
        {/* Sidebar for Desktop */}
        <aside className="hidden lg:flex flex-col w-64 xl:w-72 border-r border-white/10 bg-[#0B0B0F]/90 p-4 shrink-0 justify-between overflow-y-auto">
          <div className="space-y-1.5">
            <span className="text-[10px] font-black tracking-wider uppercase text-gray-500 px-3 block mb-2">
              Platform Modules
            </span>

            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick System Badge */}
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-400">
              <span>Cluster State:</span>
              <span className="text-emerald-400 font-black flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Hub
              </span>
            </div>
            <p className="text-[10px] text-gray-500">
              Logged in as {currentAdmin.name} ({currentAdmin.role})
            </p>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileSidebarOpen(false)} />
            <div className="relative w-72 bg-[#12121A] border-r border-white/15 p-5 flex flex-col justify-between z-10 space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <span className="text-sm font-black text-white">Admin Modules</span>
                  <button onClick={() => setMobileSidebarOpen(false)} className="text-gray-400 p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-xs transition-all ${
                          isActive
                            ? 'bg-rose-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Link
                to="/"
                className="w-full py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Storefront
              </Link>
            </div>
          </div>
        )}

        {/* Main Content Area: Page content scrolls strictly here, scrollbar starts below header */}
        <main id="admin-main-scroll" className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto min-w-0">
          {activeTab === 'dashboard' && <DashboardModule setActiveTab={setActiveTab} />}
          {activeTab === 'orders' && <OrderManagementModule />}
          {activeTab === 'restaurants' && <RestaurantManagementModule />}
          {activeTab === 'delivery' && <DeliveryPartnerModule />}
          {activeTab === 'customers' && <CustomerManagementModule />}
          {activeTab === 'finance' && <FinanceModule />}
          {activeTab === 'offers' && <OffersModule />}
          {activeTab === 'support' && <SupportSettingsModule />}
        </main>
      </div>
    </div>
  );
}
