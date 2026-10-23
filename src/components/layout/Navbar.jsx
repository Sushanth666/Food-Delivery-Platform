import React, { useState, useEffect } from 'react';
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
  Bell,
  Dices,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLocationContext } from '../../context/LocationContext';
import { useFilter } from '../../context/FilterContext';
import { EditProfileModal, OffersNotificationsModal, EnhancedSearchModal, CravingWheelModal } from '../modals';
import { UserAvatar } from '../ui';

export default function Navbar() {
  const {
    user,
    isAuthenticated,
    isGoldMember,
    walletCoins,
    openGoldModal,
    openRewardsHub,
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
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);

  // Global ⌘K / Ctrl+K keyboard shortcut to open enhanced search anywhere
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Total quantity of items in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Formatted location display matching screenshot
  const displayLocation = currentLocation?.area
    ? `${currentLocation.area.split(',')[0].trim()}, ${currentLocation.pincode || '10001'}`
    : 'Downtown NY, 10001';

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 gap-2 sm:gap-4 md:gap-5">
          {/* LEFT: Logo & Delivering To Pill */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-4 min-w-0">
            {/* CraveWave Brand Logo */}
            <Link to="/" className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 group shrink-0">
              <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#E11D48] via-rose-600 to-brand-700 flex items-center justify-center text-white shadow-md sm:shadow-lg shadow-rose-950/60 group-hover:scale-105 group-hover:rotate-3 transition-transform border border-white/10 shrink-0">
                <UtensilsCrossed className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-base xs:text-lg sm:text-2xl font-black font-display tracking-tight text-white group-hover:text-rose-300 transition-colors leading-none">
                  Crave<span className="text-[#E11D48]">Wave</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-rose-400 leading-none hidden sm:block mt-0.5">
                  Food Delivered Fast
                </span>
              </div>
            </Link>

            {/* Delivering To Pill */}
            <button
              type="button"
              onClick={openLocationModal}
              className="h-8 xs:h-9 sm:h-11 flex items-center gap-1 xs:gap-1.5 sm:gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-1.5 xs:px-2.5 sm:px-3.5 rounded-lg xs:rounded-xl sm:rounded-2xl text-left transition-all duration-200 group max-w-[105px] xs:max-w-[130px] sm:max-w-[200px] md:max-w-[240px] min-w-0 cursor-pointer"
              title="Change Delivery Location"
            >
              <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 text-white" />
              </div>
              <div className="flex flex-col min-w-0 pr-0.5 justify-center flex-1">
                <span className="text-[8px] sm:text-[10px] text-gray-400 font-medium leading-none hidden xs:block">
                  Delivering to:
                </span>
                <span className="text-[10px] xs:text-xs font-bold text-white truncate mt-0.5 leading-tight">
                  {displayLocation}
                </span>
              </div>
              <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-auto hidden xs:block" />
            </button>
          </div>

          {/* CENTER: Enhanced Expandable Search Trigger Pill (Desktop only) */}
          <div className="flex-1 max-w-sm lg:max-w-md mx-2 sm:mx-3 hidden lg:block">
            <button
              id="navbar-search-btn"
              type="button"
              onClick={() => setIsSearchModalOpen(true)}
              className="h-11 w-full group flex items-center justify-between gap-3 bg-[#14141C] hover:bg-[#1A1A24] border border-white/10 hover:border-rose-500/50 px-4 rounded-2xl transition-all duration-200 shadow-inner hover:shadow-lg hover:shadow-rose-950/40 cursor-pointer text-left"
              title="Search dishes, restaurants, cuisines (⌘K / Ctrl+K)"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Search className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 truncate font-medium">
                  {searchTerm ? `Searching: "${searchTerm}"` : 'Search dishes, restaurants...'}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <kbd className="hidden xl:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold text-gray-400 bg-white/5 border border-white/10 rounded-md group-hover:border-rose-500/40 group-hover:text-rose-300 transition-colors">
                  ⌘K
                </kbd>
              </div>
            </button>
          </div>

          {/* RIGHT: Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 shrink-0 no-scrollbar">
            {/* MOBILE ONLY (< sm): 1. Craving Roulette Wheel (🎰 Spin & Win) */}
            <button
              id="navbar-mobile-roulette-btn"
              type="button"
              onClick={() => setIsWheelOpen(true)}
              className="h-8 w-8 xs:h-9 xs:w-9 flex sm:hidden items-center justify-center gap-1.5 px-0 rounded-lg xs:rounded-xl bg-gradient-to-r from-purple-950/80 via-rose-950/60 to-amber-950/60 hover:from-purple-900 hover:to-amber-900 border border-amber-500/30 hover:border-amber-400 text-white shadow-md shadow-rose-950/40 transition-all active:scale-95 cursor-pointer shrink-0 group"
              title="Spin the Craving Roulette Wheel"
            >
              <span className="text-sm xs:text-base group-hover:rotate-180 transition-transform duration-500">🎰</span>
            </button>

            {/* MOBILE ONLY (< sm): 2. Offers & Notifications (🔔 Deals) */}
            <button
              id="navbar-mobile-offers-btn"
              type="button"
              onClick={() => setIsOffersOpen(true)}
              className="h-8 w-8 xs:h-9 xs:w-9 relative flex sm:hidden items-center justify-center gap-1.5 px-0 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-500/40 text-gray-200 hover:text-white transition-all active:scale-95 cursor-pointer shadow-xs shrink-0"
              title="Offers & Live Deals"
            >
              <div className="relative flex items-center justify-center">
                <Bell className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-rose-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500" />
              </div>
            </button>

            {/* TABLET & DESKTOP (>= sm): 1. CART BUTTON */}
            <button
              id="navbar-cart-button"
              type="button"
              onClick={openCartDrawer}
              className="h-9 md:h-10 lg:h-11 relative hidden sm:flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-3.5 lg:px-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs md:text-sm shadow-md shadow-rose-950/50 hover:shadow-rose-900/70 transition-all active:scale-95 cursor-pointer shrink-0 btn-shine"
              aria-label="Cart"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                {cartCount > 0 && (
                  <span 
                    key={cartCount}
                    className="absolute -top-2 -right-2.5 bg-white text-[#E11D48] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-bump"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="font-extrabold text-xs md:text-sm">Cart</span>
            </button>

            {/* TABLET & DESKTOP (>= sm): 2. CraveWave Gold VIP Membership Pill */}
            <button
              type="button"
              onClick={openGoldModal}
              className={`h-9 md:h-10 lg:h-11 relative hidden sm:flex items-center gap-1 md:gap-1.5 px-2 sm:px-2.5 md:px-3 rounded-xl md:rounded-2xl border transition-all cursor-pointer shrink-0 ${
                isGoldMember
                  ? 'gold-gradient-border text-amber-200 border-transparent shadow-lg shadow-amber-950/50 font-black'
                  : 'bg-amber-950/20 hover:bg-amber-950/40 border-amber-500/30 hover:border-amber-400 text-amber-200 hover:text-white'
              }`}
              title={isGoldMember ? "CraveWave Gold VIP Club Active" : "Upgrade to CraveWave Gold"}
            >
              <Crown className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isGoldMember ? 'text-amber-300 fill-amber-300 animate-pulse' : 'text-amber-400'}`} />
              <span className="text-[11px] md:text-xs font-black tracking-wide inline">
                {isGoldMember ? 'GOLD VIP' : 'Join Gold'}
              </span>
              {walletCoins > 0 && (
                <span className="hidden 2xl:inline-flex items-center gap-1 text-[10px] font-extrabold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-md border border-amber-500/30">
                  <Coins className="w-2.5 h-2.5" />
                  <span>{walletCoins}</span>
                </span>
              )}
            </button>

            {/* TABLET & DESKTOP (>= sm): 3. CraveCoins Rewards Hub Button */}
            <button
              type="button"
              onClick={openRewardsHub}
              className="h-9 md:h-10 lg:h-11 relative hidden sm:flex items-center gap-1 md:gap-1.5 px-2 sm:px-2.5 md:px-3 rounded-xl md:rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-white transition-all cursor-pointer shadow-xs shrink-0"
              title="Open CraveCoins & Rewards Hub"
            >
              <Coins className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 hover:rotate-12 transition-transform" />
              <span className="text-[11px] md:text-xs font-black tracking-wide inline">
                Rewards
              </span>
            </button>

            {/* TABLET & DESKTOP (>= sm): 4. WISHLIST BUTTON */}
            <button
              type="button"
              onClick={openWishlist}
              className="h-9 md:h-10 lg:h-11 relative hidden sm:flex items-center gap-1 md:gap-1.5 px-2 sm:px-2.5 md:px-3 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer shrink-0"
              aria-label="Wishlist"
              title="View Wishlist"
            >
              <div className="relative flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300 hover:text-rose-400 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E11D48] text-white text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] md:text-xs font-semibold text-gray-300 hover:text-white inline">
                Wishlist
              </span>
            </button>

            {/* TABLET & DESKTOP (>= sm): 5. SIGN IN / PROFILE BUTTON */}
            <div className="relative shrink-0 hidden sm:block">
              {isAuthenticated ? (
                <button
                  id="user-profile-btn"
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="h-9 md:h-10 lg:h-11 flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 rounded-xl md:rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all cursor-pointer shrink-0"
                  aria-label="Profile"
                >
                  <UserAvatar name={user.name} size="xs" />
                  <span className="text-xs font-bold text-gray-200 hover:text-white max-w-[85px] truncate">
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 hover:text-white transition-transform" />
                </button>
              ) : (
                <button
                  id="navbar-signin-btn"
                  type="button"
                  onClick={openLoginModal}
                  className="h-9 md:h-10 lg:h-11 flex items-center gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-4 rounded-xl md:rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white hover:text-rose-400 font-bold text-xs md:text-sm transition-all shadow-xs cursor-pointer shrink-0"
                >
                  <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400 hover:scale-110 transition-transform" />
                  <span className="text-xs md:text-sm font-bold">Sign In</span>
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

                    {/* Rewards Hub in Dropdown */}
                    <button
                      type="button"
                      onClick={() => {
                        openRewardsHub();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all mb-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Coins className="w-4 h-4 text-amber-400" />
                        <span>CraveCoins & Rewards</span>
                      </div>
                      <span className="text-[10px] font-black bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-300">
                        {walletCoins} Coins
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

        {/* Mobile & Tablet Search button */}
        <div className="pb-2.5 pt-0.5 sm:pb-3.5 sm:pt-1 block lg:hidden">
          <button
            type="button"
            onClick={() => setIsSearchModalOpen(true)}
            className="h-10 sm:h-11 w-full flex items-center justify-between gap-3 bg-[#14141C] hover:bg-[#1A1A24] border border-white/10 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl text-left cursor-pointer transition-colors shadow-inner"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Search className="w-4 h-4 text-rose-400 shrink-0" />
              <span className="text-xs sm:text-sm text-gray-400 truncate font-medium">
                {searchTerm ? `"${searchTerm}"` : 'Search dishes, restaurants, cuisines...'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-md">
                Search
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Edit Profile Details Modal */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />

      {/* Enhanced Omnisearch Modal */}
      <EnhancedSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        initialQuery={searchTerm}
      />

      {/* Craving Roulette Wheel Modal */}
      <CravingWheelModal
        isOpen={isWheelOpen}
        onClose={() => setIsWheelOpen(false)}
      />

      {/* Offers & Notifications Deals Modal */}
      <OffersNotificationsModal
        isOpen={isOffersOpen}
        onClose={() => setIsOffersOpen(false)}
      />
    </header>
  );
}
