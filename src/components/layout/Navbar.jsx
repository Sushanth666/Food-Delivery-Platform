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
  Compass,
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
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Brand & Location */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 min-w-0">
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-display tracking-tight bg-gradient-to-r from-gray-950 via-gray-800 to-brand-600 bg-clip-text text-transparent leading-none">
                  CraveWave
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-600 mt-1">
                  Food Delivered Fast
                </span>
              </div>
            </Link>

            {/* Subtle Divider */}
            <div className="hidden sm:block h-6 w-px bg-gray-200 flex-shrink-0" />

            {/* Location Selector (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center min-w-0">
              <button
                type="button"
                onClick={openLocationModal}
                className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50/90 hover:bg-brand-50/70 hover:text-brand-600 px-3.5 py-2 rounded-xl border border-gray-200/80 hover:border-brand-200 transition-all group max-w-[260px] lg:max-w-[320px]"
                title="Change or detect delivery location"
              >
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate text-left">
                  <strong className="font-bold text-gray-900 group-hover:text-brand-700">
                    {currentLocation.area || 'Select Location'}
                  </strong>
                  <span className="text-gray-500 font-medium">
                    , {currentLocation.city || 'India'}
                  </span>
                </span>
                {currentLocation.isAutoDetected ? (
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-extrabold text-[9px] uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
                    <Crosshair className="w-2.5 h-2.5 text-emerald-600" />
                    <span>GPS</span>
                  </span>
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-600 flex-shrink-0 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          </div>

          {/* Right: Navigation Links & Actions grouped cohesively */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <Link
                to="/"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  location.pathname === '/'
                    ? 'bg-brand-50 text-brand-600 font-bold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Explore</span>
              </Link>
              <Link
                to="/orders"
                className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  location.pathname.startsWith('/order')
                    ? 'bg-brand-50 text-brand-600 font-bold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Orders</span>
                {orders.length > 0 && (
                  <span className="px-1.5 py-0.5 min-w-[20px] text-center bg-gray-200 text-gray-800 rounded-full text-xs font-bold leading-none">
                    {orders.length}
                  </span>
                )}
              </Link>
            </nav>

            {/* Quick Mobile Location Pin Button */}
            <button
              type="button"
              onClick={openLocationModal}
              className="sm:hidden flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-brand-50 hover:text-brand-600 transition-colors max-w-[130px] truncate"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
              <span className="truncate">{currentLocation.city || 'Location'}</span>
            </button>

            {/* Cart Button */}
            <button
              id="navbar-cart-button"
              type="button"
              onClick={openCartDrawer}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-amber-500 hover:from-brand-700 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all hover:shadow-lg hover:shadow-brand-500/35 active:scale-95"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {bill.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-brand-600 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-bounce-subtle">
                    {bill.itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold">
                {bill.itemCount > 0
                  ? `${bill.itemCount} ${bill.itemCount === 1 ? 'item' : 'items'} • ${formatCurrency(
                      bill.total
                    )}`
                  : 'Cart'}
              </span>
              <span className="sm:hidden font-semibold">Cart</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
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
