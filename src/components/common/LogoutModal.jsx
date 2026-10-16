import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, X, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getIndianAvatarByName } from '../../utils/indianAvatars';

export default function LogoutModal() {
  const { user, isLogoutModalOpen, closeLogoutModal, confirmLogout } = useAuth();

  if (!isLogoutModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLogoutModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-sm bg-[#14141C] border border-white/15 rounded-3xl p-6 text-white shadow-2xl shadow-black/90 z-10 overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-rose-600/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close Icon */}
          <button
            type="button"
            onClick={closeLogoutModal}
            className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600/30 to-brand-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto mb-4 shadow-lg shadow-rose-950/40">
            <LogOut className="w-7 h-7" />
          </div>

          {/* Heading */}
          <div className="text-center mb-5">
            <h3 className="text-xl font-black font-display text-white tracking-tight">
              Log Out of CraveWave?
            </h3>
            <p className="text-xs text-gray-400 font-medium mt-1.5 leading-relaxed">
              You will need to sign back in to access your saved addresses, orders, and wishlist.
            </p>
          </div>

          {/* Current User Card */}
          {user && (
            <div className="flex items-center gap-3 p-3 bg-white/[0.04] border border-white/10 rounded-2xl mb-6">
              <img
                src={user.avatar || getIndianAvatarByName(user.name)}
                alt={user.name}
                className="w-10 h-10 rounded-xl object-cover border border-rose-500 shadow-xs"
              />
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs font-bold text-white truncate">{user.name}</p>
                <p className="text-[11px] text-gray-400 truncate">{user.email || user.phone}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={closeLogoutModal}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-gray-200 hover:text-white transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              id="confirm-logout-btn"
              type="button"
              onClick={confirmLogout}
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-xs font-bold text-white shadow-lg shadow-rose-950/60 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
