import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, ShoppingBag, Clock } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function MobileBottomNav() {
  const location = useLocation();
  const { bill, openCartDrawer } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200/80 px-4 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 text-xs font-semibold py-1 transition-colors ${
            location.pathname === '/' ? 'text-brand-600' : 'text-gray-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Explore</span>
        </Link>

        <button
          type="button"
          onClick={openCartDrawer}
          className="relative flex flex-col items-center gap-1 text-xs font-semibold py-1 text-gray-500 transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {bill.itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-brand-600 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {bill.itemCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </button>

        <Link
          to="/orders"
          className={`flex flex-col items-center gap-1 text-xs font-semibold py-1 transition-colors ${
            location.pathname.startsWith('/order') ? 'text-brand-600' : 'text-gray-500'
          }`}
        >
          <Clock className="w-5 h-5" />
          <span>Orders</span>
        </Link>
      </div>
    </div>
  );
}
