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
  Zap,
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
    loginWithPhone,
    signup,
    demoLogin,
  } = useAuth();

  // Login form state
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' | 'phone'
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginPhone, setLoginPhone] = useState('');
  const [loginOtp, setLoginOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
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

    if (loginMethod === 'email') {
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
    } else {
      if (!loginPhone.trim()) {
        setError('Please enter your mobile phone number.');
        return;
      }
      if (!otpSent) {
        setOtpSent(true);
        setError('');
        return;
      }
      if (!loginOtp.trim()) {
        setError('Please enter the OTP sent to your phone (Use 1234).');
        return;
      }

      setLoading(true);
      setTimeout(() => {
        loginWithPhone(loginPhone, loginOtp);
        setLoading(false);
        closeAuthModal();
      }, 400);
    }
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

  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      demoLogin();
      setLoading(false);
      closeAuthModal();
    }, 300);
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
              {/* One-Click Demo Login */}
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full mb-4 py-2.5 px-3 rounded-2xl bg-gradient-to-r from-rose-900/40 via-purple-900/30 to-brand-900/40 hover:from-rose-900/60 hover:to-brand-900/60 border border-rose-500/30 text-rose-200 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group"
              >
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
                <span>One-Click Demo Foodie Login</span>
              </button>

              {/* Email / Phone Toggle */}
              <div className="grid grid-cols-2 gap-2 mb-3.5">
                <button
                  type="button"
                  onClick={() => setLoginMethod('email')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    loginMethod === 'email'
                      ? 'bg-white/10 text-white border border-white/15'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  Email & Password
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('phone')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    loginMethod === 'phone'
                      ? 'bg-white/10 text-white border border-white/15'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  Mobile OTP 🇮🇳
                </button>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                {loginMethod === 'email' ? (
                  <>
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
                          className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type={showLoginPassword ? 'text' : 'password'}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showLoginPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
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
                          value={loginPhone}
                          onChange={(e) => setLoginPhone(e.target.value)}
                          placeholder="98765 43210"
                          className="w-full pl-3 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-r-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                        />
                      </div>
                    </div>

                    {otpSent && (
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">
                          Enter 4-Digit OTP (Use 1234)
                        </label>
                        <input
                          type="text"
                          maxLength={6}
                          value={loginOtp}
                          onChange={(e) => setLoginOtp(e.target.value)}
                          placeholder="1234"
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-center text-sm font-black tracking-widest text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 transition-colors"
                        />
                      </div>
                    )}
                  </>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-950/60 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>
                    {loading
                      ? 'Authenticating...'
                      : loginMethod === 'phone' && !otpSent
                      ? 'Get OTP on Mobile'
                      : 'Log In to CraveWave'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Social Login Buttons */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold text-gray-400">
                  <span className="bg-[#13131A] px-2.5">or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.1-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.5s.7 4.8 1.9 7.2l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 17c1.8 3.7 5.6 6.5 10.1 6.5z"
                    />
                  </svg>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.8 1.11-1.92.99-3.04-1 .04-2.17.67-2.85 1.47-.6.69-1.13 1.83-1 2.93 1.13.09 2.24-.58 2.86-1.36z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              {/* Switch to Signup */}
              <div className="text-center text-xs text-gray-400">
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
                      placeholder="e.g. Sushanth Kumar"
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
