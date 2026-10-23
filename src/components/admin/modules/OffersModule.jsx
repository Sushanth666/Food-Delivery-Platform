import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  Tag,
  Plus,
  Percent,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  Gift,
  Share2,
  X,
  IndianRupee,
} from 'lucide-react';

export default function OffersModule() {
  const { couponsList, createNewCoupon, toggleCoupon, logAction } = useAdmin();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [referralReward, setReferralReward] = useState({
    referrerCoins: 100,
    refereeDiscountPercent: 50,
    minOrder: 199,
  });
  const [referralSaved, setReferralSaved] = useState(false);

  // New coupon form state
  const [formData, setFormData] = useState({
    code: '',
    title: '',
    discountType: 'percentage',
    discountValue: 25,
    maxDiscount: 120,
    minOrder: 249,
    description: '',
    usageLimit: 500,
    expiryDate: '2026-11-30',
  });

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.code.trim()) return;

    createNewCoupon({
      ...formData,
      discountValue: Number(formData.discountValue),
      maxDiscount: Number(formData.maxDiscount),
      minOrder: Number(formData.minOrder),
      usageLimit: Number(formData.usageLimit),
    });

    setShowCreateModal(false);
    setFormData({
      code: '',
      title: '',
      discountType: 'percentage',
      discountValue: 25,
      maxDiscount: 120,
      minOrder: 249,
      description: '',
      usageLimit: 500,
      expiryDate: '2026-11-30',
    });
  };

  const handleSaveReferral = () => {
    setReferralSaved(true);
    logAction('Updated Referral Program Parameters', 'Offers & Promotions', `Referrer ₹${referralReward.referrerCoins}`);
    setTimeout(() => setReferralSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header & Create Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Offers, Coupons & Promotional Campaigns</h2>
          <p className="text-xs text-gray-400">
            Launch flash discounts, manage voucher limits, referral incentives, and conversion analytics.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-brand-600 hover:from-rose-500 hover:to-brand-500 text-white font-black text-xs transition-all shadow-md shadow-rose-950/50 cursor-pointer flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Promo Campaign</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Active Campaigns</span>
          <p className="text-2xl font-black text-white mt-1">{couponsList.filter((c) => c.isActive).length} Coupons</p>
          <span className="text-[10px] text-emerald-400 font-bold">Live across web & mobile</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Discount Availed</span>
          <p className="text-2xl font-black text-rose-400 mt-1">₹4.24 Lakhs</p>
          <span className="text-[10px] text-gray-400">ROI: 4.8x customer LTV</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Campaign Conversion</span>
          <p className="text-2xl font-black text-amber-300 mt-1">21.4%</p>
          <span className="text-[10px] text-emerald-400 font-semibold">+4.2% uplift</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Referral Signups</span>
          <p className="text-2xl font-black text-purple-400 mt-1">1,820</p>
          <span className="text-[10px] text-gray-400">Viral organic growth</span>
        </div>
      </div>

      {/* 2. Active Coupons Grid */}
      <div className="space-y-3">
        <h3 className="text-base font-black text-white flex items-center gap-2">
          <Tag className="w-4 h-4 text-rose-400" /> Active Voucher & Discount Directory
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {couponsList.map((cp) => (
            <div
              key={cp.code}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                cp.isActive
                  ? 'bg-white/[0.03] border-white/10 hover:border-rose-500/40'
                  : 'bg-white/[0.01] border-white/5 opacity-60'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono font-black text-sm tracking-wider">
                      {cp.code}
                    </span>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {cp.discountType === 'percentage' ? `${cp.discountValue}% OFF` : 'FREE DEL'}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleCoupon(cp.code)}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-black border transition-all cursor-pointer ${
                      cp.isActive
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                    }`}
                  >
                    {cp.isActive ? 'Active' : 'Disabled'}
                  </button>
                </div>

                <h4 className="text-sm font-bold text-white mb-1">{cp.title}</h4>
                <p className="text-xs text-gray-400 mb-3">{cp.description}</p>

                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-[11px] text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Order Value:</span>
                    <span className="font-bold text-white">₹{cp.minOrder}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Max Cap:</span>
                    <span className="font-bold text-rose-400">₹{cp.maxDiscount || 'No Limit'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Valid Till:</span>
                    <span className="font-mono text-gray-300">{cp.expiryDate || '2026-12-31'}</span>
                  </div>
                </div>
              </div>

              {/* Progress bar of usage */}
              <div className="pt-2 border-t border-white/5 space-y-1">
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>Usage: {cp.usageCount || 120} redemptions</span>
                  <span>Limit: {cp.usageLimit || 1000}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, ((cp.usageCount || 120) / (cp.usageLimit || 1000)) * 100)}%` }}
                    className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Viral Referral Program Manager */}
      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Share2 className="w-4 h-4 text-purple-400" /> Referral & Loyalty Incentive Settings
            </h3>
            <p className="text-xs text-gray-400">Reward both referrer and referred user upon successful first order</p>
          </div>
          {referralSaved && (
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Parameters Saved!
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Referrer Reward (CraveCoins)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={referralReward.referrerCoins}
                onChange={(e) => setReferralReward({ ...referralReward, referrerCoins: Number(e.target.value) })}
                className="w-full px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white font-bold"
              />
              <span className="text-xs text-amber-300 font-bold">Coins</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Referee 1st Order Discount</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={referralReward.refereeDiscountPercent}
                onChange={(e) => setReferralReward({ ...referralReward, refereeDiscountPercent: Number(e.target.value) })}
                className="w-full px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white font-bold"
              />
              <span className="text-xs text-rose-400 font-bold">% OFF</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Min Qualifying Basket</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={referralReward.minOrder}
                onChange={(e) => setReferralReward({ ...referralReward, minOrder: Number(e.target.value) })}
                className="w-full px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white font-bold"
              />
              <span className="text-xs text-gray-300 font-bold">INR</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleSaveReferral}
          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
        >
          Update Referral Rules
        </button>
      </div>

      {/* 4. Modal: Create New Promo Campaign */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <form
            onSubmit={handleCreateSubmit}
            className="w-full max-w-lg bg-[#14141E] border border-white/20 rounded-3xl p-5 sm:p-6 text-white space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-black flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-400" /> Launch New Promo Campaign
              </h3>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Coupon Code</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FESTIVE60"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl font-mono font-bold text-white uppercase focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Discount Type</label>
                <select
                  value={formData.discountType}
                  onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-[#1A1A26] border border-white/10 rounded-xl font-bold text-white focus:border-rose-500 outline-none"
                >
                  <option value="percentage">Percentage Discount (%)</option>
                  <option value="flat">Flat Value Discount (₹)</option>
                  <option value="delivery">Free Delivery Fee</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Discount Value</label>
                <input
                  type="number"
                  required
                  value={formData.discountValue}
                  onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl font-bold text-white focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Max Discount Cap (₹)</label>
                <input
                  type="number"
                  value={formData.maxDiscount}
                  onChange={(e) => setFormData({ ...formData, maxDiscount: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl font-bold text-white focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Minimum Order (₹)</label>
                <input
                  type="number"
                  value={formData.minOrder}
                  onChange={(e) => setFormData({ ...formData, minOrder: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl font-bold text-white focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">Redemption Limit</label>
                <input
                  type="number"
                  value={formData.usageLimit}
                  onChange={(e) => setFormData({ ...formData, usageLimit: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl font-bold text-white focus:border-rose-500 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase">Campaign Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FLAT 60% OFF Festive Treat"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase">Expiry Date</label>
                <input
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none font-mono"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-brand-600 hover:from-rose-500 hover:to-brand-500 text-white font-black text-xs transition-all shadow-md cursor-pointer"
              >
                Publish Campaign
              </button>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2.5 rounded-xl bg-white/10 text-gray-300 text-xs font-bold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
