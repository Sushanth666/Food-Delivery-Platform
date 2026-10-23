import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  ShoppingBag,
  Clock,
  User,
  X,
  Crown,
  Coins,
  UserCog,
  LogOut,
  ChevronRight,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { UserAvatar } from '../ui';
import { EditProfileModal } from '../modals';

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bill, openCartDrawer } = useCart();
  const {
    user,
    isAuthenticated,
    openLoginModal,
    openLogoutModal,
    isGoldMember,
    walletCoins,
    openGoldModal,
    openRewardsHub,
  } = useAuth();

  const [isProfileSheetOpen, setIsProfileSheetOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const primaryAddress = user?.savedAddresses?.[0] || null;

  return (
    <>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2 shadow-2xl">
        <div className="flex items-center justify-around max-w-xl mx-auto">
          {/* 1. Explore Tab */}
          <Link
            to="/"
            onClick={() => setIsProfileSheetOpen(false)}
            className={`flex flex-col items-center gap-1 text-[11px] sm:text-xs font-bold py-1 transition-colors ${
              location.pathname === '/' ? 'text-rose-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            <span>Explore</span>
          </Link>

          {/* 2. Orders Tab */}
          <Link
            to="/orders"
            onClick={() => setIsProfileSheetOpen(false)}
            className={`flex flex-col items-center gap-1 text-[11px] sm:text-xs font-bold py-1 transition-colors ${
              location.pathname.startsWith('/order') && !isProfileSheetOpen
                ? 'text-rose-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Clock className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            <span>Orders</span>
          </Link>

          {/* 3. Cart Tab */}
          <button
            type="button"
            onClick={() => {
              setIsProfileSheetOpen(false);
              openCartDrawer();
            }}
            className="relative flex flex-col items-center gap-1 text-[11px] sm:text-xs font-bold py-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              {bill.itemCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-rose-600 text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {bill.itemCount}
                </span>
              )}
            </div>
            <span>Cart</span>
          </button>

          {/* 4. Profile Button */}
          {isAuthenticated ? (
            <button
              id="mobile-profile-btn"
              type="button"
              onClick={() => setIsProfileSheetOpen((prev) => !prev)}
              className={`flex flex-col items-center gap-1 text-[11px] sm:text-xs font-bold py-1 transition-colors cursor-pointer ${
                isProfileSheetOpen ? 'text-rose-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="relative">
                <UserAvatar name={user.name} size="xs" />
                {isGoldMember && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-[#0B0B0E]" />
                )}
              </div>
              <span className="max-w-[70px] truncate">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={openLoginModal}
              className="flex flex-col items-center gap-1 text-[11px] sm:text-xs font-bold py-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <User className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Profile Slide-up Bottom Sheet */}
      <AnimatePresence>
        {isProfileSheetOpen && isAuthenticated && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileSheetOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Bottom Sheet Card */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full bg-[#131319] border-t border-white/10 rounded-t-[32px] p-5 pb-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Swipe handle pill */}
              <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-4" />

              {/* User Profile Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <UserAvatar name={user.name} size="md" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#131319] rounded-full" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-white truncate">
                      {user.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate font-medium">
                      {user.email || user.phone}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsProfileSheetOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close profile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* VIP Gold & CraveCoins Cards Row */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {/* Gold VIP Card */}
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileSheetOpen(false);
                    openGoldModal();
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isGoldMember
                      ? 'bg-gradient-to-br from-amber-950/60 to-purple-950/40 border-amber-500/40 text-amber-300'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      {isGoldMember ? 'Active' : 'VIP Club'}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-white leading-tight">
                      {isGoldMember ? 'Gold Member' : 'Join Gold VIP'}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {isGoldMember ? 'Free delivery on all orders' : '0₹ Delivery + 30% OFF'}
                    </p>
                  </div>
                </button>

                {/* CraveCoins Balance Card */}
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileSheetOpen(false);
                    openRewardsHub();
                  }}
                  className="p-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/30 text-left transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-black bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-300">
                      {walletCoins}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-amber-300 leading-tight">
                      CraveCoins Hub
                    </p>
                    <p className="text-[10px] text-amber-400/80 mt-0.5">
                      Spin & win free treats
                    </p>
                  </div>
                </button>
              </div>

              {/* Menu Navigation Options */}
              <div className="space-y-1.5 mb-5">
                {/* 1. Edit Profile Details */}
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileSheetOpen(false);
                    setIsEditProfileOpen(true);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                      <UserCog className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Edit Profile Details</p>
                      <p className="text-[10px] text-gray-400">Name, avatar color, address & contact</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* 2. Order History */}
                <button
                  type="button"
                  onClick={() => {
                    setIsProfileSheetOpen(false);
                    navigate('/orders');
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Order History & Tracking</p>
                      <p className="text-[10px] text-gray-400">Past meals, live track & instant re-order</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* 3. Delivery Address Preview */}
                {primaryAddress && (
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white">
                          Delivery Address
                        </span>
                        <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                          {primaryAddress.tag || 'Primary'}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 truncate mt-0.5">
                        {primaryAddress.line}, {primaryAddress.city} {primaryAddress.pincode}
                      </p>
                    </div>
                  </div>
                )}

                {/* 4. Safety & Support */}
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">24/7 Foodie Support</p>
                      <p className="text-[10px] text-gray-400">Safe payments & express kitchen hygiene</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Live
                  </span>
                </div>
              </div>

              {/* Log Out Button */}
              <button
                type="button"
                onClick={() => {
                  setIsProfileSheetOpen(false);
                  openLogoutModal();
                }}
                className="w-full py-3 rounded-2xl bg-rose-950/40 hover:bg-rose-950/60 border border-rose-800/40 text-rose-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-rose-400" />
                <span>Log Out of CraveWave</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Profile Details Modal triggered from mobile */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />
    </>
  );
}
