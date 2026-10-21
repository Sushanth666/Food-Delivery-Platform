import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Heart, Sparkles, Check, EyeOff, PartyPopper, Trophy, BookOpen, Coffee } from 'lucide-react';

export const GIFT_THEMES = [
  {
    id: 'birthday',
    title: 'Happy Birthday!',
    subtitle: 'Confetti & Cake',
    icon: '🎂',
    gradient: 'from-pink-600 via-rose-600 to-amber-500',
    borderColor: 'border-pink-500/50',
    defaultMsg: 'Wishing you the happiest birthday! Treat yourself to this feast on me! 🎉🎂',
  },
  {
    id: 'congrats',
    title: 'Huge Congratulations!',
    subtitle: 'Celebrating You',
    icon: '🏆',
    gradient: 'from-amber-500 via-yellow-600 to-orange-600',
    borderColor: 'border-amber-500/50',
    defaultMsg: 'So proud of your achievement! Time to celebrate with delicious food! 🚀✨',
  },
  {
    id: 'love',
    title: 'Thinking of You',
    subtitle: 'Special Warm Treat',
    icon: '💖',
    gradient: 'from-rose-600 via-red-600 to-purple-600',
    borderColor: 'border-rose-500/50',
    defaultMsg: 'Sending you good vibes and a warm comforting meal! Enjoy every bite! 💖',
  },
  {
    id: 'exam',
    title: 'Late Night Fuel',
    subtitle: 'Study & Work Power',
    icon: '📚',
    gradient: 'from-indigo-600 via-purple-600 to-rose-600',
    borderColor: 'border-indigo-500/50',
    defaultMsg: 'Brain food and snacks to power through your grind! You got this! ☕🔥',
  },
  {
    id: 'care',
    title: 'Get Well Soon',
    subtitle: 'Warm Soup & Care',
    icon: '🥣',
    gradient: 'from-emerald-600 via-teal-600 to-blue-600',
    borderColor: 'border-emerald-500/50',
    defaultMsg: 'Take good care and rest up! Hope this warm meal brings a smile! 🌿✨',
  },
];

export default function GiftOrderModal({ isOpen, onClose, giftDetails, onSave }) {
  const [recipientName, setRecipientName] = useState(giftDetails?.recipientName || '');
  const [recipientPhone, setRecipientPhone] = useState(giftDetails?.recipientPhone || '');
  const [selectedTheme, setSelectedTheme] = useState(giftDetails?.cardTheme || 'birthday');
  const [customMessage, setCustomMessage] = useState(
    giftDetails?.message || GIFT_THEMES[0].defaultMsg
  );
  const [hidePrice, setHidePrice] = useState(
    giftDetails?.hidePrice !== undefined ? giftDetails.hidePrice : true
  );

  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme.id);
    if (!customMessage || GIFT_THEMES.some((t) => t.defaultMsg === customMessage)) {
      setCustomMessage(theme.defaultMsg);
    }
  };

  const handleSave = () => {
    onSave({
      isGift: true,
      recipientName: recipientName.trim() || 'A Special Friend',
      recipientPhone: recipientPhone.trim(),
      cardTheme: selectedTheme,
      message: customMessage.trim(),
      hidePrice: hidePrice,
    });
    onClose();
  };

  if (!isOpen) return null;

  const currentThemeObj = GIFT_THEMES.find((t) => t.id === selectedTheme) || GIFT_THEMES[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#14141C] border border-white/15 rounded-3xl shadow-2xl p-5 sm:p-7 z-10 text-white overflow-y-auto max-h-[90vh] my-4 sm:my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-950/50">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-display text-white">
                  Send as a Surprise Gift
                </h3>
                <p className="text-[11px] text-gray-400">
                  Attach an animated digital greeting card & surprise your loved one
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1 no-scrollbar">
            {/* Recipient Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Recipient Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-[#1A1A22] text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Recipient Phone (Optional)
                </label>
                <input
                  type="text"
                  placeholder="+91 98765 00000"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-[#1A1A22] text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            {/* Select Card Theme */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">
                Choose Digital Card Theme
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {GIFT_THEMES.map((theme) => {
                  const isSelected = selectedTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => handleSelectTheme(theme)}
                      className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                        isSelected
                          ? `bg-gradient-to-br ${theme.gradient} bg-opacity-20 border-white shadow-lg`
                          : 'bg-[#181822] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xl mb-1">{theme.icon}</div>
                      <div className="text-[11px] font-black text-white leading-tight">
                        {theme.title}
                      </div>
                      <div className="text-[9px] text-gray-300 mt-0.5">
                        {theme.subtitle}
                      </div>
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white text-black flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Card Preview Box */}
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentThemeObj.gradient} text-white shadow-xl relative overflow-hidden border ${currentThemeObj.borderColor}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider bg-black/30 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span>{currentThemeObj.icon}</span>
                  <span>{currentThemeObj.title}</span>
                </span>
                <span className="text-[10px] font-bold text-white/80">
                  Preview Card
                </span>
              </div>

              <div className="mt-2 text-sm font-bold font-display italic">
                "{customMessage || currentThemeObj.defaultMsg}"
              </div>

              <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-white/90">
                  To: <span className="font-bold underline">{recipientName || 'Your Loved One'}</span>
                </span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md">
                  {hidePrice ? '🔒 Price Hidden' : '📄 Receipt Included'}
                </span>
              </div>
            </div>

            {/* Custom Greeting Note */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                Personalized Note / Message
              </label>
              <textarea
                rows={2}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Write something warm..."
                className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-[#1A1A22] text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            {/* Hide Price Switch */}
            <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
              <div className="flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-rose-400" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Hide Prices & Bill on Receipt
                  </span>
                  <span className="text-[10px] text-gray-400 block">
                    The recipient receives the gift with zero price tags
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={hidePrice}
                onChange={(e) => setHidePrice(e.target.checked)}
                className="w-4 h-4 accent-rose-500 rounded cursor-pointer"
              />
            </label>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-950/50 transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Attach Gift Card</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
