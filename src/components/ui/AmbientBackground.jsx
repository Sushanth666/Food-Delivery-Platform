import React from 'react';

/**
 * AmbientBackground - Signature ambient animated glow orbs & particles
 * Provides a dynamic, luxury gourmet atmosphere across the entire application
 * with smooth GPU-accelerated floating motion.
 */
export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary Crimson Aurora Orb (Top Center-Right) */}
      <div 
        className="aurora-orb absolute -top-40 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-brand-600/30 to-brand-800/10"
        style={{ animationDuration: '14s' }}
      />

      {/* Secondary Amber/Gold Gourmet Flare (Mid Left) */}
      <div 
        className="aurora-orb absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-amber-500/15 via-rose-600/10 to-transparent"
        style={{ animationDuration: '18s', animationDirection: 'reverse' }}
      />

      {/* Tertiary Midnight Ruby Orb (Bottom Right) */}
      <div 
        className="aurora-orb absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-brand-500/15 via-purple-900/10 to-transparent"
        style={{ animationDuration: '22s' }}
      />

      {/* Floating subtle micro-shimmer dots */}
      <div 
        className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-brand-400/40 animate-ping"
        style={{ animationDuration: '4s' }}
      />
      <div 
        className="absolute top-[45%] right-[18%] w-1 h-1 rounded-full bg-amber-400/50 animate-ping"
        style={{ animationDuration: '5.5s', animationDelay: '1.2s' }}
      />
      <div 
        className="absolute top-[75%] left-[30%] w-1.5 h-1.5 rounded-full bg-rose-400/30 animate-ping"
        style={{ animationDuration: '6s', animationDelay: '2.5s' }}
      />
    </div>
  );
}
