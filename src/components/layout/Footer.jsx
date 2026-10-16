import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Heart, ShieldCheck, Zap, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20 pt-16 pb-24 md:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Superfast 30-Min Delivery</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Hot and fresh meals delivered straight to your doorstep.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Strict Hygiene Standards</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Verified safety-certified kitchens and contactless delivery.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Best Curated Menus</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Top rated local favorites, artisanal bakeries, and gourmet chefs.
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                CraveWave
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Crafting delightful culinary journeys through fast, seamless, and joyful food delivery.
            </p>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} CraveWave Inc. All rights reserved.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore Cuisines
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Artisan Woodfired Pizza
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Charcoal Smashed Burgers
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Royal Dum Biryani
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Kyoto Ramen & Sushi
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  French Patisserie & Desserts
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">
                  Explore Restaurants
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-brand-400 transition-colors">
                  Order Tracking & History
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-brand-400 transition-colors">
                  My Shopping Cart
                </Link>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Partner with CraveWave
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Stay in the Loop
            </h5>
            <p className="text-xs text-gray-400 mb-3">
              Subscribe for exclusive secret menu drops and $10 flash discount vouchers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-gray-800 text-xs text-white px-3 py-2 rounded-xl border border-gray-700 focus:outline-none focus:border-brand-500 w-full"
              />
              <button
                type="button"
                className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
