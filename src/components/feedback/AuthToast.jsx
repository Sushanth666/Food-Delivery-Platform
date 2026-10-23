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
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, hideToast]);

  return (
    <AnimatePresence>
      {toast && (
        <div className="fixed top-20 sm:top-24 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ type: 'spring', damping: 26, stiffness: 360 }}
            className="pointer-events-auto w-full max-w-md sm:max-w-lg shadow-2xl shadow-black/90"
          >
            <div className="bg-[#14141C]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-4.5 flex items-start gap-3.5 text-white shadow-2xl">
              {/* Status Icon */}
              <div className="flex-shrink-0 mt-0.5">
                {toast.type === 'success' && (
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                )}
                {toast.type === 'warning' && (
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-xs">
                    <AlertCircle className="w-5 h-5 stroke-[2.2]" />
                  </div>
                )}
                {toast.type === 'error' && (
                  <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center shadow-xs">
                    <AlertCircle className="w-5 h-5 stroke-[2.2]" />
                  </div>
                )}
                {toast.type === 'info' && (
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center shadow-xs">
                    <Info className="w-5 h-5 stroke-[2.2]" />
                  </div>
                )}
              </div>

              {/* Message Body */}
              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-sm font-black tracking-tight text-white flex items-center gap-1.5 flex-wrap">
                  <span>{toast.title}</span>
                  {toast.type === 'success' && (
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 inline-block fill-amber-400" />
                  )}
                </h4>
                <p className="text-xs text-gray-300 font-medium mt-1 leading-relaxed break-words">
                  {toast.message}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={hideToast}
                className="text-gray-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

