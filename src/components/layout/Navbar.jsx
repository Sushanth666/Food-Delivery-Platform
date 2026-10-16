import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  UtensilsCrossed,
  Crosshair,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrderContext';
import { useLocationContext } from '../../context/LocationContext';
import { formatCurrency } from '../../utils/formatCurrency';

export default function Navbar() {
  const { bill, openCartDrawer } = useCart();
  const { orders } = useOrders();
  const { currentLocation, openLocationModal } = useLocationContext();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Brand & Location */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-gray-950 via-gray-800 to-brand-600 bg-clip-text text-transparent">
                  CraveWave
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 -mt-1">
                  Food Delivered Fast
                </span>
              </div>
            </Link>

            {/* Location Selector (Desktop & Tablet) */}
            <div className="hidden md:flex items-center">
              <button
                type="button"
                onClick={openLocationModal}
                className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-brand-50/70 hover:text-brand-600 px-3.5 py-2 rounded-xl border border-gray-200/80 transition-all group"
                title="Change or detect delivery location"
              >
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="max-w-[220px] truncate text-left font-bold text-gray-800 group-hover:text-brand-700">
                  {currentLocation.area}, {currentLocation.city}
                </span>
                {currentLocation.isAutoDetected ? (
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[9px] uppercase tracking-wider flex items-center gap-1">
                    <Crosshair className="w-2.5 h-2.5" />
                    <span>GPS</span>
                  </span>
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-600" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                location.pathname === '/'
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/orders"
              className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                location.pathname.startsWith('/order')
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Orders</span>
              {orders.length > 0 && (
                <span className="px-1.5 py-0.2 bg-gray-200 text-gray-800 rounded-full text-xs font-bold">
                  {orders.length}
                </span>
              )}
            </Link>
          </nav>

          {/* Right Action: Cart Button & Mobile Toggles */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Mobile Location Pin Button */}
            <button
              type="button"
              onClick={openLocationModal}
              className="md:hidden flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-brand-50 hover:text-brand-600 transition-colors max-w-[140px] truncate"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
              <span className="truncate">{currentLocation.city || 'Location'}</span>
            </button>

            <button
              id="navbar-cart-button"
              type="button"
              onClick={openCartDrawer}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-lg shadow-brand-500/25 transition-all hover:shadow-brand-500/40 active:scale-95"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {bill.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-brand-600 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-bounce-subtle">
                    {bill.itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">
                {bill.itemCount > 0
                  ? `${bill.itemCount} ${bill.itemCount === 1 ? 'item' : 'items'} • ${formatCurrency(
                      bill.total
                    )}`
                  : 'Cart'}
              </span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-2">
            {/* Location in mobile drawer */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openLocationModal();
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl bg-brand-50 text-brand-800 text-xs font-bold flex items-center justify-between"
            >
              <div className="flex items-center gap-2 truncate">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="truncate">
                  {currentLocation.formatted || `${currentLocation.area}, ${currentLocation.city}`}
                </span>
              </div>
              <span className="text-[10px] text-brand-600 font-extrabold uppercase">
                Change
              </span>
            </button>

            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Explore Restaurants
            </Link>
            <Link
              to="/orders"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span>Order History & Tracking</span>
              <span className="px-2 py-0.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold">
                {orders.length}
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
