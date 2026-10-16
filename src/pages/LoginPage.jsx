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

    if (!phone.trim()) {
      setError('Please enter your 10-digit mobile number.');
      return;
    }

    if (!otpSent) {
      // Simulate sending OTP
      setLoading(true);
      setTimeout(() => {
        setOtpSent(true);
        setLoading(false);
      }, 600);
    } else {
      // Verify OTP
      if (otp.length < 4) {
        setError('Please enter the 4 or 6-digit OTP sent to your phone.');
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
              Log in to order your favorite Indian cuisines and track deliveries live
            </p>
          </div>

          {/* Quick Demo One-Click Login Pill */}
          <div className="mb-6">
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-rose-950/60 to-purple-950/40 border border-rose-800/50 hover:border-rose-500 text-rose-200 font-bold text-xs flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-rose-950/50 active:scale-95 group cursor-pointer"
            >
              <Zap className="w-4 h-4 text-rose-400 fill-rose-400 group-hover:scale-110 transition-transform" />
              <span>⚡ One-Click Demo Foodie Login</span>
            </button>
          </div>

          {/* Tab Switcher: Email vs Phone OTP */}
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-[#1C1C24] border border-white/10 mb-6 text-xs font-bold">
            <button
              type="button"
              onClick={() => {
                setActiveTab('email');
                setError('');
              }}
              className={`py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'email'
                  ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-md shadow-rose-950/60 font-black'
                  : 'text-gray-400 hover:text-white'
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
              className={`py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'phone'
                  ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-md shadow-rose-950/60 font-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mobile OTP 🇮🇳
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Tab 1: Email Form */}
          {activeTab === 'email' ? (
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
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
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
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-950/60 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
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
          ) : (
            /* Tab 2: Indian Phone OTP Form */
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  Mobile Number (India)
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-3 rounded-2xl bg-[#1A1A22] border border-white/10 text-white text-xs font-bold flex-shrink-0">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    required
                    disabled={otpSent}
                    className="flex-1 px-3.5 py-3 rounded-2xl bg-[#1A1A22] border border-white/10 focus:border-rose-500 focus:bg-[#20202A] text-sm font-semibold text-white focus:outline-none focus:ring-4 focus:ring-rose-500/20 transition-all placeholder:text-gray-500"
                  />
                </div>
              </div>

              {otpSent && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-gray-300">
                      Enter 4-Digit OTP
                    </label>
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>OTP Sent to +91 {phone}</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                    placeholder="Enter 1234"
                    maxLength={6}
                    autoFocus
                    required
                    className="w-full text-center tracking-widest text-xl font-black py-3 rounded-2xl bg-[#1A1A22] border border-white/10 focus:border-rose-500 focus:bg-[#20202A] text-white focus:outline-none focus:ring-4 focus:ring-rose-500/20 transition-all placeholder:text-gray-500"
                  />
                  <div className="flex justify-between text-xs mt-2 text-gray-400">
                    <span>Didn't get code?</span>
                    <button
                      type="button"
                      onClick={() => setError('New OTP sent to +91 ' + phone)}
                      className="text-rose-400 font-bold hover:underline"
                    >
                      Resend OTP
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-950/60 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : otpSent ? (
                  <>
                    <span>Verify & Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Send Verification OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase font-extrabold text-gray-400">
              <span className="bg-[#131319] px-3">or continue with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="py-2.5 px-3 rounded-2xl bg-[#1A1A22] hover:bg-[#22222E] border border-white/10 hover:border-white/20 text-xs font-bold text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
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
              className="py-2.5 px-3 rounded-2xl bg-[#1A1A22] hover:bg-[#22222E] border border-white/10 hover:border-white/20 text-xs font-bold text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.8 1.11-1.92.99-3.04-1 .04-2.17.67-2.85 1.47-.6.69-1.13 1.83-1 2.93 1.13.09 2.24-.58 2.86-1.36z" />
              </svg>
              <span>Apple</span>
            </button>
          </div>

          {/* Switch to Signup */}
          <div className="text-center text-xs text-gray-400">
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
