import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mx-auto mb-6">
        <UtensilsCrossed className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-black text-gray-900 tracking-tight">404</h1>
      <h2 className="text-xl font-bold text-gray-800 mt-2">Page Not Found</h2>
      <p className="text-xs sm:text-sm text-gray-500 mt-2">
        The delicious recipe or page you're searching for seems to have been eaten or relocated.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 text-white font-bold text-xs shadow-md shadow-brand-500/20"
      >
        <Home className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
