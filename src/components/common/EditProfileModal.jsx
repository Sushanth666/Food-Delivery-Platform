import React, { useState, useEffect, useRef } from 'react';
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
  Check,
  Palette,
  Camera,
  Upload,
  Trash2,
  Image as ImageIcon,
  Pipette,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import UserAvatar, { AVATAR_THEMES } from './UserAvatar';
import CustomColorPickerModal from './CustomColorPickerModal';

export default function EditProfileModal({ isOpen, onClose }) {
  const { user, updateProfile } = useAuth();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: 'Bengaluru',
    pincode: '560034',
  });

  const [avatarType, setAvatarType] = useState('initial'); // 'initial' | 'custom'
  const [customImage, setCustomImage] = useState(null);
  const [avatarTheme, setAvatarTheme] = useState('crimson');
  const [customColor, setCustomColor] = useState('#EC4899');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [avatarShape, setAvatarShape] = useState('squircle');
  const [uploadError, setUploadError] = useState('');
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
        pincode: primaryAddress.pincode || primaryAddress.zip || '641602',
      });
      setAvatarTheme(user.avatarTheme || 'crimson');
      setCustomColor(user.avatarCustomColor || '#EC4899');
      setAvatarShape(user.avatarShape || 'squircle');
      if (user.avatarImage) {
        setAvatarType('custom');
        setCustomImage(user.avatarImage);
      } else {
        setAvatarType('initial');
        setCustomImage(null);
      }
      setUploadError('');
      setSaveSuccess(false);
      setErrorMessage('');
    }
  }, [user, isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please choose a valid image file (PNG, JPG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image size exceeds 5MB limit. Please select a smaller photo.');
      return;
    }

    setUploadError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      setCustomImage(event.target.result);
      setAvatarType('custom');
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setCustomImage(null);
    setAvatarType('initial');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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
      avatarTheme,
      avatarCustomColor: customColor,
      avatarShape,
      avatarType,
      avatarImage: avatarType === 'custom' ? customImage : null,
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

                {/* Profile Picture Feature Section (First Letter Badge or Custom Uploaded Photo) */}
                <div className="bg-[#1A1A24] border border-white/10 rounded-2xl p-5 space-y-4">
                  {/* Section Title & Mode Tabs */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
                      Profile Picture
                    </span>

                    {/* Mode Tabs: Initial vs Upload */}
                    <div className="inline-flex items-center p-1 rounded-xl bg-black/50 border border-white/10 self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setAvatarType('initial')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          avatarType === 'initial'
                            ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-md shadow-rose-950/60'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>First Letter Badge</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setAvatarType('custom');
                          if (!customImage && fileInputRef.current) {
                            fileInputRef.current.click();
                          }
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          avatarType === 'custom'
                            ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-md shadow-rose-950/60'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Upload Photo</span>
                      </button>
                    </div>
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  {/* Upload Error Banner */}
                  {uploadError && (
                    <div className="p-2.5 rounded-xl bg-rose-950/70 border border-rose-500/30 text-rose-300 text-xs font-semibold">
                      {uploadError}
                    </div>
                  )}

                  {/* Main Avatar Row */}
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    {/* Live Preview Avatar */}
                    <div className="relative flex-shrink-0 group">
                      <UserAvatar
                        name={formData.name || 'User'}
                        imageSrc={avatarType === 'custom' ? customImage : null}
                        size="2xl"
                        theme={avatarTheme}
                        customColor={customColor}
                        shape={avatarShape}
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#14141C] rounded-full shadow-xs" />
                    </div>

                    {/* Controls Column */}
                    <div className="flex-1 w-full text-center sm:text-left space-y-3">
                      {/* Top Label & Shape Toggle */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                            {avatarType === 'custom' && customImage ? (
                              <>
                                <ImageIcon className="w-4 h-4 text-rose-400" />
                                <span>Custom Photo Profile</span>
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-4 h-4 text-rose-400" />
                                <span>First Letter Profile Avatar</span>
                              </>
                            )}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {avatarType === 'custom' && customImage
                              ? 'Your uploaded photo is displayed across the platform'
                              : 'Letter updates dynamically with your full name'}
                          </p>
                        </div>

                        {/* Shape Toggle */}
                        <div className="inline-flex items-center p-1 rounded-xl bg-black/40 border border-white/10 self-center sm:self-auto">
                          <button
                            type="button"
                            onClick={() => setAvatarShape('squircle')}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                              avatarShape === 'squircle'
                                ? 'bg-white/15 text-white shadow-xs'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            Squircle
                          </button>
                          <button
                            type="button"
                            onClick={() => setAvatarShape('circle')}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                              avatarShape === 'circle'
                                ? 'bg-white/15 text-white shadow-xs'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            Circle
                          </button>
                        </div>
                      </div>

                      {/* Mode-Specific Content */}
                      {avatarType === 'custom' ? (
                        /* Custom Image Upload Controls */
                        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2.5 justify-center sm:justify-start">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white text-xs font-black flex items-center gap-2 shadow-md shadow-rose-950/50 transition-all active:scale-95 cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>{customImage ? 'Change Image' : 'Select Photo from Device'}</span>
                          </button>

                          {customImage && (
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-rose-950/60 border border-white/10 hover:border-rose-500/40 text-gray-300 hover:text-rose-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                              <span>Remove & Use Initial</span>
                            </button>
                          )}

                          <span className="text-[11px] text-gray-500 block w-full sm:w-auto">
                            Supports PNG, JPG, WebP up to 5MB
                          </span>
                        </div>
                      ) : (
                        /* Initial Avatar Theme Palette */
                        <div className="pt-2 border-t border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-semibold text-gray-300 flex items-center gap-1.5">
                              <Palette className="w-3.5 h-3.5 text-rose-400" />
                              Avatar Theme Colors:
                            </span>
                            {avatarTheme === 'custom' ? (
                              <span className="flex items-center gap-1.5 text-[11px] font-bold text-rose-300">
                                <span
                                  className="w-2.5 h-2.5 rounded-full border border-white/30"
                                  style={{ backgroundColor: customColor }}
                                />
                                <span>Custom ({customColor.toUpperCase()})</span>
                              </span>
                            ) : (
                              <span className="text-[11px] font-bold text-rose-300">
                                {AVATAR_THEMES.find((t) => t.id === avatarTheme)?.name || 'Default'}
                              </span>
                            )}
                          </div>

                          <div className="grid grid-cols-6 gap-2">
                            {AVATAR_THEMES.map((thm) => {
                              const isSelected = avatarTheme === thm.id;
                              const isCustom = thm.isCustom;

                              return (
                                <button
                                  key={thm.id}
                                  type="button"
                                  onClick={() => {
                                    setAvatarTheme(thm.id);
                                    if (isCustom) {
                                      setIsColorPickerOpen(true);
                                    }
                                  }}
                                  title={isCustom ? 'Pick your favourite colour' : thm.name}
                                  style={
                                    isCustom && isSelected
                                      ? { backgroundColor: customColor }
                                      : undefined
                                  }
                                  className={`relative h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                                    isSelected
                                      ? 'ring-2 ring-white scale-105 shadow-md shadow-black/80'
                                      : isCustom
                                      ? 'bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-400 opacity-80 hover:opacity-100 hover:scale-102 border border-white/20'
                                      : `bg-gradient-to-tr ${thm.preview} opacity-70 hover:opacity-100 hover:scale-102 border border-white/20`
                                  }`}
                                >
                                  {isSelected ? (
                                    <Check className="w-3.5 h-3.5 text-white stroke-[3] drop-shadow-xs" />
                                  ) : isCustom ? (
                                    <Pipette className="w-3.5 h-3.5 text-white drop-shadow-xs" />
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>

                          {/* Interactive Favourite Colour Customizer Bar */}
                          {avatarTheme === 'custom' && (
                            <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3 animate-fadeIn">
                              <div className="flex items-center gap-2.5">
                                <div
                                  className="w-7 h-7 rounded-lg border-2 border-white/30 shadow-md flex-shrink-0 cursor-pointer transition-transform hover:scale-105 active:scale-95"
                                  style={{ backgroundColor: customColor }}
                                  onClick={() => setIsColorPickerOpen(true)}
                                  title="Click to change favourite colour"
                                />
                                <div className="text-left">
                                  <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                                    <span>Favourite Colour:</span>
                                    <span className="font-mono text-rose-300 font-bold uppercase">
                                      {customColor}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-gray-400">
                                    Click swatch or button to open full color palette
                                  </p>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => setIsColorPickerOpen(true)}
                                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <Pipette className="w-3.5 h-3.5 text-rose-400" />
                                <span>Pick Colour</span>
                              </button>
                            </div>
                          )}
                        </div>
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

          {/* Custom Luxury Colour Palette Modal with Dedicated Close Button */}
          <CustomColorPickerModal
            isOpen={isColorPickerOpen}
            initialColor={customColor}
            onClose={() => setIsColorPickerOpen(false)}
            onSelectColor={(hex) => {
              setCustomColor(hex);
              setAvatarTheme('custom');
            }}
          />
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
