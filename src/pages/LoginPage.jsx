import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  UtensilsCrossed,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Zap,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loginWithPhone, demoLogin } = useAuth();

  const [activeTab, setActiveTab] = useState('email'); // 'email' | 'phone'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
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

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setError('');

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!otpSent) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOtpSent(true);
      }, 700);
    } else {
      if (otp.length < 4) {
        setError('Please enter the 4-digit verification code.');
        return;
      }
      setLoading(true);
      setTimeout(() => {
        loginWithPhone(phone, otp);
        setLoading(false);
        navigate(redirectPath, { replace: true });
      }, 600);
    }
  };

  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      demoLogin();
      setLoading(false);
      navigate(redirectPath, { replace: true });
    }, 500);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background blur circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-600/15 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Card Container */}
        <div className="glass-card bg-white/95 rounded-3xl p-6 sm:p-9 border border-gray-100 shadow-2xl shadow-rose-950/10">
          {/* Logo & Heading */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-brand-500/30 group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-black font-display tracking-tight bg-gradient-to-r from-gray-950 via-gray-800 to-brand-600 bg-clip-text text-transparent leading-none">
                  CraveWave
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 mt-1">
                  Food Delivered Fast
                </span>
              </div>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-black font-display text-gray-900 tracking-tight mt-2">
              Welcome Back
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Log in to order your favorite Indian cuisines and track deliveries live
            </p>
          </div>

          {/* Quick Demo One-Click Login Pill */}
          <div className="mb-6">
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200/80 hover:border-brand-500 text-brand-700 font-bold text-xs flex items-center justify-center gap-2 transition-all hover:shadow-sm active:scale-95 group"
            >
              <Zap className="w-4 h-4 text-brand-600 fill-brand-600 group-hover:scale-110 transition-transform" />
              <span>⚡ One-Click Demo Foodie Login</span>
            </button>
          </div>

          {/* Tab Switcher: Email vs Phone OTP */}
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-gray-100/80 mb-6 text-xs font-bold text-gray-600">
            <button
              type="button"
              onClick={() => {
                setActiveTab('email');
                setError('');
              }}
              className={`py-2 rounded-xl transition-all ${
                activeTab === 'email'
                  ? 'bg-white text-gray-950 shadow-xs font-extrabold'
                  : 'hover:text-gray-900'
              }`}
            >
              Email & Password
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('phone');
                setError('');
              }}
              className={`py-2 rounded-xl transition-all ${
                activeTab === 'phone'
                  ? 'bg-white text-gray-950 shadow-xs font-extrabold'
                  : 'hover:text-gray-900'
              }`}
            >
              Mobile OTP 🇮🇳
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Tab 1: Email Form */}
          {activeTab === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
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
                    className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      alert('Password reset link simulated: Please check your email inbox.')
                    }
                    className="text-[11px] font-bold text-brand-600 hover:text-brand-700 hover:underline"
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
                    className="w-full pl-10 pr-10 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center pt-1">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-gray-300"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs font-semibold text-gray-600 cursor-pointer"
                >
                  Keep me signed in on this device
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-700 hover:to-rose-700 text-white font-extrabold text-sm shadow-md shadow-brand-500/25 transition-all hover:shadow-lg hover:shadow-brand-500/35 active:scale-98 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Log In to CraveWave</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Tab 2: Phone OTP Form */
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Mobile Number
                </label>
                <div className="flex rounded-2xl border border-gray-200 overflow-hidden focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/10 transition-all bg-gray-50 focus-within:bg-white">
                  <div className="bg-gray-100 px-3 flex items-center text-xs font-bold text-gray-700 border-r border-gray-200">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    maxLength={10}
                    required
                    disabled={otpSent}
                    className="w-full px-3.5 py-3 text-sm font-semibold text-gray-900 focus:outline-none bg-transparent placeholder:text-gray-400 placeholder:font-normal"
                  />
                </div>
              </div>

              {otpSent && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-gray-700">
                      Enter 4-Digit OTP
                    </label>
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      OTP Sent to +91 {phone}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP (e.g. 1234)"
                    maxLength={6}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-center tracking-widest text-lg font-black text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all"
                  />
                  <p className="text-[11px] text-gray-500 mt-1 text-center">
                    Demo OTP code: Enter any 4 digits (e.g. <strong>1234</strong>)
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-700 hover:to-rose-700 text-white font-extrabold text-sm shadow-md shadow-brand-500/25 transition-all hover:shadow-lg hover:shadow-brand-500/35 active:scale-98 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : otpSent ? (
                  <>
                    <span>Verify & Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Sign-in Divider */}
          <div className="mt-7 pt-6 border-t border-gray-100 text-center">
            <span className="text-xs font-semibold text-gray-400">
              Or quick connect with
            </span>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="py-2.5 px-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 flex items-center justify-center gap-2 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={handleDemoLogin}
                className="py-2.5 px-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 flex items-center justify-center gap-2 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.02-.49 2.64-1.24z" />
                </svg>
                <span>Apple</span>
              </button>
            </div>
          </div>

          {/* Footer Link to Signup */}
          <div className="mt-6 text-center text-xs font-semibold text-gray-500">
            Don't have an account yet?{' '}
            <Link
              to="/signup"
              state={{ from: redirectPath }}
              className="text-brand-600 font-extrabold hover:text-brand-700 hover:underline"
            >
              Sign up for free →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
