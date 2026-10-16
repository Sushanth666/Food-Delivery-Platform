import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-[#0B0B0E] bg-dark-luxury text-white">
      <div className="max-w-md w-full bg-[#131319]/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl shadow-rose-950/40 text-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-950/60 to-purple-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400 mx-auto mb-6">
          <UtensilsCrossed className="w-10 h-10" />
        </div>
        <h1 className="text-5xl font-black font-display text-white tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-gray-200 mt-2">Page Not Found</h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-2">
          The delicious recipe or page you're searching for seems to have been eaten or relocated.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-rose-950/60 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
