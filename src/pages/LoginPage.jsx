import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  UtensilsCrossed,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const redirectPath = location.state?.from || '/';

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in both your email and password.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(email, password);
      setLoading(false);
      navigate(redirectPath, { replace: true });
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0B0B0E] bg-dark-luxury">
      {/* Ambient background blur circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Card Container in Midnight Crimson Dark Luxury Glass */}
        <div className="bg-[#131319]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-9 border border-white/10 shadow-2xl shadow-rose-950/50">
          {/* Logo & Heading */}
          <div className="text-center mb-7">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E11D48] via-rose-600 to-brand-700 flex items-center justify-center text-white shadow-lg shadow-rose-950/60 group-hover:scale-105 transition-transform border border-white/10">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-black font-display tracking-tight text-white leading-none">
                  Crave<span className="text-[#E11D48]">Wave</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mt-1">
                  Food Delivered Fast
                </span>
              </div>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight mt-2">
              Welcome Back
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
              Log in with your email to order your favorite Indian cuisines and track deliveries live
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Email & Password Login Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  autoFocus
                  className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-[#1A1A22] border border-white/10 focus:border-rose-500 focus:bg-[#20202A] text-sm font-semibold text-white focus:outline-none focus:ring-4 focus:ring-rose-500/20 transition-all placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-gray-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setError('Password reset instructions sent to your email.')}
                  className="text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-2xl bg-[#1A1A22] border border-white/10 focus:border-rose-500 focus:bg-[#20202A] text-sm font-semibold text-white focus:outline-none focus:ring-4 focus:ring-rose-500/20 transition-all placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-white/20 bg-[#1A1A22] text-rose-600 focus:ring-rose-500"
                />
                <span>Keep me signed in on this device</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-950/60 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              {loading ? (
                <span>Signing In...</span>
              ) : (
                <>
                  <span>Log In to CraveWave</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Signup */}
          <div className="text-center text-xs text-gray-400 mt-6 pt-6 border-t border-white/10">
            Don't have an account yet?{' '}
            <Link
              to="/signup"
              className="text-rose-400 font-bold hover:text-rose-300 underline underline-offset-4"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
