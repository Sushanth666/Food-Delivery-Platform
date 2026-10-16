import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  UtensilsCrossed,
  User,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Gift,
  ShieldCheck,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signup, demoLogin } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [referralCode, setReferralCode] = useState('WELCOME100');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const redirectPath = location.state?.from || '/';

  // Simple password strength calculation
  const getPasswordStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    return score; // 0 to 4
  };

  const strength = getPasswordStrength();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit Indian phone number.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agreedTerms) {
      setError('Please agree to CraveWave Terms of Service & Privacy Policy.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      signup({ name, email, phone, password });
      setLoading(false);
      navigate(redirectPath, { replace: true });
    }, 700);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-600/15 blur-3xl pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        {/* Card Container */}
        <div className="glass-card bg-white/95 rounded-3xl p-6 sm:p-9 border border-gray-100 shadow-2xl shadow-rose-950/10">
          {/* Logo & Heading */}
          <div className="text-center mb-6">
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

            <h1 className="text-2xl sm:text-3xl font-black font-display text-gray-900 tracking-tight">
              Create Foodie Account
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Join thousands of Indian food lovers. Free delivery & welcome benefits await!
            </p>
          </div>

          {/* Welcome Promo Gift Banner */}
          <div className="mb-6 p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-rose-500 flex items-center justify-center text-white shadow-xs flex-shrink-0">
              <Gift className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-extrabold text-brand-700 block">
                WELCOME OFFER APPLIED
              </span>
              <span className="text-gray-600 font-medium">
                Flat ₹100 OFF coupon <strong className="text-brand-600 font-bold">WELCOME100</strong> will be credited on signup.
              </span>
            </div>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSignupSubmit} className="space-y-3.5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sushanth Kumar"
                  required
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
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
                    className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div className="flex rounded-2xl border border-gray-200 overflow-hidden focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/10 transition-all bg-gray-50 focus-within:bg-white">
                  <div className="bg-gray-100 px-2.5 flex items-center text-xs font-bold text-gray-700 border-r border-gray-200">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    maxLength={10}
                    required
                    className="w-full px-3 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none bg-transparent placeholder:text-gray-400 placeholder:font-normal"
                  />
                </div>
              </div>
            </div>

            {/* Password & Confirm Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    required
                    className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    required
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all placeholder:text-gray-400 placeholder:font-normal"
                  />
                </div>
              </div>
            </div>

            {/* Password Strength Indicator */}
            {password && (
              <div className="pt-0.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      strength >= 1 ? 'bg-rose-500' : 'bg-gray-200'
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      strength >= 2 ? 'bg-amber-500' : 'bg-gray-200'
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      strength >= 3 ? 'bg-emerald-500' : 'bg-gray-200'
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      strength >= 4 ? 'bg-emerald-600' : 'bg-gray-200'
                    }`}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-500">
                  Password strength:{' '}
                  {strength <= 1 ? 'Weak' : strength <= 2 ? 'Fair' : strength === 3 ? 'Good' : 'Strong'}
                </span>
              </div>
            )}

            {/* Referral / Promo Code */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Referral / Promo Code (Optional)
              </label>
              <input
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                placeholder="WELCOME100"
                className="w-full px-3.5 py-2 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white text-xs font-bold text-brand-700 focus:outline-none focus:border-brand-500 uppercase tracking-wider transition-all"
              />
            </div>

            {/* Terms and conditions */}
            <div className="flex items-start pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-brand-600 focus:ring-brand-500 border-gray-300 cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-gray-600 cursor-pointer leading-relaxed">
                I agree to the{' '}
                <span className="font-bold text-brand-600 hover:underline">Terms of Service</span> and{' '}
                <span className="font-bold text-brand-600 hover:underline">Privacy Policy</span>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-700 hover:to-rose-700 text-white font-extrabold text-sm shadow-md shadow-brand-500/25 transition-all hover:shadow-lg hover:shadow-brand-500/35 active:scale-98 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Create My Foodie Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Link to Login */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center text-xs font-semibold text-gray-500">
            Already have an account?{' '}
            <Link
              to="/login"
              state={{ from: redirectPath }}
              className="text-brand-600 font-extrabold hover:text-brand-700 hover:underline"
            >
              Log in instead →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
