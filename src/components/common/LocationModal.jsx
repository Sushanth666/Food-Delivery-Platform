import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Crosshair,
  Search,
  X,
  Check,
  Building2,
  Navigation,
  Loader2,
  AlertCircle,
  Sparkles,
  Plus,
} from 'lucide-react';
import { useLocationContext } from '../../context/LocationContext';

export default function LocationModal() {
  const {
    isLocationModalOpen,
    closeLocationModal,
    currentLocation,
    isDetecting,
    detectionError,
    detectLocation,
    setManualLocation,
    setCustomAddress,
    popularLocations,
  } = useLocationContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' | 'custom'

  // Custom address fields
  const [customForm, setCustomForm] = useState({
    flatNo: '',
    area: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '',
  });
  const [formError, setFormError] = useState('');

  if (!isLocationModalOpen) return null;

  const filteredLocations = popularLocations.filter((loc) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      loc.area.toLowerCase().includes(q) ||
      loc.city.toLowerCase().includes(q) ||
      loc.state.toLowerCase().includes(q) ||
      loc.pincode.includes(q)
    );
  });

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customForm.area.trim()) {
      setFormError('Please enter street or area name');
      return;
    }
    if (!customForm.city.trim()) {
      setFormError('Please enter city name');
      return;
    }
    if (!customForm.pincode.trim() || !/^\d{6}$/.test(customForm.pincode.trim())) {
      setFormError('Please enter a valid 6-digit Indian PIN code');
      return;
    }

    const fullArea = customForm.flatNo
      ? `${customForm.flatNo.trim()}, ${customForm.area.trim()}`
      : customForm.area.trim();

    setCustomAddress({
      area: fullArea,
      city: customForm.city,
      state: customForm.state,
      pincode: customForm.pincode,
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLocationModal}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 flex flex-col max-h-[88vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-600" />
                <span>Select Delivery Location</span>
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Automatically detect or choose from popular Indian cities & areas
              </p>
            </div>

            <button
              type="button"
              onClick={closeLocationModal}
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-5">
            {/* 1. Auto Detect GPS Location Button */}
            <div>
              <button
                type="button"
                onClick={detectLocation}
                disabled={isDetecting}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-brand-50 via-amber-50/50 to-orange-50 border-2 border-brand-200/80 hover:border-brand-500 text-left flex items-center justify-between group transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                    {isDetecting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Crosshair className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900 group-hover:text-brand-600 transition-colors flex items-center gap-1.5">
                      <span>Use Current Location</span>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-brand-600 text-white px-2 py-0.5 rounded-full">
                        Auto GPS
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {isDetecting
                        ? 'Fetching GPS coordinates from your browser...'
                        : 'Enable device location to find restaurants closest to you'}
                    </p>
                  </div>
                </div>

                <Navigation className="w-4 h-4 text-brand-600 flex-shrink-0 hidden sm:block" />
              </button>

              {/* Error feedback if permission denied */}
              {detectionError && (
                <div className="mt-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{detectionError}</span>
                </div>
              )}
            </div>

            {/* Mode Switch Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('browse');
                  setFormError('');
                }}
                className={`flex-1 pb-3 text-xs font-bold transition-all border-b-2 -mb-px text-center ${
                  activeTab === 'browse'
                    ? 'border-brand-600 text-brand-600 font-extrabold'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Browse Popular Locations
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('custom');
                  setFormError('');
                }}
                className={`flex-1 pb-3 text-xs font-bold transition-all border-b-2 -mb-px text-center ${
                  activeTab === 'custom'
                    ? 'border-brand-600 text-brand-600 font-extrabold'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                + Enter Custom Address
              </button>
            </div>

            {activeTab === 'browse' ? (
              <div className="space-y-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search locality, city or 6-digit PIN (e.g. Indiranagar, Bandra, 560034)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-9 py-2.5 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-gray-50 focus:bg-white"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Locations List */}
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {filteredLocations.map((loc) => {
                    const isSelected =
                      currentLocation.pincode === loc.pincode &&
                      currentLocation.area === loc.area;

                    return (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => setManualLocation(loc)}
                        className={`w-full p-3 rounded-2xl border text-left flex items-start justify-between gap-3 transition-all ${
                          isSelected
                            ? 'border-brand-500 bg-brand-50/60 shadow-sm'
                            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-brand-600 text-white'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                          >
                            <Building2 className="w-4 h-4" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-gray-900">
                                {loc.area}
                              </span>
                              {loc.tag && (
                                <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.2 rounded">
                                  {loc.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 mt-0.5">
                              {loc.city}, {loc.state} — PIN {loc.pincode}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Custom Address Form */
              <form onSubmit={handleCustomSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    House / Flat / Building No. (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Flat 304, Green Park Apartments"
                    value={customForm.flatNo}
                    onChange={(e) =>
                      setCustomForm({ ...customForm, flatNo: e.target.value })
                    }
                    className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Street / Locality / Landmark *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 100 Feet Road, Near Metro Station"
                    value={customForm.area}
                    onChange={(e) =>
                      setCustomForm({ ...customForm, area: e.target.value })
                    }
                    className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru"
                      value={customForm.city}
                      onChange={(e) =>
                        setCustomForm({ ...customForm, city: e.target.value })
                      }
                      className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      PIN Code (6 Digits) *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="560038"
                      value={customForm.pincode}
                      onChange={(e) =>
                        setCustomForm({ ...customForm, pincode: e.target.value })
                      }
                      className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                {formError && (
                  <p className="text-xs font-semibold text-rose-600">{formError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition-colors"
                >
                  Confirm & Set Location
                </button>
              </form>
            )}
          </div>

          {/* Footer note displaying current active location */}
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-600">
            <div className="truncate pr-2">
              <span className="font-bold text-gray-800">Delivering to: </span>
              <span className="text-brand-600 font-semibold truncate">
                {currentLocation.formatted || `${currentLocation.area}, ${currentLocation.city}`}
              </span>
            </div>
            {currentLocation.isAutoDetected && (
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                GPS Verified
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
