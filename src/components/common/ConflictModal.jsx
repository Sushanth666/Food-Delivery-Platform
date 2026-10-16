import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ConflictModal() {
  const {
    conflictModal,
    currentRestaurant,
    confirmSwitchRestaurantAndAdd,
    cancelSwitchRestaurant,
  } = useCart();

  if (!conflictModal.isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={cancelSwitchRestaurant}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#14141C] text-white rounded-2xl shadow-2xl p-6 overflow-hidden z-10 border border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Replace items in cart?
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Your cart currently contains dishes from{' '}
                <span className="font-semibold text-white">
                  {currentRestaurant?.name}
                </span>
                . Adding this item from{' '}
                <span className="font-semibold text-rose-400">
                  {conflictModal.pendingRestaurant?.name}
                </span>{' '}
                will reset your cart.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
            <button
              type="button"
              onClick={cancelSwitchRestaurant}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 text-sm font-semibold text-gray-300 hover:bg-white/10 transition-colors"
            >
              Keep Current Cart
            </button>
            <button
              type="button"
              onClick={confirmSwitchRestaurantAndAdd}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-sm font-semibold text-white shadow-lg shadow-rose-950/50 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Discard & Add New</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
