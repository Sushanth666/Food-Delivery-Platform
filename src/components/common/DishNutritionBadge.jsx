import React, { useState } from 'react';
import { getDishNutritionAndBadges } from '../../utils/nutrition';
import { Flame, Activity, ShieldCheck, Info } from 'lucide-react';

export default function DishNutritionBadge({ dish, compact = false }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const data = getDishNutritionAndBadges(dish);
  if (!data) return null;

  const { nutrition, dietaryBadges } = data;

  if (compact) {
    return (
      <div className="relative inline-flex items-center gap-1.5 flex-wrap mt-2">
        {/* Calorie & Protein Pill */}
        <button
          type="button"
          onClick={() => setShowTooltip(!showTooltip)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 hover:bg-rose-950/60 border border-white/10 hover:border-rose-800/50 text-[11px] font-bold text-gray-300 transition-colors cursor-pointer"
          title="Click to view full nutritional breakdown"
        >
          <Flame className="w-3 h-3 text-amber-400" />
          <span>{nutrition.calories} kcal</span>
          <span className="text-gray-500">•</span>
          <span className="text-rose-300 font-extrabold">{nutrition.protein}g Protein</span>
        </button>

        {/* Dietary Badges */}
        {dietaryBadges.map((badge, idx) => {
          const colorClasses = {
            rose: 'bg-rose-950/60 text-rose-300 border-rose-800/40',
            emerald: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40',
            amber: 'bg-amber-950/60 text-amber-300 border-amber-800/40',
            cyan: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/40',
            purple: 'bg-purple-950/60 text-purple-300 border-purple-800/40',
            sky: 'bg-sky-950/60 text-sky-300 border-sky-800/40',
          }[badge.color] || 'bg-white/10 text-gray-300 border-white/20';

          return (
            <span
              key={idx}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border ${colorClasses} shadow-2xs`}
            >
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </span>
          );
        })}

        {/* Floating Nutrition Tooltip Popup */}
        {showTooltip && (
          <div className="absolute left-0 bottom-full mb-2 z-30 w-56 p-3 rounded-2xl bg-[#161622] text-white border border-white/20 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 pointer-events-none">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-rose-300 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-rose-400" />
                Nutrition per Serving
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-center">
              <div className="bg-black/30 p-1.5 rounded-lg border border-white/5">
                <p className="text-[9px] text-gray-400 uppercase">Energy</p>
                <p className="text-xs font-bold text-amber-400">{nutrition.calories}</p>
                <p className="text-[8px] text-gray-500">kcal</p>
              </div>
              <div className="bg-black/30 p-1.5 rounded-lg border border-white/5">
                <p className="text-[9px] text-gray-400 uppercase">Protein</p>
                <p className="text-xs font-bold text-rose-400">{nutrition.protein}</p>
                <p className="text-[8px] text-gray-500">g</p>
              </div>
              <div className="bg-black/30 p-1.5 rounded-lg border border-white/5">
                <p className="text-[9px] text-gray-400 uppercase">Carbs</p>
                <p className="text-xs font-bold text-sky-400">{nutrition.carbs}</p>
                <p className="text-[8px] text-gray-500">g</p>
              </div>
              <div className="bg-black/30 p-1.5 rounded-lg border border-white/5">
                <p className="text-[9px] text-gray-400 uppercase">Fats</p>
                <p className="text-xs font-bold text-emerald-400">{nutrition.fats}</p>
                <p className="text-[8px] text-gray-500">g</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full detailed card view (for Modal)
  return (
    <div className="p-4 rounded-2xl bg-[#1A1A24] border border-white/10 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-black uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
          <Activity className="w-4 h-4 text-rose-400" />
          <span>Dietary & Nutritional Breakdown</span>
        </span>
        <span className="text-[11px] text-gray-400 font-medium">Standard Portion</span>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20">
          <span className="text-[10px] uppercase font-bold text-gray-400">Calories</span>
          <p className="text-base font-black text-amber-400 mt-0.5">{nutrition.calories}</p>
          <span className="text-[9px] text-gray-500">kcal</span>
        </div>
        <div className="p-2.5 rounded-xl bg-black/40 border border-rose-500/20">
          <span className="text-[10px] uppercase font-bold text-gray-400">Protein</span>
          <p className="text-base font-black text-rose-400 mt-0.5">{nutrition.protein}g</p>
          <span className="text-[9px] text-gray-500">macro</span>
        </div>
        <div className="p-2.5 rounded-xl bg-black/40 border border-sky-500/20">
          <span className="text-[10px] uppercase font-bold text-gray-400">Carbs</span>
          <p className="text-base font-black text-sky-400 mt-0.5">{nutrition.carbs}g</p>
          <span className="text-[9px] text-gray-500">energy</span>
        </div>
        <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/20">
          <span className="text-[10px] uppercase font-bold text-gray-400">Fats</span>
          <p className="text-base font-black text-emerald-400 mt-0.5">{nutrition.fats}g</p>
          <span className="text-[9px] text-gray-500">healthy</span>
        </div>
      </div>

      {dietaryBadges.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-1">
          {dietaryBadges.map((badge, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-gray-200 shadow-2xs"
            >
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
