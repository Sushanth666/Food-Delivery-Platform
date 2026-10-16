import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  ChevronRight,
  Heart,
  ShoppingBag,
  User,
  LogOut,
  Clock,
  Compass,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLocationContext } from '../../context/LocationContext';
import { useFilter } from '../../context/FilterContext';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartItems, openCartDrawer } = useCart();
  const { wishlistCount, openWishlist } = useWishlist();
  const { currentLocation, openLocationModal } = useLocationContext();
  const { searchTerm, setSearchTerm } = useFilter();
  const navigate = useNavigate();

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Total quantity of items in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Formatted location display matching screenshot
  const displayLocation = currentLocation?.area
    ? `${currentLocation.area.split(',')[0].trim()}, ${currentLocation.pincode || '10001'}`
    : 'Downtown NY, 10001';

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-6">
          {/* LEFT: Logo & Delivering To Pill */}
          <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
            {/* CraveWave Brand Logo matching reference */}
            <Link to="/" className="flex items-center gap-2 group">
              {/* Fluid wavy icon */}
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E11D48] to-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-950/50 group-hover:scale-105 transition-transform">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 6c4-3 6-3 10 0s6 3 10 0" />
                  <path d="M2 12c4-3 6-3 10 0s6 3 10 0" />
                  <path d="M2 18c4-3 6-3 10 0s6 3 10 0" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-white group-hover:text-rose-400 transition-colors">
                Crave<span className="text-[#E11D48]">Wave</span>
              </span>
            </Link>

            {/* Delivering To Pill matching screenshot */}
            <button
              type="button"
              onClick={openLocationModal}
              className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-3.5 py-1.5 rounded-2xl text-left transition-all duration-200 group max-w-[200px] sm:max-w-[240px] md:max-w-[280px]"
              title="Change Delivery Location"
            >
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex flex-col min-w-0 pr-1">
                <span className="text-[10px] text-gray-400 font-medium leading-none">
                  Delivering to:
                </span>
                <span className="text-xs font-bold text-white truncate mt-0.5 leading-tight">
                  {displayLocation}
                </span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-auto" />
            </button>
          </div>

          {/* CENTER: Search Bar matching screenshot */}
          <div className="flex-1 max-w-xl mx-2 hidden sm:block">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search gourmet cuisines, restaurants..."
                className="w-full bg-[#16161D] hover:bg-[#1A1A22] focus:bg-[#1A1A22] text-white placeholder-gray-400 text-xs sm:text-sm pl-11 pr-4 py-2.5 rounded-full border border-white/10 focus:border-brand-500/60 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 text-xs text-gray-400 hover:text-white px-1.5 py-0.5 rounded-full bg-white/10"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* RIGHT: Profile, Wishlist, Cart with Icon on top & text below */}
          <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
            {/* 1. Profile Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  if (isAuthenticated) {
                    setUserDropdownOpen(!userDropdownOpen);
                  } else {
                    navigate('/login');
                  }
                }}
                className="flex flex-col items-center justify-center text-gray-300 hover:text-white transition-colors group cursor-pointer"
                aria-label="Profile"
              >
                {isAuthenticated && user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 rounded-full object-cover border border-rose-500 shadow-sm"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
                <span className="text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 mt-1 leading-none">
                  {isAuthenticated ? user.name.split(' ')[0] : 'Profile'}
                </span>
              </button>

              {/* Profile Dropdown if logged in */}
              {isAuthenticated && userDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-56 bg-[#16161D] border border-white/10 rounded-2xl shadow-2xl z-50 p-2 text-white">
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="text-xs font-bold text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-gray-400 truncate">
                        {user.email || user.phone}
                      </p>
                    </div>
                    <Link
                      to="/orders"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Clock className="w-3.5 h-3.5 text-rose-400" />
                      <span>Order History</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-950/40 transition-colors mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* 2. Wishlist Button */}
            <button
              type="button"
              onClick={openWishlist}
              className="relative flex flex-col items-center justify-center text-gray-300 hover:text-white transition-colors group cursor-pointer"
              aria-label="Wishlist"
            >
              <div className="relative">
                <Heart className="w-5 h-5 text-gray-300 group-hover:text-rose-400 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#E11D48] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 mt-1 leading-none">
                Wishlist
              </span>
            </button>

            {/* 3. Cart Button */}
            <button
              type="button"
              onClick={openCartDrawer}
              className="relative flex flex-col items-center justify-center text-gray-300 hover:text-white transition-colors group cursor-pointer"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-gray-300 group-hover:text-rose-400 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#E11D48] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 mt-1 leading-none">
                Cart
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search input bar */}
        <div className="pb-3 pt-1 block sm:hidden">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search gourmet cuisines, restaurants..."
              className="w-full bg-[#16161D] text-white placeholder-gray-400 text-xs pl-11 pr-4 py-2.5 rounded-full border border-white/10 focus:outline-none focus:border-brand-500/60"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
