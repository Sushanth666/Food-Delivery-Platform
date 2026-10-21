import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Pipette, Palette, Sparkles } from 'lucide-react';

/**
 * Helper conversions between Hex, HSV, and RGB
 */
function hexToHsv(hex) {
  let clean = (hex || '').replace('#', '');
  if (clean.length === 3) clean = clean.split('').map((c) => c + c).join('');
  const num = parseInt(clean, 16);
  if (isNaN(num)) return { h: 320, s: 70, v: 90 };
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  return { h, s: Math.round(s * 100), v: Math.round(v * 100) };
}

function hsvToHex(h, s, v) {
  const sat = s / 100;
  const val = v / 100;
  const c = val * sat;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = val - c;
  let r = 0,
    g = 0,
    b = 0;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  const red = Math.round((r + m) * 255);
  const green = Math.round((g + m) * 255);
  const blue = Math.round((b + m) * 255);
  return (
    '#' +
    [red, green, blue]
      .map((n) => n.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

function hexToRgb(hex) {
  let clean = (hex || '').replace('#', '');
  if (clean.length === 3) clean = clean.split('').map((c) => c + c).join('');
  const num = parseInt(clean, 16);
  if (isNaN(num)) return { r: 236, g: 72, b: 153 };
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

const PRESET_FAVOURITES = [
  '#E11D48', // Ruby
  '#F43F5E', // Rose
  '#EC4899', // Pink
  '#D946EF', // Fuchsia
  '#8B5CF6', // Violet
  '#6366F1', // Indigo
  '#3B82F6', // Blue
  '#06B6D4', // Cyan
  '#10B981', // Emerald
  '#84CC16', // Lime
  '#EAB308', // Amber
  '#F97316', // Orange
  '#14B8A6', // Teal
  '#A855F7', // Purple
];

/**
 * Custom-designed luxury colour palette modal with dedicated close button
 */
export default function CustomColorPickerModal({
  isOpen,
  initialColor = '#EC4899',
  onClose,
  onSelectColor,
}) {
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [hsv, setHsv] = useState(() => hexToHsv(initialColor));
  const [hexInput, setHexInput] = useState(initialColor);
  const satValRef = useRef(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    if (isOpen && initialColor) {
      setCurrentColor(initialColor);
      setHsv(hexToHsv(initialColor));
      setHexInput(initialColor.toUpperCase());
    }
  }, [isOpen, initialColor]);

  if (!isOpen) return null;

  const updateFromHsv = (newHsv) => {
    setHsv(newHsv);
    const newHex = hsvToHex(newHsv.h, newHsv.s, newHsv.v);
    setCurrentColor(newHex);
    setHexInput(newHex);
    if (onSelectColor) onSelectColor(newHex);
  };

  const handleSatValPointer = (e) => {
    if (!satValRef.current) return;
    const rect = satValRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;

    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));

    const s = Math.round((x / rect.width) * 100);
    const v = Math.round((1 - y / rect.height) * 100);

    updateFromHsv({ ...hsv, s, v });
  };

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    handleSatValPointer(e);

    const onPointerMove = (ev) => {
      if (isDraggingRef.current) handleSatValPointer(ev);
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  const handleHueChange = (e) => {
    const h = parseInt(e.target.value, 10);
    updateFromHsv({ ...hsv, h });
  };

  const handleHexInputChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('#')) val = '#' + val;
    setHexInput(val.toUpperCase());

    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      setCurrentColor(val.toUpperCase());
      setHsv(hexToHsv(val));
      if (onSelectColor) onSelectColor(val.toUpperCase());
    }
  };

  const handlePresetSelect = (hex) => {
    setCurrentColor(hex);
    setHsv(hexToHsv(hex));
    setHexInput(hex.toUpperCase());
    if (onSelectColor) onSelectColor(hex);
  };

  const handleEyeDropper = async () => {
    if (window.EyeDropper) {
      try {
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open();
        if (result?.sRGBHex) {
          handlePresetSelect(result.sRGBHex);
        }
      } catch {
        // User cancelled eyedropper
      }
    }
  };

  const rgb = hexToRgb(currentColor);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-md bg-[#14141C] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-white"
          >
            {/* Modal Header with Dedicated Close Button */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md transition-colors"
                  style={{ backgroundColor: currentColor }}
                >
                  <Palette className="w-4 h-4 text-white drop-shadow-xs" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display text-white">
                    Custom Colour Palette
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    Pick your favourite colour for your profile badge
                  </p>
                </div>
              </div>

              {/* DEDICATED CLOSE BUTTON */}
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Colour Palette"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4">
              {/* 2D Saturation / Value Gradient Canvas */}
              <div
                ref={satValRef}
                onPointerDown={handlePointerDown}
                style={{ backgroundColor: `hsl(${hsv.h}, 100%, 50%)` }}
                className="relative h-44 w-full rounded-2xl overflow-hidden cursor-crosshair select-none shadow-inner border border-white/10"
              >
                {/* White horizontal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
                {/* Black vertical gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                {/* Draggable Circle Picker Indicator matching screenshot */}
                <div
                  className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg shadow-black/80 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform scale-105"
                  style={{
                    left: `${hsv.s}%`,
                    top: `${100 - hsv.v}%`,
                    backgroundColor: currentColor,
                  }}
                />
              </div>

              {/* Hue Rainbow Slider & Eyedropper Row */}
              <div className="flex items-center gap-3">
                {/* Optional Eyedropper Button */}
                {typeof window !== 'undefined' && 'EyeDropper' in window && (
                  <button
                    type="button"
                    onClick={handleEyeDropper}
                    title="Pick colour from screen"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer"
                  >
                    <Pipette className="w-4 h-4" />
                  </button>
                )}

                {/* Colour Swatch Preview */}
                <div
                  className="w-9 h-9 rounded-xl border border-white/20 shadow-md flex-shrink-0"
                  style={{ backgroundColor: currentColor }}
                />

                {/* Hue Rainbow Slider */}
                <div className="flex-1 relative flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={hsv.h}
                    onChange={handleHueChange}
                    className="w-full h-4 rounded-full appearance-none cursor-pointer outline-none"
                    style={{
                      background:
                        'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
                    }}
                  />
                </div>
              </div>

              {/* RGB & Hex Inputs */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                {/* Hex Input */}
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                    HEX
                  </label>
                  <input
                    type="text"
                    value={hexInput}
                    onChange={handleHexInputChange}
                    maxLength={7}
                    className="w-full px-2 py-1.5 rounded-xl bg-[#1C1C26] border border-white/15 text-xs font-mono font-bold text-center text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* R */}
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                    R
                  </label>
                  <div className="px-2 py-1.5 rounded-xl bg-[#1C1C26] border border-white/10 text-xs font-mono text-center text-gray-200">
                    {rgb.r}
                  </div>
                </div>

                {/* G */}
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                    G
                  </label>
                  <div className="px-2 py-1.5 rounded-xl bg-[#1C1C26] border border-white/10 text-xs font-mono text-center text-gray-200">
                    {rgb.g}
                  </div>
                </div>

                {/* B */}
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                    B
                  </label>
                  <div className="px-2 py-1.5 rounded-xl bg-[#1C1C26] border border-white/10 text-xs font-mono text-center text-gray-200">
                    {rgb.b}
                  </div>
                </div>
              </div>

              {/* Curated Preset Swatches */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-[11px] font-semibold text-gray-400 block mb-2">
                  Popular Vibrant Colours:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_FAVOURITES.map((hex) => {
                    const isSelected = currentColor.toUpperCase() === hex.toUpperCase();
                    return (
                      <button
                        key={hex}
                        type="button"
                        onClick={() => handlePresetSelect(hex)}
                        className={`w-7 h-7 rounded-lg transition-transform cursor-pointer flex items-center justify-center ${
                          isSelected
                            ? 'ring-2 ring-white scale-110 shadow-md shadow-black/60'
                            : 'hover:scale-108 border border-white/15 opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: hex }}
                        title={hex}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer with Close / Apply Buttons */}
            <div className="px-5 py-3.5 border-t border-white/10 bg-[#161622] flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full border border-white/20"
                  style={{ backgroundColor: currentColor }}
                />
                <span className="font-mono text-white font-bold">{currentColor}</span>
              </span>

              <div className="flex items-center gap-2">
                {/* Secondary Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-xl border border-white/15 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>

                {/* Primary Apply Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectColor) onSelectColor(currentColor);
                    onClose();
                  }}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 text-white text-xs font-black shadow-md shadow-rose-950/50 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Select Colour</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
