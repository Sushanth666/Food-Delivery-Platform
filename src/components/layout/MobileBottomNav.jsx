import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Clock, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import UserAvatar from '../common/UserAvatar';

export default function MobileBottomNav() {
  const location = useLocation();
  const { bill, openCartDrawer } = useCart();
  const { user, isAuthenticated, openLoginModal } = useAuth();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2 shadow-2xl">
      <div className="flex items-center justify-around">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 text-[11px] font-bold py-1 transition-colors ${
            location.pathname === '/' ? 'text-rose-400' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Explore</span>
        </Link>

        <Link
          to="/orders"
          className={`flex flex-col items-center gap-1 text-[11px] font-bold py-1 transition-colors ${
            location.pathname.startsWith('/order') ? 'text-rose-400' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Clock className="w-5 h-5" />
          <span>Orders</span>
        </Link>

        <button
          type="button"
          onClick={openCartDrawer}
          className="relative flex flex-col items-center gap-1 text-[11px] font-bold py-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {bill.itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-rose-600 text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {bill.itemCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </button>

        {isAuthenticated ? (
          <Link
            to="/orders"
            className="flex flex-col items-center gap-1 text-[11px] font-bold py-1 text-gray-400 hover:text-white transition-colors"
          >
            <UserAvatar name={user.name} size="xs" />
            <span>{user.name.split(' ')[0]}</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={openLoginModal}
            className="flex flex-col items-center gap-1 text-[11px] font-bold py-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </div>
  );
}
