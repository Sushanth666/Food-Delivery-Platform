import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Upload,
  Link as LinkIcon,
  Check,
  Sparkles,
  Save,
  CheckCircle2,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import {
  INDIAN_MALE_AVATARS,
  INDIAN_FEMALE_AVATARS,
  detectIndianGender,
  getIndianAvatarByName,
} from '../../utils/indianAvatars';

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

  const [avatar, setAvatar] = useState('');
  const [selectedGenderTab, setSelectedGenderTab] = useState('male');
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [showUrlField, setShowUrlField] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef(null);

  // Sync form state when modal opens or user changes
  useEffect(() => {
    if (user && isOpen) {
      const primaryAddress = user.savedAddresses?.[0] || {};
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        street: primaryAddress.line || primaryAddress.street || 'Flat 402, Royal Residency, Avinashi Road',
        city: primaryAddress.city || 'Bengaluru',
        pincode: primaryAddress.pincode || primaryAddress.zip || '560034',
      });

      const currentAvatar = user.avatar || getIndianAvatarByName(user.name);
      setAvatar(currentAvatar);

      const detected = detectIndianGender(user.name || '');
      setSelectedGenderTab(detected);
      setSaveSuccess(false);
      setErrorMessage('');
      setShowUrlField(false);
    }
  }, [user, isOpen]);

  if (!isOpen || !user) return null;

  // Handle local image file upload (converts to base64 data URL)
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }

    if (file.size > 4 * 1024 * 1024) {
      setErrorMessage('Image size is too large (max 4MB).');
      return;
    }

    setErrorMessage('');
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Apply custom URL
  const handleApplyCustomUrl = () => {
    if (!customUrlInput.trim()) return;
    setAvatar(customUrlInput.trim());
    setShowUrlField(false);
    setCustomUrlInput('');
  };

  // Auto-match avatar based on currently typed name
  const handleAutoMatchByName = () => {
    if (!formData.name.trim()) return;
    const newAvatar = getIndianAvatarByName(formData.name.trim());
    setAvatar(newAvatar);
    setSelectedGenderTab(detectIndianGender(formData.name.trim()));
  };

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
      avatar: avatar || getIndianAvatarByName(formData.name.trim()),
      customAvatarSelected: true,
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
    }, 1200);
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
                <h2 className="text-lg font-bold font-display text-white">Edit Profile Details</h2>
                <p className="text-xs text-gray-400">Update your photo, name, contact and delivery address</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
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
                  <span>Profile details and avatar updated successfully!</span>
                </motion.div>
              )}

            {/* Error Banner */}
            {errorMessage && (
              <div className="p-3 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Avatar Section */}
            <div className="bg-[#1A1A24] border border-white/10 rounded-2xl p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-3">
                Profile Photo
              </span>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* Avatar Preview */}
                <div className="relative group flex-shrink-0">
                  <img
                    src={avatar || getIndianAvatarByName(formData.name || 'User')}
                    alt="Profile Avatar Preview"
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-rose-500 shadow-xl shadow-rose-950/40"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
                    title="Upload new photo"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Avatar Actions */}
                <div className="flex-1 w-full space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-rose-400" />
                      <span>Upload Image</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowUrlField(!showUrlField)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <LinkIcon className="w-3.5 h-3.5 text-rose-400" />
                      <span>Image URL</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleAutoMatchByName}
                      className="px-3 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-950 text-rose-300 text-xs font-semibold border border-rose-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Automatically pick an authentic Indian avatar matching your name"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                      <span>Auto-Match Name</span>
                    </button>
                  </div>

                  {/* URL Input Dropdown */}
                  {showUrlField && (
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
                      <input
                        type="url"
                        value={customUrlInput}
                        onChange={(e) => setCustomUrlInput(e.target.value)}
                        placeholder="Paste image URL (https://...)"
                        className="flex-1 px-3 py-1.5 rounded-xl bg-[#121218] border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-rose-500"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCustomUrl}
                        className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs"
                      >
                        Apply
                      </button>
                    </div>
                  )}

                  <p className="text-[11px] text-gray-400">
                    Or select one of our curated authentic Indian portraits below:
                  </p>
                </div>
              </div>

              {/* Gallery Presets */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold text-gray-300">Curated Indian Portraits:</span>
                  <div className="flex items-center gap-1 bg-[#121218] p-1 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setSelectedGenderTab('male')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        selectedGenderTab === 'male'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Men
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedGenderTab('female')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        selectedGenderTab === 'female'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Women
                    </button>
                  </div>
                </div>

                {/* Avatar Thumbnails */}
                <div className="flex items-center gap-2.5 overflow-x-auto py-1 no-scrollbar">
                  {(selectedGenderTab === 'female' ? INDIAN_FEMALE_AVATARS : INDIAN_MALE_AVATARS).map(
                    (imgUrl, idx) => {
                      const isSelected = avatar === imgUrl;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setAvatar(imgUrl)}
                          className={`relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            isSelected
                              ? 'border-rose-500 scale-105 shadow-md shadow-rose-950/60 ring-2 ring-rose-500/50'
                              : 'border-white/15 hover:border-white/40 opacity-75 hover:opacity-100'
                          }`}
                        >
                          <img src={imgUrl} alt="Avatar option" className="w-full h-full object-cover" />
                          {isSelected && (
                            <div className="absolute inset-0 bg-rose-600/40 flex items-center justify-center text-white">
                              <Check className="w-4 h-4 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    }
                  )}
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
