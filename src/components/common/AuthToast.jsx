import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AuthToast() {
  const { toast, hideToast } = useAuth();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      hideToast();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, hideToast]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] max-w-md w-[92%] sm:w-auto min-w-[340px]"
        >
          <div className="bg-[#14141C]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl shadow-black/80 flex items-start gap-3.5 text-white">
            {/* Status Icon */}
            <div className="flex-shrink-0 mt-0.5">
              {toast.type === 'success' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
              {toast.type === 'error' && (
                <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" />
                </div>
              )}
              {toast.type === 'info' && (
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Info className="w-5 h-5" />
                </div>
              )}
            </div>

            {/* Message Body */}
            <div className="flex-1 min-w-0 pr-2">
              <h4 className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
                {toast.title}
                {toast.type === 'success' && <Sparkles className="w-3.5 h-3.5 text-yellow-400" />}
              </h4>
              <p className="text-xs text-gray-300 font-medium mt-0.5 leading-relaxed">
                {toast.message}
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={hideToast}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
