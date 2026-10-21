import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  ChevronRight,
  Heart,
  ShoppingBag,
  User,
  UserCog,
  LogOut,
  Clock,
  ChevronDown,
  UtensilsCrossed,
  Crown,
  Coins,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLocationContext } from '../../context/LocationContext';
import { useFilter } from '../../context/FilterContext';
import EditProfileModal from '../common/EditProfileModal';
import UserAvatar from '../common/UserAvatar';

export default function Navbar() {
  const {
    user,
    isAuthenticated,
    isGoldMember,
    walletCoins,
    openGoldModal,
    openLoginModal,
    openLogoutModal,
  } = useAuth();
  const { cartItems, openCartDrawer } = useCart();
  const { wishlistCount, openWishlist } = useWishlist();
  const { currentLocation, openLocationModal } = useLocationContext();
  const { searchTerm, setSearchTerm } = useFilter();
  const navigate = useNavigate();

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

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
            {/* CraveWave Brand Logo (Previous Logo with Current Theme Color) */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#E11D48] via-rose-600 to-brand-700 flex items-center justify-center text-white shadow-lg shadow-rose-950/60 group-hover:scale-105 transition-transform border border-white/10">
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-white group-hover:text-rose-300 transition-colors leading-none">
                  Crave<span className="text-[#E11D48]">Wave</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-rose-400 mt-1">
                  Food Delivered Fast
                </span>
              </div>
            </Link>

            {/* Delivering To Pill */}
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

          {/* CENTER: Search Bar */}
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

          {/* RIGHT: Actions with Cart and Sign In places exchanged */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* 1. CART BUTTON (Now on the Left) */}
            <button
              id="navbar-cart-button"
              type="button"
              onClick={openCartDrawer}
              className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-950/50 hover:shadow-rose-900/70 transition-all active:scale-95 cursor-pointer group"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-white text-[#E11D48] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="font-extrabold text-xs sm:text-sm">Cart</span>
            </button>

            {/* CraveWave Gold VIP Membership Pill */}
            <button
              type="button"
              onClick={openGoldModal}
              className={`relative flex items-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-2xl border transition-all cursor-pointer group ${
                isGoldMember
                  ? 'bg-gradient-to-r from-amber-950/60 via-yellow-950/40 to-amber-950/60 border-amber-500/40 text-amber-300 hover:border-amber-400 shadow-md shadow-amber-950/40'
                  : 'bg-amber-950/20 hover:bg-amber-950/40 border-amber-500/30 hover:border-amber-400 text-amber-200 hover:text-white'
              }`}
              title={isGoldMember ? "CraveWave Gold VIP Club Active" : "Upgrade to CraveWave Gold"}
            >
              <Crown className={`w-4 h-4 ${isGoldMember ? 'text-amber-400 fill-amber-400/30 animate-pulse' : 'text-amber-400'}`} />
              <span className="text-xs font-black tracking-wide inline">
                {isGoldMember ? 'GOLD VIP' : 'Join Gold'}
              </span>
              {walletCoins > 0 && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-md border border-amber-500/30">
                  <Coins className="w-2.5 h-2.5" />
                  <span>{walletCoins}</span>
                </span>
              )}
            </button>

            {/* 2. WISHLIST BUTTON (Center) */}
            <button
              type="button"
              onClick={openWishlist}
              className="relative flex items-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer group"
              aria-label="Wishlist"
              title="View Wishlist"
            >
              <div className="relative">
                <Heart className="w-4 h-4 text-gray-300 group-hover:text-rose-400 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E11D48] text-white text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold text-gray-300 group-hover:text-white hidden md:inline">
                Wishlist
              </span>
            </button>

            {/* 3. SIGN IN / PROFILE BUTTON (Now on the Right) */}
            <div className="relative">
              {isAuthenticated ? (
                <button
                  id="user-profile-btn"
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 sm:py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all cursor-pointer group"
                  aria-label="Profile"
                >
                  <UserAvatar name={user.name} size="xs" />
                  <span className="text-xs font-bold text-gray-200 group-hover:text-white max-w-[85px] truncate">
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform" />
                </button>
              ) : (
                <button
                  id="navbar-signin-btn"
                  type="button"
                  onClick={openLoginModal}
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white hover:text-rose-400 font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer group"
                >
                  <User className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold">Sign In</span>
                </button>
              )}

              {/* Profile Dropdown if logged in */}
              {isAuthenticated && userDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-64 bg-[#14141C]/95 border border-white/15 rounded-2xl shadow-2xl z-50 p-2.5 text-white backdrop-blur-xl">
                    {/* User Profile Header with Avatar */}
                    <div className="flex items-center gap-3 px-2.5 py-2.5 border-b border-white/10 mb-1.5 bg-white/[0.02] rounded-xl">
                      <div className="relative flex-shrink-0">
                        <UserAvatar name={user.name} size="lg" />
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#14141C] rounded-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black text-white truncate">
                          {user.name}
                        </p>
                        <p className="text-[11px] text-gray-400 truncate">
                          {user.email || user.phone}
                        </p>
                      </div>
                    </div>

                    {/* Gold Membership Status & Upgrade Option */}
                    <button
                      type="button"
                      onClick={() => {
                        openGoldModal();
                        setUserDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all mb-1 cursor-pointer ${
                        isGoldMember
                          ? 'bg-amber-950/40 border border-amber-500/40 text-amber-300'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Crown className="w-4 h-4 text-amber-400" />
                        <span>{isGoldMember ? 'Gold VIP Active' : 'Join CraveWave Gold'}</span>
                      </div>
                      <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        {isGoldMember ? 'VIP' : 'Upgrade'}
                      </span>
                    </button>

                    {/* Edit Profile Button */}
                    <button
                      id="edit-profile-btn"
                      type="button"
                      onClick={() => {
                        setIsEditProfileOpen(true);
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <UserCog className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                      <span>Edit Profile Details</span>
                    </button>

                    {/* Order History */}
                    <Link
                      to="/orders"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <Clock className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                      <span>Order History</span>
                    </Link>

                    {/* Logout */}
                    <button
                      id="navbar-logout-btn"
                      type="button"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        openLogoutModal();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/40 transition-colors mt-1 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </>
              )}
            </div>
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

      {/* Edit Profile Details Modal */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />
    </header>
  );
}
