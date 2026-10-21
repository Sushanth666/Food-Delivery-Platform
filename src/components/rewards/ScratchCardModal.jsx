import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Coins, Gift, Award, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAuth } from '../../context/AuthContext';

export default function ScratchCardModal({ card, isOpen, onClose }) {
  const canvasRef = useRef(null);
  const { scratchCardWon } = useAuth();
  const [isRevealed, setIsRevealed] = useState(card?.isScratched || false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (!isOpen || !card) return;
    setIsRevealed(card.isScratched || false);

    // If not scratched yet, paint silver scratch foil on canvas
    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw metallic gradient foil
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#94A3B8');
      gradient.addColorStop(0.3, '#CBD5E1');
      gradient.addColorStop(0.6, '#64748B');
      gradient.addColorStop(1, '#94A3B8');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add pattern & text
      ctx.fillStyle = '#1E293B';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✨ SCRATCH HERE ✨', canvas.width / 2, canvas.height / 2 - 10);
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#334155';
      ctx.fillText('Swipe or click to reveal your reward', canvas.width / 2, canvas.height / 2 + 15);
    }, 100);

    return () => clearTimeout(timer);
  }, [isOpen, card]);

  const handleRevealAll = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }
    scratchCardWon(card.id);
  };

  const handleScratch = (e) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = ((clientX - rect.left) / rect.width) * canvas.width;
    const y = ((clientY - rect.top) / rect.height) * canvas.height;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2, false);
    ctx.fill();

    // After a few strokes, reveal fully
    if (Math.random() < 0.2) {
      handleRevealAll();
    }
  };

  if (!isOpen || !card) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm bg-[#13131A] border border-amber-500/40 rounded-3xl shadow-2xl p-6 z-10 text-center text-white overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🪙</span>
              <div className="text-left">
                <h3 className="text-sm font-black font-display text-white">
                  Mystery Scratch Card
                </h3>
                <p className="text-[10px] text-amber-300 font-semibold">
                  {card.title}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Scratch Area */}
          <div className="relative w-full h-56 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-inner bg-gradient-to-tr from-amber-950 via-black to-rose-950 flex flex-col items-center justify-center p-4 select-none">
            {/* The Hidden Prize Revealed Content */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-3xl shadow-lg shadow-amber-950/60 mb-2 animate-bounce-subtle">
                {card.icon || '🎁'}
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-300">
                Congratulations!
              </span>
              <div className="text-xl font-black font-display text-white mt-0.5">
                {card.prize}
              </div>
              {card.couponCode && (
                <div className="mt-2 px-3 py-1 bg-white/10 border border-white/20 rounded-xl text-xs font-mono font-bold text-rose-300">
                  Promo Code: <span className="text-white underline">{card.couponCode}</span>
                </div>
              )}
            </div>

            {/* Canvas Scratch Foil Layer */}
            {!isRevealed && (
              <canvas
                ref={canvasRef}
                width={300}
                height={220}
                onMouseDown={() => setIsDrawing(true)}
                onMouseUp={() => setIsDrawing(false)}
                onMouseMove={(e) => isDrawing && handleScratch(e)}
                onTouchStart={() => setIsDrawing(true)}
                onTouchEnd={() => setIsDrawing(false)}
                onTouchMove={(e) => handleScratch(e)}
                onClick={handleRevealAll}
                className="absolute inset-0 w-full h-full cursor-pointer touch-none z-10 transition-opacity"
              />
            )}
          </div>

          {/* Quick Reveal / Claim Button */}
          <div className="mt-4">
            {!isRevealed ? (
              <button
                type="button"
                onClick={handleRevealAll}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-950/50 transition-all cursor-pointer active:scale-95"
              >
                Instant Scratch & Reveal
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Claimed to Wallet</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
