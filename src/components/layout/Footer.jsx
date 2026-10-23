import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ShieldCheck, Zap, Award, Check, MapPin, Heart } from 'lucide-react';

const CITIES = [
  'Tiruppur',
  'Coimbatore',
  'Chennai',
  'Bengaluru',
  'Hyderabad',
  'Mumbai',
  'Delhi NCR',
  'Pune',
  'Kolkata',
  'Jaipur',
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 mt-auto mt-20 pt-16 pb-24 lg:pb-12 border-t border-gray-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-12 border-b border-gray-800/80">
          <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-2xl border border-gray-800/60">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">Superfast 30-Min Delivery</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Hot and fresh meals delivered straight to your doorstep with live GPS.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-2xl border border-gray-800/60">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">Strict Hygiene Standards</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                FSSAI-certified partner kitchens and 100% contactless delivery.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-2xl border border-gray-800/60">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">Finest Curated Menus</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Top rated regional gems, legendary biryani houses & iconic sweet shops.
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-800/80">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-brand-500/25">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="text-xl font-black font-display text-white tracking-tight">
                CraveWave
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4 max-w-xs">
              India's favorite food delivery experience. From royal curries to street chaat, feast like royalty.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>for food lovers in India</span>
            </div>
          </div>

          {/* Regional Cuisines */}
          <div>
            <h5 className="text-xs font-black text-white uppercase tracking-wider mb-4">
              Explore Cuisines
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Hyderabadi Dum Biryani
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Crispy Dosas & Filter Coffee
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Butter Chicken & Dal Makhani
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Mumbai Pav Bhaji & Chaat
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Kolkata Kathi Rolls & Mithai
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-black text-white uppercase tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">
                  Explore Restaurants
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-brand-400 transition-colors">
                  Live Orders & Tracking
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-brand-400 transition-colors">
                  My Cart & Bill
                </Link>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Restaurant Partner Signup
                </span>
              </li>
              <li>
                <span className="hover:text-brand-400 transition-colors cursor-pointer">
                  Safety & Hygiene Promise
                </span>
              </li>
              <li>
                <Link to="/admin" className="text-rose-400 hover:text-rose-300 font-bold transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                  <span>Admin Flow Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Offers */}
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-xs font-black text-white uppercase tracking-wider mb-4">
              Exclusive Indian Offers
            </h5>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Subscribe for weekly ₹100 discount drops, festival promotions & secret menus.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-gray-900 text-xs text-white px-3.5 py-2.5 rounded-xl border border-gray-800 focus:outline-none focus:border-brand-500 w-full placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="bg-brand-600 hover:bg-brand-500 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-xs flex-shrink-0 active:scale-95"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Welcome! ₹100 promo code sent to your email.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Cities We Deliver To */}
        <div className="py-6 border-b border-gray-800/80">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-500" />
            <span className="text-xs font-black uppercase text-gray-300 tracking-wider">
              Delivering Across Major Hubs in India:
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {CITIES.map((city, idx) => (
              <span
                key={city}
                className="px-2.5 py-1 rounded-lg bg-gray-900 text-gray-400 hover:text-brand-400 hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800/70"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CraveWave Technologies India Pvt. Ltd. All rights reserved.</p>

          <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
            <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
              UPI
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
              Google Pay
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
              PhonePe
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
              Paytm
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
              RuPay
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800">
              Net Banking
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
