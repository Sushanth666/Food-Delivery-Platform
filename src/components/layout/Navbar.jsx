import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  MapPin,
  Search,
  Clock,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  UtensilsCrossed,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrderContext';
import { formatCurrency } from '../../utils/formatCurrency';

export default function Navbar() {
  const { bill, openCartDrawer } = useCart();
  const { orders } = useOrders();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Downtown Metropolis, 5th Ave');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const CITIES = [
    'Downtown Metropolis, 5th Ave',
    'Silicon Harbor Tech Park, Pier 7',
    'Greenfield Heights, Block 4',
    'Old University Quarter, Lane 12',
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Brand & Location */}
          <div className="flex items-center gap-6">
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

            {/* Location Selector (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center relative">
              <button
                type="button"
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100/80 px-3.5 py-2 rounded-xl border border-gray-200/80 transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-600" />
                <span className="max-w-[180px] truncate">{selectedCity}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-700" />
              </button>

              {isCityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-700">
                    Deliver To:
                  </div>
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors flex items-center gap-2"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-500" />
                      <span className="truncate">{city}</span>
                    </button>
                  ))}
                </div>
              )}
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

          {/* Right Action: Cart Button */}
          <div className="flex items-center gap-3">
            <button
              id="navbar-cart-button"
              type="button"
              onClick={openCartDrawer}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-lg shadow-brand-500/25 transition-all hover:shadow-brand-500/40 active:scale-95"
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
