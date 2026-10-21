import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Plus, Minus, Sparkles, ChefHat } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import DietaryBadge from '../common/DietaryBadge';
import DishNutritionBadge from '../common/DishNutritionBadge';

export default function ItemCustomizerModal({
  isOpen,
  onClose,
  item,
  restaurant,
  onAddToCart,
}) {
  if (!isOpen || !item) return null;

  const options = item.customizationOptions || {};
  const sizes = options.sizes || [];
  const addOns = options.addOns || [];
  const spiceLevels = options.spiceLevels || [];

  const [selectedSize, setSelectedSize] = useState(() => sizes[0] || null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedSpice, setSelectedSpice] = useState(() => spiceLevels[0] || null);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Reset states when item changes
  useEffect(() => {
    setSelectedSize(sizes[0] || null);
    setSelectedAddOns([]);
    setSelectedSpice(spiceLevels[0] || null);
    setSpecialInstructions('');
    setQuantity(1);
  }, [item]);

  const toggleAddOn = (addon) => {
    if (selectedAddOns.some((a) => a.name === addon.name)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a.name !== addon.name));
    } else {
      setSelectedAddOns([...selectedAddOns, addon]);
    }
  };

  // Calculate unit price based on customization
  const sizeDiff = selectedSize ? selectedSize.priceDiff || 0 : 0;
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + (a.price || 0), 0);
  const unitPrice = item.price + sizeDiff + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    const customization = {
      size: selectedSize ? selectedSize.name : null,
      sizePriceDiff: sizeDiff,
      addOns: selectedAddOns.map((a) => a.name),
      addOnsWithPrice: selectedAddOns,
      spiceLevel: selectedSpice,
      specialInstructions: specialInstructions.trim(),
    };

    for (let i = 0; i < quantity; i++) {
      onAddToCart(restaurant, item, customization);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#131319] text-white rounded-3xl shadow-2xl shadow-rose-950/60 overflow-hidden z-10 border border-white/10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#131319] sticky top-0 z-10">
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <DietaryBadge isVeg={item.isVeg} size="md" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Customize "{item.name}"
                </h3>
                <p className="text-xs text-rose-300 font-semibold mt-0.5">
                  Base Price: {formatCurrency(item.price)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Nutritional & Dietary Breakdown */}
            <DishNutritionBadge dish={item} compact={false} />

            {/* Sizes / Portions */}
            {sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Choose Portion Size
                  </h4>
                  <span className="text-[11px] font-bold text-rose-400 bg-rose-950/60 border border-rose-800/50 px-2 py-0.5 rounded-full">
                    Required (Pick 1)
                  </span>
                </div>
                <div className="space-y-2">
                  {sizes.map((s) => {
                    const isSelected = selectedSize?.name === s.name;
                    return (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'border-rose-500 bg-rose-950/50 text-white shadow-md'
                            : 'border-white/10 bg-[#1A1A22] hover:border-white/20 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-rose-500 bg-rose-600'
                                : 'border-gray-500'
                            }`}
                          >
                            {isSelected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <span className="text-sm font-semibold">{s.name}</span>
                        </div>
                        <span className="text-xs font-bold text-rose-300">
                          {s.priceDiff === 0
                            ? 'Base Price'
                            : s.priceDiff > 0
                            ? `+${formatCurrency(s.priceDiff)}`
                            : `-${formatCurrency(Math.abs(s.priceDiff))}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Add-ons */}
            {addOns.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Add Extra Toppings & Sides
                  </h4>
                  <span className="text-[11px] text-gray-400">Optional</span>
                </div>
                <div className="space-y-2">
                  {addOns.map((addon) => {
                    const isChecked = selectedAddOns.some(
                      (a) => a.name === addon.name
                    );
                    return (
                      <button
                        key={addon.name}
                        type="button"
                        onClick={() => toggleAddOn(addon)}
                        className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isChecked
                            ? 'border-rose-500 bg-rose-950/50 text-white'
                            : 'border-white/10 bg-[#1A1A22] hover:border-white/20 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                              isChecked
                                ? 'border-rose-500 bg-rose-600 text-white'
                                : 'border-gray-500'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-sm font-semibold">{addon.name}</span>
                        </div>
                        <span className="text-xs font-bold text-rose-300">
                          +{formatCurrency(addon.price)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Spice Level */}
            {spiceLevels.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Preferred Spice Level
                  </h4>
                  <span className="text-[11px] text-gray-400">Optional</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {spiceLevels.map((sp) => {
                    const isSelected = selectedSpice === sp;
                    return (
                      <button
                        key={sp}
                        type="button"
                        onClick={() => setSelectedSpice(sp)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'border-rose-500 bg-rose-950/60 text-rose-300 shadow-md'
                            : 'border-white/10 bg-[#1A1A22] hover:border-white/20 text-gray-300'
                        }`}
                      >
                        {sp}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Special Kitchen Request
              </h4>
              <textarea
                rows={2}
                placeholder="E.g. Sauce on the side, extra crispy, no cutlery..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full p-3 text-xs rounded-xl border border-white/10 focus:outline-none focus:border-rose-500 bg-[#1A1A22] text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-5 border-t border-white/10 bg-[#101016] flex items-center justify-between gap-4">
            {/* Quantity */}
            <div className="flex items-center gap-3 bg-[#1A1A22] px-3 py-2 rounded-xl border border-white/10 shadow-sm">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold text-white w-5 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-950/60 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Add to Cart</span>
              <span>•</span>
              <span>{formatCurrency(totalPrice)}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
