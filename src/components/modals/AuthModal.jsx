import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UtensilsCrossed,
  X,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  User,
  Gift,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModal() {
  const {
    isAuthModalOpen,
    authModalTab,
    setAuthModalTab,
    closeAuthModal,
    login,
    signup,
  } = useAuth();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Clear errors on tab change
  useEffect(() => {
    setError('');
  }, [authModalTab]);

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setError('Please fill in both your email and password.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(loginEmail, loginPassword);
      setLoading(false);
      closeAuthModal();
    }, 400);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!signupName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!signupEmail.trim() || !/\S+@\S+\.\S+/.test(signupEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!signupPhone.trim()) {
      setError('Please enter your mobile phone number.');
      return;
    }
    if (!signupPassword || signupPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      signup({
        name: signupName,
        email: signupEmail,
        phone: signupPhone,
        password: signupPassword,
      });
      setLoading(false);
      closeAuthModal();
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAuthModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-md bg-[#13131A] border border-white/15 rounded-3xl p-6 sm:p-7 text-white shadow-2xl shadow-black/95 z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeAuthModal}
            className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center mb-5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#E11D48] via-rose-600 to-brand-700 flex items-center justify-center text-white shadow-lg shadow-rose-950/70 border border-white/10 mb-2.5">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black font-display text-white tracking-tight">
              {authModalTab === 'login' ? 'Welcome Back to CraveWave' : 'Create Your CraveWave Account'}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {authModalTab === 'login'
                ? 'Sign in to track orders, manage addresses & wishlist'
                : 'Join now and get ₹100 discount coupon on your first order'}
            </p>
          </div>

          {/* Tab Switcher: Login / Create Account */}
          <div className="flex items-center p-1 bg-white/5 rounded-2xl mb-5 border border-white/10">
            <button
              type="button"
              onClick={() => setAuthModalTab('login')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                authModalTab === 'login'
                  ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-md shadow-rose-950/60'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => setAuthModalTab('signup')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                authModalTab === 'signup'
                  ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-md shadow-rose-950/60'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
              {error}
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 1: LOGIN FORM                                       */}
          {/* ======================================================== */}
          {authModalTab === 'login' ? (
            <div>
              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="name@example.com"
                      autoFocus
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-gray-300">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setError('Password reset instructions sent to your email.')}
                      className="text-[11px] font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type={showLoginPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                      aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                    >
                      {showLoginPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-950/60 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Authenticating...' : 'Log In to CraveWave'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Switch to Signup */}
              <div className="text-center text-xs text-gray-400 mt-6 pt-4 border-t border-white/10">
                Don't have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => setAuthModalTab('signup')}
                  className="text-rose-400 font-bold hover:text-rose-300 underline underline-offset-4 cursor-pointer"
                >
                  Create Account Now
                </button>
              </div>
            </div>
          ) : (
            /* ======================================================== */
            /* TAB 2: CREATE ACCOUNT FORM                              */
            /* ======================================================== */
            <div>
              {/* Promo offer badge */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gradient-to-r from-rose-950/40 to-brand-950/40 border border-rose-500/30 mb-4">
                <Gift className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-xs text-rose-200 font-medium">
                  Flat <strong>₹100 OFF coupon</strong> automatically unlocked upon signup!
                </span>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      placeholder="sushanth"
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Mobile Number
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-white/10 bg-white/5 text-xs text-gray-400 font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full pl-3 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-r-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showSignupPassword ? 'text' : 'password'}
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="Min 6 chars"
                        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Confirm
                    </label>
                    <div className="relative">
                      <input
                        type={showSignupPassword ? 'text' : 'password'}
                        value={signupConfirmPassword}
                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                        placeholder="Repeat password"
                        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-950/60 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{loading ? 'Creating Account...' : 'Create My Foodie Account'}</span>
                </button>
              </form>

              {/* Switch to Login */}
              <div className="text-center text-xs text-gray-400 mt-4">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthModalTab('login')}
                  className="text-rose-400 font-bold hover:text-rose-300 underline underline-offset-4 cursor-pointer"
                >
                  Log In Now
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
