import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Plus, Minus, Sparkles, ChefHat } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import DietaryBadge from '../common/DietaryBadge';

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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-start justify-between bg-white sticky top-0 z-10">
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <DietaryBadge isVeg={item.isVeg} size="md" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  Customize "{item.name}"
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Base Price: {formatCurrency(item.price)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Sizes / Portions */}
            {sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Choose Portion Size
                  </h4>
                  <span className="text-[11px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
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
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                          isSelected
                            ? 'border-brand-500 bg-brand-50/50 text-gray-900 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-brand-600 bg-brand-600'
                                : 'border-gray-300'
                            }`}
                          >
                            {isSelected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <span className="text-sm font-semibold">{s.name}</span>
                        </div>
                        <span className="text-xs font-bold text-gray-600">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
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
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                          isChecked
                            ? 'border-brand-500 bg-brand-50/50 text-gray-900'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                              isChecked
                                ? 'border-brand-600 bg-brand-600 text-white'
                                : 'border-gray-300'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-sm font-semibold">{addon.name}</span>
                        </div>
                        <span className="text-xs font-bold text-brand-600">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
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
                        className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                          isSelected
                            ? 'border-rose-500 bg-rose-50 text-rose-700 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Special Kitchen Request
              </h4>
              <textarea
                rows={2}
                placeholder="E.g. Sauce on the side, extra crispy, no cutlery..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full p-3 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-gray-800"
              />
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-5 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-4">
            {/* Quantity */}
            <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-500 hover:text-brand-600 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold text-gray-900 w-5 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-500 hover:text-brand-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 py-3 px-5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
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
