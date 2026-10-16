import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Save,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import UserAvatar from './UserAvatar';

export default function EditProfileModal({ isOpen, onClose }) {
  const { user, updateProfile } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: 'Bengaluru',
    pincode: '560034',
  });

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync form state when modal opens or user changes
  useEffect(() => {
    if (user && isOpen) {
      const primaryAddress = user.savedAddresses?.[0] || {};
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        street:
          primaryAddress.line ||
          primaryAddress.street ||
          'Flat 402, Royal Residency, Avinashi Road',
        city: primaryAddress.city || 'Bengaluru',
        pincode: primaryAddress.pincode || primaryAddress.zip || '560034',
      });
      setSaveSuccess(false);
      setErrorMessage('');
    }
  }, [user, isOpen]);

  if (!isOpen || !user) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Full name is required.');
      return;
    }

    const updatedUser = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      savedAddresses: [
        {
          id: 'addr-primary',
          tag: 'Default Delivery Location',
          line: formData.street.trim(),
          city: formData.city.trim(),
          pincode: formData.pincode.trim(),
        },
      ],
    };

    updateProfile(updatedUser);
    setSaveSuccess(true);

    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1000);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && user && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-xl max-h-[90vh] bg-[#14141C] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-white"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-950/60">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-display text-white">
                    Edit Profile Details
                  </h2>
                  <p className="text-xs text-gray-400">
                    Update your name, contact details and delivery address
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
              <div className="p-6 space-y-6 overflow-y-auto flex-1">
                {/* Success Banner */}
                {saveSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-2.5 text-xs font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Profile details updated successfully!</span>
                  </motion.div>
                )}

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Profile Picture Section (Dynamic Initial Letter Badge) */}
                <div className="bg-[#1A1A24] border border-white/10 rounded-2xl p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-3">
                    Profile Picture
                  </span>

                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    {/* Live Initial Badge Preview */}
                    <div className="relative flex-shrink-0">
                      <UserAvatar name={formData.name || 'User'} size="2xl" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#14141C] rounded-full" />
                    </div>

                    {/* Description */}
                    <div className="flex-1 w-full text-center sm:text-left space-y-1.5">
                      <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                        <span>First Letter Profile Badge</span>
                        <span className="px-2 py-0.5 rounded-full bg-rose-950/70 text-rose-300 border border-rose-500/30 text-[10px] font-semibold">
                          Live Initial
                        </span>
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Your profile picture automatically displays the first letter of your name in a luxury gradient badge.
                      </p>
                      <p className="text-[11px] text-gray-400">
                        Editing your full name below updates your profile initial in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
                    Personal Information
                  </span>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sushanth Kumar"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1A1A24] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. sushanth@example.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1A1A24] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1A1A24] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="space-y-4 pt-2 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
                    Primary Delivery Address
                  </span>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Flat, Building & Street Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        rows={2}
                        value={formData.street}
                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        placeholder="e.g. Flat 402, Royal Residency, Avinashi Road"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1A1A24] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500 resize-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        City / Area
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Tiruppur / Bengaluru"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A24] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        placeholder="e.g. 641602"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A24] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed Modal Footer Actions */}
              <div className="px-6 py-4 border-t border-white/10 bg-[#161622] flex items-center justify-end gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-white/15 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white text-xs font-black shadow-lg shadow-rose-950/60 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile Changes</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
